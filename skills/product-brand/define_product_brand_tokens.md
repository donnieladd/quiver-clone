---
id: product-brand.identity.define_product_brand_tokens
tier: foundation
vertical: product-brand
title: "Define product brand tokens"
inputs: []
outputs: []
related: [brand-system.tokens.define_design_tokens]
---

# Define product brand tokens

## Purpose

Extend or fork parent brand tokens for SKU.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per product-brand/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `brand-system.tokens.define_design_tokens`
