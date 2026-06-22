# Platform Skills — Brand Studio Runtime

Skills for **Brand Studio** application integration — project load, skill chains, media routing, QA, export.

Prefix: `platform.brand_studio.*`

| Skill | Purpose |
|-------|---------|
| `agent_read_order` | Canonical agent bootstrap sequence |
| `load_project` | Hydrate Brand Studio workspace |
| `attach_client_profile` | Bind church (or future) profile + tokens |
| `resolve_skill_chain` | Intent → ordered skill IDs |
| `route_media_generation` | API router for image/video/SVG |
| `integrate_quiver_svg` | `/v1/svgs/generations` integration |
| `run_qa_pipeline` | brand-system + vertical QA |
| `export_deliverable_bundle` | DAM export with manifest |
| `sync_dam_paths` | Profile folder structure |
| `content_calendar_sync` | Story / series calendar import |
| `approval_workflow_state` | Approval chain state machine |
| `execute_workflow` | Run step-by-step workflows via API/UI |
| `monorepo_pack_layout` | Merge Brand Studio repo + this skills tree |

Full manifest: `../manifest.json`
