"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Circle,
  Loader2,
  Sparkles,
} from "lucide-react";

const API_KEY = "qv_dev_local_key";

interface WorkflowSummary {
  id: string;
  title: string;
  vertical: string;
  summary: string;
  estimatedMinutes: number;
  primaryPlatforms: string[];
  stepCount: number;
  docPath: string;
}

interface Vertical {
  id: string;
  label: string;
  description: string;
}

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  type: string;
  skillId?: string;
  jobType?: string;
  routeObjective?: string;
  promptTemplate?: string;
  gateCriteria?: string[];
  checklistItems?: string[];
  inputs?: Array<{
    key: string;
    label: string;
    required: boolean;
    multiline?: boolean;
    placeholder?: string;
  }>;
  platformRoute?: { primary: string[]; contentShape: string; aiRole: string };
  toolRoute?: { modelId: string; provider: string; modality: string };
  optional?: boolean;
}

interface WorkflowDetail extends WorkflowSummary {
  whenToUse: string[];
  whenNotToUse: string[];
  steps: WorkflowStep[];
  outputChecklist: string[];
}

interface WorkflowRunResponse {
  id: string;
  status: string;
  context: Record<string, unknown>;
  currentStep: {
    index: number;
    total: number;
    definition: WorkflowStep;
    state: { status: string; generationJobId?: string };
  } | null;
  outputChecklist: string[];
  steps: Array<{ stepId: string; status: string }>;
}

type View = "pick" | "run" | "done";

export function WorkflowStudio() {
  const [verticals, setVerticals] = useState<Vertical[]>([]);
  const [workflows, setWorkflows] = useState<WorkflowSummary[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [selected, setSelected] = useState<WorkflowDetail | null>(null);
  const [run, setRun] = useState<WorkflowRunResponse | null>(null);
  const [view, setView] = useState<View>("pick");
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [promptOverride, setPromptOverride] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const authHeaders = useMemo(
    () => ({
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    }),
    [],
  );

  const loadWorkflows = useCallback(async () => {
    const res = await fetch("/v1/workflows", { headers: authHeaders });
    const json = await res.json();
    setVerticals(json.verticals ?? []);
    setWorkflows(json.data ?? []);
  }, [authHeaders]);

  useEffect(() => {
    void loadWorkflows();
  }, [loadWorkflows]);

  const filtered = useMemo(() => {
    if (filter === "all") return workflows;
    return workflows.filter((w) => w.vertical === filter);
  }, [workflows, filter]);

  const startWorkflow = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const detailRes = await fetch(`/v1/workflows/${encodeURIComponent(id)}`, {
        headers: authHeaders,
      });
      const detail = (await detailRes.json()) as WorkflowDetail;
      if (!detailRes.ok) throw new Error("Failed to load workflow");

      const runRes = await fetch(
        `/v1/workflows/${encodeURIComponent(id)}/runs`,
        { method: "POST", headers: authHeaders, body: JSON.stringify({}) },
      );
      const runJson = (await runRes.json()) as WorkflowRunResponse;
      if (!runRes.ok) throw new Error("Failed to start workflow");

      setSelected(detail);
      setRun(runJson);
      setFormValues({});
      setPromptOverride("");
      setNotes("");
      setView("run");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to start");
    } finally {
      setLoading(false);
    }
  };

  const advance = async (opts?: { generate?: boolean; skip?: boolean }) => {
    if (!run) return;
    setLoading(true);
    setError(null);
    try {
      const payload: Record<string, unknown> = { ...formValues };
      const body: Record<string, unknown> = {
        action: opts?.generate ? "generate_and_advance" : "advance",
        payload: Object.keys(payload).length ? payload : undefined,
        notes: notes || undefined,
        skip: opts?.skip,
        prompt: promptOverride || undefined,
      };

      const res = await fetch(`/v1/workflows/runs/${run.id}`, {
        method: "PATCH",
        headers: authHeaders,
        body: JSON.stringify(body),
      });
      const json = (await res.json()) as WorkflowRunResponse;
      if (!res.ok) throw new Error("Failed to advance step");

      setRun(json);
      setFormValues({});
      setNotes("");
      setPromptOverride("");
      if (json.status === "completed") setView("done");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to advance");
    } finally {
      setLoading(false);
    }
  };

  const step = run?.currentStep?.definition;
  const progress = run?.currentStep
    ? ((run.currentStep.index + 1) / run.currentStep.total) * 100
    : 100;

  return (
    <>
      <SiteHeader />
      <div className="mx-auto max-w-6xl space-y-8 p-6 pb-24">
        <header className="space-y-3">
          <div className="flex items-center gap-2 text-accent">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Brand Studio Workflows
            </span>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">
            {view === "pick" && "Pick a workflow — we guide every step"}
            {view === "run" && selected?.title}
            {view === "done" && "Workflow complete"}
          </h1>
          <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">
            {view === "pick" &&
              "No tool shopping. Choose your world (corporate, PMM, fashion, editorial…), start a workflow, and follow the steps. AI routing and QA gates are built in."}
            {view === "run" && selected?.summary}
            {view === "done" &&
              "Archive your deliverables and run QA before publish."}
          </p>
        </header>

        {error && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        )}

        {view === "pick" && (
          <>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`rounded-full px-4 py-1.5 text-sm ${
                  filter === "all"
                    ? "bg-foreground text-background"
                    : "bg-muted"
                }`}
              >
                All
              </button>
              {verticals.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setFilter(v.id)}
                  className={`rounded-full px-4 py-1.5 text-sm ${
                    filter === v.id
                      ? "bg-foreground text-background"
                      : "bg-muted"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {filtered.map((w) => (
                <button
                  key={w.id}
                  type="button"
                  onClick={() => void startWorkflow(w.id)}
                  disabled={loading}
                  className="group rounded-xl border p-5 text-left transition hover:border-accent/50 hover:shadow-sm"
                >
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {verticals.find((v) => v.id === w.vertical)?.label ?? w.vertical}
                  </p>
                  <h2 className="mt-1 text-lg font-semibold group-hover:text-accent">
                    {w.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {w.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span>{w.stepCount} steps</span>
                    <span>·</span>
                    <span>~{w.estimatedMinutes} min</span>
                    <span>·</span>
                    <span>{w.primaryPlatforms.slice(0, 2).join(", ")}</span>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}

        {view === "run" && run && step && (
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <aside className="space-y-2">
              <p className="text-xs font-medium uppercase text-muted-foreground">
                Progress
              </p>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-accent transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <ol className="mt-4 space-y-1">
                {selected?.steps.map((s, i) => {
                  const state = run.steps[i]?.status ?? "pending";
                  return (
                    <li
                      key={s.id}
                      className={`flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm ${
                        i === run.currentStep?.index ? "bg-accent/10 font-medium" : ""
                      }`}
                    >
                      {state === "completed" || state === "skipped" ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      ) : i === run.currentStep?.index ? (
                        <Loader2 className="mt-0.5 h-4 w-4 shrink-0 animate-spin text-accent" />
                      ) : (
                        <Circle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                      )}
                      <span className={state === "pending" ? "text-muted-foreground" : ""}>
                        {s.title}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </aside>

            <section className="space-y-6 rounded-xl border p-6">
              <div>
                <p className="text-xs uppercase text-muted-foreground">
                  Step {run.currentStep!.index + 1} of {run.currentStep!.total} · {step.type}
                </p>
                <h2 className="mt-1 text-2xl font-semibold">{step.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description ?? "Complete this step, then continue."}
                </p>
              </div>

              {step.type === "route" && step.platformRoute && (
                <div className="rounded-lg bg-muted/50 p-4 text-sm">
                  <p className="font-medium">Primary platforms</p>
                  <p className="mt-1">{step.platformRoute.primary.join(" · ")}</p>
                  <p className="mt-3 font-medium">Content shape</p>
                  <p className="mt-1">{step.platformRoute.contentShape}</p>
                  <p className="mt-3 font-medium">AI role</p>
                  <p className="mt-1">{step.platformRoute.aiRole}</p>
                </div>
              )}

              {step.type === "generate" && step.toolRoute && (
                <div className="space-y-3">
                  <div className="rounded-lg bg-muted/50 p-4 text-sm">
                    <p>
                      <span className="font-medium">Routed model:</span>{" "}
                      {step.toolRoute.modelId}
                    </p>
                    <p className="mt-1 text-muted-foreground">
                      Provider: {step.toolRoute.provider} · {step.toolRoute.modality}
                    </p>
                  </div>
                  <label className="block space-y-1">
                    <span className="text-sm font-medium">Generation prompt</span>
                    <textarea
                      className="min-h-[100px] w-full rounded-md border bg-background px-3 py-2 text-sm"
                      value={promptOverride || step.promptTemplate || ""}
                      onChange={(e) => setPromptOverride(e.target.value)}
                    />
                  </label>
                </div>
              )}

              {step.type === "input" && step.inputs && (
                <div className="space-y-4">
                  {step.inputs.map((field) => (
                    <label key={field.key} className="block space-y-1">
                      <span className="text-sm font-medium">
                        {field.label}
                        {field.required && " *"}
                      </span>
                      {field.multiline ? (
                        <textarea
                          className="min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-sm"
                          value={formValues[field.key] ?? ""}
                          onChange={(e) =>
                            setFormValues((v) => ({
                              ...v,
                              [field.key]: e.target.value,
                            }))
                          }
                        />
                      ) : (
                        <input
                          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                          value={formValues[field.key] ?? ""}
                          onChange={(e) =>
                            setFormValues((v) => ({
                              ...v,
                              [field.key]: e.target.value,
                            }))
                          }
                        />
                      )}
                    </label>
                  ))}
                </div>
              )}

              {step.type === "gate" && step.gateCriteria && (
                <ul className="space-y-2">
                  {step.gateCriteria.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                      {c}
                    </li>
                  ))}
                </ul>
              )}

              {step.type === "checklist" && step.checklistItems && (
                <ul className="space-y-2">
                  {step.checklistItems.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm">
                      <Circle className="mt-0.5 h-4 w-4 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              )}

              {step.type === "skill" && step.skillId && (
                <p className="rounded-lg border border-dashed px-4 py-3 text-sm text-muted-foreground">
                  Agent skill:{" "}
                  <code className="rounded bg-muted px-1 text-xs">{step.skillId}</code>
                  — follow skill doc, then mark step complete.
                </p>
              )}

              <label className="block space-y-1">
                <span className="text-sm font-medium">Notes (optional)</span>
                <input
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Approval notes, links, decisions…"
                />
              </label>

              <div className="flex flex-wrap gap-3">
                {step.type === "generate" ? (
                  <Button
                    onClick={() => void advance({ generate: true })}
                    disabled={loading}
                  >
                    {loading ? "Generating…" : "Generate & continue"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={() => void advance()} disabled={loading}>
                    {loading ? "Saving…" : "Complete step"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
                {step.optional && (
                  <Button
                    variant="secondary"
                    onClick={() => void advance({ skip: true })}
                    disabled={loading}
                  >
                    Skip
                  </Button>
                )}
                <Button
                  variant="secondary"
                  onClick={() => {
                    setView("pick");
                    setRun(null);
                    setSelected(null);
                  }}
                >
                  Exit workflow
                </Button>
              </div>
            </section>
          </div>
        )}

        {view === "done" && run && (
          <div className="space-y-6 rounded-xl border p-6">
            <div className="flex items-center gap-3 text-green-700">
              <CheckCircle2 className="h-8 w-8" />
              <div>
                <p className="font-semibold">{selected?.title} — done</p>
                <p className="text-sm text-muted-foreground">Run ID: {run.id}</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Deliverable checklist</p>
              <ul className="mt-3 space-y-2">
                {run.outputChecklist.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Button
              onClick={() => {
                setView("pick");
                setRun(null);
                setSelected(null);
              }}
            >
              Start another workflow
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
