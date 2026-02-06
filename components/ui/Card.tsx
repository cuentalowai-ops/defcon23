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
        border border-border-subtle rounded-xl p-5 md:p-8 bg-bg-secondary
        ${
          hoverable
            ? "hover:scale-[1.03] hover:border-border-visible hover:shadow-2xl transition-all duration-300"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
