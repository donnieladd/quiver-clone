export type WorkflowStepType =
  | "input"
  | "route"
  | "skill"
  | "generate"
  | "gate"
  | "checklist";

export type WorkflowVertical =
  | "marketing-stack"
  | "corporate-marketing"
  | "product-marketing"
  | "product-brand"
  | "fashion-luxury"
  | "editorial-marketing"
  | "personal-brand"
  | "personal-os"
  | "creator"
  | "church";

export interface WorkflowInputField {
  key: string;
  label: string;
  required: boolean;
  placeholder?: string;
  multiline?: boolean;
}

export interface WorkflowStep {
  id: string;
  title: string;
  description?: string;
  type: WorkflowStepType;
  skillId?: string;
  /** For route steps — objective passed to platform matrix */
  routeObjective?: string;
  /** For generate steps — maps to tool-router job types */
  jobType?: string;
  aspectRatio?: string;
  promptTemplate?: string;
  gateCriteria?: string[];
  checklistItems?: string[];
  inputs?: WorkflowInputField[];
  optional?: boolean;
}

export interface WorkflowDefinition {
  id: string;
  title: string;
  vertical: WorkflowVertical;
  summary: string;
  whenToUse: string[];
  whenNotToUse: string[];
  estimatedMinutes: number;
  primaryPlatforms: string[];
  skillsUsed: string[];
  docPath: string;
  steps: WorkflowStep[];
  outputChecklist: string[];
  relatedWorkflows: string[];
}

export type WorkflowRunStatus = "active" | "completed" | "blocked";

export interface WorkflowStepState {
  stepId: string;
  status: "pending" | "active" | "completed" | "skipped";
  completedAt?: number;
  payload?: Record<string, unknown>;
  generationJobId?: string;
  notes?: string;
}

export interface WorkflowRun {
  id: string;
  workflowId: string;
  status: WorkflowRunStatus;
  created: number;
  updated: number;
  currentStepIndex: number;
  context: Record<string, unknown>;
  steps: WorkflowStepState[];
}
