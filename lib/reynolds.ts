/**
 * Reynolds Calculator — Lead Magnet Scoring Engine
 *
 * Cada pregunta tiene 4 opciones (A, B, C, D) con pesos 1, 2, 3, 4.
 * Re Score = (sum / 40) * 6000
 *
 * Re < 2,300 → Laminar (bajo riesgo)
 * Re 2,300–4,000 → Transicional (riesgo medio)
 * Re > 4,000 → Turbulento (alto riesgo)
 */

export type Answer = "A" | "B" | "C" | "D";

export interface ReynoldsAnswers {
  q1: Answer;
  q2: Answer;
  q3: Answer;
  q4: Answer;
  q5: Answer;
  q6: Answer;
  q7: Answer;
  q8: Answer;
  q9: Answer;
  q10: Answer;
}

export interface ReynoldsQuestion {
  id: keyof ReynoldsAnswers;
  question: string;
  options: { value: Answer; label: string }[];
}

export type RiskLevel = "laminar" | "transitional" | "turbulent";

export interface ReynoldsResult {
  score: number;
  riskLevel: RiskLevel;
  riskLabel: string;
  riskColor: string;
  leaks: string[];
  estimatedMonthlyLoss: string;
  recommendation: string;
}

const WEIGHTS: Record<Answer, number> = { A: 1, B: 2, C: 3, D: 4 };

export function calculateReScore(
  answers: Record<string, Answer>
): number {
  const values = Object.values(answers);
  const sum = values.reduce((acc, ans) => acc + WEIGHTS[ans], 0);
  return Math.round((sum / 40) * 6000);
}

export function getRiskLevel(score: number): RiskLevel {
  if (score < 2300) return "laminar";
  if (score <= 4000) return "transitional";
  return "turbulent";
}

export function getReynoldsResult(
  answers: Record<string, Answer>
): ReynoldsResult {
  const score = calculateReScore(answers);
  const riskLevel = getRiskLevel(score);

  const riskMeta: Record<
    RiskLevel,
    { label: string; color: string; recommendation: string }
  > = {
    laminar: {
      label: "Flujo Laminar — Bajo Riesgo",
      color: "accent-success",
      recommendation:
        "Tu organización opera dentro de parámetros seguros. Recomendamos una auditoría preventiva anual para mantener el flujo laminar.",
    },
    transitional: {
      label: "Zona de Transición — Riesgo Medio",
      color: "accent-warning",
      recommendation:
        "Tu organización está en la zona crítica. Pequeñas perturbaciones pueden desencadenar turbulencia. Una Auditoría de Flujo es urgente.",
    },
    turbulent: {
      label: "Flujo Turbulento — Alto Riesgo",
      color: "accent-danger",
      recommendation:
        "Tu organización genera vórtices detectables. Necesitas un programa de Hardening inmediato para reducir tu Re por debajo de 2,300.",
    },
  };

  const leaks = identifyLeaks(answers);
  const estimatedMonthlyLoss = estimateLoss(score);

  return {
    score,
    riskLevel,
    riskLabel: riskMeta[riskLevel].label,
    riskColor: riskMeta[riskLevel].color,
    leaks,
    estimatedMonthlyLoss,
    recommendation: riskMeta[riskLevel].recommendation,
  };
}

function identifyLeaks(answers: Record<string, Answer>): string[] {
  const leaks: string[] = [];

  // Identify the 3 highest-weighted answers as "critical leaks"
  const sorted = Object.entries(answers)
    .map(([key, val]) => ({ key, weight: WEIGHTS[val] }))
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 3);

  const leakDescriptions: Record<string, string> = {
    q1: "Estructura organizativa genera fricciones regulatorias visibles",
    q2: "Flujo transaccional excede umbrales de monitorización automática",
    q3: "Concentración de decisiones en nodos detectables (Vortex Core)",
    q4: "Velocidad de respuesta regulatoria insuficiente",
    q5: "Dependencia excesiva de sistemas legacy (alta viscosidad)",
    q6: "Multi-jurisdiccionalidad sin capas de absorción",
    q7: "Exposición a normativa NIS2/DORA sin plan de cumplimiento",
    q8: "Cadena de suministro digital sin hardening",
    q9: "Identidad digital y accesos sin protocolo Zero Trust",
    q10: "Sin monitorización continua de indicadores de flujo",
  };

  for (const item of sorted) {
    const desc = leakDescriptions[item.key];
    if (desc) {
      leaks.push(desc);
    }
  }

  return leaks;
}

function estimateLoss(score: number): string {
  if (score < 2300) return "€0 – €2,000/mes";
  if (score <= 4000) return "€5,000 – €15,000/mes";
  return "€20,000 – €80,000/mes";
}

/**
 * 10 preguntas del cuestionario Reynolds
 */
export const REYNOLDS_QUESTIONS: ReynoldsQuestion[] = [
  {
    id: "q1",
    question: "¿Cuántas entidades jurídicas tiene tu organización?",
    options: [
      { value: "A", label: "1 entidad" },
      { value: "B", label: "2-3 entidades" },
      { value: "C", label: "4-6 entidades" },
      { value: "D", label: "7+ entidades" },
    ],
  },
  {
    id: "q2",
    question:
      "¿Cuántas transacciones procesas al mes (inter-compañía + externas)?",
    options: [
      { value: "A", label: "< 100" },
      { value: "B", label: "100 – 1,000" },
      { value: "C", label: "1,000 – 10,000" },
      { value: "D", label: "> 10,000" },
    ],
  },
  {
    id: "q3",
    question:
      "¿Qué porcentaje de decisiones críticas pasan por un solo nodo (persona/departamento)?",
    options: [
      { value: "A", label: "< 20%" },
      { value: "B", label: "20% – 40%" },
      { value: "C", label: "40% – 60%" },
      { value: "D", label: "> 60%" },
    ],
  },
  {
    id: "q4",
    question:
      "¿Cuántos días necesitas para responder a un requerimiento regulatorio?",
    options: [
      { value: "A", label: "< 3 días" },
      { value: "B", label: "3 – 14 días" },
      { value: "C", label: "14 – 30 días" },
      { value: "D", label: "> 30 días" },
    ],
  },
  {
    id: "q5",
    question:
      "¿Cuántos sistemas legacy (> 5 años sin actualización) tiene tu infraestructura?",
    options: [
      { value: "A", label: "Ninguno" },
      { value: "B", label: "1-2 sistemas" },
      { value: "C", label: "3-5 sistemas" },
      { value: "D", label: "> 5 sistemas" },
    ],
  },
  {
    id: "q6",
    question: "¿En cuántas jurisdicciones operas?",
    options: [
      { value: "A", label: "1 país" },
      { value: "B", label: "2-3 países" },
      { value: "C", label: "4-6 países" },
      { value: "D", label: "7+ países" },
    ],
  },
  {
    id: "q7",
    question:
      "¿Cuál es tu nivel de preparación para NIS2 / DORA / AI Act?",
    options: [
      { value: "A", label: "Cumplimos al 100%" },
      { value: "B", label: "Programa en marcha (> 50%)" },
      { value: "C", label: "Fase inicial (< 50%)" },
      { value: "D", label: "No hemos empezado" },
    ],
  },
  {
    id: "q8",
    question:
      "¿Has auditado la cadena de suministro digital en los últimos 12 meses?",
    options: [
      { value: "A", label: "Sí, auditoría completa" },
      { value: "B", label: "Parcialmente" },
      { value: "C", label: "Planeado pero no ejecutado" },
      { value: "D", label: "No" },
    ],
  },
  {
    id: "q9",
    question: "¿Implementas Zero Trust o MFA en accesos críticos?",
    options: [
      { value: "A", label: "Zero Trust completo + MFA" },
      { value: "B", label: "MFA en la mayoría de accesos" },
      { value: "C", label: "MFA solo en algunos accesos" },
      { value: "D", label: "Sin MFA ni Zero Trust" },
    ],
  },
  {
    id: "q10",
    question:
      "¿Tienes monitorización continua (SIEM/SOC) de tus indicadores de flujo?",
    options: [
      { value: "A", label: "SOC 24/7 + SIEM avanzado" },
      { value: "B", label: "SIEM básico con alertas" },
      { value: "C", label: "Logs manuales periódicos" },
      { value: "D", label: "Sin monitorización" },
    ],
  },
];
