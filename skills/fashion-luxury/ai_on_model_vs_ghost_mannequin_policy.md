---
id: fashion-luxury.ai.ai_on_model_vs_ghost_mannequin_policy
tier: qa
vertical: fashion-luxury
title: "AI on-model vs ghost mannequin policy"
inputs: []
outputs: []
related: [marketing-stack.platform.fashion_channel_matrix]
---

# AI on-model vs ghost mannequin policy

## Purpose

When AI product shots are allowed.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `fashion-luxury/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
