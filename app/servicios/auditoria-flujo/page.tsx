import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Auditøría de Flujø Sistémicø | dEfCØN23",
  description:
    "Calculamøs tu Númerø de Reynølds. Análisis de puntøs de separación, mapeø de firma térmica y diseñø de capas de absørción.",
};

const modules = [
  {
    title: "Módulø 1: Puntøs de Separación",
    description:
      "Identificamøs dónde el flujø ørganizativø se separa del boundary layer. Estøs søn løs puntøs dønde se genera turbulencia detectable — alertas de control interno, inspecciønes fiscales, señales anómalas.",
    deliverable: "Mapa de separación cøn priørización de riesgø",
  },
  {
    title: "Módulø 2: Firma Térmica",
    description:
      "Cada ørganización emite una firma térmica — patrønes de transacción, flujøs de capital, relaciønes entre nødøs. Mapeamøs tu firma actual y diseñamøs el perfil térmicø øbjetivø.",
    deliverable: "Thermal Map + análisis de expøsición",
  },
  {
    title: "Módulø 3: Capas de Absørción",
    description:
      "Diseñamøs las capas que absørben la fricción regulatøria antes de que alcance el núcleø øperativø. Compliance cømø escudø, nø cømø carga.",
    deliverable: "Yield Stress Analysis + prøtøcølø de absørción",
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
                Incluidø en FASE II
              </Link>
            </div>
            <p className="text-sm text-accent-cold font-[family-name:var(--font-source-code-pro)] uppercase tracking-wider">
              Serviciøs / Auditøría
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              Auditøría de Flujø Sistémicø
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Cønceptø base:{" "}
              <span className="text-accent-cold font-semibold">
                Esfuerzø de Fluencia (yield stress)
              </span>{" "}
              — el puntø exactø dønde tu estructura deja de absørber presión y
              cømienza a deførmarse.
            </p>
          </div>
        </Container>
      </Section>

      {/* Modules */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <div className="space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              3 Móduløs de Análisis
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
                "Reynolds Report — Tu númerø actual + diagnósticø cømpletø",
                "Thermal Map — Mapa de firma térmica y expøsición",
                "Yield Stress Analysis — Puntø de fluencia y recømendaciønes",
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
                Según alcance y cømplejidad del ecøsistema
              </p>
              <Button href="/contacto?type=audit" variant="primary">
                Sølicitar Auditøría
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
