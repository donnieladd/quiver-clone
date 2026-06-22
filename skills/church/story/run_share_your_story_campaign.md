---
id: church.story.run_share_your_story_campaign
tier: production
vertical: church
title: Run Share Your Story campaign
inputs: [church_profile, campaign_window, intake_form_url]
outputs: [story_submissions, approved_stories, social_web_assets]
related: [church.story.share_your_story_intake_form, church.story.feature_member_story_on_web]
profiles: [church.faith-chapel]
---

# Run Share Your Story campaign

## Purpose

Operationalize Faith Chapel's **[Share Your Story](https://www.faithchapel.net/stories)** surface — collect, approve, and publish **member narratives** as first-class media.

## When to use

- Quarterly story push or sermon series on testimony
- Profile: `church.faith-chapel` (`story.story_submission_url`)

## Steps

1. Confirm intake URL from profile: `/stories`.
2. Run **`church.story.share_your_story_intake_form`** — brief + consent language.
3. Promote via **`church.social.template_community_story`** + service announcement slide.
4. Comms reviews for theology sensitivity and consent.
5. Publish approved stories: web feature + 1–2 social posts each.
6. Apply **`church.story.balance_pastor_vs_community_faces`** — stories count as community.

## Export specs

- Web feature: long-form + hero photo (2400×1200 max)
- Social: 1080×1080 and 1080×1350 from `template_community_story`

## QA checks

- [ ] Written consent on file
- [ ] No private details without approval
- [ ] `church.qa.theology_sensitive_language`
