"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

/* ─── Boot sequence ─── */
const bootLines = [
  { text: "> INICIALIZANDO PERFIL...", delay: 0 },
  { text: "> CARGANDO ARQUITECTURA COGNITIVA...", delay: 400 },
  { text: "> BIOMARCADORES: VALIDADOS", delay: 800 },
  { text: "> OPERATOR: ONLINE", delay: 1200 },
];

/* ─── Timeline data ─── */
const timeline = [
  {
    period: "OCT 2024 – PRESENTE",
    title: "CEO y Estratega Principal",
    org: "We Are Innato | Apoyado por INCIBE",
    items: [
      {
        label: "Emergencia Aplicada",
        text: "Despliegue de un \"Small Smart Move\" (herramienta de ciberseguridad basada en narrativa para primera infancia) para desenrollar un resultado descomunal: cambio generacional en higiene digital.",
      },
      {
        label: "Activación de Red",
        text: "Validación de Hubs clave (Google, Telefónica, Sector Defensa) para amplificar alcance sin gasto lineal.",
      },
      {
        label: "Desarrollo de IA",
        text: "Liderando Ai-Shaman — entrenar LLMs para detectar patrones de manipulación emocional (Deepfakes/Ingeniería Social).",
      },
    ],
  },
  {
    period: "ENE 2024 – JUN 2024",
    title: "Analista de Inteligencia Estratégica",
    org: "Vía Office / Confianza23",
    items: [
      {
        label: "Señal vs. Ruido",
        text: "Utilización de OSINT y Análisis Geopolítico para filtrar flujos de datos compleјos para liderazgo eјecutivo.",
      },
      {
        label: "Expansión de Adyacencia",
        text: "Identificación de riesgos no obvios en cadenas de suministro mediante análisis de anomalías comportamentales en liderazgo de competencia.",
      },
    ],
  },
  {
    period: "2015 – 2023",
    title: "Ingeniero de Sistemas Humanos",
    org: "Vincerola GmbH / K. Sankt Marien (Alemania)",
    items: [
      {
        label: "Sincronización del Sistema",
        text: "Gestión de equipos multidisciplinarios en Alemán C1, estableciendo ritmos para mantener estabilidad operacional bajo estrés.",
      },
      {
        label: "Innovación Premiada",
        text: "Ganador del Premio Fraunhofer Institut \"Kids Kreativ\" (2023) por diseñar sistemas educativos que fusionan tecnología con desarrollo cognitivo.",
      },
    ],
  },
  {
    period: "2005 – 2015",
    title: "Consultor de Optimización Cognitiva",
    org: "AEMIND / Sector Privado (Freelance)",
    items: [
      {
        label: "Investigación en Neuroplasticidad",
        text: "Co-investigador en estudio publicado en Neural Plasticity (2016), validando que entrenamiento cognitivo puede recablear redes cerebrales para resistir estrés y depresión.",
      },
      {
        label: "Ingeniería de Rendimiento",
        text: "Entrenamiento de operadores en Conciencia Situacional y regulación del sistema nervioso autónomo para reducir error humano.",
      },
    ],
  },
];

/* ─── Principles ─── */
const principles = [
  {
    title: "EL HUESO PERMANECE",
    text: "La carne (aplicaciones, marcas, personas) se pudre. El HUESO (protocolo, arquitectura, estructura) permanece. Diseña en la capa de protocolo.",
  },
  {
    title: "LAMINACIÓN > TURBULENCIA",
    text: "El flujo turbulento (Re > 4,000) genera fricción, calor, detección. El flujo laminar (Re < 2,300) es silencioso, eficiente, invisible. Reduce el Número de Reynolds.",
  },
  {
    title: "ASIMETRÍA DE INFORMACIÓN",
    text: "Antes de cualquier colisión (negociación, contratación, M&A), la asimetría de información es el único factor que garantiza control. OSINT > due diligence tradicional.",
  },
  {
    title: "FACTOR HUMANO = CAPA DE DEFENSA",
    text: "El \"factor humano\" no es un problema, es un sensor. Entrena la arquitectura cognitiva. Transfórmalo en blindaje.",
  },
  {
    title: "SMALL SMART MOVES",
    text: "No busques soluciones lineales. Identifica el \"Vortex Core\" (núcleo de poder). Aplica presión mínima en el punto de máximo apalancamiento. Deja que la emergencia haga el trabajo.",
  },
];

/* ─── Influences ─── */
const influences = [
  {
    category: "Sistemas Compleјos",
    names: ["Donella Meadows", "Nassim Nicholas Taleb", "Santa Fe Institute", "Mark Turrell & Menno van Diјk"],
  },
  {
    category: "Seguridad y Control",
    names: ["Bruce Schneier", "Silent Weapons for Quiet Wars", "Kevin Mitnick"],
  },
  {
    category: "Ingeniería Narrativa",
    names: ["Milton H. Erikson", "Robert Cialdini", "Daniel Kahneman", "Andrew Huberman"],
  },
];

export default function OperatorPage() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    bootLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay);
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
              Operator
            </p>
            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[4.5rem] leading-[1.05] terminal-glow">
              Raúl Balaguer
            </h1>
            <h2 className="text-[1.1rem] md:text-[1.5rem] leading-[1.3] text-text-secondary">
              Arquitecto de Sistemas Cognitivos | Operador de Inteligencia Híbrida
            </h2>
            <p className="text-base text-text-subtle leading-relaxed max-w-3xl">
              Especializado en la Adyacencia de Ciberseguridad, Comportamiento
              Humano y Sistemas Complejos
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-text-subtle pt-2">
              <span className="border border-border-subtle rounded px-3 py-1">Base: Madrid, ES</span>
              <span className="border border-border-subtle rounded px-3 py-1">Operación: Global</span>
              <span className="border border-border-subtle rounded px-3 py-1">intel@defcon23.eu</span>
            </div>
            <p className="text-xs text-text-subtle pt-2">
              Horizonte: 1980–2026 (46 años biológicos) | 2005–2026 (21 años operacionales)
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
              Diseño <span className="text-accent-warm terminal-text-warm">&ldquo;Small Smart Moves&rdquo;</span> para
              resolver problemas complejos en la <span className="text-accent-cold terminal-text">Zona Gris</span>—donde
              la tecnología se encuentra con el comportamiento humano.
            </p>
            <p className="text-text-subtle max-w-3xl leading-relaxed">
              Mi tesis operacional se basa en una especificación de hardware biológico único definida
              por tres marcadores distintos:
            </p>

            {/* 3 Biological Markers */}
            <div className="space-y-6">
              {/* Marker 1 */}
              <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-accent-cold terminal-text">
                  1. Arquitectura Cruzada Nativa
                </h3>
                <p className="text-text-secondary text-sm">
                  <strong>Zurdo / Dominancia Hemisferio Derecho</strong> para reconocimiento de patrones no lineales.
                </p>
                <div className="bg-bg-primary rounded-lg p-3 md:p-4 text-xs text-text-subtle space-y-1 break-words overflow-hidden">
                  <p><span className="text-accent-cold">MODELO COGNITIVO:</span> Pensador Divergente (Dominancia Hemisferio Derecho)</p>
                  <p><span className="text-accent-cold">ESTILO DE PROCESAMIENTO:</span> Holístico &gt; Analítico</p>
                  <p><span className="text-accent-cold">DETECCIÓN DE PATRONES:</span> Conexiones no obvias (Señal en el Ruido)</p>
                  <p><span className="text-accent-cold">PENSAMIENTO LATERAL:</span> Capacidad nativa para soluciones &ldquo;Salto Largo&rdquo;</p>
                </div>
              </div>

              {/* Marker 2 */}
              <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-accent-cold terminal-text">
                  2. Ratio 2D:4D Específico (Índice &gt; Anular)
                </h3>
                <p className="text-text-secondary text-sm">
                  Un biomarcador correlacionado con <strong>alta empatía cognitiva</strong> e inteligencia verbal.
                </p>
                <div className="bg-bg-primary rounded-lg p-3 md:p-4 text-xs text-text-subtle space-y-1 break-words overflow-hidden">
                  <p><span className="text-accent-cold">BIOMARCADOR:</span> Dedo Índice &gt; Dedo Anular (2D:4D &gt; 1.0)</p>
                  <p><span className="text-accent-cold">CORRELACIÓN:</span> Alta exposición prenatal a estrógenos</p>
                  <p><span className="text-accent-cold">RASGOS COGNITIVOS:</span> IQ verbal meјorado, empatía, inteligencia emocional</p>
                  <p><span className="text-accent-cold">VENTAJA TÁCTICA:</span> Detección de Ingeniería Social (Humano como Sensor)</p>
                </div>
              </div>

              {/* Marker 3 */}
              <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-accent-cold terminal-text">
                  3. Neuroplasticidad Auto-Ingenierizada
                </h3>
                <p className="text-text-secondary text-sm">
                  Validada por neuroimagen para poseer <strong>grosor cortical meјorado</strong> en áreas
                  de regulación emocional.
                </p>
                <div className="bg-bg-primary rounded-lg p-3 md:p-4 text-xs text-text-subtle space-y-1 break-words overflow-hidden">
                  <p><span className="text-accent-cold">PUBLICACIÓN:</span> &ldquo;State and Training Effects of Mindfulness Meditation on Brain Networks...&rdquo; (Neural Plasticity, 2016)</p>
                  <p>
                    <span className="text-accent-cold">LINK:</span>&nbsp;
                    <a href="https://pubmed.ncbi.nlm.nih.gov/26998365" target="_blank" rel="noopener noreferrer" className="text-accent-cold hover:underline break-all">
                      pubmed.ncbi.nlm.nih.gov/26998365
                    </a>
                  </p>
                  <p className="pt-2"><span className="text-accent-cold">EVIDENCIA FÍSICA:</span> Aumento de densidad de materia gris en:</p>
                  <p className="pl-2">- Córtex Cingulado Anterior (resolución de conflictos)</p>
                  <p className="pl-2">- Ínsula (interocepción, conciencia emocional)</p>
                  <p className="pl-2">- Córtex Prefrontal (función eјecutiva, regulación)</p>
                </div>
              </div>
            </div>

            {/* Tactical Architecture */}
            <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-4">
              <h3 className="text-lg font-semibold text-text-primary">
                Arquitectura Táctica
              </h3>
              <p className="text-text-secondary text-sm">
                Esta arquitectura me permite funcionar como un <strong className="text-accent-warm">sensor táctico humano</strong>, detectando:
              </p>
              <ul className="space-y-2 text-text-subtle text-sm">
                <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Desviación Positiva (qué funciona en el caos)</li>
                <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Vulnerabilidades de Ingeniería Social (donde los analistas lineales solo ven ruido)</li>
                <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Anomalías Comportamentales (patrones de liderazgo que predicen falla del sistema)</li>
              </ul>
              <div className="mt-4 p-4 border-l-2 border-accent-cold bg-accent-cold/5 rounded-r-lg">
                <p className="text-text-secondary text-sm italic">
                  Combino este <strong>hardware</strong> con <strong>Dinámica Comportamental</strong> para
                  transformar el &ldquo;Factor Humano&rdquo; de un agujero de seguridad en una <strong>capa de defensa activa</strong>.
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
              Relevancia (La Propuesta de Valoer)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-4">
                <h3 className="text-lg font-semibold text-accent-cold terminal-text">
                  Para Proyectos de IA y Redes
                </h3>
                <p className="text-text-subtle text-sm leading-relaxed">
                  Ofrezco experiencia en <strong className="text-text-secondary">AI Alignment</strong> enraizada en Neuropsicología.
                  Comprendo la &ldquo;fricción&rdquo; que impide que los nodos humanos se conecten de manera efectiva
                  (<strong className="text-text-secondary">mecánicas de confianza, sesgo</strong>). Puedo ingenierizar los
                  <strong className="text-accent-warm"> protocolos comportamentales</strong> para acelerar
                  la densidad de la red.
                </p>
              </div>
              <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-4">
                <h3 className="text-lg font-semibold text-accent-cold terminal-text">
                  Para Resolución de Problemas
                </h3>
                <p className="text-text-subtle text-sm leading-relaxed mb-3">
                  Aporto una <strong className="text-text-secondary">&ldquo;perspectiva Salto Largo&rdquo;</strong>—combinando:
                </p>
                <ul className="space-y-2 text-text-subtle text-sm">
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Disciplina Operacional Alemana (8 años en Alemania, nivel C1)</li>
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Creatividad Adaptativa Española (estilo cognitivo nativo)</li>
                </ul>
                <p className="text-text-subtle text-sm leading-relaxed mt-3">
                  Mi background me permite navegar <strong className="text-text-secondary">entornos no estructurados</strong> y diseñar
                  <strong className="text-text-secondary"> estrategias de escalado</strong> para proyectos de impacto social.
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
              Experiencia Operacional (Los Laboratorios)
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
              Arsenal (Certificaciones y Conocimiento)
            </h2>

            {/* Hardware Técnico */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-cold terminal-text">
                Hardware Técnico (Ciber y Compliance)
              </h3>
              <div className="bg-bg-primary rounded-xl p-4 md:p-6 text-sm space-y-4 break-words overflow-hidden">
                <p className="text-accent-warm font-semibold">CERTIFICACIONES:</p>
                {[
                  { cert: "Lead Auditor ISO/IEC 27001:2022", desc: "Gobierno e integridad de sistemas." },
                  { cert: "Esquema Nacional de Seguridad (ENS)", desc: "Certificado por CCN-CERT (Centro Criptológico Nacional)." },
                  { cert: "OSINT & Ingeniería Social", desc: "Especialista Técnico Certificado (CCN-CERT)." },
                  { cert: "NIS2 Directive (EU Cybersecurity)", desc: "Compliance expertise — Implementación y auditoría." },
                  { cert: "GDPR Practitioner", desc: "Experto en protección de datos (RGPD)." },
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
                Software Cognitivo (Factores Humanos)
              </h3>
              <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary space-y-6 text-sm">
                <div>
                  <p className="text-accent-warm font-semibold mb-2">PUBLICACIÓN CIENTÍFICA:</p>
                  <p className="text-text-secondary">
                    &ldquo;State and Training Effects of Mindfulness Meditation on Brain Networks
                    Reflecting Executive-Related Behavioral Response Inhibition and Saliency&rdquo;
                  </p>
                  <p className="text-text-subtle text-xs mt-1">(Neural Plasticity, 2016)</p>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/26998365" target="_blank" rel="noopener noreferrer"
                    className="text-accent-cold text-sm hover:underline">
                    pubmed.ncbi.nlm.nih.gov/26998365 &rarr;
                  </a>
                </div>
                <div>
                  <p className="text-accent-warm font-semibold mb-2">DEFENSA CONTRA DESINFORMACIÓN:</p>
                  <p className="text-text-subtle">
                    Entrenado por el Parlamento Europeo en contrarrestar amenazas híbridas y
                    manipulación de información.
                  </p>
                </div>
                <div>
                  <p className="text-accent-warm font-semibold mb-2">BACKGROUND EN PSICOLOGÍA:</p>
                  <p className="text-text-subtle">
                    BSc en Psicología Social (UNED) — Foco en Comportamiento de Masas e Influencia Social.
                  </p>
                </div>
                <div>
                  <p className="text-accent-warm font-semibold mb-2">METODOLOGÍAS:</p>
                  <ul className="text-text-subtle space-y-1">
                    <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Threat Modeling: STRIDE/DREAD</li>
                    <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Behavioral Dynamics (Ingeniería de Comportamiento)</li>
                    <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> PNL (Programación Neuro-Lingüística) — Modelo Milton</li>
                    <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Hypnotic Language Patterns (Hipnosis Eriksoniana)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-cold terminal-text">
                Lenguajes (Protocolos)
              </h3>
              <div className="bg-bg-primary rounded-xl p-4 md:p-6 text-sm text-text-subtle space-y-2 break-words overflow-hidden">
                <p><span className="text-accent-cold">ESPAÑOL:</span> Nativo (L1)</p>
                <p><span className="text-accent-cold">ALEMÁN:</span> C1 (Profesional / Operacional) — 8 años de inmersión</p>
                <p><span className="text-accent-cold">INGLÉS:</span> C2 (Técnico / Académico)</p>
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
              Philosofía y Cosmovisión
            </h2>

            {/* Principles */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-cold terminal-text">
                Principios Operacionales
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
                Influencias (Genealogía Intelectual)
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
              Trabajar Conmigo
            </h2>

            {/* Ideal / Not ideal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary border-l-4 border-accent-success space-y-4">
                <h3 className="text-lg font-semibold text-accent-success">&#10003; CLIENTE IDEAL</h3>
                <ul className="text-text-subtle text-sm space-y-2">
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Holdings multi-nodo (3+ entidades)</li>
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Revenues: €500K–€50M</li>
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Sujetos a NIS2/DORA (EU) o ENS (España)</li>
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Comprenden el valor del silencio sistémico</li>
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Horizonte: 5–10 años (no quick fixes)</li>
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Valoran la asimetría de información</li>
                </ul>
              </div>
              <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-tertiary border-l-4 border-accent-danger space-y-4">
                <h3 className="text-lg font-semibold text-accent-danger">&#10005; NO IDEAL</h3>
                <ul className="text-text-subtle text-sm space-y-2">
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Buscan &ldquo;hack rápido&rdquo; o &ldquo;solución mágica&rdquo;</li>
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> No están dispuestos a cambiar estructura</li>
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Generan ruido mediático (exposición alta)</li>
                  <li className="flex items-start gap-2"><span className="text-accent-cold">&gt;</span> Operan en áreas grises legales (no toco)</li>
                </ul>
              </div>
            </div>

            {/* Engagement Process */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-cold terminal-text">
                Cómo Funciona un Engagement
              </h3>
              <div className="bg-bg-primary rounded-xl p-6 space-y-5 text-sm">
                {[
                  { phase: "FASE O: CONSULTA INICIAL (15 min, gratis)", detail: "Vídeollamada o call. Evaluo si tu caso es viable. Decido si acepto o no (rechazo 60% de solicitudes)." },
                  { phase: "FASE I: INTELLIGENCE BRIEF (€500, 5–7 días)", detail: "OSINT + Threat Modeling. Dossier 20 páginas + 45 min briefing. Decisión: proceder a Fase II o no." },
                  { phase: "FASE II: AUDITORÍA COMPLETA (€1,000, 10–15 días)", detail: "Cálculo de Re + Hardening + Compliance Architecture. Reporte 50 páginas + 60 min estrategia." },
                  { phase: "FASE III: IMPLEMENTACIÓN (Desde €3,000, 20–30 días)", detail: "CFD Vortex + EU Funds + eIDAS 2.0. Dashboard custom + soporte 3 meses. ROI esperado: 500–1,000% en 18–24 meses." },
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
                  items: ["Dossiers técnicos (PDF encriptado, PGP)", "Vídeo briefings (grabado, Vimeo privado)", "Dashboard monitorización (si Fase III)", "Acceso Notion workspace"],
                },
                {
                  title: "Comunicación",
                  items: ["Email: 24–48h (normal) | <2h (urgente)", "Signal: comunicaciones sensibles", "Zoom/Meet: sesiones estratégicas"],
                },
                {
                  title: "Confidencialidad",
                  items: ["Todo bajo NDA (firmado antes Fase I)", "No datos en third-party servers", "Encriptación E2E (PGP keys)", "Chinese Wall entre clients"],
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
              Biomarcadores Operacionales (Protocolo Personal)
            </h2>
            <div className="bg-bg-primary rounded-xl p-4 md:p-6 text-sm text-text-subtle space-y-2 break-words overflow-hidden">
              <p><span className="text-accent-cold">SOUEÑO:</span> 7–8h (23:00–07:00 CET) | No negociable</p>
              <p><span className="text-accent-cold">NUTRICIÓN:</span> Ketogénica cíclica (5 días on, 2 días off)</p>
              <p><span className="text-accent-cold">EJERCICIO:</span> 4x/semana (BJJ, calistenia, CFD mental)</p>
              <p><span className="text-accent-cold">ESTIMULANTES:</span> Cafeína (200mg, 08:00–12:00) + L-Theanine (200mg)</p>
              <p><span className="text-accent-cold">NOOTRÓPICOS:</span> Bacopa Monnieri, Lion&apos;s Mane (memoria largo plazo)</p>
              <p className="pt-3 text-accent-warm font-semibold">MODO DE TRABAJO PREFERIDO:</p>
              <p><span className="text-accent-cold">Deep Work:</span> 4–6h continuas, 2–3 días/semana</p>
              <p><span className="text-accent-cold">Latencia respuesta:</span> Baja (&lt;2h) emergencias | Alta (24–72h) estrategia</p>
              <p><span className="text-accent-cold">Bandwidth:</span> 3–5 proyectos simultáneos (capacidad máxima)</p>
              <p><span className="text-accent-cold">Throughput:</span> 1 auditoría/semana | 3–4 briefs/mes</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══ CURRENT FOCUS ═══ */}
      <Section className="retro-grid-warm">
        <Container>
          <div className="space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
              Foco Actual (2026)
            </h2>

            {[
              {
                period: "Q1 2026",
                items: ["12 auditorías en curso (We Are Innato + dEfCØN23)", "Desarrollo de Ai-Shaman (LLM anti-manipulación)", "Partnership con legal firms (Madrid, Barcelona)"],
              },
              {
                period: "Q2–Q4 2026",
                items: ["Objetivo: 50 auditorías completadas (end of year)", "Launch de Vortex Monitor Beta (invite-only)", "White-label program para consultoras", "2 speaking engagements (security + compliance)"],
              },
              {
                period: "2027–2030",
                items: ["Build team (2–3 operadores јúnior)", "Expansión LATAM (México, Argentina, Chile)", "Escribir libro: \"Laminar Organizations\" (publicar 2028)"],
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
              Contacto
            </h2>

            <div className="space-y-3 text-base">
              <p className="text-text-secondary">
                <strong className="text-accent-cold">Email:</strong> intel@defcon23.eu
              </p>
              <p className="text-text-secondary">
                <strong className="text-accent-cold">Signal:</strong> Solicita por email (comunicaciones sensibles)
              </p>
              <p className="text-text-subtle text-sm mt-4">
                Horaorio: 09:00–18:00 CET (Lunes–Viernes)<br />
                Respuesta SLA: 24–48h (normal) | &lt;2h (urgente)
              </p>
            </div>

            <Button href="/consulta" variant="primary">
              Reservar Consulta (15 min) &rarr;
            </Button>

            <div className="pt-12 border-t border-border-subtle space-y-4">
              <p className="text-text-subtle italic text-sm">
                &ldquo;No cabes en una caja. Cabes en los espacios entre cajas.&rdquo;
              </p>
              <p className="text-text-subtle italic text-sm">
                &ldquo;El mercado piensa en trimestres. Yo construyo el andamiaje del Super-Organismo.&rdquo;
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
