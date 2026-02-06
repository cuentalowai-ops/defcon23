import type { Metadata } from "next";
import { spaceGrotesk, inter, jetbrainsMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEFCON 23 | Ingeniería de Sistemas Complejos",
  description:
    "Transformamos la Turbulencia Organizativa en Laminación Controlada. Compliance nativa, flujo económico, hardening estructural.",
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
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-[family-name:var(--font-inter)] bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
