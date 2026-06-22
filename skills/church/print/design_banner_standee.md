---
id: church.print.design_banner_standee
tier: production
vertical: church
title: "Design Banner Standee"
inputs: [copy, series_art]
outputs: [print_pdf]
related: [church.workflow.weekly_service_kit]
---

# Design Banner Standee

## Purpose

Print production: design banner standee.

## When to use

Apply when this task appears in an active church media workflow (see `INDEX.md`).

## When NOT to use

Skip when a higher-level workflow has not locked brand/series prerequisites, or when approval gates in `workflows/approval-governance.md` are not satisfied.

## Inputs

- `copy`
- `series_art`

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

300 DPI at final size; 0.125in bleed; CMYK or PDF/X-1a per printer.

## QA checks

- [ ] `church.qa.logo_and_color_compliance`
- [ ] `church.qa.approval_status_recorded`

## Examples

_Add church-specific examples when implementing this skill in production._

## Related skills

- `church.workflow.weekly_service_kit`
