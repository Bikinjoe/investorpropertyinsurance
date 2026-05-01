import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rental Income Insurance | Investor Property Insurance",
  description:
    "Insurance can replace lost rent if your property is uninhabitable after a covered loss. Here's how it works and what it does not cover.",
};

export default function RentalIncomeInsurancePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Rental Income Insurance: What Covers You When Tenants Can't Pay",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "Insurance can replace lost rent if your property is uninhabitable after a covered loss. Here's how it works and what it does not cover.",
        }}
      />
      <PageHero
        eyebrow="Rental income insurance"
        title="Rental Income Insurance: What Covers You When Tenants Can't Pay"
        sub="Loss of rents coverage replaces income after a covered loss. It does not replace income when a tenant stops paying."
      />
      <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Rental Income Insurance" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          Loss of rents coverage is one of the most misunderstood parts of a landlord policy. Landlords
          expect it to cover any situation where rent is not coming in. The reality is narrower than that.
          Here is what it actually covers, what triggers it, and what it will not touch.
        </p>

        <h2>What loss of rents coverage actually is</h2>
        <p>
          Loss of rents is a coverage component built into most landlord policies. When a covered loss
          makes your rental property uninhabitable, this coverage replaces the rent you would have
          collected while repairs are underway.
        </p>
        <p>
          It is not a separate policy. It is part of the landlord policy you already have. The coverage
          limit is typically set as a percentage of your dwelling coverage, often 20% to 30%, or as a
          fixed dollar amount per month.
        </p>
        <p>
          Example: A fire damages your rental. The property is uninhabitable for six months during repairs.
          Loss of rents coverage may pay you $1,500 per month for those six months, replacing the income
          you lost while the unit was being repaired.
        </p>

        <h2>What triggers it</h2>
        <p>
          The trigger is specific: the property must be uninhabitable due to a covered loss.
        </p>
        <p>
          Covered losses are events the policy insures against. On a DP-3 policy, that includes fire,
          windstorm, hail, lightning, explosion, smoke, vandalism, and water damage from burst pipes or
          appliance failures. If the property is damaged by one of those perils and the damage is severe
          enough that the tenant cannot legally occupy the unit, loss of rents kicks in.
        </p>
        <p>
          The coverage period runs from the date of the covered loss until repairs are complete, up to
          the policy limit. Some policies cap coverage at 12 months, others at 24.
        </p>

        <h2>What does NOT trigger it</h2>
        <p>
          This is the part most landlords do not fully understand before they file a claim.
        </p>
        <p>
          Tenant non-payment does not trigger loss of rents coverage. If your tenant stops paying rent,
          loses their job, or simply walks away, that is not an insurance event. No policy covers this.
          It is a tenant risk, and it is why security deposits, credit screening, and lease terms exist.
        </p>
        <p>
          Eviction does not trigger loss of rents coverage. If you are in the process of evicting a
          non-paying tenant and the unit sits vacant during the process, that lost income is not covered.
        </p>
        <p>
          Vacancy does not trigger loss of rents coverage. If the property is vacant between tenants and
          you are not collecting rent, that is not a covered event.
        </p>
        <p>
          Flood and earthquake are excluded from standard policies. If a flood forces your tenant out and
          you do not have a separate flood policy, loss of rents coverage will not respond.
        </p>

        <h2>How much to carry</h2>
        <p>
          Carry enough to cover at least 12 months of gross rent. Most repairs take three to nine months,
          but permits, contractor availability, and supply chain issues can stretch that timeline. Carrying
          a limit that covers 12 months protects you if the repair process drags.
        </p>
        <p>
          If your property rents for $2,000 per month, you want at least $24,000 in loss of rents coverage.
          Check your current policy to confirm your limit and whether it is adequate.
        </p>

        <h2>How long it pays</h2>
        <p>
          Coverage pays for the period of restoration. That means from the date of the covered loss
          until the property is restored to a habitable condition, up to the policy limit.
        </p>
        <p>
          Most policies cap the payment period at 12 months. Some offer 24. If you have a high-value
          property or a complex repair situation, ask about extending the coverage period when you
          purchase the policy. It is easier to get it right upfront than to argue about it after a claim.
        </p>

        <h2>Bottom line</h2>
        <p>
          Loss of rents coverage is valuable and should be on every landlord policy. But it only pays
          after a covered physical loss makes the property uninhabitable. It does not replace the
          income you lose when a tenant does not pay.
        </p>
        <p>
          Make sure your limit is high enough to cover a full year of rent. Review the exclusions on
          your policy so you know exactly what it takes to trigger the coverage.
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
