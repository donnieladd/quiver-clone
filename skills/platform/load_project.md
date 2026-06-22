---
id: platform.brand_studio.load_project
tier: foundation
vertical: platform
title: "Load Brand Studio project"
inputs: []
outputs: []
related: [platform.brand_studio.attach_client_profile]
---

# Load Brand Studio project

## Purpose

Hydrate workspace from project JSON + skill packs.

## Steps

1. Read project.json (client, vertical, active_series).
2. Mount skills/ from repo or package.
3. Load tokens JSON into lint context.
