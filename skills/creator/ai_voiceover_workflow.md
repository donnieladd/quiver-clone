---
id: creator.media.ai_voiceover_workflow
tier: production
vertical: creator
title: "AI voiceover workflow"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# AI voiceover workflow

## Purpose

ElevenLabs or similar for VO.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
