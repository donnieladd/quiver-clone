---
id: church.web.design_watch_live_banner
tier: production
vertical: church
title: "Design Watch Live Banner"
inputs: [series_kit, cms_specs]
outputs: [web_asset]
related: [church.workflow.weekly_service_kit]
---

# Design Watch Live Banner

## Purpose

Church website media: design watch live banner.

## When to use

Apply when this task appears in an active church media workflow (see `INDEX.md`).

## When NOT to use

Skip when a higher-level workflow has not locked brand/series prerequisites, or when approval gates in `workflows/approval-governance.md` are not satisfied.

## Inputs

- `series_kit`
- `cms_specs`

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

sRGB; hero max 2400×1200; email header 600×200.

## QA checks

- [ ] `church.qa.logo_and_color_compliance`
- [ ] `church.qa.approval_status_recorded`

## Examples

_Add church-specific examples when implementing this skill in production._

## Related skills

- `church.workflow.weekly_service_kit`
