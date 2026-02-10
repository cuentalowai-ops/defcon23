"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const timelineEvents = [
  {
    date: "Oct 2024",
    label: "NIS2",
    status: "Activo",
    detail: "Aplica a 10,000+ entidades España",
    active: true,
  },
  {
    date: "Ene 2025",
    label: "DORA",
    status: "Activo",
    detail: "Entidades financieras",
    active: true,
  },
  {
    date: "2025",
    label: "ENS + Ley Ciberseguridad",
    status: "Activo",
    detail: "Transposición NIS2 a España",
    active: true,
  },
  {
    date: "2026-2027",
    label: "AI Act + EUDI Wallet",
    status: "Próximo",
    detail: "Sistemas IA alto riesgo",
    active: false,
  },
  {
    date: "2027",
    label: "CRA",
    status: "Próximo",
    detail: "Cyber Resilience Act",
    active: false,
  },
  {
    date: "2028-2030",
    label: "Enforcement Peak",
    status: "Futuro",
    detail: "Máxima presión regulatoria EU+ES",
    active: false,
  },
];

const regulations = [
  // ── EU ──
  {
    name: "NIS2",
    deadline: "Oct 2024",
    target: "Servicios esenciales/importantes",
    penalty: "€10M o 2% facturación",
    opportunity: "Quien no cumple, sale del mercado",
    scope: "EU",
  },
  {
    name: "DORA",
    deadline: "Ene 2025",
    target: "Entidades financieras",
    penalty: "€10M o 5% facturación",
    opportunity: "Reporte < 4h → tú < 2h",
    scope: "EU",
  },
  {
    name: "AI Act",
    deadline: "2026-2027",
    target: "Sistemas IA alto riesgo",
    penalty: "€35M o 7% facturación",
    opportunity: "Transparencia algorítmica = barrera entrada",
    scope: "EU",
  },
  {
    name: "CRA",
    deadline: "2027",
    target: "Productos con elementos digitales",
    penalty: "€15M o 2.5% facturación",
    opportunity: "Seguridad by design obligatoria",
    scope: "EU",
  },
  {
    name: "eIDAS 2.0",
    deadline: "2026-2027",
    target: "Identidad digital, servicios de confianza",
    penalty: "Según estado miembro",
    opportunity: "EUDI Wallet = nueva infraestructura digital",
    scope: "EU",
  },
  // ── ESPAÑA ──
  {
    name: "ENS (RD 311/2022)",
    deadline: "Activo",
    target: "Administración pública + proveedores",
    penalty: "Exclusión de contratación pública",
    opportunity: "Certificación CCN = acceso a contratos públicos",
    scope: "ES",
  },
  {
    name: "RGPD / LORPD-GDD",
    deadline: "Activo",
    target: "Toda entidad que trate datos personales",
    penalty: "€20M o 4% facturación",
    opportunity: "Privacy by design = confianza del cliente",
    scope: "ES",
  },
  {
    name: "Ley de Ciberseguridad",
    deadline: "2025",
    target: "Transposición NIS2 a España",
    penalty: "Hasta €10M",
    opportunity: "Adelantarse = ventaja competitiva",
    scope: "ES",
  },
  {
    name: "Ley Crea y Crece",
    deadline: "Activo",
    target: "PYMEs, facturación electrónica",
    penalty: "Hasta €10K por factura",
    opportunity: "Digitalización obligatoria = eficiencia",
    scope: "ES",
  },
  {
    name: "Ley Antifraude (11/2021)",
    deadline: "Activo",
    target: "Software de contabilidad y facturación",
    penalty: "€50K por software no certificado",
    opportunity: "Software compliant = diferenciación",
    scope: "ES",
  },
  {
    name: "Ley de Startups",
    deadline: "Activo",
    target: "Startups y emprendedores",
    penalty: "N/A (incentivos)",
    opportunity: "Beneficios fiscales + sandbox regulatorio",
    scope: "ES",
  },
  {
    name: "PBC/FT (Ley 10/2010)",
    deadline: "Activo",
    target: "Suјetos obligados (finanzas, legal, inmobiliaria)",
    penalty: "Hasta €10M (infracción muy grave)",
    opportunity: "AML compliance = reducción de alertas",
    scope: "ES",
  },
];

function TimelineNode({
  event,
  index,
}: {
  event: (typeof timelineEvents)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-6");
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative space-y-3 opacity-0 translate-y-6 transition-all duration-600"
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Dot */}
      <div
        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
          event.active
            ? "border-accent-success bg-accent-success/20 animate-[glow-pulse_2s_ease-in-out_infinite]"
            : "border-border-visible bg-bg-tertiary"
        }`}
        style={
          event.active
            ? {
                boxShadow:
                  "0 0 10px rgba(82, 181, 168, 0.4), 0 0 20px rgba(82, 181, 168, 0.1)",
              }
            : {}
        }
      >
        <div
          className={`w-3 h-3 rounded-full ${
            event.active ? "bg-accent-success" : "bg-border-visible"
          }`}
        />
      </div>

      {/* Content */}
      <div>
        <p className="text-xs text-text-subtle">{event.date}</p>
        <p className="text-sm md:text-base font-semibold text-text-primary terminal-text break-words">
          {event.label}
        </p>
        <span
          className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${
            event.active
              ? "bg-accent-success/20 text-accent-success"
              : "bg-bg-tertiary text-text-subtle"
          }`}
        >
          {event.status}
        </span>
        <p className="text-sm text-text-subtle mt-2">{event.detail}</p>
      </div>
    </div>
  );
}

export default function RegulatoryTimeline() {
  return (
    <Section id="regulatory" className="retro-grid-warm">
      <Container>
        <div className="space-y-10 md:space-y-16">
          {/* Headline */}
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-cold terminal-text">
              LANDSCAPE
            </p>
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              El Paisaje Regulatørio 2024–2030
            </h2>
            <p className="text-sm md:text-base text-text-secondary">
              Tu Competencia Se Ahoga.{" "}
              <span className="text-accent-warm terminal-text-warm">
                Tú Construyes un Moat.
              </span>
            </p>
          </div>

          {/* Visual Timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute top-4 left-0 right-0 h-px bg-border-subtle hidden md:block" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {timelineEvents.map((event, i) => (
                <TimelineNode key={event.label} event={event} index={i} />
              ))}
            </div>
          </div>

          {/* Regulation Tables — side by side on desktop */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8">

          {/* EU Regulations Table */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-accent-cold terminal-text">
              Normativa Europea (EU)
            </h3>
            <div className="overflow-x-auto neon-card rounded-xl p-1">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-visible">
                    <th className="text-left py-3 pr-3 pl-3 text-text-primary font-semibold text-xs">
                      Normativa
                    </th>
                    <th className="text-left py-3 pr-3 text-text-primary font-semibold text-xs">
                      Deadline
                    </th>
                    <th className="text-left py-3 pr-3 text-text-primary font-semibold text-xs hidden md:table-cell xl:hidden 2xl:table-cell">
                      Aplica a
                    </th>
                    <th className="text-left py-3 pr-3 text-text-primary font-semibold text-xs">
                      Penalización
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {regulations
                    .filter((r) => r.scope === "EU")
                    .map((reg) => (
                      <tr
                        key={reg.name}
                        className="border-b border-border-subtle last:border-0 hover:bg-bg-tertiary/50 transition-colors"
                      >
                        <td className="py-3 pr-3 pl-3 text-accent-cold font-semibold terminal-text text-xs">
                          {reg.name}
                        </td>
                        <td className="py-3 pr-3 text-text-secondary text-xs">
                          {reg.deadline}
                        </td>
                        <td className="py-3 pr-3 text-text-subtle text-xs hidden md:table-cell xl:hidden 2xl:table-cell">
                          {reg.target}
                        </td>
                        <td className="py-3 pr-3 text-accent-danger text-xs">
                          {reg.penalty}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Spanish Regulations Table */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-accent-warm terminal-text-warm">
              Normativa Española (ES)
            </h3>
            <div className="overflow-x-auto neon-card rounded-xl p-1">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-visible">
                    <th className="text-left py-3 pr-3 pl-3 text-text-primary font-semibold text-xs">
                      Normativa
                    </th>
                    <th className="text-left py-3 pr-3 text-text-primary font-semibold text-xs">
                      Estado
                    </th>
                    <th className="text-left py-3 pr-3 text-text-primary font-semibold text-xs hidden md:table-cell xl:hidden 2xl:table-cell">
                      Aplica a
                    </th>
                    <th className="text-left py-3 pr-3 text-text-primary font-semibold text-xs">
                      Penalización
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {regulations
                    .filter((r) => r.scope === "ES")
                    .map((reg) => (
                      <tr
                        key={reg.name}
                        className="border-b border-border-subtle last:border-0 hover:bg-bg-tertiary/50 transition-colors"
                      >
                        <td className="py-3 pr-3 pl-3 text-accent-warm font-semibold terminal-text-warm text-xs">
                          {reg.name}
                        </td>
                        <td className="py-3 pr-3 text-text-secondary text-xs">
                          {reg.deadline}
                        </td>
                        <td className="py-3 pr-3 text-text-subtle text-xs hidden md:table-cell xl:hidden 2xl:table-cell">
                          {reg.target}
                        </td>
                        <td className="py-3 pr-3 text-accent-danger text-xs">
                          {reg.penalty}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          </div>{/* close grid */}
        </div>
      </Container>
    </Section>
  );
}
