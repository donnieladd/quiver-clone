---
id: product-brand.launch.create_product_demo_video_script
tier: production
vertical: product-brand
title: "Create product demo video script"
inputs: []
outputs: []
related: [brand-system.tokens.define_design_tokens]
---

# Create product demo video script

## Purpose

60–90s demo script + shot list.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per product-brand/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `brand-system.tokens.define_design_tokens`
