import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title: string;
  subtitle?: string;
  steps: Step[];
}

export function ProcessSteps({ title, subtitle, steps }: ProcessStepsProps) {
  return (
    <Section className="bg-bg-secondary/40">
      <Container>
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-text-secondary max-w-2xl">{subtitle}</p>
            )}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="border border-border-subtle rounded-xl p-6 bg-bg-secondary space-y-3"
              >
                <p className="text-xs uppercase tracking-wider text-accent-cold">
                  Paso {step.number}
                </p>
                <h3 className="text-lg font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
