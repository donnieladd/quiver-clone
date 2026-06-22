---
id: product-marketing.analytics.launch_metrics_dashboard_spec
tier: ops
vertical: product-marketing
title: "Launch metrics dashboard spec"
inputs: []
outputs: []
related: [product-brand.strategy.define_product_positioning]
---

# Launch metrics dashboard spec

## Purpose

Awareness, activation, pipeline KPIs.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `product-marketing/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
