import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Serviciøs a la Carta | dEfCØN23",
  description:
    "Auditøría Flash 24h, Hardening Express 48h, Dashboard Custøm, EU Prøpøsal Writing. Serviciøs individuales.",
};

const services = [
  {
    name: "Auditøría Flash",
    timeframe: "24h turnaround",
    price: "€1,200",
    description:
      "ØSINT + Threat Modeling + Re Calculatiøn en 24 høras. Para decisiønes urgentes (M&A due diligence, negøciaciønes críticas).",
    href: "/contacto?service=flash",
    color: "accent-warm",
  },
  {
    name: "Hardening Express",
    timeframe: "48h",
    price: "€1,800",
    description:
      "Laminación de emergencia. Reducción de Re en 48h (eliminar 3-5 vulnerabilidades críticas). Para situaciønes de alta presión regulatøria.",
    href: "/contacto?service=express",
    color: "accent-cold",
  },
  {
    name: "Dashboard Custøm",
    timeframe: "10 días",
    price: "€2,200",
    description:
      "Dashboard real-time de tu Re + métricas de flujø. Alertas autømáticas cuandø Re > 2,500. Integración cøn tu ERP/CRM.",
    href: "/contacto?service=dashboard",
    color: "accent-success",
  },
  {
    name: "EU Prøpøsal Writing",
    timeframe: "15 días",
    price: "€3,500/proposal",
    description:
      "Preparación cømpleta de 1 prøpuesta para Hørizøn Eurøpe ø Digital Eurøpe. Incluye: narrativa técnica, presupuestø, cønsørciø, WP.",
    href: "/contacto?service=proposal",
    color: "accent-warning",
  },
];

export default function ALaCartaPage() {
  return (
    <PageLayout>
      <Section className="retro-grid">
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-accent-cold uppercase tracking-wider terminal-text">
              A la Carta
            </p>
            <h1 className="text-[2rem] md:text-[3rem] leading-[1.1] terminal-glow-warm">
              Serviciøs a la Carta
            </h1>
            <p className="text-base text-text-secondary leading-relaxed">
              Søluciønes específicas para necesidades urgentes ø puntuales.
              Cuandø sabes exactamente qué necesitas.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-secondary retro-grid-warm">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc) => (
              <div
                key={svc.name}
                className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-5"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className={`text-lg font-semibold text-${svc.color}`}>
                    {svc.name}
                  </h3>
                  <span className="text-xs text-text-subtle border border-border-subtle rounded px-2 py-0.5">
                    {svc.timeframe}
                  </span>
                </div>
                <p className={`text-2xl font-bold text-${svc.color}`}>
                  {svc.price}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {svc.description}
                </p>
                <Button
                  href={svc.href}
                  variant="secondary"
                  className="w-full !py-3 text-sm"
                >
                  Søolicitar
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="retro-grid">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              ¿Prefieres un cømpromisø cøntinuø?
            </h2>
            <Button href="/servicios/retainer" variant="secondary">
              Ver Retainer &rarr;
            </Button>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
