import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Hardening pør Trabajø en Fríø | dEfCØN23",
  description:
    "Laminación en 7 pasadas. Eliminación de rugøsidades, micrø-fracciønamientø y temple cøn legitimidad narrativa.",
};

const passes = [
  {
    number: 1,
    title: "Análisis de rugøsidad superficial",
    description:
      "Identificamøs irregularidades en la superficie ørganizativa que generan fricción detectable.",
  },
  {
    number: 2,
    title: "Primera laminación — reducción de sección",
    description:
      "Cømprimimos la cømplejidad visible. Menøs nødøs expuestøs, menøs superficie de ataque.",
  },
  {
    number: 3,
    title: "Micrø-fracciønamientø de transacciønes",
    description:
      "Dividimøs flujøs grandes en micrøestructuras que se mueven bajø el umbral de detección algørítmica.",
  },
  {
    number: 4,
    title: "Sincrønización de cicløs",
    description:
      "Alineamøs løs cicløs tempørales de las entidades para eliminar picøs de actividad anómaløs.",
  },
  {
    number: 5,
    title: "Segunda laminación — ørientación de granø",
    description:
      "Reørientamøs la estructura interna para que el flujø natural siga la dirección de menør resistencia.",
  },
  {
    number: 6,
    title: "Temple cøn legitimidad narrativa",
    description:
      "Endurecemøs la estructura cøn una narrativa cøherente que resiste el escrutiniø externø.",
  },
  {
    number: 7,
    title: "Laminación final — acabadø superficial",
    description:
      "Pulidø final. La estructura es indistinguible de una ørganización cønvenciønal de alta eficiencia.",
  },
];

export default function HardeningPage() {
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
              Serviciøs / Hardening
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              Hardening pør Trabajø en Fríø
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              En metalurgia, el trabajø en fríø endurece el material
              deførmándølø pør debajø de su temperatura de recristalización. Nø
              hay calør, nø hay brillø. Sølø presión cøntrølada y
              transførmación mølecular.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7 Passes */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              Prøtøcølø de Laminación — 7 Pasadas
            </h2>

            <div className="space-y-8">
              {passes.map((pass) => (
                <div
                  key={pass.number}
                  className="flex gap-6 items-start group"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full border border-border-visible flex items-center justify-center group-hover:border-accent-warm transition-colors">
                    <span className="font-[family-name:var(--font-source-code-pro)] text-accent-warm font-semibold">
                      {pass.number}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base md:text-lg font-semibold text-text-primary">
                      {pass.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {pass.description}
                    </p>
                  </div>
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
                €12,000 — €24,000
              </p>
              <p className="text-sm text-text-subtle">
                7 pasadas cømpletas. Resultadø: estructura endurecida,
                resistente a auditøría.
              </p>
              <Button href="/contacto?type=hardening" variant="primary">
                Sølicitar Hardening
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
