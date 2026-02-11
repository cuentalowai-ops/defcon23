"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Brain,
  Network,
  Code2,
  Globe,
  Mail,
  Linkedin,
  Github,
  ChevronDown,
  ChevronUp,
  MapPin,
  Cpu,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

/* ═══ Animation Variants ═══ */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const } }),
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={staggerContainer} className={className}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DATA — Operator Profile (Masterprompt Approved Content)
   ═══════════════════════════════════════════════════════════════ */

const bootLines = [
  { text: "> INICIALIZANDO PERFIL OPERATOR...", delay: 0 },
  { text: "> CARGANDO ARQUITECTURA COGNITIVA...", delay: 400 },
  { text: "> SYNAPSYS PROTOCOL: ENLAZADO", delay: 800 },
  { text: "> BIOMARCADORES: VALIDADOS", delay: 1200 },
  { text: "> OPERATOR: ONLINE", delay: 1600 },
];

const arsenal = [
  {
    id: "inteligencia",
    title: "Inteligencia & Análisis",
    icon: "brain",
    color: "magenta",
    items: [
      "Máster Profesional Analista Inteligencia — LISA Institute + UDIMA",
      "AI Agentic Design Patterns — DeepLearning.AI",
      "Strategic Intelligence Analyst — Via Office",
      "OSINT, HUMINT, IMINT, SIGINT",
      "Hybrid Threats & Disinformation — European Parliament",
    ],
  },
  {
    id: "ciberseguridad",
    title: "Ciberseguridad & Compliance",
    icon: "shield",
    color: "teal",
    items: [
      "ISO/IEC 27001:2022 Lead Auditor — Mastermind",
      "ENS (Esquema Nacional Seguridad) — CCN-CERT",
      "OSINT & Fuentes Abiertas — CCN-CERT",
      "Ingeniería Social & Arte del Engaño — CCN-CERT",
      "RGPD/GDPR Expert — European Parliament",
      "NIS2 Directive Implementation",
    ],
  },
  {
    id: "eidas",
    title: "Identidad Digital & eIDAS",
    icon: "shield",
    color: "coral",
    items: [
      "eIDAS 2.0 Architecture (EU 2024/1183)",
      "EUDI Wallet Relying Party Development",
      "OID4VP, SD-JWT (RFC 9278), DIDComm v2",
      "SSI (Self-Sovereign Identity) — walt.id fork",
      "ISO/IEC 18013-5 (mDL)",
    ],
  },
  {
    id: "networking",
    title: "Networking & SD-WAN",
    icon: "network",
    color: "purple",
    items: [
      "Extreme Certified Associate — Fabric Connect",
      "ExtremeCloud Universal ZTNA",
      "Extreme Certified Associate — SD-WAN",
      "Extreme Platform ONE — Technical Overview",
      "Extreme Certified Associate — ExtremeCloud IQ",
    ],
  },
  {
    id: "programacion",
    title: "Programación & Cryptography",
    icon: "code",
    color: "amber",
    items: [
      "Python 3.12, TypeScript, Astro, React, Next.js",
      "RSA-4096, ECDSA P-384, Ed25519, AES-256",
      "TPM 2.0, YubiKey FIPS, AMD Memory Guard",
      "Gataca SDK, walt.id SSI Kit",
      "GitHub: github.com/cuentalowai-ops",
    ],
  },
  {
    id: "neurosistemas",
    title: "Sistemas Complejos & Neurociencia",
    icon: "cpu",
    color: "teal",
    items: [
      "Publicación Neural Plasticity 2016 (PubMed: 26998365)",
      "BSc Social Psychology — UNED",
      "Fraunhofer Institut Award \"Kids Kreativ\" (2023)",
      "Neuroplasticity Engineering",
    ],
  },
];

const experience = [
  {
    company: "Synapsys Laminar Protocol",
    role: "CEO & Founder",
    period: "Dic 2025 – Presente",
    color: "coral",
    highlights: [
      "Gateway EUDI Wallet Relying Party (TRL 7)",
      "[S]DEF verificación táctica NATO (TRL 6)",
      "Alianza Gataca Labs (LoI Ene 2026)",
      "EUDIS Grant €450K",
      "Proyección €14.4M (2026-2028)",
    ],
  },
  {
    company: "We Are Innato",
    role: "CEO & Lead Strategist",
    period: "Oct 2024 – Presente",
    color: "teal",
    highlights: [
      "Laboratorio Cognitive Defense (INCIBE)",
      "Ai-Shaman: LLMs anti-manipulación",
      "Validación: Google, Telefónica, Defensa",
    ],
  },
  {
    company: "Via Office / Confianza23",
    role: "Strategic Intelligence Analyst",
    period: "Ene–Jun 2024",
    color: "amber",
    highlights: [
      "OSINT & Geopolitical Analysis C-level",
      "Supply chain risk assessment",
    ],
  },
  {
    company: "Vincerola GmbH / K. Sankt Marien",
    role: "Human Systems Engineer",
    period: "2015–2023",
    color: "purple",
    highlights: [
      "Gestión equipos multidisciplinarios (Alemán C1)",
      "Fraunhofer Award 2023",
    ],
  },
  {
    company: "AEMIND",
    role: "Cognitive Optimization Consultant",
    period: "2005–2015",
    color: "magenta",
    highlights: [
      "Co-investigador Neural Plasticity",
      "Situational Awareness training",
    ],
  },
];

const contactLinks = [
  { icon: "mail", label: "intel@defcon23.eu", href: "mailto:intel@defcon23.eu" },
  { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/raulbalaguer" },
  { icon: "github", label: "GitHub", href: "https://github.com/cuentalowai-ops" },
  { icon: "mail", label: "raul.balaguer@thesynapsys.io", href: "mailto:raul.balaguer@thesynapsys.io" },
];

const principles = [
  {
    title: "EL HUESO PERMANECE",
    text: "La carne (aplicaciones, marcas, personas) se pudre. El HUESO (protocolo, arquitectura, estructura) permanece. Diseña en la capa de protocolo.",
  },
  {
    title: "LAMINACIÓN > TURBULENCIA",
    text: "El flujo turbulento genera fricción, calor, detección. El flujo laminar es silencioso, eficiente, invisible. Reduce el Número de Reynolds.",
  },
  {
    title: "ASIMETRÍA DE INFORMACIÓN",
    text: "Antes de cualquier colisión, la asimetría de información es el único factor que garantiza control. OSINT > due diligence tradicional.",
  },
  {
    title: "FACTOR HUMANO = CAPA DE DEFENSA",
    text: "El \"factor humano\" no es un problema, es un sensor. Entrena la arquitectura cognitiva. Transfórmalo en blindaje.",
  },
  {
    title: "SMALL SMART MOVES",
    text: "Identifica el Vortex Core (núcleo de poder). Aplica presión mínima en el punto de máximo apalancamiento. Deja que la emergencia haga el trabajo.",
  },
];

/* ═══════════════════════════════════════════════════════════════ */

function getIcon(name: string, size = 20) {
  const props = { size, className: "flex-shrink-0" };
  switch (name) {
    case "brain": return <Brain {...props} />;
    case "shield": return <Shield {...props} />;
    case "network": return <Network {...props} />;
    case "code": return <Code2 {...props} />;
    case "cpu": return <Cpu {...props} />;
    case "mail": return <Mail {...props} />;
    case "linkedin": return <Linkedin {...props} />;
    case "github": return <Github {...props} />;
    default: return <Shield {...props} />;
  }
}

function getColorClasses(color: string) {
  switch (color) {
    case "coral": return { border: "border-coral/40", text: "text-coral", bg: "bg-coral/10", glow: "hover:shadow-[0_0_8px_rgba(255,153,102,0.3)] md:hover:shadow-[0_0_20px_rgba(255,153,102,0.3)]" };
    case "teal": return { border: "border-teal/40", text: "text-teal", bg: "bg-teal/10", glow: "hover:shadow-[0_0_8px_rgba(58,155,155,0.3)] md:hover:shadow-[0_0_20px_rgba(58,155,155,0.3)]" };
    case "amber": return { border: "border-amber/40", text: "text-amber", bg: "bg-amber/10", glow: "hover:shadow-[0_0_8px_rgba(255,204,102,0.3)] md:hover:shadow-[0_0_20px_rgba(255,204,102,0.3)]" };
    case "purple": return { border: "border-purple/40", text: "text-purple", bg: "bg-purple/10", glow: "hover:shadow-[0_0_8px_rgba(123,92,170,0.3)] md:hover:shadow-[0_0_20px_rgba(123,92,170,0.3)]" };
    case "magenta": return { border: "border-magenta/40", text: "text-magenta", bg: "bg-magenta/10", glow: "hover:shadow-[0_0_8px_rgba(208,96,128,0.3)] md:hover:shadow-[0_0_20px_rgba(208,96,128,0.3)]" };
    default: return { border: "border-border-subtle", text: "text-accent-cold", bg: "bg-accent-cold/10", glow: "" };
  }
}

/* ═══ ArsenalCard — Accordion mobile, always-open desktop ═══ */
function ArsenalCard({ cat, isOpen, onToggle, index }: { cat: typeof arsenal[0]; isOpen: boolean; onToggle: () => void; index: number }) {
  const colors = getColorClasses(cat.color);
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className={`rounded-2xl bg-bg-tertiary border ${colors.border} transition-shadow duration-300 ${colors.glow} overflow-hidden`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 p-4 md:p-5 text-left md:cursor-default min-h-[48px]"
        aria-expanded={isOpen}
        aria-controls={`arsenal-${cat.id}`}
      >
        <span className={`${colors.text} ${colors.bg} p-2 rounded-lg flex-shrink-0`}>{getIcon(cat.icon)}</span>
        <h3 className={`text-sm md:text-base font-bold ${colors.text} flex-1 leading-tight`}>{cat.title}</h3>
        <span className="md:hidden text-text-subtle">
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>
      <div
        id={`arsenal-${cat.id}`}
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 md:max-h-[600px] opacity-0 md:opacity-100"
        }`}
        style={{ overflow: "hidden" }}
      >
        <ul className="px-4 pb-4 md:px-5 md:pb-5 space-y-2 border-t border-border-subtle pt-3">
          {cat.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed text-text-subtle">
              <span className={`${colors.text} mt-0.5 flex-shrink-0 text-xs`}>▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function OperatorPage() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [openArsenal, setOpenArsenal] = useState<string | null>(null);

  useEffect(() => {
    bootLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay);
    });
    setTimeout(() => setShowContent(true), 2000);
  }, []);

  return (
    <PageLayout>
      {/* ═══ HERO ═══ */}
      <Section className="retro-grid min-h-[80vh] flex items-center">
        <Container>
          <div className="space-y-1 mb-8" aria-live="polite">
            {bootLines.slice(0, visibleLines).map((line, i) => (
              <p key={i} className="text-xs md:text-sm text-accent-cold terminal-text boot-line" style={{ animationDelay: `${i * 0.05}s` }}>
                {line.text}
              </p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl space-y-6"
          >
            <p className="text-sm text-accent-cold uppercase tracking-widest terminal-text">Operator</p>
            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[4.5rem] leading-[1.05] text-gradient-warm">
              Raúl Balaguer
            </h1>
            <h2 className="text-[1rem] md:text-[1.25rem] leading-[1.3] text-text-secondary max-w-2xl">
              CEO Synapsys Laminar Protocol · Cognitive Systems Architect
            </h2>
            <p className="text-[15px] md:text-base text-text-subtle leading-relaxed max-w-3xl">
              Ingeniero de sistemas complejos en la <span className="text-accent-cold">Zona Gris</span> — donde
              la ciberseguridad, la identidad digital y el factor humano convergen.
            </p>
            <p className="text-sm text-text-subtle">
              Metodología: <span className="text-accent-warm">Small Smart Moves</span> → Resultados exponenciales.
            </p>
            <div className="flex flex-wrap gap-2.5 text-xs text-text-subtle pt-2">
              <span className="flex items-center gap-1.5 border border-border-subtle rounded-full px-3 py-1.5">
                <MapPin size={12} className="text-accent-cold" /> Madrid, ES
              </span>
              <span className="flex items-center gap-1.5 border border-border-subtle rounded-full px-3 py-1.5">
                <Mail size={12} className="text-accent-warm" /> intel@defcon23.eu
              </span>
              <span className="flex items-center gap-1.5 border border-border-subtle rounded-full px-3 py-1.5">
                <Globe size={12} className="text-teal" /> Operación: Global
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/consulta" variant="primary">Reservar Consulta (15 min) →</Button>
              <Button href="/proyectos" variant="secondary">Ver Proyectos →</Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* ═══ SYSTEM PROFILE ═══ */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <AnimatedSection className="max-w-4xl space-y-8">
            <motion.h2 variants={fadeUp} custom={0} className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">Perfil del Sistema</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-[15px] md:text-lg text-text-secondary leading-relaxed max-w-3xl">
              Diseño <span className="text-accent-warm">Small Smart Moves</span> para resolver problemas
              complejos en la <span className="text-accent-cold">Zona Gris</span> — donde la tecnología se
              encuentra con el comportamiento humano.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { title: "Arquitectura Cruzada Nativa", subtitle: "Zurdo / Dominancia Hemisferio Derecho", detail: "Reconocimiento de patrones no lineales. Pensamiento divergente. Conexiones no obvias.", color: "teal" },
                { title: "Ratio 2D:4D Específico", subtitle: "Alta empatía cognitiva", detail: "IQ verbal mejorado, inteligencia emocional. Detección de Ingeniería Social (Humano como Sensor).", color: "coral" },
                { title: "Neuroplasticidad Validada", subtitle: "Neural Plasticity, 2016", detail: "Grosor cortical mejorado en áreas de regulación emocional. Verificado por neuroimagen.", color: "purple" },
              ].map((marker, i) => {
                const c = getColorClasses(marker.color);
                return (
                  <motion.div key={marker.title} variants={fadeUp} custom={i + 2} className={`rounded-2xl p-5 md:p-6 bg-bg-tertiary border ${c.border} space-y-3 ${c.glow} transition-shadow duration-300`}>
                    <div className={`w-8 h-1 rounded-full ${c.bg} mb-1`} style={{ backgroundColor: marker.color === "teal" ? "#3A9B9B" : marker.color === "coral" ? "#FF9966" : "#7B5CAA" }} />
                    <h3 className={`text-sm md:text-[15px] font-bold ${c.text} leading-tight`}>{marker.title}</h3>
                    <p className="text-xs md:text-[13px] text-text-secondary font-medium">{marker.subtitle}</p>
                    <p className="text-xs md:text-[13px] text-text-subtle leading-relaxed">{marker.detail}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={fadeUp} custom={5} className="p-4 border-l-2 border-accent-cold bg-accent-cold/5 rounded-r-lg">
              <p className="text-[13px] md:text-sm text-text-secondary italic leading-relaxed">
                Combino este <strong>hardware biológico</strong> con <strong>Dinámica Comportamental</strong> para
                transformar el &ldquo;Factor Humano&rdquo; de un agujero de seguridad en una{" "}
                <strong className="text-accent-warm">capa de defensa activa</strong>.
              </p>
            </motion.div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* ═══ ARSENAL ═══ */}
      <Section id="arsenal" className="retro-grid-warm">
        <Container>
          <AnimatedSection className="space-y-8">
            <div className="space-y-3">
              <motion.h2 variants={fadeUp} custom={0} className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">Arsenal</motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-[13px] md:text-sm text-text-subtle">Certificaciones y conocimiento técnico. Toca para expandir cada categoría.</motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {arsenal.map((cat, idx) => (
                <ArsenalCard key={cat.id} cat={cat} isOpen={openArsenal === cat.id} onToggle={() => setOpenArsenal(openArsenal === cat.id ? null : cat.id)} index={idx + 2} />
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* ═══ EXPERIENCE TIMELINE ═══ */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <AnimatedSection className="space-y-8">
            <motion.h2 variants={fadeUp} custom={0} className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">Experiencia Operacional</motion.h2>
            <div className="relative max-w-4xl space-y-5 pl-6 md:pl-10 border-l-2 border-teal/30">
              {experience.map((job, idx) => {
                const c = getColorClasses(job.color);
                return (
                  <motion.div key={idx} variants={fadeUp} custom={idx + 1} className="relative">
                    <div className={`absolute -left-[25px] md:-left-[41px] top-5 w-3 h-3 rounded-full border-2 border-bg-primary`} style={{ backgroundColor: job.color === "coral" ? "#FF9966" : job.color === "teal" ? "#3A9B9B" : job.color === "amber" ? "#FFCC66" : job.color === "purple" ? "#7B5CAA" : "#D06080" }} />
                    <div className={`rounded-2xl p-5 md:p-6 bg-bg-tertiary border ${c.border} space-y-3 ${c.glow} transition-shadow duration-300`}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="space-y-0.5">
                          <h3 className="text-[15px] md:text-lg font-bold text-text-primary leading-tight">{job.role}</h3>
                          <p className={`text-sm ${c.text}`}>{job.company}</p>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-accent-warning bg-accent-warning/10 rounded-full px-3 py-1 self-start whitespace-nowrap border border-accent-warning/20">
                          {job.period}
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {job.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-[13px] text-text-subtle leading-relaxed">
                            <span className={`${c.text} mt-0.5 flex-shrink-0 text-xs`}>▸</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* ═══ LANGUAGES ═══ */}
      <Section className="retro-grid-warm">
        <Container>
          <AnimatedSection className="max-w-4xl space-y-8">
            <motion.h2 variants={fadeUp} custom={0} className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">Protocolos de Comunicación</motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { lang: "Español", level: "Nativo", pct: 100, color: "coral", hex: "#FF9966" },
                { lang: "Alemán", level: "C1 (Professional)", pct: 85, color: "teal", hex: "#3A9B9B" },
                { lang: "Inglés", level: "Profesional", pct: 90, color: "amber", hex: "#FFCC66" },
              ].map((l, i) => {
                const c = getColorClasses(l.color);
                return (
                  <motion.div key={l.lang} variants={fadeUp} custom={i + 1} className={`rounded-2xl p-5 bg-bg-tertiary border ${c.border} space-y-3 ${c.glow} transition-shadow duration-300`}>
                    <h3 className={`text-[15px] font-bold ${c.text}`}>{l.lang}</h3>
                    <p className="text-xs text-text-subtle">{l.level}</p>
                    <div className="w-full bg-bg-primary rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-2 rounded-full"
                        style={{ backgroundColor: l.hex }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* ═══ PHILOSOPHY ═══ */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <AnimatedSection className="max-w-4xl space-y-8">
            <motion.h2 variants={fadeUp} custom={0} className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">Principios Operacionales</motion.h2>
            <div className="space-y-3">
              {principles.map((p, i) => (
                <motion.div key={i} variants={fadeUp} custom={i + 1} className="rounded-2xl p-5 md:p-6 bg-bg-tertiary border border-border-subtle hover:border-accent-warm/30 transition-all duration-300 space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-accent-warm font-bold text-lg leading-none mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-sm font-bold text-accent-warm uppercase tracking-wider leading-tight">{p.title}</h3>
                      <p className="text-[13px] md:text-sm text-text-subtle leading-relaxed">{p.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} custom={6} className="text-center pt-4">
              <p className="text-text-subtle italic text-sm">&ldquo;No encajo en una caja. Encajo en los espacios entre cajas.&rdquo;</p>
            </motion.div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* ═══ CONTACT ═══ */}
      <Section className="retro-grid-warm">
        <Container>
          <AnimatedSection className="max-w-3xl mx-auto text-center space-y-8">
            <motion.h2 variants={fadeUp} custom={0} className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">Contacto</motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  variants={fadeUp}
                  custom={i + 1}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="rounded-2xl p-4 bg-bg-tertiary border border-border-subtle flex flex-col items-center gap-3 touch-feedback hover:border-coral/40 hover:-translate-y-1 hover:shadow-[0_0_8px_rgba(255,153,102,0.2)] md:hover:shadow-[0_0_16px_rgba(255,153,102,0.3)] transition-all duration-300 group min-h-[48px]"
                  aria-label={link.label}
                >
                  <span className="text-accent-cold group-hover:text-accent-warm transition-colors p-2 rounded-lg bg-accent-cold/5 group-hover:bg-accent-warm/10">
                    {getIcon(link.icon)}
                  </span>
                  <span className="text-[10px] md:text-xs text-text-subtle group-hover:text-text-secondary transition-colors text-center leading-tight truncate w-full">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
            <motion.div variants={fadeUp} custom={5} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button href="/consulta" variant="primary">Reservar Consulta Gratuita (15 min) →</Button>
              <Button href="/proyectos" variant="secondary">Ver Proyectos →</Button>
            </motion.div>
          </AnimatedSection>
        </Container>
      </Section>
    </PageLayout>
  );
}
