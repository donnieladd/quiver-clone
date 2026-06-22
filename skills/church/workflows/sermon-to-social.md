---
id: church.sermon_to_social
title: "Sermon → social content"
vertical: church
skills_used:
  - church.content.receive_sermon_transcript
  - church.content.extract_quotable_lines
  - church.social.template.sermon_quote
estimated_minutes: 180
primary_platforms: ["Instagram","Facebook","YouTube"]
---

# Workflow: Sermon → social content

One sermon → 8–30 social assets using approved templates.

## When to use

- Sermon transcribed
- Series brand kit exists

## When NOT to use

- Series launch week
- Crisis comms

## Primary platforms

Instagram · Facebook · YouTube

## Steps

### Step 1 — Receive transcript

**Type:** `skill`
**Skill:** `church.content.receive_sermon_transcript`

undefined

### Step 2 — Extract quotable lines

**Type:** `skill`
**Skill:** `church.content.extract_quotable_lines`

undefined

### Step 3 — Teaching points

**Type:** `skill`
**Skill:** `church.content.identify_teaching_points`

undefined

### Step 4 — Weekly content calendar

**Type:** `skill`
**Skill:** `church.content.build_weekly_content_calendar`

undefined

### Step 5 — Produce from templates

**Type:** `checklist`

undefined

**Checklist:**
- [ ] 3 quote graphics
- [ ] 1 carousel
- [ ] 2 reel covers
- [ ] Caption doc

### Step 6 — Series SVG accents

**Type:** `generate`
**Generate job:** `vector_logo_icon`

undefined

### Step 7 — QA & pastoral review

**Type:** `gate`

undefined

**Gate criteria:**
- Legibility mobile
- Theology review
- Pastor approved batch


## Outputs

- [ ] 8+ assets scheduled
- [ ] Archive folder created

## Related workflows

- `church.weekly_service_kit`
- `church.series_launch`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/church.sermon_to_social/runs`
