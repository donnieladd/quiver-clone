---
id: church.brand.select_typeface_for_projection
tier: foundation
vertical: church
title: "Select typeface for projection legibility"
inputs: [brand_fonts, projector_resolution]
outputs: [type_recommendation]
related: [church.qa.projection_legibility]
---

# Select typeface for projection legibility

## Purpose

Choose sans-serif fonts with robust weights for sanctuary screens.

## When to use

Apply when this task appears in an active church media workflow (see `INDEX.md`).

## When NOT to use

Skip when a higher-level workflow has not locked brand/series prerequisites, or when approval gates in `workflows/approval-governance.md` are not satisfied.

## Inputs

- `brand_fonts`
- `projector_resolution`

## Decision rules

- Prefer sans-serif for lyrics and sermon points.
- Avoid thin weights below 1080p.
- License fonts for worship streaming if applicable.

## Steps

1. Confirm inputs and brand/series kit.
2. Execute production per export specs.
3. Run QA checks before handoff.
4. Record approval status.

## Export specs

See `INDEX.md` platform format reference for dimensions and color space.

## QA checks

- [ ] `church.qa.logo_and_color_compliance`
- [ ] `church.qa.approval_status_recorded`

## Examples

_Add church-specific examples when implementing this skill in production._

## Related skills

- `church.qa.projection_legibility`
