---
id: creator.content.write_long_form_youtube_script
tier: production
vertical: creator
title: "Write long form YouTube script"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Write long form YouTube script

## Purpose

Retention-structured YouTube script.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
