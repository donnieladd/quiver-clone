---
id: media.research.perplexity_research_brief
tier: production
vertical: media
title: "Perplexity research brief"
inputs: []
outputs: []
related: [platform.brand_studio.route_media_generation]
---

# Perplexity research brief

## Purpose

Trend and competitor research input.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per media/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `platform.brand_studio.route_media_generation`
