import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

interface CaseItem {
  company: string;
  problem: string;
  solution: string;
  result: string;
}

interface CaseStudiesProps {
  title: string;
  cases: CaseItem[];
}

export function CaseStudies({ title, cases }: CaseStudiesProps) {
  return (
    <Section className="bg-bg-secondary/40">
      <Container>
        <div className="space-y-6">
          <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
            {title}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {cases.map((item) => (
              <div
                key={item.company}
                className="border border-border-subtle rounded-xl p-6 bg-bg-secondary space-y-3"
              >
                <h3 className="text-lg font-semibold text-text-primary">
                  {item.company}
                </h3>
                <p className="text-sm text-text-secondary">
                  <strong>Problema:</strong> {item.problem}
                </p>
                <p className="text-sm text-text-secondary">
                  <strong>Solución:</strong> {item.solution}
                </p>
                <p className="text-sm text-accent-cold font-semibold">
                  {item.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
