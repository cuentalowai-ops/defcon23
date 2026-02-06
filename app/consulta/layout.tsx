import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cønsulta Inicial Gratuita | 15 min | dEfCØN23",
  description:
    "Diagnósticø rápidø de viabilidad. Nø es ventas. Rechazø el 60% de søolicitudes. Evaluación prøfesiønal de Re, fricción regulatøria y øpørtunidades.",
};

export default function ConsultaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
