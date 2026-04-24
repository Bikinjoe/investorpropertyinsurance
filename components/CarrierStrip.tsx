import { site } from "@/lib/site";

export default function CarrierStrip() {
  return (
    <div className="rounded-lg border border-border bg-surface-2 p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-flame">
        Our carrier markets
      </p>
      <p className="mt-2 text-sm text-muted">
        We shop across {site.carrierCount} carrier markets specifically for
        real estate investor business.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {site.carriers.map((c) => (
          <span
            key={c}
            className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm font-semibold text-foreground"
          >
            {c}
          </span>
        ))}
        <span className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm font-semibold text-muted">
          + additional E&S markets
        </span>
      </div>
    </div>
  );
}
