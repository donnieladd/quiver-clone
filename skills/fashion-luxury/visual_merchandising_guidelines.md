---
id: fashion-luxury.retail.visual_merchandising_guidelines
tier: production
vertical: fashion-luxury
title: "Visual merchandising guidelines"
inputs: []
outputs: []
related: [marketing-stack.platform.fashion_channel_matrix]
---

# Visual merchandising guidelines

## Purpose

Window, table, rail standards.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `fashion-luxury/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
