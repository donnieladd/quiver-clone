# Church / Ministry Media — Skill Index & Decision Trees

**260+ atomic skills** · **6 workflows** · **5 client profiles** · Vertical: `church`

Use this file to route requests before opening individual skill markdown files.

## Client profiles

| Client | Profile | Playbook | Pastor face max | Visual bar |
|--------|---------|----------|-----------------|------------|
| Faith Chapel | `profiles/faith-chapel.json` | `playbooks/faith-chapel.md` | 50% | Institutional |
| Union Church | `profiles/union-church.json` | `playbooks/union-bldrs.md` | 40% | Institutional |
| Transformation Church | `profiles/transformation-church.json` | `playbooks/transformation-church.md` | 55% | Site Inspire forward |
| Church of the Highlands | `profiles/church-of-the-highlands.json` | `playbooks/highlands-resources.md` | 45% | Institutional + kits |
| Elevation Church | `profiles/elevation-church.json` | `playbooks/elevation-church.md` | 50% | Broadcast + Open Network |

Load profile **first** — see `profiles/README.md`.

---

## Quick route (start here)

```
What are you making?
│
├─ New sermon SERIES identity (art, motion, templates)
│   └─► workflows/series-launch.md
│       └─► brand/* + series/* + motion/* + social/*
│
├─ THIS WEEK's service kit (slides, bulletin, social, email)
│   └─► workflows/weekly-service-kit.md
│       └─► slides/* + print/* + social/* + web/*
│
├─ Repurpose SERMON into social/video content
│   └─► workflows/sermon-to-social.md
│       └─► content/* + social/* + motion/*
│
├─ WORSHIP visuals (loops, lyrics, stage)
│   └─► workflows/worship-visuals.md
│       └─► worship/* + motion/* + slides/*
│
├─ Volunteer / Canva template operations
│   └─► workflows/volunteer-template-ops.md
│       └─► ops/* + brand/*
│
├─ Community STORY (testimony, values, eFam, outreach)
│   └─► story/INDEX.md
│       └─► story/* + social/* + ops/*
│
└─ Approvals, versioning, archive
    └─► workflows/approval-governance.md
        └─► ops/* + qa/*
```

---

## Skill domains

| Domain | Path | Count | Description |
|--------|------|-------|-------------|
| Brand | `brand/` | 18 | Mission, voice, logo usage, Canva brand kit |
| Series | `series/` | 24 | Sermon series art, stage, archive |
| Social | `social/` | 34 | Templates, sizes, captions, scheduling |
| Slides | `slides/` | 24 | ProPresenter, announcement, sermon decks |
| Worship | `worship/` | 18 | Lyrics, loops, ambient vs dynamic |
| Motion | `motion/` | 20 | Video export, MOGRT, lower thirds |
| Print | `print/` | 14 | Bulletin, poster, banner, bleed |
| Web | `web/` | 16 | Hero, series page, giving, events |
| Content | `content/` | 22 | Transcript → quotes, clips, calendar |
| **Story** | `story/` | 24 | Community narrative, testimony, pastor/face balance |
| **Web premium** | `web-premium/` | 8 | Site Inspire–tier web craft |
| Environments | `env/` | 13 | Signage, wayfinding, stage backdrop |
| Ops | `ops/` | 18 | Intake, DAM, volunteer training |
| QA | `qa/` | 16 | Legibility, brand, projection, a11y |

Full manifest: `registry.json`

---

## Decision tree: choose social template

```
Social post needed?
│
├─ Quote from sermon
│   └─► church.social.template.sermon_quote
│       Inputs: quote ≤ 25 words, series brand, optional speaker
│
├─ Scripture / verse
│   └─► church.social.template.scripture_verse
│
├─ Series launch / week N promo
│   └─► church.social.template.series_week_promo
│
├─ Event (single or recurring)
│   └─► church.social.template.event_promo
│
├─ Testimony / story
│   └─► church.social.template.community_story
│
├─ Volunteer / serve opportunity
│   └─► church.social.template.volunteer_recruitment
│
├─ Giving / generosity campaign
│   └─► church.social.template.giving_campaign
│
├─ Service times reminder
│   └─► church.social.template.service_times_reminder
│
├─ Pastor direct-to-camera message
│   └─► church.social.template.pastoral_message
│
├─ Worship highlight / clip cover
│   └─► church.social.template.worship_highlight
│
├─ Carousel teaching points
│   └─► church.social.template.teaching_carousel
│
└─ Reel / short clip cover
    └─► church.social.template.reel_cover
```

---

## Decision tree: projection vs social type

```
Where will this be seen?
│
├─ Sanctuary projector / LED wall (16:9)
│   ├─ Motion loop behind worship → worship/* + motion/export_1920x1080
│   ├─ Sermon slides → slides/sermon_*
│   └─ Avoid thin type < 36pt equivalent at 1080p
│
├─ ProPresenter / lyric slides
│   └─► slides/lyric_* + worship/lyric_line_breaks
│
├─ Instagram / Facebook feed (1:1 or 4:5)
│   └─► social/export_* + qa/text_legibility_mobile
│
├─ Stories / Reels (9:16)
│   └─► social/template.reel_* + safe zones
│
├─ Print bulletin / poster
│   └─► print/* + 300dpi CMYK path
│
└─ Website hero / email header
    └─► web/* + sRGB export
```

---

## Decision tree: series launch asset kit

When `workflows/series-launch.md` runs, produce **all** unless scoped down:

| Asset | Skill ID | Default size |
|-------|----------|--------------|
| Key art (master) | `church.series.design_key_art` | 3840×2160 master |
| Title treatment | `church.series.design_title_treatment` | SVG + PNG |
| Social launch post | `church.social.template.series_launch` | 1080×1080 |
| Week 1–N promo template | `church.social.template.series_week_promo` | 1080×1350 |
| ProPresenter theme | `church.slides.build_propresenter_theme` | 1920×1080 |
| Stage lower third | `church.motion.design_lower_third` | MOGRT / PNG |
| Bulletin cover | `church.print.design_bulletin_cover` | 8.5×11 bleed |
| Web hero | `church.web.design_series_hero` | 2400×1200 |
| Email header | `church.web.design_email_header` | 600×200 |
| Motion opener (optional) | `church.motion.design_series_opener` | 15–30s MP4 |

Archive when series ends: `church.series.archive_series_assets`

---

## Platform format reference (canonical)

| Channel | Skill prefix | Dimensions |
|---------|--------------|------------|
| IG/FB feed square | `church.social.export.instagram_square` | 1080×1080 |
| IG/FB portrait | `church.social.export.instagram_portrait` | 1080×1350 |
| Stories / Reels | `church.social.export.story_reel` | 1080×1920 |
| YouTube thumbnail | `church.social.export.youtube_thumbnail` | 1280×720 |
| ProPresenter / projection | `church.motion.export.projection_1080` | 1920×1080 |
| Bulletin print | `church.print.export.bulletin_pdf` | 8.5×11 + bleed |
| Web hero | `church.web.export.hero_web` | 2400×1200 max |
| Email header | `church.web.export.email_header` | 600×200 |

---

## QA gate (always run before handoff)

Minimum checks for any deliverable batch:

1. `church.qa.logo_and_color_compliance`
2. `church.qa.text_legibility_mobile` (social/web) OR `church.qa.projection_legibility` (slides/motion)
3. `church.qa.safe_zones_platform_ui`
4. `church.qa.theology_sensitive_language` (when quoting scripture / pastoral copy)
5. `church.qa.approval_status_recorded`

---

## Related repository capabilities

- **SVG generation**: `POST /v1/svgs/generations` — series marks, icons, patterns
- **Vectorization**: `POST /v1/svgs/vectorizations` — raster key art → editable SVG
- **Skills root**: `skills/church/` (this pack)
