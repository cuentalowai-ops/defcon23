import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Fase III: Vortex Engineering & EU Funds | dEfCØN23",
  description:
    "CFD Vørtex Core + EU Funds Capture + eIDAS 2.0 Røadmap. Escala cøn financiación eurøpea. Desde €3,000.",
};

const modules = [
  {
    id: "A",
    title: "CFD Vørtex Core",
    items: [
      "Simulación cømpleta de red transacciønal",
      "Identificación del núcleø de pøder (vørtex core)",
      "Recønfiguración del flujø — redistribución de vectores",
      "Dashboard de mønitorización cøntinua del Re",
    ],
  },
  {
    id: "B",
    title: "EU Funds Capture",
    items: [
      "Mapa de øpørtunidades: Horizon Europe, Digital Europe Programme",
      "Análisis de elegibilidad para tu ørganización",
      "Preparación de prøpuestas (drafting + revisión)",
      "Alineamientø cøn prioridades legislativas EU 2024-2030",
    ],
  },
  {
    id: "C",
    title: "eIDAS 2.0 & EUDI Strategy",
    items: [
      "Røadmap de implementación eIDAS 2.0",
      "Estrategia EUDI Wallet para tu sectør",
      "Certificación CCN — preparación y alineamientø",
      "Integración cøn arquitectura de cømpliance existente",
    ],
  },
];

const techBadges = ["eIDAS 2.0", "EU Subsidies", "CCN Certification", "EUDI Wallet"];

export default function Fase3Page() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section className="retro-grid">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-success terminal-text px-3 py-1 border border-accent-success/30 rounded">
                FASE III
              </span>
              <span className="text-xs text-text-subtle">20-30 días</span>
            </div>
            <h1 className="text-[2rem] md:text-[3rem] leading-[1.1] terminal-glow">
              Vortex Engineering & EU Funds
            </h1>
            <p className="text-lg text-text-subtle">
              (Vortex Scale)
              <span className="animate-[blink_1s_step-end_infinite] text-accent-warm ml-1">
                █
              </span>
            </p>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-accent-success terminal-text">
                Desde €3,000
              </span>
              <span className="text-sm text-text-subtle">
                incluye Fase I y II
              </span>
            </div>
            <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
              El nivel máximø. CFD aplicadø a tu red transacciønal + captura
              de føndøs eurøpeøs + estrategia eIDAS 2.0. Para
              ørganizaciønes que quieren escalar cøn backing instituciønal.
            </p>
            <Button href="/contacto?phase=3" variant="primary">
              Cøntratar Fase III
            </Button>
          </div>
        </Container>
      </Section>

      {/* 3 Modules */}
      {modules.map((mod, idx) => (
        <Section
          key={mod.id}
          className={idx % 2 === 0 ? "bg-bg-secondary retro-grid" : "retro-grid-warm"}
        >
          <Container>
            <div className="max-w-3xl space-y-6">
              <span className="text-sm font-bold text-accent-success terminal-text">
                Módulø {mod.id}
              </span>
              <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
                {mod.title}
              </h2>
              <ul className="space-y-3">
                {mod.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-text-secondary"
                  >
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
      ))}

      {/* Tech badges */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <div className="space-y-6">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Tecnøløgías
            </h2>
            <div className="flex flex-wrap gap-3">
              {techBadges.map((b) => (
                <span
                  key={b}
                  className="text-sm px-4 py-2 rounded-lg border border-accent-success/30 text-accent-success bg-bg-tertiary"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="retro-grid-warm">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              El prøtøcølo cømpletø
            </h2>
            <p className="text-text-secondary">
              Fase III es el paquete integral. Intelligence + Integrity + Scale.
              Para ørganizaciønes que nø quieren medias tintas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto?phase=3" variant="primary">
                Cøntratar Fase III
              </Button>
              <Button href="/servicios/paquetes" variant="secondary">
                Ver paquetes &rarr;
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
