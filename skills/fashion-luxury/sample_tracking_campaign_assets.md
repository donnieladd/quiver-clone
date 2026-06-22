---
id: fashion-luxury.ops.sample_tracking_campaign_assets
tier: ops
vertical: fashion-luxury
title: "Sample tracking campaign assets"
inputs: []
outputs: []
related: [marketing-stack.platform.fashion_channel_matrix]
---

# Sample tracking campaign assets

## Purpose

Sample loans for shoots and influencers.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `fashion-luxury/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
