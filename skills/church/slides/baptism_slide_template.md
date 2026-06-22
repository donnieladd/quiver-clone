---
id: church.slides.baptism_slide_template
tier: production
vertical: church
title: "Baptism Slide Template"
inputs: [sermon_or_worship_content, series_theme]
outputs: [slide_deck]
related: [church.qa.projection_legibility, church.workflow.weekly_service_kit]
---

# Baptism Slide Template

## Purpose

Church presentation slide skill: baptism slide template.

## When to use

Apply when this task appears in an active church media workflow (see `INDEX.md`).

## When NOT to use

Skip when a higher-level workflow has not locked brand/series prerequisites, or when approval gates in `workflows/approval-governance.md` are not satisfied.

## Inputs

- `sermon_or_worship_content`
- `series_theme`

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

1920×1080; ProPresenter 7+ or PPTX backup.

## QA checks

- [ ] Readable from back row
- [ ] No more than 5 announcements

## Examples

_Add church-specific examples when implementing this skill in production._

## Related skills

- `church.qa.projection_legibility`
- `church.workflow.weekly_service_kit`
