---
id: corporate-marketing.pr.crisis_comms_hold_message_templates
tier: foundation
vertical: corporate-marketing
title: "Crisis comms hold message templates"
inputs: []
outputs: []
related: [marketing-stack.platform.corporate_channel_matrix]
---

# Crisis comms hold message templates

## Purpose

Pre-approved visual + copy shells.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `corporate-marketing/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
