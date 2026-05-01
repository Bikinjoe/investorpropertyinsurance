import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import RentalProfitCalculator from "./RentalProfitCalculator";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Rental Property Profit Calculator | Investor Property Insurance",
  description:
    "Calculate monthly cash flow, annual profit, and cash-on-cash return on any rental property before you buy.",
};

export default function RentalProfitCalculatorPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Calculate rental property profit and cash flow",
          description:
            "Enter purchase price, loan details, income, and expenses to see monthly cash flow, annual profit, cap rate, and cash-on-cash return.",
        }}
      />

      <section className="bg-surface border-b border-border py-14 text-center">
        <div className="container-narrow">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-flame">
            Interactive tool
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Rental Property Profit Calculator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Enter your numbers and see monthly cash flow, annual return, and whether this deal pencils out — before you make an offer.
          </p>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Resources", href: "/resources" },
          { label: "Rental Profit Calculator" },
        ]}
      />

      <section className="bg-white py-12">
        <div className="container-narrow">
          <RentalProfitCalculator />
        </div>
      </section>

      <CTASection
        heading="Know your insurance cost before closing"
        sub="We'll give you an actual quote across our carrier panel. Most turn around the same day."
      />
    </>
  );
}
