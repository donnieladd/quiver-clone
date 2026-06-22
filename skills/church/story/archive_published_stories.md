---
id: church.story.archive_published_stories
tier: ops
vertical: church
title: Archive published stories
inputs: [published_assets, consent_expiry_optional]
outputs: [archive_record, asset_paths, renewal_reminder]
related: [church.ops.archive_series_assets, church.story.consent_and_privacy_check]
profiles: [all]
---

# Archive published stories

## Purpose

Maintain **story library** for reuse, annual reports, and consent renewal — not lost in social feeds.

## Archive record

| Field | Value |
|-------|-------|
| story_id | UUID |
| subject | name or anonymous id |
| channels | web, ig, etc. |
| publish_date | ISO |
| consent_expires | optional |
| files | paths to masters |

## Steps

1. Store masters in profile DAM path or `ops/archive_series_assets` pattern.
2. Set renewal reminder 30 days before consent expiry.
3. Unpublish if consent lapses.
