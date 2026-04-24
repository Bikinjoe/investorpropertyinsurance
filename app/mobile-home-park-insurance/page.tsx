import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Mobile Home Park Insurance, Why Standard Carriers Say No",
  description:
    "Mobile home park insurance from carriers that actually write the asset class. Coverage for common areas, park-owned vs tenant-owned structures, habitational liability, and the unique exposures most carriers will not touch.",
};

const faqs = [
  {
    q: "Why do most insurance carriers refuse to write mobile home parks?",
    a: "Mobile home parks have a unique risk profile that most standard carriers are not set up to underwrite. The mix of tenant-owned mobile homes (which the park does not insure), park-owned common areas, utility infrastructure (water, sewer, electrical), and habitational liability does not fit standard commercial property forms. Standard carriers often decline rather than try to fit the risk into a category that does not match.",
  },
  {
    q: "Do I insure tenant-owned mobile homes?",
    a: "Generally no. Tenants own their mobile homes and are responsible for insuring them. The park owner's policy covers the land, the common area structures (clubhouse, laundry, office), the infrastructure (roads, utilities), and the park's liability exposure. Some parks own a small number of homes for rental; those are covered separately as park-owned dwellings.",
  },
  {
    q: "What is the most overlooked coverage for MHP owners?",
    a: "Sewer and water utility coverage. Many parks have aging underground utilities that fail (sewer collapse, water main break, septic system issues). Standard property policies often exclude or sublimit these losses. A park-specific policy with utility infrastructure coverage closes the gap. The other commonly missed coverage is habitational liability with assault and battery and sexual abuse buy-backs (standard exclusions on many forms).",
  },
  {
    q: "What carriers write mobile home parks?",
    a: "MHP coverage comes from a narrow panel of specialty carriers: Markel, Burlington, Capacity Insurance, certain E&S markets, and a handful of standard carriers that retain MHP appetite. The right carrier depends on park size, location (wildfire, hurricane exposure), age of infrastructure, occupancy mix, and prior claims.",
  },
];

export default function MHPPage() {
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
        eyebrow="Specialty asset class"
        title="Mobile Home Park Insurance: Why Standard Carriers Say No (And Who Says Yes)."
        sub="Mobile home parks need specialty carriers and a policy structure built around the unique mix of common areas, infrastructure, tenant-owned homes, and habitational liability. Generic commercial property forms do not fit."
      />
      <Breadcrumbs items={[{ label: "Mobile Home Park" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          Mobile home parks (also called manufactured home communities) are
          one of the most overlooked specialty asset classes in real estate
          investor insurance. The risk does not fit standard commercial
          property templates. Most carriers decline rather than try to
          underwrite it, which leaves park owners with a small panel of
          specialty markets and a lot of coverage gaps if they end up with
          the wrong policy.
        </p>
        <p>
          Done right, MHP insurance is straightforward. Below is the asset
          class explained, what coverage matters, what investors get
          wrong, and which carriers actually write it.
        </p>

        <h2>MHP as a unique asset class</h2>
        <p>
          A mobile home park has a structure that does not look like
          anything else in commercial real estate:
        </p>
        <ul>
          <li>The park owner owns the land and the underlying infrastructure (roads, utilities, common areas).</li>
          <li>Tenants typically own their mobile homes and rent the lot from the park.</li>
          <li>Some parks own a portion of the homes (park-owned units, often rented to tenants who do not own the home).</li>
          <li>Common area structures (clubhouse, laundry, office, pool, playground) are park-owned.</li>
          <li>Utility infrastructure (water lines, sewer lines, electrical pedestals) is park-owned and exposed to wear and weather.</li>
        </ul>
        <p>
          This mix of ownership structures does not fit a standard
          commercial property form. The park owner's policy needs to cover
          what the park owns, exclude what tenants own, and address the
          specific habitational and utility exposures of the asset class.
        </p>

        <h2>Coverage you actually need</h2>

        <h3>Property coverage on park-owned structures</h3>
        <p>
          Clubhouse, laundry, office, maintenance buildings, gazebos,
          playground equipment, signs, perimeter fencing, paving. Written
          at full replacement cost.
        </p>

        <h3>Park-owned home coverage (if applicable)</h3>
        <p>
          If the park owns and rents some homes (often older units acquired
          when residents move out), those homes need separate dwelling
          coverage. Treated as residential rentals on the same policy.
        </p>

        <h3>Utility infrastructure coverage</h3>
        <p>
          Underground water lines, sewer mains, electrical pedestals,
          well heads, septic systems, and other park-owned utility
          infrastructure. Standard property policies often exclude or
          sublimit these. A park-specific policy includes them as a named
          coverage with a meaningful limit.
        </p>

        <h3>General liability</h3>
        <p>
          Premises liability for slip/fall on roads and common areas, dog
          bite (if the park allows pets), playground injuries, pool
          incidents (if applicable), and general resident/visitor
          exposure. Typically $1M to $2M per occurrence. Park size
          determines whether higher limits make sense.
        </p>

        <h3>Habitational liability buy-backs</h3>
        <p>
          Standard commercial liability policies often exclude or sublimit:
        </p>
        <ul>
          <li>Assault and battery (claims against the park for foreseeable third-party violence).</li>
          <li>Sexual abuse and molestation (SAM).</li>
          <li>Communicable disease.</li>
        </ul>
        <p>
          For habitational properties (which mobile home parks are), these
          exclusions can be added back as endorsements at meaningful
          limits. We add them by default on MHP policies.
        </p>

        <h3>Loss of rents / business income</h3>
        <p>
          If a covered loss takes part of the park out of operation,
          business income coverage pays the lot rent income lost during
          the repair. For a 100-pad park, that adds up.
        </p>

        <h3>Equipment breakdown</h3>
        <p>
          Pump systems, well equipment, lift station equipment, common
          area HVAC. Equipment breakdown pays for mechanical or electrical
          failure plus resulting damage.
        </p>

        <h3>Pollution liability</h3>
        <p>
          MHPs have specific environmental exposures: leaking fuel tanks
          (for park-owned equipment), septic system issues, stormwater
          discharge concerns. Standard liability excludes pollution. Add
          it back where appropriate.
        </p>

        <h3>Umbrella</h3>
        <p>
          $1M to $5M umbrella over the underlying liability is standard
          for MHPs. The combination of habitational exposure plus large
          resident populations plus aging infrastructure makes the
          umbrella one of the highest-value coverages on the policy.
        </p>

        <h2>Common areas vs tenant-owned structures</h2>
        <p>
          The line between what the park insures and what the tenant
          insures is critical to set correctly:
        </p>
        <p>
          <strong>Park insures:</strong> land, roads, paving, fencing,
          common area buildings (clubhouse, office, laundry, restrooms),
          utility infrastructure, signage, lighting, playground equipment,
          park-owned mobile homes (if any), and the operator's liability.
        </p>
        <p>
          <strong>Tenant insures:</strong> their mobile home, their
          contents, their personal liability. The lot lease should
          require tenants to carry insurance and name the park as
          additional insured on their policy.
        </p>
        <p>
          When the line is unclear (or the lease doesn't require tenant
          insurance), claims can land on the park's policy that should
          have been on a tenant policy. We help structure both the
          insurance program and the lease language to keep this clean.
        </p>

        <h2>What investors get wrong</h2>
        <ol>
          <li>
            <strong>Buying a generic commercial property policy.</strong>{" "}
            Standard commercial does not address utility infrastructure,
            habitational liability buy-backs, or the unique tenant-owned
            home structure.
          </li>
          <li>
            <strong>Skipping habitational liability buy-backs.</strong>{" "}
            Assault and battery and SAM exclusions on a multi-resident
            property can be financially catastrophic at claim time.
          </li>
          <li>
            <strong>Not addressing utility infrastructure.</strong> A
            sewer collapse or water main break can cost $50K to $200K to
            repair. Standard policies often exclude.
          </li>
          <li>
            <strong>Not requiring tenant insurance.</strong> Park leases
            should require tenants to carry insurance on their own homes.
            If not, the park gets pulled into claims that should go to
            the tenant's policy.
          </li>
          <li>
            <strong>Underestimating dwelling limits on park-owned homes.</strong>{" "}
            Older park-owned homes still cost real money to replace.
            Underinsurance at claim time is common.
          </li>
        </ol>

        <h2>Which carriers write MHPs</h2>
        <p>
          The carrier panel is narrow. Specialty carriers that actively
          write MHP include Markel, Burlington, Capacity Insurance, and
          certain E&S markets. A few standard commercial carriers retain
          MHP appetite for larger or institutional-grade parks.
        </p>
        <p>
          The right carrier depends on:
        </p>
        <ul>
          <li>Park size (number of pads).</li>
          <li>Park-owned vs tenant-owned home mix.</li>
          <li>Age of infrastructure.</li>
          <li>Location and catastrophe exposure (wildfire, hurricane, hail).</li>
          <li>Prior loss history.</li>
          <li>Occupancy and tenant profile.</li>
        </ul>

        <h2>What to send us for a quote</h2>
        <ul>
          <li>Park address and total acreage.</li>
          <li>Number of pads and current occupancy.</li>
          <li>Number of park-owned homes and their values.</li>
          <li>Common area structures (list with values).</li>
          <li>Utility setup (city water/sewer vs well/septic).</li>
          <li>Year park was developed and year of major infrastructure work.</li>
          <li>Annual gross income (lot rent, home rent, other).</li>
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
        heading="Get a real MHP quote."
        sub="We work with the specialty carriers that write mobile home parks. Send us your park details."
      />

      <RelatedLinks
        items={[
          {
            href: "/multifamily",
            title: "Multifamily",
            desc: "Apartment and habitational coverage.",
          },
          {
            href: "/commercial-property",
            title: "Commercial property",
            desc: "Office, retail, warehouse coverage.",
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
