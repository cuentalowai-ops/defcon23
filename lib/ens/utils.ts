import type { EnsMeasureStatus } from "./data";

export function formatPercent(value: number) {
  return `${value}%`;
}

export function statusLabel(status: EnsMeasureStatus) {
  switch (status) {
    case "implementado":
      return "✅ Implementado";
    case "parcial":
      return "⚠️ Parcial";
    default:
      return "❌ Pendiente";
  }
}

export function statusBadgeClass(status: EnsMeasureStatus) {
  switch (status) {
    case "implementado":
      return "bg-emerald-500/10 text-emerald-300 border-emerald-500/40";
    case "parcial":
      return "bg-amber-500/10 text-amber-300 border-amber-500/40";
    default:
      return "bg-rose-500/10 text-rose-300 border-rose-500/40";
  }
}

export function progressPercent(current: number, total: number) {
  if (total <= 0) return 0;
  return Math.min(100, Math.round((current / total) * 100));
}
