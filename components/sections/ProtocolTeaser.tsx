import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const variables = [
  {
    symbol: "ρ",
    name: "Densidad organizativa",
    hint: "Entidades y nodos activos",
    color: "text-accent-cold",
  },
  {
    symbol: "v",
    name: "Velocidad de flujo",
    hint: "Transacciones / mes",
    color: "text-accent-warm",
  },
  {
    symbol: "D",
    name: "Diámetro del sistema",
    hint: "Jurisdicciones activas",
    color: "text-accent-success",
  },
  {
    symbol: "μ",
    name: "Viscosidad",
    hint: "Resistencia al cambio",
    color: "text-accent-danger",
  },
];

export default function ProtocolTeaser() {
  return (
    <Section className="bg-bg-secondary retro-grid">
      <Container>
        <div className="max-w-4xl mx-auto space-y-10 md:space-y-14">
          {/* Header */}
          <div className="text-center space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-cold terminal-text">
              PROTOCOL
            </p>
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Reynolds Calculator
            </h2>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Calcula el Número de Reynolds de tu organización. Determina si
              operas en flujo laminar (eficiente) o turbulento (detectable).
            </p>
          </div>

          {/* Formula */}
          <div className="text-center">
            <p className="text-xl md:text-2xl terminal-text text-accent-cold tracking-wider">
              Re = (ρ &times; v &times; D) / μ
            </p>
          </div>

          {/* Variables grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {variables.map((v, i) => (
              <div
                key={i}
                className="neon-card rounded-xl p-4 md:p-5 bg-bg-tertiary text-center space-y-2"
              >
                <p className={`text-2xl md:text-3xl font-bold ${v.color} terminal-text`}>
                  {v.symbol}
                </p>
                <p className="text-sm text-text-primary font-semibold">
                  {v.name}
                </p>
                <p className="text-xs text-text-subtle">{v.hint}</p>
              </div>
            ))}
          </div>

          {/* Result zones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg border border-accent-success/30 bg-accent-success/5 p-4 text-center space-y-1">
              <p className="text-sm font-bold text-accent-success">Re &lt; 2,300</p>
              <p className="text-xs text-text-subtle">Flujo Laminar — Eficiente</p>
            </div>
            <div className="rounded-lg border border-accent-warning/30 bg-accent-warning/5 p-4 text-center space-y-1">
              <p className="text-sm font-bold text-accent-warning">2,300 — 4,000</p>
              <p className="text-xs text-text-subtle">Zona de Transición — Inestable</p>
            </div>
            <div className="rounded-lg border border-accent-danger/30 bg-accent-danger/5 p-4 text-center space-y-1">
              <p className="text-sm font-bold text-accent-danger">Re &gt; 4,000</p>
              <p className="text-xs text-text-subtle">Flujo Turbulento — Detectable</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button href="/calculadora-reynolds" variant="primary">
              Calcular mi Número de Reynolds &rarr;
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
