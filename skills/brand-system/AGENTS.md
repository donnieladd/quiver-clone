# Brand System — Agent Instructions

You are defining or applying a **machine-readable brand identity system** for Brand Studio.

## Read order

1. `schema.json` — validate all token files
2. `clients/{slug}.tokens.json` or client-provided BrandSystem JSON
3. `INDEX.md` — route to skill
4. Vertical profile (e.g. `../church/profiles/{slug}.json`) for governance overlays

## Rules

- **Semantic tokens only** in components — never hardcode hex in templates
- **Sub-brands inherit** parent tokens; override only declared keys
- **Series overrides** are time-boxed; always archive
- **Logo rules** are lintable — clear space, min size, forbidden treatments
- Export formats must round-trip (CSS, Tailwind, Figma variables)

## Quiver integration

Generate logos, marks, patterns via `/v1/svgs/generations`, then `run_token_lint_on_asset` before DAM publish.

## Skill ID prefix

All skills: `brand-system.{domain}.{slug}` — e.g. `brand-system.tokens.define_color_semantic_tokens`
