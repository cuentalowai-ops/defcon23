import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Metodología | DEFCON 23",
  description:
    "Ingeniería de Flujos aplicada a organizaciones. Número de Reynolds, laminación, y arquitectura de protocolo.",
};

const layers = [
  {
    number: "L1",
    name: "Protocol Layer",
    description:
      "La capa invisible. Reglas fundamentales que gobiernan el flujo de información y capital. No se ve, pero define todo lo que ocurre por encima.",
    color: "text-accent-cold",
  },
  {
    number: "L2",
    name: "Governance Layer",
    description:
      "Estructuras de decisión, jerarquías funcionales, protocolos de autorización. Quién decide, cómo y cuándo.",
    color: "text-accent-warm",
  },
  {
    number: "L3",
    name: "Application Layer",
    description:
      "Procesos operativos, flujos de trabajo, herramientas. La capa visible donde se ejecuta el día a día.",
    color: "text-accent-success",
  },
  {
    number: "L4",
    name: "Social Layer",
    description:
      "Narrativa, cultura corporativa, percepción externa. La interfaz humana del sistema.",
    color: "text-accent-warning",
  },
];

const laminarVsTurbulent = [
  {
    aspect: "Eficiencia energética",
    laminar: "Máxima — cada recurso se utiliza con precisión",
    turbulent: "Mínima — energía disipada en fricción y caos",
  },
  {
    aspect: "Visibilidad externa",
    laminar: "Baja — movimiento predecible, sin señales anómalas",
    turbulent: "Alta — vórtices detectables por reguladores y algoritmos",
  },
  {
    aspect: "Escalabilidad",
    laminar: "Lineal — crecimiento proporcional controlado",
    turbulent: "Impredecible — riesgo de colapso en cada expansión",
  },
  {
    aspect: "Compliance",
    laminar: "Nativa — integrada en la arquitectura",
    turbulent: "Reactiva — parches sobre problemas existentes",
  },
  {
    aspect: "Tiempo de auditoría",
    laminar: "< 14 días — documentación lista en protocolo",
    turbulent: "> 45 días — reconstrucción ad hoc bajo presión",
  },
];

export default function MetodologiaPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-accent-cold font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wider">
              Metodología
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              Ingeniería de Flujos Aplicada
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Aplicamos principios de mecánica de fluidos computacional (CFD) a
              sistemas organizativos. El Número de Reynolds determina si tu
              estructura opera en flujo laminar (eficiente, invisible) o
              turbulento (caótico, detectable).
            </p>
          </div>
        </Container>
      </Section>

      {/* Laminar vs Turbulent */}
      <Section className="bg-bg-secondary">
        <Container>
          <div className="space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              Laminación vs Turbulencia
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-visible">
                    <th className="text-left py-4 pr-6 text-text-primary font-semibold">
                      Aspecto
                    </th>
                    <th className="text-left py-4 pr-6 text-accent-success font-semibold">
                      Laminar (Re &lt; 2,300)
                    </th>
                    <th className="text-left py-4 text-accent-danger font-semibold">
                      Turbulento (Re &gt; 4,000)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {laminarVsTurbulent.map((row) => (
                    <tr
                      key={row.aspect}
                      className="border-b border-border-subtle last:border-0"
                    >
                      <td className="py-4 pr-6 text-text-primary font-medium">
                        {row.aspect}
                      </td>
                      <td className="py-4 pr-6 text-text-secondary">
                        {row.laminar}
                      </td>
                      <td className="py-4 text-text-subtle">{row.turbulent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* Filosofía del HUESO */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              Filosofía del HUESO
            </h2>
            <blockquote className="border-l-4 border-accent-warm pl-6 py-2">
              <p className="italic text-text-secondary text-lg leading-relaxed">
                &ldquo;La carne se pudre. El HUESO permanece. Diseñamos
                sistemas cuya arquitectura está en la capa de protocolo.&rdquo;
              </p>
            </blockquote>
            <p className="text-text-secondary leading-relaxed">
              La mayoría de las organizaciones construyen sobre la capa de
              aplicación: procesos, herramientas, personas. Cuando el entorno
              cambia — nueva regulación, crisis, auditoría — la carne se
              descompone. Nosotros diseñamos en la capa de protocolo: las reglas
              fundamentales que sobreviven a cualquier cambio superficial.
            </p>
          </div>
        </Container>
      </Section>

      {/* Framework de 4 Capas */}
      <Section className="bg-bg-secondary">
        <Container>
          <div className="space-y-12">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              Framework de 4 Capas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {layers.map((layer) => (
                <div
                  key={layer.number}
                  className="border border-border-subtle rounded-xl p-8 space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-2xl font-[family-name:var(--font-jetbrains-mono)] font-semibold ${layer.color}`}
                    >
                      {layer.number}
                    </span>
                    <h3 className="text-[1.25rem] leading-[1.3]">
                      {layer.name}
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
