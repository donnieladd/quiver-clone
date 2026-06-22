---
id: editorial-marketing.distribution.organic_social_teaser_ladder
tier: production
vertical: editorial-marketing
title: "Organic social teaser ladder"
inputs: []
outputs: []
related: [marketing-stack.platform.editorial_channel_matrix]
---

# Organic social teaser ladder

## Purpose

Article → thread → carousel → quote cards.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `editorial-marketing/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
