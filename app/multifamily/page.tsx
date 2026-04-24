import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata = {
  title: "Apartment and Multifamily Insurance, 5+ Units",
  description:
    "Multifamily property insurance with habitational liability, equipment breakdown, business income, and lender requirements. 5+ unit apartments, student housing, and hotels.",
};

export default function MultifamilyPage() {
  return (
    <>
      <PageHero
        eyebrow="5+ units"
        title="Apartment and Multifamily Insurance, 5+ Units."
        sub="Once you cross 5 units, the right insurance product is a commercial package, not a landlord form. Different exposures, different carrier panel, different coverages."
      />
      <Breadcrumbs items={[{ label: "Multifamily" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          For 5+ unit multifamily properties (apartments, student housing,
          small hotels, residential complexes), the right insurance is a
          commercial package or a habitational policy. Standard 1-4 unit
          landlord forms (DP-3) typically don't extend to multifamily, and
          the carriers that write 1-4 unit residential are often not the
          right carriers for 5+.
        </p>
        <p>
          Multifamily insurance is its own product. Below is the structure
          of a complete multifamily program and the specific coverages that
          matter.
        </p>

        <h2>Why multifamily is different from 1-4 unit</h2>
        <p>
          The exposures change when you cross from 1-4 to 5+ units:
        </p>
        <ul>
          <li>More tenants means more liability claims (slip and falls, dog bites, child injuries).</li>
          <li>Common areas (hallways, parking lots, laundry, mailrooms) create additional premises exposure.</li>
          <li>Shared mechanical systems (boilers, central HVAC, elevators) create equipment breakdown exposure.</li>
          <li>Larger property values create higher loss-of-rents exposure during repair.</li>
          <li>Lender and investor scrutiny is higher, with specific insurance requirements baked into loan documents.</li>
        </ul>
        <p>
          A commercial package addresses all of this in one structure
          instead of trying to bolt coverages onto a residential form.
        </p>

        <h2>Habitational liability exposures</h2>
        <p>
          Multifamily liability has specific exposures that residential
          carriers either exclude or sublimit. The big ones:
        </p>
        <h3>Assault and battery</h3>
        <p>
          As a property owner you have a duty to provide reasonable
          security. If a tenant or guest is assaulted on your property and
          the assault was foreseeable (poor lighting, broken locks, prior
          incidents), you can be sued. Standard commercial policies often
          exclude or sublimit assault and battery to a small amount. Add the
          coverage back as an endorsement at meaningful limits.
        </p>
        <h3>Sexual abuse and molestation (SAM)</h3>
        <p>
          A separate exclusion on most commercial habitational policies. Add
          back where the exposure is meaningful (particularly in properties
          with vulnerable resident populations).
        </p>
        <h3>Communicable disease</h3>
        <p>
          Post-COVID, most carriers added a CD exclusion. Some buy back or
          sublimit is available depending on the carrier.
        </p>
        <h3>Lead paint, asbestos, mold</h3>
        <p>
          Standard exclusions on most habitational policies. Endorsements
          available depending on the property condition (older buildings
          often need them; newer buildings rarely do).
        </p>

        <h2>Equipment breakdown</h2>
        <p>
          Equipment breakdown coverage pays for damage from mechanical or
          electrical failure of equipment installed at the property. For
          multifamily, this matters because central HVAC, boilers, elevators,
          shared water heating, and electrical systems are the kinds of
          things that fail and create cascading damage.
        </p>
        <p>
          Real example: a commercial boiler ruptures in the basement of a
          12-unit apartment building. The floor floods. Damage to the boiler
          and the structural water damage runs into six figures. Without
          equipment breakdown, the standard property policy denies the boiler
          repair (mechanical failure) and may dispute the resulting water
          damage. With equipment breakdown, both are covered.
        </p>
        <p>
          For multifamily, equipment breakdown is one of the highest
          value-per-dollar coverages. We include it on most multifamily
          quotes by default.
        </p>

        <h2>Loss of rents for larger buildings</h2>
        <p>
          Loss of rents (sometimes called business income on commercial
          forms) pays the rental income you would have collected during a
          covered repair. For a multifamily property, this can be a large
          number: 12 months of rent across 8, 10, or 25 units adds up.
        </p>
        <p>
          Things to get right:
        </p>
        <ul>
          <li>Limit equal to at least 12 months of gross potential rent.</li>
          <li>Period of indemnity that runs through the entire repair, including code-required upgrades.</li>
          <li>Extended business income for the period after repair while the property re-tenants.</li>
        </ul>

        <h2>Lender requirements for multifamily</h2>
        <p>
          Multifamily lenders typically require:
        </p>
        <ul>
          <li>Replacement cost coverage on the building.</li>
          <li>Lender named as mortgagee/loss payee.</li>
          <li>30-day notice of cancellation in favor of the mortgagee.</li>
          <li>Liability coverage of at least $1M to $2M (depending on size of property).</li>
          <li>Loss of rents/business income equal to 12 months of gross rent.</li>
          <li>Ordinance and law coverage (especially for older buildings).</li>
          <li>Equipment breakdown.</li>
          <li>Flood coverage if the property is in a FEMA flood zone.</li>
          <li>Wind/hail coverage where applicable.</li>
          <li>For larger commercial loans: terrorism coverage (TRIA), specific environmental endorsements, and lease-up/business income contingencies.</li>
        </ul>
        <p>
          Send us the loan documents and we will write the policy to match
          requirements without overpaying for unnecessary coverage. We send
          binders and certificates directly to the lender for closing.
        </p>

        <h2>What we need to quote multifamily</h2>
        <ul>
          <li>Property address.</li>
          <li>Number of units and unit mix (studios, 1BR, 2BR, etc.).</li>
          <li>Year built and year of major renovations.</li>
          <li>Construction type (frame, joisted masonry, masonry non-combustible).</li>
          <li>Replacement cost estimate or recent appraisal.</li>
          <li>Annual gross rental income.</li>
          <li>Prior 5-year claims history.</li>
          <li>Lender details if there is a mortgage.</li>
          <li>Property management approach (self-managed, third-party PM).</li>
        </ul>
        <p>
          Multifamily quotes typically take 24 to 72 hours depending on the
          carrier and property. We'll let you know up front what to expect.
        </p>
      </article>

      <CTASection
        heading="Coverage built for multifamily."
        sub="Habitational liability, equipment breakdown, and lender-ready structure. We handle the whole package."
      />

      <RelatedLinks
        items={[
          {
            href: "/commercial-property",
            title: "Commercial property",
            desc: "Office, retail, warehouse, mixed-use coverage.",
          },
          {
            href: "/rentals-rehabs",
            title: "1-4 unit rentals",
            desc: "Coverage for smaller residential properties.",
          },
          {
            href: "/how-much-does-real-estate-investor-insurance-cost",
            title: "Cost breakdown",
            desc: "Multifamily premium ranges.",
          },
        ]}
      />
    </>
  );
}
