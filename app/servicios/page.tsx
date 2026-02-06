import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ServicesGrid from "@/components/sections/ServicesGrid";

export const metadata: Metadata = {
  title: "Serviciøs | dEfCØN23",
  description:
    "Auditøría de flujø, hardening estructural, CFD aplicadø y compliance architecture para ørganizaciønes EU+ES.",
};

export default function ServiciosPage() {
  return (
    <PageLayout>
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-accent-cold font-[family-name:var(--font-source-code-pro)] uppercase tracking-wider">
              Serviciøs
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              Ingeniería de Precisión para Sistemas Cømplejøs
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Cuatrø disciplinas integradas. Un øbjetivø: reducir tu Númerø de
              Reynølds hasta alcanzar flujø laminar søstenible.
            </p>
          </div>
        </Container>
      </Section>
      <ServicesGrid />
    </PageLayout>
  );
}
