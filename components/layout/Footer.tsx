import Link from "next/link";
import Container from "@/components/ui/Container";

const serviciosLinks = [
  { href: "/servicios/auditoria-flujo", label: "Auditoría de Flujo" },
  { href: "/servicios/hardening", label: "Hardening" },
  { href: "/servicios/cfd-vortex", label: "CFD Vortex" },
  {
    href: "/servicios/compliance-architecture",
    label: "Compliance Architecture",
  },
];

const recursosLinks = [
  { href: "/metodologia", label: "Metodología" },
  { href: "/casos", label: "Casos de Estudio" },
  { href: "/regulatory", label: "Regulatory" },
  { href: "/protocol", label: "Protocol" },
];

const legalLinks = [
  { href: "/privacidad", label: "Política de Privacidad" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-subtle retro-grid">
      <Container className="py-10 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold text-text-primary tracking-tight terminal-glow-warm"
            >
              dEfCØN23
            </Link>
            <p className="text-sm text-text-subtle leading-relaxed max-w-xs">
              Ingeniería de Sistemas Complejos. Transformamos la turbulencia
              organizativa en laminación controlada.
            </p>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Servicios
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
              Recursos
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
              Contacto
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
                Base: Madrid | Operación: Global
              </li>
              <li className="text-sm text-text-subtle">
                Consulta inicial: 90 min | €750
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-xs text-text-subtle">
              &copy; {new Date().getFullYear()} dEfCØN23. Todos los derechos
              reservados.
            </p>
            <div className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-text-subtle hover:text-accent-cold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/company/defcon23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-subtle hover:text-accent-cold transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/defcon23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-subtle hover:text-accent-cold transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://x.com/defcon23eu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-subtle hover:text-accent-cold transition-colors"
              aria-label="X (Twitter)"
            >
              X
            </a>
          </div>
          <p className="text-xs text-text-subtle terminal-text">
            Re &lt; 2,300 | Flujo Laminar
          </p>
        </div>
      </Container>
    </footer>
  );
}
