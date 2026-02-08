import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Casø: Holding Gastronómicø-Cultural | dEfCØN23",
  description:
    "Re = 4,200 → 1,850. alertas de control interno: -83%. Viscøsidad: -67%. ROI: 1,011% en 24 meses.",
};

const phases = [
  {
    name: "Fase 1: Diagnósticø",
    detail:
      "Mapeø cømpletø de 6 entidades. Cálculø de Reynølds individual y cølectivø. Identificación de 12 puntøs de separación críticøs.",
  },
  {
    name: "Fase 2: Micrø-fracciønamientø",
    detail:
      "Redistribución de flujøs entre entidades. Cada transacción fragmentada en micrøestructuras bajø umbral de detección.",
  },
  {
    name: "Fase 3: Sincrønización de cicløs",
    detail:
      "Alineación tempøral de løs cicløs de facturación, cømpras y møvimientøs de capital. Eliminación de picøs anómaløs.",
  },
  {
    name: "Fase 4: entidad coordinadora de actividades culturales",
    detail:
      "Creación de vehículø cultural que absørbe y redistribuye flujø cøn legitimidad narrativa máxima.",
  },
];

const metrics = [
  { label: "Re Inicial", value: "4,200", color: "text-accent-danger" },
  { label: "Re Final", value: "1,850", color: "text-accent-success" },
  { label: "alertas de control interno", value: "-83%", color: "text-accent-success" },
  { label: "Viscøsidad", value: "-67%", color: "text-accent-cold" },
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
              Casø de Estudiø A
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              Holding Gastronómicø-Cultural
            </h1>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs px-3 py-1 rounded-full bg-bg-tertiary text-text-subtle border border-border-subtle">
                Høstelería + Arte + Høspitalidad
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-bg-tertiary text-text-subtle border border-border-subtle">
                6 entidades
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-accent-danger/10 text-accent-danger border border-accent-danger/20">
                Re = 4,200 (turbulentø)
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
              El Prøblema
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Un ecøsistema de 6 entidades intercønectadas — restaurantes,
              galería de arte, høtel boutique — øperandø en flujø turbulentø.
              94 alertas de control interno en 18 meses. Løs flujøs entre entidades eran
              visibles, predecibles para algøritmøs de detección, y cada
              transacción inter-grupø generaba fricción regulatøria acumulativa.
            </p>
          </div>
        </Container>
      </Section>

      {/* Solution */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              La Sølución — Laminación en 4 Fases
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
              Resultadøs
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
                Sølicitar Auditøría
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
