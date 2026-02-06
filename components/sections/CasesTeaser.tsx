import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface Metric {
  label: string;
  value: string;
  color: "success" | "cold" | "warm";
}

interface CaseStudy {
  title: string;
  sector: string;
  nodos: string;
  problemRe: string;
  problemDetail: string;
  solution: string;
  metrics: Metric[];
  href: string;
}

const cases: CaseStudy[] = [
  {
    title: "Holding Gastronómico-Cultural",
    sector: "Hostelería + Arte + Hospitalidad",
    nodos: "6 entidades",
    problemRe: "Re = 4,200",
    problemDetail: "94 alertas AML en 18 meses",
    solution:
      "Micro-fraccionamiento + sincronización de ciclos + fundación cultural",
    metrics: [
      { label: "Re Final", value: "1,850", color: "success" },
      { label: "Alertas", value: "-83%", color: "success" },
      { label: "Viscosidad", value: "-67%", color: "cold" },
      { label: "Legitimidad", value: "+520%", color: "warm" },
    ],
    href: "/casos/holding-gastronomico",
  },
  {
    title: "Red Servicios Profesionales",
    sector: "Legal + Consultoría + Contabilidad",
    nodos: "11 profesionales independientes",
    problemRe: "Re = 3,800",
    problemDetail: "Estructura piramidal visible, inspección Hacienda",
    solution:
      "Laminación de jerarquía (modelo horizontal-familiar), protocolo de inducción",
    metrics: [
      { label: "Re Final", value: "2,100", color: "success" },
      { label: "Presión reg.", value: "-91%", color: "success" },
      { label: "Escalabilidad", value: "+280%", color: "cold" },
    ],
    href: "/casos/red-profesionales",
  },
  {
    title: "Plataforma Digital P2P",
    sector: "Marketplace servicios — 12,000 tx/mes",
    nodos: "12 países, multi-currency",
    problemRe: "Re = 5,600",
    problemDetail: "94 alertas AML en 6 meses",
    solution:
      "Tokenización del flujo (moneda interna), CFD de 47 rutas → 3 óptimas",
    metrics: [
      { label: "Re Final", value: "1,650", color: "success" },
      { label: "Alertas", value: "-94%", color: "success" },
      { label: "Coste/tx", value: "-68%", color: "cold" },
      { label: "Crecimiento", value: "+410%/año", color: "warm" },
    ],
    href: "/casos/plataforma-p2p",
  },
];

const metricColorMap = {
  success: "text-accent-success",
  cold: "text-accent-cold",
  warm: "text-accent-warm",
};

export default function CasesTeaser() {
  return (
    <Section id="casos" className="bg-bg-secondary">
      <Container>
        <div className="space-y-12">
          <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-center">
            Casos de Estudio
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {cases.map((cs) => (
              <Card key={cs.title} className="bg-bg-primary space-y-6 flex flex-col">
                {/* Header */}
                <div className="space-y-2">
                  <h3 className="text-[1.25rem] leading-[1.3]">{cs.title}</h3>
                  <p className="text-sm text-text-subtle">{cs.sector}</p>
                  <p className="text-xs font-[family-name:var(--font-jetbrains-mono)] text-text-subtle">
                    {cs.nodos}
                  </p>
                </div>

                {/* Problem */}
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-text-subtle">
                    Problema
                  </p>
                  <p className="text-sm font-[family-name:var(--font-jetbrains-mono)] text-accent-danger">
                    {cs.problemRe}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {cs.problemDetail}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-text-subtle">
                    Solución
                  </p>
                  <p className="text-sm text-text-secondary">{cs.solution}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border-subtle">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-xs text-text-subtle">{m.label}</p>
                      <p
                        className={`text-lg font-[family-name:var(--font-jetbrains-mono)] font-semibold ${metricColorMap[m.color]}`}
                      >
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto pt-4">
                  <Button
                    href={cs.href}
                    variant="secondary"
                    className="w-full !py-3 text-sm"
                  >
                    Ver caso completo
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
