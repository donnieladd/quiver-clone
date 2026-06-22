---
id: church.workflow.sermon_to_social
title: Sermon to Social Content Workflow
skills_used:
  - church.content.receive_sermon_transcript
  - church.content.extract_quotable_lines
  - church.content.identify_teaching_points
  - church.content.build_weekly_content_calendar
  - church.social.template.sermon_quote
  - church.social.template.teaching_carousel
  - church.social.template.reel_cover
  - church.content.extract_sermon_clips
  - church.motion.export.projection_1080
  - church.qa.text_legibility_mobile
  - church.qa.approval_status_recorded
  - church.ops.schedule_content_planner
---

# Workflow: Sermon → Social Content

Turn one sermon into a **minimum viable content batch** of 8–30 assets without redesigning the brand each week.

## Purpose

Churches lose reach when they publish one sermon video and stop. This workflow multiplies one message across quote graphics, carousels, short clips, and stories using **approved templates** and **series branding**.

## When to use

- Sermon is recorded or transcribed (audio/video/text).
- Series brand kit exists (`church.series.*` completed or in progress).
- Comms team needs Mon–Sat social coverage from Sunday message.

## When NOT to use

- Series launch week (use `series-launch.md` first).
- Crisis communications (use pastoral approval fast-track in `approval-governance.md`).
- Full rebrand (use `brand/*` before this workflow).

## Inputs

| Input | Required | Source |
|-------|----------|--------|
| Transcript or timestamped outline | Yes | Sermon recording, YouTube auto-captions, manual notes |
| Series name + week number | Yes | Teaching plan |
| Speaker name/title | Recommended | Staff directory |
| Key scripture reference | Recommended | Sermon notes |
| Clip timestamps (optional) | No | Video editor or Sermon Clips-style tool |
| Brand kit / template links | Yes | Canva team folder or Figma library |

## Phases

### Phase 1 — Extract (content skills)

1. **`church.content.receive_sermon_transcript`** — normalize text, fix obvious caption errors.
2. **`church.content.extract_quotable_lines`** — pull 5–10 lines ≤ 25 words, theologically accurate.
3. **`church.content.identify_teaching_points`** — 3–5 bullets for carousel slides.
4. **`church.content.map_points_to_content_pillars`** — align to church content strategy (discipleship, community, worship, etc.).

**Gate:** At least 3 quote candidates and 3 teaching points approved by content lead.

### Phase 2 — Plan (calendar)

5. **`church.content.build_weekly_content_calendar`** — assign asset type to each weekday slot.
6. **`church.ops.assign_approval_owner`** — pastor or comms director for quotes touching doctrine.

Default calendar skeleton:

| Day | Asset type | Skill |
|-----|------------|-------|
| Sun PM | Sermon clip + reel cover | `reel_cover`, `extract_sermon_clips` |
| Mon | Quote graphic | `sermon_quote` |
| Tue | Teaching carousel | `teaching_carousel` |
| Wed | Scripture verse | `scripture_verse` |
| Thu | Community / application CTA | `community_story` or `volunteer_recruitment` |
| Fri | Event or service times | `event_promo` or `service_times_reminder` |
| Sat | Worship highlight or recap | `worship_highlight` |

### Phase 3 — Produce (templates only)

7. Duplicate templates — **never** blank-canvas redesign (`church.ops.duplicate_template_not_redesign`).
8. Apply series colors, fonts, logo from brand kit.
9. Generate optional SVG accents via Quiver API for series motif consistency.

Per asset skills: see `INDEX.md` social template decision tree.

### Phase 4 — QA

10. Run **`church.qa.text_legibility_mobile`** on all raster exports.
11. Run **`church.qa.theology_sensitive_language`** on quotes and scripture refs.
12. Run **`church.qa.logo_and_color_compliance`**.

**Gate:** Zero critical QA failures before scheduling.

### Phase 5 — Approve & distribute

13. **`church.ops.submit_for_pastoral_review`** — batch link, not one-off DMs.
14. **`church.ops.schedule_content_planner`** — Meta, Church Center, or preferred scheduler.
15. **`church.ops.archive_week_assets`** — folder: `Series Name / YYYY-MM-DD Sermon Title /`.

## Outputs (minimum batch)

- 3× quote graphics (1080×1080 + 1080×1350)
- 1× 5-slide teaching carousel
- 2× reel covers (1080×1920)
- 2× clip exports with burned-in captions (optional)
- Caption doc with hashtags + link to sermon VOD

## Scale target (full batch)

Up to **30 assets** when adding: additional clips, story frames, YouTube thumbnail, email header, mid-week pastoral story template.

## Related workflows

- `weekly-service-kit.md` — if slides/bulletin also due same week
- `approval-governance.md` — sign-off rules
- `volunteer-template-ops.md` — if volunteers execute production

## Sources

- [Sermon to social workflow](https://sermon-clips.com/blog/sermon-to-social-media-workflow)
- [Church Visuals template system](https://churchvisuals.com/article/how-to-build-a-reusable-social-media-template-system-in-canva/)
