import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const markers = [
  {
    label: "Arquitectura Cruzada Nativa",
    detail: "Zurdo / Dominancia Hemisferio Derecho — reconocimiento de patrones no lineales, pensamiento divergente",
    icon: "⧫",
  },
  {
    label: "CEO Synapsys Laminar Protocol",
    detail: "Gateway EUDI Wallet (TRL 7) + [S]DEF verificación táctica NATO (TRL 6). eIDAS 2.0 Sovereignty.",
    icon: "◈",
  },
  {
    label: "Zona Gris",
    detail: "Ciberseguridad + Identidad Digital + Factor Humano. Small Smart Moves → Resultados exponenciales.",
    icon: "◇",
  },
];

const stats = [
  { value: "21", label: "Años operacionales" },
  { value: "3", label: "Continentes" },
  { value: "∞", label: "Iteraciones" },
];

export default function OperatorTeaser() {
  return (
    <Section id="operator" className="bg-bg-secondary retro-grid">
      <Container>
        <div className="space-y-10 md:space-y-14">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-cold terminal-text">
              OPERATOR
            </p>
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
              Raúl Balaguer
            </h2>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl">
              CEO Synapsys Laminar Protocol | Cognitive Systems Architect.
              Ingeniero de sistemas complejos en la Zona Gris — donde la{" "}
              <span className="text-accent-warm terminal-text-warm">ciberseguridad</span>,{" "}
              la identidad digital y el factor humano convergen.
            </p>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {markers.map((m, i) => (
              <div
                key={i}
                className="neon-card rounded-2xl p-5 md:p-6 bg-bg-secondary/85 backdrop-blur-sm md:backdrop-blur-md space-y-3 h-full touch-feedback"
              >
                <span className="text-accent-cold text-lg">{m.icon}</span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
                  {m.label}
                </h3>
                <p className="text-sm text-text-subtle leading-relaxed">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Stats + CTA */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4 border-t border-border-subtle">
            <div className="flex gap-8 md:gap-12">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-accent-warm terminal-text-warm">
                    {s.value}
                  </p>
                  <p className="text-xs text-text-subtle uppercase tracking-wider mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <Button href="/operator" variant="secondary">
              Ver perfil completo &rarr;
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
