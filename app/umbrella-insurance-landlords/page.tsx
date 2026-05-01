import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umbrella Insurance for Landlords | Investor Property Insurance",
  description:
    "Umbrella insurance adds $1 million or more in liability coverage above your standard policy. Here's when landlords need it.",
};

export default function UmbrellaInsuranceLandlordsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Umbrella Insurance for Landlords: Is It Worth It?",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "Umbrella insurance adds $1 million or more in liability coverage above your standard policy. Here's when landlords need it.",
        }}
      />
      <PageHero
        eyebrow="Umbrella insurance for landlords"
        title="Umbrella Insurance for Landlords: Is It Worth It?"
        sub="For most landlords with multiple properties, the answer is yes. Here's why."
      />
      <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Umbrella Insurance for Landlords" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          A standard landlord policy includes liability coverage. For a single rental property, that
          coverage may be enough. Once you own multiple properties, have significant assets, or simply
          want protection against a large judgment, an umbrella policy is worth the cost.
        </p>

        <h2>What umbrella insurance does</h2>
        <p>
          An umbrella policy adds a layer of liability coverage on top of your existing policies.
          It does not replace the liability on your landlord policy. It activates after that
          underlying coverage is exhausted.
        </p>
        <p>
          Example: You are sued after a tenant is seriously injured at your rental property. Your
          landlord policy has $500,000 in liability coverage. The judgment comes back at $800,000.
          Without an umbrella, you owe $300,000 out of pocket. With a $1 million umbrella, the
          umbrella policy covers the $300,000 gap.
        </p>
        <p>
          Umbrella policies typically require you to carry minimum underlying limits on each policy
          they sit above. Your landlord policy may need to carry $300,000 or $500,000 before the
          umbrella attaches.
        </p>

        <h2>When it pays</h2>
        <p>
          The umbrella pays after the underlying policy limit is exhausted. If a claim does not
          exceed your landlord policy limit, the umbrella never touches it. The umbrella is there
          for large, serious claims.
        </p>
        <p>
          Covered claims include bodily injury, property damage, personal injury (libel, slander),
          and legal defense costs above your underlying limits. The umbrella follows the same basic
          liability structure as your landlord policy but with a much higher ceiling.
        </p>

        <h2>Why landlords with multiple properties need it</h2>
        <p>
          Each property you own is a separate liability exposure. A single rental property might
          generate one serious injury claim in your ownership lifetime. Three properties triple
          that exposure. Ten properties multiply it further.
        </p>
        <p>
          More properties also means more assets to protect. If a judgment exceeds your policy
          limits, your other properties, bank accounts, and personal assets may be at risk. An
          umbrella creates a buffer between a bad lawsuit and your net worth.
        </p>
        <p>
          Holding properties in LLCs provides some protection, but LLCs are not bulletproof.
          An umbrella is a separate layer of defense.
        </p>

        <h2>Cost</h2>
        <p>
          A $1 million personal umbrella policy typically costs $200 to $500 per year. Commercial
          umbrella or excess liability policies for landlords with larger portfolios run higher,
          often $500 to $1,500 per year for $1 million in coverage.
        </p>
        <p>
          That cost per million is low relative to the exposure it covers. A single slip-and-fall
          lawsuit with a serious injury can easily reach or exceed $1 million in medical costs,
          lost wages, pain and suffering, and legal fees.
        </p>
        <p>
          If you own multiple rentals or have significant personal assets, paying $400 per year for
          $1 million in additional protection is one of the better deals in the insurance market.
        </p>

        <h2>What it does not cover</h2>
        <p>
          Umbrella policies do not cover property damage to your buildings. They are liability-only
          coverage. Your building, your rental income, and your personal property are covered under
          your landlord policy, not the umbrella.
        </p>
        <p>
          They also do not cover intentional acts, criminal activity, or business liability in some
          cases. Read the exclusions on any umbrella policy before you buy.
        </p>
        <p>
          Commercial umbrella policies (for investment properties) may have different exclusions
          than personal umbrella policies. Make sure the policy is designed for rental property
          ownership, not just personal use.
        </p>

        <h2>Bottom line</h2>
        <p>
          For a landlord with one property and modest assets, a strong landlord policy may be
          sufficient. For anyone with multiple properties, an umbrella is worth the cost. The
          premium is low relative to the coverage. The coverage matters most when something
          goes seriously wrong.
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
