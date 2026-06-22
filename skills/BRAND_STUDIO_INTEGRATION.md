# Brand Studio — Integration Contract

This document is the **handoff spec** for merging `quiver-clone` skills + API into the Brand Studio repo. Read this first when pulling Brand Studio from GitHub.

## What lives here today

| Layer | Path | Role in Brand Studio |
|-------|------|----------------------|
| **Manifest** | `skills/manifest.json` | Single catalog — 325 skills, 3 packs |
| **Brand system** | `skills/brand-system/` | Tokens, logos, lint, export (vertical-agnostic) |
| **Platform** | `skills/platform/` | Runtime: project load, skill chains, QA, Quiver hook |
| **Church vertical** | `skills/church/` | Profiles, workflows, story, templates (first vertical) |
| **Vector API** | `src/app/v1/svgs/*` | Quiver-compatible SVG generation + vectorization |

## Agent bootstrap (canonical)

Skill: `platform.brand_studio.agent_read_order`

```
1. Load Brand Studio project.json (client_slug, vertical, active_series)
2. Load brand-system/clients/{slug}.tokens.json  (if exists)
3. Load vertical profile — church/profiles/{slug}.json
4. Merge tokens + profile → lint context
5. Route intent via church/INDEX.md or story/INDEX.md
6. Execute skill chain
7. platform.brand_studio.run_qa_pipeline
8. platform.brand_studio.export_deliverable_bundle
```

## Recommended monorepo layout (Option A — submodule)

```
brand-studio/                    # your GitHub repo
├── apps/
│   ├── studio/                  # Brand Studio UI + agent
│   └── quiver/                  # optional: move API here OR proxy
├── packages/
│   └── skills/                  # git submodule → quiver-clone/skills
├── skills/manifest.json         # symlink or copy from submodule
└── package.json
```

## Recommended layout (Option B — merge in place)

Copy into Brand Studio:

- `skills/` → entire tree
- `src/app/v1/` + `src/lib/` → media engine package or app route group
- `npm run skills:update-registry` → root script

## Data model links

```json
// church/profiles/faith-chapel.json (pattern for all clients)
{
  "brand": {
    "hub_url": "https://...",
    "tokens_file": "../../brand-system/clients/faith-chapel.tokens.json"
  }
}
```

Brand Studio project should store:

- `client_slug` — matches profile + tokens file
- `vertical` — `church` (extensible)
- `active_series` — optional series token override id
- `dam_root` — from profile `dam.folder_root`

## API integration

Skill: `platform.brand_studio.integrate_quiver_svg`

```http
POST /v1/svgs/generations
Authorization: Bearer {project_api_key}
Content-Type: application/json

{"model":"arrow-1.1","prompt":"...","stream":false}
```

Post-generation: `brand-system.qa.run_token_lint_on_asset` before DAM publish.

## Commands (keep in root package.json)

```bash
npm run skills:update-registry    # rebuild skills/manifest.json
npm run skills:validate-profiles  # church profiles only
npm run skills:church             # regenerate baseline church skills (skips hand-written)
```

## What not to duplicate in Brand Studio

- Skill markdown content — load from disk, don’t re-embed in DB
- Profile JSON — source of truth stays in `skills/church/profiles/`
- Token JSON — source of truth in `skills/brand-system/clients/`

Brand Studio DB should hold **project state** (approvals, calendar, generated asset refs), not skill definitions.

## Migration checklist (when you merge)

- [ ] Copy or submodule `skills/`
- [ ] Wire agent to read `skills/manifest.json`
- [ ] Implement `load_project` + `attach_client_profile`
- [ ] Point SVG generation at Quiver `/v1` (local or deployed)
- [ ] Token lint before export
- [ ] UI: client picker → profile + tokens preview
- [ ] Optional: token editor writes back to `clients/*.tokens.json`

## Open items (post-merge)

- Token files for Union, TC, Highlands, Elevation (Faith Chapel is reference)
- Brand lint API route (`POST /v1/brand/lint`) — can wrap `run_token_lint_on_asset`
- OAuth / DAM connectors — platform skills stubbed, implement in Brand Studio

---

**Product name:** Brand Studio  
**This repo role until merge:** skills source + Quiver API prototype  
**Skill reference:** `platform.brand_studio.monorepo_pack_layout`
