/**
 * 3D graph renderer for LLM Wiki Semantic Graph.
 * Uses Three.js + d3-force-3d + OrbitControls.
 */

import {
	WebGLRenderer, Scene, PerspectiveCamera,
	SphereGeometry, MeshBasicMaterial, Mesh,
	BufferGeometry, LineBasicMaterial, LineSegments,
	Float32BufferAttribute, Color, Raycaster, Vector2,
	SpriteMaterial, Sprite, CanvasTexture,
	Points, PointsMaterial, AdditiveBlending,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
	forceSimulation, forceLink, forceManyBody, forceCenter, forceRadial,
} from 'd3-force-3d';

export interface Node3D {
	id: string;
	title: string;
	type: string;
	domain: string;
	color: string;
	size: number;
	// injected by simulation
	x?: number; y?: number; z?: number;
	vx?: number; vy?: number; vz?: number;
}

export interface Link3D {
	source: string | Node3D;
	target: string | Node3D;
	color?: string;
}

export interface Graph3DOptions {
	onNodeClick: (id: string) => void;
	onClose:     () => void;
	linkDist:    number;
	chargeStr:   number;
	gravityStr:  number;
	nodeScale:   number;
	edgeWidth:   number;
	labelSize:   number;
	labelFadeAt: number;
}

export class Graph3D {
	private renderer!: WebGLRenderer;
	private scene!: Scene;
	private camera!: PerspectiveCamera;
	private controls!: OrbitControls;
	private animId: number | null = null;
	private raycaster = new Raycaster();
	private mouse = new Vector2(-9999, -9999);
	private nodeMeshes   = new Map<string, Mesh>();   // invisible spheres for raycasting
	private glowSprites  = new Map<string, Sprite>();  // visible star glows
	private labelSprites = new Map<string, Sprite>();
	private edgeGeo!: BufferGeometry;
	private edgeMat!: LineBasicMaterial;
	private edgeLines!: LineSegments;
	private starField!: Points;
	private simNodes: Node3D[] = [];
	get nodeIds(): string[] { return this.simNodes.map(n => n.id); }
	getNodeType(id: string): string { return this.simNodes.find(n => n.id === id)?.type ?? 'concept'; }
	private simLinks: Link3D[] = [];
	private hoveredId: string | null = null;
	private container!: HTMLElement;
	private opts!: Graph3DOptions;
	private ro: ResizeObserver | null = null;
	private sim: any = null;
	private nodeBaseSizes    = new Map<string, number>();
	private currentNodeScale = 1.0;
	private currentLabelSize = 10;
	private physicsLinkDist  = 80;
	private physicsCharge    = 120;
	private physicsGravity   = 0.04;
	private frameCount       = 0; // for twinkle animation

	init(container: HTMLElement, opts: Graph3DOptions) {
		this.container = container;
		this.opts = opts;
		this.currentNodeScale = opts.nodeScale;
		this.currentLabelSize = opts.labelSize;
		this.physicsLinkDist  = opts.linkDist;
		this.physicsCharge    = opts.chargeStr;
		this.physicsGravity   = opts.gravityStr;

		const W = container.clientWidth  || 800;
		const H = container.clientHeight || 600;

		// Renderer — deep space black background
		this.renderer = new WebGLRenderer({ antialias: true });
		this.renderer.setSize(W, H);
		this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		this.renderer.setClearColor(0x00010a, 1); // deep space
		this.renderer.domElement.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;';
		container.style.position = 'relative';
		container.appendChild(this.renderer.domElement);

		// Scene
		this.scene = new Scene();

		// Camera
		this.camera = new PerspectiveCamera(60, W / H, 0.5, 50000);
		this.camera.position.set(0, 0, 600);

		// OrbitControls
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		this.controls.enableDamping = true;
		this.controls.dampingFactor = 0.06;
		this.controls.rotateSpeed   = 0.6;
		this.controls.zoomSpeed     = 1.2;

		// Background star field
		this.buildStarField();

		// Constellation edge geometry
		this.edgeGeo = new BufferGeometry();
		this.edgeMat = new LineBasicMaterial({
			color: 0x445577,
			opacity: Math.min(0.5, 0.12 + (opts.edgeWidth / 8) * 0.38),
			transparent: true,
			depthWrite: false,
		});
		this.edgeLines = new LineSegments(this.edgeGeo, this.edgeMat);
		this.scene.add(this.edgeLines);

		// Mouse events
		this.renderer.domElement.addEventListener('mousemove', this.onMouseMove.bind(this));
		this.renderer.domElement.addEventListener('click', this.onClick.bind(this));

		// Resize
		this.ro = new ResizeObserver(() => this.onResize());
		this.ro.observe(container);

		this.updateLabelFade(opts.labelFadeAt);
		this.loop();
	}

	private buildStarField() {
		const N = 2000;
		const pos = new Float32Array(N * 3);
		for (let i = 0; i < N; i++) {
			const theta = Math.random() * Math.PI * 2;
			const phi   = Math.acos(2 * Math.random() - 1);
			const r     = 1800 + Math.random() * 800;
			pos[i*3]   = r * Math.sin(phi) * Math.cos(theta);
			pos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
			pos[i*3+2] = r * Math.cos(phi);
		}
		const geo = new BufferGeometry();
		geo.setAttribute('position', new Float32BufferAttribute(pos, 3));
		const mat = new PointsMaterial({
			color: 0xd0d8f0,
			size: 1.0,
			sizeAttenuation: true,
			transparent: true,
			opacity: 0.5,
			depthWrite: false,
		});
		this.starField = new Points(geo, mat);
		this.scene.add(this.starField);
	}

	/** Small sharp glow — professional star look, not cartoon */
	private makeGlowCanvas(color: string, sz = 64): HTMLCanvasElement {
		const c = document.createElement('canvas');
		c.width = c.height = sz;
		const ctx = c.getContext('2d')!;
		const half = sz / 2;
		const grad = ctx.createRadialGradient(half, half, 0, half, half, half);
		grad.addColorStop(0.00, '#ffffff');        // sharp white core
		grad.addColorStop(0.12, color);            // color ring, tight
		grad.addColorStop(0.35, color + '44');     // very faint halo
		grad.addColorStop(1.00, 'rgba(0,0,0,0)');
		ctx.fillStyle = grad;
		ctx.fillRect(0, 0, sz, sz);
		return c;
	}

	setData(nodes: Node3D[], links: Link3D[]) {
		// Clear old objects
		for (const m of this.nodeMeshes.values())  this.scene.remove(m);
		for (const s of this.glowSprites.values())  this.scene.remove(s);
		for (const s of this.labelSprites.values()) this.scene.remove(s);
		this.nodeMeshes.clear();
		this.glowSprites.clear();
		this.labelSprites.clear();
		this.nodeBaseSizes.clear();

		this.simNodes = nodes;
		this.simLinks = links;

		// Invisible sphere for raycasting only
		const hitGeo = new SphereGeometry(1, 6, 4);
		const hitMat = new MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false });

		for (const nd of nodes) {
			// Raycasting sphere (invisible)
			const mesh = new Mesh(hitGeo.clone(), hitMat.clone());
			const baseScale = nd.size * 5;
			this.nodeBaseSizes.set(nd.id, baseScale);
			mesh.scale.setScalar(baseScale * this.currentNodeScale);
			mesh.userData.id = nd.id;
			this.nodeMeshes.set(nd.id, mesh);
			this.scene.add(mesh);

			// Glow sprite — compact star, not oversized
			const glowCanvas = this.makeGlowCanvas(nd.color, 64);
			const glowTex = new CanvasTexture(glowCanvas);
			const glowMat = new SpriteMaterial({
				map: glowTex,
				blending: AdditiveBlending,
				transparent: true,
				depthWrite: false,
			});
			const glow = new Sprite(glowMat);
			const glowScale = baseScale * this.currentNodeScale * 3.5;
			glow.scale.setScalar(glowScale);
			glow.userData.id = nd.id;
			this.glowSprites.set(nd.id, glow);
			this.scene.add(glow);

			// Label — clean, readable
			const label = this.makeLabel(nd.title, this.currentLabelSize);
			label.userData.id = nd.id;
			this.labelSprites.set(nd.id, label);
			this.scene.add(label);
		}

		// Preallocate edge buffer
		const buf = new Float32Array(links.length * 6);
		this.edgeGeo.setAttribute('position', new Float32BufferAttribute(buf, 3));
		this.edgeGeo.setDrawRange(0, 0);

		this.runSim(this.physicsLinkDist, this.physicsCharge, this.physicsGravity);
	}

	private runSim(linkDist = 80, chargeStr = 120, gravityStr = 0.08) {
		// Target radius: nodes spread across a sphere of ~200 units
		const r = Math.max(100, Math.sqrt(this.simNodes.length) * 20);
		this.sim = forceSimulation(this.simNodes, 3)
			.force('link', forceLink(this.simLinks)
				.id((d: any) => d.id)
				.distance(linkDist).strength(0.4))
			.force('charge', forceManyBody().strength(-chargeStr))
			.force('center', forceCenter(0, 0, 0))
			.force('radial', (forceRadial as any)(r, 0, 0, 0).strength(gravityStr))
			.alphaDecay(0.025);

		this.sim.on('tick', () => this.updatePositions());
	}

	// ── Live update methods (called by slider handlers) ───────────────

	updateLinkDist(val: number) {
		this.sim?.force('link')?.distance(val);
		this.sim?.alpha(0.4).restart();
	}

	updateCharge(val: number) {
		this.sim?.force('charge')?.strength(-val);
		this.sim?.alpha(0.4).restart();
	}

	updateGravity(val: number) {
		this.sim?.force('radial')?.strength(val);
		this.sim?.alpha(0.3).restart();
	}

	updateNodeScale(scale: number) {
		this.currentNodeScale = scale;
		for (const [id, mesh] of this.nodeMeshes) {
			const base = this.nodeBaseSizes.get(id) ?? 5;
			mesh.scale.setScalar(base * scale);
			const glow = this.glowSprites.get(id);
			if (glow) glow.scale.setScalar(base * scale * 3.5);
		}
	}

	updateEdgeWidth(val: number) {
		this.edgeMat.opacity = Math.min(0.5, 0.12 + (val / 8) * 0.38);
	}

	updateLabelSize(size: number) {
		this.currentLabelSize = size;
		for (const [, sprite] of this.labelSprites) {
			const canvas = (sprite.material as SpriteMaterial).map?.image as HTMLCanvasElement;
			if (!canvas) continue;
			sprite.scale.set(canvas.width * size / 95, size * 1.4, 1);
		}
	}

	updateLabelFade(fadeAt: number) {
		// In 3D: show/hide labels based on fadeAt threshold vs camera distance-based scale
		// Simple proxy: if fadeAt < 0.3 → hide labels, else show
		const show = fadeAt > 0.15;
		for (const s of this.labelSprites.values()) s.visible = show;
	}

	private updatePositions() {
		// Move raycasting spheres and glow sprites
		for (const nd of this.simNodes) {
			const mesh  = this.nodeMeshes.get(nd.id);
			const glow  = this.glowSprites.get(nd.id);
			const label = this.labelSprites.get(nd.id);
			if (!mesh) continue;
			const x = nd.x ?? 0, y = nd.y ?? 0, z = nd.z ?? 0;
			mesh.position.set(x, y, z);
			if (glow)  glow.position.set(x, y, z);
			if (label) label.position.set(x + nd.size * 7, y + nd.size * 5, z);
		}

		// Update constellation edge lines
		const pos = this.edgeGeo.getAttribute('position') as any;
		let i = 0;
		for (const lk of this.simLinks) {
			const s = lk.source as Node3D;
			const t = lk.target as Node3D;
			if (!s || !t || s.x == null) continue;
			pos.array[i++] = s.x; pos.array[i++] = s.y ?? 0; pos.array[i++] = s.z ?? 0;
			pos.array[i++] = t.x; pos.array[i++] = t.y ?? 0; pos.array[i++] = t.z ?? 0;
		}
		pos.needsUpdate = true;
		this.edgeGeo.setDrawRange(0, i / 3);
	}

	highlight(ids: Set<string>, dimOpacity = 0.08) {
		const any = ids.size > 0;
		for (const [id, glow] of this.glowSprites) {
			const mat = glow.material as SpriteMaterial;
			mat.opacity = (!any || ids.has(id)) ? 1 : dimOpacity;
		}
	}

	private makeLabel(text: string, size = 10): Sprite {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d')!;
		const label = text.length > 24 ? text.slice(0, 22) + '…' : text;
		ctx.font = '24px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
		const w = ctx.measureText(label).width + 16;
		canvas.width  = w;
		canvas.height = 40;
		ctx.font = '24px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
		ctx.fillStyle = 'rgba(220, 230, 255, 0.90)';
		ctx.fillText(label, 8, 30);
		const tex = new CanvasTexture(canvas);
		const mat = new SpriteMaterial({ map: tex, transparent: true, depthWrite: false });
		const sprite = new Sprite(mat);
		sprite.scale.set(w * size / 95, size * 1.3, 1);
		return sprite;
	}

	setLabelVisibility(visible: boolean) {
		for (const s of this.labelSprites.values()) s.visible = visible;
	}

	private onMouseMove(ev: MouseEvent) {
		const rect = this.renderer.domElement.getBoundingClientRect();
		this.mouse.set(
			((ev.clientX - rect.left)  / rect.width)  * 2 - 1,
			-((ev.clientY - rect.top) / rect.height) * 2 + 1,
		);
	}

	private onClick(ev: MouseEvent) {
		// Raycasting — find hovered node
		this.raycaster.setFromCamera(this.mouse, this.camera);
		const meshArr = [...this.nodeMeshes.values()];
		const hits = this.raycaster.intersectObjects(meshArr);
		if (hits.length > 0) {
			const id = hits[0].object.userData.id as string;
			if (id) this.opts.onNodeClick(id);
		}
	}

	private loop() {
		this.animId = requestAnimationFrame(() => this.loop());
		this.controls.update();
		this.frameCount++;

		// Very slow star field drift — barely noticeable, adds depth
		if (this.starField) this.starField.rotation.y += 0.000025;

		// Hover detection — glow sprite brightens slightly
		this.raycaster.setFromCamera(this.mouse, this.camera);
		const hits = this.raycaster.intersectObjects([...this.nodeMeshes.values()]);
		const newHover = hits.length > 0 ? (hits[0].object.userData.id as string) : null;
		if (newHover !== this.hoveredId) {
			if (this.hoveredId) {
				const g = this.glowSprites.get(this.hoveredId);
				if (g) { const base = this.nodeBaseSizes.get(this.hoveredId) ?? 5; g.scale.setScalar(base * this.currentNodeScale * 3.5); }
			}
			if (newHover) {
				const g = this.glowSprites.get(newHover);
				if (g) { const base = this.nodeBaseSizes.get(newHover) ?? 5; g.scale.setScalar(base * this.currentNodeScale * 5.5); }
			}
			this.hoveredId = newHover;
			this.renderer.domElement.style.cursor = newHover ? 'pointer' : 'default';
		}

		this.renderer.render(this.scene, this.camera);
	}

	private onResize() {
		const W = this.container.clientWidth;
		const H = this.container.clientHeight;
		if (!W || !H) return;
		this.camera.aspect = W / H;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(W, H);
	}

	/** Update node star glow colors in-place */
	updateColors(colorMap: Map<string, string>) {
		for (const [id, glow] of this.glowSprites) {
			const color = colorMap.get(id);
			if (!color) continue;
			const canvas = this.makeGlowCanvas(color, 128);
			const mat = glow.material as SpriteMaterial;
			mat.map?.dispose();
			mat.map = new CanvasTexture(canvas);
			mat.needsUpdate = true;
		}
	}

	/** Save camera position + OrbitControls target for restoring after a re-render */
	getCameraState(): { px: number; py: number; pz: number; tx: number; ty: number; tz: number } {
		return {
			px: this.camera.position.x, py: this.camera.position.y, pz: this.camera.position.z,
			tx: this.controls.target.x,  ty: this.controls.target.y,  tz: this.controls.target.z,
		};
	}

	setCameraState(s: { px: number; py: number; pz: number; tx: number; ty: number; tz: number }) {
		this.camera.position.set(s.px, s.py, s.pz);
		this.controls.target.set(s.tx, s.ty, s.tz);
		this.controls.update();
	}

	dispose() {
		if (this.animId != null) cancelAnimationFrame(this.animId);
		this.ro?.disconnect();
		this.controls.dispose();
		this.renderer.dispose();
		this.renderer.domElement.remove();
		for (const m of this.nodeMeshes.values()) {
			(m.geometry as SphereGeometry).dispose();
			(m.material as MeshBasicMaterial).dispose();
		}
		for (const s of this.glowSprites.values()) {
			(s.material as SpriteMaterial).map?.dispose();
			(s.material as SpriteMaterial).dispose();
		}
		for (const s of this.labelSprites.values()) {
			(s.material as SpriteMaterial).map?.dispose();
			(s.material as SpriteMaterial).dispose();
		}
		(this.starField?.material as PointsMaterial)?.dispose();
		this.starField?.geometry?.dispose();
		this.edgeGeo.dispose();
		this.edgeMat.dispose();
	}
}
