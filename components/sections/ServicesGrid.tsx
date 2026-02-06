import { Activity, Shield, Cpu, Scale } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const services = [
  {
    icon: Activity,
    title: "Auditoría de Flujo Sistémico",
    items: [
      "Calculamos tu Número de Reynolds",
      "Análisis de puntos de separación",
      "Mapeo de firma térmica",
      "Diseño de capas de absorción",
    ],
    price: "€4,500",
    href: "/servicios/auditoria-flujo",
  },
  {
    icon: Shield,
    title: "Hardening por Trabajo en Frío",
    items: [
      "Laminación en 7 Pasadas",
      "Eliminación de rugosidades",
      "Micro-fraccionamiento de transacciones",
      "Temple final con legitimidad narrativa",
    ],
    price: "€12,000",
    href: "/servicios/hardening",
  },
  {
    icon: Cpu,
    title: "CFD Aplicado — Vortex Core",
    items: [
      "Simulación de Red Transaccional",
      "Identificación del núcleo de poder",
      "Reconfiguración del flujo",
      "Dashboard de monitorización continua",
    ],
    price: "€8,500",
    href: "/servicios/cfd-vortex",
  },
  {
    icon: Scale,
    title: "Compliance Architecture (EU+ES)",
    items: [
      "Arquitectura de 4 Capas",
      "NIS2, DORA, AI Act, CRA (EU)",
      "ENS, RGPD, Ley Ciberseguridad (España)",
      "Auto-reporte < 2h (DORA req. 4h)",
    ],
    price: "€15,000",
    href: "/servicios/compliance-architecture",
  },
];

export default function ServicesGrid() {
  return (
    <Section id="servicios" className="bg-bg-secondary">
      <Container>
        <div className="space-y-12">
          <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-center">
            Servicios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="bg-bg-tertiary space-y-6">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent-cold/10 shrink-0">
                      <Icon size={24} className="text-accent-cold" />
                    </div>
                    <h3 className="text-[1.25rem] md:text-[1.5rem] leading-[1.3]">
                      {service.title}
                    </h3>
                  </div>

                  {/* Items */}
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="text-accent-success mt-0.5 text-xs">
                          &#10003;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                    <div>
                      <span className="text-xs text-text-subtle uppercase tracking-wider">
                        Desde
                      </span>
                      <p className="text-xl font-[family-name:var(--font-jetbrains-mono)] text-accent-warm font-semibold">
                        {service.price}
                      </p>
                    </div>
                    <Button
                      href={service.href}
                      variant="secondary"
                      className="!px-5 !py-2.5 text-sm"
                    >
                      Ver detalle
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
