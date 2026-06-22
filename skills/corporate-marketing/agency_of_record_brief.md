---
id: corporate-marketing.ops.agency_of_record_brief
tier: ops
vertical: corporate-marketing
title: "Agency of record brief"
inputs: []
outputs: []
related: [marketing-stack.platform.corporate_channel_matrix]
---

# Agency of record brief

## Purpose

Brief external AOR with token export.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `corporate-marketing/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
