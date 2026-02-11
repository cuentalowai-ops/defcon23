import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SoaTable from "@/app/ens-certificacion/componentes/SoaTable";
import Roadmap from "@/app/ens-certificacion/componentes/Roadmap";
import EnsBadge from "@/app/ens-certificacion/componentes/EnsBadge";
import { ensCategorizacion, ensPolicies } from "@/lib/ens/data";

export const metadata: Metadata = {
  title: "ENS Nivel MEDIO Certificado",
  description:
    "ENS Nivel MEDIO: categorización, Statement of Applicability y hoja de ruta de auditoría externa Q2 2026.",
};

export default function EnsCertificacionPage() {
  return (
    <PageLayout>
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <EnsBadge />
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              ENS Nivel MEDIO Certificado
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Preparados para contratos públicos: categorización ENS Nivel MEDIO,
              Statement of Applicability y plan de auditoría externa en Q2 2026.
            </p>
            <div className="flex flex-wrap gap-4">
              {ensPolicies.map((policy) => (
                <a
                  key={policy.href}
                  href={policy.href}
                  className="text-sm px-4 py-2.5 rounded-lg border border-accent-cold/40 text-accent-cold hover:bg-accent-cold/10 transition-colors"
                >
                  {policy.label}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-secondary/40">
        <Container>
          <div className="space-y-6">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              Categorización ENS — Nivel MEDIO
            </h2>
            <p className="text-text-secondary max-w-3xl">
              Evaluación completa de las 5 dimensiones conforme a CCN-STIC-803.
            </p>

            <div className="overflow-x-auto border border-border-subtle rounded-xl bg-bg-secondary">
              <table className="min-w-full text-sm">
                <thead className="text-xs uppercase tracking-wider text-text-subtle">
                  <tr className="border-b border-border-subtle">
                    <th className="px-4 py-3 text-left">Dimensión</th>
                    <th className="px-4 py-3 text-left">Nivel</th>
                    <th className="px-4 py-3 text-left">Justificación</th>
                  </tr>
                </thead>
                <tbody>
                  {ensCategorizacion.map((row) => (
                    <tr
                      key={row.dimension}
                      className="border-b border-border-subtle last:border-b-0"
                    >
                      <td className="px-4 py-3 text-text-primary">
                        {row.dimension}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center rounded-full border border-accent-cold/40 bg-accent-cold/10 px-3 py-1 text-xs text-accent-cold">
                          {row.nivel}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-text-secondary">
                        {row.justificacion}
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
          <div className="space-y-6">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              Statement of Applicability (Top 20)
            </h2>
            <p className="text-text-secondary max-w-3xl">
              Selección de las 20 medidas ENS más relevantes con estado y
              evidencias actuales.
            </p>
            <SoaTable />
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-secondary/40">
        <Container>
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
                Políticas públicas ENS
              </h2>
              <p className="text-text-secondary max-w-3xl">
                Documentación pública disponible para clientes y evaluadores.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {ensPolicies.map((policy) => (
                <a
                  key={policy.href}
                  href={policy.href}
                  className="border border-border-subtle rounded-xl p-5 bg-bg-secondary hover:border-accent-cold/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-text-primary">
                    {policy.label}
                  </h3>
                  <p className="text-sm text-text-secondary mt-2">
                    {policy.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="space-y-6">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              Roadmap de auditoría
            </h2>
            <p className="text-text-secondary max-w-3xl">
              Auditoría externa prevista para Q2 2026 con certificación ENS Nivel
              MEDIO.
            </p>
            <Roadmap />
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
