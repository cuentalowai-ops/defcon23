import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const timelineEvents = [
  {
    date: "Oct 2024",
    label: "NIS2",
    status: "Activo",
    detail: "Aplica a 10,000+ entidades España",
    active: true,
  },
  {
    date: "Ene 2025",
    label: "DORA",
    status: "Activo",
    detail: "Entidades financieras",
    active: true,
  },
  {
    date: "2026-2027",
    label: "AI Act + EUDI Wallet",
    status: "Próximo",
    detail: "Sistemas IA alto riesgo",
    active: false,
  },
  {
    date: "2027",
    label: "CRA",
    status: "Próximo",
    detail: "Cyber Resilience Act",
    active: false,
  },
  {
    date: "2028-2030",
    label: "Enforcement Peak",
    status: "Futuro",
    detail: "Máxima presión regulatoria",
    active: false,
  },
];

const regulations = [
  {
    name: "NIS2",
    deadline: "Oct 2024",
    target: "Servicios esenciales/importantes",
    penalty: "€10M o 2% facturación",
    opportunity: "Quien no cumple, sale del mercado",
  },
  {
    name: "DORA",
    deadline: "Ene 2025",
    target: "Entidades financieras",
    penalty: "€10M o 5% facturación",
    opportunity: "Reporte < 4h → tú < 2h",
  },
  {
    name: "AI Act",
    deadline: "2026-2027",
    target: "Sistemas IA alto riesgo",
    penalty: "€35M o 7% facturación",
    opportunity: "Transparencia algorítmica = barrera entrada",
  },
  {
    name: "CRA",
    deadline: "2027",
    target: "Productos con elementos digitales",
    penalty: "€15M o 2.5% facturación",
    opportunity: "Seguridad by design obligatoria",
  },
];

export default function RegulatoryTimeline() {
  return (
    <Section id="regulatory">
      <Container>
        <div className="space-y-16">
          {/* Headline */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              El Paisaje Regulatorio 2024–2030
            </h2>
            <p className="text-lg text-text-secondary">
              Tu Competencia Se Ahoga.{" "}
              <span className="text-accent-warm">Tú Construyes un Moat.</span>
            </p>
          </div>

          {/* Visual Timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute top-4 left-0 right-0 h-px bg-border-subtle hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {timelineEvents.map((event) => (
                <div key={event.label} className="relative space-y-3">
                  {/* Dot */}
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                      event.active
                        ? "border-accent-success bg-accent-success/20"
                        : "border-border-visible bg-bg-tertiary"
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${
                        event.active ? "bg-accent-success" : "bg-border-visible"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-xs font-[family-name:var(--font-jetbrains-mono)] text-text-subtle">
                      {event.date}
                    </p>
                    <p className="text-base font-semibold text-text-primary">
                      {event.label}
                    </p>
                    <span
                      className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${
                        event.active
                          ? "bg-accent-success/20 text-accent-success"
                          : "bg-bg-tertiary text-text-subtle"
                      }`}
                    >
                      {event.status}
                    </span>
                    <p className="text-sm text-text-subtle mt-2">
                      {event.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regulations Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-visible">
                  <th className="text-left py-4 pr-4 text-text-primary font-semibold">
                    Normativa
                  </th>
                  <th className="text-left py-4 pr-4 text-text-primary font-semibold">
                    Deadline
                  </th>
                  <th className="text-left py-4 pr-4 text-text-primary font-semibold hidden md:table-cell">
                    Aplica a
                  </th>
                  <th className="text-left py-4 pr-4 text-text-primary font-semibold">
                    Penalización
                  </th>
                  <th className="text-left py-4 text-text-primary font-semibold hidden lg:table-cell">
                    Tu oportunidad
                  </th>
                </tr>
              </thead>
              <tbody>
                {regulations.map((reg) => (
                  <tr
                    key={reg.name}
                    className="border-b border-border-subtle last:border-0"
                  >
                    <td className="py-4 pr-4 font-[family-name:var(--font-jetbrains-mono)] text-accent-cold font-semibold">
                      {reg.name}
                    </td>
                    <td className="py-4 pr-4 text-text-secondary">
                      {reg.deadline}
                    </td>
                    <td className="py-4 pr-4 text-text-subtle hidden md:table-cell">
                      {reg.target}
                    </td>
                    <td className="py-4 pr-4 text-accent-danger">
                      {reg.penalty}
                    </td>
                    <td className="py-4 text-accent-success hidden lg:table-cell">
                      {reg.opportunity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </Section>
  );
}
