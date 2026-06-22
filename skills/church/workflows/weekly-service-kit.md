---
id: church.weekly_service_kit
title: "Weekly service kit"
vertical: church
skills_used:
  - church.slides.build_sermon_slide_deck
  - church.print.design_weekly_bulletin
  - church.social.template.service_times_reminder
estimated_minutes: 240
primary_platforms: ["ProPresenter","Print","Web","Social"]
---

# Workflow: Weekly service kit

Slides, lyrics, bulletin, email header, service reminder for one Sunday.

## When to use

- Standard Sunday prep

## When NOT to use

- Special event only

## Primary platforms

ProPresenter · Print · Web · Social

## Steps

### Step 1 — Sermon + announcement slides

**Type:** `skill`
**Skill:** `church.slides.build_sermon_slide_deck`

undefined

### Step 2 — Worship lyric slides

**Type:** `skill`
**Skill:** `church.slides.prepare_worship_lyric_slides`

undefined

### Step 3 — Bulletin PDF

**Type:** `skill`
**Skill:** `church.print.design_weekly_bulletin`

undefined

### Step 4 — Email + web + social

**Type:** `checklist`

undefined

**Checklist:**
- [ ] Email header
- [ ] Hero if needed
- [ ] Sat service times post

### Step 5 — Sunday morning QA

**Type:** `gate`

undefined

**Gate criteria:**
- Projector test
- Announcement order match
- Checklist signed


## Outputs

- [ ] Decks exported
- [ ] Bulletin print-ready
- [ ] Digital touchpoints live

## Related workflows

- `church.sermon_to_social`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/church.weekly_service_kit/runs`
