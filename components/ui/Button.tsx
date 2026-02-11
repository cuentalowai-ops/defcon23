import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-block px-6 py-3.5 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-200 text-center glow-button touch-feedback min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cold";
  const variantStyles = {
    primary:
      "bg-gradient-warm text-bg-primary hover:scale-105 active:scale-95 hover:shadow-[0_0_8px_rgba(255,153,102,0.3)] md:hover:shadow-[0_0_20px_rgba(255,153,102,0.4)]",
    secondary:
      "border-2 border-accent-cold text-accent-cold bg-transparent hover:bg-accent-cold/10 hover:scale-105 active:scale-95 hover:shadow-[0_0_8px_rgba(58,155,155,0.3)] md:hover:shadow-[0_0_20px_rgba(58,155,155,0.3)]",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className={classes}>
      {children}
    </button>
  );
}
