---
id: product-brand.creator.whop_gumroad_product_page
tier: production
vertical: product-brand
title: "Whop Gumroad product page"
inputs: []
outputs: []
related: [brand-system.tokens.define_design_tokens]
---

# Whop Gumroad product page

## Purpose

Digital product page for creator-sold products.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per product-brand/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `brand-system.tokens.define_design_tokens`
