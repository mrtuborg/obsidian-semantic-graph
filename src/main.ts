import { Plugin, ItemView, WorkspaceLeaf, setIcon } from 'obsidian';
import { select } from 'd3-selection';
import {
	forceSimulation, forceLink, forceManyBody,
	forceCollide, forceX, forceY,
	SimulationNodeDatum, SimulationLinkDatum,
	ForceLink,
} from 'd3-force';
import { zoom, zoomIdentity, zoomTransform, ZoomBehavior } from 'd3-zoom';
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

// Domain colors — generated from hash of domain name
const DOMAIN_PALETTE = [
	'#1f77b4','#ff7f0e','#2ca02c','#d62728','#9467bd',
	'#8c564b','#e377c2','#7f7f7f','#bcbd22','#17becf',
	'#aec7e8','#ffbb78','#98df8a','#ff9896','#c5b0d5',
	'#c49c94','#f7b6d2','#dbdb8d','#9edae5','#393b79',
];
function domainColor(domain: string): string {
	let h = 0;
	for (let i = 0; i < domain.length; i++) h = (Math.imul(31, h) + domain.charCodeAt(i)) >>> 0;
	return DOMAIN_PALETTE[h % DOMAIN_PALETTE.length];
}

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
	labelFadeAt:    number;
	labelSize:      number; // base font size in SVG units
	searchQuery:    string;
	selectedDomain: string | null;
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
	labelFadeAt:    0.9,
	labelSize:      10,
	searchQuery:    '',
	selectedDomain: null,
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
	private showOrphans    = false; // orphan nodes hidden by default
	private selectedId: string | null = null;
	private searchQuery    = '';
	private selectedDomain: string | null = null;
	private _labelsUserSet = false; // true once user explicitly toggles label button

	// physics state
	private linkDist    = 60;
	private chargeStr   = 120;
	private gravityStr  = 0.03;
	private labelFadeAt = 0.9;
	private labelSize   = 10; // base font size in SVG units

	// zoom state — persisted across refreshes
	private savedTransform: { k: number; x: number; y: number } | null = null;

	// pending rAF handle — cancelled before each rebuild
	private pendingRaf: number | null = null;
	// guard against concurrent async refreshes
	private isRefreshing = false;

	// live D3 selections
	private selNodeEl:    any = null;
	private selEdgeLine:  any = null;
	private selEdgeLabel: any = null;
	private selNodeLabel: any = null;
	private focusNodeFn: ((id: string) => void) | null = null;
	private svgEl: SVGSVGElement | null = null;
	// layer row references for toggle updates (no full sidebar rebuild needed)
	private layerRowMap = new Map<string, HTMLElement>();

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
		this.labelFadeAt    = s.labelFadeAt ?? 0.9;
		this.labelSize      = s.labelSize   ?? 10;
		this.searchQuery    = s.searchQuery;
		this.selectedDomain = s.selectedDomain ?? null;
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
			labelFadeAt:    this.labelFadeAt,
			labelSize:      this.labelSize,
			searchQuery:    this.searchQuery,
			selectedDomain: this.selectedDomain,
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
		// Auto-refresh only for wiki/ files — ignore journal, activities, etc.
		const isWikiFile = (f: { path: string }) =>
			f.path.startsWith('wiki/') && !EXCLUDED_PATHS.some(ex => f.path.includes(ex));
		this.registerEvent(this.app.vault.on('modify', f => { if (isWikiFile(f)) this.scheduleRefresh(); }));
		this.registerEvent(this.app.vault.on('create', f => { if (isWikiFile(f)) this.scheduleRefresh(); }));
		this.registerEvent(this.app.vault.on('delete', f => { if (isWikiFile(f)) this.scheduleRefresh(); }));
		this.registerEvent(this.app.vault.on('rename', (f) => { if (isWikiFile(f)) this.scheduleRefresh(); }));
	}

	async onClose() {
		this.sim?.stop();
		if (this.refreshTimer !== null) { window.clearTimeout(this.refreshTimer); this.refreshTimer = null; }
		this.isRefreshing = false;
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
			if (this.isRefreshing) return; // skip if previous refresh still running
			this.isRefreshing = true;
			try {
				this.captureZoom();
				await this.buildGraph();
				this.render();
			} finally {
				this.isRefreshing = false;
			}
		}, 1500);
	}

	private async manualRefresh() {
		if (this.refreshTimer !== null) { window.clearTimeout(this.refreshTimer); this.refreshTimer = null; }
		if (this.isRefreshing) return;
		this.isRefreshing = true;
		try {
			this.captureZoom();
			await this.buildGraph();
			this.render();
		} finally {
			this.isRefreshing = false;
		}
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
		const dom = this.selectedDomain;

		// node opacity / display
		this.selNodeEl.style('opacity', (d: WikiNode) => {
			if (this.hiddenTypes.has(d.type)) return '0';
			if (!this.showOrphans && (adj.get(d.id)?.size ?? 0) === 0) return '0';
			if (dom && d.domain !== dom) return '0.07';
			if (!sel) return '1';
			return d.id === sel || neighbors!.has(d.id) ? '1' : '0.07';
		}).style('display', (d: WikiNode) => {
			if (this.hiddenTypes.has(d.type)) return 'none';
			if (!this.showOrphans && (adj.get(d.id)?.size ?? 0) === 0) return 'none';
			return null;
		});

		// edge opacity
		const edgeOpacity = (e: any) => {
			const s = (e.source as WikiNode), t = (e.target as WikiNode);
			if (this.hiddenTypes.has(s.type) || this.hiddenTypes.has(t.type)) return '0';
			if (dom && s.domain !== dom && t.domain !== dom) return '0.04';
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
		// Stop old simulation and cancel any pending rAF before rebuilding DOM
		this.sim?.stop();
		if (this.pendingRaf !== null) { cancelAnimationFrame(this.pendingRaf); this.pendingRaf = null; }

		const container = this.containerEl.children[1] as HTMLElement;
		container.empty();
		container.addClass('llm-graph-container');
		const A = this.analytics!;

		// ── Auto-scale physics to graph size ───────────────────────────
		const N = this.nodes.length;
		if (N > 0) {
			// charge: more nodes → stronger repulsion needed
			this.chargeStr = Math.min(800, Math.max(120, Math.round(N * 2)));
			// link distance: spread scales with sqrt(N)
			this.linkDist  = Math.min(200, Math.max(50, Math.round(Math.sqrt(N) * 8)));
			// Labels always ON — zoom handler fades them out automatically at small scale
			// (no per-N hiding needed; user can still toggle with button)
		}

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
		const nlBtn       = mkBtn('type',         'Nodes',     this.showNodeLabels);
		const elBtn    = mkBtn('minus',        'Edges',     this.showEdgeLabels);
		const arBtn    = mkBtn('arrow-right',  'Arrows',    this.showArrows);
		const sbBtn    = mkBtn('bar-chart-2',  'Analytics');
		toolbar.createSpan({ cls:'llm-graph-stats',
			text:`${A.n} nodes · ${A.m} edges · density ${A.density}` });


		// placeholder adjacency (filled after rAF)
		let adj = new Map<string,Set<string>>();

		// ── Layout: SVG + sidebar ───────────────────────────────────────
		const layout = container.createDiv({ cls: 'llm-graph-layout' });
		const svgEl  = layout.createSvg('svg', { cls: 'llm-graph-svg' });
		this.svgEl   = svgEl;
		const sidebar = layout.createDiv({ cls: 'llm-graph-sidebar' });
		this.buildSidebar(sidebar, A, adj);

		// ── D3 setup ───────────────────────────────────────────────────
		const svg = select<SVGSVGElement, unknown>(svgEl);
		const g   = svg.append('g');

		this.zoomBehavior = zoom<SVGSVGElement, unknown>()
			.scaleExtent([0.05,10])
			.on('zoom', ev => {
				g.attr('transform', ev.transform);
				const k = ev.transform.k;
				// Counter-scale labels: always same screen size regardless of zoom
				// labelSize is the target screen-space pixel size
				const nodeFontPx = this.labelSize / k;
				const edgeFontPx = (this.labelSize * 0.85) / k;
				// Fade: fully visible at k >= labelFadeAt, invisible at k <= labelFadeAt*0.45
				const fadeMax = this.labelFadeAt;
				const fadeMin = this.labelFadeAt * 0.45;
				const labelOpacity = Math.max(0, Math.min(1,
					(k - fadeMin) / (fadeMax - fadeMin)
				));
				if (this.showNodeLabels)
					g.selectAll<SVGTextElement, unknown>('.llm-graph-node-label')
						.style('font-size', `${nodeFontPx}px`)
						.style('opacity', String(labelOpacity));
				if (this.showEdgeLabels)
					g.selectAll<SVGTextElement, unknown>('.llm-graph-edge-label')
						.style('font-size', `${edgeFontPx}px`)
						.style('opacity', String(labelOpacity));
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

		// Arrow marker — scales naturally with zoom (no counter-scaling needed)
		svg.append('defs').append('marker').attr('id','llm-arrow')
			.attr('viewBox','0 -3 6 6').attr('refX',10).attr('refY',0)
			.attr('markerWidth', 6).attr('markerHeight', 6)
			.attr('markerUnits','strokeWidth')
			.attr('orient','auto')
			.append('path').attr('d','M0,-3L6,0L0,3').attr('fill','var(--text-faint)');

		// Resolve node refs
		const nodeMap   = new Map(this.nodes.map(n=>[n.id,n]));
		const simEdges  = this.edges.map(e=>({
			...e,
			source: nodeMap.get(e.source as string)!,
			target: nodeMap.get(e.target as string)!,
		})).filter(e=>e.source&&e.target);

		this.pendingRaf = requestAnimationFrame(() => {
			this.pendingRaf = null;
			const W = svgEl.clientWidth  || 900;
			const H = svgEl.clientHeight || 700;

			// Forces (stored so sliders can update them)
			// Link strength: 1/sqrt(deg_src * deg_tgt) — hub nodes pull weaker (like Obsidian)
			const linkForce   = forceLink<WikiNode,WikiEdge>(simEdges)
				.id(d=>d.id).distance(this.linkDist)
				.strength((d: any) => 1 / Math.sqrt(
					Math.max(1, A.degreeOf.get((d.source as WikiNode).id) ?? 1) *
					Math.max(1, A.degreeOf.get((d.target as WikiNode).id) ?? 1)
				));
			const chargeForce = forceManyBody<WikiNode>().strength(-this.chargeStr);
			const gX = forceX<WikiNode>(W/2).strength(this.gravityStr);
			const gY = forceY<WikiNode>(H/2).strength(this.gravityStr);
			// Collision radius scales with N to prevent overlap
			const collideR = Math.max(15, Math.sqrt(N) * 2);

			this.sim = forceSimulation<WikiNode>(this.nodes)
				.force('link',    linkForce)
				.force('charge',  chargeForce)
				.force('gx',      gX)
				.force('gy',      gY)
				.force('collide', forceCollide(collideR));

			// Build adjacency after simEdges resolved
			adj = this.buildAdjacency(simEdges);

			// Edges — colored by domain if both nodes share a domain
			const edgeLine = g.append('g')
				.selectAll<SVGLineElement,typeof simEdges[0]>('line')
				.data(simEdges).join('line')
				.attr('class','llm-graph-edge')
				.attr('stroke-width', 1.2)
				.attr('stroke', (d: any) => {
					// Use source domain, fallback to target domain, fallback to neutral
					const domain = (d.source as WikiNode).domain || (d.target as WikiNode).domain;
					return domain ? domainColor(domain) : '#888';
				})
				.attr('stroke-opacity', (d: any) => {
					// Same-domain edges: more visible; cross-domain: dimmer
					const src = (d.source as WikiNode).domain;
					const tgt = (d.target as WikiNode).domain;
					return (src && tgt && src === tgt) ? '0.7' : '0.3';
				})
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
				const deg    = A.degreeOf.get(d.id) ?? 0;
				// Scale node size by degree (log scale, like Obsidian)
				const s = 1 + Math.log1p(deg) * 0.35; // s≈1 for deg=0, s≈2.4 for deg=20
				const sw = g.append('g').attr('class', 'llm-node-shape-wrapper')
					.attr('transform', `scale(${s})`);
				if (shape === 'diamond') {
					sw.append('rect').attr('class', cls)
						.attr('width', 11).attr('height', 11)
						.attr('x', -5.5).attr('y', -5.5)
						.attr('transform', 'rotate(45)').attr('rx', 1.5)
						.attr('fill', color);
				} else if (shape === 'square') {
					sw.append('rect').attr('class', cls)
						.attr('width', 13).attr('height', 13)
						.attr('x', -6.5).attr('y', -6.5).attr('rx', 2)
						.attr('fill', color);
				} else if (shape === 'hexagon') {
					sw.append('polygon').attr('class', cls)
						.attr('points', '0,-8 6.9,-4 6.9,4 0,8 -6.9,4 -6.9,-4')
						.attr('fill', color);
				} else {
					sw.append('circle').attr('class', cls)
						.attr('r', 7).attr('fill', color);
				}
			});

			const nodeLabel = nodeEl.append('text')
				.attr('class','llm-graph-node-label')
				.attr('dy','0.35em').attr('x',13).attr('pointer-events','none')
				.text(d=>d.title.length>26?d.title.slice(0,24)+'…':d.title)
				.attr('display', this.showNodeLabels ? null : 'none'); // apply immediately
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
					const isFloat = key === 'gravityStr' || key === 'labelFadeAt';
					if (lbl) lbl.textContent = isFloat ? val.toFixed(2) : String(val);
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
					} else if (key==='labelFadeAt' || key==='labelSize') {
						if (key === 'labelFadeAt') this.labelFadeAt = val;
						if (key === 'labelSize')   this.labelSize   = val;
						// zoomTransform(element) — correct D3 getter, does NOT touch zoom behavior
						const k = zoomTransform(svgEl).k;
						const fadeMax = this.labelFadeAt, fadeMin = this.labelFadeAt * 0.45;
						const op = String(Math.max(0, Math.min(1, (k - fadeMin) / (fadeMax - fadeMin))));
						// counter-scaled: font-size in SVG space = target_screen_px / k
						if (this.showNodeLabels)
							g.selectAll('.llm-graph-node-label')
								.style('font-size', `${this.labelSize / k}px`)
								.style('opacity', op);
						if (this.showEdgeLabels)
							g.selectAll('.llm-graph-edge-label')
								.style('font-size', `${(this.labelSize * 0.85) / k}px`)
								.style('opacity', op);
						this.saveSettings();
						return;
					}
					this.sim!.alpha(0.4).restart();
					this.saveSettings();
				});
			});

			// Apply initial visibility (hides orphans, hidden types, etc.)
			this.applyVisibility(adj);
		}); // rAF

		// ── Toolbar toggle wiring ──────────────────────────────────────
		nlBtn.addEventListener('click',()=>{
			this._labelsUserSet = true; // user explicitly chose — stop auto-managing
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
	private buildSidebar(sidebar: HTMLElement, A: Analytics, adj: Map<string,Set<string>>) {
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
		mkSlider('Link dist',   'linkDist',    20,   200,  this.linkDist,    5);
		mkSlider('Repulsion',   'chargeStr',   30,   800,  this.chargeStr,   10);
		mkSlider('Gravity',     'gravityStr',  0,    0.3,  this.gravityStr,  0.01);
		mkSlider('Font size',   'labelSize',   6,    24,   this.labelSize,   1);
		mkSlider('Labels fade', 'labelFadeAt', 0.05, 3.0,  this.labelFadeAt, 0.05);

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
		// Orphans toggle
		if (A.orphans > 0) {
			const orphanRow = hs.createDiv({ cls: 'llm-sb-orphan-row' });
			const orphanBtn = orphanRow.createEl('button', {
				cls: 'llm-graph-btn llm-graph-btn--xs' + (this.showOrphans ? ' llm-graph-btn--active' : ''),
				text: this.showOrphans ? `Hide ${A.orphans} orphans` : `Show ${A.orphans} orphans`,
			});
			orphanBtn.addEventListener('click', () => {
				this.showOrphans = !this.showOrphans;
				orphanBtn.textContent = this.showOrphans ? `Hide ${A.orphans} orphans` : `Show ${A.orphans} orphans`;
				orphanBtn.toggleClass('llm-graph-btn--active', this.showOrphans);
				this.applyVisibility(adj);
			});
		}

		// Epistemic layers — clickable to toggle type visibility
		const ls = section('Epistemic Layers');

		// Shape SVG helper
		const shapeSVG = (shape: string, color: string): string => {
			const f = `fill="${color}"`;
			switch (shape) {
				case 'diamond':
					return `<svg width="12" height="12" viewBox="0 0 10 10"><rect ${f} x="1.5" y="1.5" width="7" height="7" rx="1" transform="rotate(45 5 5)"/></svg>`;
				case 'square':
					return `<svg width="12" height="12" viewBox="0 0 10 10"><rect ${f} x="1.5" y="1.5" width="7" height="7" rx="1.5"/></svg>`;
				case 'hexagon':
					return `<svg width="12" height="12" viewBox="0 0 10 10"><polygon ${f} points="5,1 8.7,3 8.7,7 5,9 1.3,7 1.3,3"/></svg>`;
				default:
					return `<svg width="12" height="12" viewBox="0 0 10 10"><circle ${f} cx="5" cy="5" r="4"/></svg>`;
			}
		};

		// All / None controls
		const layerCtrl = ls.createDiv({ cls: 'llm-sb-layer-ctrl' });
		const allTypesBtn  = layerCtrl.createEl('button', { cls: 'llm-graph-btn llm-graph-btn--xs', text: 'All' });
		const noneTypesBtn = layerCtrl.createEl('button', { cls: 'llm-graph-btn llm-graph-btn--xs', text: 'None' });

		// Store row refs on instance so toggle handlers can update classes without full rebuild
		this.layerRowMap.clear();

		const maxL = Math.max(...A.layers.map(l=>l.count),1);
		A.layers.forEach((l, i) => {
			const typeName = l.name.toLowerCase();
			const color    = l.color;
			const shape    = NODE_SHAPES[typeName] ?? 'circle';

			const row = ls.createDiv({ cls: 'llm-sb-layer-row' });
			if (l.count > 0) row.addClass('llm-sb-layer-clickable');
			if (this.hiddenTypes.has(typeName)) row.addClass('llm-sb-layer-row--off');
			this.layerRowMap.set(typeName, row);

			row.createSpan({ cls: 'llm-sb-layer-num', text: String(i + 1) });
			row.innerHTML += shapeSVG(shape, color);
			row.createSpan({ cls: 'llm-sb-layer-name', text: l.name }).style.color = color;
			const track = row.createDiv({ cls: 'llm-sb-track' });
			if (l.count > 0) {
				const fill = track.createDiv({ cls: 'llm-sb-fill' });
				fill.style.cssText = `width:${Math.max(l.count/maxL*100,4)}%;background:${color}`;
			} else {
				track.createSpan({ cls: 'llm-sb-gap', text: 'gap' });
			}
			row.createSpan({ cls: 'llm-sb-layer-cnt', text: l.count ? String(l.count) : '—' })
				.style.color = l.count ? color : 'var(--text-faint)';

			if (l.count > 0) {
				row.addEventListener('click', () => {
					if (this.hiddenTypes.has(typeName)) this.hiddenTypes.delete(typeName);
					else this.hiddenTypes.add(typeName);
					// Only toggle class — no full sidebar rebuild (keeps sliders + hub clicks alive)
					this.layerRowMap.forEach((r, t) =>
						r.toggleClass('llm-sb-layer-row--off', this.hiddenTypes.has(t)));
					this.applyVisibility(adj);
					this.saveSettings();
				});
			}
		});

		allTypesBtn.addEventListener('click', () => {
			this.hiddenTypes.clear();
			this.layerRowMap.forEach(r => r.removeClass('llm-sb-layer-row--off'));
			this.applyVisibility(adj);
			this.saveSettings();
		});
		noneTypesBtn.addEventListener('click', () => {
			A.layers.forEach(l => { if (l.count > 0) this.hiddenTypes.add(l.name.toLowerCase()); });
			this.layerRowMap.forEach((r, t) =>
				r.toggleClass('llm-sb-layer-row--off', this.hiddenTypes.has(t)));
			this.applyVisibility(adj);
			this.saveSettings();
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

		// Domain coverage — click to filter graph
		const ds = section('Domain Coverage');
		const maxD = Math.max(...A.domains.map(d=>d.count),1);
		const domainRows = new Map<string, HTMLElement>();
		for (const d of A.domains) {
			const row = ds.createDiv({ cls: 'llm-sb-bar-row llm-sb-domain-row' });
			domainRows.set(d.name, row);
			if (this.selectedDomain === d.name) row.addClass('llm-sb-domain-row--active');
			row.createSpan({ cls: 'llm-sb-bar-name', text: d.name });
			const track = row.createDiv({ cls: 'llm-sb-track' });
			track.createDiv({ cls: 'llm-sb-fill llm-sb-fill--teal', style: `width:${d.count/maxD*100}%` });
			row.createSpan({ cls: 'llm-sb-bar-cnt', text: String(d.count) });
			row.addEventListener('click', () => {
				if (this.selectedDomain === d.name) {
					this.selectedDomain = null;
					domainRows.forEach(r => r.removeClass('llm-sb-domain-row--active'));
				} else {
					this.selectedDomain = d.name;
					domainRows.forEach((r, n) => r.toggleClass('llm-sb-domain-row--active', n === d.name));
				}
				this.applyVisibility(adj);
				this.saveSettings();
			});
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
