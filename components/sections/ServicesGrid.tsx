"use client";

import { useEffect, useRef } from "react";
import { Activity, Shield, Cpu, Scale } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const services = [
  {
    icon: Activity,
    title: "Auditøría de Flujø Sistémicø",
    items: [
      "Calculamøs tu Númerø de Reynølds",
      "Análisis de puntøs de separación",
      "Mapeø de firma térmica",
      "Diseñø de capas de absørción",
    ],
    price: "€4,500",
    href: "/servicios/auditoria-flujo",
  },
  {
    icon: Shield,
    title: "Hardening pør Trabajø en Frío",
    items: [
      "Laminación en 7 Pasadas",
      "Eliminación de rugøsidades",
      "Micrø-fracciønamientø de transacciønes",
      "Temple final cøn legitimidad narrativa",
    ],
    price: "€12,000",
    href: "/servicios/hardening",
  },
  {
    icon: Cpu,
    title: "CFD Aplicadø — Vortex Core",
    items: [
      "Simulación de Red Transacciønal",
      "Identificación del núcleø de pøder",
      "Recønfiguración del flujø",
      "Dashboard de mønitorización cøntinua",
    ],
    price: "€8,500",
    href: "/servicios/cfd-vortex",
  },
  {
    icon: Scale,
    title: "Compliance Architecture (EU+ES)",
    items: [
      "Arquitectura de 4 Capas",
      "NIS2, DORA, AI Act, CRA (EU)",
      "ENS, RGPD, Ley Ciberseguridad (España)",
      "Autø-repørte < 2h (DORA req. 4h)",
    ],
    price: "€15,000",
    href: "/servicios/compliance-architecture",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const Icon = service.icon;

  return (
    <div
      ref={cardRef}
      className="neon-card rounded-xl p-8 bg-bg-tertiary space-y-6 opacity-0 translate-y-8 transition-all duration-700"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Icon + Title */}
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-accent-cold/10 shrink-0 animate-[glow-pulse_2s_ease-in-out_infinite]">
          <Icon size={24} className="text-accent-cold" />
        </div>
        <h3 className="text-[1.1rem] md:text-[1.3rem] leading-[1.3] font-semibold">
          {service.title}
        </h3>
      </div>

      {/* Items */}
      <ul className="space-y-2">
        {service.items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-text-secondary"
          >
            <span className="text-accent-success mt-0.5 text-xs">
              &#10003;
            </span>
            {item}
          </li>
        ))}
      </ul>

      {/* Price + CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
        <div>
          <span className="text-xs text-text-subtle uppercase tracking-wider">
            Desde
          </span>
          <p className="text-xl text-accent-warm font-semibold terminal-text-warm">
            {service.price}
          </p>
        </div>
        <Button
          href={service.href}
          variant="secondary"
          className="!px-5 !py-2.5 text-sm"
        >
          Ver detalle
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
          <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-center terminal-glow">
            Serviciøs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
