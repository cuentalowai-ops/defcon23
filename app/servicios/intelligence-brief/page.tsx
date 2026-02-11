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
  title: "Intelligence Brief — Diagnóstico 48h",
  description:
    "Informe ejecutivo en 48 horas con las 3 fugas críticas de tu sistema. Desde €500.",
};

export default function IntelligenceBriefPage() {
  return (
    <PageLayout>
      <ServiceHero
        tier="TIER 1"
        title="Intelligence Brief"
        subtitle="Diagnóstico de 48 horas"
        description="Informe ejecutivo de 5 páginas que identifica las 3 fugas críticas de tu sistema con base en el Reynolds Score. En 48 horas tendrás claridad accionable."
        price="€500"
        timeline="48 horas"
        ctaLabel="Contratar Intelligence Brief"
        ctaHref="https://cal.com/defcon23/intelligence-brief"
        secondaryLabel="Calcular Re Score"
        secondaryHref="/calculadora-reynolds"
      />

      <ProcessSteps
        title="Proceso operativo"
        subtitle="Método de diagnóstico en 4 pasos sin fricción para el equipo directivo."
        steps={[
          {
            number: 1,
            title: "Cuestionario Reynolds",
            description: "10 preguntas para mapear turbulencia organizativa.",
          },
          {
            number: 2,
            title: "OSINT de superficie",
            description: "Análisis de exposición pública y señales regulatorias.",
          },
          {
            number: 3,
            title: "Re Score + riesgo",
            description: "Cálculo cuantitativo con umbrales operativos.",
          },
          {
            number: 4,
            title: "Informe ejecutivo",
            description: "Resumen de 3 fugas críticas + priorización inmediata.",
          },
        ]}
      />

      <PricingCard
        title="Intelligence Brief"
        price="€500"
        features={[
          "Re Score numérico y risk level",
          "3 fugas críticas priorizadas",
          "Cuantificación de pérdidas estimadas",
          "Informe ejecutivo (5 páginas)",
          "Entrega en 48 horas",
        ]}
        ctaLabel="Contratar ahora"
        ctaHref="https://cal.com/defcon23/intelligence-brief"
      />

      <CaseStudies
        title="Casos de impacto"
        cases={[
          {
            company: "Grupo Automotive",
            problem: "€4M facturación con cash flow impredecible.",
            solution: "Re Score 3,800 → detectadas 3 fugas en cobros.",
            result: "€80K/año en fugas selladas en 60 días.",
          },
          {
            company: "SaaS B2B (Series A)",
            problem: "Escalado rápido sin gobierno de accesos.",
            solution: "Transición a flujo estable con controles mínimos.",
            result: "Reducción 40% en incidentes operativos.",
          },
        ]}
      />

      <CTASection
        title="¿Listo para conocer tu Re Score?"
        description="En 48 horas tendrás claridad total sobre las fugas de tu sistema y un plan de acción ejecutable."
        primaryCta="Contratar Intelligence Brief"
        primaryHref="https://cal.com/defcon23/intelligence-brief"
        secondaryCta="Calcular Re Score Gratis"
        secondaryHref="/calculadora-reynolds"
      />
    </PageLayout>
  );
}
