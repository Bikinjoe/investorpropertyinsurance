import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apartment Building Insurance | Investor Property Insurance",
  description:
    "Insuring a small apartment building requires commercial property coverage. Here's what that means and what to expect.",
};

export default function ApartmentBuildingInsurancePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Insurance for Small Apartment Buildings and Complexes",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "Insuring a small apartment building requires commercial property coverage. Here's what that means and what to expect.",
        }}
      />
      <PageHero
        eyebrow="Apartment building insurance"
        title="Insurance for Small Apartment Buildings and Complexes"
        sub="At five or more units, the insurance market changes. Here's what you need to know."
      />
      <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Apartment Building Insurance" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          A four-unit building and a five-unit building look similar on the outside. On the insurance
          side, they live in completely different markets. At five or more units, most carriers move you
          from residential landlord lines to commercial property lines. That shift affects your coverage
          options, your cost, and how claims are handled.
        </p>

        <h2>When a property shifts from residential to commercial lines</h2>
        <p>
          One to four units: residential market. Most landlord insurance carriers will write these on
          a DP-3 form or similar residential policy. Coverage is straightforward, pricing is competitive,
          and the market is deep.
        </p>
        <p>
          Five or more units: commercial market. You are now in habitational property territory. The
          coverage form changes, the carrier options narrow, and the underwriting is more involved.
          This is not a disadvantage. Commercial policies are simply built differently, with broader
          coverage forms and the ability to customize coverage for income-producing properties.
        </p>
        <p>
          The threshold is five units for most standard carriers. Some draw the line at four, others
          at six. The key is knowing which market you are in before you go shopping for coverage.
        </p>

        <h2>What commercial property coverage includes</h2>
        <p>
          A commercial package policy for an apartment building typically includes building coverage,
          general liability, and business income protection. These three components work together to
          cover your property, your liability as a landlord, and your rental income if a covered loss
          puts units out of service.
        </p>
        <p>
          Building coverage works similarly to a residential policy. You insure the structure at
          replacement cost, and the policy covers fire, windstorm, water damage from burst pipes,
          vandalism, and other covered perils. Flood and earthquake are still excluded and require
          separate policies.
        </p>
        <p>
          General liability at the commercial level typically starts at $1 million per occurrence,
          with $2 million aggregate. This covers slip-and-fall claims, injuries in common areas, and
          other incidents where a tenant or visitor holds you responsible.
        </p>

        <h2>Liability for common areas</h2>
        <p>
          An apartment building has more common-area exposure than a single-family rental. Parking lots,
          stairwells, laundry rooms, hallways, trash areas, and any shared outdoor space all create
          liability exposure for you as the property owner.
        </p>
        <p>
          If a tenant or visitor is injured in any of these spaces and you are found negligent, your
          general liability coverage responds. It pays your legal defense and any judgment against you
          up to your policy limit.
        </p>
        <p>
          Maintaining common areas in safe condition is your best defense against a claim. But even
          well-maintained properties get sued. Make sure your limits are adequate for the size of
          your building and the number of units.
        </p>

        <h2>Loss of rents</h2>
        <p>
          Business income coverage on a commercial policy does the same job as loss-of-rents on a
          residential landlord policy. If a covered loss makes one or more units uninhabitable, this
          coverage replaces the rent you would have collected during the repair period.
        </p>
        <p>
          On a five-unit building, losing even one unit to a fire or water loss can mean months of
          lost income. Carrying the right amount of business income coverage protects your cash flow
          while repairs are underway.
        </p>

        <h2>What changes at 5 units versus 2 to 4 units</h2>
        <p>
          The underwriting process gets more detailed. Expect to provide a rent roll, square footage,
          year built, roof age and material, and information about the building's systems. Some carriers
          will want to inspect the property before binding coverage.
        </p>
        <p>
          Deductibles tend to be higher on commercial policies. The standard is $2,500 to $5,000 per
          occurrence, compared to $1,000 or $2,500 on residential policies. You are absorbing more of
          the small claims, which is part of the commercial property model.
        </p>

        <h2>Cost factors</h2>
        <p>
          A five- to ten-unit apartment building in the western US typically runs $3,000 to $10,000
          per year for a commercial package. What drives the price: total insured value of the building,
          number of units, age and condition of the property, location, and prior claims history.
        </p>
        <p>
          Older buildings with deferred maintenance, outdated electrical panels, or aging roofs will
          pay more. Some carriers may decline to write them at all. Newer construction, updated systems,
          and a clean claims record put you in the best position for competitive pricing.
        </p>

        <h2>Bottom line</h2>
        <p>
          Five or more units means commercial lines. The coverage is built for the asset you own, but
          the process takes more work. Getting the right policy means working with an agent who knows
          the habitational market and can access multiple carriers.
        </p>
        <p>
          Ready to find the right coverage? Start here:{" "}
          <Link href="/get-a-quote" className="text-brand font-semibold hover:underline">
            investorpropertyinsurance.com/get-a-quote
          </Link>
        </p>
      </article>

      <CTASection />
    </>
  );
}
