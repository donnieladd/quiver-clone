---
id: creator.content.script_short_form_video
tier: production
vertical: creator
title: "Script short form video"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Script short form video

## Purpose

30–60s script with hook and CTA.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
