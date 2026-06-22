---
id: product-marketing.content.product_demo_storyboard
tier: production
vertical: product-marketing
title: "Product demo storyboard"
inputs: []
outputs: []
related: [product-brand.strategy.define_product_positioning]
---

# Product demo storyboard

## Purpose

Demo flow for video and live.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `product-marketing/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
