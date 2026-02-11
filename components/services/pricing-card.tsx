import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
}

export function PricingCard({
  title,
  price,
  features,
  ctaLabel,
  ctaHref,
}: PricingCardProps) {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <div className="border border-border-subtle rounded-2xl p-8 bg-bg-secondary space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wider text-accent-cold">
                {title}
              </p>
              <p className="text-3xl font-semibold text-text-primary">
                {price}
              </p>
            </div>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="text-sm text-text-secondary flex gap-2">
                  <span className="text-accent-cold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button href={ctaHref} variant="primary">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
