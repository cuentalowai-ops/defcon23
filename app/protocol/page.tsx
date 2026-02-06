"use client";

import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

interface ReynoldsResult {
  re: number;
  classification: string;
  color: string;
  description: string;
}

function calculateReynolds(
  density: number,
  velocity: number,
  diameter: number,
  viscosity: number
): ReynoldsResult | null {
  if (viscosity === 0) return null;
  const re = (density * velocity * diameter) / viscosity;

  if (re < 2300) {
    return {
      re,
      classification: "Flujo Laminar",
      color: "text-accent-success",
      description:
        "Tu organización opera en flujo laminar. Movimiento ordenado, baja fricción, alta predictibilidad. Mantén este estado.",
    };
  } else if (re < 4000) {
    return {
      re,
      classification: "Zona de Transición",
      color: "text-accent-warning",
      description:
        "Tu organización está en la zona de transición. Inestable. Pequeñas perturbaciones pueden empujarte a turbulencia. Acción recomendada: auditoría preventiva.",
    };
  } else {
    return {
      re,
      classification: "Flujo Turbulento",
      color: "text-accent-danger",
      description:
        "Tu organización opera en flujo turbulento. Caos operativo, vórtices detectables, alta fricción regulatoria. Acción urgente requerida.",
    };
  }
}

export default function ProtocolPage() {
  const [density, setDensity] = useState("");
  const [velocity, setVelocity] = useState("");
  const [diameter, setDiameter] = useState("");
  const [viscosity, setViscosity] = useState("");
  const [result, setResult] = useState<ReynoldsResult | null>(null);

  const handleCalculate = () => {
    const d = parseFloat(density);
    const v = parseFloat(velocity);
    const dia = parseFloat(diameter);
    const mu = parseFloat(viscosity);

    if (isNaN(d) || isNaN(v) || isNaN(dia) || isNaN(mu)) return;

    const res = calculateReynolds(d, v, dia, mu);
    setResult(res);
  };

  const inputClass =
    "w-full bg-bg-tertiary border border-border-subtle rounded-lg px-4 py-3 text-text-primary font-[family-name:var(--font-jetbrains-mono)] text-sm focus:outline-none focus:border-accent-cold transition-colors placeholder:text-text-subtle";

  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-accent-cold font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wider">
              Protocol
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              Reynolds Calculator
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Calcula el Número de Reynolds de tu organización. Determina si
              operas en flujo laminar (eficiente) o turbulento (detectable).
            </p>
          </div>
        </Container>
      </Section>

      {/* Calculator */}
      <Section className="bg-bg-secondary">
        <Container>
          <div className="max-w-xl mx-auto space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-center">
              Calcula tu Re
            </h2>

            <p className="text-sm text-text-subtle text-center font-[family-name:var(--font-jetbrains-mono)]">
              Re = (ρ &times; v &times; D) / μ
            </p>

            <div className="space-y-6">
              {/* Density */}
              <div className="space-y-2">
                <label className="block text-sm text-text-secondary">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-accent-cold">
                    ρ
                  </span>{" "}
                  — Densidad organizativa
                </label>
                <input
                  type="number"
                  placeholder="Número de entidades/nodos activos"
                  value={density}
                  onChange={(e) => setDensity(e.target.value)}
                  className={inputClass}
                />
                <p className="text-xs text-text-subtle">
                  Entidades, departamentos o nodos operativos
                </p>
              </div>

              {/* Velocity */}
              <div className="space-y-2">
                <label className="block text-sm text-text-secondary">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-accent-cold">
                    v
                  </span>{" "}
                  — Velocidad de flujo
                </label>
                <input
                  type="number"
                  placeholder="Transacciones/mes (en miles)"
                  value={velocity}
                  onChange={(e) => setVelocity(e.target.value)}
                  className={inputClass}
                />
                <p className="text-xs text-text-subtle">
                  Volume mensual de transacciones en miles
                </p>
              </div>

              {/* Diameter */}
              <div className="space-y-2">
                <label className="block text-sm text-text-secondary">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-accent-cold">
                    D
                  </span>{" "}
                  — Diámetro del sistema
                </label>
                <input
                  type="number"
                  placeholder="Jurisdicciones / países activos"
                  value={diameter}
                  onChange={(e) => setDiameter(e.target.value)}
                  className={inputClass}
                />
                <p className="text-xs text-text-subtle">
                  Número de jurisdicciones o mercados
                </p>
              </div>

              {/* Viscosity */}
              <div className="space-y-2">
                <label className="block text-sm text-text-secondary">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-accent-cold">
                    μ
                  </span>{" "}
                  — Viscosidad
                </label>
                <input
                  type="number"
                  placeholder="Días para implementar nueva normativa"
                  value={viscosity}
                  onChange={(e) => setViscosity(e.target.value)}
                  className={inputClass}
                />
                <p className="text-xs text-text-subtle">
                  Resistencia interna al cambio (días promedio)
                </p>
              </div>

              <Button
                onClick={handleCalculate}
                variant="primary"
                className="w-full"
              >
                Calcular Número de Reynolds
              </Button>
            </div>

            {/* Result */}
            {result && (
              <div className="border border-border-visible rounded-xl p-8 bg-bg-primary space-y-4 text-center">
                <p className="text-xs text-text-subtle uppercase tracking-wider">
                  Tu Número de Reynolds
                </p>
                <p
                  className={`text-4xl md:text-5xl font-[family-name:var(--font-jetbrains-mono)] font-semibold ${result.color}`}
                >
                  Re = {result.re.toLocaleString("es-ES", { maximumFractionDigits: 0 })}
                </p>
                <p className={`text-lg font-semibold ${result.color}`}>
                  {result.classification}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {result.description}
                </p>
                <div className="pt-4">
                  <Button href="/contacto?type=audit" variant="secondary">
                    Solicitar Auditoría Completa
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
