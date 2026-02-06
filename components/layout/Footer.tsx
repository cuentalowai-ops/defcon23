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

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-subtle">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-text-primary tracking-tight"
            >
              DEFCON 23
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
                    className="text-sm text-text-subtle hover:text-text-primary transition-colors"
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
                    className="text-sm text-text-subtle hover:text-text-primary transition-colors"
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
                  className="text-sm text-accent-cold hover:text-accent-cold/80 transition-colors"
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
        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-subtle">
            &copy; {new Date().getFullYear()} DEFCON 23. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-text-subtle font-[family-name:var(--font-jetbrains-mono)]">
            Re &lt; 2,300 | Flujo Laminar
          </p>
        </div>
      </Container>
    </footer>
  );
}
