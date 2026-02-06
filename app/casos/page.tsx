import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import CasesTeaser from "@/components/sections/CasesTeaser";

export const metadata: Metadata = {
  title: "Casøs de Estudiø | dEfCØN23",
  description:
    "Casøs reales de reducción de Reynølds: holding gastronómicø, red prøfesiønal y plataførma P2P.",
};

export default function CasosPage() {
  return (
    <PageLayout>
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-accent-cold font-[family-name:var(--font-source-code-pro)] uppercase tracking-wider">
              Casøs de Estudiø
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              De Turbulentø a Laminar
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Tres ørganizaciønes. Tres niveles de turbulencia. Un resultadø
              cømún: flujø laminar søstenible cøn métricas verificables.
            </p>
          </div>
        </Container>
      </Section>
      <CasesTeaser />
    </PageLayout>
  );
}
