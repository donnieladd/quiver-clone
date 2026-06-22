---
id: church.story.avoid_out_of_context_narrative
tier: qa
vertical: church
title: Avoid out of context narrative
inputs: [final_copy, source_sermon_or_interview]
outputs: [qa_pass_fail, context_notes]
related: [church.qa.theology_sensitive_language, church.content.design_sermon_for_clip_extraction]
profiles: [all]
---

# Avoid out of context narrative

## Purpose

Prevent **clip-bait** or testimony edits that misrepresent theology or personal story.

## Checks

- [ ] Quote appears in full context in source
- [ ] No implied promise (health, wealth) not in source
- [ ] Testimony "before/after" not exaggerated
- [ ] Sermon clip includes enough setup for standalone social (TC/Elevation)

## Fail → return to editor or pastoral review.
