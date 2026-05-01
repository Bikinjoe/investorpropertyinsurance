import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import QuoteReadyChecklist from "./QuoteReadyChecklist";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Rental Property Insurance Quote-Ready Checklist | Investor Property Insurance",
  description:
    "Have this information ready and your rental property quote will move faster with fewer back-and-forth delays.",
};

export default function QuoteReadyChecklistPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Rental Property Insurance Quote-Ready Checklist",
          description:
            "A checklist of information to have ready before starting a landlord insurance quote. Reduces back-and-forth and speeds up the process.",
        }}
      />

      <section className="bg-surface border-b border-border py-14 text-center">
        <div className="container-narrow">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-flame">
            Insurance tool
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Quote-Ready Checklist
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Have this information ready and your rental property quote will move faster with fewer back-and-forth delays.
          </p>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Calculators & Tools", href: "/calculators" },
          { label: "Quote-Ready Checklist" },
        ]}
      />

      <section className="bg-white py-12">
        <div className="container-narrow">
          <QuoteReadyChecklist />
        </div>
      </section>

      <CTASection
        heading="Ready to get a quote?"
        sub="We work with 20+ carriers. Most quotes come back the same day."
      />
    </>
  );
}
