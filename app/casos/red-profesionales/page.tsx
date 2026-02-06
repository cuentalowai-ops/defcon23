import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Casø: Red Serviciøs Prøfesiønales | dEfCØN23",
  description:
    "11 prøfesiønales independientes. Laminación de jerarquía piramidal. Presión regulatøria: -91%.",
};

const metrics = [
  { label: "Re Inicial", value: "3,800", color: "text-accent-danger" },
  { label: "Re Final", value: "2,100", color: "text-accent-success" },
  { label: "Presión regulatøria", value: "-91%", color: "text-accent-success" },
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
              Casø de Estudiø B
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              Red Serviciøs Prøfesiønales
            </h1>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs px-3 py-1 rounded-full bg-bg-tertiary text-text-subtle border border-border-subtle">
                Legal + Cønsultøría + Cøntabilidad
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-bg-tertiary text-text-subtle border border-border-subtle">
                11 prøfesiønales
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
              Estructura piramidal visible cøn 11 prøfesiønales independientes
              øperandø bajø un nødø central de cøørdinación. Inspección de
              Hacienda en cursø. La estructura jerárquica era transparente para
              cualquier análisis de red básicø.
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
              Laminación de la jerarquía visible hacia un mødelø
              hørizøntal-familiar. Implementación de prøtøcølø de inducción que
              redistribuye løs nødøs de decisión. El resultadø: una red plana
              dønde la cøørdinación emerge de prøtøcøløs cømpartidøs, nø de
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
              Resultadøs
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
                Sølicitar Auditøría
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
