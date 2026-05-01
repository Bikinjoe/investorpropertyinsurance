import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "How Much Does Landlord Insurance Cost? | Investor Property Insurance",
  description:
    "Landlord insurance typically costs $800 to $2,500 per year for a single-family rental. Here's what drives the price up or down.",
};

export default function LandlordInsuranceCostPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How Much Does Landlord Insurance Cost?",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "Landlord insurance typically costs $800 to $2,500 per year for a single-family rental. Here's what drives the price up or down.",
        }}
      />
      <PageHero
        eyebrow="Landlord insurance cost"
        title="How Much Does Landlord Insurance Cost?"
        sub="For a single-family rental, typically $800 to $2,500 per year. Where you land depends on a handful of specific factors."
      />
      <Breadcrumbs items={[{ label: "Landlord Insurance Cost" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          Landlord insurance for a single-family rental typically costs between $800 and $2,500
          per year. That is a wide range, and where you land depends on a handful of specific
          factors. Here is what drives the number up or down, and how to make sure you are
          comparing quotes correctly.
        </p>

        <h2>What Affects the Cost</h2>
        <p>
          Property value and replacement cost. The higher the cost to rebuild the structure,
          the higher the premium. A $500,000 home costs more to insure than a $200,000 home.
          Insurers are underwriting replacement cost, not market value.
        </p>
        <p>
          Location. Where the property sits matters. Properties in wildfire zones, flood plains,
          or high-crime areas carry higher premiums. In Oregon and the broader Pacific Northwest,
          wildfire exposure has pushed rates up in many areas over the past several years.
        </p>
        <p>
          Age and condition of the building. Older buildings often cost more to insure,
          especially if the electrical, plumbing, or roof has not been updated. A 1960s property
          with original wiring is a different risk than a 2010 build.
        </p>
        <p>
          Coverage limits. Higher liability limits cost more. Higher dwelling coverage limits
          cost more. This is where cutting corners to save money creates real exposure.
        </p>
        <p>
          Deductible. A higher deductible means a lower premium. A $2,500 deductible policy
          will cost less than a $500 deductible policy. The tradeoff is that you pay more out
          of pocket when you file a claim.
        </p>
        <p>
          Claims history. If you have filed claims in the past few years, expect to pay more.
        </p>
        <p>
          Property type. A single-family rental typically costs less than a duplex, which costs
          less than a small apartment building.
        </p>

        <h2>Why Cheap Is Often Wrong</h2>
        <p>
          The least expensive policy usually gets there by cutting something.
        </p>
        <p>
          Actual cash value instead of replacement cost. Actual cash value pays what the damaged
          property is worth today, after depreciation. A 15-year-old roof has depreciated
          significantly. If it is destroyed in a storm, actual cash value pays you a fraction of
          what a new roof costs. Replacement cost coverage pays what it actually costs to
          rebuild. The difference in annual premium is usually a few hundred dollars. The
          difference in a claim can be tens of thousands.
        </p>
        <p>
          Low liability limits. A $100,000 liability limit sounds like a lot until you are
          facing a lawsuit with $200,000 in medical bills and legal fees. Carry at least
          $300,000.
        </p>

        <h2>How to Compare Quotes Correctly</h2>
        <p>
          When you get multiple quotes, you are only comparing apples to apples if the coverage
          matches. Check: same dwelling coverage amount, same liability limit, same deductible,
          same coverage type (replacement cost vs actual cash value), same endorsements
          included.
        </p>
        <p>
          A quote that is $400 cheaper may have a lower liability limit, actual cash value
          instead of replacement cost, or a higher deductible. That is not a better deal. That
          is less coverage for less money.
        </p>

        <h2>Multiple Properties</h2>
        <p>
          If you own more than one rental, ask about portfolio policies or multi-property
          discounts. Some carriers write blanket policies that cover multiple properties under
          one policy with one renewal date.
        </p>

        <h2>Why Landlord Insurance Costs More Than Homeowners Insurance</h2>
        <p>
          Landlord insurance costs more than homeowners insurance for the same property. The
          risk profile is different. Tenants interact with the property differently than owners.
          The wear patterns are different. The likelihood of a liability claim is higher. The
          insurer is covering a property you are not personally watching over every day.
        </p>
        <p>
          Budget for the difference when you are analyzing rental income and expenses.
        </p>
      </article>

      <section className="container-narrow pb-10">
        <div className="rounded-lg border border-flame bg-flame/5 p-6">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Find out what your specific property costs to insure.
          </h2>
          <p className="mt-2 text-base text-muted sm:text-lg">
            We shop 20+ carriers and compare real quotes on your actual property.
          </p>
          <div className="mt-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link href="/get-a-quote" className="btn-primary w-full sm:w-auto">
              Get a Quote
            </Link>
            <a href="tel:+15416818793" className="btn-secondary w-full sm:w-auto">
              Call or text 541-681-8793
            </a>
          </div>
        </div>
      </section>

      <CTASection />

      <RelatedLinks
        items={[
          {
            href: "/how-much-does-real-estate-investor-insurance-cost",
            title: "Real estate investor insurance cost",
            desc: "Broader cost breakdown for investor property across all property types.",
          },
          {
            href: "/what-does-landlord-insurance-cover",
            title: "What does landlord insurance cover?",
            desc: "Understanding what you are paying for before you compare prices.",
          },
          {
            href: "/rental-property-insurance",
            title: "What insurance do I need for a rental property?",
            desc: "Start here if you are new to landlord insurance.",
          },
        ]}
      />
    </>
  );
}
