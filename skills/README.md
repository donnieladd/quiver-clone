# Skills — Brand Studio foundation

This repository’s skills layer is the **spec + policy engine** for [Brand Studio](https://github.com/donnieladd) (integration planned). Three packs work together:

| Pack | Path | Role |
|------|------|------|
| **Brand System** | `brand-system/` | Horizontal identity — tokens, logos, tiers, lint, export |
| **Church vertical** | `church/` | Ministry media — workflows, profiles, story, templates |
| **Platform** | `platform/` | Brand Studio runtime — project load, skill chains, media routing |

## Agent read order

```
platform.brand_studio.agent_read_order
  → brand-system/* (tokens for client)
  → church/profiles/{slug}.json (when vertical = church)
  → church/INDEX.md or story/INDEX.md
  → execute skill chain → platform QA + export
```

## Commands

```bash
npm run skills:church           # regenerate church baseline skills (skips hand-written)
npm run skills:update-registry  # rebuild manifest from all packs
npm run skills:validate-profiles
```

## Manifest

- Church catalog: `church/registry.json` (generated)
- Full skills scan: run `skills:update-registry` — includes `brand-system` + `platform`

## Integration note

Quiver SVG API is the **vector primitive**. Brand Studio will load these skill packs from disk, bind client token JSON, and run lint + generation in one project workspace.

**Integration:** [`BRAND_STUDIO_INTEGRATION.md`](./BRAND_STUDIO_INTEGRATION.md)
