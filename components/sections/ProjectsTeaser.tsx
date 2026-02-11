import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Star } from "lucide-react";

/**
 * ProjectsTeaser — Home page teaser for /proyectos
 * Shows Synapsys + [S]DEF featured projects with key metrics
 * Mobile-first: stack vertical, touch targets 44px+
 */

const featuredProjects = [
  {
    name: "Synapsys Laminar Protocol",
    tagline: "Gateway EUDI Wallet Relying Party",
    status: "TRL 7 — OPERATIVO",
    statusColor: "bg-coral/15 text-coral border-coral/30",
    borderColor: "border-coral/30 hover:border-coral/60",
    glowColor: "hover:shadow-[0_0_8px_rgba(255,153,102,0.2)] md:hover:shadow-[0_0_20px_rgba(255,153,102,0.3)]",
    metrics: [
      { value: "1,000+", label: "Verificaciones" },
      { value: "€1.8M", label: "MRR 2028" },
    ],
  },
  {
    name: "[S]DEF",
    tagline: "Verificación Táctica Air-Gapped NATO",
    status: "TRL 6 — PILOT READY",
    statusColor: "bg-amber/15 text-amber border-amber/30",
    borderColor: "border-amber/30 hover:border-amber/60",
    glowColor: "hover:shadow-[0_0_8px_rgba(255,204,102,0.2)] md:hover:shadow-[0_0_20px_rgba(255,204,102,0.3)]",
    metrics: [
      { value: "3.2s", label: "Verificación" },
      { value: "€14.4M", label: "Revenue 2028" },
    ],
  },
];

export default function ProjectsTeaser() {
  return (
    <Section id="proyectos" className="retro-grid-warm">
      <Container>
        <div className="space-y-10 md:space-y-14">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-accent-cold terminal-text">
              PROYECTOS
            </p>
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-gradient-warm">
              Tecnología Propietaria
            </h2>
            <p className="text-[15px] md:text-lg text-text-secondary leading-relaxed max-w-2xl">
              Desde <span className="text-accent-cold">identidad digital soberana</span> hasta{" "}
              <span className="text-accent-warm">verificación air-gapped NATO</span> — sistemas
              diseñados para operar donde la regulación se encuentra con la realidad.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.name}
                className={`rounded-2xl p-5 md:p-7 bg-bg-secondary/85 backdrop-blur-sm md:backdrop-blur-md border ${project.borderColor} ${project.glowColor} transition-all duration-300 touch-feedback space-y-4`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1.5 min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <Star size={12} className="text-accent-warm fill-accent-warm flex-shrink-0" />
                      <span className="text-[10px] md:text-xs font-bold text-accent-warm uppercase tracking-wider">
                        Destacado
                      </span>
                    </div>
                    <h3 className="text-[15px] md:text-lg font-bold text-text-primary leading-tight">
                      {project.name}
                    </h3>
                    <p className="text-[13px] text-text-subtle leading-snug">{project.tagline}</p>
                  </div>
                  <span className={`text-[9px] md:text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border whitespace-nowrap self-start ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 md:gap-3">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="text-center p-2.5 md:p-3 bg-bg-primary/60 rounded-xl">
                      <p className="text-base md:text-xl font-bold text-text-primary leading-tight">{m.value}</p>
                      <p className="text-[9px] md:text-[11px] text-text-subtle uppercase tracking-wider mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Button href="/proyectos" variant="secondary">
              Ver todos los proyectos →
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
