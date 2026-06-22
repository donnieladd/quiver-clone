---
id: church.worship.test_loop_on_camera_imag
tier: production
vertical: church
title: "Test Loop On Camera Imag"
inputs: [set_list, series_motion_kit]
outputs: [projection_media]
related: [church.workflow.worship_visuals, church.motion.export.projection_1080]
---

# Test Loop On Camera Imag

## Purpose

Worship environment visual: test loop on camera imag.

## When to use

Apply when this task appears in an active church media workflow (see `INDEX.md`).

## When NOT to use

Skip when a higher-level workflow has not locked brand/series prerequisites, or when approval gates in `workflows/approval-governance.md` are not satisfied.

## Inputs

- `set_list`
- `series_motion_kit`

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

- `church.workflow.worship_visuals`
- `church.motion.export.projection_1080`
