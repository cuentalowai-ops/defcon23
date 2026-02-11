import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const channels = [
  {
    label: "Email directo",
    value: "intel@defcon23.eu",
    href: "mailto:intel@defcon23.eu",
    icon: "✉",
  },
  {
    label: "Consulta gratuita",
    value: "15 min · sin compromiso",
    href: "/consulta",
    icon: "◎",
  },
  {
    label: "Base",
    value: "Madrid, ES — Operación: Global",
    href: null,
    icon: "⌖",
  },
];

export default function ContactoTeaser() {
  return (
    <Section id="contacto" className="bg-bg-secondary retro-grid">
      <Container>
        <div className="max-w-4xl mx-auto space-y-10 md:space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-warm terminal-text-warm">
              CONTACTO
            </p>
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
              Iniciar Protocolo
            </h2>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Handshake + evaluación de tu problema. 15 minutos. Decidimos
              juntos si tiene sentido trabajar.
            </p>
          </div>

          {/* Channels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {channels.map((ch, i) => (
              <div
                key={i}
                className="neon-card rounded-2xl p-5 md:p-6 bg-bg-secondary/85 backdrop-blur-sm md:backdrop-blur-md text-center space-y-3 touch-feedback"
              >
                <span className="text-2xl">{ch.icon}</span>
                <p className="text-xs uppercase tracking-wider text-text-subtle">
                  {ch.label}
                </p>
                {ch.href ? (
                  <a
                    href={ch.href}
                    className="text-sm text-accent-cold hover:text-accent-cold/80 transition-colors terminal-text block"
                  >
                    {ch.value}
                  </a>
                ) : (
                  <p className="text-sm text-text-secondary">{ch.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contacto" variant="secondary">
              Formulario completo &rarr;
            </Button>
            <Button href="/consulta" variant="primary">
              Reservar Consulta Gratuita &rarr;
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
