---
id: fashion-luxury.campaign.runway_to_retail_campaign_bridge
tier: production
vertical: fashion-luxury
title: "Runway to retail campaign bridge"
inputs: []
outputs: []
related: [marketing-stack.platform.fashion_channel_matrix]
---

# Runway to retail campaign bridge

## Purpose

Show moment → accessible retail creative.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `fashion-luxury/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
