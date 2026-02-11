interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-5 md:px-12 lg:px-20 ${className}`}>
      {children}
    </div>
  );
}
