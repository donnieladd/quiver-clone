---
id: media.ops.validate_api_keys_env
tier: ops
vertical: media
title: "Validate API keys env"
inputs: []
outputs: []
related: [platform.brand_studio.route_media_generation]
---

# Validate API keys env

## Purpose

Check HIGGSFIELD, OPENAI, etc. at startup.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per media/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `platform.brand_studio.route_media_generation`
