"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";

const navLinks = [
  { href: "/metodologia", label: "Metødøløgía" },
  { href: "/servicios", label: "Serviciøs" },
  { href: "/casos", label: "Casøs" },
  { href: "/operator", label: "Operator" },
  { href: "/regulatory", label: "Regulatory" },
  { href: "/protocol", label: "Protocol" },
  { href: "/contacto", label: "Cøntactø" },
  { href: "/consulta", label: "Reservar Cønsulta", cta: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg-primary/95 backdrop-blur-md border-b border-accent-cold/20"
          : "bg-bg-primary/80 backdrop-blur-sm border-b border-border-subtle"
      }`}
      style={
        scrolled
          ? {
              boxShadow:
                "0 1px 10px rgba(74, 158, 255, 0.15), 0 1px 20px rgba(74, 158, 255, 0.05)",
            }
          : {}
      }
      role="navigation"
      aria-label="Navegación principal"
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

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                "cta" in link && link.cta
                  ? "text-sm px-4 py-2.5 rounded-lg bg-accent-warm text-bg-primary font-semibold hover:scale-105 active:scale-95 transition-all"
                  : "text-sm text-text-secondary hover:text-accent-cold transition-colors terminal-text"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-text-primary p-3 -mr-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-bg-secondary border-t border-border-subtle">
          <Container className="py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base text-text-secondary hover:text-accent-cold transition-colors py-3 min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </nav>
  );
}
