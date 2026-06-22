---
id: church.brand.document_logo_clear_space
tier: foundation
vertical: church
title: "Document logo clear space and minimum size"
inputs: [logo_master]
outputs: [logo_usage_page]
related: [church.qa.logo_and_color_compliance]
---

# Document logo clear space and minimum size

## Purpose

Prevent illegible logo usage on social avatars and bulletins.

## When to use

Apply when this task appears in an active church media workflow (see `INDEX.md`).

## When NOT to use

Skip when a higher-level workflow has not locked brand/series prerequisites, or when approval gates in `workflows/approval-governance.md` are not satisfied.

## Inputs

- `logo_master`

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

Digital min height 32px favicon; social avatar 400×400 center mark.

## QA checks

- [ ] `church.qa.logo_and_color_compliance`
- [ ] `church.qa.approval_status_recorded`

## Examples

_Add church-specific examples when implementing this skill in production._

## Related skills

- `church.qa.logo_and_color_compliance`
