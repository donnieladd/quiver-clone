import type { WorkflowDefinition, WorkflowVertical } from "./types";
import { CHURCH_WORKFLOWS } from "./definitions/church";
import { CHURCH_DOC_WORKFLOWS } from "./definitions/church-doc";
import { CORPORATE_WORKFLOWS } from "./definitions/corporate";
import { EDITORIAL_WORKFLOWS } from "./definitions/editorial";
import { FASHION_WORKFLOWS } from "./definitions/fashion";
import { MARKETING_STACK_WORKFLOWS } from "./definitions/marketing-stack";
import { PERSONAL_OS_WORKFLOWS } from "./definitions/personal-os";
import {
  CREATOR_WORKFLOWS,
  PERSONAL_BRAND_WORKFLOWS,
  PRODUCT_BRAND_WORKFLOWS,
} from "./definitions/other-verticals";
import { PMM_WORKFLOWS } from "./definitions/product-marketing";

export const ALL_WORKFLOWS: WorkflowDefinition[] = [
  ...MARKETING_STACK_WORKFLOWS,
  ...CORPORATE_WORKFLOWS,
  ...PMM_WORKFLOWS,
  ...FASHION_WORKFLOWS,
  ...EDITORIAL_WORKFLOWS,
  ...PRODUCT_BRAND_WORKFLOWS,
  ...PERSONAL_BRAND_WORKFLOWS,
  ...PERSONAL_OS_WORKFLOWS,
  ...CREATOR_WORKFLOWS,
  ...CHURCH_WORKFLOWS,
  ...CHURCH_DOC_WORKFLOWS,
];

const byId = new Map(ALL_WORKFLOWS.map((w) => [w.id, w]));

export function getWorkflow(id: string): WorkflowDefinition | undefined {
  return byId.get(id);
}

export function listWorkflows(filters?: {
  vertical?: WorkflowVertical;
}): WorkflowDefinition[] {
  let list = ALL_WORKFLOWS;
  if (filters?.vertical) {
    list = list.filter((w) => w.vertical === filters.vertical);
  }
  return list.sort((a, b) => a.title.localeCompare(b.title));
}

export const WORKFLOW_VERTICALS: { id: WorkflowVertical; label: string; description: string }[] = [
  { id: "personal-os", label: "Personal Life OS", description: "Your home base — weekly alignment, life charters, AAR" },
  { id: "marketing-stack", label: "Marketing OS", description: "Master orchestration & QA" },
  { id: "corporate-marketing", label: "Corporate / B2B", description: "Enterprise, sales, thought leadership" },
  { id: "product-marketing", label: "Product marketing", description: "PMM, GTM, launches" },
  { id: "product-brand", label: "Product brand", description: "DTC, packaging, ecommerce" },
  { id: "fashion-luxury", label: "Fashion & luxury", description: "Drops, lookbooks, editorial fashion" },
  { id: "editorial-marketing", label: "Editorial & SEO", description: "Pillars, newsletters, content at scale" },
  { id: "personal-brand", label: "Personal brand", description: "Executive & creator identity" },
  { id: "creator", label: "Creator economy", description: "Weekly production & repurposing" },
  { id: "church", label: "Church / ministry", description: "Sermon, service kit, series" },
];

export function workflowToSummary(w: WorkflowDefinition) {
  return {
    id: w.id,
    title: w.title,
    vertical: w.vertical,
    summary: w.summary,
    estimatedMinutes: w.estimatedMinutes,
    primaryPlatforms: w.primaryPlatforms,
    stepCount: w.steps.length,
    docPath: w.docPath,
  };
}
