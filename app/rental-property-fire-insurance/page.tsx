import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rental Property Fire Insurance | Investor Property Insurance",
  description:
    "Fire is one of the most common covered losses in landlord insurance. Here's what your policy may pay for and what happens next.",
};

export default function RentalPropertyFireInsurancePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "What Happens If My Rental Property Burns Down?",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "Fire is one of the most common covered losses in landlord insurance. Here's what your policy may pay for and what happens next.",
        }}
      />
      <PageHero
        eyebrow="Rental property fire insurance"
        title="What Happens If My Rental Property Burns Down?"
        sub="Fire is one of the most common covered losses. Here's what your policy may pay for and what the process looks like."
      />
      <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Rental Property Fire Insurance" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          Fire is one of the top covered losses under any landlord policy. If a fire damages or destroys
          your rental property, your landlord insurance is designed to respond. Here is what it may cover,
          what it does not cover, and what happens from the day of the fire through the end of repairs.
        </p>

        <h2>What building coverage pays after a fire</h2>
        <p>
          Your landlord policy covers the structure. After a fire, the building coverage pays to repair
          or rebuild the damaged portions of the property up to your coverage limit.
        </p>
        <p>
          If you carry replacement cost coverage, the policy pays what it costs to rebuild at today's
          prices, without deducting for depreciation. If you carry actual cash value coverage, the policy
          pays replacement cost minus depreciation. For most landlords, replacement cost is the right
          choice. Actual cash value can leave a significant gap when materials and labor are expensive.
        </p>
        <p>
          The coverage applies to the structure itself, including walls, roof, floors, built-in fixtures,
          plumbing, electrical systems, and HVAC. Attached garages and detached structures on the same
          lot may be covered depending on how the policy is written.
        </p>

        <h2>What it does not pay</h2>
        <p>
          Tenant belongings are not covered under your landlord policy. If a tenant loses furniture,
          clothing, electronics, or other personal property in a fire, that is their loss. Renters
          insurance covers tenant belongings. Your policy covers the building.
        </p>
        <p>
          Your personal property stored on the premises is generally not covered under a standard
          landlord policy unless you have specifically scheduled it. If you store tools, appliances,
          or other items at the rental, ask your agent about coverage for personal property of the insured.
        </p>
        <p>
          Land is not covered. You are insuring the improvements, not the dirt underneath them.
        </p>

        <h2>Loss of rents during repairs</h2>
        <p>
          If the fire makes the property uninhabitable, your loss of rents coverage may pay the rent
          you would have collected during the repair period. This is a separate component of your
          landlord policy and is one of the most valuable coverages you have.
        </p>
        <p>
          The coverage period begins when the property becomes uninhabitable and runs until repairs are
          complete or the coverage limit is exhausted, whichever comes first. A fire that requires a
          full rebuild can take 12 to 18 months. Make sure your loss of rents limit reflects that.
        </p>

        <h2>The claim process in plain terms</h2>
        <p>
          Report the claim to your carrier immediately. Do not wait. Most policies require prompt
          notification, and delays can complicate the claim.
        </p>
        <p>
          The carrier will assign an adjuster. The adjuster inspects the damage, reviews the policy,
          and determines the scope of covered repairs. You will receive a written estimate of what the
          carrier will pay.
        </p>
        <p>
          You have the right to get your own repair estimates and, if needed, to dispute the carrier's
          scope or pricing. Having a public adjuster or contractor advocate is common on large fire claims.
        </p>
        <p>
          Once the scope and cost are agreed upon, the carrier issues payment, typically minus your
          deductible. On a replacement cost policy, you may receive an initial payment based on actual
          cash value, with the remaining replacement cost paid after repairs are complete.
        </p>

        <h2>Smoke damage</h2>
        <p>
          Smoke damage from a fire is covered under the same claim as the fire itself. Smoke can
          penetrate walls, ceilings, and HVAC systems extensively, sometimes requiring professional
          remediation beyond basic cleanup.
        </p>
        <p>
          Document all smoke damage in detail. Photograph every room and every surface. Do not allow
          cleanup to begin before the adjuster has inspected, unless emergency mitigation is needed to
          prevent further damage.
        </p>

        <h2>Arson by a tenant</h2>
        <p>
          Intentional fire set by a tenant is covered as vandalism or malicious damage under most
          landlord policies. The carrier may subrogate against the tenant after paying the claim.
          This is a complex area of coverage and may depend on the specific policy language.
        </p>
        <p>
          If you suspect the fire was intentionally set, report it to the fire marshal and your carrier
          immediately. Do not disturb the scene until investigators have cleared it.
        </p>

        <h2>Bottom line</h2>
        <p>
          Fire coverage is core to any landlord policy. The key variables are your coverage limit
          (replacement cost versus actual cash value), your deductible, and whether your loss of rents
          limit is adequate to carry you through a lengthy repair.
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
