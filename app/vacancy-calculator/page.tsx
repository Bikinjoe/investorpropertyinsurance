import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import VacancyCalculator from "./VacancyCalculator";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Rental Vacancy Impact Calculator | Investor Property Insurance",
  description:
    "See how vacancy months affect your annual rental income and whether insurance can help.",
};

export default function VacancyCalculatorPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Calculate the financial impact of rental property vacancy",
          description:
            "Enter monthly rent and expected vacancy rate to see annual gross rent, vacancy cost, effective income, and daily/weekly/monthly vacancy costs.",
        }}
      />

      <section className="bg-surface border-b border-border py-14 text-center">
        <div className="container-narrow">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-flame">
            Interactive tool
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Rental Vacancy Impact Calculator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            See exactly what vacancy costs you — monthly, weekly, and daily — and how loss of rental income coverage fits into the picture.
          </p>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Resources", href: "/resources" },
          { label: "Vacancy Calculator" },
        ]}
      />

      <section className="bg-white py-12">
        <div className="container-narrow">
          <VacancyCalculator />
        </div>
      </section>

      <CTASection
        heading="Make sure your policy covers lost rent"
        sub="Loss of rental income coverage pays when a covered loss forces your property vacant. We'll check your current policy or quote you a new one."
      />
    </>
  );
}
