import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora Reynolds | dEfCØN23",
  description:
    "Calcula el Número de Reynolds de tu organización. 10 preguntas para determinar si operas en flujo laminar o turbulento. Diagnóstico gratuito.",
  openGraph: {
    title: "Calculadora Reynolds — ¿Tu organización es laminar o turbulenta?",
    description:
      "10 preguntas. 2 minutos. Descubre tu Re Score y las fugas críticas de tu estructura.",
    type: "website",
    url: "https://defcon23.eu/calculadora-reynolds",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora Reynolds | dEfCØN23",
    description:
      "Calcula el Número de Reynolds de tu organización en 2 minutos.",
  },
};

export default function CalculadoraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
