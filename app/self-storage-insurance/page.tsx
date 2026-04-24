import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Self-Storage Facility Insurance, What Owners Actually Need",
  description:
    "Self-storage insurance covers tenant property liability, garage keeper's liability, business income, and the unique exposures of a storage facility. Standard commercial property policies miss the operational risks.",
};

const faqs = [
  {
    q: "Why is self-storage different from standard commercial property?",
    a: "A self-storage facility holds the property of dozens or hundreds of tenants in a setting where the operator does not directly supervise individual units. The exposures (tenant property loss, contractual liability under storage agreements, liability for fire suppression failure, theft, environmental from tenant goods) are different from a typical office or retail property. Standard commercial property forms do not address these specific risks well.",
  },
  {
    q: "Do I need to insure my tenants' property?",
    a: "Generally no. The standard storage rental agreement explicitly states that tenants store their property at their own risk and that the operator is not responsible for tenant property damage or theft. However, some operators add a tenant property protection program (sometimes called tenant insurance or protection plan) as an optional or required add-on for tenants. The operator's own policy covers the building and operator-owned equipment, plus the operator's liability if a claim does come through.",
  },
  {
    q: "What carriers write self-storage?",
    a: "Self-storage is a niche commercial class. Several specialty carriers write it actively: MiniCo, Universal Insurance Programs, Inland Marine Underwriters, plus standard commercial carriers (Travelers, Liberty Mutual) for larger facilities. The right carrier depends on facility size, location, security setup, and whether you offer climate-controlled or specialty storage.",
  },
  {
    q: "What coverage do I need beyond the building?",
    a: "Beyond standard property coverage on the building, a complete self-storage program typically includes: general liability (slip/fall, third-party property damage), garage keeper's liability if vehicles are stored, hired and non-owned auto if you transport tenant property, business income for periods the facility is non-operational, equipment breakdown for HVAC and security systems, and an umbrella policy over the underlying liability.",
  },
];

export default function SelfStoragePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHero
        eyebrow="Specialty commercial"
        title="Self-Storage Facility Insurance: What Owners Actually Need."
        sub="Self-storage is a unique commercial class. The exposures (tenant property, contractual liability, garage keeper's, fire suppression failure) need a policy structure built for storage operations, not a generic commercial property form."
      />
      <Breadcrumbs items={[{ label: "Self-Storage" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          A self-storage facility is its own commercial class. The building
          structure looks similar to other commercial property, but the
          exposures are specific: tenants store property the operator does
          not supervise, the rental agreement assigns most risk to the
          tenant, and the operator faces unusual liability around fire
          suppression, security, and tenant access.
        </p>
        <p>
          The right insurance program is built around these specific
          exposures. A generic commercial property policy will leave gaps
          that show up at claim time. Below is how we structure coverage
          for a self-storage operation.
        </p>

        <h2>Why self-storage is different from standard commercial property</h2>
        <p>
          A typical commercial property (office, retail, warehouse) is
          actively managed by the owner or a property manager who controls
          access and supervises operations. A self-storage facility is
          self-service: tenants come and go independently, store property
          the operator never inspects, and the operator's primary role is
          maintaining the building and managing the rental relationship.
        </p>
        <p>
          The risk implications:
        </p>
        <ul>
          <li>Theft and vandalism inside individual units, often discovered weeks or months later.</li>
          <li>Property damage from one tenant's stored items affecting adjacent units (fire, water damage from a leaking battery, pest infestation).</li>
          <li>Disputes over what was stored and what was lost (with no operator inventory to confirm).</li>
          <li>Liability for operator failure to maintain security, fire suppression, or environmental controls.</li>
          <li>Contractual disputes if the rental agreement language is challenged.</li>
        </ul>
        <p>
          Standard commercial property carriers either decline self-storage
          or write it on terms that miss these exposures.
        </p>

        <h2>Coverage you actually need</h2>

        <h3>Commercial property</h3>
        <p>
          The buildings, paving, fencing, lighting, security cameras,
          gates, and any operator-owned equipment. Written at full
          replacement cost. Includes coverage for operator-owned property
          inside the units (rental moving supplies, locks, packing
          materials).
        </p>

        <h3>General liability</h3>
        <p>
          Premises liability for slip/fall, vehicle damage in the drive
          aisles, security failures that lead to tenant property loss with
          operator negligence. Typically $1M to $2M per occurrence,
          higher for larger facilities.
        </p>

        <h3>Garage keeper's liability</h3>
        <p>
          If your facility stores vehicles (boats, RVs, cars), garage
          keeper's coverage protects you if a stored vehicle is damaged.
          Limits typically per-vehicle and per-occurrence, sized for the
          number of vehicles you store.
        </p>

        <h3>Tenant property protection (sale of insurance)</h3>
        <p>
          Many self-storage operators offer (or require) tenant property
          protection as part of the rental agreement. The operator does
          not insure tenant property directly; instead, the operator
          markets a tenant insurance program (typically through a
          third-party administrator) and earns a small commission. The
          operator's own policy does not need to cover tenant property,
          but the operator does need a separate program structure to sell
          the protection.
        </p>

        <h3>Business income</h3>
        <p>
          If a fire or other covered loss makes part of the facility
          unrentable, business income coverage pays the rental income lost
          during the repair period. For a 200-unit facility, this can be
          a meaningful coverage. Limits typically equal 12 to 18 months
          of gross rental income.
        </p>

        <h3>Equipment breakdown</h3>
        <p>
          HVAC for climate-controlled units, security systems, gate
          operators, automatic access systems. Equipment breakdown pays
          for mechanical or electrical failure of these systems plus
          resulting damage. For climate-controlled facilities, this is
          one of the highest-value coverages on the policy.
        </p>

        <h3>Hired and non-owned auto</h3>
        <p>
          If your operation involves any vehicle use (employee driving for
          deliveries, transporting tenant property, even occasional truck
          rentals), hired and non-owned auto coverage protects you.
        </p>

        <h3>Pollution liability</h3>
        <p>
          A specific exposure for self-storage: tenants sometimes store
          batteries, fuel, paints, or other materials that can cause
          environmental damage if they leak. Standard commercial liability
          excludes pollution. Adding a pollution endorsement closes the
          gap.
        </p>

        <h3>Umbrella</h3>
        <p>
          For larger facilities or operators with multiple locations, an
          umbrella policy ($1M to $5M) over the underlying general
          liability is standard.
        </p>

        <h2>Tenant property liability and the rental agreement</h2>
        <p>
          The rental agreement is the operator's primary risk management
          tool. Standard self-storage lease language includes:
        </p>
        <ul>
          <li>Tenant stores property at their own risk.</li>
          <li>Operator is not responsible for tenant property damage or theft.</li>
          <li>Operator does not inspect tenant property and does not certify what is stored.</li>
          <li>Tenant agrees to maintain their own insurance on stored property.</li>
          <li>Limits on operator liability (typically capped at a small amount per claim).</li>
          <li>Right of operator to refuse storage of certain materials (hazmat, explosives, food, perishables, vehicles in disrepair).</li>
        </ul>
        <p>
          A well-drafted rental agreement plus an operator insurance
          program plus an optional tenant property protection program is
          the standard three-leg structure for self-storage risk
          management.
        </p>

        <h2>Garage keeper's liability for vehicle storage</h2>
        <p>
          If your facility stores boats, RVs, cars, motorcycles, or
          trailers, you have a separate exposure: garage keeper's
          liability. This covers your responsibility if a stored vehicle
          is damaged while in your care. Coverage typically scales by:
        </p>
        <ul>
          <li>Number of vehicles stored.</li>
          <li>Per-vehicle limit (often $25K to $100K).</li>
          <li>Per-occurrence aggregate (the maximum payable in a single event).</li>
        </ul>
        <p>
          Some operators handle this by requiring tenants to provide their
          own vehicle insurance and naming the operator as additional
          insured. Others carry direct garage keeper's coverage. We
          structure based on your facility's mix.
        </p>

        <h2>Business income for a storage facility</h2>
        <p>
          A fire or other covered loss can take all or part of a facility
          out of service for months. Business income coverage pays the
          rental income lost during the repair period. For a 200-unit
          facility at $80/unit/month, that is $16,000/month in lost
          revenue, or $192,000 over a 12-month repair.
        </p>
        <p>
          We typically write 12 to 18 months of business income for
          self-storage. Larger or older buildings may need 18 months
          because permitting and code-required upgrades extend the repair
          period.
        </p>

        <h2>What carriers write self-storage</h2>
        <p>
          Self-storage is a niche commercial class. Specialty carriers
          that actively write storage include MiniCo, Universal Insurance
          Programs, Inland Marine Underwriters, plus standard commercial
          markets (Travelers, Liberty Mutual) for larger or
          institutional-grade facilities.
        </p>
        <p>
          The right carrier depends on:
        </p>
        <ul>
          <li>Facility size (number of units, total square footage).</li>
          <li>Climate-controlled vs standard storage.</li>
          <li>Vehicle storage component.</li>
          <li>Location (wildfire, flood, hurricane exposure).</li>
          <li>Security level (gate, cameras, on-site management).</li>
          <li>Prior loss history.</li>
        </ul>
        <p>
          Send us the facility details and we will quote across the right
          carriers.
        </p>

        <h2>What to send us for a quote</h2>
        <ul>
          <li>Facility address, total square footage, number of units.</li>
          <li>Year built and year of major renovations.</li>
          <li>Construction type (frame, metal, masonry).</li>
          <li>Climate-controlled vs non-climate-controlled (and percentages).</li>
          <li>Vehicle storage details if applicable.</li>
          <li>Security setup (gate, cameras, alarms, on-site management).</li>
          <li>Annual gross rental income.</li>
          <li>Prior 5-year claims history.</li>
          <li>Lender details if there is a mortgage.</li>
        </ul>

        <h2>Common questions</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </article>

      <CTASection
        heading="Coverage built for storage operations."
        sub="We will quote across the specialty carriers that actually want self-storage business."
      />

      <RelatedLinks
        items={[
          {
            href: "/commercial-property",
            title: "Commercial property",
            desc: "Office, retail, warehouse, mixed-use coverage.",
          },
          {
            href: "/mobile-home-park-insurance",
            title: "Mobile home parks",
            desc: "Another specialty asset class we write.",
          },
          {
            href: "/portfolio-landlord-insurance",
            title: "Portfolio landlord",
            desc: "Multi-property programs.",
          },
        ]}
      />
    </>
  );
}
