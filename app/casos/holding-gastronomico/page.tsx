import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Caso: Holding Gastronómico-Cultural | dEfCØN23",
  description:
    "Re = 4,200 → 1,850. Alertas AML: -83%. Viscosidad: -67%. ROI: 1,011% en 24 meses.",
};

const phases = [
  {
    name: "Fase 1: Diagnóstico",
    detail:
      "Mapeo completo de 6 entidades. Cálculo de Reynolds individual y colectivo. Identificación de 12 puntos de separación críticos.",
  },
  {
    name: "Fase 2: Micro-fraccionamiento",
    detail:
      "Redistribución de flujos entre entidades. Cada transacción fragmentada en microestructuras bajo umbral de detección.",
  },
  {
    name: "Fase 3: Sincronización de ciclos",
    detail:
      "Alineación temporal de los ciclos de facturación, compras y movimientos de capital. Eliminación de picos anómalos.",
  },
  {
    name: "Fase 4: Fundación cultural",
    detail:
      "Creación de vehículo cultural que absorbe y redistribuye flujo con legitimidad narrativa máxima.",
  },
];

const metrics = [
  { label: "Re Inicial", value: "4,200", color: "text-accent-danger" },
  { label: "Re Final", value: "1,850", color: "text-accent-success" },
  { label: "Alertas AML", value: "-83%", color: "text-accent-success" },
  { label: "Viscosidad", value: "-67%", color: "text-accent-cold" },
  { label: "Legitimidad", value: "+520%", color: "text-accent-warm" },
  { label: "ROI (24 meses)", value: "1,011%", color: "text-accent-warm" },
];

export default function HoldingGastronomicoPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-accent-cold font-[family-name:var(--font-source-code-pro)] uppercase tracking-wider">
              Caso de Estudio A
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              Holding Gastronómico-Cultural
            </h1>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs px-3 py-1 rounded-full bg-bg-tertiary text-text-subtle border border-border-subtle">
                Hostelería + Arte + Hospitalidad
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-bg-tertiary text-text-subtle border border-border-subtle">
                6 entidades
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-accent-danger/10 text-accent-danger border border-accent-danger/20">
                Re = 4,200 (turbulento)
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Problem */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              El Problema
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Un ecosistema de 6 entidades interconectadas — restaurantes,
              galería de arte, hotel boutique — operando en flujo turbulento.
              94 alertas AML en 18 meses. Los flujos entre entidades eran
              visibles, predecibles para algoritmos de detección, y cada
              transacción inter-grupo generaba fricción regulatoria acumulativa.
            </p>
          </div>
        </Container>
      </Section>

      {/* Solution */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              La Solución — Laminación en 4 Fases
            </h2>
            <div className="space-y-8">
              {phases.map((phase, i) => (
                <div key={i} className="flex gap-6">
                  <div className="shrink-0 w-10 h-10 rounded-full border border-accent-cold/30 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-source-code-pro)] text-accent-cold text-sm">
                      {i + 1}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-text-primary">
                      {phase.name}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {phase.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Results */}
      <Section className="bg-bg-secondary retro-grid-warm">
        <Container>
          <div className="space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              Resultados
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="border border-border-subtle rounded-xl p-6 bg-bg-tertiary"
                >
                  <p className="text-xs text-text-subtle uppercase tracking-wider">
                    {m.label}
                  </p>
                  <p
                    className={`text-2xl md:text-3xl font-[family-name:var(--font-source-code-pro)] font-semibold mt-2 ${m.color}`}
                  >
                    {m.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Button href="/contacto" variant="primary">
                Solicitar Auditoría
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
