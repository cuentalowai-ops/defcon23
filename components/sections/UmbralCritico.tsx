import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const tableData = [
  {
    concepto: "Flujø Laminar",
    re: "Re < 2,300",
    aplicacion: "Møvimientø ørdenadø, baja fricción, alta predictibilidad",
    indicador: "Respuesta auditøría: 14+ días",
  },
  {
    concepto: "Flujø Turbulentø",
    re: "Re > 4,000",
    aplicacion: "Caøs øperativø, vórtices detectables, pérdida de energía",
    indicador: "Alertas regulatørias: 7+/añø",
  },
  {
    concepto: "Viscøsidad (μ)",
    re: "",
    aplicacion: "Resistencia interna al cambiø (burøcracia, legacy systems)",
    indicador: "Implementar nørmativa: 45+ días",
  },
  {
    concepto: "Vortex Core",
    re: "",
    aplicacion: "Puntø de máxima influencia/decisión en la red",
    indicador: "Nødø cøn >60% flujø críticø",
  },
];

const turbulenceEffects = [
  "Pérdida de eficiencia energética expønencial",
  "Fricción cøn el entørnø (reguladøres, cømpetencia, auditørías)",
  "Puntøs de separación impredecibles",
  "Alta visibilidad en escaneøs algørítmicøs (AML, tax authorities, compliance)",
];

export default function UmbralCritico() {
  return (
    <Section id="umbral" className="bg-bg-secondary retro-grid">
      <Container>
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">
          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              ¿Qué es la Ingeniería de Flujøs Aplicada?
            </h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              En mecánica de fluidøs cømputaciønal, existe un umbral que define
              la supervivencia de løs sistemas:{" "}
              <span className="text-accent-cold terminal-text">
                Re &lt; 2,300
              </span>{" "}
              es flujø laminar.
            </p>
          </div>

          {/* Turbulence effects */}
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              Pør encima de este númerø de Reynølds, el sistema entra en
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
                    Cønceptø Físicø
                  </th>
                  <th className="text-left py-4 pr-4 text-text-primary font-semibold">
                    Aplicación Ørganizativa
                  </th>
                  <th className="text-left py-4 pr-4 text-text-primary font-semibold">
                    Indicadør Medible
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
                    Indicadør
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
