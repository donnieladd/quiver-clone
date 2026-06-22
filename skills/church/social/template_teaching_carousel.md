---
id: church.social.template_teaching_carousel
tier: template
vertical: church
title: "Teaching points carousel template"
inputs: [template_duplicate, copy, series_brand]
outputs: [carousel5slides]
related: [church.ops.duplicate_template_not_redesign, church.qa.text_legibility_mobile]
---

# Teaching points carousel template

## Purpose

Produce teaching points carousel template using locked layout and series/church brand kit.

## When to use

Apply when this task appears in an active church media workflow (see `INDEX.md`).

## When NOT to use

Skip when a higher-level workflow has not locked brand/series prerequisites, or when approval gates in `workflows/approval-governance.md` are not satisfied.

## Inputs

- `template_duplicate`
- `copy`
- `series_brand`

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

carousel_5_slides

## QA checks

- [ ] Text readable at phone width
- [ ] Logo from brand kit only
- [ ] Contrast on photos

## Examples

_Add church-specific examples when implementing this skill in production._

## Related skills

- `church.ops.duplicate_template_not_redesign`
- `church.qa.text_legibility_mobile`
