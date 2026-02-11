import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface ServiceHeroProps {
  tier: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  timeline: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export function ServiceHero({
  tier,
  title,
  subtitle,
  description,
  price,
  timeline,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: ServiceHeroProps) {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-widest text-accent-cold terminal-text">
            {tier}
          </p>
          <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
            {title}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            {subtitle}
          </p>
          <p className="text-sm text-text-subtle max-w-2xl">
            {description}
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Button href={ctaHref} variant="primary">
              {ctaLabel}
            </Button>
            <Button href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-text-subtle">
            <span className="border border-border-subtle rounded-full px-3 py-1">
              {price}
            </span>
            <span className="border border-border-subtle rounded-full px-3 py-1">
              {timeline}
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
