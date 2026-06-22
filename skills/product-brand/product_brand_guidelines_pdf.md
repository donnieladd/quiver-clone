---
id: product-brand.ops.product_brand_guidelines_pdf
tier: production
vertical: product-brand
title: "Product brand guidelines PDF"
inputs: []
outputs: []
related: [brand-system.tokens.define_design_tokens]
---

# Product brand guidelines PDF

## Purpose

Export tokens + usage for vendors.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per product-brand/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `brand-system.tokens.define_design_tokens`
