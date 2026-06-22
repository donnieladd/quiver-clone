---
id: editorial-marketing.analytics.content_performance_review_quarterly
tier: ops
vertical: editorial-marketing
title: "Content performance review quarterly"
inputs: []
outputs: []
related: [marketing-stack.platform.editorial_channel_matrix]
---

# Content performance review quarterly

## Purpose

Traffic, rank, conversion by pillar.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `editorial-marketing/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
