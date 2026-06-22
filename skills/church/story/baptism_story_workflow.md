---
id: church.story.baptism_story_workflow
tier: production
vertical: church
title: Baptism story workflow
inputs: [baptism_candidates, church_profile, service_date]
outputs: [baptism_slides, social_set, optional_video_clip]
related: [church.slides.baptism_slide_template, church.social.template_baptism_celebration]
profiles: [all]
---

# Baptism story workflow

## Purpose

Celebrate baptism as **community story** — candidate-centered, not pastor-centered.

## Deliverables

- Service slide(s) with first name + `church.slides.baptism_slide_template`
- Social: `church.social.template_baptism_celebration` (consent required)
- Optional: 15–30s vertical clip from service (caption burned in)

## Decision rules

- Default: first name only on public social unless consent for full name
- Pastor in photo ≤ 1 of 3 assets (community moment focus)
- TC/Union: seeker-invite CTA on one post ("Your turn?")
