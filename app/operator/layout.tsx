import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raúl Balaguer — Operator | dEfCØN23",
  description:
    "Arquitecto de Sistemas Cognitivos. Especializado en Ciberseguridad, Comportamiento Humano y Sistemas Complejos.",
};

export default function OperatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
