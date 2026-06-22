import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import type { WorkflowDefinition } from "../../src/lib/workflows/types";
import { ALL_WORKFLOWS } from "../../src/lib/workflows/registry";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

function renderWorkflow(w: WorkflowDefinition): string {
  const phaseBlocks = w.steps
    .map(
      (s, i) =>
        `### Step ${i + 1} — ${s.title}\n\n**Type:** \`${s.type}\`${s.skillId ? `\n**Skill:** \`${s.skillId}\`` : ""}${s.jobType ? `\n**Generate job:** \`${s.jobType}\`` : ""}\n\n${s.description}${s.gateCriteria?.length ? `\n\n**Gate criteria:**\n${s.gateCriteria.map((c) => `- ${c}`).join("\n")}` : ""}${s.checklistItems?.length ? `\n\n**Checklist:**\n${s.checklistItems.map((c) => `- [ ] ${c}`).join("\n")}` : ""}${s.inputs?.length ? `\n\n**Inputs:**\n${s.inputs.map((f) => `- ${f.label}${f.required ? " (required)" : ""}`).join("\n")}` : ""}\n`,
    )
    .join("\n");

  return `---
id: ${w.id}
title: ${JSON.stringify(w.title)}
vertical: ${w.vertical}
skills_used:
${w.skillsUsed.map((s) => `  - ${s}`).join("\n")}
estimated_minutes: ${w.estimatedMinutes}
primary_platforms: ${JSON.stringify(w.primaryPlatforms)}
---

# Workflow: ${w.title}

${w.summary}

## When to use

${w.whenToUse.map((x) => `- ${x}`).join("\n")}

## When NOT to use

${w.whenNotToUse.map((x) => `- ${x}`).join("\n")}

## Primary platforms

${w.primaryPlatforms.join(" · ")}

## Steps

${phaseBlocks}

## Outputs

${w.outputChecklist.map((o) => `- [ ] ${o}`).join("\n")}

## Related workflows

${w.relatedWorkflows.map((r) => `- \`${r}\``).join("\n")}

## Runtime

Start in Brand Studio: **Workflows** (\`/app/workflows\`) or \`POST /v1/workflows/${w.id}/runs\`
`;
}

for (const w of ALL_WORKFLOWS) {
  const fullPath = join(ROOT, w.docPath);
  const dir = dirname(fullPath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(fullPath, renderWorkflow(w));
}

const index = `# Workflow Index

**${ALL_WORKFLOWS.length} executable workflows** — start at [\`/app/workflows\`](../../app/app/workflows/page.tsx) or the API.

| Vertical | Workflow | Minutes |
|----------|----------|---------|
${ALL_WORKFLOWS.map((w) => `| ${w.vertical} | [${w.title}](../${w.docPath}) | ~${w.estimatedMinutes} |`).join("\n")}

## How to run

1. **UI:** Open \`/app/workflows\` → pick vertical → start → follow steps
2. **API:** \`POST /v1/workflows/{id}/runs\` then \`PATCH /v1/workflows/runs/{runId}\`
3. **Agent:** \`platform.brand_studio.execute_workflow\`

Master map: [MARKETING_OS.md](../MARKETING_OS.md)
`;

const workflowsIndexDir = join(ROOT, "workflows");
if (!existsSync(workflowsIndexDir)) mkdirSync(workflowsIndexDir, { recursive: true });
writeFileSync(join(workflowsIndexDir, "INDEX.md"), index);
console.log(`Synced ${ALL_WORKFLOWS.length} workflow docs + INDEX`);
