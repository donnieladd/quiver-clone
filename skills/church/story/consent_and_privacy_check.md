---
id: church.story.consent_and_privacy_check
tier: qa
vertical: church
title: Consent and privacy check for stories
inputs: [subject_name, consent_form, channels_list]
outputs: [consent_pass_fail, restrictions]
related: [church.story.collect_member_testimony, church.qa.approval_status_recorded]
profiles: [all]
---

# Consent and privacy check for stories

## Purpose

Legal and pastoral guardrail before publishing faces, names, or sensitive details.

## Checklist

- [ ] Signed or recorded consent for listed channels (web, social, service)
- [ ] Minors: parent/guardian consent
- [ ] Sensitive details (health, marriage, legal) approved by subject
- [ ] Anonymous request honored (initials only if requested)
- [ ] Approval recorded per profile `approval.chain` for `community_story`

## Fail → do not publish until resolved.
