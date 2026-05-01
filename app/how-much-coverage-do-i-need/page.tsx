import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import HowMuchCoverage from "./HowMuchCoverage";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "How Much Rental Property Insurance Coverage Do I Need? | Investor Property Insurance",
  description:
    "Coverage limits depend on your property value, liability exposure, and situation. This tool helps you think through it.",
};

export default function HowMuchCoveragePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How Much Rental Property Insurance Coverage Do I Need?",
          description:
            "An interactive tool that walks rental property owners through dwelling coverage, liability limits, and loss of rental income coverage amounts.",
        }}
      />

      <section className="bg-surface border-b border-border py-14 text-center">
        <div className="container-narrow">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-flame">
            Insurance tool
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            How Much Coverage Do I Need?
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Coverage limits depend on your property value, liability exposure, and situation. This tool helps you think through it.
          </p>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Calculators & Tools", href: "/calculators" },
          { label: "How Much Coverage Do I Need?" },
        ]}
      />

      <section className="bg-white py-12">
        <div className="container-narrow">
          <HowMuchCoverage />
        </div>
      </section>

      <CTASection
        heading="Get actual numbers for your property"
        sub="We'll run your property through our carrier panel and give you real quotes — not estimates."
      />
    </>
  );
}
