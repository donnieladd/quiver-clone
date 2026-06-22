# Playbook: Faith Chapel (faithchapel.net)

**Context:** Full rebrand built by Donnie Ladd · **Instagram:** [@faithchapelbham](https://instagram.com/faithchapelbham) · **Brand hub:** [faithchapel.net/brand](https://www.faithchapel.net/brand)

## What this playbook represents

Faith Chapel is the **governance + community institution** model — not hype-page church, not phone-only BTS. It's the foundation church skills assume when you say "professional church brand."

**Profile:** [`profiles/faith-chapel.json`](../profiles/faith-chapel.json)

## Core positioning

- Founded 1981; generational leadership transition (Mike Moore → Michael K. Moore, 2023)
- "We're more than a church — we're a movement" ([about](https://faithchapel.community/about/))
- **The Bridge** — community venue (bowling, café, kids) — story is **life together**, not Sunday only
- Word Dome + campus as place-brand

## Brand system (what you already shipped)

Public **Brand Book**, Quick Reference, education session MP3s, Q&A MP3 ([brand page](https://www.faithchapel.net/brand)):

| Asset | Purpose |
|-------|---------|
| Brand Book PDF | Full guidelines |
| Quick Reference | Volunteer one-pager |
| Education audio | Staff alignment |
| Anti-clipart policy | Quality floor |

**Explicit rule:** "Clipart and low resolution photos do NOT support our brand."

## Story & community surfaces

Site navigation includes:
- **Share Your Story** (`/stories`) — community voice channel
- Groups, volunteer, ways to help — participation loops
- On-demand sermon library — message as archive, not only live

**Skill implication:** `church.story.run_share_your_story_campaign` should be first-class, not optional.

## Social / media tone

- Teaching-forward (Mike Moore legacy: "The Word of God is the Answer")
- Family-friendly Birmingham anchor
- Multi-platform: FB, IG, X, Threads ([VOD page footer](https://www.faithchapel.net/vodsunday))
- Store integration (shop.mikemoore.com) — merch as brand extension

## Visual bar (your baseline)

- Clean, institutional premium — not Site Inspire experimental (that's your **next** layer for other clients)
- High-quality photography mandate
- Consistent IG grid from system templates you built

## Gap → expanded lens

| Faith Chapel has | Skills pack adds |
|------------------|----------------|
| Brand book | Agent-readable skills + lint |
| Story page | `church.story.run_share_your_story_campaign` |
| Series graphics | `workflows/series-launch.md` kit |
| **Document Architecture v1.0** | `doc-architecture/INDEX.md` + 3 workflows |
| Pastor teaching brand | Profile `pastor_face_ratio_max_30d: 0.5` |

## Skills mapped

| Existing | Notes |
|----------|-------|
| `church.brand.*` | Directly from this engagement |
| `church.ops.train_volunteers_duplicate_templates` | Brand education MP3 → video course in WorkbyForm |
| `church.qa.logo_and_color_compliance` | Enforces anti-clipart / off-brand |

| Added in profiles |
|-------------------|
| `church.story.share_your_story_intake_form` |
| `church.brand.run_brand_education_session` |
| `church.env.promote_bridge_community_events` |
