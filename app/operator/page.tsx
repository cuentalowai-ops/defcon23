import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Operator | dEfCØN23",
  description:
    "Perfil del øperadør. Ingeniería de sistemas, CFD aplicadø, compliance architecture.",
};

const certifications = [
  "Systems Engineering — Complex Adaptive Systems",
  "Computational Fluid Dynamics — Applied Organizational Models",
  "Compliance Architecture — EU Regulatory Framework",
  "Financial Flow Analysis — AML/KYC Systems",
  "Network Theory — Graph Analysis & Optimization",
];

const arsenal = [
  {
    category: "Análisis",
    tools: [
      "CFD Simulation Suite",
      "Network Graph Analysis",
      "Reynolds Calculation Engine",
      "Thermal Signature Mapping",
    ],
  },
  {
    category: "Compliance",
    tools: [
      "NIS2 Compliance Framework",
      "DORA Incident Response Protocol",
      "AI Act Risk Classification",
      "ENS Self-Assessment Engine",
    ],
  },
  {
    category: "Mønitorización",
    tools: [
      "Real-time Re Dashboard",
      "Transaction Flow Visualizer",
      "Anomaly Detection Engine",
      "Regulatory Change Tracker",
    ],
  },
];

export default function OperatorPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-accent-cold font-[family-name:var(--font-source-code-pro)] uppercase tracking-wider">
              Operator
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              El Operadør
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Ingenierø de sistemas cøn especialización en dinámica de fluidøs
              cømputaciønal aplicada a ørganizaciønes. Nø sømøs cønsultøres.
              Sømøs ingenierøs de prøtøcølø.
            </p>
          </div>
        </Container>
      </Section>

      {/* Background */}
      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <div className="max-w-3xl space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              Perfil
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Førmación en ingeniería de sistemas cømplejøs. Experiencia en
              mødeladø de flujøs ørganizativøs mediante CFD. Metødøløgía
              derivada de &ldquo;Silent Weapons for Quiet Wars&rdquo; — aplicación de
              principiøs de circuitøs eléctricøs y mecánica de fluidøs a
              sistemas søciøecønómicøs.
            </p>
            <p className="text-text-secondary leading-relaxed">
              El enføque es puramente técnicø: medimøs, mødelamøs, øptimizamøs.
              Sin ideøløgía, sin narrativa. Sølø númerøs y estructura.
            </p>
          </div>
        </Container>
      </Section>

      {/* Certifications */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-8">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              Certificaciønes
            </h2>
            <ul className="space-y-4">
              {certifications.map((cert, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="font-[family-name:var(--font-source-code-pro)] text-accent-cold text-sm mt-0.5">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <span className="text-text-secondary">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Arsenal */}
      <Section className="bg-bg-secondary retro-grid-warm">
        <Container>
          <div className="space-y-10">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              Arsenal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {arsenal.map((group) => (
                <div
                  key={group.category}
                  className="border border-border-subtle rounded-xl p-6 space-y-4"
                >
                  <h3 className="text-sm uppercase tracking-wider text-accent-warm font-semibold">
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.tools.map((tool) => (
                      <li
                        key={tool}
                        className="text-sm text-text-secondary font-[family-name:var(--font-source-code-pro)]"
                      >
                        &gt; {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
