import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import {
  ServiceHero,
  ProcessSteps,
  PricingCard,
  CaseStudies,
  CTASection,
} from "@/components/services";

export const metadata: Metadata = {
  title: "Hardening Estructural — Programa 6-8 semanas",
  description:
    "Programa de hardening integral para reducir turbulencia y asegurar continuidad operativa.",
};

export default function HardeningEstructuralPage() {
  return (
    <PageLayout>
      <ServiceHero
        tier="TIER 3"
        title="Hardening Estructural"
        subtitle="Programa de 6-8 semanas"
        description="Implementación de controles técnicos y organizativos para reducir riesgo sistémico, mejorar resiliencia y habilitar compliance real."        
        price="€18,000"
        timeline="6-8 semanas"
        ctaLabel="Agendar evaluación"
        ctaHref="https://cal.com/defcon23/hardening-estructural"
        secondaryLabel="Ver servicios"
        secondaryHref="/servicios"
      />

      <ProcessSteps
        title="Fases de hardening"
        subtitle="Ejecución guiada y medible con indicadores de reducción de riesgo."
        steps={[
          {
            number: 1,
            title: "Baseline + quick wins",
            description: "Cierre de brechas inmediatas: MFA, backups, logging.",
          },
          {
            number: 2,
            title: "Arquitectura segura",
            description: "Segmentación, control de accesos y hardening de endpoints.",
          },
          {
            number: 3,
            title: "Compliance operativo",
            description: "Procedimientos, evidencia y auditoría interna.",
          },
          {
            number: 4,
            title: "Validación y métricas",
            description: "KPIs, testing y roadmap de mejora continua.",
          },
        ]}
      />

      <PricingCard
        title="Hardening Estructural"
        price="€18,000"
        features={[
          "Plan de hardening 360º",
          "Implementación de controles técnicos",
          "Procedimientos ENS/ISO operativos",
          "Audit logging + continuidad",
          "KPI dashboard + capacitación",
        ]}
        ctaLabel="Agendar evaluación"
        ctaHref="https://cal.com/defcon23/hardening-estructural"
      />

      <CaseStudies
        title="Resultados en 60 días"
        cases={[
          {
            company: "Grupo retail (multi-sede)",
            problem: "Incidentes recurrentes y sin trazabilidad.",
            solution: "Hardening + logging + procesos de incidentes.",
            result: "-70% incidentes en 8 semanas.",
          },
          {
            company: "SaaS healthtech",
            problem: "Auditoría ENS bloqueada por falta de evidencias.",
            solution: "Implementación de controles + evidencias auditables.",
            result: "Aprobación ENS Nivel MEDIO.",
          },
        ]}
      />

      <CTASection
        title="Reduce turbulencia. Asegura continuidad."
        description="Hardening estructural diseñado para pasar auditorías y operar con resiliencia real."
        primaryCta="Agendar evaluación"
        primaryHref="https://cal.com/defcon23/hardening-estructural"
        secondaryCta="Calcular Re Score"
        secondaryHref="/calculadora-reynolds"
      />
    </PageLayout>
  );
}
