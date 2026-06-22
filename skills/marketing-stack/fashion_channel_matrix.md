---
id: marketing-stack.platform.fashion_channel_matrix
tier: foundation
vertical: marketing-stack
title: "Fashion channel matrix"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Fashion channel matrix

## Purpose

IG, TikTok, Pinterest, journal, retail.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `marketing-stack/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
