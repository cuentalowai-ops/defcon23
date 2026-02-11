import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { ensScores, ensSoaProgress, riskRegister } from "@/lib/ens/data";
import { formatPercent, progressPercent } from "@/lib/ens/utils";

export const metadata: Metadata = {
  title: "ENS Dashboard (Privado)",
  description: "Panel interno de seguimiento ENS, riesgos y progreso SoA.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EnsDashboardPage() {
  const soaPercent = progressPercent(ensSoaProgress.current, ensSoaProgress.total);

  return (
    <PageLayout>
      <Section>
        <Container>
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wider text-accent-cold">
                Acceso restringido
              </p>
              <h1 className="text-[2rem] md:text-[3rem] leading-[1.1]">
                ENS Dashboard
              </h1>
              <p className="text-text-secondary max-w-3xl">
                Panel interno de métricas ENS, riesgos priorizados y progreso de
                la Declaración de Aplicabilidad.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {[
                { label: "GDPR", value: formatPercent(ensScores.gdpr) },
                { label: "ISO 27001", value: formatPercent(ensScores.iso27001) },
                { label: "ENS", value: formatPercent(ensScores.ens) },
                { label: "NIS2", value: formatPercent(ensScores.nis2) },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-border-subtle rounded-xl p-4 bg-bg-secondary"
                >
                  <p className="text-xs uppercase tracking-wider text-text-subtle">
                    {item.label}
                  </p>
                  <p className="text-2xl font-semibold text-text-primary">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="border border-border-subtle rounded-xl p-5 bg-bg-secondary space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-text-secondary">SoA progress</p>
                <p className="text-sm text-text-secondary">
                  {ensSoaProgress.current}/{ensSoaProgress.total}
                </p>
              </div>
              <div className="h-2 w-full rounded-full bg-bg-primary">
                <div
                  className="h-2 rounded-full bg-accent-cold"
                  style={{ width: `${soaPercent}%` }}
                />
              </div>
              <p className="text-xs text-text-subtle">
                Avance desde 21/93 hasta {ensSoaProgress.current}/{ensSoaProgress.total}.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-secondary/40">
        <Container>
          <div className="space-y-6">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              Risk Register
            </h2>
            <div className="overflow-x-auto border border-border-subtle rounded-xl bg-bg-secondary">
              <table className="min-w-full text-sm">
                <thead className="text-xs uppercase tracking-wider text-text-subtle">
                  <tr className="border-b border-border-subtle">
                    <th className="px-4 py-3 text-left">ID</th>
                    <th className="px-4 py-3 text-left">Riesgo</th>
                    <th className="px-4 py-3 text-left">Prob.</th>
                    <th className="px-4 py-3 text-left">Impacto</th>
                    <th className="px-4 py-3 text-left">Tratamiento</th>
                    <th className="px-4 py-3 text-left">Owner</th>
                    <th className="px-4 py-3 text-left">Plazo</th>
                  </tr>
                </thead>
                <tbody>
                  {riskRegister.map((risk) => (
                    <tr
                      key={risk.id}
                      className="border-b border-border-subtle last:border-b-0"
                    >
                      <td className="px-4 py-3 font-mono text-text-secondary">
                        {risk.id}
                      </td>
                      <td className="px-4 py-3 text-text-primary">
                        {risk.risk}
                      </td>
                      <td className="px-4 py-3 text-text-secondary">
                        {risk.probability}
                      </td>
                      <td className="px-4 py-3 text-text-secondary">
                        {risk.impact}
                      </td>
                      <td className="px-4 py-3 text-text-secondary">
                        {risk.treatment}
                      </td>
                      <td className="px-4 py-3 text-text-secondary">
                        {risk.owner}
                      </td>
                      <td className="px-4 py-3 text-text-secondary">
                        {risk.due}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="border border-border-subtle rounded-xl p-6 bg-bg-secondary space-y-3">
            <p className="text-xs uppercase tracking-wider text-accent-cold">
              Próxima auditoría externa
            </p>
            <h3 className="text-2xl font-semibold">Cuenta regresiva</h3>
            <p className="text-text-secondary">
              Auditoría externa estimada Q2 2026. Preparar evidencias, DPAs y
              pruebas de continuidad antes del 31 de marzo.
            </p>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
