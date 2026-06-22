---
id: corporate-marketing.sales.sales_enablement_deck_system
tier: production
vertical: corporate-marketing
title: "Sales enablement deck system"
inputs: []
outputs: []
related: [marketing-stack.platform.corporate_channel_matrix]
---

# Sales enablement deck system

## Purpose

Master deck + modular slides for AEs.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `corporate-marketing/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
