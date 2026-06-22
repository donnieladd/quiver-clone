---
id: personal-brand.strategy.define_personal_brand_positioning
tier: foundation
vertical: personal-brand
title: "Define personal brand positioning"
inputs: []
outputs: []
related: [brand-system.tokens.define_design_tokens]
---

# Define personal brand positioning

## Purpose

Clarify niche, audience, and promise for a creator or executive brand.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per personal-brand/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `brand-system.tokens.define_design_tokens`
