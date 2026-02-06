import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const tableData = [
  {
    concepto: "Flujo Laminar (Re < 2,300)",
    aplicacion: "Movimiento ordenado, baja fricción, alta predictibilidad",
    indicador: "Tiempo de respuesta ante auditoría: 14+ días",
  },
  {
    concepto: "Flujo Turbulento (Re > 4,000)",
    aplicacion: "Caos operativo, vórtices detectables, pérdida de energía",
    indicador: "Alertas regulatorias: 7+/año, fricción fiscal alta",
  },
  {
    concepto: "Viscosidad (μ)",
    aplicacion: "Resistencia interna al cambio (burocracia, legacy systems)",
    indicador: "Días para implementar nueva normativa: 45+ días",
  },
  {
    concepto: "Vortex Core",
    aplicacion: "Punto de máxima influencia/decisión en la red",
    indicador: "Nodo con > 60% de flujo de decisiones críticas",
  },
];

const turbulenceEffects = [
  "Pérdida de eficiencia energética exponencial",
  "Fricción con el entorno (reguladores, competencia, auditorías)",
  "Puntos de separación impredecibles",
  "Alta visibilidad en escaneos algorítmicos (AML, tax authorities, compliance)",
];

export default function UmbralCritico() {
  return (
    <Section id="umbral" className="bg-bg-secondary">
      <Container>
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              ¿Qué es la Ingeniería de Flujos Aplicada?
            </h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              En mecánica de fluidos computacional, existe un umbral que define
              la supervivencia de los sistemas:{" "}
              <span className="text-accent-cold font-[family-name:var(--font-jetbrains-mono)]">
                Re &lt; 2,300
              </span>{" "}
              es flujo laminar.
            </p>
          </div>

          {/* Turbulence effects */}
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              Por encima de este número de Reynolds, el sistema entra en
              turbulencia:
            </p>
            <ul className="space-y-3">
              {turbulenceEffects.map((effect, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <span className="text-accent-danger mt-1.5 text-xs">
                    &#9632;
                  </span>
                  <span>{effect}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-visible">
                  <th className="text-left py-4 pr-6 text-text-primary font-semibold">
                    Concepto Físico
                  </th>
                  <th className="text-left py-4 pr-6 text-text-primary font-semibold">
                    Aplicación Organizativa
                  </th>
                  <th className="text-left py-4 text-text-primary font-semibold">
                    Indicador Medible
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-border-subtle last:border-0"
                  >
                    <td className="py-4 pr-6 text-accent-cold font-[family-name:var(--font-jetbrains-mono)] text-xs md:text-sm whitespace-nowrap">
                      {row.concepto}
                    </td>
                    <td className="py-4 pr-6 text-text-secondary">
                      {row.aplicacion}
                    </td>
                    <td className="py-4 text-text-subtle">{row.indicador}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </Section>
  );
}
