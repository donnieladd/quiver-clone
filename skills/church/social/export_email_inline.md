---
id: church.social.export_email_inline
tier: production
vertical: church
title: "Export email-inline graphic"
inputs: [designed_template]
outputs: [png_export]
related: [church.qa.safe_zones_platform_ui]
---

# Export email-inline graphic

## Purpose

Export social asset: Export email-inline graphic.

## When to use

Apply when this task appears in an active church media workflow (see `INDEX.md`).

## When NOT to use

Skip when a higher-level workflow has not locked brand/series prerequisites, or when approval gates in `workflows/approval-governance.md` are not satisfied.

## Inputs

- `designed_template`

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

600px max width PNG

## QA checks

- [ ] `church.qa.logo_and_color_compliance`
- [ ] `church.qa.approval_status_recorded`

## Examples

_Add church-specific examples when implementing this skill in production._

## Related skills

- `church.qa.safe_zones_platform_ui`
