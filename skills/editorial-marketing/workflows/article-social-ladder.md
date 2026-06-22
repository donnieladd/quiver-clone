---
id: editorial-marketing.article_social_ladder
title: "Article → social teaser ladder"
vertical: editorial-marketing
skills_used:
  - editorial-marketing.distribution.organic_social_teaser_ladder
estimated_minutes: 60
primary_platforms: ["LinkedIn","X","Instagram"]
---

# Workflow: Article → social teaser ladder

One article becomes thread, carousel, quote cards, and short video.

## When to use

- After publishing long-form content

## When NOT to use

- Before fact-check gate passed

## Primary platforms

LinkedIn · X · Instagram

## Steps

### Step 1 — Article URL

**Type:** `input`

undefined

**Inputs:**
- Published article URL (required)

### Step 2 — Extract hooks & quotes

**Type:** `skill`
**Skill:** `editorial-marketing.distribution.organic_social_teaser_ladder`

undefined

### Step 3 — Quote card graphics

**Type:** `generate`
**Generate job:** `campaign_photo`

undefined

### Step 4 — Thread / carousel copy

**Type:** `checklist`

undefined

**Checklist:**
- [ ] LinkedIn thread drafted
- [ ] IG carousel 5 slides
- [ ] Link in first comment


## Outputs

- [ ] 3+ social assets
- [ ] 7-day promo schedule

## Related workflows

- `editorial-marketing.pillar_page`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/editorial-marketing.article_social_ladder/runs`
