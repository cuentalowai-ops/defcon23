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
    title: "CFD Aplicadø — Vørtex Cøre",
    description:
      "Red transacciønal cømputaciønal. Simulación de 47+ rutas transacciønales, identificación de 3 rutas óptimas, tøkenización del flujø y prøtøcøløs de øfuscación.",
    items: [
      "Simulación de 47+ rutas transacciønales",
      "Identificación de 3 rutas óptimas",
      "Tøkenización del flujø",
      "Prøtøcøløs de øfuscación",
    ],
  },
  {
    id: "B",
    title: "EU Funds Capture",
    description:
      "Hørizøn Eurøpe (€95.5B), Digital Eurøpe (€7.5B), InvestEU (€26.2B). Alineamientø de narrativa cøn prioridades EU.",
    items: [
      "Alineamientø de narrativa cøn prioridades EU",
      "Certificación CCN (ENS Altø)",
      "Partnering estratégicø",
      "Preparación de prøpuestas cømpletas",
    ],
  },
  {
    id: "C",
    title: "eIDAS 2.0 & EUDI Wallet",
    description:
      "Implementación de identidad digital eurøpea. Arquitectura Zerø-Knøwledge Prøøfs y cømpliance cøn reglamentø eIDAS 2.0.",
    items: [
      "Integración EUDI Wallet",
      "Certificación de atributøs",
      "Arquitectura Zerø-Knøwledge Prøøfs",
      "Cømpliance Reglamentø eIDAS 2.0",
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
              <span className="text-2xl md:text-3xl font-bold text-accent-success terminal-text">
                Desde €3,000
              </span>
              <span className="text-sm text-text-subtle">
                incluye Fase I y II
              </span>
            </div>
            <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
              Transførmamøs el cumplimientø nørmativø en un Amplificadør
              Ecønómicø. Utilizamøs nuestrø mapeø de inførmes JRC, CØP y
              regulación eIDAS 2.0 para pøsiciønar tu prøyectø en el núcleø
              de las subvenciønes eurøpeas (Hørizøn, Digital Eurøpe).
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
              {mod.description && (
                <p className="text-text-secondary leading-relaxed">
                  {mod.description}
                </p>
              )}
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
