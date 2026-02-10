import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Fase II: Structural Integrity & Compliance | dEfCØN23",
  description:
    "Auditoría completa + Hardening + Compliance Architecture. Zero Trust, NIS2, Legal Hardening. €1,000 incluye Fase I.",
};

const modules = [
  {
    id: "A",
    title: "Auditoría de Flujo Sistémico",
    description:
      "Calculamos tu Número de Reynolds organizacional. Identificamos puntos de separación (vórtices) donde se genera turbulencia detectable.",
    items: [
      "Re actual vs Re objetivo (< 2,300)",
      "Mapa de firma térmica",
      "Diseño de capas de absorción",
      "Análisis de puntos de separación",
    ],
  },
  {
    id: "B",
    title: "Hardening por Trabajo en Frío",
    description:
      "Laminación estructural en 7 pasadas. Eliminación de rugosidades (alertas AML, inspecciones). Temple final con legitimidad narrativa.",
    items: [
      "Micro-fraccionamiento transaccional",
      "Sincronización de ciclos",
      "Fundaciones culturales",
      "Protocolo de inducción hipnótica",
    ],
  },
  {
    id: "C",
    title: "Compliance Architecture (EU+ES)",
    description:
      "Arquitectura de 4 Capas (Layer 1: Protocol, Layer 2: Governance, Layer 3: Application, Layer 4: Social). Auto-reporte < 2h (DORA requiere 4h).",
    items: [
      "NIS2, DORA, AI Act, CRA, eIDAS 2.0 (EU)",
      "ENS, RGPD (España)",
      "Zero Trust fundacional",
      "Legal Hardening — protección jurídica de la estructura",
    ],
  },
];

const techBadges = ["Zero Trust", "Tax Compliance", "NIS2", "Legal Hardening"];

export default function Fase2Page() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section className="retro-grid">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-cold terminal-text px-3 py-1 border border-accent-cold/30 rounded">
                FASE II
              </span>
              <span className="text-xs text-text-subtle">10-15 días</span>
            </div>
            <h1 className="text-[2rem] md:text-[3rem] leading-[1.1] terminal-glow">
              Structural Integrity & Compliance
            </h1>
            <p className="text-lg text-text-subtle">
              (Laminar Flow)
              <span className="animate-[blink_1s_step-end_infinite] text-accent-warm ml-1">
                █
              </span>
            </p>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl md:text-3xl font-bold text-accent-cold terminal-text">
                €1,000
              </span>
              <span className="text-sm text-text-subtle">
                incluye Fase I
              </span>
            </div>
            <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
              Reducimos la inductancia (resistencia) legal y técnica.
              Alineamos la estructura societaria con requisitos de Hacienda
              y normativa europea NIS2/GDPR. Implementamos arquitectura
              Zero Trust para blindar el flujo de datos.
            </p>
            <Button href="/contacto?phase=2" variant="primary">
              Contratar Fase II
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
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-accent-cold terminal-text">
                  Módulo {mod.id}
                </span>
              </div>
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
              Tecnologías
            </h2>
            <div className="flex flex-wrap gap-3">
              {techBadges.map((b) => (
                <span
                  key={b}
                  className="text-sm px-4 py-2 rounded-lg border border-accent-cold/30 text-accent-cold bg-bg-tertiary"
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
              ¿Necesitas escalar?
            </h2>
            <p className="text-text-secondary">
              Fase III incluye todo lo de Fase I + II + CFD Vortex + EU Funds
              capture. Desde €3,000.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto?phase=2" variant="primary">
                Contratar Fase II
              </Button>
              <Button href="/servicios/fase-3" variant="secondary">
                Ver Fase III &rarr;
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
