---
id: creator.product.collab_with_brand_on_product
tier: production
vertical: creator
title: "Collab with brand on product"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Collab with brand on product

## Purpose

Co-branded product workflow (companies + creators).

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
