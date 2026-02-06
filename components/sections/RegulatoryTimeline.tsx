"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const timelineEvents = [
  {
    date: "Oct 2024",
    label: "NIS2",
    status: "Activø",
    detail: "Aplica a 10,000+ entidades España",
    active: true,
  },
  {
    date: "Ene 2025",
    label: "DORA",
    status: "Activø",
    detail: "Entidades financieras",
    active: true,
  },
  {
    date: "2025",
    label: "ENS + Ley Ciberseguridad",
    status: "Activø",
    detail: "Transpøsición NIS2 a España",
    active: true,
  },
  {
    date: "2026-2027",
    label: "AI Act + EUDI Wallet",
    status: "Próximø",
    detail: "Sistemas IA altø riesgø",
    active: false,
  },
  {
    date: "2027",
    label: "CRA",
    status: "Próximø",
    detail: "Cyber Resilience Act",
    active: false,
  },
  {
    date: "2028-2030",
    label: "Enforcement Peak",
    status: "Futurø",
    detail: "Máxima presión regulatøria EU+ES",
    active: false,
  },
];

const regulations = [
  // ── EU ──
  {
    name: "NIS2",
    deadline: "Oct 2024",
    target: "Serviciøs esenciales/impørtantes",
    penalty: "€10M ø 2% facturación",
    opportunity: "Quien nø cumple, sale del mercadø",
    scope: "EU",
  },
  {
    name: "DORA",
    deadline: "Ene 2025",
    target: "Entidades financieras",
    penalty: "€10M ø 5% facturación",
    opportunity: "Repørte < 4h → tú < 2h",
    scope: "EU",
  },
  {
    name: "AI Act",
    deadline: "2026-2027",
    target: "Sistemas IA altø riesgø",
    penalty: "€35M ø 7% facturación",
    opportunity: "Transparencia algørítmica = barrera entrada",
    scope: "EU",
  },
  {
    name: "CRA",
    deadline: "2027",
    target: "Prøductøs cøn elementøs digitales",
    penalty: "€15M ø 2.5% facturación",
    opportunity: "Seguridad by design øbligatøria",
    scope: "EU",
  },
  {
    name: "eIDAS 2.0",
    deadline: "2026-2027",
    target: "Identidad digital, serviciøs de cønfianza",
    penalty: "Según estadø miembrø",
    opportunity: "EUDI Wallet = nueva infraestructura digital",
    scope: "EU",
  },
  // ── ESPAÑA ──
  {
    name: "ENS (RD 311/2022)",
    deadline: "Activø",
    target: "Administración pública + prøveedøres",
    penalty: "Exclusión de cøntratación pública",
    opportunity: "Certificación CCN = accesø a cøntratos públicøs",
    scope: "ES",
  },
  {
    name: "RGPD / LØRPD-GDD",
    deadline: "Activø",
    target: "Tøda entidad que trate datøs persønales",
    penalty: "€20M ø 4% facturación",
    opportunity: "Privacy by design = cønfianza del cliente",
    scope: "ES",
  },
  {
    name: "Ley de Ciberseguridad",
    deadline: "2025",
    target: "Transpøsición NIS2 a España",
    penalty: "Hasta €10M",
    opportunity: "Adelantarse = ventaja cømpetitiva",
    scope: "ES",
  },
  {
    name: "Ley Crea y Crece",
    deadline: "Activø",
    target: "PYMEs, facturación electrónica",
    penalty: "Hasta €10K pør factura",
    opportunity: "Digitalización øbligatøria = eficiencia",
    scope: "ES",
  },
  {
    name: "Ley Antifraude (11/2021)",
    deadline: "Activø",
    target: "Søftware de cøntabilidad y facturación",
    penalty: "€50K pør søftware nø certificadø",
    opportunity: "Søftware cømpliant = diferenciación",
    scope: "ES",
  },
  {
    name: "Ley de Startups",
    deadline: "Activø",
    target: "Startups y emprendedøres",
    penalty: "N/A (incentivøs)",
    opportunity: "Beneficiøs fiscales + sandbox regulatøriø",
    scope: "ES",
  },
  {
    name: "PBC/FT (Ley 10/2010)",
    deadline: "Activø",
    target: "Suјetøs øbligadøs (finanzas, legal, inmøbiliaria)",
    penalty: "Hasta €10M (infracción muy grave)",
    opportunity: "AML cømpliance = reducción de alertas",
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
      ([entry]) => {
        if (entry.isIntersecting) {
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
        <p className="text-base font-semibold text-text-primary terminal-text">
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
    <Section id="regulatory" className="retro-grid">
      <Container>
        <div className="space-y-16">
          {/* Headline */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              El Paisaje Regulatøriø 2024–2030
            </h2>
            <p className="text-lg text-text-secondary">
              Tu Cømpetencia Se Ahøga.{" "}
              <span className="text-accent-warm terminal-text-warm">
                Tú Cønstruyes un Moat.
              </span>
            </p>
          </div>

          {/* Visual Timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute top-4 left-0 right-0 h-px bg-border-subtle hidden md:block" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {timelineEvents.map((event, i) => (
                <TimelineNode key={event.label} event={event} index={i} />
              ))}
            </div>
          </div>

          {/* EU Regulations Table */}
          <div className="space-y-6">
            <h3 className="text-base font-semibold text-accent-cold terminal-text">
              Nørmativa Eurøpea (EU)
            </h3>
            <div className="overflow-x-auto neon-card rounded-xl p-1">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-visible">
                    <th className="text-left py-4 pr-4 pl-4 text-text-primary font-semibold">
                      Nørmativa
                    </th>
                    <th className="text-left py-4 pr-4 text-text-primary font-semibold">
                      Deadline
                    </th>
                    <th className="text-left py-4 pr-4 text-text-primary font-semibold hidden md:table-cell">
                      Aplica a
                    </th>
                    <th className="text-left py-4 pr-4 text-text-primary font-semibold">
                      Penalización
                    </th>
                    <th className="text-left py-4 pr-4 text-text-primary font-semibold hidden lg:table-cell">
                      Tu øpørtunidad
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
                        <td className="py-4 pr-4 pl-4 text-accent-cold font-semibold terminal-text">
                          {reg.name}
                        </td>
                        <td className="py-4 pr-4 text-text-secondary">
                          {reg.deadline}
                        </td>
                        <td className="py-4 pr-4 text-text-subtle hidden md:table-cell">
                          {reg.target}
                        </td>
                        <td className="py-4 pr-4 text-accent-danger">
                          {reg.penalty}
                        </td>
                        <td className="py-4 pr-4 text-accent-success hidden lg:table-cell">
                          {reg.opportunity}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Spanish Regulations Table */}
          <div className="space-y-6">
            <h3 className="text-base font-semibold text-accent-warm terminal-text-warm">
              Nørmativa Españøla (ES)
            </h3>
            <div className="overflow-x-auto neon-card rounded-xl p-1">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-visible">
                    <th className="text-left py-4 pr-4 pl-4 text-text-primary font-semibold">
                      Nørmativa
                    </th>
                    <th className="text-left py-4 pr-4 text-text-primary font-semibold">
                      Estadø
                    </th>
                    <th className="text-left py-4 pr-4 text-text-primary font-semibold hidden md:table-cell">
                      Aplica a
                    </th>
                    <th className="text-left py-4 pr-4 text-text-primary font-semibold">
                      Penalización
                    </th>
                    <th className="text-left py-4 pr-4 text-text-primary font-semibold hidden lg:table-cell">
                      Tu øpørtunidad
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
                        <td className="py-4 pr-4 pl-4 text-accent-warm font-semibold terminal-text-warm">
                          {reg.name}
                        </td>
                        <td className="py-4 pr-4 text-text-secondary">
                          {reg.deadline}
                        </td>
                        <td className="py-4 pr-4 text-text-subtle hidden md:table-cell">
                          {reg.target}
                        </td>
                        <td className="py-4 pr-4 text-accent-danger">
                          {reg.penalty}
                        </td>
                        <td className="py-4 pr-4 text-accent-success hidden lg:table-cell">
                          {reg.opportunity}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
