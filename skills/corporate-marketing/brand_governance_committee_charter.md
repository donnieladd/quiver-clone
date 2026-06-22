---
id: corporate-marketing.ops.brand_governance_committee_charter
tier: ops
vertical: corporate-marketing
title: "Brand governance committee charter"
inputs: []
outputs: []
related: [marketing-stack.platform.corporate_channel_matrix]
---

# Brand governance committee charter

## Purpose

Who approves what in enterprise org.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `corporate-marketing/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
