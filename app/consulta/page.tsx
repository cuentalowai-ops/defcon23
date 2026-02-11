"use client";

import { useState, useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import CalBooking from "@/components/CalBooking";

const bootLines = [
  { text: "> INICIALIZANDO PROTOCOLO DE CONSULTA...", delay: 0 },
  { text: "> VALIDANDO DISPONIBILIDAD...", delay: 400 },
  { text: "> SISTEMA: LISTO", delay: 800 },
];

export default function ConsultaPage() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    bootLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay);
    });
    setTimeout(() => setShowContent(true), 1200);
  }, []);

  return (
    <PageLayout>
      {/* ═══ HERO ═══ */}
      <Section className="retro-grid">
        <Container>
          {/* Boot sequence */}
          <div className="space-y-1 mb-8">
            {bootLines.slice(0, visibleLines).map((line, i) => (
              <p
                key={i}
                className="text-xs md:text-sm text-accent-cold terminal-text boot-line"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {line.text}
              </p>
            ))}
          </div>

          <div
            className={`max-w-4xl space-y-6 transition-all duration-700 ${
              showContent
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-accent-cold terminal-text px-3 py-1 border border-accent-cold/30 rounded">
              FASE 0
            </span>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1] text-gradient-warm">
              Consulta Inicial
            </h1>

            <div className="flex flex-wrap gap-3">
              <span className="text-xs px-3 py-1.5 bg-accent-cold/10 border border-accent-cold/30 text-accent-cold rounded">
                15 MINUTOS
              </span>
              <span className="text-xs px-3 py-1.5 bg-accent-success/10 border border-accent-success/30 text-accent-success rounded">
                GRATUITA
              </span>
              <span className="text-xs px-3 py-1.5 bg-accent-warm/10 border border-accent-warm/30 text-accent-warm rounded">
                ZERO COMPROMISO
              </span>
            </div>

            <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl">
              Diagnóstico rápido de viabilidad. No es ventas. Es evaluación
              profesional.
            </p>
            <p className="text-sm text-text-subtle leading-relaxed max-w-2xl">
              Rechazo el{" "}
              <strong className="text-accent-warm">
                60% de solicitudes
              </strong>
              . Si tu caso no es viable, te lo digo directamente en los
              primeros 5 minutos.
            </p>
          </div>
        </Container>
      </Section>

      {/* ═══ WHAT WE EVALUATE ═══ */}
      <Section className="bg-bg-secondary retro-grid-warm">
        <Container>
          <div className="max-w-4xl space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
              Qué Evaluaremos
            </h2>

            <div className="space-y-5">
              {/* 00-03 */}
              <div className="neon-card rounded-2xl p-4 md:p-6 bg-bg-tertiary border-l-4 border-accent-cold">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent-cold/10 border border-accent-cold/30 flex items-center justify-center text-xs md:text-sm font-bold text-accent-cold">
                    00–03
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary mb-2">
                      Handshake
                    </h3>
                    <p className="text-sm text-text-subtle">
                      ¿Quién eres? ¿Qué haces? ¿Por qué ahora? Validamos
                      &ldquo;fit cultural&rdquo;.
                    </p>
                  </div>
                </div>
              </div>

              {/* 04-10 */}
              <div className="neon-card rounded-2xl p-4 md:p-6 bg-bg-tertiary border-l-4 border-accent-warm">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent-warm/10 border border-accent-warm/30 flex items-center justify-center text-xs md:text-sm font-bold text-accent-warm">
                    04–10
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary mb-2">
                      Diagnóstico del Sistema
                    </h3>
                    <ul className="text-sm text-text-subtle space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-cold">&gt;</span> Tu Número
                        de Reynolds (nivel de turbulencia)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-cold">&gt;</span>{" "}
                        Normativas que te afectan (ENS, NIS2, DORA, GDPR, AML)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-cold">&gt;</span> Dónde
                        está tu &ldquo;vortex core&rdquo; (nodo crítico)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-cold">&gt;</span> Qué
                        fricción genera mayor coste
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 11-15 */}
              <div className="neon-card rounded-2xl p-4 md:p-6 bg-bg-tertiary border-l-4 border-accent-success">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent-success/10 border border-accent-success/30 flex items-center justify-center text-xs md:text-sm font-bold text-accent-success">
                    11–15
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary mb-2">
                      Decisión
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-text-subtle">
                        <strong className="text-accent-success">
                          &rarr; SI ACEPTO:
                        </strong>{" "}
                        Propuesta Fase I (€500) en menos de 24h
                      </p>
                      <p className="text-text-subtle">
                        <strong className="text-accent-danger">
                          &rarr; SI RECHAZO:
                        </strong>{" "}
                        Explicación + recomendaciones
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ WHO SHOULD BOOK ═══ */}
      <Section className="retro-grid">
        <Container>
          <div className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="neon-card rounded-2xl p-4 md:p-6 bg-bg-tertiary border-l-4 border-accent-success space-y-3 md:space-y-4">
                <h3 className="text-base font-semibold text-accent-success">
                  &#10003; ACEPTO SI
                </h3>
                <ul className="text-text-subtle text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Estás sujeto
                    a normativas EU/España
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Has tenido
                    inspecciones Hacienda/AEPD
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Necesitas
                    reducir fricción sin exponerte
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Piensas en
                    5–10 años (no quick fixes)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Presupuesto
                    mínimo €500
                  </li>
                </ul>
              </div>

              <div className="neon-card rounded-2xl p-4 md:p-6 bg-bg-tertiary border-l-4 border-accent-danger space-y-3 md:space-y-4">
                <h3 className="text-base font-semibold text-accent-danger">
                  &#10005; RECHAZO SI
                </h3>
                <ul className="text-text-subtle text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Buscas
                    &ldquo;hack rápido&rdquo; o solución mágica
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> No estás
                    dispuesto a cambiar estructura
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Generas ruido
                    mediático (alta exposición)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Presupuesto
                    menor a €100
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ PREPARATION ═══ */}
      <Section className="bg-bg-secondary retro-grid-warm">
        <Container>
          <div className="max-w-4xl space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
              Preparación (Ten a Mano)
            </h2>

            <div className="neon-card rounded-2xl p-6 md:p-8 bg-bg-tertiary space-y-5">
              {[
                {
                  title: "Estructura de tu organización",
                  detail:
                    "Cuántas entidades, actividad de cada una",
                },
                {
                  title: "Problemas recientes",
                  detail:
                    "Inspecciones, multas, alertas, incidentes",
                },
                {
                  title: "Normativas que te afectan",
                  detail:
                    "ENS, NIS2, GDPR, AML, o las que crees que te afectan",
                },
                {
                  title: "Presupuesto disponible",
                  detail: "Rango aproximado (desde €100)",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-accent-cold text-lg mt-0.5">&#9744;</span>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      {item.title}
                    </p>
                    <p className="text-xs text-text-subtle">{item.detail}</p>
                  </div>
                </div>
              ))}

              <div className="mt-4 p-4 border-l-2 border-accent-cold bg-accent-cold/5 rounded-r-lg">
                <p className="text-sm text-text-secondary">
                  <strong>No necesitas:</strong> Presentación, pitch deck,
                  documentación legal detallada, ni decisión tomada. La
                  consulta te ayuda a decidir.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ CAL.COM EMBED ═══ */}
      <Section className="retro-grid">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center space-y-3">
              <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
                Agenda tu Consulta
              </h2>
              <p className="text-sm text-text-secondary">
                Elige un horario. Respondemos en menos de 24h con
                confirmación.
              </p>
            </div>

            <div className="neon-card rounded-2xl p-2 md:p-6 bg-bg-secondary overflow-hidden">
              <CalBooking
                calLink="defcon23/15min"
                calOrigin="https://cal.eu"
                config={{
                  theme: "dark",
                  layout: "month_view",
                  hideEventTypeDetails: false,
                }}
                cssVarsPerTheme={{
                  dark: {
                    "cal-brand": "#FF9966",
                    "cal-text": "#F9FAFB",
                    "cal-text-emphasis": "#FFFFFF",
                    "cal-text-subtle": "#A0A0A0",
                    "cal-border": "rgba(255, 153, 102, 0.2)",
                    "cal-border-emphasis": "rgba(58, 155, 155, 0.4)",
                    "cal-border-subtle": "#333333",
                    "cal-bg": "#0A0A0A",
                    "cal-bg-emphasis": "#1A1A1A",
                    "cal-bg-subtle": "#151515",
                  },
                  light: {
                    "cal-brand": "#FF9966",
                    "cal-text": "#0A0A0A",
                    "cal-text-emphasis": "#000000",
                    "cal-text-subtle": "#6B7280",
                    "cal-border": "rgba(255, 153, 102, 0.3)",
                    "cal-border-emphasis": "rgba(58, 155, 155, 0.5)",
                    "cal-border-subtle": "#E5E7EB",
                    "cal-bg": "#FFFFFF",
                    "cal-bg-emphasis": "#F9FAFB",
                    "cal-bg-subtle": "#F3F4F6",
                  },
                }}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ AFTER BOOKING ═══ */}
      <Section className="bg-bg-secondary retro-grid-warm">
        <Container>
          <div className="max-w-4xl space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
              Después de la Llamada
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="neon-card rounded-2xl p-4 md:p-6 bg-bg-tertiary border-2 border-accent-success/30 space-y-3 md:space-y-4">
                <h3 className="text-base font-semibold text-accent-success">
                  Opción A (Acepto)
                </h3>
                <ul className="text-sm text-text-subtle space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Propuesta en
                    tu email (menos de 24h)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Realizas pago
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Empezamos
                    OSINT inmediatamente
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Entrega
                    dossier 20 págs + briefing 45 min (5–7 días)
                  </li>
                </ul>
              </div>

              <div className="neon-card rounded-2xl p-4 md:p-6 bg-bg-tertiary border-2 border-accent-danger/30 space-y-3 md:space-y-4">
                <h3 className="text-base font-semibold text-accent-danger">
                  Opción B (Rechazo)
                </h3>
                <ul className="text-sm text-text-subtle space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Email
                    explicando por qué no es viable
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span>{" "}
                    Recomendaciones alternativas (si las hay)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Sin coste,
                    sin compromiso
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Borramos tus
                    datos inmediatamente
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ CONFIDENTIALITY ═══ */}
      <Section className="retro-grid">
        <Container>
          <div className="max-w-4xl">
            <div className="neon-card rounded-2xl p-6 md:p-8 bg-bg-tertiary border-2 border-accent-cold/30 space-y-4">
              <h3 className="text-base font-semibold text-accent-cold terminal-text">
                Confidencialidad Garantizada
              </h3>
              <p className="text-sm text-text-subtle leading-relaxed">
                Todo lo que compartes en la consulta es{" "}
                <strong className="text-text-secondary">
                  estrictamente confidencial
                </strong>
                . No guardo registros sin tu consentimiento.
              </p>
              <ul className="text-sm text-text-subtle space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent-cold">&gt;</span> Si rechazo el
                  caso &rarr; Borro tus datos inmediatamente
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cold">&gt;</span> Si acepto y
                  contratamos &rarr; Firmamos NDA antes de Fase I
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cold">&gt;</span> No comparto
                  información entre clientes (Chinese Wall)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cold">&gt;</span> Encriptación
                  E2E disponible (PGP keys)
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ CTA FOOTER ═══ */}
      <Section className="bg-bg-secondary retro-grid-warm">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <p className="text-text-subtle italic text-sm">
              &ldquo;Antes de cualquier colisión, la asimetría de información
              es el único factor que garantiza control.&rdquo;
            </p>
            <div className="space-y-3">
              <p className="text-sm text-text-secondary">
                ¿Preguntas antes de reservar?
              </p>
              <a
                href="mailto:intel@defcon23.eu"
                className="text-accent-cold hover:underline terminal-text"
              >
                intel@defcon23.eu
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
