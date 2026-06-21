import { errorResponse } from "@/lib/api/response";
import type { QuiverModel } from "@/lib/types";

const DEFAULT_CREDITS = 10_000;
const balances = new Map<string, number>();

function balanceFor(orgId: string): number {
  if (!balances.has(orgId)) balances.set(orgId, DEFAULT_CREDITS);
  return balances.get(orgId)!;
}

export function getCredits(orgId: string): number {
  return balanceFor(orgId);
}

export function debitCredits(
  orgId: string,
  amount: number,
  requestId: string,
): Response | { ok: true; remaining: number } {
  const current = balanceFor(orgId);
  if (current < amount) {
    return errorResponse({
      status: 402,
      code: "insufficient_credits",
      message: "Insufficient credits",
      request_id: requestId,
    });
  }
  balances.set(orgId, current - amount);
  return { ok: true, remaining: current - amount };
}

export function generationCost(model: QuiverModel, n = 1): number {
  return model.pricing_credits.svg_generate * n;
}

export function vectorizeCost(model: QuiverModel): number {
  return model.pricing_credits.svg_vectorize;
}
