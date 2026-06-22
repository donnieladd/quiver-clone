---
id: marketing-stack.ops.marketing_tool_budget_tiers
tier: ops
vertical: marketing-stack
title: "Marketing tool budget tiers"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Marketing tool budget tiers

## Purpose

Starter / growth / enterprise stack.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `marketing-stack/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
