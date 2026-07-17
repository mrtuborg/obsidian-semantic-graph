# Obsidian Semantic Graph

A D3.js force-directed semantic graph plugin for [LLM-Wiki](https://github.com/mrtuborg/llm-wiki-template) vaults. Reads the pipeline-compiled graph file for ontology-validated edges, renders typed nodes with distinct shapes and a professional color palette, and opens files on click — on both desktop and iOS.

---

## Features

- **Pipeline-driven graph** — reads the compiled `wiki/graph/<timestamp>-graph.md` (ontology-validated edges only); raw page prose is never parsed for edges
- **Typed node shapes** — epistemic category encoded in shape:
  - ◇ Diamond — Axiom, Rule (invariants)
  - □ Square — Process, Decision (actions)
  - ⬡ Hexagon — Pattern, Overview, Synthesis (structures)
  - ● Circle — Entity, Concept, Index (objects)
- **Tableau10 color palette** — professional, colorblind-accessible node colors
- **Domain-colored coverage bars** — Domain Coverage sidebar bars use the same per-domain color as graph edges, sized proportionally to node count
- **Hybrid semantic search** — BM25 content search (instant) + vector embedding search (debounced, requires Ollama)
- **Click to open** — single click selects + dims non-neighbors; double-click opens the file
- **Type filter pills** — show/hide node types with shape-accurate pill icons
- **Analytics sidebar** — graph health cards, epistemic layer coverage, edge type ranking, top hubs by degree, domain coverage
- **Physics sliders** — live-adjust link distance, repulsion, and gravity
- **Gravity force** — `forceX`/`forceY` keeps disconnected subgraphs near center
- **iOS support** — `touch-action: none`, 44px touch targets, `requestAnimationFrame` sizing

---

## Installation

### From source

```bash
git clone git@github.com:mrtuborg/obsidian-semantic-graph.git
cd obsidian-semantic-graph
npm install
npm run build
```

Copy `main.js`, `manifest.json`, `styles.css` to your vault:

```
<vault>/.obsidian/plugins/llm-wiki-semantic-graph/
```

Enable in **Settings → Community Plugins**.

### From llm-wiki-template

The built plugin is tracked in the [llm-wiki-template](https://github.com/mrtuborg/llm-wiki-template) repo under `.obsidian/plugins/llm-wiki-semantic-graph/`. Clone the template to get it pre-installed.

---

## Usage

Click the **graph icon** in the Obsidian ribbon, or run `Open Semantic Graph` from the command palette.

### Toolbar

| Button | Action |
|--------|--------|
| ↺ Reset | Reset zoom/pan to origin |
| ↻ Refresh | Reload graph from vault |
| ☰ Nodes | Toggle node labels |
| — Edges | Toggle edge labels |
| → Arrows | Toggle edge arrows |
| 📊 Analytics | Open/close analytics sidebar |

### Search bar

The search bar supports two layers of search that run simultaneously:

| Layer | Speed | Description |
|-------|-------|-------------|
| **BM25** | Instant | Full-content search over all wiki page bodies. Ranks by term frequency × inverse document frequency — finds relevant nodes even when the query word isn't in the title. |
| **Semantic** | ~400 ms | Vector similarity via Ollama embeddings. Highlights semantically related nodes (dimmed to 50% opacity) that BM25 wouldn't catch. Requires Ollama running and `wiki/search/embeddings.json` present. |

A status indicator appears in the search bar showing `BM25: N  ~: M` — the count of direct content matches and semantic suggestions.

To enable semantic search, run the embeddings builder (see [Semantic search setup](#semantic-search-setup)).

### Type filter bar

Each pill shows the node shape + type name. Click to hide/show that type. **All** / **None** shortcuts on the right.

### Node interaction

| Action | Result |
|--------|--------|
| Single click | Select node — dims all non-neighbors to 6% opacity |
| Click background | Clear selection, restore all |
| Double-click | Open the wiki page in Obsidian |
| Drag | Reposition node (simulation resumes) |

### Analytics sidebar

- **Physics** — Link distance, Repulsion, Gravity sliders (live simulation update)
- **Graph Health** — nodes, edges, density, avg degree, orphans
- **Epistemic Layers** — coverage bars with `gap` markers for missing layers; each bar colored by node type
- **Edge Types** — ranked bar chart of relationship type frequencies
- **Top Hubs** — top 10 nodes by degree; click row → zoom and focus node
- **Domain Coverage** — pages per domain; each bar uses the domain's unique color (same as graph edges), width proportional to node count

---

## Graph data format

### Compiled graph file (required)

The plugin reads the **latest** file matching `wiki/graph/<timestamp>-graph.md`. This file is produced by the pipeline's Layer 7 (Compilation) step and contains only ontology-validated edges.

```
wiki/graph/20260717T224100Z-graph.md
```

Timestamp format: `\d{8}T\d{6}Z` (e.g. `20260717T224100Z`).

Edge table format (parsed after the `## Edge List` header):

```markdown
| Source | Type | Target | Label |
|--------|------|--------|-------|
| linux-kernel-modules | Process→Entity | kernel-module-loading | implements |
```

**The plugin never parses raw page body for edges.** All edge authority lives in the compiled graph file.

### Node metadata (from frontmatter)

Node type, domain, and title are still read from individual page frontmatter:

```yaml
---
title: "Page Title"
type: Axiom          # Axiom | Entity | Process | Pattern | Concept | Rule | Overview | Decision | Synthesis | Index
domain: Embedded-Linux
---
```

---

## Semantic search setup

Semantic search requires pre-computed embeddings and a running Ollama instance.

### 1. Pull the embedding model

```bash
ollama pull nomic-embed-text
```

### 2. Run the embeddings builder

```bash
# From vault root
python3 tools/search/build-embeddings.py
```

This reads all wiki pages, generates vector embeddings via the Ollama API, and writes `wiki/search/embeddings.json`. The script is **incremental** — re-running it only processes new or changed pages.

```bash
# Force full rebuild (after switching models)
python3 tools/search/build-embeddings.py --force --model nomic-embed-text
```

### 3. Reload the plugin

The plugin loads `wiki/search/embeddings.json` at startup. Reload the plugin (or restart Obsidian) after building embeddings.

### Embedding endpoint configuration

By default the plugin calls `http://localhost:11434`. To use a different Ollama host or model, edit the plugin's saved data in `.obsidian/plugins/llm-wiki-semantic-graph/data.json`:

```json
{
  "embeddingEndpoint": "http://localhost:11434",
  "embeddingModel": "nomic-embed-text"
}
```

If Ollama is not running, the plugin silently falls back to BM25-only search.

---

## Pipeline integration

This plugin is the **visualization layer** of the LLM-Wiki pipeline. It is intentionally read-only:

```
Layer 6 (Ingestion) → Layer 7 (Compilation) → wiki/graph/<ts>-graph.md
                                                       ↓
                                              Plugin reads graph file
                                              (pure visualization, no writes)
```

Run `tools/validate/check-ontology.py` before compilation to ensure all edges in the graph file are ontology-compliant. The plugin trusts the graph file — it does not re-validate edges.

Run `tools/search/build-embeddings.py` after each ingestion cycle to keep semantic search current.

---

## Development

```bash
npm run build    # one-shot build → main.js
npm run dev      # watch mode
```

Built with [esbuild](https://esbuild.github.io/). D3 modules bundled: `d3-selection`, `d3-force`, `d3-zoom`, `d3-drag`. No external runtime dependencies — BM25 index is built in-plugin; embedding calls go directly to the local Ollama HTTP API.

---

## License

MIT

