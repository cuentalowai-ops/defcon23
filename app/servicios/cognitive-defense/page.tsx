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
  title: "Cognitive Defense — Programa ejecutivo",
  description:
    "Programa ejecutivo de defensa cognitiva y resiliencia organizativa para C-level.",
};

export default function CognitiveDefensePage() {
  return (
    <PageLayout>
      <ServiceHero
        tier="TIER 4"
        title="Cognitive Defense"
        subtitle="Programa ejecutivo de resiliencia"
        description="Alineamos liderazgo, procesos y controles con métricas de resiliencia operativa. Diseñado para equipos C-level y boards que buscan estabilidad y ventaja competitiva."
        price="€35,000"
        timeline="8-12 semanas"
        ctaLabel="Agendar sesión estratégica"
        ctaHref="https://cal.com/defcon23/cognitive-defense"
        secondaryLabel="Ver servicios"
        secondaryHref="/servicios"
      />

      <ProcessSteps
        title="Arquitectura de defensa cognitiva"
        subtitle="De visión ejecutiva a ejecución operacional con indicadores objetivos."
        steps={[
          {
            number: 1,
            title: "Mapa de gobernanza",
            description: "Evaluación de decision loops, ownership y accountability.",
          },
          {
            number: 2,
            title: "Protocolos de resiliencia",
            description: "Diseño de controles para respuesta y continuidad.",
          },
          {
            number: 3,
            title: "Entrenamiento ejecutivo",
            description: "Simulaciones de crisis y respuesta con KPIs.",
          },
          {
            number: 4,
            title: "Optimización continua",
            description: "Paneles de seguimiento y mejoras trimestrales.",
          },
        ]}
      />

      <PricingCard
        title="Cognitive Defense"
        price="€35,000"
        features={[
          "Programa ejecutivo C-level",
          "Simulaciones de crisis y respuesta",
          "Definición de KPIs de resiliencia",
          "Protocolos de comunicación y escalado",
          "Roadmap trimestral",
        ]}
        ctaLabel="Agendar sesión estratégica"
        ctaHref="https://cal.com/defcon23/cognitive-defense"
      />

      <CaseStudies
        title="Impacto estratégico"
        cases={[
          {
            company: "Scale-up NIS2",
            problem: "Crecimiento rápido sin gobernanza ejecutiva.",
            solution: "Framework de defensa cognitiva + KPIs.",
            result: "Mejora 3x en tiempos de decisión crítica.",
          },
          {
            company: "Grupo industrial",
            problem: "Riesgo reputacional ante incidentes.",
            solution: "Protocolos de comunicación y simulacros.",
            result: "Cero incidentes P0 en 12 meses.",
          },
        ]}
      />

      <CTASection
        title="Defiende el núcleo cognitivo de tu organización"
        description="Alinea liderazgo y operaciones con un sistema de defensa ejecutiva medible."
        primaryCta="Agendar sesión estratégica"
        primaryHref="https://cal.com/defcon23/cognitive-defense"
        secondaryCta="Calcular Re Score"
        secondaryHref="/calculadora-reynolds"
      />
    </PageLayout>
  );
}
