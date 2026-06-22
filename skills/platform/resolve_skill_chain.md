---
id: platform.brand_studio.resolve_skill_chain
tier: production
vertical: platform
title: "Resolve skill chain from intent"
inputs: []
outputs: []
related: [platform.brand_studio.run_qa_pipeline]
---

# Resolve skill chain from intent

## Purpose

Map natural language intent to ordered skill IDs.

## Steps

1. Parse intent against INDEX decision trees.
2. Insert brand-system lint skills before export skills.
3. Return ordered list with inputs/outputs.
