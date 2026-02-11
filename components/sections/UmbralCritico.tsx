import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const tableData = [
  {
    concepto: "Flujo Laminar",
    re: "Re < 2,300",
    aplicacion: "Movimiento ordenado, baja fricción, alta predictibilidad",
    indicador: "Respuesta auditoría: 14+ días",
  },
  {
    concepto: "Flujo Turbulento",
    re: "Re > 4,000",
    aplicacion: "Caos operativo, vórtices detectables, pérdida de energía",
    indicador: "Alertas regulatorias: 7+/año",
  },
  {
    concepto: "Viscosidad (μ)",
    re: "",
    aplicacion: "Resistencia interna al cambio (burocracia, legacy systems)",
    indicador: "Implementar normativa: 45+ días",
  },
  {
    concepto: "Vortex Core",
    re: "",
    aplicacion: "Punto de máxima influencia/decisión en la red",
    indicador: "Nodo con >60% flujo crítico",
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
    <Section id="umbral" className="bg-bg-secondary retro-grid">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          {/* Headline */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-cold terminal-text">
              FUNDAMENTOS
            </p>
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
              ¿Qué es la Ingeniería de Flujøs Aplicada?
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              En mecánica de fluidos computacional, existe un umbral que define
              la supervivencia de los sistemas:{" "}
              <span className="text-accent-cold terminal-text">
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

          {/* Table — Desktop */}
          <div className="hidden md:block overflow-x-auto neon-card rounded-xl p-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-visible">
                  <th className="text-left py-4 pr-4 pl-4 text-text-primary font-semibold">
                    Concepto Físico
                  </th>
                  <th className="text-left py-4 pr-4 text-text-primary font-semibold">
                    Aplicación Organizativa
                  </th>
                  <th className="text-left py-4 pr-4 text-text-primary font-semibold">
                    Indicador Medible
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-border-subtle last:border-0 hover:bg-bg-tertiary/50 transition-colors"
                  >
                    <td className="py-4 pr-4 pl-4 text-accent-cold text-sm terminal-text">
                      <span className="block font-semibold">{row.concepto}</span>
                      {row.re && (
                        <span className="block text-xs text-accent-cold/70 mt-0.5">
                          {row.re}
                        </span>
                      )}
                    </td>
                    <td className="py-4 pr-4 text-text-secondary text-sm">
                      {row.aplicacion}
                    </td>
                    <td className="py-4 pr-4 text-text-subtle text-sm">
                      {row.indicador}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table — Mobile (stacked cards) */}
          <div className="md:hidden space-y-4">
            {tableData.map((row, i) => (
              <div
                key={i}
                className="neon-card rounded-xl p-4 bg-bg-tertiary space-y-3"
              >
                <div>
                  <p className="text-accent-cold font-semibold terminal-text text-sm">
                    {row.concepto}
                  </p>
                  {row.re && (
                    <p className="text-xs text-accent-cold/70 mt-0.5">{row.re}</p>
                  )}
                </div>
                <div>
                  <p className="text-[0.7rem] uppercase tracking-wider text-text-subtle mb-1">
                    Aplicación
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {row.aplicacion}
                  </p>
                </div>
                <div>
                  <p className="text-[0.7rem] uppercase tracking-wider text-text-subtle mb-1">
                    Indicador
                  </p>
                  <p className="text-sm text-text-subtle">{row.indicador}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
