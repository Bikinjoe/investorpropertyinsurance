import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import InvestorCalculator from "@/components/InvestorCalculator";

export const metadata = {
  title: "Real Estate Investor Insurance Cost Calculator",
  description:
    "Estimate your annual real estate investor insurance premium. Pick property type, age, replacement cost, state, occupancy, and claims history for an instant range.",
};

export default function CalculatorPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to estimate your real estate investor insurance cost",
          step: [
            { "@type": "HowToStep", name: "Pick your property type", text: "Single family rental, STR, duplex/triplex/fourplex, apartment 5-10, apartment 11-25, rehab, or commercial." },
            { "@type": "HowToStep", name: "Set property age", text: "Built after 2000, 1980 to 2000, or before 1980." },
            { "@type": "HowToStep", name: "Choose replacement cost band", text: "Under $200K, $200K-$400K, $400K-$600K, or $600K+." },
            { "@type": "HowToStep", name: "Pick state and occupancy", text: "12 western states. Currently rented, vacant, or under renovation." },
            { "@type": "HowToStep", name: "Enter claims history", text: "None, one prior claim, or two or more in the last 5 years." },
            { "@type": "HowToStep", name: "Review your range", text: "See your estimated annual premium range, what's driving it, and what could bring it down." },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How accurate is the calculator?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The calculator gives a realistic range based on property type, age, location, occupancy, and claims history. Your actual rate depends on full underwriting review including property inspection, prior loss detail, lender requirements, and carrier-specific appetite.",
              },
            },
            {
              "@type": "Question",
              name: "Why do older properties cost more to insure?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Pre-1980 construction often has older wiring (knob and tube, fuse boxes), galvanized plumbing, lead paint, and asbestos exposure. Carriers price for the higher loss frequency and severity. Properties with documented updates often qualify for better rates.",
              },
            },
            {
              "@type": "Question",
              name: "What brings my investor insurance rate down the most?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Newer construction, recent roof, updated electrical and plumbing, currently rented status, no prior claims, higher deductibles, and bundling 5+ properties on one portfolio policy.",
              },
            },
          ],
        }}
      />
      <PageHero
        eyebrow="Interactive estimator"
        title="Real Estate Investor Insurance Cost Calculator."
        sub="Pick your property type, age, replacement cost, state, occupancy, and claims history. We will give you a realistic annual range based on the same logic our carrier panel uses."
        showCTAs={false}
      />
      <Breadcrumbs items={[{ label: "Calculator" }]} />

      <section className="container-narrow py-10">
        <InvestorCalculator />
      </section>

      <article className="container-narrow prose-investor">
        <h2>How the calculator works</h2>
        <p>
          The calculator is built on real pricing ranges we see across our
          carrier panel. It takes a base rate for your property type and
          applies multipliers for age, occupancy, claims, location, and
          replacement cost.
        </p>
        <p>
          This is an estimate, not a binding quote. Underwriters will look
          at the property in detail (inspection report, prior loss
          history, lender requirements) and may price differently. For an
          actual number, call or text 541-681-8793.
        </p>

        <h2>What moves your number the most</h2>
        <ul>
          <li><strong>Property type.</strong> The base rate is the biggest driver. STR, multifamily, and commercial have higher base rates than single family rentals.</li>
          <li><strong>Occupancy.</strong> Vacant adds 15%. Under renovation adds 25%. Currently rented is the baseline.</li>
          <li><strong>Claims history.</strong> One claim in 5 years adds 15%. Two or more adds 35%.</li>
          <li><strong>Property age.</strong> Pre-1980 adds 20%. Modernized older buildings often qualify for the same rates as newer construction.</li>
          <li><strong>Location.</strong> CA and TX add 10%. Other western states price near baseline.</li>
        </ul>

        <h2>Get the actual number</h2>
        <p>
          The fastest way is to send us the property details. Most quotes
          turn around the same business day.
        </p>
      </article>

      <CTASection
        heading="Want the real number?"
        sub="We'll shop your account across our 10+ carrier markets and bring back actual quotes."
      />

      <RelatedLinks
        items={[
          {
            href: "/how-much-does-real-estate-investor-insurance-cost",
            title: "Cost breakdown",
            desc: "Real ranges with line-item detail.",
          },
          {
            href: "/rentals-rehabs",
            title: "Rentals and rehabs",
            desc: "Coverage for 1-4 unit properties.",
          },
          {
            href: "/faq",
            title: "FAQ",
            desc: "25 questions answered.",
          },
        ]}
      />
    </>
  );
}
