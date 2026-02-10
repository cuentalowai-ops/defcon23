"use client";

import { useEffect, useRef } from "react";
import { Shield, Cpu, Scale } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const phases = [
  {
    icon: Shield,
    phase: "FASE I",
    title: "Intelligence Brief & Vetting",
    subtitle: "Shock Test",
    price: "€500",
    duration: "5-7 días",
    description:
      "OSINT + Threat Modeling. Asimetría de información antes de cualquier decisión.",
    badges: ["OSINT", "Threat Modeling", "Vetting"],
    href: "/servicios/fase-1",
    color: "accent-warm",
    glowClass: "terminal-text-warm",
  },
  {
    icon: Cpu,
    phase: "FASE II",
    title: "Structural Integrity & Compliance",
    subtitle: "Laminar Flow",
    price: "€1,000",
    duration: "10-15 días",
    description:
      "Auditoría + Hardening + Compliance Architecture. De turbulento a laminar.",

    badges: ["Zero Trust", "NIS2", "Legal Hardening"],
    href: "/servicios/fase-2",
    color: "accent-cold",
    glowClass: "terminal-text",
  },
  {
    icon: Scale,
    phase: "FASE III",
    title: "Vortex Engineering & EU Funds",
    subtitle: "Vortex Scale",
    price: "Desde €3,000",
    duration: "20-30 días",
    description:
      "CFD Engineering + EU Funds Capture + eIDAS 2.0. Escala con backing institucional.",
    badges: ["eIDAS 2.0", "EU Subsidies", "EUDI Wallet"],
    href: "/servicios/fase-3",
    color: "accent-success",
    glowClass: "terminal-text",
  },
];

function PhaseCard({
  phase,
  index,
}: {
  phase: (typeof phases)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = phase.icon;

  return (
    <div
      ref={ref}
      className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-5 flex flex-col h-full opacity-0 translate-y-8 transition-all duration-700"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Phase label + icon */}
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg bg-${phase.color}/10`}>
          <Icon size={20} className={`text-${phase.color}`} />
        </div>
        <span
          className={`text-xs font-bold uppercase tracking-widest text-${phase.color} ${phase.glowClass}`}
        >
          {phase.phase}
        </span>
      </div>

      {/* Title */}
      <div>
        <h3 className="text-base md:text-lg font-semibold leading-tight">
          {phase.title}
        </h3>
        <p className="text-sm text-text-subtle mt-1">{phase.subtitle}</p>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-2">
        <span className={`text-2xl font-bold text-${phase.color} ${phase.glowClass}`}>
          {phase.price}
        </span>
        <span className="text-xs text-text-subtle">{phase.duration}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed">
        {phase.description}
      </p>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {phase.badges.map((b) => (
          <span
            key={b}
            className="text-[0.7rem] px-2 py-1 rounded bg-bg-primary border border-border-subtle text-text-subtle"
          >
            {b}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-auto pt-4">
        <Button
          href={phase.href}
          variant="secondary"
          className="w-full !py-3 text-sm"
        >
          Ver {phase.phase}
        </Button>
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <Section id="servicios" className="bg-bg-secondary retro-grid">
      <Container>
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-cold terminal-text mb-2">
              ARSENAL
            </p>
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Prøtøcølo de 3 Fases
            </h2>
            <p className="text-text-secondary text-sm max-w-lg mx-auto">
              De la inteligencia táctica al escalado estratégico
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {phases.map((p, i) => (
              <PhaseCard key={p.phase} phase={p} index={i} />
            ))}
          </div>

          <div className="text-center pt-4">
            <Button href="/servicios" variant="secondary">
              Ver arsenal completo &rarr;
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
