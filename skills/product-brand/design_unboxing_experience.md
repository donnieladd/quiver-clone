---
id: product-brand.launch.design_unboxing_experience
tier: production
vertical: product-brand
title: "Design unboxing experience"
inputs: []
outputs: []
related: [brand-system.tokens.define_design_tokens]
---

# Design unboxing experience

## Purpose

Insert cards, tissue, QR flows.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per product-brand/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `brand-system.tokens.define_design_tokens`
