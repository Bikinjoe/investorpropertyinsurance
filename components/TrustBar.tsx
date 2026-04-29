import { site } from "@/lib/site";

const items = [
  "20+ Carrier Markets",
  "Every Asset Class",
  "12-State Western US",
  "Independent Agency",
];

export default function TrustBar() {
  return (
    <div className="border-y border-border bg-surface-2">
      <div className="container-narrow flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3 text-center text-sm font-semibold text-foreground">
        {items.map((item) => (
          <span key={item} className="flex items-center gap-2">
            <span className="text-flame">✓</span> {item}
          </span>
        ))}
        <a href={site.phoneHref} className="text-flame hover:underline">
          {site.phoneCTA}
        </a>
      </div>
    </div>
  );
}
