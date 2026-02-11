"use client";

import { useState, useEffect, useRef } from "react";
import { Shield, Cpu, Scale } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import PricingTable from "@/components/ui/PricingTable";

/* ─── Boot sequence ─── */
const bootLines = [
  { text: "> INICIALIZANDO ARSENAL...", delay: 0 },
  { text: "> CARGANDO PROTOCOLOS DE INTELIGENCIA...", delay: 300 },
  { text: "> SISTEMA: OPERATIONAL", delay: 600 },
];

/* ─── Phase cards data ─── */
const phases = [
  {
    icon: Shield,
    phase: "FASE I",
    title: "Intelligence Brief & Vetting",
    subtitle: "(Shock Test)",
    price: "€500",
    duration: "5-7 días",
    description:
      "Antes de cualquier colisión (negociación o contratación), la asimetría de información es el único factor que garantiza el control. Aplicamos protocolos OSINT y modelado de amenazas STRIDE/DREAD.",
    deliverables: [
      "Dossier de Inteligencia (20 páginas)",
      "45 min de Briefing Técnico",
    ],
    badges: ["OSINT", "Threat Modeling", "Vetting", "Leak Detection"],
    href: "/servicios/fase-1",
    color: "accent-warm",
    glowClass: "terminal-text-warm",
  },
  {
    icon: Cpu,
    phase: "FASE II",
    title: "Structural Integrity & Compliance",
    subtitle: "(Laminar Flow)",
    price: "€1,000",
    priceNote: "incluye Fase I",
    duration: "10-15 días",
    description:
      "Reducimos la inductancia (resistencia) legal y técnica. Alineamos la estructura societaria con requisitos de Hacienda y normativa europea NIS2/GDPR. Implementamos arquitectura Zero Trust.",
    deliverables: [
      "Auditoría de Sistemas (50 páginas)",
      "60 min de Estrategia Operativa",
    ],
    badges: ["Zero Trust", "Tax Compliance", "NIS2", "Legal Hardening"],
    href: "/servicios/fase-2",
    color: "accent-cold",
    glowClass: "terminal-text",
  },
  {
    icon: Scale,
    phase: "FASE III",
    title: "Vortex Engineering & EU Funds",
    subtitle: "(Vortex Scale)",
    price: "Desde €3,000",
    priceNote: "incluye I y II",
    duration: "20-30 días",
    description:
      "Transformamos el cumplimiento normativo en un Amplificador Económico. Mapeo de informes JRC, COP y regulación eIDAS 2.0 para posicionar tu proyecto en el núcleo de subvenciones europeas.",
    deliverables: [
      "Mapa de Captura de Capital",
      "Alineamiento Legislativo Completo",
    ],
    badges: ["eIDAS 2.0", "EU Subsidies", "CCN Certification", "EUDI Wallet"],
    href: "/servicios/fase-3",
    color: "accent-success",
    glowClass: "terminal-text",
  },
];

/* ─── Case metrics ─── */
const caseMetrics = [
  {
    label: "Caso A",
    sector: "Hostelería + Arte",
    reBefore: "4,200",
    reAfter: "1,850",
    highlight: "Alertas: -83%",
    roi: "ROI 1,011%",
    duration: "24 meses",
  },
  {
    label: "Caso B",
    sector: "Legal + Consultoría",
    reBefore: "3,800",
    reAfter: "2,100",
    highlight: "Presión: -91%",
    roi: "ROI 680%",
    duration: "18 meses",
  },
  {
    label: "Caso C",
    sector: "Marketplace P2P",
    reBefore: "5,600",
    reAfter: "1,650",
    highlight: "Alertas AML: -94%",
    roi: "ROI 1,340%",
    duration: "12 meses",
  },
];

/* ─── Packages ─── */
const packages = [
  {
    name: "Startup",
    price: "€750",
    description: "Intelligence + Auditoría + Gap Analysis + 1 sesión",
    color: "accent-warm",
    href: "/servicios/paquetes",
  },
  {
    name: "Scale-Up",
    price: "€2,500",
    description: "Fase I + II completo + 2 sesiones estratégicas",
    color: "accent-cold",
    href: "/servicios/paquetes",
  },
  {
    name: "Enterprise",
    price: "€8,500",
    description: "Todo incluido + Dashboard + Soporte 3 meses",
    color: "accent-success",
    href: "/servicios/paquetes",
  },
];

/* ─── Phase Card component ─── */
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
      className="neon-card rounded-2xl p-6 md:p-8 bg-bg-tertiary space-y-5 flex flex-col opacity-0 translate-y-8 transition-all duration-700"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Phase label */}
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
        <p className="text-sm text-text-subtle mt-1">
          {phase.subtitle}
          <span className="animate-[blink_1s_step-end_infinite] text-accent-warm ml-1">
            █
          </span>
        </p>
      </div>

      {/* Description */}
      {phase.description && (
        <p className="text-sm text-text-subtle leading-relaxed">
          {phase.description}
        </p>
      )}

      {/* Price + Duration */}
      <div className="flex items-baseline gap-3">
        <span
          className={`text-2xl font-bold text-${phase.color} ${phase.glowClass}`}
        >
          {phase.price}
        </span>
        <span className="text-xs text-text-subtle">
          {phase.duration}
          {phase.priceNote && ` · ${phase.priceNote}`}
        </span>
      </div>

      {/* Deliverables */}
      <ul className="space-y-2">
        {phase.deliverables.map((d, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
            <span className="text-accent-success mt-0.5 text-xs">&#10003;</span>
            {d}
          </li>
        ))}
      </ul>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 pt-2">
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
          Ver detalles {phase.phase}
        </Button>
      </div>
    </div>
  );
}

/* ─── Main page ─── */
export default function ServiciosPage() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    bootLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay);
    });
    setTimeout(() => setShowContent(true), 900);
  }, []);

  return (
    <PageLayout>
      {/* Hero */}
      <Section className="retro-grid">
        <Container>
          <div className="max-w-3xl space-y-6">
            {/* Boot lines */}
            <div className="space-y-1 mb-6">
              {bootLines.slice(0, visibleLines).map((line, i) => (
                <p
                  key={i}
                  className="text-xs text-accent-cold terminal-text boot-line"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {line.text}
                </p>
              ))}
            </div>

            <div
              className={`space-y-6 transition-all duration-700 ${
                showContent
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-sm text-accent-cold uppercase tracking-wider terminal-text">
                Servicios
              </p>
              <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1] terminal-glow-warm">
                Arsenal de Servicios
              </h1>
              <h2 className="text-[1.25rem] md:text-[1.75rem] leading-[1.2] text-text-secondary">
                Inteligencia Operativa para Escalar
              </h2>
              <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
                Protocolos de inteligencia y compliance diseñados para eliminar
                fricción y capturar oportunidades.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3 Phase Cards */}
      <Section className="bg-bg-secondary retro-grid-warm">
        <Container>
          <div className="space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-center text-gradient-warm">
              3 Fases. Un Protocolo.
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {phases.map((p, i) => (
                <PhaseCard key={p.phase} phase={p} index={i} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Comparison Table */}
      <Section className="retro-grid">
        <Container>
          <div className="space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-center text-gradient-warm">
              Matriz de Servicios
            </h2>
            <div className="neon-card rounded-2xl p-4 md:p-6 bg-bg-secondary">
              <PricingTable />
            </div>
          </div>
        </Container>
      </Section>

      {/* Metrics */}
      <Section className="bg-bg-secondary retro-grid-warm">
        <Container>
          <div className="space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-center text-gradient-warm">
              Métricas de Éxito (Casos Reales)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseMetrics.map((c) => (
                <div
                  key={c.label}
                  className="neon-card rounded-2xl p-6 bg-bg-tertiary space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-wider text-text-subtle">
                      {c.label}
                    </p>
                    <span className="text-xs text-text-subtle">{c.duration}</span>
                  </div>
                  <p className="text-sm text-accent-cold">{c.sector}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg text-accent-danger terminal-text-warm">
                      Re {c.reBefore}
                    </span>
                    <span className="text-text-subtle">&rarr;</span>
                    <span className="text-lg text-accent-success terminal-text">
                      {c.reAfter}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">{c.highlight}</p>
                  <p className="text-xl font-bold text-accent-warm terminal-text-warm">
                    {c.roi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Packages */}
      <Section className="retro-grid">
        <Container>
          <div className="space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-center text-gradient-warm">
              Paquetes Personalizados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="neon-card rounded-2xl p-6 bg-bg-tertiary space-y-4 text-center"
                >
                  <p className={`text-sm font-bold uppercase tracking-wider text-${pkg.color}`}>
                    {pkg.name}
                  </p>
                  <p className={`text-3xl font-bold text-${pkg.color}`}>
                    {pkg.price}
                  </p>
                  <p className="text-sm text-text-secondary">{pkg.description}</p>
                  <Button
                    href={pkg.href}
                    variant="secondary"
                    className="w-full !py-3 text-sm"
                  >
                    Ver paquetes
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* A la carta + Retainer */}
      <Section className="bg-bg-secondary retro-grid-warm">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="neon-card rounded-2xl p-6 md:p-8 bg-bg-tertiary space-y-4">
              <h3 className="text-lg font-semibold text-accent-cold terminal-text">
                Servicios a la Carta
              </h3>
              <p className="text-sm text-text-subtle leading-relaxed">
                Soluciones específicas para necesidades urgentes o puntuales.
                Auditoría Flash (24h), Hardening Express (48h), Dashboard
                Custom, EU Proposal Writing.
              </p>
              <Button
                href="/servicios/a-la-carta"
                variant="secondary"
                className="!py-3 text-sm"
              >
                Ver todos &rarr;
              </Button>
            </div>
            <div className="neon-card rounded-2xl p-6 md:p-8 bg-bg-tertiary space-y-4">
              <h3 className="text-lg font-semibold text-accent-cold terminal-text">
                Modelo Retainer
              </h3>
              <p className="text-sm text-text-subtle leading-relaxed">
                €1,500/mes (6 meses mínimo). Monitorización continua de Re,
                alertas normativas, sesión mensual, soporte prioritario.
              </p>
              <Button
                href="/servicios/retainer"
                variant="secondary"
                className="!py-3 text-sm"
              >
                Ver detalles &rarr;
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="retro-grid">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
              ¿Listo para reducir tu Número de Reynolds?
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Trabajamos con ecosistemas multi-nodo, holdings que requieren
              reducción de viscosidad regulatoria, y organizaciones suјetas a
              NIS2/DORA/AI Act (EU) o ENS (España).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/consulta" variant="primary">
                Agenda Diagnóstico Gratuito &rarr;
              </Button>
              <Button href="/contacto" variant="secondary">
                Contacto directo
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
