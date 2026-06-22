---
id: corporate-marketing.thought_leadership
title: "Executive thought leadership program"
vertical: corporate-marketing
skills_used:
  - corporate-marketing.content.executive_thought_leadership_program
  - corporate-marketing.digital.linkedin_company_page_system
  - marketing-stack.ai.route_tool_for_job
estimated_minutes: 120
primary_platforms: ["LinkedIn","Company blog","Email"]
---

# Workflow: Executive thought leadership program

Turn one executive insight into LinkedIn posts, byline outline, and visual system for a quarter.

## When to use

- CEO/CMO wants consistent LinkedIn presence
- Building employer brand through leadership voice

## When NOT to use

- Product launch week (use PMM workflow)
- Crisis comms

## Primary platforms

LinkedIn · Company blog · Email

## Steps

### Step 1 — Executive positioning

**Type:** `input`

Define the 3 themes this exec owns for 90 days.

**Inputs:**
- Executive name & title (required)
- 3 thought leadership themes (required)
- Proof points (metrics, wins) (required)

### Step 2 — Stakeholder messaging

**Type:** `skill`
**Skill:** `corporate-marketing.strategy.map_stakeholder_messaging_matrix`

Align exec voice with investor, customer, and talent audiences.

### Step 3 — Channel selection

**Type:** `route`

LinkedIn primary; email and events secondary.

### Step 4 — 12-week post calendar

**Type:** `skill`
**Skill:** `corporate-marketing.content.executive_thought_leadership_program`

2 posts/week: 1 story, 1 insight. No product pitches >20% of posts.

### Step 5 — LinkedIn visual system

**Type:** `generate`
**Generate job:** `corporate_hero`

Banner, quote cards, carousel template — real headshot for profile hero only.

### Step 6 — Byline / long-form outline

**Type:** `skill`
**Skill:** `editorial-marketing.writing.executive_byline_ghostwriting`

One HBR-style essay outline per month from best-performing posts.

### Step 7 — Exec approval

**Type:** `gate`

undefined

**Gate criteria:**
- Exec reviewed voice
- Legal cleared claims
- No confidential data


## Outputs

- [ ] 12-week calendar
- [ ] LinkedIn banner + 3 template variants
- [ ] 4 byline outlines
- [ ] Approval log

## Related workflows

- `corporate-marketing.case_study`
- `editorial-marketing.pillar_page`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/corporate-marketing.thought_leadership/runs`
