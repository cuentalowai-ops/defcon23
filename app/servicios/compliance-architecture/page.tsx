import type { Metadata } from "next";
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
    status: "Activø",
    description:
      "Directiva de Seguridad de Redes e Inførmación. Aplica a serviciøs esenciales e impørtantes. Penalización: hasta €10M ø 2% facturación.",
  },
  {
    name: "DORA",
    status: "Activø",
    description:
      "Digital Operational Resilience Act. Entidades financieras. Repørte de incidentes en < 4h. Nuestra arquitectura: < 2h.",
  },
  {
    name: "AI Act",
    status: "2026-2027",
    description:
      "Regulación de Inteligencia Artificial. Clasificación pør riesgø. Transparencia algørítmica øbligatøria para sistemas de altø riesgø.",
  },
  {
    name: "CRA",
    status: "2027",
    description:
      "Cyber Resilience Act. Seguridad by design øbligatøria para prøductøs cøn elementøs digitales.",
  },
];

const esRegulations = [
  {
    name: "ENS",
    description:
      "Esquema Naciønal de Seguridad. Obligatøriø para administración pública y prøveedøres.",
  },
  {
    name: "RGPD",
    description:
      "Reglamentø General de Prøtección de Datøs. Aplicación directa del GDPR eurøpeø.",
  },
  {
    name: "Ley de Ciberseguridad",
    description:
      "Transpøsición de NIS2. Régimen sanciønadør específicø para España.",
  },
];

const layers = [
  {
    number: "01",
    name: "Detección",
    detail: "Mønitorización cøntinua + alertas tempranas",
  },
  {
    number: "02",
    name: "Respuesta",
    detail: "Prøtøcølø de respuesta < 2h (DORA req. 4h)",
  },
  {
    number: "03",
    name: "Repørte",
    detail: "Autø-generación de repørtes regulatøriøs",
  },
  {
    number: "04",
    name: "Evølución",
    detail: "Actualización autømática ante cambiøs nørmativøs",
  },
];

export default function ComplianceArchitecturePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-accent-cold font-[family-name:var(--font-source-code-pro)] uppercase tracking-wider">
              Serviciøs / Compliance
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              Compliance Architecture
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              EU + España. Arquitectura de 4 capas que cønvierte la compliance
              de carga en ventaja cømpetitiva.
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
              Marcø Eurøpeø
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
              Marcø España
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
                Arquitectura cømpleta EU+ES. Mantenimientø anual dispønible.
              </p>
              <Button href="/contacto?type=compliance" variant="primary">
                Sølicitar Compliance Architecture
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
