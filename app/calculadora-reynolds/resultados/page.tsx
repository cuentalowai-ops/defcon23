"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getReynoldsResult, type Answer, type ReynoldsResult } from "@/lib/reynolds";

function AnimatedCounter({
  target,
  duration = 2000,
}: {
  target: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing: ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString("es-ES")}</span>;
}

function ResultsContent() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<ReynoldsResult | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Parse answers from URL params
    const answers: Record<string, Answer> = {};
    for (let i = 1; i <= 10; i++) {
      const val = searchParams.get(`q${i}`);
      if (val && ["A", "B", "C", "D"].includes(val)) {
        answers[`q${i}`] = val as Answer;
      }
    }

    if (Object.keys(answers).length === 10) {
      const res = getReynoldsResult(answers);
      setResult(res);

      // Delay showing details for dramatic effect
      setTimeout(() => setShowDetails(true), 2500);
    }
  }, [searchParams]);

  const email = searchParams.get("email") ?? "";
  const company = searchParams.get("company") ?? "";

  if (!result) {
    return (
      <Section className="min-h-screen flex items-center retro-grid">
        <Container>
          <div className="text-center space-y-4">
            <p className="text-accent-cold terminal-text animate-pulse">
              Calculando tu Número de Reynolds...
            </p>
          </div>
        </Container>
      </Section>
    );
  }

  const riskColorMap: Record<string, string> = {
    "accent-success": "text-accent-success",
    "accent-warning": "text-accent-warning",
    "accent-danger": "text-accent-danger",
  };

  const riskBgMap: Record<string, string> = {
    "accent-success": "bg-accent-success/10 border-accent-success/30",
    "accent-warning": "bg-accent-warning/10 border-accent-warning/30",
    "accent-danger": "bg-accent-danger/10 border-accent-danger/30",
  };

  const riskGlowMap: Record<string, string> = {
    "accent-success": "0 0 60px rgba(82, 181, 168, 0.3)",
    "accent-warning": "0 0 60px rgba(212, 165, 116, 0.3)",
    "accent-danger": "0 0 60px rgba(184, 92, 92, 0.4)",
  };

  return (
    <Section className="min-h-screen retro-grid">
      <Container>
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Score Display */}
          <div className="text-center space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-cold terminal-text">
              RESULTADO
            </p>

            {company && (
              <p className="text-sm text-text-subtle">
                Informe para{" "}
                <span className="text-text-primary font-semibold">
                  {company}
                </span>
              </p>
            )}

            {/* Big Score */}
            <div
              className="neon-card rounded-2xl p-8 md:p-12 bg-bg-secondary"
              style={{ boxShadow: riskGlowMap[result.riskColor] }}
            >
              <p className="text-sm text-text-subtle mb-2">
                Tu Número de Reynolds es
              </p>
              <p
                className={`text-6xl md:text-8xl font-bold ${riskColorMap[result.riskColor]} terminal-glow`}
              >
                <AnimatedCounter target={result.score} />
              </p>
              <div
                className={`inline-block mt-4 px-4 py-2 rounded-full border ${riskBgMap[result.riskColor]}`}
              >
                <span
                  className={`text-sm font-semibold ${riskColorMap[result.riskColor]}`}
                >
                  {result.riskLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Details (appear after animation) */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              showDetails
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {/* Scale visualization */}
            <div className="neon-card rounded-xl p-6 bg-bg-secondary space-y-4">
              <h3 className="text-sm font-semibold text-text-primary">
                Escala Reynolds
              </h3>
              <div className="relative h-8 rounded-full overflow-hidden bg-bg-tertiary">
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000"
                  style={{
                    width: `${Math.min((result.score / 6000) * 100, 100)}%`,
                    background:
                      result.score < 2300
                        ? "linear-gradient(90deg, #52b5a8, #52b5a8)"
                        : result.score <= 4000
                          ? "linear-gradient(90deg, #52b5a8, #d4a574)"
                          : "linear-gradient(90deg, #52b5a8, #d4a574, #b85c5c)",
                  }}
                />
                {/* Markers */}
                <div
                  className="absolute inset-y-0 w-px bg-text-subtle/30"
                  style={{ left: `${(2300 / 6000) * 100}%` }}
                />
                <div
                  className="absolute inset-y-0 w-px bg-text-subtle/30"
                  style={{ left: `${(4000 / 6000) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-text-subtle">
                <span>0</span>
                <span>2,300</span>
                <span>4,000</span>
                <span>6,000</span>
              </div>
            </div>

            {/* Critical Leaks */}
            <div className="neon-card rounded-xl p-6 bg-bg-secondary space-y-4">
              <h3 className="text-sm font-semibold text-accent-danger">
                ⚠ Fugas Críticas Identificadas
              </h3>
              <ul className="space-y-3">
                {result.leaks.map((leak, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent-danger mt-0.5 text-xs shrink-0">
                      &#9632;
                    </span>
                    <span className="text-sm text-text-secondary">{leak}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Estimated Loss */}
            <div className="neon-card rounded-xl p-6 bg-bg-secondary space-y-3">
              <h3 className="text-sm font-semibold text-text-primary">
                Pérdida Estimada por Turbulencia
              </h3>
              <p className="text-2xl font-bold text-accent-warm terminal-text-warm">
                {result.estimatedMonthlyLoss}
              </p>
              <p className="text-xs text-text-subtle">
                Incluye: costes de fricción regulatoria, ineficiencias
                operativas, oportunidades perdidas por alta visibilidad.
              </p>
            </div>

            {/* Recommendation */}
            <div className="neon-card rounded-xl p-6 bg-bg-secondary space-y-3">
              <h3 className="text-sm font-semibold text-accent-cold terminal-text">
                Recomendación
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {result.recommendation}
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-4 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/consulta" variant="primary">
                  Agenda Auditoría Gratuita (15 min) →
                </Button>
                <Button href="/servicios" variant="secondary">
                  Ver Servicios →
                </Button>
              </div>

              {email && (
                <p className="text-xs text-text-subtle">
                  Informe enviado a{" "}
                  <span className="text-accent-cold">{email}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function ResultadosPage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-20 md:pt-24">
        <Suspense
          fallback={
            <Section className="min-h-screen flex items-center retro-grid">
              <Container>
                <div className="text-center">
                  <p className="text-accent-cold terminal-text animate-pulse">
                    Cargando resultados...
                  </p>
                </div>
              </Container>
            </Section>
          }
        >
          <ResultsContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
