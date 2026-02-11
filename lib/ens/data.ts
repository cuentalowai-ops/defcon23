export type EnsMeasureStatus = "implementado" | "parcial" | "pendiente";

export interface EnsMeasure {
  code: string;
  title: string;
  status: EnsMeasureStatus;
  evidence: string;
}

export interface EnsPolicyLink {
  label: string;
  description: string;
  href: string;
}

export interface EnsRoadmapItem {
  phase: string;
  date: string;
  description: string;
}

export interface RiskRegisterItem {
  id: string;
  risk: string;
  probability: "BAJA" | "MEDIA" | "ALTA";
  impact: "MEDIO" | "ALTO" | "CRÍTICO";
  treatment: string;
  owner: string;
  due: string;
}

export const ensCategorizacion = [
  {
    dimension: "Disponibilidad",
    nivel: "BAJO",
    justificacion:
      "Un downtime de 24h supone impacto limitado sin servicio crítico 24/7.",
  },
  {
    dimension: "Integridad",
    nivel: "MEDIO",
    justificacion:
      "Datos alterados impactan la fiabilidad de resultados y decisiones del cliente.",
  },
  {
    dimension: "Confidencialidad",
    nivel: "MEDIO",
    justificacion:
      "Exposición de leads y resultados implica riesgo RGPD y reputacional.",
  },
  {
    dimension: "Trazabilidad",
    nivel: "MEDIO",
    justificacion:
      "Se requiere auditoría de accesos para cumplimiento ENS e ISO 27001.",
  },
  {
    dimension: "Autenticidad",
    nivel: "MEDIO",
    justificacion:
      "Suplantación de identidad afecta confianza y operaciones B2B.",
  },
];

export const soaTopMeasures: EnsMeasure[] = [
  {
    code: "org.1",
    title: "Política de seguridad",
    status: "implementado",
    evidence: "Plan de Seguridad ENS v1.0",
  },
  {
    code: "org.3",
    title: "Procedimientos de seguridad",
    status: "parcial",
    evidence: "12 procedimientos documentados",
  },
  {
    code: "org.4",
    title: "Proceso de autorización",
    status: "pendiente",
    evidence: "Procedimiento en preparación",
  },
  {
    code: "op.pl.1",
    title: "Análisis de riesgos",
    status: "implementado",
    evidence: "MAGERIT + matriz de riesgos",
  },
  {
    code: "op.acc.5",
    title: "MFA obligatorio",
    status: "implementado",
    evidence: "GitHub + Vercel + Resend",
  },
  {
    code: "op.acc.4",
    title: "Revisión periódica accesos",
    status: "parcial",
    evidence: "Procedimiento definido (trimestral)",
  },
  {
    code: "op.exp.8",
    title: "Registro de actividad",
    status: "parcial",
    evidence: "Logs Vercel + diseño audit log",
  },
  {
    code: "op.exp.9",
    title: "Registro de incidentes",
    status: "pendiente",
    evidence: "Tabla incident_log pendiente",
  },
  {
    code: "op.exp.10",
    title: "Protección de logs",
    status: "parcial",
    evidence: "Append-only + hash definido",
  },
  {
    code: "op.cont.2",
    title: "Plan de continuidad",
    status: "parcial",
    evidence: "DRP documentado, tests pendientes",
  },
  {
    code: "op.ext.3",
    title: "DPAs proveedores",
    status: "parcial",
    evidence: "Vercel/Resend firmados",
  },
  {
    code: "op.mon.1",
    title: "Detección intrusiones",
    status: "parcial",
    evidence: "WAF Vercel + rate limiting plan",
  },
  {
    code: "mp.si.2",
    title: "Criptografía",
    status: "implementado",
    evidence: "TLS 1.3 + AES-256 at-rest",
  },
  {
    code: "mp.info.2",
    title: "Clasificación info",
    status: "parcial",
    evidence: "PUBLIC/INTERNAL/CONFIDENTIAL en curso",
  },
  {
    code: "mp.eq.3",
    title: "Protección endpoints",
    status: "parcial",
    evidence: "FileVault activo, EDR pendiente",
  },
  {
    code: "mp.s.2",
    title: "Seguridad web",
    status: "implementado",
    evidence: "CSP + HSTS + XFO",
  },
  {
    code: "mp.info.7",
    title: "Backups",
    status: "implementado",
    evidence: "Backups diarios Vercel Postgres",
  },
  {
    code: "op.exp.5",
    title: "Gestión de cambios",
    status: "implementado",
    evidence: "PRs con review + rollback",
  },
  {
    code: "op.exp.6",
    title: "Protección malware",
    status: "parcial",
    evidence: "Dependabot + npm audit",
  },
  {
    code: "mp.info.9",
    title: "Gestión incidencias",
    status: "parcial",
    evidence: "Proceso definido, registro pendiente",
  },
];

export const ensPolicies: EnsPolicyLink[] = [
  {
    label: "Plan de Seguridad ENS (PDF)",
    description: "Plan completo, categorización y controles.",
    href: "/ens/plan-seguridad-ens.pdf",
  },
  {
    label: "Política de Seguridad ENS (PDF)",
    description: "Política pública resumida y objetivos.",
    href: "/ens/politica-seguridad-ens.pdf",
  },
  {
    label: "Statement of Applicability (PDF)",
    description: "75 medidas ENS con estado y evidencias.",
    href: "/ens/statement-applicability-ens.pdf",
  },
];

export const ensRoadmap: EnsRoadmapItem[] = [
  {
    phase: "Auditoría interna",
    date: "Marzo 2026",
    description: "Checklist 75 medidas + evidencias completas.",
  },
  {
    phase: "Auditoría externa",
    date: "Q2 2026",
    description: "BSI/AENOR, revisión documental y técnica.",
  },
  {
    phase: "Certificación ENS",
    date: "Julio 2026",
    description: "Obtención ENS Nivel MEDIO, validez 2 años.",
  },
];

export const ensScores = {
  gdpr: 65,
  iso27001: 42,
  ens: 68,
  nis2: 22,
};

export const ensSoaProgress = {
  start: 21,
  current: 75,
  total: 93,
};

export const riskRegister: RiskRegisterItem[] = [
  {
    id: "RR-01",
    risk: "Phishing a cuentas críticas (Vercel/GitHub)",
    probability: "ALTA",
    impact: "CRÍTICO",
    treatment: "MFA obligatorio + formación anti-phishing",
    owner: "CTO",
    due: "Mar 2026",
  },
  {
    id: "RR-02",
    risk: "Compromiso de base de datos",
    probability: "BAJA",
    impact: "CRÍTICO",
    treatment: "Cifrado + backups + incident response",
    owner: "CTO",
    due: "Mar 2026",
  },
  {
    id: "RR-03",
    risk: "Pérdida dominio defcon23.eu",
    probability: "BAJA",
    impact: "ALTO",
    treatment: "Domain lock + auto-renew + dominio backup",
    owner: "CEO",
    due: "Feb 2026",
  },
  {
    id: "RR-04",
    risk: "Ransomware en endpoint",
    probability: "MEDIA",
    impact: "ALTO",
    treatment: "EDR + FileVault + backups",
    owner: "CTO",
    due: "Mar 2026",
  },
  {
    id: "RR-05",
    risk: "DDoS sobre landing pública",
    probability: "MEDIA",
    impact: "MEDIO",
    treatment: "WAF Vercel + rate limiting",
    owner: "CTO",
    due: "Abr 2026",
  },
];
