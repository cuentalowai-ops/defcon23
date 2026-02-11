import Link from "next/link";

interface EnsBadgeProps {
  size?: "sm" | "md";
  className?: string;
}

export default function EnsBadge({ size = "md", className = "" }: EnsBadgeProps) {
  const sizeClasses =
    size === "sm"
      ? "text-[10px] px-2.5 py-1 gap-1.5"
      : "text-xs px-3 py-1.5 gap-2";

  return (
    <Link
      href="/ens-certificacion"
      className={`inline-flex items-center rounded-full border border-accent-success/40 bg-accent-success/10 text-accent-success ${sizeClasses} uppercase tracking-wider hover:bg-accent-success/20 transition-colors ${className}`}
      aria-label="ENS Nivel MEDIO — Ver certificación"
    >
      <span className="h-2 w-2 rounded-full bg-accent-success shadow-[0_0_8px_rgba(82,181,168,0.6)] animate-[glow-pulse_2s_ease-in-out_infinite]" />
      ENS Nivel MEDIO
    </Link>
  );
}
