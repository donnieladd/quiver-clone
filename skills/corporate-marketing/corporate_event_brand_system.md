---
id: corporate-marketing.events.corporate_event_brand_system
tier: production
vertical: corporate-marketing
title: "Corporate event brand system"
inputs: []
outputs: []
related: [marketing-stack.platform.corporate_channel_matrix]
---

# Corporate event brand system

## Purpose

Conference booth, signage, keynote deck.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `corporate-marketing/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
