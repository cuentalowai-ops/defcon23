import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Compliance Architecture (EU+ES) | dEfCØN23",
  description:
    "Arquitectura de 4 capas de compliance. NIS2, DORA, AI Act, CRA (EU) + ENS, RGPD, Ley Ciberseguridad (España).",
};

const euRegulations = [
  {
    name: "NIS2",
    status: "Activo",
    description:
      "Directiva de Seguridad de Redes e Información. Aplica a servicios esenciales e importantes. Penalización: hasta €10M o 2% facturación.",
  },
  {
    name: "DORA",
    status: "Activo",
    description:
      "Digital Operational Resilience Act. Entidades financieras. Reporte de incidentes en < 4h. Nuestra arquitectura: < 2h.",
  },
  {
    name: "AI Act",
    status: "2026-2027",
    description:
      "Regulación de Inteligencia Artificial. Clasificación por riesgo. Transparencia algorítmica obligatoria para sistemas de alto riesgo.",
  },
  {
    name: "CRA",
    status: "2027",
    description:
      "Cyber Resilience Act. Seguridad by design obligatoria para productos con elementos digitales.",
  },
];

const esRegulations = [
  {
    name: "ENS",
    description:
      "Esquema Nacional de Seguridad. Obligatorio para administración pública y proveedores.",
  },
  {
    name: "RGPD",
    description:
      "Reglamento General de Protección de Datos. Aplicación directa del GDPR europeo.",
  },
  {
    name: "Ley de Ciberseguridad",
    description:
      "Transposición de NIS2. Régimen sancionador específico para España.",
  },
];

const layers = [
  {
    number: "01",
    name: "Detección",
    detail: "Monitorización continua + alertas tempranas",
  },
  {
    number: "02",
    name: "Respuesta",
    detail: "Protocolo de respuesta < 2h (DORA req. 4h)",
  },
  {
    number: "03",
    name: "Reporte",
    detail: "Auto-generación de reportes regulatorios",
  },
  {
    number: "04",
    name: "Evolución",
    detail: "Actualización automática ante cambios normativos",
  },
];

export default function ComplianceArchitecturePage() {
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
              Servicios / Compliance
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              Compliance Architecture
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              EU + España. Arquitectura de 4 capas que convierte la compliance
              de carga en ventaja competitiva.
            </p>
          </div>
        </Container>
      </Section>

      {/* 4 Layers */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <div className="space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              Arquitectura de 4 Capas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {layers.map((layer) => (
                <div
                  key={layer.number}
                  className="border border-border-subtle rounded-xl p-6 bg-bg-tertiary space-y-3"
                >
                  <span className="text-3xl font-[family-name:var(--font-source-code-pro)] text-accent-cold/40 font-semibold">
                    {layer.number}
                  </span>
                  <h3 className="text-lg font-semibold">{layer.name}</h3>
                  <p className="text-sm text-text-secondary">{layer.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* EU Regulations */}
      <Section>
        <Container>
          <div className="space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              Marco Europeo
            </h2>
            <div className="space-y-6">
              {euRegulations.map((reg) => (
                <div
                  key={reg.name}
                  className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 pb-6 border-b border-border-subtle last:border-0"
                >
                  <div className="shrink-0 flex items-center gap-3">
                    <span className="font-[family-name:var(--font-source-code-pro)] text-accent-cold font-semibold text-lg">
                      {reg.name}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent-cold/10 text-accent-cold">
                      {reg.status}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {reg.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Spain Regulations */}
      <Section className="bg-bg-secondary retro-grid-warm">
        <Container>
          <div className="space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              Marco España
            </h2>
            <div className="space-y-6">
              {esRegulations.map((reg) => (
                <div
                  key={reg.name}
                  className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 pb-6 border-b border-border-subtle last:border-0"
                >
                  <span className="shrink-0 font-[family-name:var(--font-source-code-pro)] text-accent-warm font-semibold text-lg">
                    {reg.name}
                  </span>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {reg.description}
                  </p>
                </div>
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
                €15,000 — €35,000
              </p>
              <p className="text-sm text-text-subtle">
                Arquitectura completa EU+ES. Mantenimiento anual disponible.
              </p>
              <Button href="/contacto?type=compliance" variant="primary">
                Solicitar Compliance Architecture
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
