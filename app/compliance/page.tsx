import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Política de Cumplimiento Normativo | dEfCØN23",
  description:
    "DEFCON23.EU opera con total transparencia y cumplimiento estricto de normativas AML/CFT, protección de datos y seguridad.",
};

export default function CompliancePage() {
  return (
    <PageLayout>
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto space-y-8 md:space-y-10">
            <h1 className="text-[2rem] md:text-[3rem] leading-tight">
              Política de Cumplimiento Normativo
            </h1>

            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-accent-cold">
                Compromiso
              </h2>
              <p className="text-text-secondary leading-relaxed">
                DEFCON23.EU opera con total transparencia y cumplimiento estricto
                de normativas AML/CFT, protección de datos y seguridad.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-accent-cold">
                Normativa Aplicable
              </h2>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>
                  <strong className="text-text-primary">Ley 10/2010</strong>{" "}
                  (Prevención Blanqueo - España)
                </li>
                <li>
                  <strong className="text-text-primary">
                    Reglamento (UE) 2015/849
                  </strong>{" "}
                  (4ª Directiva AML)
                </li>
                <li>
                  <strong className="text-text-primary">
                    Reglamento (UE) 2016/679
                  </strong>{" "}
                  (GDPR)
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-accent-cold">
                Proceso de Due Diligence
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-text-secondary">
                <li>Identificación del Cliente (KYC)</li>
                <li>Evaluación de Riesgo</li>
                <li>Verificación de Origen de Fondos</li>
                <li>Screening en listas OFAC/UE</li>
              </ol>
            </section>

            <section className="space-y-4 neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary">
              <h2 className="text-xl md:text-2xl font-semibold text-accent-cold">
                Compliance Officer
              </h2>
              <p className="text-text-secondary">
                <strong className="text-text-primary">Contacto:</strong>{" "}
                <a
                  href="mailto:compliance@defcon23.eu"
                  className="text-accent-cold hover:underline"
                >
                  compliance@defcon23.eu
                </a>
              </p>
              <p className="text-text-secondary">
                <strong className="text-text-primary">Horario:</strong> L-V
                09:00-18:00 CET
              </p>
            </section>

            <p className="text-xs text-text-subtle pt-4">
              Última revisión: 2026-02-08
            </p>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
