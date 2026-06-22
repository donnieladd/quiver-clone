---
id: corporate-marketing.content.internal_comms_visual_system
tier: foundation
vertical: corporate-marketing
title: "Internal comms visual system"
inputs: []
outputs: []
related: [marketing-stack.platform.corporate_channel_matrix]
---

# Internal comms visual system

## Purpose

Town hall, intranet, Slack headers — on-brand.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `corporate-marketing/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
