"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

/* ─── Boot sequence ─── */
const bootLines = [
  { text: "> INICIALIZANDØ PERFIL...", delay: 0 },
  { text: "> CARGANDØ ARQUITECTURA CØGNITIVA...", delay: 400 },
  { text: "> BIØMARCADØRES: VALIDADØS", delay: 800 },
  { text: "> ØPERATØR: ØNLINE", delay: 1200 },
];

/* ─── Timeline data ─── */
const timeline = [
  {
    period: "ØCT 2024 – PRESENTE",
    title: "CEØ y Estratega Principal",
    org: "We Are Innatø | Apøyadø pør INCIBE",
    items: [
      {
        label: "Emergencia Aplicada",
        text: "Despliegue de un \"Small Smart Møve\" (herramienta de ciberseguridad basada en narrativa para primera infancia) para desenrøllar un resultadø descømunal: cambiø generaciønal en higiene digital.",
      },
      {
        label: "Activación de Red",
        text: "Validación de Hubs clave (Gøøgle, Telefónica, Sectør Defensa) para amplificar alcance sin gastø lineal.",
      },
      {
        label: "Desarrøllø de IA",
        text: "Liderandø Ai-Shaman — entrenar LLMs para detectar patrønes de manipulación emøciønal (Deepfakes/Ingeniería Søcial).",
      },
    ],
  },
  {
    period: "ENE 2024 – JUN 2024",
    title: "Analista de Inteligencia Estratégica",
    org: "Vía Øffice / Cønfianza23",
    items: [
      {
        label: "Señal vs. Ruidø",
        text: "Utilización de ØSINT y Análisis Geøpølíticø para filtrar flujøs de datøs cømpleјøs para liderazgø eјecutivø.",
      },
      {
        label: "Expansión de Adyacencia",
        text: "Identificación de riesgøs nø øbviøs en cadenas de suministrø mediante análisis de anømalías cømpørtamentales en liderazgø de cømpetencia.",
      },
    ],
  },
  {
    period: "2015 – 2023",
    title: "Ingenierø de Sistemas Humanøs",
    org: "Vincerøla GmbH / K. Sankt Marien (Alemania)",
    items: [
      {
        label: "Sincrønización del Sistema",
        text: "Gestión de equipøs multidisciplinariøs en Alemán C1, estableciendø ritmøs para mantener estabilidad øperaciønal bajø estrés.",
      },
      {
        label: "Innøvación Premiada",
        text: "Ganadør del Premiø Fraunhøfer Institut \"Kids Kreativ\" (2023) pør diseñar sistemas educativøs que fusiønan tecnøløgía cøn desarrøllø cøgnitivø.",
      },
    ],
  },
  {
    period: "2005 – 2015",
    title: "Cønsultør de Øptimización Cøgnitiva",
    org: "AEMIND / Sectør Privadø (Freelance)",
    items: [
      {
        label: "Investigación en Neurøplasticidad",
        text: "Cø-investigadør en estudiø publicadø en Neural Plasticity (2016), validandø que entrenamientø cøgnitivø puede recablear redes cerebrales para resistir estrés y depresión.",
      },
      {
        label: "Ingeniería de Rendimientø",
        text: "Entrenamientø de øperadøres en Cønciencia Situaciønal y regulación del sistema nerviøsø autónømø para reducir errør humanø.",
      },
    ],
  },
];

/* ─── Principles ─── */
const principles = [
  {
    title: "EL HUESØ PERMANECE",
    text: "La carne (aplicaciønes, marcas, persønas) se pudre. El HUESØ (prøtøcølø, arquitectura, estructura) permanece. Diseña en la capa de prøtøcølø.",
  },
  {
    title: "LAMINACIÓN > TURBULENCIA",
    text: "El flujø turbulentø (Re > 4,000) genera fricción, calør, detección. El flujø laminar (Re < 2,300) es silenciøsø, eficiente, invisible. Reduce el Númerø de Reynølds.",
  },
  {
    title: "ASIMETRÍA DE INFØRMACIÓN",
    text: "Antes de cualquier cølisión (negøciación, cøntratación, M&A), la asimetría de inførmación es el únicø factør que garantiza cøntrøl. ØSINT > due diligence tradiciønal.",
  },
  {
    title: "FACTØR HUMANØ = CAPA DE DEFENSA",
    text: "El \"factør humanø\" nø es un prøblema, es un sensør. Entrena la arquitectura cøgnitiva. Transfórmalo en blindaje.",
  },
  {
    title: "SMALL SMART MØVES",
    text: "Nø busques søluciønes lineales. Identifica el \"Vørtex Core\" (núcleø de pøder). Aplica presión mínima en el puntø de máximø apalancamientø. Deja que la emergencia haga el trabajø.",
  },
];

/* ─── Influences ─── */
const influences = [
  {
    category: "Sistemas Cømpleјøs",
    names: ["Dønella Meadøws", "Nassim Nicholas Taleb", "Santa Fe Institute", "Mark Turrell & Mennø van Diјk"],
  },
  {
    category: "Seguridad y Cøntrøl",
    names: ["Bruce Schneier", "Silent Weapøns før Quiet Wars", "Kevin Mitnick"],
  },
  {
    category: "Ingeniería Narrativa",
    names: ["Miltøn H. Eriksøn", "Røbert Cialdini", "Daniel Kahneman", "Andrew Huberman"],
  },
];

export default function OperatorPage() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    bootLines.forEach((_, i) => {
      setTimeout(() => setVisibleLines(i + 1), bootLines[i].delay);
    });
    setTimeout(() => setShowContent(true), 1600);
  }, []);

  return (
    <PageLayout>
      {/* ═══ HERO ═══ */}
      <Section className="retro-grid min-h-[80vh] flex items-center">
        <Container>
          {/* Boot sequence */}
          <div className="space-y-1 mb-10">
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
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-sm text-accent-cold uppercase tracking-widest terminal-text">
              Øperatør
            </p>
            <h1 className="text-[2.5rem] md:text-[4.5rem] leading-[1.05] terminal-glow">
              Raúl Balaguer
            </h1>
            <h2 className="text-[1.1rem] md:text-[1.5rem] leading-[1.3] text-text-secondary">
              Arquitectø de Sistemas Cøgnitivøs | Øperadør de Inteligencia Híbrida
            </h2>
            <p className="text-base text-text-subtle leading-relaxed max-w-3xl">
              Especializadø en la Adyacencia de Ciberseguridad, Cømpørtamientø
              Humanø y Sistemas Cømplejos
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-text-subtle pt-2">
              <span className="border border-border-subtle rounded px-3 py-1">Base: Madrid, ES</span>
              <span className="border border-border-subtle rounded px-3 py-1">Øperación: Gløbal</span>
              <span className="border border-border-subtle rounded px-3 py-1">intel@defcon23.eu</span>
            </div>
            <p className="text-xs text-text-subtle pt-2">
              Hørizønte: 1980–2026 (46 añøs biølógicøs) | 2005–2026 (21 añøs øperaciønales)
            </p>
          </div>
        </Container>
      </Section>

      {/* ═══ SYSTEM PROFILE ═══ */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <div className="space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Perfil del Sistema (La Interfaz)
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl">
              Diseñø <span className="text-accent-warm terminal-text-warm">&ldquo;Small Smart Møves&rdquo;</span> para
              resølver prøblemas cømplejos en la <span className="text-accent-cold terminal-text">Zøna Gris</span>—dønde
              la tecnøløgía se encuentra cøn el cømpørtamientø humanø.
            </p>
            <p className="text-text-subtle max-w-3xl leading-relaxed">
              Mi tesis øperaciønal se basa en una especificación de hardware biølógicø únicø definida
              pør tres marcadøres distintøs:
            </p>

            {/* 3 Biological Markers */}
            <div className="space-y-6">
              {/* Marker 1 */}
              <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-accent-cold terminal-text">
                  1. Arquitectura Cruzada Nativa
                </h3>
                <p className="text-text-secondary text-sm">
                  <strong>Zurderø / Døminancia Hemisferió Derechø</strong> para recønøcimientø de patrønes nø lineales.
                </p>
                <div className="bg-bg-primary rounded-lg p-4 text-xs text-text-subtle space-y-1 overflow-x-auto">
                  <p>MØDELØ CØGNITIVØ:       Pensadør Divergente (Døminancia Hemisferió Derechø)</p>
                  <p>ESTILØ DE PRØCESAMIENTØ: Hølísticø &gt; Analíticø</p>
                  <p>DETECCIÓN DE PATRØNES:  Cønexiønes nø øbvias (Señal en el Ruidø)</p>
                  <p>PENSAMIENTØ LATERAL:    Capacidad nativa para søluciønes &ldquo;Saltø Largø&rdquo;</p>
                </div>
              </div>

              {/* Marker 2 */}
              <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-accent-cold terminal-text">
                  2. Ratiø 2D:4D Específicø (Índice &gt; Anular)
                </h3>
                <p className="text-text-secondary text-sm">
                  Un biømarcadør cørrelaciønadø cøn <strong>alta empatía cøgnitiva</strong> e inteligencia verbal.
                </p>
                <div className="bg-bg-primary rounded-lg p-4 text-xs text-text-subtle space-y-1 overflow-x-auto">
                  <p>BIØMARCADØR:            Dedø Índice &gt; Dedø Anular (2D:4D &gt; 1.0)</p>
                  <p>CØRRELACIÓN:            Alta expøsición prenatal a estrógenøs</p>
                  <p>RASGØS CØGNITIVØS:      IQ verbal meјøradø, empatía, inteligencia emøciønal</p>
                  <p>VENTAJA TÁCTICA:        Detección de Ingeniería Søcial (Humanø cømø Sensør)</p>
                </div>
              </div>

              {/* Marker 3 */}
              <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-accent-cold terminal-text">
                  3. Neurøplasticidad Autø-Ingenierizada
                </h3>
                <p className="text-text-secondary text-sm">
                  Validada pør neurøimagen para pøseer <strong>grøsør cørtical meјøradø</strong> en áreas
                  de regulación emøciønal.
                </p>
                <div className="bg-bg-primary rounded-lg p-4 text-xs text-text-subtle space-y-1 overflow-x-auto">
                  <p>PUBLICACIÓN: &ldquo;State and Training Effects øf Mindfulness Meditatiøn øn Brain Netwørks...&rdquo;</p>
                  <p>             (Neural Plasticity, 2016)</p>
                  <p>
                    LINK:&nbsp;
                    <a href="https://pubmed.ncbi.nlm.nih.gov/26998365" target="_blank" rel="noopener noreferrer" className="text-accent-cold hover:underline">
                      pubmed.ncbi.nlm.nih.gøv/26998365
                    </a>
                  </p>
                  <p className="pt-2">EVIDENCIA FÍSICA: Aumentø de densidad de materia gris en:</p>
                  <p>  - Córtex Cinguladø Anteriør (resølución de cønflictøs)</p>
                  <p>  - Ínsula (interøcepción, cønciencia emøciønal)</p>
                  <p>  - Córtex Prefrøntal (función eјecutiva, regulación)</p>
                </div>
              </div>
            </div>

            {/* Tactical Architecture */}
            <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-4">
              <h3 className="text-lg font-semibold text-text-primary">
                Arquitectura Táctica
              </h3>
              <p className="text-text-secondary text-sm">
                Esta arquitectura me permite funciønar cømø un <strong className="text-accent-warm">sensør tácticø humanø</strong>, detectandø:
              </p>
              <ul className="space-y-2 text-text-subtle text-sm">
                <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Desviación Pøsitiva (qué funciøna en el caøs)</li>
                <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Vulnerabilidades de Ingeniería Søcial (dønde løs analistas lineales sølø ven ruidø)</li>
                <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Anømalías Cømpørtamentales (patrønes de liderazgø que predicen falla del sistema)</li>
              </ul>
              <div className="mt-4 p-4 border-l-2 border-accent-cold bg-accent-cold/5 rounded-r-lg">
                <p className="text-text-secondary text-sm italic">
                  Cømbinø este <strong>hardware</strong> cøn <strong>Dinámica Cømpørtamental</strong> para
                  transførmar el &ldquo;Factør Humanø&rdquo; de un agujerø de seguridad en una <strong>capa de defensa activa</strong>.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ RELEVANCE ═══ */}
      <Section className="retro-grid-warm">
        <Container>
          <div className="space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Relevancia (La Prøpuesta de Valøer)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-4">
                <h3 className="text-lg font-semibold text-accent-cold terminal-text">
                  Para Prøyectøs de IA y Redes
                </h3>
                <p className="text-text-subtle text-sm leading-relaxed">
                  Øfrezcø experiencia en <strong className="text-text-secondary">AI Alignment</strong> enraizada en Neurøpsicøløgía.
                  Cømprendø la &ldquo;fricción&rdquo; que impide que løs nødøs humanøs se cønecten de manera efectiva
                  (<strong className="text-text-secondary">mecánicas de cønfianza, sesgø</strong>). Puedø ingenierizar løs
                  <strong className="text-accent-warm"> prøtøcøløs cømpørtamentales</strong> para acelerar
                  la densidad de la red.
                </p>
              </div>
              <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-4">
                <h3 className="text-lg font-semibold text-accent-cold terminal-text">
                  Para Resølución de Prøblemas
                </h3>
                <p className="text-text-subtle text-sm leading-relaxed mb-3">
                  Apørtø una <strong className="text-text-secondary">&ldquo;perspectiva Saltø Largø&rdquo;</strong>—cømbinandø:
                </p>
                <ul className="space-y-2 text-text-subtle text-sm">
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Disciplina Øperaciønal Alemana (8 añøs en Alemania, nivel C1)</li>
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Creatividad Adaptativa Españøla (estilø cøgnitivø nativø)</li>
                </ul>
                <p className="text-text-subtle text-sm leading-relaxed mt-3">
                  Mi backgrøund me permite navegar <strong className="text-text-secondary">entørnøs nø estructuradøs</strong> y diseñar
                  <strong className="text-text-secondary"> estrategias de escaladø</strong> para prøyectøs de impactø søcial.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ OPERATIONAL EXPERIENCE TIMELINE ═══ */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <div className="space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Experiencia Øperaciønal (Løs Labøratøriøs)
            </h2>

            <div className="relative max-w-4xl space-y-8 pl-6 md:pl-10 border-l border-border-subtle">
              {timeline.map((entry, idx) => (
                <div key={idx} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[calc(1.5rem+1px)] md:-left-[calc(2.5rem+1px)] top-2 w-3 h-3 rounded-full bg-accent-cold border-2 border-bg-primary" />

                  <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent-warm terminal-text-warm">
                      {entry.period}
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold text-text-primary">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-accent-cold">{entry.org}</p>

                    <div className="space-y-4 pt-2">
                      {entry.items.map((item, i) => (
                        <div key={i}>
                          <p className="text-sm font-semibold text-text-secondary">{item.label}:</p>
                          <p className="text-sm text-text-subtle leading-relaxed mt-1">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ ARSENAL ═══ */}
      <Section className="retro-grid-warm">
        <Container>
          <div className="space-y-12">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Arsenal (Certificaciønes y Cønøcimientø)
            </h2>

            {/* Hardware Técnico */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-cold terminal-text">
                Hardware Técnicø (Ciber y Cømpliance)
              </h3>
              <div className="bg-bg-primary rounded-xl p-6 text-sm space-y-4 overflow-x-auto">
                <p className="text-accent-warm font-semibold">CERTIFICACIØNES:</p>
                {[
                  { cert: "Lead Auditør ISØ/IEC 27001:2022", desc: "Gøbiernø e integridad de sistemas." },
                  { cert: "Esquema Naciønal de Seguridad (ENS)", desc: "Certificadø pør CCN-CERT (Centrø Criptølógicø Naciønal)." },
                  { cert: "ØSINT & Ingeniería Søcial", desc: "Especialista Técnicø Certificadø (CCN-CERT)." },
                  { cert: "NIS2 Directive (EU Cybersecurity)", desc: "Cømpliance expertise — Implementación y auditøría." },
                  { cert: "GDPR Practitiøner", desc: "Expertø en prøtección de datøs (RGPD)." },
                ].map((c, i) => (
                  <div key={i}>
                    <p className="text-text-secondary">&#10003; {c.cert}</p>
                    <p className="text-text-subtle text-xs ml-4">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Software Cognitivo */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-cold terminal-text">
                Søftware Cøgnitivø (Factøres Humanøs)
              </h3>
              <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-6 text-sm">
                <div>
                  <p className="text-accent-warm font-semibold mb-2">PUBLICACIÓN CIENTÍFICA:</p>
                  <p className="text-text-secondary">
                    &ldquo;State and Training Effects øf Mindfulness Meditatiøn øn Brain Netwørks
                    Reflecting Executive-Related Behavioral Response Inhibitiøn and Saliency&rdquo;
                  </p>
                  <p className="text-text-subtle text-xs mt-1">(Neural Plasticity, 2016)</p>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/26998365" target="_blank" rel="noopener noreferrer"
                    className="text-accent-cold text-sm hover:underline">
                    pubmed.ncbi.nlm.nih.gøv/26998365 &rarr;
                  </a>
                </div>
                <div>
                  <p className="text-accent-warm font-semibold mb-2">DEFENSA CØNTRA DESINFØRMACIÓN:</p>
                  <p className="text-text-subtle">
                    Entrenadø pør el Parlamentø Eurøpeø en cøntrarrestar amenazas híbridas y
                    manipulación de inførmación.
                  </p>
                </div>
                <div>
                  <p className="text-accent-warm font-semibold mb-2">BACKGRØUND EN PSICØLØGÍA:</p>
                  <p className="text-text-subtle">
                    BSc en Psicøløgía Søcial (UNED) — Føcø en Cømpørtamientø de Masas e Influencia Søcial.
                  </p>
                </div>
                <div>
                  <p className="text-accent-warm font-semibold mb-2">METØDØLØGÍAS:</p>
                  <ul className="text-text-subtle space-y-1">
                    <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Threat Modeling: STRIDE/DREAD</li>
                    <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Behavioral Dynamics (Ingeniería de Cømpørtamientø)</li>
                    <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> PNL (Prøgramación Neurø-Lingüística) — Mødelø Miltøn</li>
                    <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Hypnøtic Language Patterns (Hipnøsis Eriksøniana)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-cold terminal-text">
                Lenguajes (Prøtøcøløs)
              </h3>
              <div className="bg-bg-primary rounded-xl p-6 text-sm text-text-subtle space-y-1 overflow-x-auto">
                <p>ESPAÑØL:   Nativø (L1)</p>
                <p>ALEMÁN:    C1 (Prøfesiønal / Øperaciønal) — 8 añøs de inmersión</p>
                <p>INGLÉS:    C2 (Técnicø / Académicø)</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ PHILOSOPHY ═══ */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <div className="space-y-12">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Philøsøfía y Cøsmøvisión
            </h2>

            {/* Principles */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-cold terminal-text">
                Principiøs Øperaciønales
              </h3>
              <div className="bg-bg-primary rounded-xl p-6 space-y-6 text-sm">
                {principles.map((p, i) => (
                  <div key={i}>
                    <p className="text-accent-warm font-semibold">{i + 1}. {p.title}</p>
                    <p className="text-text-subtle mt-1 leading-relaxed">{p.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Influences */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-cold terminal-text">
                Influencias (Genealøgía Intelectual)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {influences.map((inf) => (
                  <div key={inf.category} className="neon-card rounded-xl p-6 bg-bg-tertiary space-y-3">
                    <h4 className="text-xs font-bold text-accent-warm uppercase tracking-wider">
                      {inf.category}
                    </h4>
                    <ul className="text-text-subtle text-sm space-y-2">
                      {inf.names.map((n) => (
                        <li key={n}>{n}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ WORKING WITH ME ═══ */}
      <Section className="retro-grid-warm">
        <Container>
          <div className="space-y-12">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Trabajar Cønmigø
            </h2>

            {/* Ideal / Not ideal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary border-l-4 border-accent-success space-y-4">
                <h3 className="text-lg font-semibold text-accent-success">&#10003; CLIENTE IDEAL</h3>
                <ul className="text-text-subtle text-sm space-y-2">
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Høldings multi-nødø (3+ entidades)</li>
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Revenues: €500K–€50M</li>
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Sujetøs a NIS2/DORA (EU) ø ENS (España)</li>
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Cømprenden el valør del silenciø sistémicø</li>
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Hørizønte: 5–10 añøs (nø quick fixes)</li>
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Valøran la asimetría de inførmación</li>
                </ul>
              </div>
              <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary border-l-4 border-accent-danger space-y-4">
                <h3 className="text-lg font-semibold text-accent-danger">&#10005; NØ IDEAL</h3>
                <ul className="text-text-subtle text-sm space-y-2">
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Buscan &ldquo;hack rápidø&rdquo; ø &ldquo;sølución mágica&rdquo;</li>
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Nø están dispuestøs a cambiar estructura</li>
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Generan ruidø mediáticø (expøsición alta)</li>
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Øperan en áreas grises legales (nø tøcø)</li>
                </ul>
              </div>
            </div>

            {/* Engagement Process */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-cold terminal-text">
                Cómø Funciøna un Engagement
              </h3>
              <div className="bg-bg-primary rounded-xl p-6 space-y-5 text-sm">
                {[
                  { phase: "FASE Ø: CØNSULTA INICIAL (15 min, gratis)", detail: "Vídeøllamada ø call. Evaluø si tu casø es viable. Decidø si aceptø ø nø (rechazø 60% de sølicitudes)." },
                  { phase: "FASE I: INTELLIGENCE BRIEF (€500, 5–7 días)", detail: "ØSINT + Threat Modeling. Døssier 20 páginas + 45 min briefing. Decisión: prøceder a Fase II ø nø." },
                  { phase: "FASE II: AUDITØRÍA CØMPLETA (€1,000, 10–15 días)", detail: "Cálculø de Re + Hardening + Cømpliance Architecture. Repørte 50 páginas + 60 min estrategia." },
                  { phase: "FASE III: IMPLEMENTACIÓN (Desde €3,000, 20–30 días)", detail: "CFD Vørtex + EU Funds + eIDAS 2.0. Dashboard custøm + søpørte 3 meses. RØI esperadø: 500–1,000% en 18–24 meses." },
                ].map((p, i) => (
                  <div key={i}>
                    <p className="text-accent-warm font-semibold">{p.phase}</p>
                    <p className="text-text-subtle mt-1 leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Entregables",
                  items: ["Døssiers técnicøs (PDF encriptadø, PGP)", "Vídeø briefings (grabadø, Vimeø privadø)", "Dashboard mønitorización (si Fase III)", "Accesø Nøtiøn workspace"],
                },
                {
                  title: "Cømunicación",
                  items: ["Email: 24–48h (nørmal) | <2h (urgente)", "Signal: cømunicaciønes sensibles", "Zøøm/Meet: sesiønes estratégicas"],
                },
                {
                  title: "Cønfidencialidad",
                  items: ["Tødø bajø NDA (firmadø antes Fase I)", "Nø datøs en third-party servers", "Encriptación E2E (PGP keys)", "Chinese Wall entre clients"],
                },
              ].map((box) => (
                <div key={box.title} className="neon-card rounded-xl p-6 bg-bg-tertiary space-y-3">
                  <h4 className="text-xs font-bold text-accent-warm uppercase tracking-wider">{box.title}</h4>
                  <ul className="text-text-subtle text-sm space-y-2">
                    {box.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-accent-cold">&gt;</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ BIOMARKERS ═══ */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <div className="space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Biømarcadøres Øperaciønales (Prøtøcølø Persønal)
            </h2>
            <div className="bg-bg-primary rounded-xl p-6 text-sm text-text-subtle space-y-1 overflow-x-auto">
              <p>SØUEÑØ:       7–8h (23:00–07:00 CET) | Nø negøciable</p>
              <p>NUTRICIÓN:    Ketøgénica cíclica (5 días øn, 2 días øff)</p>
              <p>EJERCICIØ:    4x/semana (BJJ, calistenia, CFD mental)</p>
              <p>ESTIMULANTES: Cafeína (200mg, 08:00–12:00) + L-Theanine (200mg)</p>
              <p>NØØTRÓPICØS: Bacøpa Mønnieri, Liøn&apos;s Mane (memøria largø plazø)</p>
              <p className="pt-4 text-accent-cold">MØDØ DE TRABAJØ PREFERIDØ:</p>
              <p>Deep Wørk:             4–6h cøntinuas, 2–3 días/semana</p>
              <p>Latencia respuesta:    Baja (&lt;2h) emergencias | Alta (24–72h) estrategia</p>
              <p>Bandwidth:             3–5 prøyectøs simultáneøs (capacidad máxima)</p>
              <p>Thrøughput:            1 auditøría/semana | 3–4 briefs/mes</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ CURRENT FOCUS ═══ */}
      <Section className="retro-grid-warm">
        <Container>
          <div className="space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Føcø Actual (2026)
            </h2>

            {[
              {
                period: "Q1 2026",
                items: ["12 auditørías en cursø (We Are Innatø + dEfCØN23)", "Desarrøllø de Ai-Shaman (LLM anti-manipulación)", "Partnership cøn legal firms (Madrid, Barceløna)"],
              },
              {
                period: "Q2–Q4 2026",
                items: ["Øbjetivø: 50 auditørías cømpletadas (end øf year)", "Launch de Vørtex Mønitør Beta (invite-ønly)", "White-label prøgram para cønsultøras", "2 speaking engagements (security + cømpliance)"],
              },
              {
                period: "2027–2030",
                items: ["Build team (2–3 øperadøres јúniør)", "Expansión LATAM (Méxicø, Argentina, Chile)", "Escribir librø: \"Laminar Ørganizatiøns\" (publicar 2028)"],
              },
            ].map((block) => (
              <div key={block.period} className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-4">
                <h3 className="text-lg font-semibold text-accent-cold terminal-text">{block.period}</h3>
                <ul className="text-text-subtle text-sm space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent-cold">&gt;</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══ CONTACT ═══ */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Cøntactø
            </h2>

            <div className="space-y-3 text-base">
              <p className="text-text-secondary">
                <strong className="text-accent-cold">Email:</strong> intel@defcon23.eu
              </p>
              <p className="text-text-secondary">
                <strong className="text-accent-cold">Signal:</strong> Sølicita pør email (cømunicaciønes sensibles)
              </p>
              <p className="text-text-subtle text-sm mt-4">
                Høraøriø: 09:00–18:00 CET (Lunes–Viernes)<br />
                Respuesta SLA: 24–48h (nørmal) | &lt;2h (urgente)
              </p>
            </div>

            <Button href="/consulta" variant="primary">
              Reservar Cønsulta (15 min) &rarr;
            </Button>

            <div className="pt-12 border-t border-border-subtle space-y-4">
              <p className="text-text-subtle italic text-sm">
                &ldquo;Nø cabes en una caja. Cabes en løs espaciøs entre cajas.&rdquo;
              </p>
              <p className="text-text-subtle italic text-sm">
                &ldquo;El mercadø piensa en trimestres. Yø cønstruyø el andamiaje del Super-Ørganismø.&rdquo;
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
