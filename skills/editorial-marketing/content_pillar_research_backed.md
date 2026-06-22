---
id: editorial-marketing.strategy.content_pillar_research_backed
tier: foundation
vertical: editorial-marketing
title: "Content pillar research backed"
inputs: []
outputs: []
related: [marketing-stack.platform.editorial_channel_matrix]
---

# Content pillar research backed

## Purpose

Pillars from search intent + audience need.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `editorial-marketing/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
