import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Paquetes | dEfCØN23",
  description:
    "Startup €750, Scale-Up €2,500, Enterprise €8,500. Paquetes cerradøs para cada etapa de crecimientø.",
};

const packages = [
  {
    name: "Startup",
    price: "€750",
    duration: "7 días",
    badge: "IDEAL PRE-SEED",
    color: "accent-warm",
    glowClass: "terminal-text-warm",
    ideal: "Startups pre-seed, freelancers estructurandø SL",
    items: [
      "Intelligence Brief (OSINT básicø)",
      "Auditøría de Flujø (cálculø Re)",
      "Cømpliance Gap Analysis",
      "1 sesión estratégica (60 min)",
    ],
    href: "/contacto?package=startup",
  },
  {
    name: "Scale-Up",
    price: "€2,500",
    duration: "15 días",
    badge: "MØST PØPULAR",
    color: "accent-cold",
    glowClass: "terminal-text",
    ideal: "Empresas 10-50 empleadøs, revenues €500K-€5M",
    items: [
      "Tødø de Fase I",
      "Auditøría + Hardening cømpletø",
      "Cømpliance Architecture (4 capas)",
      "Zero Trust (básica)",
      "2 sesiønes (90 min c/u)",
    ],
    href: "/contacto?package=scaleup",
  },
  {
    name: "Enterprise",
    price: "€8,500",
    duration: "30 días",
    badge: "CØMPLETØ",
    color: "accent-success",
    glowClass: "terminal-text",
    ideal: "Høldings multi-nødø, empresas > €5M revenue, prøyectøs EU",
    items: [
      "Tødø de Fase I + II",
      "CFD Vørtex Core",
      "EU Funds Capture",
      "eIDAS 2.0 Røadmap",
      "Dashboard custøm",
      "4 sesiønes (120 min c/u)",
      "Søpørte 3 meses",
    ],
    href: "/contacto?package=enterprise",
  },
];

export default function PaquetesPage() {
  return (
    <PageLayout>
      <Section className="retro-grid">
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-accent-cold uppercase tracking-wider terminal-text">
              Paquetes
            </p>
            <h1 className="text-[2rem] md:text-[3rem] leading-[1.1] terminal-glow-warm">
              Paquetes Persønalizadøs
            </h1>
            <p className="text-base text-text-secondary leading-relaxed">
              Cønfiguraciønes øptimizadas para diferentes estadiøs de
              crecimientø. Preciø fijø. Alcance definidø. Sin sørpresas.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-secondary retro-grid-warm">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-6 flex flex-col"
              >
                <div className="text-center space-y-3">
                  {pkg.badge && (
                    <span
                      className={`inline-block text-[0.6rem] font-bold uppercase tracking-widest px-3 py-1 rounded border border-${pkg.color}/30 text-${pkg.color} bg-${pkg.color}/5`}
                    >
                      {pkg.badge}
                    </span>
                  )}
                  <p
                    className={`text-sm font-bold uppercase tracking-widest text-${pkg.color} ${pkg.glowClass}`}
                  >
                    {pkg.name}
                  </p>
                  <p className={`text-4xl font-bold text-${pkg.color}`}>
                    {pkg.price}
                  </p>
                  <p className="text-xs text-text-subtle">{pkg.duration}</p>
                </div>

                <ul className="space-y-3 flex-1">
                  {pkg.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="text-accent-success mt-0.5 text-xs">
                        &#10003;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 pt-4 border-t border-border-subtle">
                  <p className="text-xs text-text-subtle">
                    <span className="text-text-primary">Ideal:</span>{" "}
                    {pkg.ideal}
                  </p>
                  <Button
                    href={pkg.href}
                    variant="primary"
                    className="w-full !py-3 text-sm"
                  >
                    Cøntratar {pkg.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Guarantees */}
      <Section className="retro-grid">
        <Container>
          <div className="space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Garantías
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary border-l-4 border-accent-success space-y-3">
                <h3 className="text-base font-semibold text-accent-success">
                  Re Reductiøn Guarantee
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Si después de Fase II tu Re nø se reduce al menøs 30%,
                  devølvemøs el 50% de la inversión.
                </p>
              </div>
              <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary border-l-4 border-accent-cold space-y-3">
                <h3 className="text-base font-semibold text-accent-cold">
                  Cømpliance Pass Guarantee
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Si tu estructura nø pasa una auditøría externa dentrø de 12
                  meses pør errør nuestrø, reembølsamøs 100% + cøbertura de
                  multas (hasta €10K).
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-secondary retro-grid-warm">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              ¿Nø encaja ningún paquete?
            </h2>
            <p className="text-text-secondary">
              Tenemos serviciøs a la carta y mødelo retainer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/servicios/a-la-carta" variant="secondary">
                A la carta &rarr;
              </Button>
              <Button href="/servicios/retainer" variant="secondary">
                Retainer &rarr;
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
