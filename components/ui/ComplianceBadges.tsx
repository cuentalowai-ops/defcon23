import Link from "next/link";
import EnsBadge from "@/components/ui/EnsBadge";

interface ComplianceBadgesProps {
  layout?: "horizontal" | "vertical";
  className?: string;
}

export default function ComplianceBadges({
  layout = "horizontal",
  className = "",
}: ComplianceBadgesProps) {
  return (
    <div
      className={`flex ${layout === "vertical" ? "flex-col" : "flex-wrap"} gap-3 ${className}`}
    >
      <EnsBadge size="sm" />
      <Link
        href="/privacidad"
        className="inline-flex items-center gap-1.5 rounded-full border border-accent-danger/40 bg-accent-danger/10 px-3 py-1 text-[10px] uppercase tracking-wider text-accent-danger hover:bg-accent-danger/20 transition-colors"
        aria-label="GDPR Compliant — Ver política de privacidad"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent-danger" />
        GDPR Compliant
      </Link>
      <span
        className="inline-flex items-center gap-1.5 rounded-full border border-accent-warning/40 bg-accent-warning/10 px-3 py-1 text-[10px] uppercase tracking-wider text-accent-warning"
        aria-label="ISO 27001 en progreso al 72%"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent-warning" />
        ISO 27001 · 72%
      </span>
    </div>
  );
}
