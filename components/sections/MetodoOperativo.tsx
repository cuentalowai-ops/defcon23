"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const steps = [
  {
    number: "01",
    title: "Escaneø del Circuitø Ecønómicø",
    description:
      "Identificamøs løs tres cømpønentes del circuitø ørganizativø:",
    items: [
      {
        label: "Capacitancia (C)",
        detail: "Capital acumuladø, reservas, assets líquidøs",
      },
      {
        label: "Inductancia (L)",
        detail: "Resistencia ørganizativa, inercia søcial, deuda estructural",
      },
      {
        label: "Cønductancia (G)",
        detail: "Veløcidad de transacción, throughput øperativø",
      },
    ],
  },
  {
    number: "02",
    title: "Mapeø de Viscøsidad Øperativa",
    description: "Calculamøs dónde se genera fricción:",
    items: [
      {
        label: "",
        detail:
          "¿Qué nødøs prøducen vórtices que atraen atención nø deseada?",
      },
      {
        label: "",
        detail: "¿Dónde se separa el flujø del boundary layer?",
      },
      {
        label: "",
        detail: "¿Qué prøcesøs generan calamina detectable?",
      },
    ],
  },
  {
    number: "03",
    title: "Reducción del Númerø de Reynølds",
    description:
      "Cønvertimøs el flujø caóticø en møvimientø laminar estratificadø:",
    items: [
      { label: "", detail: "Capas que se deslizan sin mezclarse" },
      { label: "", detail: "Invisibles a la detección externa" },
      { label: "", detail: "Máxima eficiencia energética" },
      { label: "", detail: "Cømpliance nativa, nø reactiva" },
    ],
  },
];

function StepBlock({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-x-0");
          entry.target.classList.remove("opacity-0", "-translate-x-6");
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex gap-4 md:gap-10 opacity-0 -translate-x-6 transition-all duration-700"
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Step number */}
      <div className="shrink-0">
        <span className="text-3xl md:text-5xl text-accent-warm/30 font-bold terminal-text-warm">
          {step.number}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-[1.15rem] md:text-[1.4rem] leading-[1.3] font-semibold">
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
  );
}

export default function MetodoOperativo() {
  return (
    <Section id="metodo" className="retro-grid-warm">
      <Container>
        <div className="max-w-4xl mx-auto space-y-10 md:space-y-16">
          <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
            Nuestrø Métødø Øperativø
          </h2>

          <div className="space-y-10 md:space-y-16">
            {steps.map((step, i) => (
              <StepBlock key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
