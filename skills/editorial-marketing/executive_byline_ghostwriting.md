---
id: editorial-marketing.writing.executive_byline_ghostwriting
tier: production
vertical: editorial-marketing
title: "Executive byline ghostwriting"
inputs: []
outputs: []
related: [marketing-stack.platform.editorial_channel_matrix]
---

# Executive byline ghostwriting

## Purpose

Fortune/HBR-style bylines.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `editorial-marketing/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
