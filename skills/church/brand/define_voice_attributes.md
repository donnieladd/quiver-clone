---
id: church.brand.define_voice_attributes
tier: foundation
vertical: church
title: "Define brand voice attributes"
inputs: [mission_vision, congregation_demographics]
outputs: [voice_chart_md]
related: [church.brand.write_messaging_do_dont]
---

# Define brand voice attributes

## Purpose

Translate theology and culture into 3–5 voice adjectives (e.g. welcoming, bold, hopeful).

## When to use

Apply when this task appears in an active church media workflow (see `INDEX.md`).

## When NOT to use

Skip when a higher-level workflow has not locked brand/series prerequisites, or when approval gates in `workflows/approval-governance.md` are not satisfied.

## Inputs

- `mission_vision`
- `congregation_demographics`

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

- `church.brand.write_messaging_do_dont`
