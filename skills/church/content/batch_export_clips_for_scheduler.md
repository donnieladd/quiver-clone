---
id: church.content.batch_export_clips_for_scheduler
tier: production
vertical: church
title: "Batch Export Clips For Scheduler"
inputs: [transcript_or_video, series_metadata]
outputs: [content_package]
related: [church.workflow.sermon_to_social]
---

# Batch Export Clips For Scheduler

## Purpose

Sermon content multiplication: batch export clips for scheduler.

## When to use

Apply when this task appears in an active church media workflow (see `INDEX.md`).

## When NOT to use

Skip when a higher-level workflow has not locked brand/series prerequisites, or when approval gates in `workflows/approval-governance.md` are not satisfied.

## Inputs

- `transcript_or_video`
- `series_metadata`

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

- [ ] Pastoral review on quotes
- [ ] Scripture references verified

## Examples

_Add church-specific examples when implementing this skill in production._

## Related skills

- `church.workflow.sermon_to_social`
