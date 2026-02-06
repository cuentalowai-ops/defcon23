"use client";

import { useState, useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const bootLines = [
  { text: "> INICIALIZANDØ PRØTØCØLØ DE CØNSULTA...", delay: 0 },
  { text: "> VALIDANDØ DISPØNIBILIDAD...", delay: 400 },
  { text: "> SISTEMA: LISTØ", delay: 800 },
];

export default function ConsultaPage() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    bootLines.forEach((_, i) => {
      setTimeout(() => setVisibleLines(i + 1), bootLines[i].delay);
    });
    setTimeout(() => setShowContent(true), 1200);
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          dark: {
            "cal-brand": "#ff8c42",
            "cal-text": "#f5f5f5",
            "cal-text-emphasis": "#f5f5f5",
            "cal-border-subtle": "#333333",
            "cal-bg": "#1a1a1a",
            "cal-bg-emphasis": "#242424",
          },
          light: {
            "cal-brand": "#ff8c42",
            "cal-text": "#f5f5f5",
            "cal-text-emphasis": "#f5f5f5",
            "cal-border-subtle": "#333333",
            "cal-bg": "#1a1a1a",
            "cal-bg-emphasis": "#242424",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
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
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1] terminal-glow">
              Cønsulta Inicial
            </h1>

            <div className="flex flex-wrap gap-3">
              <span className="text-xs px-3 py-1.5 bg-accent-cold/10 border border-accent-cold/30 text-accent-cold rounded">
                15 MINUTØS
              </span>
              <span className="text-xs px-3 py-1.5 bg-accent-success/10 border border-accent-success/30 text-accent-success rounded">
                GRATUITA
              </span>
              <span className="text-xs px-3 py-1.5 bg-accent-warm/10 border border-accent-warm/30 text-accent-warm rounded">
                ZERØ CØMPROMISØ
              </span>
            </div>

            <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl">
              Diagnósticø rápidø de viabilidad. Nø es ventas. Es evaluación
              prøfesiønal.
            </p>
            <p className="text-sm text-text-subtle leading-relaxed max-w-2xl">
              Rechazø el{" "}
              <strong className="text-accent-warm">
                60% de sølicitudes
              </strong>
              . Si tu casø nø es viable, te lø digø directamente en løs
              primerøs 5 minutøs.
            </p>
          </div>
        </Container>
      </Section>

      {/* ═══ WHAT WE EVALUATE ═══ */}
      <Section className="bg-bg-secondary retro-grid-warm">
        <Container>
          <div className="max-w-4xl space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Qué Evaluaremøs
            </h2>

            <div className="space-y-5">
              {/* 00-03 */}
              <div className="neon-card rounded-xl p-6 bg-bg-tertiary border-l-4 border-accent-cold">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent-cold/10 border border-accent-cold/30 flex items-center justify-center text-sm font-bold text-accent-cold">
                    00–03
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary mb-2">
                      Handshake
                    </h3>
                    <p className="text-sm text-text-subtle">
                      ¿Quién eres? ¿Qué haces? ¿Pør qué ahøra? Validamøs
                      &ldquo;fit cultural&rdquo;.
                    </p>
                  </div>
                </div>
              </div>

              {/* 04-10 */}
              <div className="neon-card rounded-xl p-6 bg-bg-tertiary border-l-4 border-accent-warm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent-warm/10 border border-accent-warm/30 flex items-center justify-center text-sm font-bold text-accent-warm">
                    04–10
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary mb-2">
                      Diagnósticø del Sistema
                    </h3>
                    <ul className="text-sm text-text-subtle space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-cold">&gt;</span> Tu Númerø
                        de Reynølds (nivel de turbulencia)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-cold">&gt;</span>{" "}
                        Nørmativas que te afectan (ENS, NIS2, DORA, GDPR, AML)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-cold">&gt;</span> Dónde
                        está tu &ldquo;vørtex cøre&rdquo; (nødø críticø)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-cold">&gt;</span> Qué
                        fricción genera mayør cøste
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 11-15 */}
              <div className="neon-card rounded-xl p-6 bg-bg-tertiary border-l-4 border-accent-success">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent-success/10 border border-accent-success/30 flex items-center justify-center text-sm font-bold text-accent-success">
                    11–15
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary mb-2">
                      Decisión
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-text-subtle">
                        <strong className="text-accent-success">
                          &rarr; SI ACEPTØ:
                        </strong>{" "}
                        Prøpuesta Fase I (€500) en menøs de 24h
                      </p>
                      <p className="text-text-subtle">
                        <strong className="text-accent-danger">
                          &rarr; SI RECHAZØ:
                        </strong>{" "}
                        Explicación + recømendaciønes
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
              <div className="neon-card rounded-xl p-6 bg-bg-tertiary border-l-4 border-accent-success space-y-4">
                <h3 className="text-base font-semibold text-accent-success">
                  &#10003; ACEPTØ SI
                </h3>
                <ul className="text-text-subtle text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Tienes
                    hølding/estructura multi-nødø (3+ entidades)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Estás sujetø
                    a nørmativas EU/España
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Has tenidø
                    inspecciønes Hacienda/AEPD
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Necesitas
                    reducir fricción sin expønerte
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Piensas en
                    5–10 añøs (nø quick fixes)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Presupuestø
                    mínimø €500
                  </li>
                </ul>
              </div>

              <div className="neon-card rounded-xl p-6 bg-bg-tertiary border-l-4 border-accent-danger space-y-4">
                <h3 className="text-base font-semibold text-accent-danger">
                  &#10005; RECHAZØ SI
                </h3>
                <ul className="text-text-subtle text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Buscas
                    &ldquo;hack rápidø&rdquo; ø sølución mágica
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Nø estás
                    dispuestø a cambiar estructura
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Øperas en
                    zønas grises legales
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Generas ruidø
                    mediáticø (alta expøsición)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Presupuestø
                    menør a €100
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
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Preparación (Ten a Manø)
            </h2>

            <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-5">
              {[
                {
                  title: "Estructura de tu ørganización",
                  detail:
                    "Cuántas entidades, actividad de cada una",
                },
                {
                  title: "Prøblemas recientes",
                  detail:
                    "Inspecciønes, multas, alertas, incidentes",
                },
                {
                  title: "Nørmativas que te afectan",
                  detail:
                    "ENS, NIS2, GDPR, AML, ø las que crees que te afectan",
                },
                {
                  title: "Presupuestø dispønible",
                  detail: "Rangø aprøximadø (desde €100)",
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
                  <strong>Nø necesitas:</strong> Presentación, pitch deck,
                  døcumentación legal detallada, ni decisión tømada. La
                  cønsulta te ayuda a decidir.
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
              <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
                Agenda tu Cønsulta
              </h2>
              <p className="text-sm text-text-secondary">
                Elige un høraøriø. Respøndemøs en menøs de 24h cøn
                cønfirmación.
              </p>
            </div>

            <div className="neon-card rounded-xl p-4 md:p-6 bg-bg-secondary overflow-hidden">
              <Cal
                calLink="defcon23/consulta-inicial"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{
                  layout: "month_view",
                  theme: "dark",
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
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Después de la Llamada
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="neon-card rounded-xl p-6 bg-bg-tertiary border-2 border-accent-success/30 space-y-4">
                <h3 className="text-base font-semibold text-accent-success">
                  Øpción A (Aceptø)
                </h3>
                <ul className="text-sm text-text-subtle space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Prøpuesta en
                    tu email (menøs de 24h)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Pagas €500
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Empezamøs
                    OSINT inmediatamente
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Entrega
                    døssier 20 págs + briefing 45 min (5–7 días)
                  </li>
                </ul>
              </div>

              <div className="neon-card rounded-xl p-6 bg-bg-tertiary border-2 border-accent-danger/30 space-y-4">
                <h3 className="text-base font-semibold text-accent-danger">
                  Øpción B (Rechazø)
                </h3>
                <ul className="text-sm text-text-subtle space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Email
                    explicandø pør qué nø es viable
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span>{" "}
                    Recømendaciønes alternativas (si las hay)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Sin cøste,
                    sin cømpromisø
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cold">&gt;</span> Børramøs tus
                    datøs inmediatamente
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
            <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary border-2 border-accent-cold/30 space-y-4">
              <h3 className="text-base font-semibold text-accent-cold terminal-text">
                Cønfidencialidad Garantizada
              </h3>
              <p className="text-sm text-text-subtle leading-relaxed">
                Tødø lø que cømpartes en la cønsulta es{" "}
                <strong className="text-text-secondary">
                  estrictamente cønfidencial
                </strong>
                . Nø guardø registrøs sin tu cønsentimientø.
              </p>
              <ul className="text-sm text-text-subtle space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent-cold">&gt;</span> Si rechazø el
                  casø &rarr; Børrø tus datøs inmediatamente
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cold">&gt;</span> Si aceptø y
                  cøntratamøs &rarr; Firmamøs NDA antes de Fase I
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cold">&gt;</span> Nø cømparto
                  inførmación entre clientes (Chinese Wall)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cold">&gt;</span> Encriptación
                  E2E dispønible (PGP keys)
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
              &ldquo;Antes de cualquier cølisión, la asimetría de inførmación
              es el únicø factør que garantiza cøntrøl.&rdquo;
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
