import { site } from "@/lib/site";

type Carrier = { name: string; logo: string } | string;

export default function CarrierStrip() {
  return (
    <div className="rounded-lg border border-border bg-surface-2 p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-flame">
        Our carrier markets
      </p>
      <p className="mt-2 text-sm text-muted">
        We have access to {site.carrierCount} carrier markets supporting real estate investors and property owners across the Western US. A few of them:
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        {(site.carriers as Carrier[]).map((c) => {
          const name = typeof c === "string" ? c : c.name;
          const logo = typeof c === "string" ? null : c.logo;
          return logo ? (
            <div key={name} className="flex items-center justify-center" style={{ height: "40px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo}
                alt={name}
                title={name}
                style={{ maxHeight: "40px", maxWidth: "120px", width: "auto", objectFit: "contain" }}
                className="grayscale hover:grayscale-0 transition-all duration-200 opacity-80 hover:opacity-100"
              />
            </div>
          ) : (
            <span
              key={name}
              className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm font-semibold text-foreground"
            >
              {name}
            </span>
          );
        })}
        <span className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm font-semibold text-muted">
          + more
        </span>
      </div>
    </div>
  );
}
