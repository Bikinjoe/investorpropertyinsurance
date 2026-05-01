import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import InsuranceCostEstimator from "./InsuranceCostEstimator";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Rental Property Insurance Cost Estimator | Investor Property Insurance",
  description:
    "Get a rough estimate of what landlord insurance might cost before you talk to an agent.",
};

export default function InsuranceCostEstimatorPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Estimate landlord insurance cost",
          description:
            "Pick property type, replacement cost, state, year built, coverage type, liability limit, and deductible to get a rough annual premium estimate.",
        }}
      />

      <section className="bg-surface border-b border-border py-14 text-center">
        <div className="container-narrow">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-flame">
            Interactive tool
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Rental Property Insurance Cost Estimator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Get a ballpark before you talk to an agent. Enter your property details and see an estimated annual premium range in seconds.
          </p>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Resources", href: "/resources" },
          { label: "Insurance Cost Estimator" },
        ]}
      />

      <section className="bg-white py-12">
        <div className="container-narrow">
          <InsuranceCostEstimator />
        </div>
      </section>

      <CTASection
        heading="Want the real number?"
        sub="We shop your account across 20+ carrier markets and bring back actual quotes. Most turn around the same business day."
      />
    </>
  );
}
