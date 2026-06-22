---
id: church.qa.text_legibility_mobile
tier: qa
vertical: church
title: "Verify text legibility on mobile"
inputs: [candidate_asset]
outputs: [pass_fail_report]
related: [church.workflow.approval_governance]
---

# Verify text legibility on mobile

## Purpose

Quality assurance: Verify text legibility on mobile.

## When to use

Apply when this task appears in an active church media workflow (see `INDEX.md`).

## When NOT to use

Skip when a higher-level workflow has not locked brand/series prerequisites, or when approval gates in `workflows/approval-governance.md` are not satisfied.

## Inputs

- `candidate_asset`

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

- [ ] 18pt+ equivalent on quotes
- [ ] Scrim if on photo

## Examples

_Add church-specific examples when implementing this skill in production._

## Related skills

- `church.workflow.approval_governance`
