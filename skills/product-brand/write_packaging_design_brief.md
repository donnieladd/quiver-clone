---
id: product-brand.packaging.write_packaging_design_brief
tier: production
vertical: product-brand
title: "Write packaging design brief"
inputs: []
outputs: []
related: [brand-system.tokens.define_design_tokens]
---

# Write packaging design brief

## Purpose

Dielines, materials, shelf constraints.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per product-brand/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `brand-system.tokens.define_design_tokens`
