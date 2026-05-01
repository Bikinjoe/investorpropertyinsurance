import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oregon Landlord Insurance | Investor Property Insurance",
  description:
    "Oregon landlords face specific risks including wildfire, earthquake, and coastal weather. Here's what to know about insuring rental property in Oregon.",
};

export default function OregonLandlordInsurancePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Landlord Insurance for Oregon Real Estate Investors",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "Oregon landlords face specific risks including wildfire, earthquake, and coastal weather. Here's what to know about insuring rental property in Oregon.",
        }}
      />
      <PageHero
        eyebrow="Oregon landlord insurance"
        title="Landlord Insurance for Oregon Real Estate Investors"
        sub="Wildfire, earthquake, and coastal weather create real coverage considerations for Oregon landlords. Here's what you need to know."
      />
      <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Oregon Landlord Insurance" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          Oregon has a diverse landscape and a diverse risk profile to match. Landlords in the Willamette
          Valley face different insurance challenges than landlords in eastern Oregon, the Cascades foothills,
          or the coast. Here is what drives the insurance conversation for Oregon rental property owners.
        </p>

        <h2>Wildfire risk in Oregon</h2>
        <p>
          Wildfire is the most significant emerging insurance issue for Oregon landlords outside the
          urban core. Eastern Oregon, the Cascade foothills, the Rogue Valley, and parts of southern
          Oregon carry elevated wildfire risk that has increasingly affected the insurance market.
        </p>
        <p>
          Some carriers have pulled back from high-risk wildfire zones or have added significant
          surcharges for properties in those areas. If your rental property is in a wildfire-prone
          location, you may have fewer carrier options and pay more for coverage than landlords in
          lower-risk areas.
        </p>
        <p>
          If your property is in a wildfire zone, ask your agent specifically about wildfire exclusions
          or sublimits. Some policies cover fire generically but exclude or limit wildfire separately.
          Confirm the coverage applies to wildland-urban interface fires before you buy.
        </p>
        <p>
          Properties with defensible space, Class A roofing materials, and fire-resistant exterior
          siding are in a better position with carriers. If your property has these features, mention
          them when you apply.
        </p>

        <h2>Earthquake risk: the Cascadia subduction zone</h2>
        <p>
          Oregon sits above the Cascadia subduction zone, one of the most significant earthquake fault
          systems in North America. A major Cascadia event would affect the entire Pacific Northwest.
          Portland, Eugene, Salem, Medford, and communities along the coast are all in the potential
          impact zone.
        </p>
        <p>
          Standard landlord policies do not cover earthquake. Earthquake is always a separate policy or
          separate endorsement. If your rental property is in Oregon and you do not have earthquake
          coverage, a major seismic event could result in a total loss with no insurance payment.
        </p>
        <p>
          Earthquake coverage is available in Oregon. It is not cheap, particularly for older unreinforced
          masonry buildings. But for landlords who own their rental properties free and clear or have
          significant equity, the cost is worth considering. Discuss it with your agent.
        </p>

        <h2>Coastal weather</h2>
        <p>
          Oregon's coast is subject to strong winter storms, high winds, and significant rainfall.
          Coastal rental properties face elevated exposure to wind damage, water intrusion, and the
          accelerated wear that comes with a marine environment.
        </p>
        <p>
          Most standard policies cover wind damage. Water intrusion from storms is more complicated.
          Sudden water damage from a storm is typically covered. Gradual moisture intrusion, dry rot,
          and mold resulting from deferred maintenance are not.
        </p>
        <p>
          If your property is in a FEMA designated flood zone on the Oregon coast or along a river
          corridor, you may need a separate flood policy. Standard landlord policies do not cover flood.
        </p>

        <h2>Oregon landlord-tenant law: the insurance implications</h2>
        <p>
          Oregon has detailed landlord-tenant laws that create specific obligations for property
          owners. From an insurance perspective, two things matter most.
        </p>
        <p>
          First, Oregon requires that rental property meet habitability standards. A property that fails
          habitability standards creates liability exposure. Your landlord liability coverage may respond
          to claims arising from habitability failures, but only up to your policy limit and only if
          you are found negligent. Maintaining the property properly is still the primary obligation.
        </p>
        <p>
          Second, Oregon limits how security deposits can be used. Deposits cannot be used to cover
          normal wear and tear. This means insurance becomes more relevant for tenant damage that exceeds
          normal use, since the deposit may not fully cover it.
        </p>
        <p>
          These are insurance implications, not legal advice. For specific questions about your obligations
          under Oregon law, consult an attorney familiar with Oregon landlord-tenant statutes.
        </p>

        <h2>Why a local agent matters in Oregon</h2>
        <p>
          Oregon's insurance market is not uniform. Wildfire zones have different carrier options than
          Portland suburbs. Coastal properties require different conversations than valley properties.
          An agent who places Oregon rental property business regularly knows which carriers are
          writing in your area and what they require.
        </p>
        <p>
          Vantage Point Risk Partners is based in Oregon and licensed across the western US. We place
          landlord and investor property insurance for Oregon owners regularly. We know the market.
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
