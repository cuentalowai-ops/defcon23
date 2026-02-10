import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulta Inicial Gratuita | 15 min | dEfCØN23",
  description:
    "Diagnóstico rápido de viabilidad. No es ventas. Rechazo el 60% de solicitudes. Evaluación profesional de Re, fricción regulatoria y oportunidades.",
};

export default function ConsultaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
