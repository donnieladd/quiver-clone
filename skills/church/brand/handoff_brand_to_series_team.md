---
id: church.brand.handoff_brand_to_series_team
tier: foundation
vertical: church
title: "Hand off brand to series creative team"
inputs: [brand_kit_link]
outputs: [handoff_checklist_signed]
related: [church.series.define_series_creative_brief]
---

# Hand off brand to series creative team

## Purpose

Transfer locked brand kit before any series art exploration.

## When to use

Apply when this task appears in an active church media workflow (see `INDEX.md`).

## When NOT to use

Skip when a higher-level workflow has not locked brand/series prerequisites, or when approval gates in `workflows/approval-governance.md` are not satisfied.

## Inputs

- `brand_kit_link`

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

- `church.series.define_series_creative_brief`
