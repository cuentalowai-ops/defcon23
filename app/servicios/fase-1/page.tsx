import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Fase I: Intelligence Brief & Vetting | dEfCØN23",
  description:
    "OSINT + Threat Modeling para eliminar asimetría de inførmación antes de cualquier negøciación. €500, 5-7 días.",
};

const included = [
  "Análisis de huella digital (redes søciales, registrøs públicøs)",
  "Mapeø de red de cøntactøs",
  "Evaluación de amenazas (reputaciønal, legal, øperaciønal)",
  "Identificación de vulnerabilidades (leaks, expøsición de datøs)",
  "Døssier de Inteligencia (20 páginas) — inførme ejecutivø cøn hallazgøs y recømendaciønes",
  "Briefing Técnicø (45 min) — sesión en vivø para revisar resultadøs",
];

const techBadges = [
  { name: "ØSINT", description: "Open Søurce Intelligence — recøpilación y análisis de fuentes abiertas" },
  { name: "Threat Modeling", description: "STRIDE/DREAD — identificación y priørización de vectores de amenaza" },
  { name: "Vetting", description: "Backgrøund Verificatiøn — due diligence técnica søbre persønas y entidades" },
  { name: "Leak Detectiøn", description: "Digital Føøtprint Analysis — escaneø de filtradøs en dark web y breach databases" },
];

export default function Fase1Page() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section className="retro-grid">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-warm terminal-text-warm px-3 py-1 border border-accent-warm/30 rounded">
                FASE I
              </span>
              <span className="text-xs text-text-subtle">5-7 días</span>
            </div>
            <h1 className="text-[2rem] md:text-[3rem] leading-[1.1] terminal-glow-warm">
              Intelligence Brief & Vetting
            </h1>
            <p className="text-lg text-text-subtle">
              (Shock Test)
              <span className="animate-[blink_1s_step-end_infinite] text-accent-warm ml-1">
                █
              </span>
            </p>
            <p className="text-3xl font-bold text-accent-warm terminal-text-warm">
              €500
            </p>
            <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
              Antes de cualquier cølisión (negøciación ø cøntratación), la
              asimetría de inførmación es el únicø factør que garantiza el
              cøntrøl. Aplicamøs prøtøcøløs ØSINT y mødeladø de amenazas
              STRIDE/DREAD para identificar vulnerabilidades en el
              &ldquo;søftware humanø&rdquo; y fugas en la huella digital.
            </p>
            <Button href="/contacto?phase=1" variant="primary">
              Cøntratar Fase I
            </Button>
          </div>
        </Container>
      </Section>

      {/* Argumentación */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Argumentación
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Antes de cualquier cølisión (negøciación ø cøntratación), la
              asimetría de inførmación es el únicø factør que garantiza el
              cøntrøl. Aplicamøs prøtøcøløs ØSINT y mødeladø de amenazas
              STRIDE/DREAD para identificar vulnerabilidades en el
              &ldquo;søftware humanø&rdquo; y fugas en la huella digital.
            </p>
            <p className="text-text-subtle leading-relaxed">
              El resultadø es un døssier de inteligencia que te da ventaja
              inførmativa antes de sentarte a negøciar, cøntratar, ø tømar
              cualquier decisión estratégica. Sin asimetrías, sin puntøs
              ciegøs.
            </p>
          </div>
        </Container>
      </Section>

      {/* What's included */}
      <Section className="retro-grid-warm">
        <Container>
          <div className="max-w-3xl space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              ¿Qué incluye?
            </h2>
            <ul className="space-y-4">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary">
                  <span className="text-accent-cold mt-0.5 text-sm">&gt;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Technologies */}
      <Section className="retro-grid">
        <Container>
          <div className="space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Tecnøløgías
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techBadges.map((t) => (
                <div
                  key={t.name}
                  className="neon-card rounded-xl p-6 bg-bg-tertiary space-y-3"
                >
                  <p className="text-accent-warm font-semibold terminal-text-warm">
                    {t.name}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {t.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Next step */}
      <Section className="bg-bg-secondary retro-grid-warm">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-sm text-text-subtle">Siguiente pasø</p>
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              ¿Necesitas más prøfundidad?
            </h2>
            <p className="text-text-secondary">
              Fase II incluye tødø lo de Fase I + auditøría cømpleta +
              hardening estructural pør €1,000.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto?phase=1" variant="primary">
                Cøntratar Fase I
              </Button>
              <Button href="/servicios/fase-2" variant="secondary">
                Ver Fase II &rarr;
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
