import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 md:pt-0">
      <Container>
        <div className="max-w-4xl space-y-8">
          {/* Tagline */}
          <p className="text-sm md:text-base text-accent-cold font-[family-name:var(--font-jetbrains-mono)] tracking-wider uppercase">
            Ingeniería de Sistemas Complejos | Flujo Económico | Compliance
            Nativa
          </p>

          {/* H1 */}
          <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1] tracking-tight">
            DEFCON 23
          </h1>

          {/* H2 */}
          <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] text-text-secondary">
            Transformamos la Turbulencia Organizativa en Laminación Controlada
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl">
            Reducción de viscosidad operativa. Optimización de circuitos de
            capital. Hardening estructural ante fricción regulatoria (EU +
            España).
          </p>

          {/* Mantra */}
          <blockquote className="border-l-4 border-accent-warm pl-6 py-2">
            <p className="italic text-text-subtle text-base md:text-lg leading-relaxed">
              &ldquo;La carne se pudre. El HUESO permanece. Diseñamos sistemas
              cuya arquitectura está en la capa de protocolo.&rdquo;
            </p>
          </blockquote>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button href="/contacto?type=audit" variant="primary">
              Solicitar Auditoría
            </Button>
            <Button href="/protocol" variant="secondary">
              Calcular mi Re &rarr;
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
