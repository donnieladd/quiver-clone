# Brand System Skills — Index

**Horizontal identity layer** — works for any vertical. Church profiles **consume** these tokens via `client_slug`.

Target product: **Brand Studio**.

---

## Five tiers (AI-ready design system)

| Tier | Name | Skills |
|------|------|--------|
| 0 | Strategy | `define_brand_strategy_tier` |
| 1 | Identity | `document_logo_matrix`, `define_logo_usage_rules` |
| 2 | Tokens | `define_design_tokens`, color/type/spacing/motion |
| 3 | Components | `define_component_tier_structure`, `map_tokens_to_template_families` |
| 4 | Templates | (vertical packs — church/social/*, etc.) |
| 5 | Campaigns | `create_series_token_override`, `archive_series_token_override` |

---

## Decision tree

```
New client brand?
│
├─ Strategy locked?
│   └─► define_brand_strategy_tier
│
├─ Build token JSON
│   └─► define_design_tokens
│       ├─► define_color_semantic_tokens
│       ├─► define_typography_scale
│       ├─► define_spacing_radius_tokens
│       ├─► define_motion_tokens
│       └─► define_elevation_shadow_tokens
│
├─ Logos
│   └─► document_logo_matrix → define_logo_usage_rules
│
├─ Sub-brand (Union Sound, Elevation Worship)
│   └─► define_subbrand_inheritance
│
├─ Sermon / product series (temporary)
│   └─► create_series_token_override → archive when done
│
├─ Export to tools
│   └─► export_tokens_css_variables | export_tokens_tailwind_theme | export_tokens_json_for_figma
│
└─ Lint before publish
    └─► run_token_lint_on_asset
```

---

## Schema

- **`schema.json`** — BrandSystem JSON Schema
- **`clients/faith-chapel.tokens.json`** — reference implementation

## Related packs

- Church vertical: `../church/profiles/*.json` links via `client_slug`
- Runtime: `../platform/brand_studio_*.md`
