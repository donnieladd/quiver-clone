---
id: marketing-stack.workflow.end_to_end_campaign_orchestration
tier: production
vertical: marketing-stack
title: "End to end campaign orchestration"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# End to end campaign orchestration

## Purpose

Brief → create → approve → publish → measure.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `marketing-stack/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
