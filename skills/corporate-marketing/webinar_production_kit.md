---
id: corporate-marketing.events.webinar_production_kit
tier: production
vertical: corporate-marketing
title: "Webinar production kit"
inputs: []
outputs: []
related: [marketing-stack.platform.corporate_channel_matrix]
---

# Webinar production kit

## Purpose

Registration, reminders, slides, follow-up.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `corporate-marketing/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
