import { soaTopMeasures } from "@/lib/ens/data";
import { statusBadgeClass, statusLabel } from "@/lib/ens/utils";

export default function SoaTable() {
  return (
    <div className="overflow-x-auto border border-border-subtle rounded-xl bg-bg-secondary">
      <table className="min-w-full text-sm">
        <thead className="text-xs uppercase tracking-wider text-text-subtle">
          <tr className="border-b border-border-subtle">
            <th className="px-4 py-3 text-left">Medida</th>
            <th className="px-4 py-3 text-left">Título</th>
            <th className="px-4 py-3 text-left">Estado</th>
            <th className="px-4 py-3 text-left">Evidencia</th>
          </tr>
        </thead>
        <tbody>
          {soaTopMeasures.map((measure) => (
            <tr
              key={measure.code}
              className="border-b border-border-subtle last:border-b-0"
            >
              <td className="px-4 py-3 font-mono text-text-secondary">
                {measure.code}
              </td>
              <td className="px-4 py-3 text-text-primary">
                {measure.title}
              </td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs ${statusBadgeClass(
                    measure.status
                  )}`}
                >
                  {statusLabel(measure.status)}
                </span>
              </td>
              <td className="px-4 py-3 text-text-subtle">
                {measure.evidence}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
