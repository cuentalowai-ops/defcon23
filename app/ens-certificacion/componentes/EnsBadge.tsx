import Link from "next/link";

interface EnsBadgeProps {
  size?: "sm" | "md";
}

export default function EnsBadge({ size = "md" }: EnsBadgeProps) {
  const sizeClasses =
    size === "sm"
      ? "text-[10px] px-2 py-1"
      : "text-xs px-3 py-1.5";

  return (
    <Link
      href="/ens-certificacion"
      className={`inline-flex items-center gap-2 rounded-full border border-accent-cold/40 bg-accent-cold/10 text-accent-cold ${sizeClasses} uppercase tracking-wider hover:bg-accent-cold/20 transition-colors`}
      aria-label="ENS Nivel MEDIO"
    >
      <span className="h-2 w-2 rounded-full bg-accent-cold shadow-[0_0_10px_rgba(74,158,255,0.6)]" />
      ENS Nivel MEDIO
    </Link>
  );
}
