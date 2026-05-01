import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duplex Insurance: What Landlords Need to Know | Investor Property Insurance",
  description:
    "Insuring a duplex is different from a single-family rental. Here's what coverage you need and why it matters.",
};

export default function DuplexInsurancePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Insurance for a Duplex: What You Need to Know",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "Insuring a duplex is different from a single-family rental. Here's what coverage you need and why it matters.",
        }}
      />
      <PageHero
        eyebrow="Duplex insurance"
        title="Insurance for a Duplex: What You Need to Know"
        sub="A duplex is not a single-family rental. The right policy depends on who lives in each unit."
      />
      <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Duplex Insurance" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          A duplex is not a single-family rental, and it is not a full commercial building. It sits in
          between. That in-between position is exactly where coverage mistakes happen. Here is what
          you need to know before you insure one.
        </p>

        <h2>Why a duplex needs a different policy than a house</h2>
        <p>
          A standard homeowners policy is built for an owner-occupied primary residence. The moment
          you rent out either unit, that policy no longer applies. You are operating an income-producing
          property, which requires landlord insurance.
        </p>
        <p>
          For a duplex where both units are rented, you need a non-owner-occupied landlord policy,
          typically written on a DP-3 form. This covers the building, your liability as the property
          owner, and loss of rents if a covered loss makes one or both units uninhabitable.
        </p>
        <p>
          The policy structure differs from a single-family rental in a few ways. A duplex has shared
          systems, common areas, and two separate living spaces under one roof. Your policy needs to
          account for all of it.
        </p>

        <h2>What changes if you live in one unit</h2>
        <p>
          This is where it gets more complicated. If you occupy one unit and rent the other, you are in
          "house hacking" territory. Some carriers will write this on a modified homeowners policy with
          a rental unit endorsement. Others require a separate landlord policy for the rental side.
        </p>
        <p>
          The important thing: do not assume your homeowners policy covers the rental unit. Call your
          agent and confirm. Most standard homeowners policies exclude properties where one unit is rented
          to a non-family member. If you have the wrong policy in place and a claim happens in the rental
          unit, you may have no coverage at all.
        </p>
        <p>
          If you live in one side and rent the other, ask about a dwelling fire policy that covers the
          rental unit separately, or a homeowners policy that explicitly endorses the rental unit. Get it
          in writing.
        </p>

        <h2>Property coverage for a duplex</h2>
        <p>
          Your building coverage should reflect the full replacement cost of the structure. That means
          what it would cost to rebuild both units from the ground up at today's construction prices,
          not what you paid for the property and not what it would sell for.
        </p>
        <p>
          A DP-3 form covers all risks to the building except those specifically excluded. That includes
          fire, windstorm, water damage from burst pipes, vandalism, and similar losses. What it typically
          excludes: flood, earthquake, and normal wear and tear.
        </p>
        <p>
          Shared systems, including the roof, foundation, shared plumbing, and HVAC that serves both
          units, are all part of the building and covered under your property limit.
        </p>

        <h2>Liability across shared spaces</h2>
        <p>
          Liability coverage pays when someone is injured on the property and you are found negligent.
          On a duplex, the shared spaces are the biggest exposure. A visitor trips on a shared walkway.
          A tenant falls on shared stairs. A child is injured in a shared yard.
        </p>
        <p>
          Landlord liability coverage responds to these claims, paying legal defense costs and any
          judgment against you up to your policy limit. Most landlords carry $300,000 to $500,000 in
          liability. If you own multiple properties, consider adding an umbrella policy on top.
        </p>
        <p>
          Your tenants' liability is their own problem. Their renters insurance covers them. Yours covers
          you as the property owner.
        </p>

        <h2>Cost factors for duplex insurance</h2>
        <p>
          Expect to pay 15% to 30% more than you would for a comparable single-family rental. The
          additional premium reflects the larger structure, higher liability exposure from two occupied
          units, and the shared common areas.
        </p>
        <p>
          What moves the price up: older construction, deferred maintenance, a wood-burning stove, a
          prior claims history, or a location in a wildfire or flood zone. What brings it down: newer
          roof, updated electrical and plumbing, a clean claims record, and placement with a carrier
          that actively wants rental property business.
        </p>
        <p>
          A realistic range for a duplex in the western US is $1,200 to $3,500 per year, depending on
          the property value, location, and your specific risk profile.
        </p>

        <h2>Bottom line</h2>
        <p>
          A duplex needs intentional coverage. Whether you occupy one unit or rent both, the default
          homeowners policy is not enough. The right policy covers the full building, your liability
          across shared spaces, and your rental income if a loss forces a unit offline.
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
