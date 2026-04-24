import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata = {
  title: "Rental Property Insurance for Real Estate Investors, 1-4 Units",
  description:
    "Insurance for single family, 2-4 unit, vacant, and rehab properties. DP-3 forms with loss of rents, vacancy, and renovation coverage. Western US.",
};

export default function RentalsRehabsPage() {
  return (
    <>
      <PageHero
        eyebrow="1-4 unit residential"
        title="Rental Property Insurance for Real Estate Investors, 1-4 Units."
        sub="Coverage for single family rentals, duplex, triplex, fourplex, vacant homes between tenants, and properties under renovation. Built around how investors actually use the property."
      />
      <Breadcrumbs items={[{ label: "Rentals & Rehabs" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          For 1-4 unit residential investment property, the right form is
          almost always a DP-3 (Dwelling Property 3) with landlord liability,
          loss of rents, and the right replacement cost limit. Not a
          homeowner policy.
        </p>
        <p>
          The structure of a good 1-4 unit investor program looks the same
          across most properties: the right form, a carrier that wants the
          business, and a couple of endorsements that solve the problems
          investors actually run into. Below is what we put on most of these
          policies and why.
        </p>

        <h2>What makes investor coverage different from homeowner</h2>
        <p>
          A homeowner policy (HO-3 or HO-5) is built for an owner occupied
          home. It assumes you live there. The moment you rent the property
          out, you have changed how the property is being used, and a
          homeowner policy can deny the claim for material misrepresentation
          or failure to disclose a change in occupancy.
        </p>
        <p>
          An investor form (DP-3) is built for the way you actually use the
          property: rented to a tenant, you as the named insured and
          landlord, the tenant carrying their own renters policy for their
          belongings.
        </p>
        <p>
          A DP-3 typically includes:
        </p>
        <ul>
          <li><strong>Dwelling and other structures</strong> at full replacement cost.</li>
          <li><strong>Personal property</strong> for items you keep on site for tenant use (appliances, owner provided furnishings).</li>
          <li><strong>Loss of rents</strong> in place of the homeowner "loss of use."</li>
          <li><strong>Landlord liability</strong> for premises injuries and property damage to others.</li>
          <li><strong>Open peril coverage</strong> on the dwelling, which means damage from any cause not specifically excluded.</li>
        </ul>

        <h2>DP-3 vs homeowner policy</h2>
        <p>
          The differences look small on paper. They are large at claim time.
        </p>
        <ul>
          <li>Homeowner liability covers the policyholder's personal liability anywhere. DP-3 liability covers landlord exposure on the insured premises.</li>
          <li>Homeowner contents coverage is broad and follows the insured. DP-3 contents only covers items you keep on the property for tenant use.</li>
          <li>Homeowner "loss of use" pays for your additional living expenses if you can't live in the home. DP-3 "loss of rents" pays the rental income you would have collected during the repair period.</li>
          <li>Homeowner policies have occupancy conditions that exclude rental use. DP-3 expects rental use.</li>
        </ul>

        <h2>Loss of rents coverage</h2>
        <p>
          Loss of rents pays the rent you would have collected while the
          property is being repaired after a covered loss. If a fire damages
          your single family rental and the property is uninhabitable for
          six months, loss of rents pays for those six months of rent.
        </p>
        <p>
          Most DP-3 policies offer 12 months of loss of rents as a standard
          option. For larger properties or markets with slow contractors, 18
          or 24 month limits are worth the small extra premium. If you carry
          a mortgage, your lender often requires loss of rents.
        </p>

        <h2>Vacancy coverage and the vacancy clause</h2>
        <p>
          Most landlord policies have a vacancy clause that limits or
          eliminates coverage for vandalism, theft, water damage, broken
          glass, and certain other perils once the property has been vacant
          for 30 to 60 days (carrier specific).
        </p>
        <p>
          When a property is between tenants and the gap is going to be
          longer than the vacancy threshold:
        </p>
        <ul>
          <li>For shorter gaps: a <strong>vacancy permit endorsement</strong> keeps standard coverage in place during the vacant period for a small additional premium.</li>
          <li>For longer gaps or properties undergoing renovation: a <strong>vacant property form</strong> (typically a DP-1 dwelling form with vacancy and rehab coverage) is the right structure.</li>
        </ul>
        <p>
          Tell us before the property goes vacant. The premium adjustment is
          modest. The denied claim if something happens during an unreported
          vacancy is not.
        </p>

        <h2>Rehab and renovation coverage</h2>
        <p>
          For active renovation, the standard DP-3 may not respond well at
          claim time. Two paths depending on the scope:
        </p>
        <ul>
          <li><strong>Cosmetic rehab</strong> (paint, flooring, kitchen and bath updates, no structural change): we add a renovation endorsement to the existing landlord form, and adjust the limits if the after-renovation value will be higher.</li>
          <li><strong>Major or gut rehab</strong> (walls down, additions, structural change): we move you to a builders risk policy for the construction period, then transition back to a permanent landlord policy at completion.</li>
        </ul>

        <h2>Between-tenant gaps</h2>
        <p>
          Gaps between tenants are common and usually short. A few specific
          things to watch:
        </p>
        <ul>
          <li>Continue to pay the policy premium during the gap. Letting the policy lapse to "save money" creates a bigger problem at the next renewal.</li>
          <li>Walk the property at least weekly during the gap. Carriers expect reasonable inspection of vacant property.</li>
          <li>If the gap is going to exceed 30 days, call us about a vacancy permit.</li>
          <li>Update the new tenant's information on the policy if your carrier requires named tenant scheduling (some do, most don't).</li>
        </ul>

        <h2>Carriers that specialize in this</h2>
        <p>
          For 1-4 unit residential investor business, we work across a deep
          panel: BHHC, Hartford, Openly, Liberty Mutual, Safeco, Travelers,
          Obie, Steadily, REInsurePro, plus E&S markets for older or
          higher-risk properties. The right carrier for you depends on:
        </p>
        <ul>
          <li>Property age and condition.</li>
          <li>Roof age (a recurring underwriting factor).</li>
          <li>Location (wildfire, wind, hail exposure).</li>
          <li>Prior claims.</li>
          <li>Whether the property is currently occupied, vacant, or under rehab.</li>
        </ul>

        <h2>What to send us for a quote</h2>
        <p>
          Have ready: address, year built, square footage, construction type
          (frame or masonry), roof age, occupancy (rented, vacant, or rehab),
          your estimated replacement cost, prior claims history (last 5
          years), and the lender details if there is a mortgage.
        </p>
        <p>
          Most quotes turn around the same business day. Call or text{" "}
          <a href="tel:+15416818793">541-681-8793</a> or{" "}
          <Link href="/get-a-quote">start a quote online</Link>.
        </p>
      </article>

      <CTASection
        heading="Get the right form on your rental."
        sub="A 60-second intake gets us started. We'll come back with options."
      />

      <RelatedLinks
        items={[
          {
            href: "/short-term-rentals",
            title: "Short-term rentals",
            desc: "Coverage for Airbnb and VRBO properties.",
          },
          {
            href: "/how-much-does-real-estate-investor-insurance-cost",
            title: "Cost breakdown",
            desc: "Real ranges by property type.",
          },
          {
            href: "/landlord-insurance-vs-investor-insurance",
            title: "Landlord vs investor insurance",
            desc: "Which one fits your situation.",
          },
        ]}
      />
    </>
  );
}
