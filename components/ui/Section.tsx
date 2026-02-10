interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-12 md:py-20 lg:py-32 scroll-mt-20 ${className}`}>
      {children}
    </section>
  );
}
