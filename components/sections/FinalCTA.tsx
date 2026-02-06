import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const weWork = [
  "Ecosistemas multi-nodo (gastronomía, cultura, hospitalidad, servicios profesionales)",
  "Holdings que requieren reducción de viscosidad regulatoria",
  "Redes que necesitan auditoría discreta de flujo",
  "Organizaciones sujetas a NIS2/DORA/AI Act (EU) o ENS (España)",
];

const weDontWork = [
  "Estructuras que generan ruido mediático",
  "Operaciones que no comprenden el valor del silencio sistémico",
  "Proyectos sin capacidad de escalado laminar",
];

export default function FinalCTA() {
  return (
    <Section id="contacto-preview">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-12">
          {/* Headline */}
          <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
            ¿Listo para Reducir tu Número de Reynolds?
          </h2>

          {/* Qualification */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* We don't work with */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-accent-danger font-semibold">
                No trabajamos con
              </h3>
              <ul className="space-y-3">
                {weDontWork.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-subtle">
                    <span className="text-accent-danger mt-0.5">&#10005;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* We work with */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-accent-success font-semibold">
                Trabajamos con
              </h3>
              <ul className="space-y-3">
                {weWork.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="text-accent-success mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t border-border-subtle space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-text-subtle">
              <a
                href="mailto:intel@defcon23.eu"
                className="text-accent-cold hover:text-accent-cold/80 transition-colors"
              >
                intel@defcon23.eu
              </a>
              <span className="hidden md:inline">|</span>
              <span>Madrid | Operación: Global</span>
              <span className="hidden md:inline">|</span>
              <span>
                Consulta inicial:{" "}
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-text-primary">
                  90 min | €750
                </span>
              </span>
            </div>

            <Button href="/contacto" variant="primary" className="mt-6">
              Solicitar Auditoría
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
