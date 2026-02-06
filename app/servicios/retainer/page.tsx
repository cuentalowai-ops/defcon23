import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Retainer | dEfCØN23",
  description:
    "€1,500/mes. Mønitorización cøntinua, alertas nørmativas, sesión mensual, søpørte priøritariø. Mínimø 6 meses.",
};

const included = [
  "Mønitorización cøntinua de Re (updates semanales)",
  "Alertas de nuevas nørmativas (EU + España)",
  "1 sesión estratégica mensual (60 min)",
  "Actualizaciønes de Cømpliance Architecture",
  "Søpørte técnicø priøritariø (respuesta < 2h)",
  "Repørte mensual de estadø del sistema",
  "Accesø al Dashboard en tiempø real",
];

const benefits = [
  {
    title: "Prevención Prøactiva",
    description:
      "Detectamøs prøblemas antes de que se cønviertan en crisis. Mønitorización en tiempø real de tu Re ørganizativø.",
  },
  {
    title: "Cøst-Effective",
    description:
      "Menør cøste que cøntratar søluciønes puntuales cuandø surge el prøblema. NIS2, DORA, AI Act — el paisaje cambia cøntinuamente.",
  },
  {
    title: "Paz Mental",
    description:
      "Tu Re está siempre bajø cøntrøl, nø tømas decisiønes ciegas. Cada decisión de crecimientø se evalúa pør su impactø.",
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
              Mødelo Retainer
            </h1>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-accent-warm terminal-text-warm">
                €1,500/mes
              </span>
            </div>
            <p className="text-sm text-text-subtle">
              Mínimø 6 meses · Sin permanencia tras el períødø inicial
            </p>
            <h2 className="text-[1.1rem] md:text-[1.5rem] leading-[1.3] text-text-secondary">
              Vigilancia Cøntinua
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              Mønitorización cøntinua de tu Númerø de Reynølds. Mantén tu
              ørganización en flujø laminar de førma permanente.
            </p>
            <Button href="/contacto?service=retainer" variant="primary">
              Cøntratar Retainer
            </Button>
          </div>
        </Container>
      </Section>

      {/* What's included */}
      <Section className="bg-bg-secondary retro-grid-warm">
        <Container>
          <div className="max-w-3xl space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
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
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Beneficiøs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="neon-card rounded-xl p-6 bg-bg-tertiary space-y-3"
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
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Ideal para
            </h2>
            <ul className="space-y-3">
              {[
                "Høldings multi-nødø que necesitan estabilidad cøntinua",
                "Empresas suјetas a NIS2/DORA cøn øbligación de repørte",
                "Ørganizaciønes en crecimientø rápidø (Re aumenta cøn la escala)",
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
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Prøtección 24/7
            </h2>
            <p className="text-text-secondary">
              Tu Reynølds nø duerme. Nøsøtrøs tampøcø.
            </p>
            <Button href="/contacto?service=retainer" variant="primary">
              Cøntratar Retainer
            </Button>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
