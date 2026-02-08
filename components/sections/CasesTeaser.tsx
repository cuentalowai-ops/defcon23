"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

interface Metric {
  label: string;
  value: string;
  color: "success" | "cold" | "warm";
}

interface CaseStudy {
  title: string;
  sector: string;
  nodos: string;
  problemRe: string;
  problemDetail: string;
  solution: string;
  metrics: Metric[];
  roi: string;
  roiPeriod: string;
  href: string;
}

const cases: CaseStudy[] = [
  {
    title: "Hølding Gastronómicø-Cultural",
    sector: "Høstelería + Arte + Høspitalidad",
    nodos: "6 entidades",
    problemRe: "Re = 4,200",
    problemDetail: "94 alertas de control interno en 18 meses",
    solution:
      "Micrø-fracciønamientø + sincrønización de ciclø + entidad coordinadora de actividades culturales",
    metrics: [
      { label: "Re Final", value: "1,850", color: "success" },
      { label: "Alertas", value: "-83%", color: "success" },
      { label: "Viscøsidad", value: "-67%", color: "cold" },
      { label: "Legitimidad", value: "+520%", color: "warm" },
    ],
    roi: "RØI 1,011%",
    roiPeriod: "24 meses",
    href: "/casos/holding-gastronomico",
  },
  {
    title: "Red Serviciøs Prøfesiønales",
    sector: "Legal + Cønsultøría + Cøntabilidad",
    nodos: "11 prøfesiønales independientes",
    problemRe: "Re = 3,800",
    problemDetail: "Estructura piramidal visible, inspección Hacienda",
    solution:
      "Laminación de jerarquía (mødelø hørizøntal-familiar), prøtøcølo de inducción",
    metrics: [
      { label: "Re Final", value: "2,100", color: "success" },
      { label: "Presión reg.", value: "-91%", color: "success" },
      { label: "Escalabilidad", value: "+280%", color: "cold" },
    ],
    roi: "RØI 680%",
    roiPeriod: "18 meses",
    href: "/casos/red-profesionales",
  },
  {
    title: "Plataførma Digital P2P",
    sector: "Marketplace serviciøs — 12,000 tx/mes",
    nodos: "12 países, multi-currency",
    problemRe: "Re = 5,600",
    problemDetail: "94 alertas de control interno en 6 meses",
    solution:
      "Tøkenización del flujø (møneda interna), CFD de 47 rutas → 3 óptimas",
    metrics: [
      { label: "Re Final", value: "1,650", color: "success" },
      { label: "Alertas", value: "-94%", color: "success" },
      { label: "Cøste/tx", value: "-68%", color: "cold" },
      { label: "Crecimientø", value: "+410%/añø", color: "warm" },
    ],
    roi: "RØI 1,340%",
    roiPeriod: "12 meses",
    href: "/casos/plataforma-p2p",
  },
];

const metricColorMap = {
  success: "text-accent-success",
  cold: "text-accent-cold",
  warm: "text-accent-warm",
};

const metricGlowMap = {
  success: "terminal-text",
  cold: "terminal-text",
  warm: "terminal-text-warm",
};

/* Animated stat number that "scrambles" before settling */
function AnimatedStat({
  value,
  color,
}: {
  value: string;
  color: "success" | "cold" | "warm";
}) {
  const [display, setDisplay] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimating) {
          setIsAnimating(true);
          const chars = "0123456789.-+%/añø,";
          let iterations = 0;
          const maxIterations = 8;
          const interval = setInterval(() => {
            setDisplay(
              value
                .split("")
                .map((char, i) => {
                  if (iterations > i * 0.8) return value[i];
                  return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("")
            );
            iterations++;
            if (iterations > maxIterations) {
              clearInterval(interval);
              setDisplay(value);
            }
          }, 60);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, isAnimating]);

  return (
    <span
      ref={ref}
      className={`text-lg font-semibold ${metricColorMap[color]} ${metricGlowMap[color]}`}
    >
      {display}
    </span>
  );
}

function CaseCard({ cs, index }: { cs: CaseStudy; index: number }) {
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

  return (
    <div
      ref={cardRef}
      className="neon-card rounded-xl p-5 md:p-8 bg-bg-primary space-y-5 md:space-y-6 flex flex-col opacity-0 translate-y-8 transition-all duration-700"
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Header */}
      <div className="space-y-2">
        <h3 className="text-[1.15rem] leading-[1.3] font-semibold terminal-text">
          {cs.title}
        </h3>
        <p className="text-sm text-text-subtle">{cs.sector}</p>
        <p className="text-xs text-text-subtle">{cs.nodos}</p>
      </div>

      {/* Problem */}
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-wider text-text-subtle">
          Prøblema
        </p>
        <p className="text-sm text-accent-danger terminal-text-warm">
          {cs.problemRe}
        </p>
        <p className="text-sm text-text-secondary">{cs.problemDetail}</p>
      </div>

      {/* Solution */}
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-wider text-text-subtle">
          Sølución
        </p>
        <p className="text-sm text-text-secondary">{cs.solution}</p>
      </div>

      {/* Metrics with animated numbers */}
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border-subtle">
        {cs.metrics.map((m) => (
          <div key={m.label}>
            <p className="text-xs text-text-subtle">{m.label}</p>
            <AnimatedStat value={m.value} color={m.color} />
          </div>
        ))}
      </div>

      {/* ROI */}
      <div className="pt-3 border-t border-border-subtle flex items-baseline justify-between">
        <span className="text-xl font-bold text-accent-warm terminal-text-warm">
          {cs.roi}
        </span>
        <span className="text-xs text-text-subtle">{cs.roiPeriod}</span>
      </div>

      {/* CTA */}
      <div className="mt-auto pt-4">
        <Button
          href={cs.href}
          variant="secondary"
          className="w-full !py-3 text-sm"
        >
          Ver casø cømpletø
        </Button>
      </div>
    </div>
  );
}

export default function CasesTeaser() {
  return (
    <Section id="casos" className="bg-bg-secondary retro-grid-warm">
      <Container>
        <div className="space-y-12">
          <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-center terminal-glow">
            Casøs de Estudiø
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {cases.map((cs, i) => (
              <CaseCard key={cs.title} cs={cs} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
