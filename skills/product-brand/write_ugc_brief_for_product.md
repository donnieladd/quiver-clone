---
id: product-brand.creator.write_ugc_brief_for_product
tier: production
vertical: product-brand
title: "Write UGC brief for product"
inputs: []
outputs: []
related: [brand-system.tokens.define_design_tokens]
---

# Write UGC brief for product

## Purpose

Brief for creators companies hire for product content.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per product-brand/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `brand-system.tokens.define_design_tokens`
