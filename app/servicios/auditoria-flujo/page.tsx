import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Auditoría de Flujo Sistémico | dEfCØN23",
  description:
    "Calculamos tu Número de Reynolds. Análisis de puntos de separación, mapeo de firma térmica y diseño de capas de absorción.",
};

const modules = [
  {
    title: "Módulo 1: Puntos de Separación",
    description:
      "Identificamos dónde el flujo organizativo se separa del boundary layer. Estos son los puntos donde se genera turbulencia detectable — alertas AML, inspecciones fiscales, señales anómalas.",
    deliverable: "Mapa de separación con priorización de riesgo",
  },
  {
    title: "Módulo 2: Firma Térmica",
    description:
      "Cada organización emite una firma térmica — patrones de transacción, flujos de capital, relaciones entre nodos. Mapeamos tu firma actual y diseñamos el perfil térmico objetivo.",
    deliverable: "Thermal Map + análisis de exposición",
  },
  {
    title: "Módulo 3: Capas de Absorción",
    description:
      "Diseñamos las capas que absorben la fricción regulatoria antes de que alcance el núcleo operativo. Compliance como escudo, no como carga.",
    deliverable: "Yield Stress Analysis + protocolo de absorción",
  },
];

export default function AuditoriaFlujoPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded border border-accent-cold/30 bg-accent-cold/10 text-accent-cold mb-6">
              <span className="text-accent-success">&#10003;</span>
              <Link href="/servicios/fase-2" className="hover:underline">
                Incluido en FASE II
              </Link>
            </div>
            <p className="text-sm text-accent-cold font-[family-name:var(--font-source-code-pro)] uppercase tracking-wider">
              Servicios / Auditoría
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              Auditoría de Flujo Sistémico
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Concepto base:{" "}
              <span className="text-accent-cold font-semibold">
                Esfuerzo de Fluencia (yield stress)
              </span>{" "}
              — el punto exacto donde tu estructura deja de absorber presión y
              comienza a deformarse.
            </p>
          </div>
        </Container>
      </Section>

      {/* Modules */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <div className="space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              3 Módulos de Análisis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {modules.map((mod) => (
                <Card
                  key={mod.title}
                  className="bg-bg-tertiary space-y-4"
                  hoverable={false}
                >
                  <h3 className="text-[1.25rem] leading-[1.3]">{mod.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {mod.description}
                  </p>
                  <div className="pt-4 border-t border-border-subtle">
                    <p className="text-xs text-text-subtle uppercase tracking-wider">
                      Entregable
                    </p>
                    <p className="text-sm text-accent-success mt-1">
                      {mod.deliverable}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Deliverables & Investment */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              Entregables Finales
            </h2>
            <ul className="space-y-4">
              {[
                "Reynolds Report — Tu número actual + diagnóstico completo",
                "Thermal Map — Mapa de firma térmica y exposición",
                "Yield Stress Analysis — Punto de fluencia y recomendaciones",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <span className="text-accent-cold mt-0.5 font-[family-name:var(--font-source-code-pro)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="p-8 border border-border-subtle rounded-xl bg-bg-secondary space-y-4">
              <p className="text-xs text-text-subtle uppercase tracking-wider">
                Inversión
              </p>
              <p className="text-3xl font-[family-name:var(--font-source-code-pro)] text-accent-warm font-semibold">
                €4,500 — €12,000
              </p>
              <p className="text-sm text-text-subtle">
                Según alcance y complejidad del ecosistema
              </p>
              <Button href="/contacto?type=audit" variant="primary">
                Solicitar Auditoría
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
