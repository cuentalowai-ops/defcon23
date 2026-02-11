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
  title: "Structural Integrity — Auditoría integral",
  description:
    "Auditoría estructural de 3-4 semanas para estabilizar tu sistema operativo y regulatorio.",
};

export default function StructuralIntegrityPage() {
  return (
    <PageLayout>
      <ServiceHero
        tier="TIER 2"
        title="Structural Integrity"
        subtitle="Auditoría integral de 3-4 semanas"
        description="Mapa completo de riesgos, dependencias críticas y puntos de colapso. Diseñado para dirección general y compliance officers."
        price="€8,000"
        timeline="3-4 semanas"
        ctaLabel="Solicitar propuesta"
        ctaHref="https://cal.com/defcon23/structural-integrity"
        secondaryLabel="Ver servicios"
        secondaryHref="/servicios"
      />

      <ProcessSteps
        title="Metodología de análisis"
        subtitle="De diagnóstico a plan estructural de mitigación con evidencia trazable."
        steps={[
          {
            number: 1,
            title: "Discovery + entrevistas",
            description: "Mapa de procesos, sistemas y dependencias críticas.",
          },
          {
            number: 2,
            title: "Análisis de riesgo",
            description: "Evaluación de impacto operacional y regulatorio.",
          },
          {
            number: 3,
            title: "Arquitectura de mitigación",
            description: "Controles técnicos y organizativos priorizados.",
          },
          {
            number: 4,
            title: "Informe y roadmap",
            description: "Plan de ejecución con KPIs, costes y tiempos.",
          },
        ]}
      />

      <PricingCard
        title="Structural Integrity"
        price="€8,000"
        features={[
          "Mapa de riesgos crítico + recomendaciones",
          "Inventario de activos y dependencias",
          "Plan de mitigación 90 días",
          "Alineación con ISO 27001 / ENS",
          "Sesión ejecutiva de cierre",
        ]}
        ctaLabel="Solicitar propuesta"
        ctaHref="https://cal.com/defcon23/structural-integrity"
      />

      <CaseStudies
        title="Resultados reales"
        cases={[
          {
            company: "Holding industrial",
            problem: "Riesgo NIS2 no cuantificado en 6 filiales.",
            solution: "Auditoría integral + plan de mitigación por fases.",
            result: "Reducción 55% del riesgo operativo en 90 días.",
          },
          {
            company: "Fintech regulada",
            problem: "Trazabilidad y logging insuficientes.",
            solution: "Rediseño de controles + KPIs de cumplimiento.",
            result: "Auditoría externa superada sin NC mayores.",
          },
        ]}
      />

      <CTASection
        title="Estabiliza tu sistema antes de escalar"
        description="El análisis estructural permite decisiones rápidas y evidencia de cumplimiento frente a reguladores y clientes enterprise."
        primaryCta="Solicitar propuesta"
        primaryHref="https://cal.com/defcon23/structural-integrity"
        secondaryCta="Calcular Re Score"
        secondaryHref="/calculadora-reynolds"
      />
    </PageLayout>
  );
}
