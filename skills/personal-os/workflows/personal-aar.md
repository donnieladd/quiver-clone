---
id: personal-os.personal_aar
title: "Personal after action review"
vertical: personal-os
skills_used:
  - personal-os.doc.write_personal_aar
  - personal-os.doc.write_personal_decision_memo
estimated_minutes: 20
primary_platforms: ["Personal OS"]
---

# Workflow: Personal after action review

Blameless 20-min review after hard weeks or finished projects — feeds next alignment.

## When to use

- After launch week
- After travel
- After emotional intensity
- End of life project

## When NOT to use

- Daily — use weekly alignment instead

## Primary platforms

Personal OS

## Steps

### Step 1 — What period / project?

**Type:** `input`

undefined

**Inputs:**
- Week of or project name (required)
- Charter link (if any)

### Step 2 — Write AAR

**Type:** `skill`
**Skill:** `personal-os.doc.write_personal_aar`

Worked / didn't / keep / stop / start.

### Step 3 — Decision memos

**Type:** `skill`
**Skill:** `personal-os.doc.write_personal_decision_memo`

Any 'never again' or 'always do' → decision memo, not vibes.

### Step 4 — Feed weekly alignment

**Type:** `checklist`

undefined

**Checklist:**
- [ ] One improvement with owner (you) and date
- [ ] Scorecard metric to watch
- [ ] Schedule next weekly alignment


## Outputs

- [ ] AAR saved
- [ ] Decisions recorded
- [ ] Next alignment scheduled

## Related workflows

- `personal-os.weekly_alignment`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/personal-os.personal_aar/runs`
