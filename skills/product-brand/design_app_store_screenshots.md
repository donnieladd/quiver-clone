---
id: product-brand.marketplace.design_app_store_screenshots
tier: production
vertical: product-brand
title: "Design app store screenshots"
inputs: []
outputs: []
related: [brand-system.tokens.define_design_tokens]
---

# Design app store screenshots

## Purpose

Device frames + caption system.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per product-brand/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `brand-system.tokens.define_design_tokens`
