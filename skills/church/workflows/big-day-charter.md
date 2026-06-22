---
id: church.big_day_charter
title: "Big day project charter"
vertical: church
skills_used:
  - church.doc-architecture.write_project_charter
  - church.doc-architecture.write_raci_matrix
  - church.doc-architecture.write_risk_register
  - church.doc-architecture.write_run_of_show
estimated_minutes: 120
primary_platforms: ["Internal","ProPresenter","Events"]
---

# Workflow: Big day project charter

Authorize major Sundays, events, and productions with sponsor, scope, RACI, risk register, and success criteria.

## When to use

- Easter, Christmas, conference, baptism Sunday, major guest
- Multi-team production with budget or vendor impact

## When NOT to use

- Standard weekly service kit
- Single social graphic

## Primary platforms

Internal · ProPresenter · Events

## Steps

### Step 1 — Concept note (optional)

**Type:** `skill`
**Skill:** `church.doc-architecture.write_concept_note`

If idea is still early, capture concept note before full charter.

### Step 2 — Project charter

**Type:** `input`

undefined

**Inputs:**
- Event / big day name (required)
- Date (required)
- Executive sponsor (required)
- Success criteria (required)
- Explicitly out of scope (required)

### Step 3 — RACI matrix

**Type:** `skill`
**Skill:** `church.doc-architecture.write_raci_matrix`

undefined

### Step 4 — Risk register

**Type:** `skill`
**Skill:** `church.doc-architecture.write_risk_register`

Production, safety, comms, volunteer, weather — mitigation owners assigned.

### Step 5 — Run of show draft

**Type:** `skill`
**Skill:** `church.doc-architecture.write_run_of_show`

undefined

### Step 6 — Leadership authorization

**Type:** `gate`

undefined

**Gate criteria:**
- Executive sponsor signed
- Budget boundary clear
- RACI published to teams


## Outputs

- [ ] Project charter
- [ ] RACI
- [ ] Risk register
- [ ] ROS v1
- [ ] Approval recorded

## Related workflows

- `church.weekly_service_kit`
- `church.post_event_aar`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/church.big_day_charter/runs`
