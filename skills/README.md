# Skills — Brand Studio foundation

**422 skills** across 7 packs · Unified manifest · Higgsfield-style media API

| Pack | Skills | Purpose |
|------|--------|---------|
| `brand-system/` | 20 | Tokens, logos, lint, export |
| `personal-brand/` | 21 | Creator / executive personal brand |
| `product-brand/` | 23 | DTC, SaaS, packaging, launch |
| `creator/` | 27 | Content economy, UGC, monetization |
| `media/` | 26 | AI generator APIs (Higgsfield, OpenAI, …) |
| `platform/` | 12 | Brand Studio runtime |
| `church/` | 293 | Ministry vertical (first client pack) |

## Commands

```bash
npm run skills:generate-verticals   # personal/product/creator/media
npm run skills:church               # church baseline (preserves hand-written)
npm run skills:update-registry      # skills/manifest.json
npm run skills:validate-profiles
```

## Media API + Studio

- Docs: [`../docs/MEDIA_ENGINE.md`](../docs/MEDIA_ENGINE.md)
- UI: `/app/studio`
- API: `/v1/media/models`, `/v1/media/generations`

## Brand Studio merge

[`BRAND_STUDIO_INTEGRATION.md`](./BRAND_STUDIO_INTEGRATION.md)

## Agent read order

```
platform.brand_studio.agent_read_order
  → brand-system/clients/{slug}.tokens.json
  → vertical profile (church, personal-brand, …)
  → media.router.route_generation_request
  → brand-system.qa.run_token_lint_on_asset
```
