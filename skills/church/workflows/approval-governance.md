---
id: church.workflow.approval_governance
title: Approval & Governance Workflow
skills_used:
  - church.ops.define_approval_chain
  - church.ops.submit_for_pastoral_review
  - church.ops.assign_approval_owner
  - church.qa.theology_sensitive_language
  - church.qa.approval_status_recorded
  - church.series.archive_series_assets
  - church.ops.version_brand_assets
---

# Workflow: Approval & Governance

Who signs off on what, how versions are tracked, and when assets are archived.

## Approval chain (default)

| Asset type | First reviewer | Final approver |
|------------|----------------|----------------|
| Sermon quote graphics | Comms lead | Teaching pastor (if doctrinal) |
| Social / general promo | Comms lead | Comms director |
| Giving campaigns | Comms + finance | Executive pastor |
| Brand / logo changes | Creative lead | Elder board or leadership team |
| Volunteer-made posts | Volunteer → comms | Comms lead |

Customize with **`church.ops.define_approval_chain`**.

## Theology-sensitive review

Always run **`church.qa.theology_sensitive_language`** when:

- Quoting scripture out of full context
- Naming other religions/denominations comparatively
- Healing/prosperity claims
- Political endorsements
- Pastoral counsel tone on social

Escalate to teaching pastor before schedule.

## Versioning

- **`church.ops.version_brand_assets`** — semantic: `series-name_v1.2`
- Never overwrite master templates; duplicate per week.
- Record approval in tracker: `church.qa.approval_status_recorded` (date, approver, channel).

## Archive policy

- End of series → **`church.series.archive_series_assets`**
- Staff transition → export Canva/Figma + DAM snapshot
- Retain sermon social packs 1 year minimum for reuse/recycle

## Crisis mode

Skip carousel polish; use **`church.social.template.pastoral_message`** + single approved statement. One voice, one approver, fast publish.

## Sources

- [Evoke brand governance practices](https://madebyevoke.com/blog/brand-identity-checklist-2025)
