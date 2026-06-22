---
id: editorial-marketing.ai.ai_refresh_decaying_content
tier: production
vertical: editorial-marketing
title: "AI refresh decaying content"
inputs: []
outputs: []
related: [marketing-stack.platform.editorial_channel_matrix]
---

# AI refresh decaying content

## Purpose

Identify and update stale SEO pages.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `editorial-marketing/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
