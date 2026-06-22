---
id: platform.brand_studio.approval_workflow_state
tier: ops
vertical: platform
title: "Approval workflow state machine"
inputs: []
outputs: []
related: [church.ops.submit_for_pastoral_review]
---

# Approval workflow state machine

## Purpose

Track asset_type through profile approval.chain.

## Steps

1. Load reviewers from profile.
2. State: draft → review → approved → published.
3. Persist in Brand Studio project DB.
