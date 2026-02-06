import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Caso: Plataforma Digital P2P | DEFCON 23",
  description:
    "12 países, 12,000 tx/mes. Re = 5,600 → 1,650. Alertas: -94%. Coste/tx: -68%.",
};

const metrics = [
  { label: "Re Inicial", value: "5,600", color: "text-accent-danger" },
  { label: "Re Final", value: "1,650", color: "text-accent-success" },
  { label: "Alertas AML", value: "-94%", color: "text-accent-success" },
  { label: "Coste/transacción", value: "-68%", color: "text-accent-cold" },
  { label: "Crecimiento", value: "+410%/año", color: "text-accent-warm" },
  { label: "Rutas optimizadas", value: "47 → 3", color: "text-accent-cold" },
];

export default function PlataformaP2PPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-accent-cold font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wider">
              Caso de Estudio C
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              Plataforma Digital P2P
            </h1>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs px-3 py-1 rounded-full bg-bg-tertiary text-text-subtle border border-border-subtle">
                Marketplace — 12,000 tx/mes
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-bg-tertiary text-text-subtle border border-border-subtle">
                12 países, multi-currency
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-accent-danger/10 text-accent-danger border border-accent-danger/20">
                Re = 5,600 (caos turbulento)
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Problem */}
      <Section className="bg-bg-secondary">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              El Problema
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Plataforma P2P operando en 12 países con múltiples divisas.
              12,000 transacciones mensuales fluyendo por 47 rutas diferentes.
              94 alertas AML en solo 6 meses. El flujo era completamente
              turbulento: cada transacción cross-border generaba señales
              detectables por múltiples jurisdicciones simultáneamente.
            </p>
          </div>
        </Container>
      </Section>

      {/* Solution */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              La Solución
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Tokenización del flujo mediante moneda interna de la plataforma.
              Aplicamos CFD a las 47 rutas transaccionales y las consolidamos
              en 3 rutas óptimas con mínima fricción regulatoria. El token
              interno actúa como capa de abstracción: las transacciones
              cross-border se convierten en movimientos internos de la
              plataforma.
            </p>
          </div>
        </Container>
      </Section>

      {/* Results */}
      <Section className="bg-bg-secondary">
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
                    className={`text-2xl md:text-3xl font-[family-name:var(--font-jetbrains-mono)] font-semibold mt-2 ${m.color}`}
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
