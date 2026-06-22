---
id: personal-brand.content.map_content_pillars_personal
tier: production
vertical: personal-brand
title: "Map content pillars personal"
inputs: []
outputs: []
related: [brand-system.tokens.define_design_tokens]
---

# Map content pillars personal

## Purpose

3–5 recurring themes for posting cadence.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per personal-brand/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `brand-system.tokens.define_design_tokens`
