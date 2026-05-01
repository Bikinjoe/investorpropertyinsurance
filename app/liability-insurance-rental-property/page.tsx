import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liability Insurance for Rental Properties | Investor Property Insurance",
  description:
    "If a tenant or visitor is injured at your rental, your liability coverage may pay for their medical costs and your legal defense.",
};

export default function LiabilityInsuranceRentalPropertyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "What Happens If Someone Gets Hurt at My Rental Property?",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "If a tenant or visitor is injured at your rental, your liability coverage may pay for their medical costs and your legal defense.",
        }}
      />
      <PageHero
        eyebrow="Liability insurance for rental properties"
        title="What Happens If Someone Gets Hurt at My Rental Property?"
        sub="Your liability coverage may respond. Here's what it covers, what it doesn't, and how much you should carry."
      />
      <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Liability Insurance for Rental Properties" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          Someone gets hurt at your rental property. They sue. Your landlord policy includes liability
          coverage to handle exactly this situation. Here is how that coverage works and what you need
          to know before a claim happens.
        </p>

        <h2>How liability coverage works</h2>
        <p>
          Liability coverage on a landlord policy pays for two things when you are found legally
          responsible for an injury: the injured party's damages and your legal defense costs.
        </p>
        <p>
          Damages can include medical bills, lost wages, pain and suffering, and other costs the
          injured party has suffered. Legal defense costs include attorney fees, court costs, and
          related expenses, whether or not the case goes to trial.
        </p>
        <p>
          Both components are covered, up to your policy limit, per occurrence. If the case settles
          or a judgment is entered against you above your limit, you are responsible for the excess.
        </p>

        <h2>What negligence means</h2>
        <p>
          Liability coverage applies when you are found negligent. Negligence means you failed to
          exercise reasonable care, and that failure caused someone harm.
        </p>
        <p>
          As a landlord, you have a duty to maintain the property in a reasonably safe condition.
          If you know about a hazard and fail to fix it, that is negligence. If a condition is so
          obvious you should have known about it, that can also be negligence.
        </p>
        <p>
          Not every injury on your property creates liability for you. If a tenant does something
          reckless and gets hurt, or if a visitor causes their own injury through their own behavior,
          you may not be liable. But insurance does not make those determinations upfront. It pays to
          defend you and settle the question through the legal process.
        </p>

        <h2>Common injury scenarios</h2>
        <p>
          The most common landlord liability claims involve slip and fall on wet or uneven surfaces,
          injuries on stairs with broken or missing railings, falls on damaged sidewalks or driveways,
          and injuries involving hazards the landlord knew about but did not fix.
        </p>
        <p>
          Dog bites from tenant-owned dogs can also create landlord liability if the landlord knew
          the dog was on the property and had a history of aggression. Injuries from faulty appliances
          or fixtures provided by the landlord are another common source of claims.
        </p>
        <p>
          In each case, the question is the same: did the landlord fail to exercise reasonable care?
        </p>

        <h2>What liability pays</h2>
        <p>
          Your liability coverage pays defense costs and damages up to your policy limit. It covers
          claims made by tenants, tenant guests, delivery people, contractors, and other visitors to
          the property.
        </p>
        <p>
          It does not cover intentional acts. If you intentionally harm someone, liability insurance
          does not respond.
        </p>
        <p>
          It also does not cover the tenant's own belongings or your property. Those have separate
          coverage. Liability is specifically for claims by third parties against you.
        </p>

        <h2>Recommended limits</h2>
        <p>
          Most landlord policies come with $100,000 or $300,000 in liability coverage by default.
          Neither of those limits is adequate for a serious injury claim. A single slip-and-fall with
          a broken hip, surgery, and rehabilitation can easily reach $500,000 in medical costs alone.
        </p>
        <p>
          Most landlords should carry at least $500,000 in liability on each rental property. A
          $1 million limit is better and is available on most policies for a modest additional premium.
        </p>
        <p>
          Do not just take the default that comes with the policy. Ask your agent what the limit is
          and confirm it is adequate for your situation.
        </p>

        <h2>Umbrella consideration</h2>
        <p>
          Even $1 million in liability can be exhausted by a serious injury with long-term care costs,
          lost wage claims, and a large pain-and-suffering award. If you own multiple properties or
          have significant personal assets, adding a commercial umbrella policy makes sense.
        </p>
        <p>
          A $1 million umbrella sits above your landlord policy liability limit and responds after
          that limit is exhausted. The annual cost is modest: typically $200 to $500 for personal
          umbrella, $500 to $1,500 for commercial umbrella on an investment property portfolio.
        </p>

        <h2>Bottom line</h2>
        <p>
          Liability coverage is not optional if you own rental property. The default limits that come
          with many landlord policies are not enough. Check your limit, consider increasing it, and
          look at an umbrella if you own more than one property.
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
