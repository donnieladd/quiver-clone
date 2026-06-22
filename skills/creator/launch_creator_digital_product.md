---
id: creator.product.launch_creator_digital_product
tier: production
vertical: creator
title: "Launch creator digital product"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Launch creator digital product

## Purpose

Course, template pack, preset launch.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
