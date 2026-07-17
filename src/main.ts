import { Plugin, ItemView, WorkspaceLeaf, setIcon } from 'obsidian';
import { select } from 'd3-selection';
import {
	forceSimulation, forceLink, forceManyBody,
	forceCenter, forceCollide, forceX, forceY,
	SimulationNodeDatum, SimulationLinkDatum,
	ForceLink,
} from 'd3-force';
import { zoom, zoomIdentity, ZoomBehavior } from 'd3-zoom';
import { drag } from 'd3-drag';

const VIEW_TYPE = 'llm-wiki-semantic-graph';

// Tableau10 — professional data viz palette, designed by color scientists
const NODE_COLORS: Record<string, string> = {
	axiom:     '#4E79A7',  // steel blue      — invariants
	rule:      '#4E79A7',  // steel blue      — invariants
	entity:    '#59A14F',  // sage green      — objects
	concept:   '#76B7B2',  // slate teal      — ideas
	index:     '#BAB0AC',  // warm gray       — meta
	process:   '#F28E2B',  // warm amber      — actions
	decision:  '#E15759',  // muted red       — choices
	pattern:   '#B07AA1',  // dusty purple    — structures
	overview:  '#9C755F',  // earth brown     — overviews
	synthesis: '#9C755F',  // earth brown     — synthesis
};

// Shape encodes epistemic category
const NODE_SHAPES: Record<string, string> = {
	axiom: 'diamond', rule: 'diamond',               // invariants
	process: 'square', decision: 'square',            // actions
	pattern: 'hexagon', overview: 'hexagon', synthesis: 'hexagon',  // structures
	entity: 'circle', concept: 'circle', index: 'circle',           // objects
};
const LAYER_ORDER = ['Axiom','Entity','Process','Pattern','Method','Concept','Rule','Overview','Decision','Synthesis'];
const EXCLUDED_PATHS = [
	'wiki/templates/','wiki/graph/','wiki/compiled/',
	'wiki/updates/','wiki/Meta/','pipeline/','schema/','ontology/','domains/','tools/','docs/',
];
const EDGE_RE = /\*\*(\w+)\*\*\s*→\s*\[\[([^\]|]+)/g;

// ─── Types ────────────────────────────────────────────────────────────────────
interface WikiNode extends SimulationNodeDatum {
	id: string; title: string; type: string; domain: string;
}
interface WikiEdge extends SimulationLinkDatum<WikiNode> { label: string; }
interface Analytics {
	n: number; m: number; density: number; avgDeg: number;
	orphans: number; orphanIds: string[];
	layers: { name: string; count: number; color: string }[];
	edgeTypes: { label: string; count: number }[];
	hubs: { id: string; deg: number; type: string }[];
	domains: { name: string; count: number }[];
	degreeOf: Map<string, number>;
}

// ─── View ─────────────────────────────────────────────────────────────────────
interface GraphSettings {
	showNodeLabels: boolean;
	showEdgeLabels: boolean;
	showArrows:     boolean;
	sidebarOpen:    boolean;
	hiddenTypes:    string[];
	linkDist:       number;
	chargeStr:      number;
	gravityStr:     number;
	searchQuery:    string;
}
const DEFAULT_SETTINGS: GraphSettings = {
	showNodeLabels: true,
	showEdgeLabels: true,
	showArrows:     true,
	sidebarOpen:    false,
	hiddenTypes:    [],
	linkDist:       60,
	chargeStr:      120,
	gravityStr:     0.03,
	searchQuery:    '',
};

class SemanticGraphView extends ItemView {
	private plugin: LLMWikiSemanticGraph;
	private nodes: WikiNode[] = [];
	private edges: WikiEdge[] = [];
	private analytics: Analytics | null = null;
	private sim: ReturnType<typeof forceSimulation> | null = null;
	private zoomBehavior!: ZoomBehavior<SVGSVGElement, unknown>;

	// visibility state
	private showNodeLabels = true;
	private showEdgeLabels = true;
	private showArrows     = true;
	private sidebarOpen    = false;
	private hiddenTypes    = new Set<string>();
	private selectedId: string | null = null;
	private searchQuery    = '';

	// physics state
	private linkDist   = 60;
	private chargeStr  = 120;
	private gravityStr = 0.03;

	// zoom state — persisted across refreshes
	private savedTransform: { k: number; x: number; y: number } | null = null;

	// live D3 selections
	private selNodeEl:    any = null;
	private selEdgeLine:  any = null;
	private selEdgeLabel: any = null;
	private selNodeLabel: any = null;
	private focusNodeFn: ((id: string) => void) | null = null;
	private svgEl: SVGSVGElement | null = null;

	// adjacency for dim-on-select
	private neighborSet: Set<string> = new Set();

	// auto-refresh
	private refreshTimer: number | null = null;

	constructor(leaf: any, plugin: LLMWikiSemanticGraph) {
		super(leaf);
		this.plugin = plugin;
	}

	private async loadSettings() {
		const data = await this.plugin.loadData() as Partial<GraphSettings> | null;
		if (!data) return;
		const s = { ...DEFAULT_SETTINGS, ...data };
		this.showNodeLabels = s.showNodeLabels;
		this.showEdgeLabels = s.showEdgeLabels;
		this.showArrows     = s.showArrows;
		this.sidebarOpen    = s.sidebarOpen;
		this.hiddenTypes    = new Set(s.hiddenTypes);
		this.linkDist       = s.linkDist;
		this.chargeStr      = s.chargeStr;
		this.gravityStr     = s.gravityStr;
		this.searchQuery    = s.searchQuery;
	}

	private saveSettings() {
		const s: GraphSettings = {
			showNodeLabels: this.showNodeLabels,
			showEdgeLabels: this.showEdgeLabels,
			showArrows:     this.showArrows,
			sidebarOpen:    this.sidebarOpen,
			hiddenTypes:    [...this.hiddenTypes],
			linkDist:       this.linkDist,
			chargeStr:      this.chargeStr,
			gravityStr:     this.gravityStr,
			searchQuery:    this.searchQuery,
		};
		this.plugin.saveData(s);
	}

	getViewType()    { return VIEW_TYPE; }
	getDisplayText() { return 'Semantic Graph'; }
	getIcon()        { return 'git-fork'; }

	async onOpen() {
		await this.loadSettings();
		await this.buildGraph();
		this.render();
		// Auto-refresh on vault changes (debounced 1.5s)
		this.registerEvent(this.app.vault.on('modify', () => this.scheduleRefresh()));
		this.registerEvent(this.app.vault.on('create', () => this.scheduleRefresh()));
		this.registerEvent(this.app.vault.on('delete', () => this.scheduleRefresh()));
		this.registerEvent(this.app.vault.on('rename', () => this.scheduleRefresh()));
	}

	async onClose() {
		this.sim?.stop();
		if (this.refreshTimer !== null) window.clearTimeout(this.refreshTimer);
	}

	private captureZoom() {
		if (this.svgEl && this.zoomBehavior) {
			const t = this.zoomBehavior.transform(select(this.svgEl) as any);
			this.savedTransform = { k: t.k, x: t.x, y: t.y };
		}
	}

	private scheduleRefresh() {
		if (this.refreshTimer !== null) window.clearTimeout(this.refreshTimer);
		this.refreshTimer = window.setTimeout(async () => {
			this.refreshTimer = null;
			this.captureZoom();
			await this.buildGraph();
			this.render();
		}, 1500);
	}

	private async manualRefresh() {
		if (this.refreshTimer !== null) { window.clearTimeout(this.refreshTimer); this.refreshTimer = null; }
		this.captureZoom();
		await this.buildGraph();
		this.render();
	}

	// ── 1. Parse vault ────────────────────────────────────────────────
	async buildGraph() {
		const nodeMap = new Map<string, WikiNode>();
		const rawEdges: { src: string; tgt: string; label: string }[] = [];
		const files = this.app.vault.getMarkdownFiles().filter(f =>
			f.path.startsWith('wiki/') && !EXCLUDED_PATHS.some(ex => f.path.includes(ex)));

		for (const file of files) {
			const fm = this.app.metadataCache.getFileCache(file)?.frontmatter ?? {};
			nodeMap.set(file.basename, {
				id: file.basename,
				title:  (fm['title']  ?? file.basename) as string,
				type:   ((fm['type'] ?? 'unknown') as string).toLowerCase(),
				domain: (fm['domain'] ?? '') as string,
			});
			const content = await this.app.vault.cachedRead(file);
			let m: RegExpExecArray | null;
			EDGE_RE.lastIndex = 0;
			while ((m = EDGE_RE.exec(content)) !== null)
				rawEdges.push({ src: file.basename, tgt: m[2].trim(), label: m[1] });
		}
		this.nodes = Array.from(nodeMap.values());
		this.edges = rawEdges
			.filter(e => nodeMap.has(e.src) && nodeMap.has(e.tgt))
			.map(e => ({ source: e.src, target: e.tgt, label: e.label }));
		this.analytics = this.computeAnalytics();
	}

	// ── 2. Analytics ──────────────────────────────────────────────────
	private computeAnalytics(): Analytics {
		const degreeOf = new Map<string, number>();
		for (const e of this.edges) {
			const s = e.source as string, t = e.target as string;
			degreeOf.set(s, (degreeOf.get(s)??0)+1);
			degreeOf.set(t, (degreeOf.get(t)??0)+1);
		}
		const n = this.nodes.length, m = this.edges.length;
		const density  = n>1 ? +(m/(n*(n-1))).toFixed(4) : 0;
		const avgDeg   = n>0 ? +([...degreeOf.values()].reduce((a,b)=>a+b,0)/n).toFixed(2) : 0;
		const orphanIds = this.nodes.filter(nd=>!degreeOf.has(nd.id)).map(nd=>nd.id);

		const typeCounts = new Map<string,number>();
		for (const nd of this.nodes) typeCounts.set(nd.type,(typeCounts.get(nd.type)??0)+1);
		const layers = LAYER_ORDER.map(name=>({
			name, color: NODE_COLORS[name.toLowerCase()]??'#888',
			count: typeCounts.get(name.toLowerCase())??0,
		}));

		const edgeCnt = new Map<string,number>();
		for (const e of this.edges) edgeCnt.set(e.label,(edgeCnt.get(e.label)??0)+1);
		const edgeTypes = [...edgeCnt.entries()].sort((a,b)=>b[1]-a[1]).map(([label,count])=>({label,count}));

		const hubs = this.nodes.filter(nd=>degreeOf.has(nd.id))
			.sort((a,b)=>(degreeOf.get(b.id)??0)-(degreeOf.get(a.id)??0)).slice(0,10)
			.map(nd=>({id:nd.id,deg:degreeOf.get(nd.id)!,type:nd.type}));

		const domainCnt = new Map<string,number>();
		for (const nd of this.nodes) if(nd.domain) domainCnt.set(nd.domain,(domainCnt.get(nd.domain)??0)+1);
		const domains = [...domainCnt.entries()].sort((a,b)=>b[1]-a[1]).map(([name,count])=>({name,count}));

		return {n,m,density,avgDeg,orphans:orphanIds.length,orphanIds,layers,edgeTypes,hubs,domains,degreeOf};
	}

	// ── 3. Dim helpers ────────────────────────────────────────────────
	private buildAdjacency(simEdges: {source:WikiNode;target:WikiNode}[]) {
		const adj = new Map<string, Set<string>>();
		for (const e of simEdges) {
			if (!adj.has(e.source.id)) adj.set(e.source.id, new Set());
			if (!adj.has(e.target.id)) adj.set(e.target.id, new Set());
			adj.get(e.source.id)!.add(e.target.id);
			adj.get(e.target.id)!.add(e.source.id);
		}
		return adj;
	}

	private applyVisibility(adj: Map<string,Set<string>>) {
		if (!this.selNodeEl) return;
		const sel  = this.selectedId;
		const neighbors = sel ? (adj.get(sel) ?? new Set()) : null;

		// node opacity
		this.selNodeEl.style('opacity', (d: WikiNode) => {
			if (this.hiddenTypes.has(d.type)) return '0';
			if (!sel) return '1';
			return d.id === sel || neighbors!.has(d.id) ? '1' : '0.07';
		}).style('display', (d: WikiNode) =>
			this.hiddenTypes.has(d.type) ? 'none' : null
		);

		// edge opacity
		const edgeOpacity = (e: any) => {
			const s = (e.source as WikiNode), t = (e.target as WikiNode);
			if (this.hiddenTypes.has(s.type) || this.hiddenTypes.has(t.type)) return '0';
			if (!sel) return '0.55';
			return (s.id===sel || t.id===sel) ? '0.9' : '0.04';
		};

		this.selEdgeLine?.style('opacity', edgeOpacity);
		this.selEdgeLabel?.style('opacity', edgeOpacity)
			.style('display', this.showEdgeLabels ? null : 'none');
		this.selNodeLabel?.style('display', this.showNodeLabels ? null : 'none');
		this.selEdgeLine?.attr('marker-end', this.showArrows ? 'url(#llm-arrow)' : null);
	}

	// ── 4. Render ─────────────────────────────────────────────────────
	render() {
		const container = this.containerEl.children[1] as HTMLElement;
		container.empty();
		container.addClass('llm-graph-container');
		const A = this.analytics!;

		// ── Toolbar ────────────────────────────────────────────────────
		const toolbar = container.createDiv({ cls: 'llm-graph-toolbar' });

		// ── Search bar ───────────────────────────────────────────────────
		const searchBar = container.createDiv({ cls: 'llm-graph-searchbar' });
		const searchInput = searchBar.createEl('input', {
			cls: 'llm-graph-search',
			attr: { type: 'text', placeholder: 'Search nodes… (title, type, domain)' }
		});
		// Clear button
		const searchClear = searchBar.createEl('button', { cls: 'llm-graph-search-clear', text: '×' });
		searchClear.style.display = 'none';

		// Restore saved search query
		if (this.searchQuery) {
			searchInput.value = this.searchQuery;
			searchClear.style.display = 'flex';
		}

		const applySearch = () => {
			const q = this.searchQuery.toLowerCase().trim();
			searchClear.style.display = q ? 'flex' : 'none';
			if (!this.selNodeEl) return;
			if (!q) {
				this.selNodeEl.style('opacity', null).style('pointer-events', null);
				this.selEdgeLine?.style('opacity', null);
				this.selEdgeLabel?.style('opacity', null);
				return;
			}
			const matchIds = new Set(
				this.nodes
					.filter(n =>
						n.title.toLowerCase().includes(q) ||
						n.type.toLowerCase().includes(q)  ||
						n.domain.toLowerCase().includes(q)
					)
					.map(n => n.id)
			);
			this.selNodeEl
				.style('opacity',        (d: WikiNode) => matchIds.has(d.id) ? '1' : '0.07')
				.style('pointer-events', (d: WikiNode) => matchIds.has(d.id) ? null  : 'none');
			this.selEdgeLine?.style('opacity', (d: any) =>
				matchIds.has((d.source as WikiNode).id) || matchIds.has((d.target as WikiNode).id) ? '0.6' : '0.05');
			this.selEdgeLabel?.style('opacity', (d: any) =>
				matchIds.has((d.source as WikiNode).id) || matchIds.has((d.target as WikiNode).id) ? '1' : '0');
		};

		searchInput.addEventListener('input', () => { this.searchQuery = searchInput.value; applySearch(); this.saveSettings(); });
		searchClear.addEventListener('click', () => { searchInput.value = ''; this.searchQuery = ''; applySearch(); searchInput.focus(); this.saveSettings(); });

		const mkBtn = (icon: string, label: string, active = false) => {
			const b = toolbar.createEl('button', { cls: 'llm-graph-btn' });
			setIcon(b, icon);
			b.createSpan({ text: label });
			b.setAttribute('aria-label', label);
			if (active) b.addClass('llm-graph-btn--active');
			return b;
		};
		const resetBtn    = mkBtn('rotate-ccw',  'Reset zoom');
		const refreshBtn  = mkBtn('refresh-cw',  'Refresh');
		const nlBtn       = mkBtn('type',         'Nodes',     true);
		const elBtn    = mkBtn('minus',        'Edges',     true);
		const arBtn    = mkBtn('arrow-right',  'Arrows',    true);
		const sbBtn    = mkBtn('bar-chart-2',  'Analytics');
		toolbar.createSpan({ cls:'llm-graph-stats',
			text:`${A.n} nodes · ${A.m} edges · density ${A.density}` });

		// ── Type filter pills (second toolbar row) ──────────────────────
		const typeBar = container.createDiv({ cls: 'llm-graph-typebar' });
		typeBar.createSpan({ cls: 'llm-graph-typebar-label', text: 'Show:' });
		const presentTypes = [...new Set(this.nodes.map(n=>n.type))].sort();
		const pillMap = new Map<string, HTMLElement>();

		// Returns a tiny SVG path string for each shape
		const pillShapeSVG = (shape: string, color: string): string => {
			const f = `fill="${color}"`;
			const s = `stroke="${color}" fill="none" stroke-width="1.5"`;
			switch (shape) {
				case 'diamond':
					return `<svg width="10" height="10" viewBox="0 0 10 10"><rect ${f} x="1.5" y="1.5" width="7" height="7" rx="1" transform="rotate(45 5 5)"/></svg>`;
				case 'square':
					return `<svg width="10" height="10" viewBox="0 0 10 10"><rect ${f} x="1.5" y="1.5" width="7" height="7" rx="1.5"/></svg>`;
				case 'hexagon':
					return `<svg width="10" height="10" viewBox="0 0 10 10"><polygon ${f} points="5,1 8.7,3 8.7,7 5,9 1.3,7 1.3,3"/></svg>`;
				default: // circle
					return `<svg width="10" height="10" viewBox="0 0 10 10"><circle ${f} cx="5" cy="5" r="4"/></svg>`;
			}
		};

		for (const t of presentTypes) {
			const color = NODE_COLORS[t] ?? '#888';
			const shape = NODE_SHAPES[t] ?? 'circle';
			const pill  = typeBar.createEl('button', { cls: 'llm-type-pill' });
			pill.style.setProperty('--pill-color', color);
			pill.setAttribute('aria-label', `Toggle ${t} nodes`);
			pill.innerHTML = pillShapeSVG(shape, color) + `<span>${t}</span>`;
			pillMap.set(t, pill);
			pill.addEventListener('click', () => {
				if (this.hiddenTypes.has(t)) this.hiddenTypes.delete(t);
				else this.hiddenTypes.add(t);
				pill.toggleClass('llm-type-pill--off', this.hiddenTypes.has(t));
				this.applyVisibility(adj);
				this.saveSettings();
			});
		}
		// "All" / "None" shortcuts
		const allBtn = typeBar.createEl('button', { cls: 'llm-graph-btn llm-graph-btn--xs', text: 'All' });
		const noneBtn = typeBar.createEl('button', { cls: 'llm-graph-btn llm-graph-btn--xs', text: 'None' });
		allBtn.addEventListener('click', () => {
			this.hiddenTypes.clear();
			pillMap.forEach((el) => el.removeClass('llm-type-pill--off'));
			this.applyVisibility(adj);
			this.saveSettings();
		});
		noneBtn.addEventListener('click', () => {
			presentTypes.forEach(t => this.hiddenTypes.add(t));
			pillMap.forEach((el) => el.addClass('llm-type-pill--off'));
			this.applyVisibility(adj);
			this.saveSettings();
		});

		// placeholder adjacency (filled after rAF)
		let adj = new Map<string,Set<string>>();

		// ── Layout: SVG + sidebar ───────────────────────────────────────
		const layout = container.createDiv({ cls: 'llm-graph-layout' });
		const svgEl  = layout.createSvg('svg', { cls: 'llm-graph-svg' });
		this.svgEl   = svgEl;
		const sidebar = layout.createDiv({ cls: 'llm-graph-sidebar' });
		this.buildSidebar(sidebar, A);

		// ── D3 setup ───────────────────────────────────────────────────
		const svg = select<SVGSVGElement, unknown>(svgEl);
		const g   = svg.append('g');

		const BASE_LABEL_PX  = 11;   // node label size at zoom=1
		const BASE_ELABEL_PX = 9;    // edge label size at zoom=1
		const BASE_STROKE    = 1.5;  // edge stroke-width at zoom=1
		const BASE_ARROW     = 6;    // marker size at zoom=1
		const BASE_NODE      = 1;    // node shape scale at zoom=1

		this.zoomBehavior = zoom<SVGSVGElement, unknown>()
			.scaleExtent([0.05,10])
			.on('zoom', ev => {
				g.attr('transform', ev.transform);
				const k = ev.transform.k;
				// Counter-scale labels
				g.selectAll<SVGTextElement, unknown>('.llm-graph-node-label')
					.style('font-size', `${BASE_LABEL_PX / k}px`);
				g.selectAll<SVGTextElement, unknown>('.llm-graph-edge-label')
					.style('font-size', `${BASE_ELABEL_PX / k}px`);
				// Counter-scale edges
				g.selectAll<SVGLineElement, unknown>('.llm-graph-edge')
					.attr('stroke-width', BASE_STROKE / k);
				// Counter-scale node shapes (scale the wrapper <g>)
				g.selectAll<SVGGElement, unknown>('.llm-node-shape-wrapper')
					.attr('transform', `scale(${BASE_NODE / k})`);
				// Counter-scale arrow marker
				svgEl.querySelector('#llm-arrow')?.setAttribute('markerWidth',  String(BASE_ARROW / k));
				svgEl.querySelector('#llm-arrow')?.setAttribute('markerHeight', String(BASE_ARROW / k));
			});
		svg.call(this.zoomBehavior);

		// Restore saved zoom transform (after refresh or load)
		if (this.savedTransform) {
			const { k, x, y } = this.savedTransform;
			svg.call(this.zoomBehavior.transform, zoomIdentity.translate(x, y).scale(k));
		}

		// click on background → deselect
		svg.on('click', (event) => {
			if (event.target === svgEl) {
				this.selectedId = null;
				this.applyVisibility(adj);
			}
		});

		resetBtn.addEventListener('click', () => {
			this.savedTransform = null;
			svg.transition().duration(400).call(this.zoomBehavior.transform, zoomIdentity);
		});
		refreshBtn.addEventListener('click', () => this.manualRefresh());

		// Arrow marker
		svg.append('defs').append('marker').attr('id','llm-arrow')
			.attr('viewBox','0 -4 8 8').attr('refX',20).attr('refY',0)
			.attr('markerWidth',6).attr('markerHeight',6)
			.attr('markerUnits','strokeWidth')
			.attr('orient','auto')
			.append('path').attr('d','M0,-4L8,0L0,4').attr('fill','var(--text-faint)');

		// Resolve node refs
		const nodeMap   = new Map(this.nodes.map(n=>[n.id,n]));
		const simEdges  = this.edges.map(e=>({
			...e,
			source: nodeMap.get(e.source as string)!,
			target: nodeMap.get(e.target as string)!,
		})).filter(e=>e.source&&e.target);

		requestAnimationFrame(() => {
			const W = svgEl.clientWidth  || 900;
			const H = svgEl.clientHeight || 700;

			// Forces (stored so sliders can update them)
			const linkForce   = forceLink<WikiNode,WikiEdge>(simEdges)
				.id(d=>d.id).distance(this.linkDist).strength(0.4);
			const chargeForce = forceManyBody<WikiNode>().strength(-this.chargeStr);
			const gX = forceX<WikiNode>(W/2).strength(this.gravityStr);
			const gY = forceY<WikiNode>(H/2).strength(this.gravityStr);

			this.sim = forceSimulation<WikiNode>(this.nodes)
				.force('link',    linkForce)
				.force('charge',  chargeForce)
				.force('gx',      gX)
				.force('gy',      gY)
				.force('center',  forceCenter(W/2,H/2))
				.force('collide', forceCollide(18));

			// Build adjacency after simEdges resolved
			adj = this.buildAdjacency(simEdges);

			// Edges
			const edgeLine = g.append('g')
				.selectAll<SVGLineElement,typeof simEdges[0]>('line')
				.data(simEdges).join('line')
				.attr('class','llm-graph-edge')
				.attr('stroke-width', BASE_STROKE)
				.attr('marker-end','url(#llm-arrow)');
			this.selEdgeLine = edgeLine;

			const edgeLabel = g.append('g')
				.selectAll<SVGTextElement,typeof simEdges[0]>('text')
				.data(simEdges).join('text')
				.attr('class','llm-graph-edge-label')
				.attr('pointer-events','none')
				.text(d=>d.label);
			this.selEdgeLabel = edgeLabel;

			// Nodes
			const nodeEl = g.append('g')
				.selectAll<SVGGElement,WikiNode>('g')
				.data(this.nodes).join('g')
				.attr('class','llm-graph-node')
				.call(drag<SVGGElement,WikiNode>()
					.on('start',(ev,d)=>{ if(!ev.active) this.sim?.alphaTarget(0.3).restart(); d.fx=d.x; d.fy=d.y; })
					.on('drag', (ev,d)=>{ d.fx=ev.x; d.fy=ev.y; })
					.on('end',  (ev,d)=>{ if(!ev.active) this.sim?.alphaTarget(0); d.fx=null; d.fy=null; }))
				.on('click', (event, d) => {
					event.stopPropagation();
					if (this.selectedId === d.id) {
						// second click → open file
						this.app.workspace.openLinkText(d.id,'',false);
					} else {
						// first click → select + dim
						this.selectedId = d.id;
						this.applyVisibility(adj);
					}
				});
			this.selNodeEl = nodeEl;

			nodeEl.each(function(d) {
				const g = select<SVGGElement, WikiNode>(this as SVGGElement);
				const color  = NODE_COLORS[d.type] ?? '#BAB0AC';
				const shape  = NODE_SHAPES[d.type]  ?? 'circle';
				const cls    = 'llm-graph-node-shape';
				// Wrapper scaled by zoom handler to keep node size constant on screen
				const sw = g.append('g').attr('class', 'llm-node-shape-wrapper');
				if (shape === 'diamond') {
					sw.append('rect').attr('class', cls)
						.attr('width', 14).attr('height', 14)
						.attr('x', -7).attr('y', -7)
						.attr('transform', 'rotate(45)').attr('rx', 1.5)
						.attr('fill', color);
				} else if (shape === 'square') {
					sw.append('rect').attr('class', cls)
						.attr('width', 17).attr('height', 17)
						.attr('x', -8.5).attr('y', -8.5).attr('rx', 2.5)
						.attr('fill', color);
				} else if (shape === 'hexagon') {
					sw.append('polygon').attr('class', cls)
						.attr('points', '0,-10 8.7,-5 8.7,5 0,10 -8.7,5 -8.7,-5')
						.attr('fill', color);
				} else {
					sw.append('circle').attr('class', cls)
						.attr('r', 9).attr('fill', color);
				}
			});

			const nodeLabel = nodeEl.append('text')
				.attr('class','llm-graph-node-label')
				.attr('dy','0.35em').attr('x',13).attr('pointer-events','none')
				.text(d=>d.title.length>26?d.title.slice(0,24)+'…':d.title);
			this.selNodeLabel = nodeLabel;

			// Tooltip
			const tooltip = container.createDiv({ cls:'llm-graph-tooltip' });
			nodeEl
				.on('mouseenter',(_ev,d)=>{
					const deg = A.degreeOf.get(d.id)??0;
					const neighbors = adj.get(d.id)??new Set();
					tooltip.innerHTML =
						`<strong>${d.title}</strong><br>`+
						`<span class="llm-tp-type" style="color:${NODE_COLORS[d.type]??'#888'}">${d.type}</span>`+
						(d.domain?`<br><em>${d.domain}</em>`:'')+
						`<br><small>degree: ${deg} · neighbors: ${neighbors.size}</small>`+
						`<br><small class="llm-tp-hint">click to select · click again to open</small>`;
					tooltip.style.display='block';
				})
				.on('mousemove',(ev:PointerEvent)=>{
					const r=container.getBoundingClientRect();
					tooltip.style.left=(ev.clientX-r.left+14)+'px';
					tooltip.style.top =(ev.clientY-r.top +14)+'px';
				})
				.on('mouseleave',()=>{ tooltip.style.display='none'; });

			// Focus node (called from sidebar hub clicks)
			this.focusNodeFn = (id:string) => {
				const nd = nodeMap.get(id);
				if (!nd||nd.x==null||nd.y==null) return;
				this.selectedId = id;
				this.applyVisibility(adj);
				const cW=svgEl.clientWidth, cH=svgEl.clientHeight;
				svg.transition().duration(600).call(
					this.zoomBehavior.transform,
					zoomIdentity.translate(cW/2,cH/2).scale(1.8).translate(-nd.x!,-nd.y!)
				);
				tooltip.style.display='none';
			};

			// Wire sidebar hub clicks
			sidebar.querySelectorAll('[data-node-id]').forEach(el=>{
				(el as HTMLElement).addEventListener('click',()=>
					this.focusNodeFn?.((el as HTMLElement).dataset.nodeId!));
			});

			// Tick
			this.sim.on('tick',()=>{
				edgeLine
					.attr('x1',d=>(d.source as WikiNode).x!)
					.attr('y1',d=>(d.source as WikiNode).y!)
					.attr('x2',d=>(d.target as WikiNode).x!)
					.attr('y2',d=>(d.target as WikiNode).y!);
				edgeLabel
					.attr('x',d=>((d.source as WikiNode).x!+(d.target as WikiNode).x!)/2)
					.attr('y',d=>((d.source as WikiNode).y!+(d.target as WikiNode).y!)/2);
				nodeEl.attr('transform',d=>`translate(${d.x},${d.y})`);
			});

			// Wire physics sliders (must happen after sim is created)
			sidebar.querySelectorAll<HTMLInputElement>('[data-physics]').forEach(input=>{
				input.addEventListener('input',()=>{
					const val = +input.value;
					const key = input.dataset.physics!;
					const lbl = input.nextElementSibling as HTMLElement;
					if (lbl) lbl.textContent = key==='gravityStr' ? val.toFixed(2) : String(val);
					if (key==='linkDist') {
						this.linkDist = val;
						(this.sim!.force('link') as ForceLink<WikiNode,WikiEdge>).distance(val);
					} else if (key==='chargeStr') {
						this.chargeStr = val;
						(this.sim!.force('charge') as ReturnType<typeof forceManyBody>).strength(-val);
					} else if (key==='gravityStr') {
						this.gravityStr = val;
						(this.sim!.force('gx') as ReturnType<typeof forceX>).strength(val);
						(this.sim!.force('gy') as ReturnType<typeof forceY>).strength(val);
					}
					this.sim!.alpha(0.4).restart();
					this.saveSettings();
				});
			});
		}); // rAF

		// ── Toolbar toggle wiring ──────────────────────────────────────
		nlBtn.addEventListener('click',()=>{
			this.showNodeLabels=!this.showNodeLabels;
			nlBtn.toggleClass('llm-graph-btn--active',this.showNodeLabels);
			this.selNodeLabel?.attr('display',this.showNodeLabels?null:'none');
			this.saveSettings();
		});
		elBtn.addEventListener('click',()=>{
			this.showEdgeLabels=!this.showEdgeLabels;
			elBtn.toggleClass('llm-graph-btn--active',this.showEdgeLabels);
			this.selEdgeLabel?.attr('display',this.showEdgeLabels?null:'none');
			this.saveSettings();
		});
		arBtn.addEventListener('click',()=>{
			this.showArrows=!this.showArrows;
			arBtn.toggleClass('llm-graph-btn--active',this.showArrows);
			this.selEdgeLine?.attr('marker-end',this.showArrows?'url(#llm-arrow)':null);
			this.saveSettings();
		});
		sbBtn.addEventListener('click',()=>{
			this.sidebarOpen=!this.sidebarOpen;
			sbBtn.toggleClass('llm-graph-btn--active',this.sidebarOpen);
			sidebar.toggleClass('llm-graph-sidebar--open',this.sidebarOpen);
			this.saveSettings();
		});
	}

	// ── 5. Sidebar ────────────────────────────────────────────────────
	private buildSidebar(sidebar: HTMLElement, A: Analytics) {
		const section = (title: string) => {
			const s = sidebar.createDiv({ cls:'llm-sb-section' });
			s.createDiv({ cls:'llm-sb-title', text: title });
			return s;
		};

		// Physics sliders
		const ps = section('Physics');
		const mkSlider = (label: string, key: string, min: number, max: number, val: number, step: number) => {
			const row = ps.createDiv({ cls:'llm-sb-slider-row' });
			row.createSpan({ cls:'llm-sb-slider-lbl', text: label });
			const input = row.createEl('input', { type:'range' });
			input.addClass('llm-sb-slider');
			input.min=String(min); input.max=String(max);
			input.value=String(val); input.step=String(step);
			input.dataset.physics = key;
			const display = step < 1 ? val.toFixed(2) : String(val);
			row.createSpan({ cls:'llm-sb-slider-val', text: display });
		};
		mkSlider('Link dist',   'linkDist',   20,  200, this.linkDist,   5);
		mkSlider('Repulsion',   'chargeStr',  30,  400, this.chargeStr,  10);
		mkSlider('Gravity',     'gravityStr', 0,   0.3, this.gravityStr, 0.01);

		// Graph Health
		const hs = section('Graph Health');
		const cards = [
			{lbl:'Nodes',   val:A.n,        warn:false},
			{lbl:'Edges',   val:A.m,        warn:false},
			{lbl:'Density', val:A.density,  warn:A.density<0.01},
			{lbl:'Avg deg', val:A.avgDeg,   warn:A.avgDeg<1},
			{lbl:'Orphans', val:A.orphans,  warn:A.orphans>0},
		];
		const cardGrid = hs.createDiv({ cls:'llm-sb-cards' });
		for (const c of cards) {
			const card = cardGrid.createDiv({ cls:'llm-sb-card'+(c.warn?' llm-sb-card--warn':'') });
			card.createDiv({cls:'llm-sb-card-val',text:String(c.val)});
			card.createDiv({cls:'llm-sb-card-lbl',text:c.lbl});
		}

		// Epistemic layers
		const ls = section('Epistemic Layers');
		const maxL = Math.max(...A.layers.map(l=>l.count),1);
		A.layers.forEach((l,i)=>{
			const row = ls.createDiv({cls:'llm-sb-layer-row'});
			row.createSpan({cls:'llm-sb-layer-num',text:String(i+1)});
			const nm = row.createSpan({cls:'llm-sb-layer-name',text:l.name});
			nm.style.color=l.color;
			const track = row.createDiv({cls:'llm-sb-track'});
			if (l.count>0) {
				const fill=track.createDiv({cls:'llm-sb-fill'});
				fill.style.cssText=`width:${Math.max(l.count/maxL*100,4)}%;background:${l.color}`;
			} else track.createSpan({cls:'llm-sb-gap',text:'gap'});
			const cnt=row.createSpan({cls:'llm-sb-layer-cnt',text:l.count?String(l.count):'—'});
			cnt.style.color=l.count?l.color:'var(--text-faint)';
		});

		// Edge types
		const es = section('Edge Types');
		const maxE = Math.max(...A.edgeTypes.map(e=>e.count),1);
		for (const e of A.edgeTypes) {
			const row=es.createDiv({cls:'llm-sb-bar-row'});
			row.createSpan({cls:'llm-sb-bar-name',text:e.label});
			const track=row.createDiv({cls:'llm-sb-track'});
			const fill=track.createDiv({cls:'llm-sb-fill llm-sb-fill--blue'});
			fill.style.width=`${e.count/maxE*100}%`;
			row.createSpan({cls:'llm-sb-bar-cnt',text:String(e.count)});
		}

		// Top hubs
		const hubSec = section('Top Hubs · by degree');
		const maxH = Math.max(...A.hubs.map(h=>h.deg),1);
		A.hubs.forEach((h,i)=>{
			const row=hubSec.createDiv({cls:'llm-sb-hub-row'});
			row.dataset.nodeId=h.id;
			row.createSpan({cls:'llm-sb-hub-rank',text:String(i+1)});
			const dot=row.createSpan({cls:'llm-sb-hub-dot'});
			dot.style.background=NODE_COLORS[h.type]??'#888';
			row.createSpan({cls:'llm-sb-hub-name',text:h.id.length>20?h.id.slice(0,18)+'…':h.id})
				.setAttribute('title',h.id);
			const bar=row.createDiv({cls:'llm-sb-hub-bar'});
			bar.createDiv({cls:'llm-sb-fill',style:`width:${h.deg/maxH*100}%;background:${NODE_COLORS[h.type]??'#888'}`});
			row.createSpan({cls:'llm-sb-hub-deg',text:String(h.deg)});
		});

		// Domain coverage
		const ds = section('Domain Coverage');
		const maxD = Math.max(...A.domains.map(d=>d.count),1);
		for (const d of A.domains) {
			const row=ds.createDiv({cls:'llm-sb-bar-row'});
			row.createSpan({cls:'llm-sb-bar-name',text:d.name});
			const track=row.createDiv({cls:'llm-sb-track'});
			track.createDiv({cls:'llm-sb-fill llm-sb-fill--teal',style:`width:${d.count/maxD*100}%`});
			row.createSpan({cls:'llm-sb-bar-cnt',text:String(d.count)});
		}
	}
}

// ─── Plugin ───────────────────────────────────────────────────────────────────
export default class LLMWikiSemanticGraph extends Plugin {
	async onload() {
		this.registerView(VIEW_TYPE, leaf => new SemanticGraphView(leaf, this));
		this.addRibbonIcon('git-fork','LLM Wiki Semantic Graph',()=>this.activateView());
		this.addCommand({id:'open-semantic-graph',name:'Open Semantic Graph',callback:()=>this.activateView()});
	}
	async activateView() {
		const {workspace}=this.app;
		let leaf=workspace.getLeavesOfType(VIEW_TYPE)[0];
		if (!leaf) { leaf=workspace.getRightLeaf(false)!; await leaf.setViewState({type:VIEW_TYPE,active:true}); }
		workspace.revealLeaf(leaf);
	}
	onunload() {}
}
