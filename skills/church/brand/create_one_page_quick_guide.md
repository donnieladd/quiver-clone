---
id: church.brand.create_one_page_quick_guide
tier: foundation
vertical: church
title: "Create one-page quick brand guide"
inputs: [full_brand_guide]
outputs: [quick_guide_pdf]
related: [church.brand.setup_canva_brand_kit]
---

# Create one-page quick brand guide

## Purpose

Single PDF volunteers can pin: logo, colors, fonts, do/don't.

## When to use

Apply when this task appears in an active church media workflow (see `INDEX.md`).

## When NOT to use

Skip when a higher-level workflow has not locked brand/series prerequisites, or when approval gates in `workflows/approval-governance.md` are not satisfied.

## Inputs

- `full_brand_guide`

## Decision rules

- Follow brand guide and series kit when present.
- Prefer template duplication over new layout.
- Escalate theology-sensitive copy to pastoral review.

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

- `church.brand.setup_canva_brand_kit`
