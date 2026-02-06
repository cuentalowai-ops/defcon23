import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Hardening por Trabajo en Frío | DEFCON 23",
  description:
    "Laminación en 7 pasadas. Eliminación de rugosidades, micro-fraccionamiento y temple con legitimidad narrativa.",
};

const passes = [
  {
    number: 1,
    title: "Análisis de rugosidad superficial",
    description:
      "Identificamos irregularidades en la superficie organizativa que generan fricción detectable.",
  },
  {
    number: 2,
    title: "Primera laminación — reducción de sección",
    description:
      "Comprimimos la complejidad visible. Menos nodos expuestos, menos superficie de ataque.",
  },
  {
    number: 3,
    title: "Micro-fraccionamiento de transacciones",
    description:
      "Dividimos flujos grandes en microestructuras que se mueven bajo el umbral de detección algorítmica.",
  },
  {
    number: 4,
    title: "Sincronización de ciclos",
    description:
      "Alineamos los ciclos temporales de las entidades para eliminar picos de actividad anómalos.",
  },
  {
    number: 5,
    title: "Segunda laminación — orientación de grano",
    description:
      "Reorientamos la estructura interna para que el flujo natural siga la dirección de menor resistencia.",
  },
  {
    number: 6,
    title: "Temple con legitimidad narrativa",
    description:
      "Endurecemos la estructura con una narrativa coherente que resiste el escrutinio externo.",
  },
  {
    number: 7,
    title: "Laminación final — acabado superficial",
    description:
      "Pulido final. La estructura es indistinguible de una organización convencional de alta eficiencia.",
  },
];

export default function HardeningPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-accent-cold font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wider">
              Servicios / Hardening
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              Hardening por Trabajo en Frío
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              En metalurgia, el trabajo en frío endurece el material
              deformándolo por debajo de su temperatura de recristalización. No
              hay calor, no hay brillo. Solo presión controlada y
              transformación molecular.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7 Passes */}
      <Section className="bg-bg-secondary">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              Protocolo de Laminación — 7 Pasadas
            </h2>

            <div className="space-y-8">
              {passes.map((pass) => (
                <div
                  key={pass.number}
                  className="flex gap-6 items-start group"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full border border-border-visible flex items-center justify-center group-hover:border-accent-warm transition-colors">
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-accent-warm font-semibold">
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
              <p className="text-3xl font-[family-name:var(--font-jetbrains-mono)] text-accent-warm font-semibold">
                €12,000 — €24,000
              </p>
              <p className="text-sm text-text-subtle">
                7 pasadas completas. Resultado: estructura endurecida,
                resistente a auditoría.
              </p>
              <Button href="/contacto?type=hardening" variant="primary">
                Solicitar Hardening
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
