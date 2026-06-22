---
id: media.router.poll_job_status
tier: production
vertical: media
title: "Poll job status"
inputs: []
outputs: []
related: [platform.brand_studio.route_media_generation]
---

# Poll job status

## Purpose

Poll /v1/media/generations/{id} until complete.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per media/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `platform.brand_studio.route_media_generation`
