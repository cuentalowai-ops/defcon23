import { ensRoadmap } from "@/lib/ens/data";

export default function Roadmap() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {ensRoadmap.map((item) => (
        <div
          key={item.phase}
          className="border border-border-subtle rounded-xl p-5 bg-bg-secondary space-y-3"
        >
          <p className="text-xs text-accent-cold uppercase tracking-wider">
            {item.date}
          </p>
          <h3 className="text-lg font-semibold text-text-primary">
            {item.phase}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
