import type { Metadata } from "next";
import { sourceCodePro } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "dEfCØN23 | Ingeniería de Sistemas Cømplejos",
  description:
    "Transførmamøs la Turbulencia Ørganizativa en Laminación Cøntrølada. Cømpliance nativa, flujø ecønómicø, hardening estructural.",
  keywords: [
    "compliance",
    "NIS2",
    "DORA",
    "AI Act",
    "ingeniería de sistemas",
    "CFD",
    "Reynolds",
    "auditoría",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={sourceCodePro.variable}>
      <body className="font-[family-name:var(--font-source-code-pro)] bg-bg-primary text-text-primary antialiased">
        {/* Scanline overlay */}
        <div className="scanline-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
