const features = [
  { name: "Intelligence Brief", fase1: true, fase2: true, fase3: true },
  { name: "Auditoría de Flujo", fase1: false, fase2: true, fase3: true },
  { name: "Hardening (7 pasadas)", fase1: false, fase2: true, fase3: true },
  { name: "Compliance Architecture", fase1: false, fase2: true, fase3: true },
  { name: "CFD Vortex Core", fase1: false, fase2: false, fase3: true },
  { name: "EU Funds Capture", fase1: false, fase2: false, fase3: true },
  { name: "eIDAS 2.0 Implementation", fase1: false, fase2: false, fase3: true },
];

function Check() {
  return <span className="text-accent-success terminal-text">&#10003;</span>;
}

function Dash() {
  return <span className="text-text-subtle">—</span>;
}

export default function PricingTable() {
  return (
    <div className="overflow-x-auto">
      {/* Desktop table */}
      <table className="w-full text-sm hidden md:table">
        <thead>
          <tr className="border-b border-border-visible">
            <th className="text-left py-4 pr-4 pl-4 text-text-primary font-semibold">
              Servicio
            </th>
            <th className="text-center py-4 px-4 text-accent-warm font-semibold">
              FASE I
              <span className="block text-xs text-text-subtle font-normal mt-0.5">
                €500
              </span>
            </th>
            <th className="text-center py-4 px-4 text-accent-cold font-semibold">
              FASE II
              <span className="block text-xs text-text-subtle font-normal mt-0.5">
                €1,000
              </span>
            </th>
            <th className="text-center py-4 px-4 text-accent-success font-semibold">
              FASE III
              <span className="block text-xs text-text-subtle font-normal mt-0.5">
                Desde €3,000
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((f) => (
            <tr
              key={f.name}
              className="border-b border-border-subtle hover:bg-bg-tertiary/50 transition-colors"
            >
              <td className="py-3 pr-4 pl-4 text-text-secondary">{f.name}</td>
              <td className="py-3 px-4 text-center">
                {f.fase1 ? <Check /> : <Dash />}
              </td>
              <td className="py-3 px-4 text-center">
                {f.fase2 ? <Check /> : <Dash />}
              </td>
              <td className="py-3 px-4 text-center">
                {f.fase3 ? <Check /> : <Dash />}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t border-border-visible">
            <td className="py-4 pr-4 pl-4 font-semibold text-text-primary">Inversión</td>
            <td className="py-4 px-4 text-center font-bold text-accent-warm">€500</td>
            <td className="py-4 px-4 text-center font-bold text-accent-cold">€1,000</td>
            <td className="py-4 px-4 text-center font-bold text-accent-success">€3,000+</td>
          </tr>
        </tfoot>
      </table>

      {/* Mobile stacked */}
      <div className="md:hidden space-y-6">
        {[
          { label: "FASE I", color: "text-accent-warm", price: "€500", key: "fase1" as const },
          { label: "FASE II", color: "text-accent-cold", price: "€1,000", key: "fase2" as const },
          { label: "FASE III", color: "text-accent-success", price: "Desde €3,000", key: "fase3" as const },
        ].map((phase) => (
          <div
            key={phase.label}
            className="neon-card rounded-xl p-5 bg-bg-tertiary space-y-3"
          >
            <div className="flex items-baseline justify-between">
              <span className={`font-semibold ${phase.color}`}>
                {phase.label}
              </span>
              <span className="text-xs text-text-subtle">{phase.price}</span>
            </div>
            <ul className="space-y-2">
              {features
                .filter((f) => f[phase.key])
                .map((f) => (
                  <li
                    key={f.name}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <Check />
                    {f.name}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
