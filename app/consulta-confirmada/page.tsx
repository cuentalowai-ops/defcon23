import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Reserva Confirmada | dEfCØN23",
  description:
    "Tu consulta inicial ha sido confirmada. Revisa tu email para los detalles.",
};

export default function ConfirmacionPage() {
  return (
    <PageLayout>
      <Section className="retro-grid min-h-[70vh] flex items-center">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="neon-card rounded-xl p-6 md:p-10 lg:p-14 bg-bg-secondary space-y-6 md:space-y-8">
              <div className="w-20 h-20 mx-auto rounded-full bg-accent-success/20 border-2 border-accent-success flex items-center justify-center">
                <span className="text-accent-success text-4xl">&#10003;</span>
              </div>

              <h1 className="text-[1.5rem] md:text-[2.5rem] leading-[1.1] text-accent-success terminal-text">
                Reserva Confirmada
              </h1>

              <p className="text-text-secondary">
                Revisa tu email para los detalles de la videollamada.
              </p>

              <div className="border-t border-border-subtle pt-8 space-y-3">
                <p className="text-sm text-text-subtle mb-4">
                  Mientras tanto, puedes:
                </p>
                <div className="flex flex-col gap-3">
                  <Button href="/casos" variant="secondary" className="w-full">
                    Ver casos de estudio &rarr;
                  </Button>
                  <Button
                    href="/servicios"
                    variant="secondary"
                    className="w-full"
                  >
                    Explorar arsenal de servicios &rarr;
                  </Button>
                  <Button
                    href="/operator"
                    variant="secondary"
                    className="w-full"
                  >
                    Conocer al operador &rarr;
                  </Button>
                </div>
              </div>

              <div className="pt-6 border-t border-border-subtle space-y-2">
                <p className="text-xs text-text-subtle">
                  ¿Preguntas urgentes antes de la llamada?
                </p>
                <a
                  href="mailto:intel@defcon23.eu"
                  className="text-accent-cold hover:underline text-sm terminal-text"
                >
                  intel@defcon23.eu
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
