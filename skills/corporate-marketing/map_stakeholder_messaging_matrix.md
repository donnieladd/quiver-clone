---
id: corporate-marketing.strategy.map_stakeholder_messaging_matrix
tier: foundation
vertical: corporate-marketing
title: "Map stakeholder messaging matrix"
inputs: []
outputs: []
related: [marketing-stack.platform.corporate_channel_matrix]
---

# Map stakeholder messaging matrix

## Purpose

Investors, employees, customers, press — message per audience.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `corporate-marketing/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
