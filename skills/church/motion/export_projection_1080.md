---
id: church.motion.export_projection_1080
tier: production
vertical: church
title: "Export projection 1080p H.264"
inputs: [series_brand, after_effects_or_canva_video]
outputs: [video_file]
related: [church.worship.select_ambient_vs_dynamic_loop]
---

# Export projection 1080p H.264

## Purpose

Export projection 1080p H.264 for church motion pipeline.

## When to use

Apply when this task appears in an active church media workflow (see `INDEX.md`).

## When NOT to use

Skip when a higher-level workflow has not locked brand/series prerequisites, or when approval gates in `workflows/approval-governance.md` are not satisfied.

## Inputs

- `series_brand`
- `after_effects_or_canva_video`

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

1920×1080 H.264 MP4 30fps

## QA checks

- [ ] `church.qa.logo_and_color_compliance`
- [ ] `church.qa.approval_status_recorded`

## Examples

_Add church-specific examples when implementing this skill in production._

## Related skills

- `church.worship.select_ambient_vs_dynamic_loop`
