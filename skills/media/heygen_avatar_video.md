---
id: media.video.heygen_avatar_video
tier: production
vertical: media
title: "HeyGen avatar video"
inputs: []
outputs: []
related: [platform.brand_studio.route_media_generation]
---

# HeyGen avatar video

## Purpose

Talking head / avatar explainer videos.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per media/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `platform.brand_studio.route_media_generation`
