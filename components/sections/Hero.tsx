"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const bootLines = [
  { text: "> INIT dEfCØN23.SYS", delay: 0 },
  { text: "> LOADING PROTOCOL LAYER...", delay: 400 },
  { text: "> REYNOLDS ENGINE: ONLINE", delay: 800 },
  { text: "> CFD SIMULATOR: READY", delay: 1200 },
  { text: "> COMPLIANCE MODULE: ACTIVE", delay: 1600 },
  { text: "> SCANNING REGULATORY LANDSCAPE [EU+ES]...", delay: 2000 },
  { text: "> ALL SYSTEMS NOMINAL", delay: 2400 },
  { text: "> READY_", delay: 2800 },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    bootLines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(i + 1);
      }, line.delay);
    });

    // Show main content after boot sequence
    setTimeout(() => {
      setShowContent(true);
    }, 3200);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 md:pt-0 retro-grid relative overflow-hidden scroll-mt-20">
      <Container>
        <div className="max-w-4xl space-y-6 md:space-y-10">
          {/* Boot sequence — collapses after load */}
          <div
            className={`transition-all duration-700 ease-in-out overflow-hidden ${
              showContent ? "max-h-0 opacity-0 mb-0" : "max-h-96 opacity-100 mb-6"
            }`}
          >
            <div className="space-y-1.5">
              {bootLines.slice(0, visibleLines).map((line, i) => (
                <p
                  key={i}
                  className="text-[0.7rem] md:text-xs text-accent-cold/90 terminal-text boot-line font-light"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {line.text}
                  {i === visibleLines - 1 && !showContent && (
                    <span className="animate-[blink_1s_step-end_infinite] text-accent-warm ml-1">
                      █
                    </span>
                  )}
                </p>
              ))}
            </div>
          </div>

          {/* Main content - appears after boot */}
          <div
            className={`space-y-6 md:space-y-8 transition-all duration-700 ${
              showContent
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {/* Tagline */}
            <p className="text-[0.65rem] md:text-sm text-accent-cold tracking-widest uppercase terminal-text">
              Ingeniería de Sistemas Complejos · Flujo Económico · Compliance Nativa
            </p>

            {/* H1 with glitch effect */}
            <h1
              className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] leading-[1.05] tracking-tight glitch-text terminal-glow-warm animate-[pulse-warm_2s_ease-in-out_infinite]"
              data-text="dEfCØN23"
            >
              dEfCØN23
            </h1>

            {/* H2 */}
            <h2 className="text-[1.15rem] md:text-[1.75rem] leading-[1.3] text-text-secondary max-w-2xl">
              Transformamos la Turbulencia Organizativa en Laminación
              Controlada
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-text-subtle leading-relaxed max-w-xl">
              Reducción de viscosidad operativa. Optimización de circuitos de
              capital. Hardening estructural ante fricción regulatoria (EU +
              España).
            </p>

            {/* Mantra */}
            <blockquote className="border-l-2 border-accent-warm/60 pl-4 md:pl-5 py-1">
              <p className="italic text-text-subtle text-xs md:text-sm leading-relaxed terminal-text-warm">
                &ldquo;La carne se pudre. El HUESO permanece. Diseñamos
                sistemas cuya arquitectura está en la capa de protocolo.&rdquo;
              </p>
            </blockquote>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button href="/consulta" variant="primary">
                Consulta Inicial Gratuita (15 min) &rarr;
              </Button>
              <Button href="/calculadora-reynolds" variant="secondary">
                Calcular mi Re &rarr;
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
