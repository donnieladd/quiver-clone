---
id: church.post_event_aar
title: "After action report (post-event)"
vertical: church
skills_used:
  - church.doc-architecture.write_after_action_report
  - church.doc-architecture.write_decision_memo
estimated_minutes: 60
primary_platforms: ["Internal","Leadership"]
---

# Workflow: After action report (post-event)

Within 72 hours of event: what worked, what didn't, owners for improvements — feeds next charter.

## When to use

- After any big day, series launch weekend, or major event

## When NOT to use

- Before event completes

## Primary platforms

Internal · Leadership

## Steps

### Step 1 — Event reference

**Type:** `input`

undefined

**Inputs:**
- Event name (required)
- Event date (required)
- Link to project charter (if any)

### Step 2 — Gather input

**Type:** `checklist`

Comms, worship, production, volunteers — 15 min each, async OK.

**Checklist:**
- [ ] Comms debrief
- [ ] Production debrief
- [ ] Worship debrief
- [ ] Volunteer lead debrief

### Step 3 — Write AAR

**Type:** `skill`
**Skill:** `church.doc-architecture.write_after_action_report`

undefined

### Step 4 — Decision records

**Type:** `skill`
**Skill:** `church.doc-architecture.write_decision_memo`

Any policy or process changes → decision memo, not Slack-only.

### Step 5 — Update scorecard

**Type:** `skill`
**Skill:** `church.doc-architecture.write_scorecard`

Lag indicators: attendance, engagement, volunteer fill, social reach.

### Step 6 — Experience Division lead review

**Type:** `gate`

undefined

**Gate criteria:**
- Improvements have owners and dates
- Charter folder updated
- Shared with leadership


## Outputs

- [ ] AAR document
- [ ] Decision memos if needed
- [ ] Scorecard updated
- [ ] Lessons linked to next charter

## Related workflows

- `church.big_day_charter`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/church.post_event_aar/runs`
