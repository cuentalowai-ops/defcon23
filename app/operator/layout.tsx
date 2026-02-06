import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raúl Balaguer — Øperatør | dEfCØN23",
  description:
    "Arquitectø de Sistemas Cøgnitivøs. Especializadø en Ciberseguridad, Cømpørtamientø Humanø y Sistemas Cømplejos.",
};

export default function OperatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
