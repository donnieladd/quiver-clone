---
id: editorial-marketing.newsletter_edition
title: "Newsletter edition production"
vertical: editorial-marketing
skills_used:
  - editorial-marketing.writing.newsletter_edition_template
estimated_minutes: 90
primary_platforms: ["Email","Blog archive"]
---

# Workflow: Newsletter edition production

Weekly or monthly editorial newsletter from template to send.

## When to use

- Recurring newsletter cadence

## When NOT to use

- One-off product email (use PMM)

## Primary platforms

Email · Blog archive

## Steps

### Step 1 — Edition theme

**Type:** `input`

undefined

**Inputs:**
- Subject line (required)
- Section outline (required)

### Step 2 — Apply template

**Type:** `skill`
**Skill:** `editorial-marketing.writing.newsletter_edition_template`

undefined

### Step 3 — Header visual

**Type:** `generate`
**Generate job:** `editorial_hero`

undefined

### Step 4 — Editor approval

**Type:** `gate`

undefined

**Gate criteria:**
- Links tested
- Unsubscribe working
- Fact-check on claims


## Outputs

- [ ] Newsletter sent
- [ ] Web archive URL

## Related workflows

- `editorial-marketing.article_social_ladder`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/editorial-marketing.newsletter_edition/runs`
