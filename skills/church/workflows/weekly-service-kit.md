---
id: church.workflow.weekly_service_kit
title: Weekly Service Kit Workflow
skills_used:
  - church.slides.build_sermon_slide_deck
  - church.slides.build_announcement_slides
  - church.slides.prepare_worship_lyric_slides
  - church.print.design_weekly_bulletin
  - church.social.template.service_times_reminder
  - church.web.update_home_hero_for_series
  - church.web.design_email_header
  - church.qa.projection_legibility
  - church.qa.approval_status_recorded
---

# Workflow: Weekly Service Kit

Everything needed for **one Sunday** (or one service): slides, lyrics, bulletin, social reminder, web/email touchpoints.

## Purpose

Replace ad-hoc "what do we need for Sunday?" with a repeatable checklist tied to skills and export specs.

## Inputs

| Input | Required |
|-------|----------|
| Sermon title + scripture + outline/slide notes | Yes |
| Announcements list (max 3–5) | Yes |
| Worship set list with lyrics (CCLI/Planning Center) | Yes |
| Series brand assets | Yes |
| Bulletin copy (welcome, events, giving blurb) | Yes |
| Service times / campuses | Yes |

## Phases

### 1. Slides (Thursday deadline typical)

1. **`church.slides.build_sermon_slide_deck`** — title, scripture, points, illustration slides, blank/black for transition.
2. **`church.slides.build_announcement_slides`** — one slide per announcement, 7-second readability rule.
3. **`church.slides.prepare_worship_lyric_slides`** — import lyrics; apply line-break skill before Sunday.

**Export:** ProPresenter bundle or PowerPoint per `church.slides.export_propresenter`.

**QA:** `church.qa.projection_legibility`, `church.qa.announcement_count_limit`.

### 2. Print (Friday)

4. **`church.print.design_weekly_bulletin`** — 8.5×11, series cover strip, insert optional.
5. **`church.print.preflight_bulletin_pdf`** — fonts embedded, 300dpi images.

### 3. Digital touchpoints (Friday–Saturday)

6. **`church.web.update_home_hero_for_series`** — if week-specific hero needed.
7. **`church.web.design_email_header`** — 600×200 for weekly email.
8. **`church.social.template.service_times_reminder`** — Sat post for Sun attendance.

### 4. Worship visuals (coordinate with worship leader)

9. If new song or special moment: **`church.worship.select_loop_for_song`**.
10. **`church.motion.export.projection_1080`** for any new motion that week.

### 5. Sunday morning QA (30 min before)

11. Test first slide and lyric slide on **actual projector**.
12. Confirm announcement slides match spoken order.
13. **`church.ops.sunday_morning_checklist`** sign-off.

## Outputs checklist

- [ ] Sermon deck (`.pro6` or agreed format)
- [ ] Announcement deck
- [ ] Lyric slides synced to set list
- [ ] Bulletin PDF print-ready
- [ ] Email header PNG
- [ ] Service times social post
- [ ] Hero updated (if applicable)

## Related workflows

- `sermon-to-social.md` — post-Sunday content multiplication
- `worship-visuals.md` — deeper motion/loop work

## Sources

- [Ruah ProPresenter guide](https://ruahcreativehouse.org/blog/propresenter-guide/)
- [Breeze church brand guide](https://www.breezechms.com/blog/how-to-craft-your-churchs-brand-guide)
