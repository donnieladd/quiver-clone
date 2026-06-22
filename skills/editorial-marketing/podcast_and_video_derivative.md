---
id: editorial-marketing.distribution.podcast_and_video_derivative
tier: production
vertical: editorial-marketing
title: "Podcast and video derivative"
inputs: []
outputs: []
related: [marketing-stack.platform.editorial_channel_matrix]
---

# Podcast and video derivative

## Purpose

Article → audio → short video.

## AI + platform

See `marketing-stack.platform.select_platform_for_objective` and `marketing-stack.ai.route_tool_for_job` before generating assets.

## Steps

1. Load brand tokens (`brand-system/*`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in `editorial-marketing/workflows/`.
4. `media.router.route_generation_request` → `brand-system.qa.run_token_lint_on_asset`.
