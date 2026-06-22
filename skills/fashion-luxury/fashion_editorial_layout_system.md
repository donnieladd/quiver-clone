---
id: fashion-luxury.editorial.fashion_editorial_layout_system
tier: production
vertical: fashion-luxury
title: "Fashion editorial layout system"
inputs: []
outputs: []
related: [marketing-stack.platform.fashion_channel_matrix]
---

# Fashion editorial layout system

## Purpose

Grid, full-bleed, type-over-image rules.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `fashion-luxury/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
