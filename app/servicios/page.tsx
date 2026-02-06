import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ServicesGrid from "@/components/sections/ServicesGrid";

export const metadata: Metadata = {
  title: "Servicios | DEFCON 23",
  description:
    "Auditoría de flujo, hardening estructural, CFD aplicado y compliance architecture para organizaciones EU+ES.",
};

export default function ServiciosPage() {
  return (
    <PageLayout>
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-accent-cold font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wider">
              Servicios
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              Ingeniería de Precisión para Sistemas Complejos
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Cuatro disciplinas integradas. Un objetivo: reducir tu Número de
              Reynolds hasta alcanzar flujo laminar sostenible.
            </p>
          </div>
        </Container>
      </Section>
      <ServicesGrid />
    </PageLayout>
  );
}
