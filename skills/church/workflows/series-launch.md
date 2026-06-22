---
id: church.workflow.series_launch
title: Sermon Series Launch Workflow
skills_used:
  - church.series.define_series_creative_brief
  - church.series.design_key_art
  - church.series.design_title_treatment
  - church.series.create_motion_background_set
  - church.slides.build_propresenter_theme
  - church.social.template.series_launch
  - church.web.design_series_hero
  - church.print.design_bulletin_cover
  - church.motion.design_lower_third
  - church.series.launch_asset_kit_checklist
  - church.series.archive_series_assets
---

# Workflow: Sermon Series Launch

Create the **full visual system** for a multi-week sermon series before week 1 preaching.

## Purpose

Series branding fails when art is treated as a one-off poster. Launch with a **kit** volunteers can reuse for 4–12 weeks.

## Creative brief (start here)

Use **`church.series.define_series_creative_brief`**:

- Series title + subtitle
- Big idea (one sentence)
- Tone: bold / contemplative / joyful / urgent
- Scripture anchor
- Weeks count
- Environments: stage, social, print, web, motion
- Reference images (mood, not copy)

## Asset kit (deliver all unless scoped)

| # | Deliverable | Primary skill |
|---|-------------|---------------|
| 1 | Master key art | `church.series.design_key_art` |
| 2 | Title treatment (SVG + PNG) | `church.series.design_title_treatment` |
| 3 | Color override tokens for series | `church.series.define_series_color_palette` |
| 4 | Social launch post | `church.social.template.series_launch` |
| 5 | Week N promo template | `church.social.template.series_week_promo` |
| 6 | ProPresenter theme | `church.slides.build_propresenter_theme` |
| 7 | Motion loops (3–5) | `church.series.create_motion_background_set` |
| 8 | Lower third / name strap | `church.motion.design_lower_third` |
| 9 | Stage backdrop graphic | `church.env.design_stage_backdrop` |
| 10 | Bulletin cover template | `church.print.design_bulletin_cover` |
| 11 | Web series hero | `church.web.design_series_hero` |
| 12 | Email header template | `church.web.design_email_header` |
| 13 | Optional 15–30s opener | `church.motion.design_series_opener` |

## Production order

1. Brief approved by teaching pastor + comms.
2. Key art direction → 2–3 concept routes → one selected.
3. Title treatment + palette locked.
4. Templates built in Canva/Figma **from** locked art (not parallel one-offs).
5. Motion loops tested on **sanctuary projector**, not only laptop.
6. Publish kit to DAM with `church.ops.publish_series_kit_to_dam`.
7. Train volunteers: `workflows/volunteer-template-ops.md`.

## Week-over-week

- Only swap week number, title, and scripture on promo template.
- Do not change fonts, layout, or logo placement mid-series.

## Series end

**`church.series.archive_series_assets`** — move to `Archive/Series Name/`; restore default brand on web hero.

## QA gates

- `church.qa.projection_legibility` on all stage/slide art
- `church.qa.logo_and_color_compliance`
- `church.qa.motion_not_distracting_behind_speaker`

## Sources

- [DesignLumo church workflow](https://www.designlumo.com/resources/workflow-for-church-religious-marketing)
- [Slam church logo / identity](https://www.slammedialab.com/post/church-logo-design)
