# Obsidian Semantic Graph

A D3.js force-directed semantic graph plugin for [LLM-Wiki](https://github.com/mrtuborg/llm-wiki-template) vaults. Reads live vault content, renders typed nodes with distinct shapes and a professional color palette, and opens files on click — on both desktop and iOS.

---

## Features

- **Live graph** — reads directly from vault files, no separate export step
- **Typed node shapes** — epistemic category encoded in shape:
  - ◇ Diamond — Axiom, Rule (invariants)
  - □ Square — Process, Decision (actions)
  - ⬡ Hexagon — Pattern, Overview, Synthesis (structures)
  - ● Circle — Entity, Concept, Index (objects)
- **Tableau10 color palette** — professional, colorblind-accessible
- **Semantic edge labels** — parsed from `**edge_type** → [[target]]` syntax
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
| ☰ Nodes | Toggle node labels |
| — Edges | Toggle edge labels |
| → Arrows | Toggle edge arrows |
| 📊 Analytics | Open/close analytics sidebar |

### Type filter bar

Each pill shows the node shape + type name. Click to hide/show that type. **All** / **None** shortcuts on the right.

### Node interaction

| Action | Result |
|--------|--------|
| Single click | Select node — dims all non-neighbors to 7% opacity |
| Click background | Clear selection, restore all |
| Double-click | Open the wiki page in Obsidian |
| Drag | Reposition node (simulation resumes) |

### Analytics sidebar

- **Physics** — Link distance, Repulsion, Gravity sliders (live simulation update)
- **Graph Health** — nodes, edges, density, avg degree, orphans
- **Epistemic Layers** — coverage bars with `gap` markers for missing layers
- **Edge Types** — ranked bar chart of relationship type frequencies
- **Top Hubs** — top 10 nodes by degree; click row → zoom and focus node
- **Domain Coverage** — pages per domain

---

## Graph data format

The plugin reads wiki pages in `wiki/` (excluding `templates/`, `graph/`, `compiled/`, `updates/`, `Meta/`).

**Frontmatter** fields used:

```yaml
---
title: "Page Title"
type: Axiom          # Axiom | Entity | Process | Pattern | Concept | Rule | Overview | Decision | Synthesis | Index
domain: Embedded-Linux
---
```

**Outbound edges** parsed from page body:

```markdown
- **defines** → [[target-page-slug]]
- **constrains** → [[another-page]]
```

Edge types: `defines`, `constrains`, `relates_to`, `participates_in`, `instance_of`, `follows`, `specializes`, `implemented_by`, `generalized_into`, `governs`, `synthesizes`, `selects`, `justified_by`.

---

## Development

```bash
npm run build    # one-shot build → main.js
npm run dev      # watch mode
```

Built with [esbuild](https://esbuild.github.io/). D3 modules bundled: `d3-selection`, `d3-force`, `d3-zoom`, `d3-drag`.

---

## License

MIT
