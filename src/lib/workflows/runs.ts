import type { WorkflowRun, WorkflowStepState } from "./types";
import { getWorkflow } from "./registry";

const runs = new Map<string, WorkflowRun>();

export function createRunId(): string {
  return `wfr_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
}

export function createWorkflowRun(
  workflowId: string,
  initialContext: Record<string, unknown> = {},
): WorkflowRun | undefined {
  const workflow = getWorkflow(workflowId);
  if (!workflow) return undefined;

  const now = Math.floor(Date.now() / 1000);
  const steps: WorkflowStepState[] = workflow.steps.map((step, index) => ({
    stepId: step.id,
    status: index === 0 ? "active" : "pending",
  }));

  const run: WorkflowRun = {
    id: createRunId(),
    workflowId,
    status: "active",
    created: now,
    updated: now,
    currentStepIndex: 0,
    context: initialContext,
    steps,
  };
  runs.set(run.id, run);
  return run;
}

export function getWorkflowRun(id: string): WorkflowRun | undefined {
  return runs.get(id);
}

export function listWorkflowRuns(limit = 50): WorkflowRun[] {
  return [...runs.values()]
    .sort((a, b) => b.updated - a.updated)
    .slice(0, limit);
}

export interface AdvanceStepInput {
  payload?: Record<string, unknown>;
  notes?: string;
  generationJobId?: string;
  skip?: boolean;
}

export function advanceWorkflowRun(
  runId: string,
  input: AdvanceStepInput = {},
): WorkflowRun | undefined {
  const run = runs.get(runId);
  if (!run || run.status !== "active") return undefined;

  const workflow = getWorkflow(run.workflowId);
  if (!workflow) return undefined;

  const currentStep = run.steps[run.currentStepIndex];
  if (!currentStep) return undefined;

  if (input.payload) {
    run.context = { ...run.context, ...input.payload };
  }

  currentStep.status = input.skip ? "skipped" : "completed";
  currentStep.completedAt = Math.floor(Date.now() / 1000);
  if (input.notes) currentStep.notes = input.notes;
  if (input.generationJobId) currentStep.generationJobId = input.generationJobId;
  if (input.payload) currentStep.payload = input.payload;

  const nextIndex = run.currentStepIndex + 1;
  if (nextIndex >= workflow.steps.length) {
    run.status = "completed";
    run.currentStepIndex = workflow.steps.length - 1;
  } else {
    run.currentStepIndex = nextIndex;
    const next = run.steps[nextIndex];
    if (next) next.status = "active";
  }

  run.updated = Math.floor(Date.now() / 1000);
  runs.set(runId, run);
  return run;
}

export function runToResponse(run: WorkflowRun) {
  const workflow = getWorkflow(run.workflowId);
  const currentStepDef = workflow?.steps[run.currentStepIndex];
  return {
    object: "workflow_run" as const,
    ...run,
    workflow: workflow
      ? {
          id: workflow.id,
          title: workflow.title,
          vertical: workflow.vertical,
        }
      : null,
    currentStep: currentStepDef
      ? {
          index: run.currentStepIndex,
          total: workflow?.steps.length ?? 0,
          definition: currentStepDef,
          state: run.steps[run.currentStepIndex],
        }
      : null,
    outputChecklist: workflow?.outputChecklist ?? [],
  };
}
