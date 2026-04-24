import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "How Much Does Real Estate Investor Insurance Cost? Real Numbers",
  description:
    "Single family rental: $800 to $1,800/yr. STR: $1,200 to $3,000/yr. Small apartment: $3,000 to $8,000/yr. Real ranges by property type and what affects them.",
};

export default function CostPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Real Estate Investor Insurance",
          provider: {
            "@type": "InsuranceAgency",
            name: "Vantage Point Risk Partners",
            url: "https://investorpropertyinsurance.com",
          },
          areaServed: ["AZ", "CA", "CO", "ID", "MT", "NM", "NV", "OR", "TX", "UT", "WA", "WY"],
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "USD",
            lowPrice: "800",
            highPrice: "15000",
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "USD",
              price: "800-15000",
              description:
                "Annual real estate investor insurance premium range. Actual rate depends on property type, age, claims history, location, and underwriting review.",
            },
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How much does real estate investor insurance cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A single family rental typically costs $800 to $1,800 per year. Short-term rentals run $1,200 to $3,000. Small apartment buildings (5-10 units) run $3,000 to $8,000. Commercial property runs $2,500 to $10,000+. Specific factors include location, construction type, roof age, claims history, and vacancy.",
              },
            },
          ],
        }}
      />
      <PageHero
        eyebrow="Real numbers, by property type"
        title="How Much Does Real Estate Investor Insurance Cost? Real Numbers."
        sub="A single family rental runs $800 to $1,800 per year. STR runs $1,200 to $3,000. Small apartment runs $3,000 to $8,000. Here is the full breakdown by property type and the factors that move the number."
      />
      <Breadcrumbs items={[{ label: "Cost" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          For a single family rental in the western US, expect to pay
          between $800 and $1,800 per year for a DP-3 policy with $300K of
          dwelling coverage and $1M of liability. That is the realistic
          range for most properties built after 1980 with a clean claims
          history.
        </p>
        <p>
          The number moves up or down based on five things: location,
          construction type, roof age, prior claims, and whether the
          property is occupied or vacant.
        </p>

        <h2>Typical pricing by property type</h2>
        <p>
          Below are the realistic ranges across our carrier panel. These
          assume a property in good condition, in a standard location, with
          no prior claims.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Property Type</th>
                <th>Coverage</th>
                <th>Typical Annual Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Single family rental</td>
                <td>DP-3 + liability</td>
                <td>$800 to $1,800 / yr</td>
              </tr>
              <tr>
                <td>Short-term rental</td>
                <td>STR policy</td>
                <td>$1,200 to $3,000 / yr</td>
              </tr>
              <tr>
                <td>Small apartment (5-10 units)</td>
                <td>Commercial package</td>
                <td>$3,000 to $8,000 / yr</td>
              </tr>
              <tr>
                <td>Vacant or rehab property</td>
                <td>Specialty form</td>
                <td>$1,500 to $4,000 / yr</td>
              </tr>
              <tr>
                <td>Commercial property</td>
                <td>CPP or BOP</td>
                <td>$2,500 to $10,000+ / yr</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm">
          <em>
            These are estimates only. Actual rates depend on full
            underwriting review including property inspection, prior loss
            detail, lender requirements, and carrier-specific appetite.
            Call or text 541-681-8793 for your actual number.
          </em>
        </p>

        <h2>What pushes the cost up</h2>
        <ul>
          <li><strong>Location.</strong> Wildfire zones (parts of CA, OR, WA, CO, NM), wind/hail zones, coastal properties, urban locations with higher liability profiles.</li>
          <li><strong>Construction type.</strong> Frame construction is more expensive than masonry. Mixed construction depends on the proportions.</li>
          <li><strong>Roof age.</strong> Roofs over 15 years old often trigger ACV settlement (instead of replacement cost) on some carriers, plus higher base rates.</li>
          <li><strong>Pre-1980 construction.</strong> Knob and tube wiring, fuse boxes, galvanized plumbing, lead paint, and asbestos exposure all push the rate up.</li>
          <li><strong>Vacancy.</strong> A vacant property is harder to insure than an occupied one. Vacancy permits or vacant property forms cost more than standard landlord forms.</li>
          <li><strong>Claims history.</strong> One prior claim in 5 years adds 10-15%. Two or more pushes you toward specialty markets.</li>
          <li><strong>Higher dwelling limits.</strong> A $1M dwelling costs more than a $300K dwelling.</li>
          <li><strong>Higher liability.</strong> Going from $1M to $2M liability adds incremental premium.</li>
        </ul>

        <h2>What brings it down</h2>
        <ul>
          <li><strong>Newer construction.</strong> Post-2000 buildings qualify for the most carrier markets at the best rates.</li>
          <li><strong>Recent roof.</strong> A roof under 10 years old keeps RCV settlement intact and reduces base rates.</li>
          <li><strong>Updated electrical and plumbing.</strong> Modernized systems on older buildings often qualify for the same rates as newer construction.</li>
          <li><strong>Active occupancy.</strong> Currently rented to a long-term tenant beats vacant or transitional.</li>
          <li><strong>No prior claims.</strong> Five years of clean claim history opens the entire carrier panel.</li>
          <li><strong>Higher deductibles.</strong> Going from $1,000 to $2,500 or $5,000 deductible saves real premium if you can self-insure smaller losses.</li>
          <li><strong>Bundling a portfolio.</strong> Five or more properties on one policy often beats individual policies on premium and administration.</li>
        </ul>

        <h2>Factors that affect cost</h2>
        <p>
          The five biggest factors:
        </p>
        <ol>
          <li><strong>Location.</strong> CA and TX add 10% on top of base rate due to catastrophe and litigation exposure. Other states price closer to baseline.</li>
          <li><strong>Construction.</strong> Masonry and masonry non-combustible beat frame on most rates. Mixed-construction properties depend on the specifics.</li>
          <li><strong>Age and condition.</strong> Pre-1980 construction without updates adds 20%. Modernized older buildings often price like newer ones.</li>
          <li><strong>Claims history.</strong> One claim in 5 years adds 15%. Two or more adds 35% and narrows the carrier panel.</li>
          <li><strong>Occupancy.</strong> Currently rented is baseline. Vacant adds 15%. Under renovation adds 25%.</li>
        </ol>

        <h2>Vacancy and rehab specifically</h2>
        <p>
          A standard landlord form is priced for occupied use. Once the
          property goes vacant for more than 30 to 60 days, the carrier
          either restricts coverage (vacancy clause) or wants you on a
          different form (vacant property dwelling form, builders risk for
          rehab).
        </p>
        <p>
          Vacant property forms typically cost 1.5x to 2x a standard
          landlord form. Builders risk for active renovation runs 1-3% of
          construction value annually.
        </p>

        <h2>Portfolio savings</h2>
        <p>
          For investors with 5+ doors, a portfolio policy often saves 10-20%
          compared to insuring each property individually, plus consolidates
          renewal dates and simplifies administration.
        </p>
        <p>
          The exact savings depend on the carrier and the property mix. We
          quote both structures (individual policies vs portfolio) so you
          can see the comparison.
        </p>

        <h2>How to get your actual number</h2>
        <p>
          No online calculator gives you a real rate. Every carrier
          underwrites differently. The fastest way is to send us the
          property details and let us shop it.
        </p>
        <p>
          Want a rough estimate first? Use our{" "}
          <Link href="/real-estate-investor-insurance-calculator">
            cost calculator
          </Link>{" "}
          to get a starting range based on your property type, age,
          location, and claims history.
        </p>
        <p>
          For an actual number, call or text{" "}
          <a href="tel:+15416818793">541-681-8793</a> or{" "}
          <Link href="/get-a-quote">start a quote online</Link>.
        </p>
      </article>

      <CTASection
        heading="Get your actual number."
        sub="A 60-second intake gets us started. We'll come back with real options."
      />

      <RelatedLinks
        items={[
          {
            href: "/real-estate-investor-insurance-calculator",
            title: "Cost calculator",
            desc: "Interactive estimator with all the levers.",
          },
          {
            href: "/real-estate-investor-insurance-problems",
            title: "Common problems",
            desc: "Why investor coverage often goes wrong.",
          },
          {
            href: "/best-insurance-for-real-estate-investors",
            title: "Best insurance",
            desc: "How to define 'best' for your portfolio.",
          },
        ]}
      />
    </>
  );
}
