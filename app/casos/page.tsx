import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import CasesTeaser from "@/components/sections/CasesTeaser";

export const metadata: Metadata = {
  title: "Casos de Estudio | dEfCØN23",
  description:
    "Casos reales de reducción de Reynolds: holding gastronómico, red profesional y plataforma P2P.",
};

export default function CasosPage() {
  return (
    <PageLayout>
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-accent-cold font-[family-name:var(--font-source-code-pro)] uppercase tracking-wider">
              Casos de Estudio
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              De Turbulento a Laminar
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Tres organizaciones. Tres niveles de turbulencia. Un resultado
              común: flujo laminar sostenible con métricas verificables.
            </p>
          </div>
        </Container>
      </Section>
      <CasesTeaser />
    </PageLayout>
  );
}
