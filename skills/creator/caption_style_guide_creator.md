---
id: creator.social.caption_style_guide_creator
tier: foundation
vertical: creator
title: "Caption style guide creator"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Caption style guide creator

## Purpose

On-screen text and caption rules.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
