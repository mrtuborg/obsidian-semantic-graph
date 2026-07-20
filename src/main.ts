import { Plugin, PluginSettingTab, Setting, ItemView, WorkspaceLeaf, TFile, setIcon } from 'obsidian';
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

// ─── BM25 search ─────────────────────────────────────────────────────────────
const STOPWORDS = new Set([
	'the','a','an','and','or','in','is','it','of','to','for','on','with','as',
	'at','by','from','be','was','were','been','that','this','are','have','has',
	'had','not','but','can','all','if','they','their','more','will','would',
	'could','should','also','just','about','when','then','than','into','over',
	'use','used','using','new','one','two','may','how','what','its','which',
]);

function tokenize(text: string): string[] {
	return text.toLowerCase()
		.replace(/```[\s\S]*?```/g, ' ')   // drop code blocks
		.replace(/\[\[([^\]]+)\]\]/g, '$1') // unwrap wikilinks
		.replace(/[^a-z0-9\s]/g, ' ')
		.split(/\s+/)
		.filter(t => t.length > 2 && !STOPWORDS.has(t));
}

function cosineSim(a: number[], b: number[]): number {
	let dot = 0, na = 0, nb = 0;
	const len = Math.min(a.length, b.length);
	for (let i = 0; i < len; i++) { dot += a[i]*b[i]; na += a[i]*a[i]; nb += b[i]*b[i]; }
	const denom = Math.sqrt(na) * Math.sqrt(nb);
	return denom > 0 ? dot / denom : 0;
}

class BM25Index {
	private tf   = new Map<string, Map<string, number>>(); // docId → term → freq
	private df   = new Map<string, number>();               // term → #docs
	private dl   = new Map<string, number>();               // docId → length
	private avgdl = 1;
	private N    = 0;
	private k1   = 1.5;
	private b    = 0.75;

	add(docId: string, text: string) {
		const terms = tokenize(text);
		const freq  = new Map<string, number>();
		for (const t of terms) freq.set(t, (freq.get(t) ?? 0) + 1);
		this.tf.set(docId, freq);
		this.dl.set(docId, terms.length);
		for (const t of freq.keys()) this.df.set(t, (this.df.get(t) ?? 0) + 1);
		this.N++;
	}

	finalize() {
		const total = [...this.dl.values()].reduce((a, b) => a + b, 0);
		this.avgdl = this.N > 0 ? total / this.N : 1;
	}

	score(docId: string, queryTerms: string[]): number {
		const freq = this.tf.get(docId);
		if (!freq) return 0;
		const dl = this.dl.get(docId) ?? 1;
		let s = 0;
		for (const t of queryTerms) {
			const tf = freq.get(t) ?? 0;
			if (tf === 0) continue;
			const df  = this.df.get(t) ?? 0;
			const idf = Math.log((this.N - df + 0.5) / (df + 0.5) + 1);
			s += idf * (tf * (this.k1 + 1)) / (tf + this.k1 * (1 - this.b + this.b * dl / this.avgdl));
		}
		return s;
	}

	/** Top-K doc IDs sorted by BM25 score descending */
	topK(queryTerms: string[], k = 30, minScore = 0.5): string[] {
		const scores: [string, number][] = [];
		for (const docId of this.tf.keys()) {
			const sc = this.score(docId, queryTerms);
			if (sc >= minScore) scores.push([docId, sc]);
		}
		scores.sort((a, b) => b[1] - a[1]);
		return scores.slice(0, k).map(([id]) => id);
	}
}


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

// Graph file pattern — compiled graph lives in wiki/graph/<timestamp>-graph.md
const GRAPH_FILE_RE = /^wiki\/graph\/\d{8}T\d{6}Z-graph\.md$/;
// Edge table row in compiled graph: "| source | SrcType→TgtType | target | label |"
const GRAPH_EDGE_RE = /^\|\s*([^|]+?)\s*\|\s*[A-Za-z]+→[A-Za-z]+\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/;

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
	intraDomainOut: Map<string, number>;  // out-degree within same domain
}

// ─── View ─────────────────────────────────────────────────────────────────────
interface GraphSettings {
	showNodeLabels: boolean;
	showEdgeLabels: boolean;
	showArrows:     boolean;
	sidebarOpen:    boolean;
	semSidebarOpen: boolean;
	hiddenTypes:    string[];
	linkDist:       number;
	chargeStr:      number;
	gravityStr:     number;
	labelFadeAt:    number;
	labelSize:      number;
	nodeScale:      number;  // multiplier over degree-based size
	edgeWidth:      number;  // base stroke-width for edges
	searchQuery:    string;
	selectedDomains: string[];
	embeddingEndpoint: string;
	embeddingModel:    string;
	colorMode:         'type' | 'semantic';
	numClusters:       number;
}
const DEFAULT_SETTINGS: GraphSettings = {
	showNodeLabels: true,
	showEdgeLabels: true,
	showArrows:     true,
	sidebarOpen:    false,
	semSidebarOpen: false,
	hiddenTypes:    [],
	linkDist:       60,
	chargeStr:      120,
	gravityStr:     0.03,
	labelFadeAt:    0.9,
	labelSize:      10,
	nodeScale:      1.0,
	edgeWidth:      1.2,
	searchQuery:    '',
	selectedDomains: [],
	embeddingEndpoint: 'http://localhost:11434',
	embeddingModel:    'nomic-embed-text',
	colorMode:         'type',
	numClusters:       6,
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
	private semSidebarOpen = false;
	private hiddenTypes    = new Set<string>();
	private showOrphans    = false; // orphan nodes hidden by default
	private selectedId: string | null = null;
	private searchQuery    = '';
	private selectedDomains = new Set<string>();
	private _labelsUserSet = false; // true once user explicitly toggles label button

	// semantic search state
	embeddingEndpoint = 'http://localhost:11434';
	embeddingModel    = 'nomic-embed-text';
	private colorMode: 'type' | 'semantic' = 'type';
	private numClusters = 6;
	private clusterMap  = new Map<string, number>(); // nodeId → cluster index
	private bm25Index:  BM25Index | null = null;
	private embeddings: Map<string, number[]> | null = null;
	private semanticIds     = new Set<string>(); // last semantic result
	private semSearchTimer: ReturnType<typeof setTimeout> | null = null;

	// physics state
	private linkDist    = 60;
	private chargeStr   = 120;
	private gravityStr  = 0.03;
	private labelFadeAt = 0.9;
	private labelSize   = 10;
	private nodeScale   = 1.0;
	private edgeWidth   = 1.2;

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
		this.semSidebarOpen = s.semSidebarOpen ?? false;
		this.hiddenTypes    = new Set(s.hiddenTypes);
		this.linkDist       = s.linkDist;
		this.chargeStr      = s.chargeStr;
		this.gravityStr     = s.gravityStr;
		this.labelFadeAt    = s.labelFadeAt ?? 0.9;
		this.labelSize      = s.labelSize   ?? 10;
		this.nodeScale      = s.nodeScale   ?? 1.0;
		this.edgeWidth      = s.edgeWidth   ?? 1.2;
		this.searchQuery    = s.searchQuery;
		this.selectedDomains  = new Set(s.selectedDomains ?? []);
		this.embeddingEndpoint = s.embeddingEndpoint ?? 'http://localhost:11434';
		this.embeddingModel    = s.embeddingModel    ?? 'nomic-embed-text';
		this.colorMode         = s.colorMode         ?? 'type';
		this.numClusters       = s.numClusters       ?? 6;
	}

	private saveSettings() {
		const s: GraphSettings = {
			showNodeLabels: this.showNodeLabels,
			showEdgeLabels: this.showEdgeLabels,
			showArrows:     this.showArrows,
			sidebarOpen:    this.sidebarOpen,
			semSidebarOpen: this.semSidebarOpen,
			hiddenTypes:    [...this.hiddenTypes],
			linkDist:       this.linkDist,
			chargeStr:      this.chargeStr,
			gravityStr:     this.gravityStr,
			labelFadeAt:    this.labelFadeAt,
			labelSize:      this.labelSize,
			nodeScale:      this.nodeScale,
			edgeWidth:      this.edgeWidth,
			searchQuery:    this.searchQuery,
			selectedDomains: [...this.selectedDomains],
			embeddingEndpoint: this.embeddingEndpoint,
			embeddingModel:    this.embeddingModel,
			colorMode:         this.colorMode,
			numClusters:       this.numClusters,
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
		// Build search indices in background — don't block render
		this.buildSearchIndex();
		this.loadEmbeddings();
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
			const t = zoomTransform(this.svgEl);  // getter — NOT zoom.transform(sel) which is a setter!
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

	// ── 1. Read compiled graph file ───────────────────────────────────
	async buildGraph() {
		// Find the latest compiled graph file: wiki/graph/<timestamp>-graph.md
		const graphFiles = this.app.vault.getMarkdownFiles()
			.filter(f => GRAPH_FILE_RE.test(f.path))
			.sort((a, b) => b.basename.localeCompare(a.basename)); // newest first

		if (graphFiles.length === 0) {
			// Fallback: no compiled graph found
			this.nodes = [];
			this.edges = [];
			this.analytics = this.computeAnalytics();
			return;
		}

		const graphFile = graphFiles[0];
		console.log(`[llm-wiki-graph] reading compiled graph: ${graphFile.path}`);
		const content   = await this.app.vault.cachedRead(graphFile);
		const lines     = content.split('\n');

		// Phase 1: collect node metadata from wiki pages (type, domain, title)
		// We still need frontmatter — but only for display, not for edge extraction.
		const nodeMap = new Map<string, WikiNode>();
		const wikiFiles = this.app.vault.getMarkdownFiles().filter(f =>
			f.path.startsWith('wiki/') && !EXCLUDED_PATHS.some(ex => f.path.includes(ex)));

		for (const file of wikiFiles) {
			const fm = this.app.metadataCache.getFileCache(file)?.frontmatter ?? {};
			nodeMap.set(file.basename, {
				id:     file.basename,
				title:  (fm['title']  ?? file.basename) as string,
				type:   ((fm['type']  ?? 'unknown') as string).toLowerCase(),
				domain: (fm['domain'] ?? '') as string,
			});
		}

		// Phase 2: parse edge table from compiled graph
		// Table rows after "## Edge List" header
		const rawEdges: { src: string; tgt: string; label: string }[] = [];
		let inEdgeTable = false;
		for (const line of lines) {
			if (line.startsWith('## Edge List')) { inEdgeTable = true; continue; }
			if (inEdgeTable && line.startsWith('## ')) { inEdgeTable = false; continue; }
			if (!inEdgeTable) continue;
			const m = GRAPH_EDGE_RE.exec(line);
			if (!m) continue;
			const [, src, tgt, label] = m;
			if (src === 'Source') continue; // header row
			rawEdges.push({ src: src.trim(), tgt: tgt.trim(), label: label.trim() });
		}

		// Only include nodes that appear in the graph (have at least one edge)
		// plus keep isolated typed nodes for orphan display
		this.nodes = Array.from(nodeMap.values());
		this.edges = rawEdges
			.filter(e => nodeMap.has(e.src) && nodeMap.has(e.tgt))
			.map(e => ({ source: e.src, target: e.tgt, label: e.label }));
		this.analytics = this.computeAnalytics();
	}

	// ── 1b. BM25 search index ─────────────────────────────────────────
	private async buildSearchIndex() {
		const idx = new BM25Index();
		const wikiFiles = this.app.vault.getMarkdownFiles().filter(f =>
			f.path.startsWith('wiki/') && !EXCLUDED_PATHS.some(ex => f.path.includes(ex)));
		await Promise.all(wikiFiles.map(async (file) => {
			const raw  = await this.app.vault.cachedRead(file);
			const body = raw.replace(/^---[\s\S]*?---\n?/, ''); // strip frontmatter
			idx.add(file.basename, file.basename + ' ' + body);
		}));
		idx.finalize();
		this.bm25Index = idx;
	}

	// ── 1c. Load pre-computed embeddings ─────────────────────────────
	private async loadEmbeddings() {
		const embFile = this.app.vault.getAbstractFileByPath('wiki/search/embeddings.json');
		if (!(embFile instanceof TFile)) return;
		try {
			const raw  = await this.app.vault.read(embFile);
			const data: Record<string, number[]> = JSON.parse(raw);
			this.embeddings = new Map(Object.entries(data));
			console.log(`[llm-wiki-graph] loaded ${this.embeddings.size} embeddings`);
			if (this.colorMode === 'semantic') this.computeClusters(this.numClusters);
		} catch (e) {
			console.warn('[llm-wiki-graph] could not load embeddings:', e);
		}
	}

	// ── k-means clustering on embeddings ─────────────────────────────
	private computeClusters(k: number) {
		this.clusterMap.clear();
		const emb = this.embeddings;
		if (!emb || emb.size === 0) return;
		const ids  = [...emb.keys()];
		const vecs = ids.map(id => emb.get(id)!);
		const dim  = vecs[0]?.length ?? 0;
		if (dim === 0 || ids.length < k) { ids.forEach((id, i) => this.clusterMap.set(id, i % k)); return; }

		// k-means++ init: first centroid random, each next is furthest from existing
		const cosDist = (a: number[], b: number[]) => {
			let dot = 0, na = 0, nb = 0;
			for (let i = 0; i < a.length; i++) { dot += a[i]*b[i]; na += a[i]*a[i]; nb += b[i]*b[i]; }
			const sim = na === 0 || nb === 0 ? 0 : dot / (Math.sqrt(na) * Math.sqrt(nb));
			return 1 - sim;
		};
		const centroids: number[][] = [vecs[Math.floor(Math.random() * vecs.length)]];
		while (centroids.length < k) {
			const dists = vecs.map(v => Math.min(...centroids.map(c => cosDist(v, c))));
			const sum   = dists.reduce((a, b) => a + b, 0);
			let rnd = Math.random() * sum;
			let idx = 0;
			for (; idx < dists.length - 1; idx++) { rnd -= dists[idx]; if (rnd <= 0) break; }
			centroids.push(vecs[idx]);
		}

		// iterate
		const assignments = new Array<number>(vecs.length).fill(0);
		for (let iter = 0; iter < 25; iter++) {
			// assign
			let changed = false;
			for (let i = 0; i < vecs.length; i++) {
				let best = 0, bestD = Infinity;
				for (let c = 0; c < k; c++) { const d = cosDist(vecs[i], centroids[c]); if (d < bestD) { bestD = d; best = c; } }
				if (assignments[i] !== best) { assignments[i] = best; changed = true; }
			}
			if (!changed) break;
			// update centroids
			for (let c = 0; c < k; c++) {
				const members = vecs.filter((_, i) => assignments[i] === c);
				if (members.length === 0) continue;
				const newC = new Array<number>(dim).fill(0);
				for (const v of members) for (let d = 0; d < dim; d++) newC[d] += v[d] / members.length;
				centroids[c] = newC;
			}
		}
		ids.forEach((id, i) => this.clusterMap.set(id, assignments[i]));
		console.log(`[llm-wiki-graph] computed ${k} clusters over ${ids.length} nodes`);
	}

	// ── 1d. Semantic search via Ollama ───────────────────────────────
	private async runSemanticSearch(query: string): Promise<{ id: string; score: number }[]> {
		if (!this.embeddings || !query.trim()) return [];
		let queryVec: number[];
		try {
			const resp = await fetch(`${this.embeddingEndpoint}/api/embeddings`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ model: this.embeddingModel, prompt: query }),
			});
			if (!resp.ok) return [];
			queryVec = (await resp.json()).embedding as number[];
		} catch { return []; }

		const scores: [string, number][] = [];
		for (const [id, vec] of this.embeddings) {
			scores.push([id, cosineSim(queryVec, vec)]);
		}
		scores.sort((a, b) => b[1] - a[1]);
		return scores.slice(0, 30).filter(([, s]) => s >= 0.45).map(([id, score]) => ({ id, score }));
	}


	private computeAnalytics(): Analytics {
		const degreeOf = new Map<string, number>();
		for (const e of this.edges) {
			const s = e.source as string, t = e.target as string;
			degreeOf.set(s, (degreeOf.get(s)??0)+1);
			degreeOf.set(t, (degreeOf.get(t)??0)+1);
		}

		// Out-degree within same domain (proxy for "local children count")
		const nodeById = new Map<string, WikiNode>(this.nodes.map(nd => [nd.id, nd]));
		const intraDomainOut = new Map<string, number>();
		for (const e of this.edges) {
			const s = e.source as string, t = e.target as string;
			const srcDomain = nodeById.get(s)?.domain;
			const tgtDomain = nodeById.get(t)?.domain;
			if (srcDomain && srcDomain === tgtDomain) {
				intraDomainOut.set(s, (intraDomainOut.get(s)??0) + 1);
			}
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

		return {n,m,density,avgDeg,orphans:orphanIds.length,orphanIds,layers,edgeTypes,hubs,domains,degreeOf,intraDomainOut};
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
		// When domain filter is active, always show all domain nodes (ignore orphan setting)
		const domainActive = this.selectedDomains.size > 0;

		// node opacity / display
		this.selNodeEl.style('opacity', (d: WikiNode) => {
			if (this.hiddenTypes.has(d.type)) return '0';
			if (!domainActive && !this.showOrphans && (adj.get(d.id)?.size ?? 0) === 0) return '0';
			if (!sel) return '1';
			return d.id === sel || neighbors!.has(d.id) ? '1' : '0.07';
		}).style('display', (d: WikiNode) => {
			if (this.hiddenTypes.has(d.type)) return 'none';
			if (!domainActive && !this.showOrphans && (adj.get(d.id)?.size ?? 0) === 0) return 'none';
			return null;
		});

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
		// Stop old simulation and cancel any pending rAF before rebuilding DOM
		this.sim?.stop();
		if (this.pendingRaf !== null) { cancelAnimationFrame(this.pendingRaf); this.pendingRaf = null; }

		const container = this.containerEl.children[1] as HTMLElement;
		container.empty();
		container.addClass('llm-graph-container');
		const A = this.analytics!;

		// ── Domain subgraph filter (computed early for N) ───────────────
		const domFilt = this.selectedDomains;
		const renderNodes = domFilt.size > 0
			? this.nodes.filter(n => domFilt.has(n.domain))
			: this.nodes;
		const renderNodeIds = new Set(renderNodes.map(n => n.id));
		const renderEdges = domFilt.size > 0
			? this.edges.filter(e =>
				renderNodeIds.has(e.source as string) && renderNodeIds.has(e.target as string))
			: this.edges;

		// ── Auto-scale physics to graph size ───────────────────────────
		const N = renderNodes.length;
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
			attr: { type: 'text', placeholder: 'Search nodes… (BM25 + semantic)' }
		});
		const semIndicator = searchBar.createSpan({ cls: 'llm-graph-sem-indicator' });
		semIndicator.style.display = 'none';
		const findBtn = searchBar.createEl('button', { cls: 'llm-graph-btn llm-graph-find-btn', text: 'Find' });
		const searchClear = searchBar.createEl('button', { cls: 'llm-graph-search-clear', text: '×' });
		searchClear.style.display = 'none';

		// Results panel — scrollable, overlays graph from top
		const resultsPanel = container.createDiv({ cls: 'llm-graph-results' });
		resultsPanel.style.display = 'none';

		// Restore saved search
		if (this.searchQuery) {
			searchInput.value = this.searchQuery;
			searchClear.style.display = 'flex';
		}

		const nodeById = new Map<string, WikiNode>(this.nodes.map(n => [n.id, n]));

		const clearSearch = () => {
			searchInput.value = '';
			this.searchQuery = '';
			this.semanticIds.clear();
			semIndicator.style.display = 'none';
			searchClear.style.display = 'none';
			resultsPanel.style.display = 'none';
			resultsPanel.empty();
			if (!this.selNodeEl) return;
			this.selNodeEl.style('opacity', null).style('pointer-events', null);
			this.selEdgeLine?.style('opacity', null);
			this.selEdgeLabel?.style('opacity', null);
			this.saveSettings();
		};

		const renderVisibility = (bm25Ids: Set<string>, semIds: Set<string>) => {
			if (!this.selNodeEl) return;
			this.selNodeEl
				.style('opacity', (d: WikiNode) => {
					if (bm25Ids.has(d.id)) return '1';
					if (semIds.has(d.id))  return '0.5';
					return '0.06';
				})
				.style('pointer-events', (d: WikiNode) =>
					bm25Ids.has(d.id) || semIds.has(d.id) ? null : 'none');
			this.selEdgeLine?.style('opacity', (d: any) => {
				const s = (d.source as WikiNode).id, t = (d.target as WikiNode).id;
				if (bm25Ids.has(s) || bm25Ids.has(t)) return '0.6';
				if (semIds.has(s)  || semIds.has(t))  return '0.25';
				return '0.03';
			});
			this.selEdgeLabel?.style('opacity', (d: any) => {
				const s = (d.source as WikiNode).id, t = (d.target as WikiNode).id;
				if (bm25Ids.has(s) || bm25Ids.has(t)) return '1';
				if (semIds.has(s)  || semIds.has(t))  return '0.5';
				return '0';
			});
		};

		const buildResultsPanel = (
			bm25Hits: { id: string; score: number }[],
			semHits:  { id: string; score: number }[]
		) => {
			resultsPanel.empty();
			const all = new Map<string, { bm25: number; sem: number }>();
			for (const { id, score } of bm25Hits) all.set(id, { bm25: score, sem: 0 });
			for (const { id, score } of semHits) {
				const ex = all.get(id) ?? { bm25: 0, sem: 0 };
				all.set(id, { ...ex, sem: score });
			}
			if (all.size === 0) {
				resultsPanel.createDiv({ cls: 'llm-res-empty', text: 'No results found.' });
				resultsPanel.style.display = 'flex';
				return;
			}
			// Sort: BM25 hits first (exact), then semantic-only
			const sorted = [...all.entries()].sort((a, b) => {
				const da = a[1], db = b[1];
				const sa = da.bm25 > 0 ? da.bm25 * 2 + da.sem : da.sem;
				const sb = db.bm25 > 0 ? db.bm25 * 2 + db.sem : db.sem;
				return sb - sa;
			});
			const header = resultsPanel.createDiv({ cls: 'llm-res-header' });
			header.createSpan({ text: `${sorted.length} results` });
			if (semHits.length > 0) header.createSpan({ cls: 'llm-res-sem-tag', text: '~ semantic' });
			for (const [id, { bm25, sem }] of sorted) {
				const nd = nodeById.get(id);
				if (!nd) continue;
				const row = resultsPanel.createDiv({ cls: 'llm-res-row' });
				if (bm25 > 0) row.addClass('llm-res-row--bm25');
				else          row.addClass('llm-res-row--sem');
				const badge = row.createSpan({ cls: 'llm-res-score' });
				badge.textContent = sem > 0 ? sem.toFixed(2) : '—';
				badge.title = `BM25: ${bm25.toFixed(1)}  semantic: ${sem.toFixed(2)}`;
				const domTag = row.createSpan({ cls: 'llm-res-domain', text: nd.domain || nd.type });
				domTag.style.background = nd.domain ? domainColor(nd.domain) + '33' : '';
				domTag.style.color      = nd.domain ? domainColor(nd.domain) : '';
				const link = row.createEl('a', { cls: 'llm-res-title', text: nd.title });
				link.addEventListener('click', () => {
					this.app.workspace.openLinkText(id, '', false);
					// pan graph to node
					const simNd = nd as any;
					if (simNd.x != null && simNd.y != null && this.zoomBehavior && this.svgEl) {
						const { width: W, height: H } = this.svgEl.getBoundingClientRect();
						const t = zoomIdentity.translate(W/2 - simNd.x, H/2 - simNd.y);
						select<SVGSVGElement, unknown>(this.svgEl).transition().duration(400)
							.call(this.zoomBehavior.transform, t);
					}
				});
			}
			resultsPanel.style.display = 'flex';
		};

		// BM25 highlights on input (instant, no results panel)
		searchInput.addEventListener('input', () => {
			this.searchQuery = searchInput.value;
			this.saveSettings();
			const q = this.searchQuery.toLowerCase().trim();
			searchClear.style.display = q ? 'flex' : 'none';
			if (!q) { clearSearch(); return; }
			// instant BM25 highlight only
			const queryTerms = tokenize(q);
			const bm25Ids = new Set<string>();
			for (const n of this.nodes) {
				let score = 0;
				if (n.title.toLowerCase().includes(q))  score += 10;
				if (n.type.toLowerCase().includes(q))   score += 5;
				if (n.domain.toLowerCase().includes(q)) score += 5;
				if (this.bm25Index && queryTerms.length > 0) score += this.bm25Index.score(n.id, queryTerms);
				if (score > 0) bm25Ids.add(n.id);
			}
			renderVisibility(bm25Ids, this.semanticIds);
		});

		// Enter key → trigger Find
		searchInput.addEventListener('keydown', (e: KeyboardEvent) => {
			if (e.key === 'Enter') findBtn.click();
		});

		// Find button — BM25 + semantic + results panel
		findBtn.addEventListener('click', async () => {
			const q = this.searchQuery.trim();
			if (!q) { clearSearch(); return; }
			findBtn.disabled = true;
			findBtn.textContent = '…';
			semIndicator.textContent = '⟳ searching…';
			semIndicator.style.display = 'inline';

			const ql = q.toLowerCase();
			const queryTerms = tokenize(ql);
			const bm25Hits: { id: string; score: number }[] = [];
			for (const n of this.nodes) {
				let score = 0;
				if (n.title.toLowerCase().includes(ql))  score += 10;
				if (n.type.toLowerCase().includes(ql))   score += 5;
				if (n.domain.toLowerCase().includes(ql)) score += 5;
				if (this.bm25Index && queryTerms.length > 0) score += this.bm25Index.score(n.id, queryTerms);
				if (score > 0) bm25Hits.push({ id: n.id, score });
			}

			const semHits = await this.runSemanticSearch(q);
			const bm25Ids = new Set(bm25Hits.map(r => r.id));
			const semIds  = new Set(semHits.map(r => r.id));
			this.semanticIds = semIds;

			renderVisibility(bm25Ids, semIds);
			buildResultsPanel(bm25Hits, semHits);

			const total = new Set([...bm25Ids, ...semIds]).size;
			semIndicator.textContent = total > 0
				? `BM25: ${bm25Ids.size}  ~: ${semIds.size}`
				: 'no results';
			semIndicator.style.display = 'inline';
			findBtn.disabled = false;
			findBtn.textContent = 'Find';
		});

		searchClear.addEventListener('click', () => { clearSearch(); searchInput.focus(); });

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
		const semBtn   = mkBtn('cpu',          'Semantic',  this.semSidebarOpen);
		const clrBtn   = mkBtn('layers',       'Clusters',  this.colorMode === 'semantic');
		const sbBtn    = mkBtn('bar-chart-2',  'Analytics', this.sidebarOpen);
		toolbar.createSpan({ cls:'llm-graph-stats',
			text:`${A.n} nodes · ${A.m} edges · density ${A.density}` });


		// placeholder adjacency (filled after rAF)
		let adj = new Map<string,Set<string>>();

		// ── Layout: semantic sidebar (left) + SVG + analytics sidebar (right) ─
		const layout = container.createDiv({ cls: 'llm-graph-layout' });
		const semSidebar = layout.createDiv({ cls: 'llm-graph-sem-sidebar' });
		if (this.semSidebarOpen) semSidebar.addClass('llm-graph-sem-sidebar--open');
		const svgEl  = layout.createSvg('svg', { cls: 'llm-graph-svg' });
		this.svgEl   = svgEl;
		const sidebar = layout.createDiv({ cls: 'llm-graph-sidebar' });
		if (this.sidebarOpen) sidebar.addClass('llm-graph-sidebar--open');
		this.buildSidebar(sidebar, A, adj);
		this.buildSemanticSidebar(semSidebar);

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

		// Restore saved zoom — skip when domain filter active (auto-fit will handle it)
		if (this.savedTransform && this.selectedDomains.size === 0) {
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
		const nodeMap   = new Map(renderNodes.map(n=>[n.id,n]));
		const simEdges  = renderEdges.map(e=>({
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

			this.sim = forceSimulation<WikiNode>(renderNodes)
				.force('link',    linkForce)
				.force('charge',  chargeForce)
				.force('gx',      gX)
				.force('gy',      gY)
				.force('collide', forceCollide(collideR));

			// Build adjacency after simEdges resolved — mutate in place so sidebar closures see the updated map
			const builtAdj = this.buildAdjacency(simEdges);
			adj.clear();
			for (const [k, v] of builtAdj) adj.set(k, v);

			// Edges — colored by domain if both nodes share a domain
			const edgeLine = g.append('g')
				.selectAll<SVGLineElement,typeof simEdges[0]>('line')
				.data(simEdges).join('line')
				.attr('class','llm-graph-edge')
				.attr('stroke-width', this.edgeWidth)
				.style('stroke', (d: any) => {
					// inline style wins over CSS class — mandatory for domain coloring
					const domain = (d.source as WikiNode).domain || (d.target as WikiNode).domain;
					return domain ? domainColor(domain) : '#888';
				})
				.style('stroke-opacity', (d: any) => {
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
			.data(renderNodes).join('g')
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

			// capture for closures inside .each(function(){})
		const colorMode_   = this.colorMode;
		const clusterMap_  = this.clusterMap;
		const nodeScale_   = this.nodeScale;

		nodeEl.each(function(d) {
				const g = select<SVGGElement, WikiNode>(this as SVGGElement);
				let color: string;
				if (colorMode_ === 'semantic' && clusterMap_.has(d.id)) {
					color = DOMAIN_PALETTE[clusterMap_.get(d.id)! % DOMAIN_PALETTE.length];
				} else {
					color = NODE_COLORS[d.type] ?? '#BAB0AC';
				}
				const shape  = NODE_SHAPES[d.type]  ?? 'circle';
				const cls    = 'llm-graph-node-shape';
				// Size: prefer intra-domain children count; fallback to total degree
				const intraDom = A.intraDomainOut.get(d.id) ?? 0;
				const deg      = A.degreeOf.get(d.id) ?? 0;
				const sizeVal  = intraDom > 0 ? intraDom : deg;
				// base scale from degree (log); nodeScale multiplier applied on top
				const baseS = 1 + Math.log1p(sizeVal) * (intraDom > 0 ? 0.5 : 0.25);
				const sw = g.append('g').attr('class', 'llm-node-shape-wrapper')
					.attr('data-base-scale', baseS)          // stored for slider updates
					.attr('transform', `scale(${baseS * nodeScale_})`);
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

			// Auto-fit when domain filter active or no saved transform
			const shouldAutoFit = this.selectedDomains.size > 0 || !this.savedTransform;
			if (shouldAutoFit) {
				this.sim.on('end', () => {
					const nodes = renderNodes.filter(d => d.x != null && d.y != null);
					if (nodes.length === 0) return;
					const xs = nodes.map(d => d.x!), ys = nodes.map(d => d.y!);
					const x0 = Math.min(...xs), x1 = Math.max(...xs);
					const y0 = Math.min(...ys), y1 = Math.max(...ys);
					const W = svgEl.clientWidth || 900, H = svgEl.clientHeight || 700;
					const pad = 60;
					const scaleX = (W - pad*2) / Math.max(x1 - x0, 1);
					const scaleY = (H - pad*2) / Math.max(y1 - y0, 1);
					const k = Math.min(scaleX, scaleY, 3); // cap at 3× zoom
					const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
					svg.transition().duration(500)
						.call(this.zoomBehavior.transform,
							zoomIdentity.translate(W/2, H/2).scale(k).translate(-cx, -cy));
				});
			}

			// Wire physics sliders (must happen after sim is created)
			sidebar.querySelectorAll<HTMLInputElement>('[data-physics]').forEach(input=>{
				input.addEventListener('input',()=>{
					const val = +input.value;
					const key = input.dataset.physics!;
					const lbl = input.nextElementSibling as HTMLElement;
					const isFloat = key === 'gravityStr' || key === 'labelFadeAt' || key === 'nodeScale' || key === 'edgeWidth';
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
					} else if (key==='nodeScale') {
						this.nodeScale = val;
						// Update each node wrapper: scale(baseS * nodeScale) — keeps degree-dynamic sizing
						g.selectAll<SVGGElement, WikiNode>('.llm-node-shape-wrapper').attr('transform', function() {
							const baseS = +(this.getAttribute('data-base-scale') ?? 1);
							return `scale(${baseS * val})`;
						});
						this.saveSettings();
						return;
					} else if (key==='edgeWidth') {
						this.edgeWidth = val;
						this.selEdgeLine?.attr('stroke-width', val);
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
		semBtn.addEventListener('click',()=>{
			this.semSidebarOpen=!this.semSidebarOpen;
			semBtn.toggleClass('llm-graph-btn--active',this.semSidebarOpen);
			semSidebar.toggleClass('llm-graph-sem-sidebar--open',this.semSidebarOpen);
			this.saveSettings();
		});
		clrBtn.addEventListener('click',()=>{
			if (this.colorMode === 'type') {
				if (!this.embeddings || this.embeddings.size === 0) {
					new (require('obsidian').Notice)('Generate embeddings first (Semantic sidebar)');
					return;
				}
				this.colorMode = 'semantic';
				this.computeClusters(this.numClusters);
			} else {
				this.colorMode = 'type';
			}
			clrBtn.toggleClass('llm-graph-btn--active', this.colorMode === 'semantic');
			this.saveSettings();
			this.render();
		});
	}

	// ── 5a. Generate embeddings for all wiki nodes ───────────────────
	private async generateEmbeddings(progressEl: HTMLElement) {
		const wikiFiles = this.app.vault.getMarkdownFiles().filter(f =>
			f.path.startsWith('wiki/') && !['wiki/updates/','wiki/compiled/','wiki/graph/','wiki/synthesis/','wiki/decisions/'].some(ex => f.path.includes(ex)));

		const result: Record<string, number[]> = {};
		const total = wikiFiles.length;
		let done = 0, failed = 0;

		for (const file of wikiFiles) {
			progressEl.textContent = `${done}/${total} embedded${failed ? ` (${failed} failed)` : ''}…`;
			try {
				const raw = await this.app.vault.cachedRead(file);
				// Use first 1000 chars of content (skip frontmatter)
				const body = raw.replace(/^---[\s\S]*?---\n?/, '').slice(0, 1000);
				const text = file.basename + '. ' + body;
				const resp = await fetch(`${this.embeddingEndpoint}/api/embeddings`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ model: this.embeddingModel, prompt: text }),
				});
				if (!resp.ok) { failed++; continue; }
				const vec = (await resp.json()).embedding as number[];
				if (vec?.length) result[file.basename] = vec;
			} catch { failed++; }
			done++;
		}

		progressEl.textContent = `Done: ${done} embedded, ${failed} failed. Saving…`;

		// Save to wiki/search/embeddings.json
		const outPath = 'wiki/search/embeddings.json';
		const json = JSON.stringify(result);
		const existing = this.app.vault.getAbstractFileByPath(outPath);
		if (existing instanceof TFile) {
			await this.app.vault.modify(existing, json);
		} else {
			// ensure folder exists
			try { await this.app.vault.createFolder('wiki/search'); } catch {}
			await this.app.vault.create(outPath, json);
		}
		progressEl.textContent = `✓ ${Object.keys(result).length} embeddings saved.`;
	}

	// ── 5b. Semantic Sidebar ──────────────────────────────────────────
	private buildSemanticSidebar(el: HTMLElement) {
		el.empty();
		const emb = this.embeddings;
		const nodes = this.nodes;

		const section = (title: string) => {
			const s = el.createDiv({ cls: 'llm-sb-section' });
			s.createDiv({ cls: 'llm-sb-title', text: title });
			return s;
		};

		if (!emb || emb.size === 0) {
			const ns = section('Semantic Metrics');
			ns.createDiv({ cls: 'llm-sb-muted', text: 'No embeddings found. Generate them below (requires Ollama running). Configure endpoint and model in plugin Settings.' });
		} else {
		// ── Cosine similarity helper ──────────────────────────────────
		const cosSim = (a: number[], b: number[]) => {
			let dot = 0, na = 0, nb = 0;
			for (let i = 0; i < a.length; i++) { dot += a[i]*b[i]; na += a[i]*a[i]; nb += b[i]*b[i]; }
			return na === 0 || nb === 0 ? 0 : dot / (Math.sqrt(na) * Math.sqrt(nb));
		};

		// ── Compute per-domain centroids and cohesion ─────────────────
		const domainNodes = new Map<string, WikiNode[]>();
		for (const nd of nodes) {
			if (!nd.domain || !emb.has(nd.id)) continue;
			if (!domainNodes.has(nd.domain)) domainNodes.set(nd.domain, []);
			domainNodes.get(nd.domain)!.push(nd);
		}

		type DomainStats = { cohesion: number; centroid: number[]; outliers: {id: string; sim: number}[] };
		const domainStats = new Map<string, DomainStats>();
		const dim = emb.values().next().value?.length ?? 0;

		for (const [dom, dnodes] of domainNodes) {
			if (dnodes.length < 2 || dim === 0) continue;
			// centroid
			const centroid = new Array<number>(dim).fill(0);
			for (const nd of dnodes) {
				const v = emb.get(nd.id)!;
				for (let i = 0; i < dim; i++) centroid[i] += v[i] / dnodes.length;
			}
			// cohesion = mean cos-sim to centroid
			const sims = dnodes.map(nd => ({ id: nd.id, sim: cosSim(emb.get(nd.id)!, centroid) }));
			const cohesion = sims.reduce((s, x) => s + x.sim, 0) / sims.length;
			// outliers = lowest sim to centroid
			const outliers = [...sims].sort((a, b) => a.sim - b.sim).slice(0, 5);
			domainStats.set(dom, { cohesion, centroid, outliers });
		}

		// ── Domain Cohesion section ───────────────────────────────────
		const cs = section('Domain Cohesion');
		cs.createDiv({ cls: 'llm-sb-muted', text: 'avg cos-sim to domain centroid (1.0 = perfectly focused)' });
		const sorted = [...domainStats.entries()].sort((a,b) => b[1].cohesion - a[1].cohesion);
		const maxCoh = Math.max(...sorted.map(([,v]) => v.cohesion), 0.01);
		for (const [dom, { cohesion }] of sorted) {
			const row = cs.createDiv({ cls: 'llm-sb-bar-row' });
			row.createSpan({ cls: 'llm-sb-bar-name', text: dom });
			const track = row.createDiv({ cls: 'llm-sb-track' });
			const pct = Math.max(cohesion / maxCoh * 100, 2);
			const hue = Math.round(cohesion * 120); // red→green
			track.createDiv({ cls: 'llm-sb-fill', attr: { style: `width:${pct}%;background:hsl(${hue},60%,45%)` }});
			row.createSpan({ cls: 'llm-sb-bar-cnt', text: cohesion.toFixed(2) });
		}

		// ── Semantic Outliers section ─────────────────────────────────
		const os = section('Semantic Outliers');
		os.createDiv({ cls: 'llm-sb-muted', text: 'nodes farthest from their domain centroid' });
		for (const [dom, { outliers }] of sorted.slice(0, 8)) {
			const domRow = os.createDiv({ cls: 'llm-sb-outlier-domain' });
			domRow.createSpan({ cls: 'llm-sb-bar-name', text: dom });
			for (const o of outliers.slice(0, 3)) {
				const r = os.createDiv({ cls: 'llm-sb-outlier-row' });
				r.createSpan({ cls: 'llm-sb-outlier-sim', text: o.sim.toFixed(2) });
				const link = r.createEl('a', { cls: 'llm-sb-outlier-name', text: o.id.length > 28 ? o.id.slice(0,26)+'…' : o.id });
				link.setAttribute('title', o.id);
				link.addEventListener('click', () => this.app.workspace.openLinkText(o.id, '', false));
			}
		}

		// ── Missing Links section ─────────────────────────────────────
		const ms = section('Missing Links');
		ms.createDiv({ cls: 'llm-sb-muted', text: 'similar nodes without an edge (cos-sim > 0.80)' });
		const edgeSet = new Set(this.edges.map(e => `${e.source}|${e.target}`));
		const embIds  = nodes.filter(n => emb.has(n.id)).map(n => n.id);
		const missing: { a: string; b: string; sim: number }[] = [];
		const MISS_THRESH = 0.80;
		if (embIds.length <= 300) {
			for (let i = 0; i < embIds.length && missing.length < 200; i++) {
				for (let j = i+1; j < embIds.length; j++) {
					if (edgeSet.has(`${embIds[i]}|${embIds[j]}`) || edgeSet.has(`${embIds[j]}|${embIds[i]}`)) continue;
					const s = cosSim(emb.get(embIds[i])!, emb.get(embIds[j])!);
					if (s >= MISS_THRESH) missing.push({ a: embIds[i], b: embIds[j], sim: s });
				}
			}
			missing.sort((a,b) => b.sim - a.sim);
		} else {
			ms.createDiv({ cls: 'llm-sb-muted', text: `${embIds.length} nodes — too many for full scan (max 300)` });
		}
		for (const { a, b, sim } of missing.slice(0, 15)) {
			const r = ms.createDiv({ cls: 'llm-sb-miss-row' });
			r.createSpan({ cls: 'llm-sb-outlier-sim', text: sim.toFixed(2) });
			const la = r.createEl('a', { cls: 'llm-sb-miss-name', text: a.length>18?a.slice(0,16)+'…':a });
			la.addEventListener('click', () => this.app.workspace.openLinkText(a, '', false));
			r.createSpan({ text: ' ↔ ' });
			const lb = r.createEl('a', { cls: 'llm-sb-miss-name', text: b.length>18?b.slice(0,16)+'…':b });
			lb.addEventListener('click', () => this.app.workspace.openLinkText(b, '', false));
		}
		if (missing.length === 0 && embIds.length <= 300) {
			ms.createDiv({ cls: 'llm-sb-muted', text: 'None found above threshold.' });
		}

		// ── Near Duplicates section ───────────────────────────────────
		const ds = section('Near Duplicates');
		ds.createDiv({ cls: 'llm-sb-muted', text: 'cos-sim > 0.93 — potential redundancy' });
		const dupes = missing.filter(x => x.sim >= 0.93);
		if (dupes.length === 0) {
			ds.createDiv({ cls: 'llm-sb-muted', text: 'None found.' });
		}
		for (const { a, b, sim } of dupes.slice(0, 10)) {
			const r = ds.createDiv({ cls: 'llm-sb-miss-row' });
			r.createSpan({ cls: 'llm-sb-outlier-sim', text: sim.toFixed(2) });
			const la = r.createEl('a', { cls: 'llm-sb-miss-name', text: a.length>18?a.slice(0,16)+'…':a });
			la.addEventListener('click', () => this.app.workspace.openLinkText(a, '', false));
			r.createSpan({ text: ' ↔ ' });
			const lb = r.createEl('a', { cls: 'llm-sb-miss-name', text: b.length>18?b.slice(0,16)+'…':b });
			lb.addEventListener('click', () => this.app.workspace.openLinkText(b, '', false));
		}

		// ── Cluster settings ──────────────────────────────────────────
		const ks = section('Semantic Clusters');
		const kRow = ks.createDiv({ cls: 'llm-sb-slider-row' });
		kRow.createSpan({ cls: 'llm-sb-slider-lbl', text: 'k clusters' });
		const kInput = kRow.createEl('input', { type: 'range' });
		kInput.addClass('llm-sb-slider');
		kInput.min = '2'; kInput.max = '20'; kInput.step = '1';
		kInput.value = String(this.numClusters);
		const kVal = kRow.createSpan({ cls: 'llm-sb-slider-val', text: String(this.numClusters) });
		kInput.addEventListener('input', () => {
			const k = +kInput.value;
			kVal.textContent = String(k);
			this.numClusters = k;
			this.saveSettings();
			if (this.colorMode === 'semantic') { this.computeClusters(k); this.render(); }
		});

		} // end else (embeddings exist)

		// ── Generate / Regenerate section (always visible) ────────────
		const gs = section(emb && emb.size > 0 ? `Regenerate Embeddings (${emb.size} stored)` : 'Generate Embeddings');
		gs.createDiv({ cls: 'llm-sb-muted', text: `Endpoint: ${this.embeddingEndpoint} · Model: ${this.embeddingModel}` });
		const progress = gs.createDiv({ cls: 'llm-sem-gen-progress' });
		const genBtn = gs.createEl('button', { cls: 'llm-graph-btn llm-sem-gen-btn', text: emb && emb.size > 0 ? 'Regenerate' : 'Generate Embeddings' });
		genBtn.addEventListener('click', async () => {
			genBtn.disabled = true;
			genBtn.textContent = 'Generating…';
			await this.generateEmbeddings(progress);
			await this.loadEmbeddings();
			this.buildSemanticSidebar(el);
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
		mkSlider('Node size',   'nodeScale',   0.3,  4.0,  this.nodeScale,   0.1);
		mkSlider('Edge width',  'edgeWidth',   0.5,  8.0,  this.edgeWidth,   0.5);
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

		// Domain coverage — click to toggle domain in subgraph filter
		const ds = section('Domain Coverage');
		// Show active filter count if any
		if (this.selectedDomains.size > 0) {
			const badge = ds.createDiv({ cls: 'llm-sb-domain-badge' });
			badge.setText(`${this.selectedDomains.size} selected — `);
			const clearAll = badge.createEl('a', { text: 'clear all' });
			clearAll.addEventListener('click', (e) => {
				e.stopPropagation();
				this.selectedDomains.clear();
				this.saveSettings();
				this.render();
			});
		}
		const maxD = Math.max(...A.domains.map(d=>d.count),1);
		for (const d of A.domains) {
			const isActive = this.selectedDomains.has(d.name);
			const row = ds.createDiv({ cls: 'llm-sb-bar-row llm-sb-domain-row' + (isActive ? ' llm-sb-domain-row--active' : '') });
			row.createSpan({ cls: 'llm-sb-bar-name', text: d.name });
			const track = row.createDiv({ cls: 'llm-sb-track' });
			const dfill = track.createDiv({ cls: 'llm-sb-fill' });
			dfill.style.cssText = `width:${Math.max(d.count/maxD*100,4)}%;background:${domainColor(d.name)}`;
			row.createSpan({ cls: 'llm-sb-bar-cnt', text: String(d.count) });
			row.addEventListener('click', () => {
				if (this.selectedDomains.has(d.name)) {
					this.selectedDomains.delete(d.name);
				} else {
					this.selectedDomains.add(d.name);
				}
				this.saveSettings();
				this.render();
			});
		}
	}
}

// ─── Settings Tab ─────────────────────────────────────────────────────────────
class LLMWikiSettingTab extends PluginSettingTab {
	plugin: LLMWikiSemanticGraph;
	constructor(app: any, plugin: LLMWikiSemanticGraph) {
		super(app, plugin);
		this.plugin = plugin;
	}
	display() {
		const { containerEl } = this;
		containerEl.empty();
		containerEl.createEl('h2', { text: 'LLM Wiki Semantic Graph' });

		new Setting(containerEl)
			.setName('Ollama endpoint')
			.setDesc('Base URL of your Ollama server (no trailing slash)')
			.addText(text => text
				.setPlaceholder('http://localhost:11434')
				.setValue(this.plugin.embeddingEndpoint)
				.onChange(async (val) => {
					const v = val.trim() || 'http://localhost:11434';
					this.plugin.embeddingEndpoint = v;
					const view = this.plugin.getActiveView();
					if (view) { view.embeddingEndpoint = v; view['saveSettings'](); }
				}));

		new Setting(containerEl)
			.setName('Embedding model')
			.setDesc('Ollama model to use for embeddings (must be pulled locally)')
			.addText(text => text
				.setPlaceholder('nomic-embed-text')
				.setValue(this.plugin.embeddingModel)
				.onChange(async (val) => {
					const v = val.trim() || 'nomic-embed-text';
					this.plugin.embeddingModel = v;
					const view = this.plugin.getActiveView();
					if (view) { view.embeddingModel = v; view['saveSettings'](); }
				}));
	}
}

// ─── Plugin ───────────────────────────────────────────────────────────────────
export default class LLMWikiSemanticGraph extends Plugin {
	embeddingEndpoint = 'http://localhost:11434';
	embeddingModel    = 'nomic-embed-text';

	async onload() {
		this.registerView(VIEW_TYPE, leaf => new SemanticGraphView(leaf, this));
		this.addRibbonIcon('git-fork','LLM Wiki Semantic Graph',()=>this.activateView());
		this.addCommand({id:'open-semantic-graph',name:'Open Semantic Graph',callback:()=>this.activateView()});
		this.addSettingTab(new LLMWikiSettingTab(this.app, this));
	}
	async activateView() {
		const {workspace}=this.app;
		let leaf=workspace.getLeavesOfType(VIEW_TYPE)[0];
		if (!leaf) { leaf=workspace.getRightLeaf(false)!; await leaf.setViewState({type:VIEW_TYPE,active:true}); }
		workspace.revealLeaf(leaf);
	}
	getActiveView(): SemanticGraphView | null {
		const leaf = this.app.workspace.getLeavesOfType(VIEW_TYPE)[0];
		return leaf?.view instanceof SemanticGraphView ? leaf.view as SemanticGraphView : null;
	}
	onunload() {}
}
