import type { MediaJob } from "./types";

const jobs = new Map<string, MediaJob>();

export function saveJob(job: MediaJob): void {
  jobs.set(job.id, job);
}

export function getJob(id: string): MediaJob | undefined {
  return jobs.get(id);
}

export function updateJob(
  id: string,
  patch: Partial<MediaJob>,
): MediaJob | undefined {
  const existing = jobs.get(id);
  if (!existing) return undefined;
  const updated = { ...existing, ...patch };
  jobs.set(id, updated);
  return updated;
}

export function listJobs(limit = 50): MediaJob[] {
  return [...jobs.values()]
    .sort((a, b) => b.created - a.created)
    .slice(0, limit);
}

export function createJobId(): string {
  return `gen_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
}
