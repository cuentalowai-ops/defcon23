"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Globe,
  ExternalLink,
  Mail,
  Star,
  TrendingUp,
  Users,
  Zap,
  Lock,
  Server,
  BookOpen,
  ChevronDown,
  ChevronUp,
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
   DATA — Projects (Masterprompt Approved Content)
   ═══════════════════════════════════════════════════════════════ */

const bootLines = [
  { text: "> CARGANDO PORTAFOLIO OPERACIONAL...", delay: 0 },
  { text: "> SYNAPSYS PROTOCOL: ACTIVO", delay: 400 },
  { text: "> [S]DEF NODE: VERIFICADO", delay: 800 },
  { text: "> PROYECTOS: ONLINE", delay: 1200 },
];

interface ProjectData {
  id: string;
  name: string;
  tagline: string;
  status: string;
  statusColor: string;
  featured: boolean;
  mission?: string;
  problem?: string;
  solution?: string;
  stack?: string;
  metrics: { icon: string; label: string; value: string }[];
  highlights: string[];
  links?: { label: string; href: string; icon: string }[];
  revenue?: { period: string; amount: string }[];
  certifications?: string[];
}

const projects: ProjectData[] = [
  {
    id: "synapsys",
    name: "Synapsys Laminar Protocol",
    tagline: "Gateway EUDI Wallet Relying Party — eIDAS 2.0 Sovereignty",
    status: "TRL 7 — OPERATIVO",
    statusColor: "coral",
    featured: true,
    mission: "Verificación credenciales digitales soberanas (EUDI Wallets) bajo Regulación UE 2024/1183.",
    stack: "Python 3.12, OpenSSL, TPM 2.0, Next.js, Tailwind, walt.id SSI Kit, Gataca SDK, OID4VP, SD-JWT",
    metrics: [
      { icon: "zap", label: "Verificaciones", value: "1,000+" },
      { icon: "trending", label: "MRR Actual", value: "€1,200" },
      { icon: "star", label: "Proyección 2028", value: "€1.8M MRR" },
    ],
    highlights: [
      "Producción desde Diciembre 2025",
      "Casos: Banca (KYC), Educación (diplomas), Salud (historiales médicos)",
      "Alianza Gataca Labs (LoI Enero 2026)",
      "EUDIS Grant €450K aprobado",
    ],
    links: [
      { label: "thesynapsys.io", href: "https://thesynapsys.io", icon: "globe" },
      { label: "raul.balaguer@thesynapsys.io", href: "mailto:raul.balaguer@thesynapsys.io", icon: "mail" },
    ],
  },
  {
    id: "sdef",
    name: "[S]DEF — Secure Defense Electronic Framework",
    tagline: "PROYECTO ESPECIAL: Verificación Táctica Air-Gapped NATO",
    status: "TRL 6 — PILOT READY",
    statusColor: "amber",
    featured: true,
    problem: "eIDAS 2.0 requiere conectividad. Instalaciones militares operan air-gapped. €2.5B ineficiencia anual UE Defensa.",
    solution: "LTTP (Laminar Trust Injection Protocol): ONLINE STATION → USB CRYPTO → [S]DEF NODE (0% conectividad).",
    metrics: [
      { icon: "zap", label: "Verificación", value: "3.2 seg" },
      { icon: "trending", label: "Coste", value: "€0.10/verif." },
      { icon: "lock", label: "Soberanía", value: "100% UE" },
    ],
    highlights: [
      "Hardware: Lenovo ThinkPad T14s Gen 4, YubiKey 5C FIPS, IronKey D300S, ACR122U NFC",
      "Precio: €15K–€50K por nodo",
      "TAM €3.9B | Proyección 2026-2028: €14.4M revenue acumulado",
      "IP: 100% Raúl Balaguer (Patent Pending: Protocolo LTTP)",
    ],
    revenue: [
      { period: "2026", amount: "€699K (8 nodos + EUDIS Grant)" },
      { period: "2027", amount: "€2.7M (73 nodos NATO)" },
      { period: "2028", amount: "€11M (323 nodos, 5 países UE)" },
    ],
    certifications: [
      "ENS Alto (Q3 2026)",
      "STANAG 4778 (Q3 2026)",
      "CC EAL4+ (Q3 2027)",
      "FIPS 140-3 (Q4 2027)",
    ],
    links: [
      { label: "Contactar", href: "mailto:intel@defcon23.eu", icon: "mail" },
    ],
  },
  {
    id: "defcon23",
    name: "dEfCØN23 — Asesoría & Auditoría",
    tagline: "Consultoría Especializada ISO 27001 | ENS | RGPD",
    status: "OPERATIVO",
    statusColor: "teal",
    featured: false,
    mission: "Consultoría especializada en compliance y ciberseguridad para organizaciones en la Zona Gris regulatoria.",
    metrics: [
      { icon: "users", label: "Target", value: "CTOs/CISOs/DPOs" },
      { icon: "server", label: "Sectores", value: "Financiero, Salud, Gov" },
      { icon: "zap", label: "Metodología", value: "Small Smart Moves" },
    ],
    highlights: [
      "Auditoría ISO/IEC 27001:2022 (Lead Auditor)",
      "Cumplimiento ENS Alto (CCN-CERT)",
      "RGPD/GDPR Compliance",
      "OSINT & Social Engineering Testing",
      "Arquitectura Sistemas Críticos",
      "Human Factor as Defense Layer",
      "Integración SYNAPSYS Protocol (eIDAS 2.0)",
    ],
    links: [
      { label: "defcon23.eu", href: "https://www.defcon23.eu", icon: "globe" },
      { label: "intel@defcon23.eu", href: "mailto:intel@defcon23.eu", icon: "mail" },
    ],
  },
  {
    id: "innato",
    name: "We Are Innato",
    tagline: "Laboratorio Cognitive Defense — Ciberseguridad Infancia",
    status: "OPERATIVO",
    statusColor: "purple",
    featured: false,
    mission: "Aplicación \"Scaling\" (Small Smart Moves → Outsized Results) para transformación generacional higiene digital.",
    metrics: [
      { icon: "users", label: "Support", value: "INCIBE" },
      { icon: "star", label: "Validación", value: "Google, Telefónica" },
      { icon: "book", label: "Enfoque", value: "Cognitive Defense" },
    ],
    highlights: [
      "Ai-Shaman: LLMs detección manipulación emocional",
      "Herramienta narrativa ciberseguridad infancia",
      "Validación: Google, Telefónica, Defensa",
    ],
    links: [
      { label: "weareinnato.com", href: "https://www.weareinnato.com", icon: "globe" },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════ */

function getMetricIcon(name: string, size = 18) {
  const props = { size, className: "flex-shrink-0" };
  switch (name) {
    case "zap": return <Zap {...props} />;
    case "trending": return <TrendingUp {...props} />;
    case "star": return <Star {...props} />;
    case "lock": return <Lock {...props} />;
    case "users": return <Users {...props} />;
    case "server": return <Server {...props} />;
    case "book": return <BookOpen {...props} />;
    default: return <Zap {...props} />;
  }
}

function getLinkIcon(name: string, size = 14) {
  switch (name) {
    case "globe": return <Globe size={size} />;
    case "mail": return <Mail size={size} />;
    default: return <ExternalLink size={size} />;
  }
}

function getStatusBg(color: string) {
  switch (color) {
    case "coral": return "bg-coral/15 text-coral border-coral/30";
    case "amber": return "bg-amber/15 text-amber border-amber/30";
    case "teal": return "bg-teal/15 text-teal border-teal/30";
    case "purple": return "bg-purple/15 text-purple border-purple/30";
    default: return "bg-accent-cold/15 text-accent-cold border-accent-cold/30";
  }
}

function getBorderGlow(color: string) {
  switch (color) {
    case "coral": return "border-coral/30 hover:border-coral/60 hover:shadow-[0_0_8px_rgba(255,153,102,0.2)] md:hover:shadow-[0_0_24px_rgba(255,153,102,0.3)]";
    case "amber": return "border-amber/30 hover:border-amber/60 hover:shadow-[0_0_8px_rgba(255,204,102,0.2)] md:hover:shadow-[0_0_24px_rgba(255,204,102,0.3)]";
    case "teal": return "border-teal/30 hover:border-teal/60 hover:shadow-[0_0_8px_rgba(58,155,155,0.2)] md:hover:shadow-[0_0_24px_rgba(58,155,155,0.3)]";
    case "purple": return "border-purple/30 hover:border-purple/60 hover:shadow-[0_0_8px_rgba(123,92,170,0.2)] md:hover:shadow-[0_0_24px_rgba(123,92,170,0.3)]";
    default: return "border-border-subtle";
  }
}

/* ═══ ProjectCard Component ═══ */
function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  const [expanded, setExpanded] = useState(project.featured);

  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      className={`rounded-2xl bg-bg-tertiary border ${getBorderGlow(project.statusColor)} transition-shadow duration-300 overflow-hidden`}
    >
      {/* Header */}
      <div className="p-5 md:p-7 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="space-y-2 flex-1 min-w-0">
            {project.featured && (
              <span className="inline-flex items-center gap-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-accent-warm">
                <Star size={12} className="fill-accent-warm flex-shrink-0" /> Proyecto Destacado
              </span>
            )}
            <h3 className="text-base md:text-lg font-bold text-text-primary leading-tight">{project.name}</h3>
            <p className="text-[13px] text-text-secondary leading-snug">{project.tagline}</p>
          </div>
          <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border self-start whitespace-nowrap ${getStatusBg(project.statusColor)}`}>
            {project.status}
          </span>
        </div>

        {/* Mission / Problem-Solution */}
        {project.mission && (
          <p className="text-[13px] text-text-subtle leading-relaxed">{project.mission}</p>
        )}
        {project.problem && (
          <div className="space-y-2">
            <div className="p-3 bg-accent-danger/5 border-l-2 border-accent-danger rounded-r-lg">
              <p className="text-[10px] font-bold text-accent-danger mb-1 uppercase tracking-wider">Problema</p>
              <p className="text-[13px] text-text-subtle leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-3 bg-accent-success/5 border-l-2 border-accent-success rounded-r-lg">
              <p className="text-[10px] font-bold text-accent-success mb-1 uppercase tracking-wider">Solución</p>
              <p className="text-[13px] text-text-subtle leading-relaxed">{project.solution}</p>
            </div>
          </div>
        )}

        {/* Metrics Grid — responsive: 1-col on tiny, 3-col on normal */}
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {project.metrics.map((m, i) => (
            <div key={i} className="text-center p-2.5 md:p-3 bg-bg-primary/60 rounded-xl space-y-1">
              <div className="flex justify-center text-accent-cold">{getMetricIcon(m.icon, 16)}</div>
              <p className="text-[13px] md:text-base font-bold text-text-primary leading-tight truncate">{m.value}</p>
              <p className="text-[9px] md:text-[11px] text-text-subtle uppercase tracking-wider leading-tight">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Stack */}
        {project.stack && (
          <div className="text-[12px] text-text-subtle leading-relaxed">
            <span className="text-accent-cold font-semibold">Stack: </span>
            {project.stack}
          </div>
        )}
      </div>

      {/* Expandable details */}
      <motion.div
        initial={project.featured ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        animate={expanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-5 pb-5 md:px-7 md:pb-7 space-y-5 border-t border-border-subtle pt-5">
          {/* Highlights */}
          <div className="space-y-2">
            <h4 className="text-[10px] md:text-xs font-bold text-accent-warm uppercase tracking-wider">Highlights</h4>
            <ul className="space-y-1.5">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-text-subtle leading-relaxed">
                  <span className="text-accent-cold mt-0.5 flex-shrink-0 text-xs">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Revenue projections */}
          {project.revenue && (
            <div className="space-y-2">
              <h4 className="text-[10px] md:text-xs font-bold text-accent-warm uppercase tracking-wider">Proyecciones Revenue</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">
                {project.revenue.map((r, i) => (
                  <div key={i} className="p-3 bg-bg-primary/60 rounded-xl">
                    <p className="text-[10px] md:text-xs font-bold text-accent-cold uppercase tracking-wider">{r.period}</p>
                    <p className="text-[13px] text-text-secondary mt-1 leading-snug">{r.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {project.certifications && (
            <div className="space-y-2">
              <h4 className="text-[10px] md:text-xs font-bold text-accent-warm uppercase tracking-wider">Certificaciones Target</h4>
              <div className="flex flex-wrap gap-2">
                {project.certifications.map((cert, i) => (
                  <span key={i} className="text-[11px] px-2.5 py-1 rounded-full bg-teal/10 text-teal border border-teal/20">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          {project.links && (
            <div className="flex flex-wrap gap-3">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-[13px] text-accent-cold hover:text-accent-warm transition-colors min-h-[44px] px-2"
                  aria-label={link.label}
                >
                  {getLinkIcon(link.icon)}
                  <span>{link.label}</span>
                  <ExternalLink size={10} className="opacity-50" />
                </a>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-center gap-2 py-3 text-[11px] md:text-xs text-text-subtle hover:text-accent-cold transition-colors border-t border-border-subtle min-h-[44px]"
        aria-expanded={expanded}
      >
        {expanded ? (
          <>Menos detalles <ChevronUp size={14} /></>
        ) : (
          <>Ver detalles <ChevronDown size={14} /></>
        )}
      </button>
    </motion.article>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function ProyectosPage() {
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
      <Section className="retro-grid">
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
            className="max-w-4xl space-y-5"
          >
            <p className="text-sm text-accent-cold uppercase tracking-widest terminal-text">Portafolio</p>
            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[4.5rem] leading-[1.05] text-gradient-warm">
              Proyectos
            </h1>
            <p className="text-[15px] md:text-lg text-text-secondary leading-relaxed max-w-3xl">
              Desde <span className="text-accent-cold">identidad digital soberana</span> hasta{" "}
              <span className="text-accent-warm">verificación air-gapped NATO</span> — sistemas diseñados
              para operar en la Zona Gris donde la regulación se encuentra con la realidad.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* ═══ FEATURED PROJECTS ═══ */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <AnimatedSection className="space-y-8">
            <div className="space-y-3">
              <motion.h2 variants={fadeUp} custom={0} className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
                Proyectos Destacados
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-[13px] md:text-sm text-text-subtle">Tecnología propietaria con impacto UE.</motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
              {projects.filter(p => p.featured).map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i + 2} />
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* ═══ OPERATIONAL PROJECTS ═══ */}
      <Section className="retro-grid-warm">
        <Container>
          <AnimatedSection className="space-y-8">
            <div className="space-y-3">
              <motion.h2 variants={fadeUp} custom={0} className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
                Proyectos Operativos
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-[13px] md:text-sm text-text-subtle">Consultoría activa y laboratorios de investigación.</motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {projects.filter(p => !p.featured).map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i + 2} />
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* ═══ CTA ═══ */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <AnimatedSection className="max-w-3xl mx-auto text-center space-y-8">
            <motion.h2 variants={fadeUp} custom={0} className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
              ¿Quieres saber más?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-[13px] md:text-sm text-text-secondary leading-relaxed">
              Los proyectos Synapsys y [S]DEF son propiedad intelectual de Raúl Balaguer.
              Para partnerships, licencias o demos técnicas:
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/consulta" variant="primary">Reservar Consulta (15 min) →</Button>
              <Button href="/operator" variant="secondary">Ver Perfil Operator →</Button>
            </motion.div>
            <motion.p variants={fadeUp} custom={3} className="text-[11px] md:text-xs text-text-subtle">
              <Mail size={12} className="inline mr-1" />
              intel@defcon23.eu | raul.balaguer@thesynapsys.io
            </motion.p>
          </AnimatedSection>
        </Container>
      </Section>
    </PageLayout>
  );
}
