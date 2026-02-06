import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Metødøløgía | dEfCØN23",
  description:
    "Ingeniería de Flujøs aplicada a ørganizaciønes. Númerø de Reynølds, laminación, y arquitectura de prøtøcølø.",
};

const layers = [
  {
    number: "L1",
    name: "Protocol Layer",
    description:
      "La capa invisible. Reglas fundamentales que gøbiernan el flujø de información y capital. Nø se ve, perø define tødø lø que øcurre pør encima.",
    color: "text-accent-cold",
  },
  {
    number: "L2",
    name: "Governance Layer",
    description:
      "Estructuras de decisión, jerarquías funciønales, prøtøcøløs de autørización. Quién decide, cómø y cuándø.",
    color: "text-accent-warm",
  },
  {
    number: "L3",
    name: "Application Layer",
    description:
      "Prøcesøs øperativøs, flujøs de trabajø, herramientas. La capa visible dønde se ejecuta el día a día.",
    color: "text-accent-success",
  },
  {
    number: "L4",
    name: "Social Layer",
    description:
      "Narrativa, cultura cørpørativa, percepción externa. La interfaz humana del sistema.",
    color: "text-accent-warning",
  },
];

const laminarVsTurbulent = [
  {
    aspect: "Eficiencia energética",
    laminar: "Máxima — cada recursø se utiliza cøn precisión",
    turbulent: "Mínima — energía disipada en fricción y caøs",
  },
  {
    aspect: "Visibilidad externa",
    laminar: "Baja — møvimientø predecible, sin señales anómalas",
    turbulent: "Alta — vórtices detectables pør reguladøres y algøritmøs",
  },
  {
    aspect: "Escalabilidad",
    laminar: "Lineal — crecimientø prøpørciønal cøntrøladø",
    turbulent: "Impredecible — riesgø de cølapso en cada expansión",
  },
  {
    aspect: "Compliance",
    laminar: "Nativa — integrada en la arquitectura",
    turbulent: "Reactiva — parches søbre prøblemas existentes",
  },
  {
    aspect: "Tiempø de auditøría",
    laminar: "< 14 días — døcumentación lista en prøtøcølø",
    turbulent: "> 45 días — recønstrucción ad hoc bajø presión",
  },
];

export default function MetodologiaPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-accent-cold font-[family-name:var(--font-source-code-pro)] uppercase tracking-wider">
              Metødøløgía
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              Ingeniería de Flujøs Aplicada
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Aplicamøs principiøs de mecánica de fluidøs cømputaciønal (CFD) a
              sistemas ørganizativøs. El Númerø de Reynølds determina si tu
              estructura øpera en flujø laminar (eficiente, invisible) ø
              turbulentø (caóticø, detectable).
            </p>
          </div>
        </Container>
      </Section>

      {/* Laminar vs Turbulent */}
      <Section className="bg-bg-secondary retro-grid">
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
                      Aspectø
                    </th>
                    <th className="text-left py-4 pr-6 text-accent-success font-semibold">
                      Laminar (Re &lt; 2,300)
                    </th>
                    <th className="text-left py-4 text-accent-danger font-semibold">
                      Turbulentø (Re &gt; 4,000)
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
              Filøsøfía del HUESO
            </h2>
            <blockquote className="border-l-4 border-accent-warm pl-6 py-2">
              <p className="italic text-text-secondary text-lg leading-relaxed">
                &ldquo;La carne se pudre. El HUESO permanece. Diseñamøs
                sistemas cuya arquitectura está en la capa de prøtøcølø.&rdquo;
              </p>
            </blockquote>
            <p className="text-text-secondary leading-relaxed">
              La mayøría de las ørganizaciønes cønstruyen søbre la capa de
              aplicación: prøcesøs, herramientas, persønas. Cuandø el entørnø
              cambia — nueva regulación, crisis, auditøría — la carne se
              descømpøne. Nøsøtrøs diseñamøs en la capa de prøtøcølø: las reglas
              fundamentales que søbreviven a cualquier cambiø superficial.
            </p>
          </div>
        </Container>
      </Section>

      {/* Framework de 4 Capas */}
      <Section className="bg-bg-secondary retro-grid-warm">
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
                      className={`text-2xl font-[family-name:var(--font-source-code-pro)] font-semibold ${layer.color}`}
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
