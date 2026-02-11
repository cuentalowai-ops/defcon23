"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, Shield, Cpu, Scale, Brain } from "lucide-react";
import Container from "@/components/ui/Container";
import EnsBadge from "@/components/ui/EnsBadge";
import MobileNav from "@/components/layout/MobileNav";

const serviceLinks = [
  {
    href: "/servicios/fase-1",
    label: "Intelligence Brief",
    desc: "OSINT + Threat Modeling",
    icon: Shield,
    price: "€500",
  },
  {
    href: "/servicios/fase-2",
    label: "Structural Integrity",
    desc: "Auditoría + Hardening",
    icon: Cpu,
    price: "€1,000",
  },
  {
    href: "/servicios/fase-3",
    label: "Vortex Engineering",
    desc: "CFD + EU Funds",
    icon: Scale,
    price: "Desde €3K",
  },
  {
    href: "/servicios/hardening",
    label: "Hardening Estructural",
    desc: "Zero-Trust Architecture",
    icon: Brain,
    price: "Custom",
  },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/casos", label: "Casos" },
  { href: "/operator", label: "Operator" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* close dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* close mobile nav on route change */
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg-primary/95 backdrop-blur-md shadow-[0_1px_10px_rgba(74,158,255,0.12)]"
            : "bg-bg-primary/80 backdrop-blur-sm"
        } border-b border-border-subtle`}
      >
        <Container className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-text-primary tracking-tight hover:text-accent-warm transition-colors glitch-text terminal-glow-warm"
            data-text="dEfCØN23"
          >
            dEfCØN23
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-6"
            role="navigation"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm py-2 px-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cold rounded ${
                  pathname === link.href
                    ? "text-accent-cold terminal-text"
                    : "text-text-secondary hover:text-accent-cold active:text-teal-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Servicios dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className={`flex items-center gap-1 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cold rounded ${
                  pathname.startsWith("/servicios")
                    ? "text-accent-cold terminal-text"
                    : "text-text-secondary hover:text-accent-cold"
                }`}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                Servicios
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-80 transition-all duration-200 ${
                  dropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-bg-secondary/95 backdrop-blur-lg border border-border-subtle rounded-xl shadow-2xl p-2 space-y-1">
                  {serviceLinks.map((svc) => {
                    const Icon = svc.icon;
                    return (
                      <Link
                        key={svc.href}
                        href={svc.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-bg-tertiary transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-accent-cold/10 text-accent-cold group-hover:bg-accent-cold/20 transition-colors shrink-0 mt-0.5">
                          <Icon size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-text-primary">
                              {svc.label}
                            </span>
                            <span className="text-[10px] text-accent-warm font-semibold">
                              {svc.price}
                            </span>
                          </div>
                          <p className="text-xs text-text-subtle mt-0.5">
                            {svc.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="border-t border-border-subtle mt-1 pt-1">
                    <Link
                      href="/servicios"
                      className="block text-center text-xs text-accent-cold hover:text-accent-cold/80 py-2 transition-colors"
                    >
                      Ver arsenal completo →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <EnsBadge size="sm" />

            {/* Gradient CTA */}
            <Link
              href="/calculadora-reynolds"
              className="text-sm px-5 py-2.5 rounded-lg bg-gradient-warm text-bg-primary font-semibold hover:scale-105 active:scale-95 transition-transform will-change-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-warm glow-coral"
            >
              Calcular Reynolds
            </Link>
          </nav>

          {/* Mobile hamburger — 44px touch target */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-text-primary p-3 -mr-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Abrir menú"
            aria-expanded={mobileOpen}
          >
            <Menu size={24} />
          </button>
        </Container>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
