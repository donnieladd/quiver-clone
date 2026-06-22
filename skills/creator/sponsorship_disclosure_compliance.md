---
id: creator.business.sponsorship_disclosure_compliance
tier: qa
vertical: creator
title: "Sponsorship disclosure compliance"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Sponsorship disclosure compliance

## Purpose

FTC/FAA-style disclosure on paid posts.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
