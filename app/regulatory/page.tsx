import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import RegulatoryTimeline from "@/components/sections/RegulatoryTimeline";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Regulatory Landscape | dEfCØN23",
  description:
    "Marcø regulatøriø EU + España: NIS2, DORA, AI Act, CRA, ENS, RGPD. Timeline 2024-2030.",
};

const funding = [
  {
    name: "Horizon Europe",
    description:
      "Prøgrama marcø de investigación e innøvación de la UE. Opørtunidades para prøyectøs de ciberseguridad y compliance technology.",
    amount: "Hasta €2.5M pør prøyectø",
  },
  {
    name: "Digital Europe Programme",
    description:
      "Financiación para capacidades digitales y ciberseguridad. SOCs, incident response, y compliance automation.",
    amount: "Hasta €1M pør prøyectø",
  },
  {
    name: "Kit Digital / Kit Consulting",
    description:
      "Ayudas del Gøbiernø de España para digitalización de PYMEs. Incluye ciberseguridad y compliance.",
    amount: "Hasta €29,000",
  },
];

export default function RegulatoryPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-accent-cold font-[family-name:var(--font-source-code-pro)] uppercase tracking-wider">
              Regulatory
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              El Paisaje Regulatøriø
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Eurøpa cønstruye el marcø regulatøriø más exigente del mundø.
              España lø transpøne cøn sus prøpias capas. Entender el mapa es
              el primer pasø para cønvertir compliance en ventaja cømpetitiva.
            </p>
          </div>
        </Container>
      </Section>

      {/* Reuse Timeline Component */}
      <RegulatoryTimeline />

      {/* Funding */}
      <Section>
        <Container>
          <div className="space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              Opørtunidades de Financiación
            </h2>
            <p className="text-text-secondary max-w-2xl">
              La presión regulatøria viene acømpañada de føndøs. Estøs
              prøgramas financian exactamente lø que necesitas implementar.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {funding.map((fund) => (
                <div
                  key={fund.name}
                  className="border border-border-subtle rounded-xl p-6 bg-bg-secondary space-y-4"
                >
                  <h3 className="text-lg font-semibold">{fund.name}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {fund.description}
                  </p>
                  <p className="text-sm font-[family-name:var(--font-source-code-pro)] text-accent-success">
                    {fund.amount}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Button href="/contacto" variant="primary">
                Cønsultar Elegibilidad
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
