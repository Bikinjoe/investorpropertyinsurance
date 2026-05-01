import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import InsuranceFitCheck from "./InsuranceFitCheck";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Rental Property Insurance Fit Check | Investor Property Insurance",
  description:
    "Answer 5 quick questions to find out if your rental property might have a coverage gap.",
};

export default function InsuranceFitCheckPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Rental Property Insurance Fit Check",
          description:
            "Answer 5 questions about your current coverage to find out if your rental property might have a gap.",
        }}
      />

      <section className="bg-surface border-b border-border py-14 text-center">
        <div className="container-narrow">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-flame">
            Insurance tool
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Rental Property Insurance Fit Check
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Answer 5 quick questions to find out if your rental property might have a coverage gap.
          </p>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Calculators & Tools", href: "/calculators" },
          { label: "Insurance Fit Check" },
        ]}
      />

      <section className="bg-white py-12">
        <div className="container-narrow">
          <InsuranceFitCheck />
        </div>
      </section>

      <CTASection
        heading="Ready to close the gap?"
        sub="We'll run your property through our carrier panel and get you options the same day."
      />
    </>
  );
}
