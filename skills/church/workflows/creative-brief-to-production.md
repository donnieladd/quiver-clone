---
id: church.creative_brief_to_production
title: "Creative brief → production"
vertical: church
skills_used:
  - church.doc-architecture.write_creative_brief
  - church.ops.intake_creative_brief_form
  - church.ops.duplicate_template_not_redesign
estimated_minutes: 45
primary_platforms: ["Internal","Canva/Figma","Social"]
---

# Workflow: Creative brief → production

Alignment first: creative brief locks audience, tone, and deliverables — then routes to the right production workflow.

## When to use

- Any campaign, series, event promo, or brand work before templates open
- Cross-team creative request intake

## When NOT to use

- Emergency/crisis comms — use approval fast-track
- Repeat weekly sermon batch with existing series kit

## Primary platforms

Internal · Canva/Figma · Social

## Steps

### Step 1 — Intake request

**Type:** `input`

Who is asking, what they need, by when, and which campus/ministry.

**Inputs:**
- Requester / ministry (required)
- Due date (required)
- What do you need? (required)

### Step 2 — Write creative brief

**Type:** `skill`
**Skill:** `church.doc-architecture.write_creative_brief`

Audience, objective, tone, deliverables, constraints — alignment only, not approval.

### Step 3 — Route to production workflow

**Type:** `checklist`

Pick downstream workflow based on deliverable type.

**Checklist:**
- [ ] Sermon/social batch → sermon-to-social
- [ ] Sunday kit → weekly-service-kit
- [ ] New series → series-launch
- [ ] Event / special production → big-day-charter first if large scope

### Step 4 — Comms lead alignment sign-off

**Type:** `gate`

Confirm brief is clear — not final creative approval.

**Gate criteria:**
- Audience defined
- Deliverables listed
- Brand/series kit referenced
- Timeline realistic


## Outputs

- [ ] Creative brief PDF/Doc
- [ ] Routed workflow name
- [ ] DAM folder path

## Related workflows

- `church.sermon_to_social`
- `church.weekly_service_kit`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/church.creative_brief_to_production/runs`
