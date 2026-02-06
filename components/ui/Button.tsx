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
    "inline-block px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200 text-center";
  const variantStyles = {
    primary:
      "bg-accent-warm text-bg-primary hover:scale-105 active:scale-95",
    secondary:
      "border-2 border-accent-cold text-accent-cold bg-transparent hover:bg-accent-cold/10 hover:scale-105",
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
