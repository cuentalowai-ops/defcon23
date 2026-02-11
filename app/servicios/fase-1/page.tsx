import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Fase I: Intelligence Brief & Vetting | dEfCØN23",
  description:
    "OSINT + Threat Modeling para eliminar asimetría de información antes de cualquier negociación. €500, 5-7 días.",
};

const included = [
  "Análisis de huella digital (redes sociales, registros públicos)",
  "Mapeo de red de contactos",
  "Evaluación de amenazas (reputacional, legal, operacional)",
  "Identificación de vulnerabilidades (leaks, exposición de datos)",
  "Dossier de Inteligencia (20 páginas) — informe ejecutivo con hallazgos y recomendaciones",
  "Briefing Técnico (45 min) — sesión en vivo para revisar resultados",
];

const techBadges = [
  { name: "OSINT", description: "Open Source Intelligence — recopilación y análisis de fuentes abiertas" },
  { name: "Threat Modeling", description: "STRIDE/DREAD — identificación y priorización de vectores de amenaza" },
  { name: "Vetting", description: "Background Verification — due diligence técnica sobre personas y entidades" },
  { name: "Leak Detection", description: "Digital Footprint Analysis — escaneo de filtrados en dark web y breach databases" },
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
            <p className="text-2xl md:text-3xl font-bold text-accent-warm terminal-text-warm">
              €500
            </p>
            <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
              Antes de cualquier colisión (negociación o contratación), la
              asimetría de información es el único factor que garantiza el
              control. Aplicamos protocolos OSINT y modelado de amenazas
              STRIDE/DREAD para identificar vulnerabilidades en el
              &ldquo;software humano&rdquo; y fugas en la huella digital.
            </p>
            <Button href="/contacto?phase=1" variant="primary">
              Contratar Fase I
            </Button>
          </div>
        </Container>
      </Section>

      {/* Argumentación */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
              Argumentación
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Antes de cualquier colisión (negociación o contratación), la
              asimetría de información es el único factor que garantiza el
              control. Aplicamos protocolos OSINT y modelado de amenazas
              STRIDE/DREAD para identificar vulnerabilidades en el
              &ldquo;software humano&rdquo; y fugas en la huella digital.
            </p>
            <p className="text-text-subtle leading-relaxed">
              El resultado es un dossier de inteligencia que te da ventaja
              informativa antes de sentarte a negociar, contratar, o tomar
              cualquier decisión estratégica. Sin asimetrías, sin puntos
              ciegos.
            </p>
          </div>
        </Container>
      </Section>

      {/* What's included */}
      <Section className="retro-grid-warm">
        <Container>
          <div className="max-w-3xl space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
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
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
              Tecnologías
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techBadges.map((t) => (
                <div
                  key={t.name}
                  className="neon-card rounded-2xl p-6 bg-bg-tertiary space-y-3"
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
            <p className="text-sm text-text-subtle">Siguiente paso</p>
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
              ¿Necesitas más profundidad?
            </h2>
            <p className="text-text-secondary">
              Fase II incluye todo lo de Fase I + auditoría completa +
              hardening estructural por €1,000.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto?phase=1" variant="primary">
                Contratar Fase I
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
