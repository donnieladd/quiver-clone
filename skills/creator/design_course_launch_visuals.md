---
id: creator.product.design_course_launch_visuals
tier: production
vertical: creator
title: "Design course launch visuals"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Design course launch visuals

## Purpose

Sales page, emails, social for course.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
