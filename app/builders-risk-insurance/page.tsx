import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata = {
  title: "Builders Risk Insurance for Real Estate Investors | Investor Property Insurance",
  description:
    "Builders risk insurance covers your property during renovation, rehab, or new construction. Here's what it covers, when you need it, and what to watch for.",
};

export default function BuildersRiskPage() {
  return (
    <>
      <PageHero
        eyebrow="renovation and new construction"
        title="Builders Risk Insurance for Renovation and Rehab Projects."
        sub="Coverage for properties under renovation, rehab, or new construction. Designed for investors who are actively improving property before renting or selling."
      />
      <Breadcrumbs items={[{ label: "Builders Risk Insurance" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          Builders risk insurance covers a property while it is under renovation,
          rehab, or new construction. If you own investment property and you are
          improving it, your standard landlord policy may not cover the work in
          progress.
        </p>

        <h2>Why standard landlord policies fall short during renovation</h2>
        <p>
          Standard landlord and dwelling policies are written for occupied or
          stabilized property. When you gut a kitchen, replace a roof, or do a
          full rehab, the risk profile changes. Some carriers reduce or suspend
          coverage during heavy renovation. Vacant property clauses can also kick
          in if the property sits empty while work is being done.
        </p>
        <p>
          If a fire starts during a renovation and your policy has a vacancy or
          renovation exclusion, you may be facing the loss without coverage.
        </p>

        <h2>What builders risk insurance covers</h2>
        <p>
          Builders risk is a specialized policy designed for properties under
          construction or renovation. It typically covers:
        </p>
        <ul>
          <li>The structure itself during the work</li>
          <li>Materials stored on site waiting to be installed</li>
          <li>Damage from fire, wind, theft, vandalism, and certain weather events</li>
          <li>Sometimes: tools and equipment (check the policy)</li>
        </ul>
        <p>What it typically does not cover:</p>
        <ul>
          <li>The contractor's tools and equipment (they carry their own)</li>
          <li>Faulty workmanship itself</li>
          <li>Flood or earthquake (requires separate coverage)</li>
          <li>
            Completed sections after final occupancy without conversion to a
            permanent policy
          </li>
        </ul>

        <h2>When real estate investors need builders risk</h2>
        <p>You likely need builders risk if:</p>
        <ul>
          <li>You are doing a full rehab or gut renovation</li>
          <li>
            The property will be vacant for more than 30 to 60 days during the
            project
          </li>
          <li>You are doing a value-add renovation before renting or selling</li>
          <li>Your lender requires coverage during construction</li>
          <li>You purchased a distressed property and are repositioning it</li>
        </ul>
        <p>You may not need a separate builders risk policy if:</p>
        <ul>
          <li>
            The renovation is cosmetic and the property stays occupied
          </li>
          <li>
            Your existing landlord policy covers light renovation without
            exclusion (confirm with your agent)
          </li>
          <li>
            The project is small enough that your carrier will endorse the
            existing policy
          </li>
        </ul>

        <h2>How long does builders risk coverage last</h2>
        <p>
          Builders risk policies are typically written for 3, 6, or 12 months.
          They can often be extended if the project runs long. When the renovation
          is complete and the property is ready to occupy or rent, you convert to a
          permanent landlord or dwelling policy.
        </p>
        <p>
          The transition matters. Do not let a builders risk policy lapse without
          having a permanent policy in place. There can be a coverage gap at the
          handoff if it is not handled correctly.
        </p>

        <h2>What affects the cost</h2>
        <p>Builders risk premiums depend on:</p>
        <ul>
          <li>
            The completed value of the project (what the property will be worth
            when done)
          </li>
          <li>The scope of work (cosmetic vs structural)</li>
          <li>Project duration</li>
          <li>Location and state</li>
          <li>Construction type</li>
          <li>Contractor experience and licensing</li>
        </ul>

        <h2>Lender requirements during renovation</h2>
        <p>
          If you have a loan on the property, your lender will likely require
          evidence of coverage during the renovation. Some lenders require builders
          risk specifically. Others will accept a landlord policy with a renovation
          endorsement. Confirm what your lender needs before the project starts.
        </p>

        <h2>The transition to a permanent policy</h2>
        <p>
          When the project is done, you need a new policy in place before
          occupancy or tenant placement. Builders risk does not cover an occupied
          rental. The permanent policy should be ordered before the project ends so
          there is no gap.
        </p>
        <p>
          Have a rehab or renovation project coming up?{" "}
          <Link href="/get-a-quote">Start here.</Link>
        </p>
      </article>

      <CTASection
        heading="Have a rehab or renovation project coming up?"
        sub="A 60-second intake gets us started. We'll come back with options."
      />

      <RelatedLinks
        items={[
          {
            href: "/rentals-rehabs",
            title: "Rentals and rehabs",
            desc: "DP-3 coverage for 1-4 unit investment properties.",
          },
          {
            href: "/vacant-rental-property-insurance",
            title: "Vacant property insurance",
            desc: "Coverage for properties sitting empty between tenants or projects.",
          },
          {
            href: "/llc-rental-property-insurance",
            title: "LLC rental property insurance",
            desc: "What changes when the property is held in an LLC.",
          },
          {
            href: "/rental-property-insurance",
            title: "Rental property insurance",
            desc: "The full picture on investor property coverage.",
          },
        ]}
      />
    </>
  );
}
