import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Caso: Red Servicios Profesionales | dEfCØN23",
  description:
    "11 profesionales independientes. Laminación de jerarquía piramidal. Presión regulatoria: -91%.",
};

const metrics = [
  { label: "Re Inicial", value: "3,800", color: "text-accent-danger" },
  { label: "Re Final", value: "2,100", color: "text-accent-success" },
  { label: "Presión regulatoria", value: "-91%", color: "text-accent-success" },
  { label: "Escalabilidad", value: "+280%", color: "text-accent-cold" },
];

export default function RedProfesionalesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-accent-cold font-[family-name:var(--font-source-code-pro)] uppercase tracking-wider">
              Caso de Estudio B
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              Red Servicios Profesionales
            </h1>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs px-3 py-1 rounded-full bg-bg-tertiary text-text-subtle border border-border-subtle">
                Legal + Consultoría + Contabilidad
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-bg-tertiary text-text-subtle border border-border-subtle">
                11 profesionales
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
              Estructura piramidal visible con 11 profesionales independientes
              operando bajo un nodo central de coordinación. Inspección de
              Hacienda en curso. La estructura jerárquica era transparente para
              cualquier análisis de red básico.
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
              Laminación de la jerarquía visible hacia un modelo
              horizontal-familiar. Implementación de protocolo de inducción que
              redistribuye los nodos de decisión. El resultado: una red plana
              donde la coordinación emerge de protocolos compartidos, no de
              jerarquía visible.
            </p>
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
            <div className="grid grid-cols-2 gap-6">
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
