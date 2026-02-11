import Link from "next/link";
import Container from "@/components/ui/Container";
import ComplianceBadges from "@/components/ui/ComplianceBadges";
import { Linkedin, Github, Twitter, Mail, MapPin, Clock } from "lucide-react";

const empresaLinks = [
  { href: "/metodologia", label: "Metodología" },
  { href: "/casos", label: "Casos de Estudio" },
  { href: "/operator", label: "Operator" },
  { href: "/contacto", label: "Contacto" },
];

const serviciosLinks = [
  { href: "/servicios/fase-1", label: "Intelligence Brief" },
  { href: "/servicios/fase-2", label: "Structural Integrity" },
  { href: "/servicios/fase-3", label: "Vortex Engineering" },
  { href: "/servicios/hardening", label: "Hardening Estructural" },
  { href: "/servicios/cfd-vortex", label: "CFD Vortex" },
  { href: "/servicios/compliance-architecture", label: "Compliance Architecture" },
];

const legalLinks = [
  { href: "/politica-privacidad", label: "Política de Privacidad" },
  { href: "/politica-cookies", label: "Política de Cookies" },
  { href: "/terminos-condiciones", label: "Términos y Condiciones" },
  { href: "/privacidad", label: "Privacidad (Página)" },
  { href: "/ens-certificacion", label: "ENS Certificación" },
  { href: "/ens/politica-seguridad-ens.pdf", label: "Política ENS" },
];

const socialLinks = [
  { href: "https://linkedin.com/company/defcon23", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/defcon23", label: "GitHub", icon: Github },
  { href: "https://x.com/defcon23eu", label: "X (Twitter)", icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-subtle">
      <Container className="py-12 md:py-16 lg:py-20">
        {/* Sección 1 + 2: Empresa & Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Empresa */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="text-2xl font-bold text-text-primary tracking-tight terminal-glow-warm glitch-text inline-block"
              data-text="dEfCØN23"
            >
              dEfCØN23
            </Link>
            <p className="text-sm text-text-subtle leading-relaxed max-w-xs">
              Ingeniería de Sistemas Complejos. Transformamos la turbulencia
              organizativa en laminación controlada.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-sm text-text-subtle">
                <Mail size={14} className="text-accent-cold shrink-0" />
                <a href="mailto:intel@defcon23.eu" className="hover:text-accent-cold transition-colors">
                  intel@defcon23.eu
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-subtle">
                <MapPin size={14} className="text-accent-cold shrink-0" />
                <span>Madrid · Operación Global</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-subtle">
                <Clock size={14} className="text-accent-cold shrink-0" />
                <span>Consulta inicial: 90 min · €750</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg text-text-subtle hover:text-accent-cold hover:bg-accent-cold/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Servicios */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold text-text-primary uppercase tracking-widest">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {serviciosLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-subtle hover:text-accent-cold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cold rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold text-text-primary uppercase tracking-widest">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {empresaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-subtle hover:text-accent-cold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cold rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sección 3: Compliance — glassmorphism card */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border-subtle bg-bg-primary/60 backdrop-blur-md p-5 space-y-4">
              <h4 className="text-xs font-semibold text-text-primary uppercase tracking-widest">
                Compliance &amp; Legal
              </h4>

              <ComplianceBadges layout="vertical" />

              <div className="border-t border-border-subtle pt-3 space-y-2">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-xs text-text-subtle hover:text-accent-cold transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 md:mt-16 pt-6 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-subtle">
            &copy; {new Date().getFullYear()} dEfCØN23. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-text-subtle terminal-text">
            Re &lt; 2,300 · Flujo Laminar
          </p>
        </div>
      </Container>
    </footer>
  );
}
