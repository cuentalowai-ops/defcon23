import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const steps = [
  {
    number: "01",
    title: "Escaneo del Circuito Económico",
    description:
      "Identificamos los tres componentes del circuito organizativo:",
    items: [
      {
        label: "Capacitancia (C)",
        detail: "Capital acumulado, reservas, assets líquidos",
      },
      {
        label: "Inductancia (L)",
        detail: "Resistencia organizativa, inercia social, deuda estructural",
      },
      {
        label: "Conductancia (G)",
        detail: "Velocidad de transacción, throughput operativo",
      },
    ],
  },
  {
    number: "02",
    title: "Mapeo de Viscosidad Operativa",
    description: "Calculamos dónde se genera fricción:",
    items: [
      {
        label: "",
        detail:
          "¿Qué nodos producen vórtices que atraen atención no deseada?",
      },
      {
        label: "",
        detail: "¿Dónde se separa el flujo del boundary layer?",
      },
      {
        label: "",
        detail: "¿Qué procesos generan calamina detectable?",
      },
    ],
  },
  {
    number: "03",
    title: "Reducción del Número de Reynolds",
    description:
      "Convertimos el flujo caótico en movimiento laminar estratificado:",
    items: [
      { label: "", detail: "Capas que se deslizan sin mezclarse" },
      { label: "", detail: "Invisibles a la detección externa" },
      { label: "", detail: "Máxima eficiencia energética" },
      { label: "", detail: "Compliance nativa, no reactiva" },
    ],
  },
];

export default function MetodoOperativo() {
  return (
    <Section id="metodo">
      <Container>
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
            Nuestro Método Operativo
          </h2>

          <div className="space-y-16">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 md:gap-10">
                {/* Step number */}
                <div className="shrink-0">
                  <span className="text-4xl md:text-5xl font-[family-name:var(--font-jetbrains-mono)] text-accent-warm/30 font-semibold">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-[1.25rem] md:text-[1.5rem] leading-[1.3]">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary">{step.description}</p>
                  <ul className="space-y-3">
                    {step.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-text-secondary"
                      >
                        <span className="text-accent-cold mt-1.5 text-xs">
                          &#9654;
                        </span>
                        <span>
                          {item.label && (
                            <strong className="text-text-primary">
                              {item.label}:{" "}
                            </strong>
                          )}
                          {item.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
