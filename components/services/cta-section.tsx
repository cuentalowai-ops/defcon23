import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
}

export function CTASection({
  title,
  description,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
}: CTASectionProps) {
  return (
    <Section>
      <Container>
        <div className="border border-border-subtle rounded-2xl p-8 md:p-10 bg-bg-secondary space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
              {title}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href={primaryHref} variant="primary">
              {primaryCta}
            </Button>
            <Button href={secondaryHref} variant="secondary">
              {secondaryCta}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
