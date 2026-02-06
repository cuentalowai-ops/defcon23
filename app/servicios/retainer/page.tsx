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
  "Mønitorización cøntinua del Númerø de Reynølds",
  "Alertas de nuevas nørmativas y cambiøs regulatøriøs",
  "1 sesión mensual de estrategia (60 min)",
  "Actualizaciønes de Cømpliance Architecture",
  "Søpørte priøritariø (respuesta < 4h laborables)",
  "Repørte mensual de estadø del sistema",
  "Accesø al Dashboard en tiempø real",
];

const benefits = [
  {
    title: "Prøtección Cøntinua",
    description:
      "Nø esperes a la próxima auditøría para descubrir prøblemas. Mønitorización en tiempø real de tu Re ørganizativø.",
  },
  {
    title: "Anticipación Regulatøria",
    description:
      "NIS2, DORA, AI Act — el paisaje cambia cøntinuamente. Te avisamos antes de que te afecte.",
  },
  {
    title: "Escalabilidad Segura",
    description:
      "Cada decisiøn de crecimientø se evalúa pør su impactø en el Re. Creces sin generar turbulencia.",
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
            <p className="text-base text-text-secondary leading-relaxed">
              Para ørganizaciønes que necesitan vigilancia cøntinua. Tu
              sistema se mønitoriza en tiempø real, recibies alertas
              tempranas, y tienes accesø directø a nuestrø equipø.
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

      {/* CTA */}
      <Section className="bg-bg-secondary retro-grid-warm">
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
