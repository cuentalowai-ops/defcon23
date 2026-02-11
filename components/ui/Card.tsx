interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({
  children,
  className = "",
  hoverable = true,
}: CardProps) {
  return (
    <div
      className={`
        border border-border-subtle rounded-2xl p-4 sm:p-5 md:p-8 bg-bg-secondary/85 backdrop-blur-sm md:backdrop-blur-md
        ${
          hoverable
            ? "hover:scale-[1.03] hover:border-coral/40 hover:shadow-[0_0_8px_rgba(255,153,102,0.2)] md:hover:shadow-[0_0_20px_rgba(255,153,102,0.3)] hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 focus-within:border-border-visible focus-within:ring-1 focus-within:ring-accent-cold/30 touch-feedback"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
