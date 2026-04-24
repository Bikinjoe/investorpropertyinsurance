import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata = {
  title: "Commercial Property Insurance for Real Estate Investors",
  description:
    "Coverage for office, retail, warehouse, industrial, and mixed-use commercial property. Commercial package, BOP, tenant improvements, business income, and lender requirements.",
};

export default function CommercialPropertyPage() {
  return (
    <>
      <PageHero
        eyebrow="Office · retail · warehouse · industrial · mixed-use"
        title="Commercial Property Insurance for Real Estate Investors."
        sub="A commercial package built around the lease structure, the tenant mix, and the lender. Different from residential investor coverage in important ways."
      />
      <Breadcrumbs items={[{ label: "Commercial Property" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          For commercial property (office, retail, warehouse, industrial,
          mixed-use), the right form is a commercial package or, for smaller
          properties, a Business Owners Policy (BOP). The structure depends
          on the building type, the tenant mix, the size, and the lender
          requirements.
        </p>
        <p>
          Commercial coverage looks different from residential investor
          coverage. The lease determines who insures what. The tenant mix
          drives the liability profile. The lender requirements drive the
          minimums. Below is how we structure each piece.
        </p>

        <h2>Commercial package vs BOP</h2>
        <p>
          Two main structures for commercial property:
        </p>
        <h3>Business Owners Policy (BOP)</h3>
        <p>
          A pre-packaged policy designed for smaller commercial properties
          and small businesses. Bundles property and general liability with
          baked-in coverages (business income, loss of rents, basic
          equipment breakdown). Best for:
        </p>
        <ul>
          <li>Smaller commercial properties under $5M in replacement cost.</li>
          <li>Standard tenant types (office, retail, light industrial).</li>
          <li>Single-building or small-portfolio operations.</li>
        </ul>
        <h3>Commercial Package Policy (CPP)</h3>
        <p>
          A modular structure where you build the policy from individual
          coverage parts: commercial property, general liability, equipment
          breakdown, crime, inland marine, and others. Best for:
        </p>
        <ul>
          <li>Larger commercial properties.</li>
          <li>Mixed tenant types (medical, restaurant, manufacturing).</li>
          <li>Properties with specific exposures (large parking lots, multiple buildings, environmental risks).</li>
          <li>Portfolios with consistent coverage needs across multiple properties.</li>
        </ul>
        <p>
          We quote both structures and show you the comparison.
        </p>

        <h2>Office, retail, warehouse, industrial differences</h2>
        <p>
          The use of the building drives the underwriting:
        </p>
        <h3>Office</h3>
        <p>
          Lowest claim frequency among commercial classes. Standard markets
          write competitively. Liability concentrates on slip and fall,
          parking lot incidents, and certain professional services
          exposures. Tenant improvement coverage is often a meaningful part
          of the policy.
        </p>
        <h3>Retail</h3>
        <p>
          Higher liability exposure from foot traffic, loading docks, and
          shopping cart claims. Anchor tenants, restaurants, and grocery
          tenants raise the property exposure. Mixed retail with a
          restaurant tenant requires specific underwriting because of the
          fire risk from cooking operations.
        </p>
        <h3>Warehouse and industrial</h3>
        <p>
          Lower liability per square foot but higher property values per
          building. Sprinkler systems, fire alarm protection, and security
          drive carrier appetite. Tenant operations matter (chemical
          storage, manufacturing processes, hazardous materials).
        </p>
        <h3>Mixed-use</h3>
        <p>
          Combinations of residential over commercial (apartment over
          retail), or office plus retail. Need a commercial policy that
          handles both the habitational and commercial exposures. Some
          carriers specialize in mixed-use; others avoid it.
        </p>

        <h2>Tenant improvement coverage</h2>
        <p>
          Commercial leases often place responsibility for tenant
          improvements (build-out, fixtures, finish) on either the landlord
          or the tenant depending on the lease terms. Insurance needs to
          match.
        </p>
        <p>
          Two approaches:
        </p>
        <ul>
          <li><strong>Landlord insures the building including TI.</strong> Simpler. Landlord rebuilds after a loss and recovers the TI cost from insurance. Lease typically requires tenant to insure their own contents and business income.</li>
          <li><strong>Landlord insures the building shell; tenant insures TI.</strong> The lease assigns TI responsibility to the tenant. The tenant carries property coverage on their improvements.</li>
        </ul>
        <p>
          Look at the lease language before quoting. Mismatch between lease
          and policy is a common claim dispute.
        </p>

        <h2>Business income</h2>
        <p>
          On commercial property, "business income" is the equivalent of
          loss of rents on residential. It pays the rental income lost
          during a covered repair period.
        </p>
        <p>
          For commercial, the period of indemnity is often longer than
          residential because:
        </p>
        <ul>
          <li>Commercial repairs take longer (permits, code compliance, larger structural work).</li>
          <li>Re-leasing after a major loss can take 6 to 12 months.</li>
          <li>Tenant lease commitments may have specific re-occupancy timelines.</li>
        </ul>
        <p>
          We typically write 12 to 18 months of business income on
          commercial property, with extended business income coverage for
          the re-leasing period after repair.
        </p>

        <h2>Ordinance and law</h2>
        <p>
          Commercial buildings are often older. Ordinance and law coverage
          pays the additional cost of bringing a damaged building up to
          current code during repair. For older commercial properties,
          increasing ordinance and law to 10-25% of dwelling is one of the
          highest-value additions to the policy.
        </p>
        <p>
          See the <Link href="/faq">FAQ entry on ordinance and law</Link> for more.
        </p>

        <h2>Lender and lease requirements</h2>
        <p>
          Commercial lenders and commercial leases both impose insurance
          requirements that the policy needs to satisfy. Common items:
        </p>
        <ul>
          <li>Replacement cost on the building.</li>
          <li>Lender named as mortgagee/loss payee.</li>
          <li>30-day notice of cancellation.</li>
          <li>Liability coverage of $1M to $5M depending on the property.</li>
          <li>Business income at 12 to 18 months of rent.</li>
          <li>Tenant additional insured status (per the lease).</li>
          <li>Waiver of subrogation in favor of certain parties (lender, anchor tenant).</li>
          <li>Certificates of insurance issued to specific entities at specific addresses.</li>
        </ul>
        <p>
          Send us the loan documents and the lease summary and we will
          structure the policy to satisfy requirements without overpaying.
          We issue certificates to lenders and tenants directly.
        </p>

        <h2>What we need to quote commercial property</h2>
        <ul>
          <li>Address and square footage.</li>
          <li>Property type and tenant mix.</li>
          <li>Year built and year of major renovations.</li>
          <li>Construction type and protection class (sprinklers, alarm).</li>
          <li>Replacement cost estimate or recent appraisal.</li>
          <li>Annual gross rental income (for business income calculation).</li>
          <li>Prior 5-year claims history.</li>
          <li>Lender and lease summary if applicable.</li>
        </ul>
      </article>

      <CTASection
        heading="Commercial coverage that matches your lease."
        sub="Send us the property details and we will structure the package."
      />

      <RelatedLinks
        items={[
          {
            href: "/multifamily",
            title: "Multifamily",
            desc: "Apartment and habitational coverage.",
          },
          {
            href: "/ground-up-construction",
            title: "Ground-up construction",
            desc: "Builders risk for new commercial builds.",
          },
          {
            href: "/how-much-does-real-estate-investor-insurance-cost",
            title: "Cost breakdown",
            desc: "Commercial property premium ranges.",
          },
        ]}
      />
    </>
  );
}
