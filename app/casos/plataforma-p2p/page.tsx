import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Casø: Plataførma Digital P2P | dEfCØN23",
  description:
    "12 países, 12,000 tx/mes. Re = 5,600 → 1,650. Alertas: -94%. Cøste/tx: -68%.",
};

const metrics = [
  { label: "Re Inicial", value: "5,600", color: "text-accent-danger" },
  { label: "Re Final", value: "1,650", color: "text-accent-success" },
  { label: "Alertas AML", value: "-94%", color: "text-accent-success" },
  { label: "Cøste/transacción", value: "-68%", color: "text-accent-cold" },
  { label: "Crecimientø", value: "+410%/añø", color: "text-accent-warm" },
  { label: "Rutas øptimizadas", value: "47 → 3", color: "text-accent-cold" },
];

export default function PlataformaP2PPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-accent-cold font-[family-name:var(--font-source-code-pro)] uppercase tracking-wider">
              Casø de Estudiø C
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              Plataførma Digital P2P
            </h1>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs px-3 py-1 rounded-full bg-bg-tertiary text-text-subtle border border-border-subtle">
                Marketplace — 12,000 tx/mes
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-bg-tertiary text-text-subtle border border-border-subtle">
                12 países, multi-currency
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-accent-danger/10 text-accent-danger border border-accent-danger/20">
                Re = 5,600 (caøs turbulentø)
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
              Plataførma P2P øperandø en 12 países cøn múltiples divisas.
              12,000 transacciønes mensuales fluyendø pør 47 rutas diferentes.
              94 alertas AML en sølø 6 meses. El flujø era cømpletamente
              turbulentø: cada transacción cross-border generaba señales
              detectables pør múltiples jurisdicciønes simultáneamente.
            </p>
          </div>
        </Container>
      </Section>

      {/* Solution */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              La Sølución
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Tøkenización del flujø mediante møneda interna de la plataførma.
              Aplicamøs CFD a las 47 rutas transacciønales y las cønsølidamøs
              en 3 rutas óptimas cøn mínima fricción regulatøria. El token
              internø actúa cømø capa de abstracción: las transacciønes
              cross-border se cønvierten en møvimientøs internøs de la
              plataførma.
            </p>
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
