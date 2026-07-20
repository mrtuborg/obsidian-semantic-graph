/**
 * 3D graph renderer for LLM Wiki Semantic Graph.
 * Uses Three.js + d3-force-3d + OrbitControls.
 */

import {
	WebGLRenderer, Scene, PerspectiveCamera,
	SphereGeometry, MeshBasicMaterial, Mesh,
	BufferGeometry, LineBasicMaterial, LineSegments,
	Float32BufferAttribute, Color, Raycaster, Vector2,
	Object3D, SpriteMaterial, Sprite, CanvasTexture,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
	forceSimulation, forceLink, forceManyBody, forceCenter, forceZ,
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
	onClose: () => void;
}

export class Graph3D {
	private renderer!: WebGLRenderer;
	private scene!: Scene;
	private camera!: PerspectiveCamera;
	private controls!: OrbitControls;
	private animId: number | null = null;
	private raycaster = new Raycaster();
	private mouse = new Vector2(-9999, -9999);
	private nodeMeshes = new Map<string, Mesh>();
	private labelSprites = new Map<string, Sprite>();
	private edgeGeo!: BufferGeometry;
	private edgeMat!: LineBasicMaterial;
	private edgeLines!: LineSegments;
	private simNodes: Node3D[] = [];
	private simLinks: Link3D[] = [];
	private hoveredId: string | null = null;
	private container!: HTMLElement;
	private opts!: Graph3DOptions;
	private ro: ResizeObserver | null = null;

	init(container: HTMLElement, opts: Graph3DOptions) {
		this.container = container;
		this.opts = opts;

		const W = container.clientWidth  || 800;
		const H = container.clientHeight || 600;

		// Renderer
		this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
		this.renderer.setSize(W, H);
		this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		this.renderer.domElement.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;';
		container.style.position = 'relative';
		container.appendChild(this.renderer.domElement);

		// Scene
		this.scene = new Scene();
		this.scene.background = null; // transparent — uses CSS background

		// Camera
		this.camera = new PerspectiveCamera(60, W / H, 0.5, 50000);
		this.camera.position.set(0, 0, 600);

		// OrbitControls — mouse drag rotates, scroll zooms
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		this.controls.enableDamping = true;
		this.controls.dampingFactor = 0.06;
		this.controls.rotateSpeed    = 0.6;
		this.controls.zoomSpeed      = 1.2;

		// Edge geometry (updated each tick)
		this.edgeGeo = new BufferGeometry();
		this.edgeMat = new LineBasicMaterial({ vertexColors: false, color: 0x888888, opacity: 0.35, transparent: true });
		this.edgeLines = new LineSegments(this.edgeGeo, this.edgeMat);
		this.scene.add(this.edgeLines);

		// Mouse events
		this.renderer.domElement.addEventListener('mousemove', this.onMouseMove.bind(this));
		this.renderer.domElement.addEventListener('click', this.onClick.bind(this));

		// Resize
		this.ro = new ResizeObserver(() => this.onResize());
		this.ro.observe(container);

		this.loop();
	}

	setData(nodes: Node3D[], links: Link3D[]) {
		// Remove old meshes
		for (const m of this.nodeMeshes.values()) this.scene.remove(m);
		for (const s of this.labelSprites.values()) this.scene.remove(s);
		this.nodeMeshes.clear();
		this.labelSprites.clear();

		this.simNodes = nodes;
		this.simLinks = links;

		const geo = new SphereGeometry(1, 8, 6);
		for (const nd of nodes) {
			const mat = new MeshBasicMaterial({ color: new Color(nd.color) });
			const mesh = new Mesh(geo.clone(), mat);
			mesh.scale.setScalar(nd.size * 3.5);
			mesh.userData.id = nd.id;
			this.nodeMeshes.set(nd.id, mesh);
			this.scene.add(mesh);

			// Label sprite
			const sprite = this.makeLabel(nd.title);
			sprite.userData.id = nd.id;
			this.labelSprites.set(nd.id, sprite);
			this.scene.add(sprite);
		}

		// Preallocate edge positions buffer
		const buf = new Float32Array(links.length * 6);
		this.edgeGeo.setAttribute('position', new Float32BufferAttribute(buf, 3));
		this.edgeGeo.setDrawRange(0, 0);

		// Run simulation
		this.runSim();
	}

	private runSim() {
		const sim = forceSimulation(this.simNodes, 3)
			.force('link', forceLink(this.simLinks)
				.id((d: any) => d.id)
				.distance(80).strength(0.4))
			.force('charge', forceManyBody().strength(-120))
			.force('center', forceCenter(0, 0, 0))
			.force('z', forceZ(0).strength(0.04))
			.alphaDecay(0.025);

		sim.on('tick', () => this.updatePositions());
	}

	private updatePositions() {
		// Update node mesh positions
		for (const nd of this.simNodes) {
			const mesh   = this.nodeMeshes.get(nd.id);
			const sprite = this.labelSprites.get(nd.id);
			if (!mesh) continue;
			const x = nd.x ?? 0, y = nd.y ?? 0, z = nd.z ?? 0;
			mesh.position.set(x, y, z);
			if (sprite) sprite.position.set(x + nd.size * 5, y + nd.size * 5, z);
		}

		// Update edge line buffer
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
		for (const [id, mesh] of this.nodeMeshes) {
			const mat = mesh.material as MeshBasicMaterial;
			if (!any || ids.has(id)) {
				mat.opacity = 1; mat.transparent = false;
			} else {
				mat.opacity = dimOpacity; mat.transparent = true;
			}
		}
	}

	private makeLabel(text: string): Sprite {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d')!;
		const label = text.length > 24 ? text.slice(0, 22) + '…' : text;
		ctx.font = '28px sans-serif';
		const w = ctx.measureText(label).width + 16;
		canvas.width  = w;
		canvas.height = 48;
		ctx.font = '28px sans-serif';
		ctx.fillStyle = 'rgba(255,255,255,0.92)';
		ctx.fillText(label, 8, 36);
		const tex = new CanvasTexture(canvas);
		const mat = new SpriteMaterial({ map: tex, transparent: true, depthWrite: false });
		const sprite = new Sprite(mat);
		sprite.scale.set(w * 0.3, 14, 1);
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

		// Hover highlight via raycasting
		this.raycaster.setFromCamera(this.mouse, this.camera);
		const hits = this.raycaster.intersectObjects([...this.nodeMeshes.values()]);
		const newHover = hits.length > 0 ? (hits[0].object.userData.id as string) : null;
		if (newHover !== this.hoveredId) {
			if (this.hoveredId) {
				const m = this.nodeMeshes.get(this.hoveredId);
				if (m) m.scale.divideScalar(1.4);
			}
			if (newHover) {
				const m = this.nodeMeshes.get(newHover);
				if (m) m.scale.multiplyScalar(1.4);
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
		for (const s of this.labelSprites.values()) {
			(s.material as SpriteMaterial).map?.dispose();
			(s.material as SpriteMaterial).dispose();
		}
		this.edgeGeo.dispose();
		this.edgeMat.dispose();
	}
}
