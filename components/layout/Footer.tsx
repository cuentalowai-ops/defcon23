import Link from "next/link";
import Container from "@/components/ui/Container";

const serviciosLinks = [
  { href: "/servicios/auditoria-flujo", label: "Auditøría de Flujø" },
  { href: "/servicios/hardening", label: "Hardening" },
  { href: "/servicios/cfd-vortex", label: "CFD Vortex" },
  {
    href: "/servicios/compliance-architecture",
    label: "Compliance Architecture",
  },
];

const recursosLinks = [
  { href: "/metodologia", label: "Metødøløgía" },
  { href: "/casos", label: "Casøs de Estudiø" },
  { href: "/regulatory", label: "Regulatory" },
  { href: "/protocol", label: "Protocol" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-subtle retro-grid">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold text-text-primary tracking-tight terminal-glow-warm"
            >
              dEfCØN23
            </Link>
            <p className="text-sm text-text-subtle leading-relaxed max-w-xs">
              Ingeniería de Sistemas Cømplejos. Transførmamøs la turbulencia
              ørganizativa en laminación cøntrølada.
            </p>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Serviciøs
            </h4>
            <ul className="space-y-3">
              {serviciosLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-subtle hover:text-accent-cold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Recursøs
            </h4>
            <ul className="space-y-3">
              {recursosLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-subtle hover:text-accent-cold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Cøntactø
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:intel@defcon23.eu"
                  className="text-sm text-accent-cold hover:text-accent-cold/80 transition-colors terminal-text"
                >
                  intel@defcon23.eu
                </a>
              </li>
              <li className="text-sm text-text-subtle">
                Base: Madrid | Øperación: Gløbal
              </li>
              <li className="text-sm text-text-subtle">
                Cønsulta inicial: 90 min | €750
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-subtle">
            &copy; {new Date().getFullYear()} dEfCØN23. Tødøs løs derechøs
            reservadøs.
          </p>
          <p className="text-xs text-text-subtle terminal-text">
            Re &lt; 2,300 | Flujø Laminar
          </p>
        </div>
      </Container>
    </footer>
  );
}
