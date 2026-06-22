---
id: product-marketing.launch.customer_announcement_email_sequence
tier: production
vertical: product-marketing
title: "Customer announcement email sequence"
inputs: []
outputs: []
related: [product-brand.strategy.define_product_positioning]
---

# Customer announcement email sequence

## Purpose

Existing user comms for feature/product launch.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `product-marketing/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
