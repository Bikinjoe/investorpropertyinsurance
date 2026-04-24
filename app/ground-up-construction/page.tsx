import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Builders Risk and Construction Insurance for Real Estate Investors",
  description:
    "Builders risk for new builds, major renovations, and ground-up construction. Soft costs, materials on site, and the transition to a permanent policy at completion.",
};

export default function ConstructionPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to insure a ground-up construction or major renovation",
          step: [
            { "@type": "HowToStep", name: "Send the project details", text: "Address, project type, scope, total construction value, expected start and completion dates." },
            { "@type": "HowToStep", name: "We bind builders risk", text: "Coverage on the structure, materials on site, and soft costs through the construction period." },
            { "@type": "HowToStep", name: "Add general liability", text: "Either through your builder or as a separate policy depending on the project structure." },
            { "@type": "HowToStep", name: "Transition to permanent coverage", text: "When the project is complete and ready for occupancy, builders risk ends and a permanent landlord, commercial, or owner occupied policy takes over." },
          ],
        }}
      />
      <PageHero
        eyebrow="New builds · major renovations"
        title="Builders Risk and Construction Insurance for Real Estate Investors."
        sub="The right form for a property under construction is not your homeowner or landlord policy. It is a builders risk policy designed for the construction period, plus a clean transition to permanent coverage at completion."
      />
      <Breadcrumbs items={[{ label: "Ground-Up Construction" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          A homeowner or landlord policy is designed for a completed,
          occupied or readily-occupiable structure. During active
          construction, that policy may not respond at claim time because
          the property is under "course of construction" exposure.
        </p>
        <p>
          Builders risk fills the gap. It covers the structure during the
          construction period, the materials on site, and certain "soft
          costs" if a covered loss delays the project. When the project is
          complete and ready for occupancy, builders risk ends and a
          permanent policy takes over.
        </p>

        <h2>Builders risk vs homeowner during construction</h2>
        <p>
          The core difference: builders risk underwrites the project, not
          the structure as it sits. The carrier expects framing exposure,
          materials on site, contractor activity, and a property that is
          not yet inspected for occupancy.
        </p>
        <p>
          A typical homeowner policy will deny a claim if the carrier
          discovers the property was under significant construction at the
          time of loss. The policy was written for an existing structure,
          and the construction changes the risk profile in ways the carrier
          did not price for.
        </p>

        <h2>Soft costs coverage</h2>
        <p>
          "Soft costs" are non-construction expenses you incur when a
          covered loss delays the project. They typically include:
        </p>
        <ul>
          <li>Architect and engineering fees for revised plans.</li>
          <li>Permit and inspection fees.</li>
          <li>Additional financing and interest costs.</li>
          <li>Real estate taxes during the extended construction period.</li>
          <li>Legal and accounting fees tied to the delay.</li>
        </ul>
        <p>
          Standard builders risk often includes a small soft cost limit.
          For larger or longer projects, increasing the limit is usually
          worth the small extra premium.
        </p>

        <h2>What happens if the project is delayed</h2>
        <p>
          Two scenarios:
        </p>
        <p>
          <strong>Scenario 1: Delay caused by a covered loss.</strong> The
          project takes longer because of a fire, water damage, theft of
          materials, or other covered event. Builders risk pays soft costs
          and (with the right endorsement) extended business income for the
          delay period.
        </p>
        <p>
          <strong>Scenario 2: Delay caused by something else.</strong> The
          project takes longer because of contractor scheduling, supply
          chain, permitting, or weather (without a specific covered loss).
          Standard builders risk does not pay for these delays. Some forms
          offer "delay in opening" or "delay in completion" coverage as a
          separate endorsement.
        </p>
        <p>
          Either way, plan for the project to take longer than the policy
          term. Most builders risk policies are written for 6, 9, or 12
          months. If the project runs long, we extend the policy. Plan for
          this at the start so you don't get caught with an expiring policy
          and an unfinished project.
        </p>

        <h2>Existing structure coverage for renovations</h2>
        <p>
          For renovations to an existing building (as opposed to ground-up
          new construction), there is an extra coverage question: who covers
          the existing structure during the renovation?
        </p>
        <p>
          Two common approaches:
        </p>
        <ul>
          <li><strong>Builders risk includes the existing structure.</strong> Some forms can be written to cover the entire building, both the existing structure and the new work. Often the cleanest approach for major renovations.</li>
          <li><strong>Builders risk on the new work only, with a vacant property form on the existing structure.</strong> Used when the existing building has separate value or when the renovation is limited in scope.</li>
        </ul>
        <p>
          Talk to us before construction starts so we can structure the
          right combination.
        </p>

        <h2>When builders risk ends and landlord (or commercial) policy begins</h2>
        <p>
          Builders risk is a temporary policy. It ends when one of:
        </p>
        <ul>
          <li>The project is complete and ready for occupancy.</li>
          <li>The certificate of occupancy is issued.</li>
          <li>The property is sold to a new owner.</li>
          <li>The policy term ends (with no extension).</li>
        </ul>
        <p>
          At that transition point, you need a permanent policy in place
          before the builders risk ends. We coordinate the transition so
          there is no coverage gap.
        </p>
        <p>
          For an investor, the permanent policy is typically:
        </p>
        <ul>
          <li>A DP-3 landlord policy for 1-4 unit residential rentals (see <Link href="/rentals-rehabs">rentals page</Link>).</li>
          <li>A commercial package for 5+ unit multifamily or commercial property (see <Link href="/multifamily">multifamily</Link> and <Link href="/commercial-property">commercial</Link>).</li>
          <li>An STR policy if the property will be operated as a short-term rental (see <Link href="/short-term-rentals">STR page</Link>).</li>
          <li>A homeowner policy if the property will be your primary residence.</li>
        </ul>

        <h2>What we need to quote builders risk</h2>
        <ul>
          <li>Property address and project description (new build, renovation, addition).</li>
          <li>Total construction value (sum of materials and labor).</li>
          <li>Expected start and completion dates.</li>
          <li>Builder or general contractor information.</li>
          <li>Whether you or the GC carry general liability and workers comp.</li>
          <li>Any soft cost concerns (lender requirements, sale date, lease commitments at completion).</li>
        </ul>
        <p>
          Send the details to us by phone, text, or email and we will
          structure builders risk plus the transition to permanent coverage.
        </p>
      </article>

      <CTASection
        heading="Insure the project right from day one."
        sub="Builders risk plus a clean transition to permanent coverage. We handle both."
      />

      <RelatedLinks
        items={[
          {
            href: "/rentals-rehabs",
            title: "Rentals and rehabs",
            desc: "Permanent coverage for the finished property.",
          },
          {
            href: "/multifamily",
            title: "Multifamily",
            desc: "Coverage for 5+ unit completed apartments.",
          },
          {
            href: "/commercial-property",
            title: "Commercial property",
            desc: "Permanent coverage for finished commercial buildings.",
          },
        ]}
      />
    </>
  );
}
