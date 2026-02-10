import type { Metadata, Viewport } from "next";
import { sourceCodePro } from "./fonts";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://defcon23.eu"),
  title: {
    default: "dEfCØN23 | Ingeniería de Sistemas Complejos · Compliance · Ciberseguridad",
    template: "%s | dEfCØN23",
  },
  description:
    "Transformamos la Turbulencia Organizativa en Laminación Controlada. Virtual CISO, NIS2 compliance, auditoría de ciberseguridad y hardening estructural para empresas en España y Europa.",
  keywords: [
    "compliance",
    "NIS2",
    "NIS2 compliance Spain",
    "DORA",
    "AI Act",
    "Virtual CISO Madrid",
    "cybersecurity audit",
    "auditoría ciberseguridad",
    "ingeniería de sistemas",
    "CFD organizacional",
    "Reynolds",
    "hardening estructural",
    "CISO externo",
    "compliance architecture",
    "ENS",
    "RGPD",
  ],
  authors: [{ name: "dEfCØN23", url: "https://defcon23.eu" }],
  creator: "dEfCØN23",
  publisher: "dEfCØN23",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://defcon23.eu",
    siteName: "dEfCØN23",
    title: "dEfCØN23 | Ingeniería de Sistemas Complejos",
    description:
      "Virtual CISO · NIS2 Compliance · Auditoría de Ciberseguridad · Hardening Estructural. Madrid, operación global.",
  },
  twitter: {
    card: "summary_large_image",
    title: "dEfCØN23 | Ingeniería de Sistemas Complejos",
    description:
      "Virtual CISO · NIS2 Compliance · Auditoría de Ciberseguridad · Hardening Estructural.",
    creator: "@defcon23eu",
  },
  alternates: {
    canonical: "https://defcon23.eu",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={sourceCodePro.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "dEfCØN23",
              description:
                "Ingeniería de Sistemas Complejos. Compliance nativa, ciberseguridad, Virtual CISO.",
              url: "https://defcon23.eu",
              email: "intel@defcon23.eu",
              areaServed: ["ES", "EU"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Madrid",
                addressCountry: "ES",
              },
              priceRange: "€€€",
              serviceType: [
                "Cybersecurity Consulting",
                "NIS2 Compliance",
                "Virtual CISO",
                "Security Audit",
                "Compliance Architecture",
              ],
              knowsAbout: [
                "NIS2",
                "DORA",
                "AI Act",
                "ENS",
                "RGPD",
                "Cybersecurity",
              ],
            }),
          }}
        />
      </head>
      <body className="font-[family-name:var(--font-source-code-pro)] bg-bg-primary text-text-primary antialiased">
        {/* Scanline overlay */}
        <div className="scanline-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
