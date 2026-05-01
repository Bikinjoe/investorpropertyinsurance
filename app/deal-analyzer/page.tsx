import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import DealAnalyzer from "./DealAnalyzer";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Is This Rental Property a Good Deal? | Investor Property Insurance",
  description:
    "Enter your numbers and get a green / yellow / red signal on whether this rental property works financially.",
};

export default function DealAnalyzerPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Analyze whether a rental property is a good deal",
          description:
            "Enter purchase price, rent, down payment, and expenses to get a green, yellow, or red verdict on whether this rental property cash flows.",
        }}
      />

      <section className="bg-surface border-b border-border py-14 text-center">
        <div className="container-narrow">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-flame">
            Interactive tool
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Is This a Good Deal?
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Enter your numbers and get a green, yellow, or red signal on whether this rental
            property works financially.
          </p>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Resources", href: "/resources" },
          { label: "Deal Analyzer" },
        ]}
      />

      <section className="bg-white py-12">
        <div className="container-narrow">
          <DealAnalyzer />
        </div>
      </section>

      <CTASection
        heading="Know your insurance cost before closing"
        sub="We'll give you an actual quote across our carrier panel. Most turn around the same day."
      />
    </>
  );
}
