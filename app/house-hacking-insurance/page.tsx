import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "House Hacking Insurance, Owner-Occupied Rental Coverage",
  description:
    "House hacking insurance for owner-occupied rentals: duplex, triplex, fourplex, and SFR with rented rooms. What standard homeowner policies miss and how to cover the rental side properly.",
};

const faqs = [
  {
    q: "Does my homeowner policy cover renting out a room or unit in my house?",
    a: "Standard homeowner policies are written for owner-occupied use only. Renting a room, basement apartment, ADU, or unit can be classified as a business activity that the policy excludes. Most carriers want to know if you have rental income on the property and will either add a landlord endorsement, write a separate DP-3 form on the rental portion, or non-renew the policy if rental activity is undisclosed.",
  },
  {
    q: "Do I need a DP-3 if I live in part of the building?",
    a: "Sometimes yes, sometimes no. For an owner-occupied 2-4 unit building (the classic house hack), a DP-3 written on the entire property with you as the named insured and disclosed as owner-occupant is the most common structure. For a single family with a rented bedroom, a homeowner policy with a landlord endorsement is often the right answer. The decision depends on the carrier, the lease structure, and the percentage of the property that is rented.",
  },
  {
    q: "How does the lender treat my insurance for an owner-occupied rental?",
    a: "If you used owner-occupied financing (FHA, conventional with primary residence pricing, VA), the lender will require insurance that covers the dwelling at full replacement cost with the lender named as mortgagee. Most lenders accept either a homeowner policy with rental endorsement or a DP-3 with named insured as owner-occupant. The key is that the policy reflects the actual use of the property and that the lender requirements are satisfied.",
  },
  {
    q: "What happens to my insurance when I move out and rent the whole property?",
    a: "When you move out, the property changes from owner-occupied to fully rented. Your homeowner policy needs to convert to a true landlord (DP-3) policy. Tell your agent before you move out so the policy is rewritten with the correct effective date. Many denied claims trace back to a property that became fully rented but the policy was never updated.",
  },
];

export default function HouseHackingPage() {
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
        eyebrow="Owner occupied + rental"
        title="House Hacking Insurance: Covering an Owner-Occupied Rental Property."
        sub="House hacking sits in the gap between homeowner insurance and landlord insurance. Get the structure right at the start so a claim does not get denied because the rental activity was undisclosed or misclassified."
      />
      <Breadcrumbs items={[{ label: "House Hacking" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          House hacking is the strategy of buying a property, living in part
          of it, and renting out the rest. A duplex with you in one unit and
          a tenant in the other. A single family home with a rented basement
          ADU. A four-plex with you in one unit and three rental units. The
          financing is often owner-occupied, which is cheaper. The insurance
          gets complicated because the property is being used in two ways at
          the same time.
        </p>
        <p>
          Most insurance problems for house hackers come from one of two
          mistakes: the property is on a homeowner policy that excludes
          rental activity, or it is on a landlord policy that does not
          properly cover the owner-occupied portion. The right structure
          depends on the property type, the lease arrangement, and the
          carrier. Below is how we set it up.
        </p>

        <h2>What house hacking is and why insurance matters</h2>
        <p>
          Insurance carriers price policies based on how a property is used.
          Owner-occupied homes have one risk profile. Rentals have another.
          A property that is partly owner-occupied and partly rented sits in
          between, which is exactly the gap where standard policies tend to
          fall short.
        </p>
        <p>
          The exposures change when a tenant is on site:
        </p>
        <ul>
          <li>Tenant injury claims (slip and fall in a common area, stairwell, parking).</li>
          <li>Tenant property damage you may be responsible for (water damage from a shared system, fire from owner-installed wiring).</li>
          <li>Loss of rents if the property becomes uninhabitable after a covered loss.</li>
          <li>Habitability and tenant rights claims.</li>
          <li>Broader business/professional exposure if you are seen as a landlord rather than a homeowner.</li>
        </ul>
        <p>
          A standard homeowner policy is not priced for these. A standard
          landlord policy is not priced for the fact that you live there.
          The right answer is typically a hybrid structure.
        </p>

        <h2>Why standard homeowner policies do not cover rental activity</h2>
        <p>
          Buried in most homeowner policy language are conditions that
          assume the property is owner-occupied and not used for business
          purposes. Rental activity, even renting a single room on a
          long-term lease or part-time on Airbnb, can be classified as
          business use. The carrier does not need to prove fraud to deny a
          claim. They only need to show the use of the property changed
          from what was disclosed at policy inception.
        </p>
        <p>
          What can happen at claim time:
        </p>
        <ul>
          <li>The adjuster comes out to inspect a fire claim. They find a tenant on site and see a lease in your file. Carrier rescinds the policy back to inception, returns the premium, denies the claim.</li>
          <li>The carrier pays the claim but rates you at a different (higher) class for renewal, sometimes with a surcharge for the period the rental was undisclosed.</li>
          <li>The carrier non-renews you at the next anniversary because the rental activity is outside their underwriting box.</li>
        </ul>
        <p>
          The fix is to disclose the rental activity at the start, and have
          the agent write the policy on a form that responds to the actual
          use of the property.
        </p>

        <h2>What coverage you actually need</h2>
        <p>
          A complete house hacking insurance program typically includes:
        </p>
        <ul>
          <li><strong>Dwelling coverage</strong> at full replacement cost. The same as any owner-occupied or rental policy.</li>
          <li><strong>Owner-occupant personal property</strong> coverage for your belongings inside the property. Standard on a homeowner form, lower limits on a DP-3 form.</li>
          <li><strong>Landlord liability</strong> for tenant injury and property damage claims. This is the coverage standard homeowner policies often exclude.</li>
          <li><strong>Personal liability</strong> for owner-occupant exposure separate from landlord liability.</li>
          <li><strong>Loss of rents</strong> for the rented portion if a covered loss makes the property uninhabitable.</li>
          <li><strong>Loss of use</strong> for additional living expenses if you, the owner-occupant, are displaced by a covered loss.</li>
          <li><strong>Ordinance and law</strong> coverage for older buildings.</li>
        </ul>
        <p>
          The exact form (homeowner with landlord endorsement vs DP-3 with
          owner-occupant endorsement) varies by carrier. The coverage
          outcomes are what matter, not the form name.
        </p>

        <h2>DP-3 vs homeowner endorsement: which one to use</h2>
        <p>
          For a 2-4 unit building where you live in one unit:
        </p>
        <ul>
          <li>If owner-occupied financing required a homeowner-style policy, a DP-3 with owner-occupant designation is often the cleanest structure.</li>
          <li>Some carriers prefer to write the entire building as a landlord policy and rely on a tenant-style endorsement for your unit. Others want a homeowner policy with explicit rental endorsements for the other units.</li>
          <li>Both can work. The cost and coverage depth are the questions to compare.</li>
        </ul>
        <p>
          For a single family home where you rent a bedroom or basement
          apartment to a tenant:
        </p>
        <ul>
          <li>Most carriers will write a homeowner policy with a "rental to others" or "additional residence rented" endorsement. Premium adjustment is modest.</li>
          <li>If the rental income is significant or the carrier sees the activity as more business than incidental, they may push you to a DP-3.</li>
        </ul>
        <p>
          For a single family home with an ADU (accessory dwelling unit):
        </p>
        <ul>
          <li>Many carriers will write the property as one home with the ADU as part of the dwelling, plus a rental endorsement.</li>
          <li>A few carriers will require the ADU to be insured as a separate dwelling (DP-3) with the main house remaining on a homeowner policy.</li>
        </ul>

        <h2>How lenders treat owner-occupied rentals</h2>
        <p>
          If you used owner-occupied financing (FHA, conventional with
          primary residence pricing, VA), the lender's insurance
          requirements are similar to a standard primary residence loan:
        </p>
        <ul>
          <li>Dwelling coverage at full replacement cost or at least equal to the loan balance.</li>
          <li>Lender named as mortgagee/loss payee with full address and loan number.</li>
          <li>Liability coverage (typically $300K minimum, often $500K).</li>
          <li>Flood insurance if the property is in a FEMA flood zone.</li>
          <li>Wind/hail coverage where applicable.</li>
        </ul>
        <p>
          Most lenders do not specifically require a particular form (HO-3
          vs DP-3 vs hybrid). They require the coverage outcomes. As long
          as the policy meets the dwelling, liability, and lender clauses,
          it satisfies the lender. We send the binder/COI directly to the
          lender for closing.
        </p>

        <h2>The rental income disclosure problem</h2>
        <p>
          When you apply for a homeowner policy, the application asks
          whether you receive rental income from the property. Be honest.
          The carrier checks public records, your tax returns (if shared),
          and (after a claim) the property itself.
        </p>
        <p>
          Disclosing the rental at the start lets the agent place you with
          a carrier that wants the business at the right premium. Hiding
          it leads to the denied claim scenarios above. The premium
          difference is small. The denied claim is not.
        </p>

        <h2>What to do when you move out and rent the whole property</h2>
        <p>
          When the house hack ends and you move out (you bought a new
          primary residence and are converting the original to a full
          rental), your insurance needs to convert too:
        </p>
        <ul>
          <li>Tell your agent at least 30 days before you move out. We rewrite the policy as a full DP-3 effective the day you stop being an owner-occupant.</li>
          <li>Update the lender (your owner-occupied loan terms may change once you no longer occupy the property; check your loan documents).</li>
          <li>Adjust the dwelling limit if needed (rental properties sometimes need different replacement cost calculations).</li>
          <li>Add or adjust loss of rents and tenant turnover coverages.</li>
        </ul>
        <p>
          The transition is usually quick. The cost difference is usually
          modest. The denied claim from forgetting to update the policy is
          not.
        </p>

        <h2>What to send us for a quote</h2>
        <ul>
          <li>Property address, year built, square footage.</li>
          <li>Property type: SFR with rented room, SFR with ADU, duplex/triplex/fourplex with you in one unit.</li>
          <li>Number of tenants and lease type (long-term, short-term, room rental).</li>
          <li>Total annual rental income from the property.</li>
          <li>Whether you used owner-occupied financing.</li>
          <li>Lender details if there is a mortgage.</li>
          <li>Prior 5-year claims history.</li>
        </ul>
        <p>
          Most house hacking quotes turn around the same business day.{" "}
          <Link href="/get-a-quote">Start a quote</Link> or call or text
          541-681-8793.
        </p>

        <h2>Common questions</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </article>

      <CTASection
        heading="Cover the rental side properly."
        sub="A 60-second intake gets us started. We'll structure a policy that responds at claim time."
      />

      <RelatedLinks
        items={[
          {
            href: "/rentals-rehabs",
            title: "1-4 unit rentals",
            desc: "When the property is fully tenanted.",
          },
          {
            href: "/short-term-rentals",
            title: "Short-term rentals",
            desc: "Coverage for Airbnb and VRBO use.",
          },
          {
            href: "/dscr-loan-insurance",
            title: "DSCR loan coverage",
            desc: "Insurance for investment-property financing.",
          },
        ]}
      />
    </>
  );
}
