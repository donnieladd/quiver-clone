---
id: product-brand.packaging.design_dtc_shopify_brand_kit
tier: production
vertical: product-brand
title: "Design DTC Shopify brand kit"
inputs: []
outputs: []
related: [brand-system.tokens.define_design_tokens]
---

# Design DTC Shopify brand kit

## Purpose

Theme tokens + product page components.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per product-brand/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `brand-system.tokens.define_design_tokens`
