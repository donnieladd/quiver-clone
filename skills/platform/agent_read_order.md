---
id: platform.brand_studio.agent_read_order
tier: foundation
vertical: platform
title: "Brand Studio agent read order"
inputs: []
outputs: []
related: [platform.brand_studio.load_project]
---

# Brand Studio agent read order

## Purpose

Canonical load sequence for Brand Studio agent.

## Steps

1. Load Brand Studio project manifest.
2. Load brand-system tokens for client_slug.
3. Load vertical profile if church.
4. Route INDEX → workflow → skills.
5. Execute QA pipeline before export.
