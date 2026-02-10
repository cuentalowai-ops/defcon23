import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "CFD Aplicado — Vortex Core | dEfCØN23",
  description:
    "Simulación de red transaccional, identificación del núcleo de poder, reconfiguración del flujo y monitorización continua.",
};

const capabilities = [
  {
    title: "Simulación de Red Transaccional",
    description:
      "Modelamos toda tu red de transacciones como un campo de flujo. Cada entidad es un nodo, cada transacción un vector. Visualizamos patrones que son invisibles en hojas de cálculo.",
  },
  {
    title: "Identificación del Núcleo de Poder",
    description:
      "El Vortex Core es el punto donde convergen las líneas de flujo de poder y decisión. Identificamos quién controla realmente el flujo — y si esa concentración es un riesgo.",
  },
  {
    title: "Reconfiguración del Flujo",
    description:
      "Redistribuimos los vectores de flujo para eliminar concentraciones peligrosas. El resultado: una red donde ningún nodo concentra más del 40% del flujo crítico.",
  },
  {
    title: "Dashboard de Monitorización",
    description:
      "Sistema de monitorización continua del Número de Reynolds organizativo. Alertas tempranas cuando se detectan tendencias turbulentas.",
  },
];

export default function CfdVortexPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded border border-accent-success/30 bg-accent-success/10 text-accent-success mb-6">
              <span className="text-accent-success">&#10003;</span>
              <Link href="/servicios/fase-3" className="hover:underline">
                Incluido en FASE III
              </Link>
            </div>
            <p className="text-sm text-accent-cold font-[family-name:var(--font-source-code-pro)] uppercase tracking-wider">
              Servicios / CFD Vortex
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              CFD Aplicado — Vortex Core
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Computational Fluid Dynamics aplicado a redes organizativas.
              Simulamos, visualizamos y reconfiguramos el flujo de poder,
              capital y decisiones.
            </p>
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <div className="space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              Capacidades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((cap) => (
                <Card
                  key={cap.title}
                  className="bg-bg-tertiary space-y-4"
                  hoverable={false}
                >
                  <h3 className="text-[1.25rem] leading-[1.3]">{cap.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {cap.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Investment */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="p-8 border border-border-subtle rounded-xl bg-bg-secondary space-y-4 text-center">
              <p className="text-xs text-text-subtle uppercase tracking-wider">
                Inversión
              </p>
              <p className="text-3xl font-[family-name:var(--font-source-code-pro)] text-accent-warm font-semibold">
                Desde €8,500
              </p>
              <p className="text-sm text-text-subtle">
                Incluye simulación completa + dashboard de monitorización 12
                meses
              </p>
              <Button href="/contacto?type=cfd" variant="primary">
                Solicitar CFD Vortex
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
