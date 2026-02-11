import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Retainer | dEfCØN23",
  description:
    "€1,500/mes. Monitorización continua, alertas normativas, sesión mensual, soporte prioritario. Mínimo 6 meses.",
};

const included = [
  "Monitorización continua de Re (updates semanales)",
  "Alertas de nuevas normativas (EU + España)",
  "1 sesión estratégica mensual (60 min)",
  "Actualizaciones de Compliance Architecture",
  "Soporte técnico prioritario (respuesta < 2h)",
  "Reporte mensual de estado del sistema",
  "Acceso al Dashboard en tiempo real",
];

const benefits = [
  {
    title: "Prevención Proactiva",
    description:
      "Detectamos problemas antes de que se conviertan en crisis. Monitorización en tiempo real de tu Re organizativo.",
  },
  {
    title: "Cost-Effective",
    description:
      "Menor coste que contratar soluciones puntuales cuando surge el problema. NIS2, DORA, AI Act — el paisaje cambia continuamente.",
  },
  {
    title: "Paz Mental",
    description:
      "Tu Re está siempre bajo control, no tomas decisiones ciegas. Cada decisión de crecimiento se evalúa por su impacto.",
  },
];

export default function RetainerPage() {
  return (
    <PageLayout>
      <Section className="retro-grid">
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-accent-cold uppercase tracking-wider terminal-text">
              Retainer
            </p>
            <h1 className="text-[2rem] md:text-[3rem] leading-[1.1] terminal-glow-warm">
              Modelo Retainer
            </h1>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-accent-warm terminal-text-warm">
                €1,500/mes
              </span>
            </div>
            <p className="text-sm text-text-subtle">
              Mínimo 6 meses · Sin permanencia tras el período inicial
            </p>
            <h2 className="text-[1.1rem] md:text-[1.5rem] leading-[1.3] text-text-secondary">
              Vigilancia Continua
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              Monitorización continua de tu Número de Reynolds. Mantén tu
              organización en flujo laminar de forma permanente.
            </p>
            <Button href="/contacto?service=retainer" variant="primary">
              Contratar Retainer
            </Button>
          </div>
        </Container>
      </Section>

      {/* What's included */}
      <Section className="bg-bg-secondary retro-grid-warm">
        <Container>
          <div className="max-w-3xl space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
              ¿Qué incluye?
            </h2>
            <ul className="space-y-4">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary">
                  <span className="text-accent-success mt-0.5 text-xs">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="retro-grid">
        <Container>
          <div className="space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
              Beneficios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="neon-card rounded-2xl p-6 bg-bg-tertiary space-y-3"
                >
                  <h3 className="text-base font-semibold text-accent-cold terminal-text">
                    {b.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Ideal for */}
      <Section className="bg-bg-secondary retro-grid-warm">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
              Ideal para
            </h2>
            <ul className="space-y-3">
              {[
                "Holdings multi-nodo que necesitan estabilidad continua",
                "Empresas suјetas a NIS2/DORA con obligación de reporte",
                "Organizaciones en crecimiento rápido (Re aumenta con la escala)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary">
                  <span className="text-accent-cold mt-0.5 text-sm">&gt;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="retro-grid">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
              Protección 24/7
            </h2>
            <p className="text-text-secondary">
              Tu Reynolds no duerme. Nosotros tampoco.
            </p>
            <Button href="/contacto?service=retainer" variant="primary">
              Contratar Retainer
            </Button>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
