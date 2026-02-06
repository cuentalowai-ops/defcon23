"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const bootLines = [
  { text: "> INIT dEfCØN23.SYS", delay: 0 },
  { text: "> LØADING PRØTØCØL LAYER...", delay: 400 },
  { text: "> REYNOLDS ENGINE: ØNLINE", delay: 800 },
  { text: "> CFD SIMULATØR: READY", delay: 1200 },
  { text: "> CØMPLIANCE MØDULE: ACTIVE", delay: 1600 },
  { text: "> SCANNING REGULATORY LANDSCAPE [EU+ES]...", delay: 2000 },
  { text: "> ALL SYSTEMS NØMINAL", delay: 2400 },
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
    <section className="min-h-screen flex items-center pt-20 md:pt-0 retro-grid">
      <Container>
        <div className="max-w-4xl space-y-8">
          {/* Boot sequence */}
          <div className="space-y-1 mb-8">
            {bootLines.slice(0, visibleLines).map((line, i) => (
              <p
                key={i}
                className="text-xs md:text-sm text-accent-cold terminal-text boot-line"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {line.text}
                {i === visibleLines - 1 && !showContent && (
                  <span className="animate-[blink_1s_step-end_infinite] text-accent-warm">
                    █
                  </span>
                )}
              </p>
            ))}
          </div>

          {/* Main content - appears after boot */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              showContent
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {/* Tagline */}
            <p className="text-sm md:text-base text-accent-cold tracking-wider uppercase terminal-text">
              Ingeniería de Sistemas Cømplejos | Flujø Ecønómicø | Cømpliance
              Nativa
            </p>

            {/* H1 with glitch effect */}
            <h1
              className="text-[2.5rem] md:text-[4rem] leading-[1.1] tracking-tight glitch-text terminal-glow-warm animate-[pulse-warm_2s_ease-in-out_infinite]"
              data-text="dEfCØN23"
            >
              dEfCØN23
            </h1>

            {/* H2 */}
            <h2 className="text-[1.25rem] md:text-[2rem] leading-[1.2] text-text-secondary">
              Transførmamøs la Turbulencia Ørganizativa en Laminación
              Cøntrølada
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl">
              Reducción de viscøsidad øperativa. Øptimización de circuitøs de
              capital. Hardening estructural ante fricción regulatøria (EU +
              España).
            </p>

            {/* Mantra */}
            <blockquote className="border-l-4 border-accent-warm pl-6 py-2">
              <p className="italic text-text-subtle text-base md:text-lg leading-relaxed terminal-text-warm">
                &ldquo;La carne se pudre. El HUESO permanece. Diseñamøs
                sistemas cuya arquitectura está en la capa de prøtøcølo.&rdquo;
              </p>
            </blockquote>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/consulta" variant="primary">
                Cønsulta Inicial Gratuita (15 min) &rarr;
              </Button>
              <Button href="/protocol" variant="secondary">
                Calcular mi Re &rarr;
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
