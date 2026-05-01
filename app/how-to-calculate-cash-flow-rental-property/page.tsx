import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "How to Calculate Cash Flow on a Rental Property | Investor Property Insurance",
  description:
    "Cash flow is what you keep after all expenses. Here's how to calculate it correctly before buying.",
};

export default function HowToCalculateCashFlowPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to Calculate Cash Flow on a Rental Property",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "Cash flow is what you keep after all expenses. Here's how to calculate it correctly before buying.",
        }}
      />
      <PageHero
        eyebrow="Real estate investor guide"
        title="How to Calculate Cash Flow on a Rental Property"
        sub="Cash flow is not what you collect in rent. It is what you keep after every expense is paid."
      />
      <Breadcrumbs items={[{ label: "How to Calculate Cash Flow" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          Cash flow is the money left over each month after you have paid every expense related to
          the property. Gross rent minus your mortgage is not cash flow. That calculation leaves
          out half the costs. Here is how to do it correctly before you buy.
        </p>

        <h2>The Formula</h2>
        <p>
          Monthly Cash Flow = Gross Rent - Total Monthly Expenses
        </p>
        <p>
          Simple in concept. The work is in making sure you include every expense. Most investors
          who buy bad deals missed something in the expense column.
        </p>

        <h2>What to Include in Monthly Expenses</h2>
        <p>
          <strong>Mortgage payment (PITI).</strong> Principal, interest, taxes, and insurance. If
          your lender escrows taxes and insurance, this is your full payment. If not, add property
          taxes and insurance separately. Use the actual payment, not just principal and interest.
        </p>
        <p>
          <strong>Insurance.</strong> Landlord insurance costs vary by property type, location,
          and coverage level. For a single-family rental, budget $75 to $200 per month as a rough
          starting point. Get an actual quote before you close.
        </p>
        <p>
          <strong>Property management.</strong> If you use a property manager, budget 8 to 12
          percent of monthly rent. On a $1,800 rent property, that is $144 to $216 per month.
          Even if you self-manage now, model it in. If you ever want to stop self-managing, the
          deal should still work.
        </p>
        <p>
          <strong>Maintenance reserve.</strong> Budget 1 percent of the property&apos;s value per
          year for maintenance and repairs. On a $200,000 property, that is $2,000 per year or
          about $167 per month. This covers routine repairs, appliance replacements, and the small
          things that add up. Some investors use 10 percent of monthly rent as a simpler rule of
          thumb.
        </p>
        <p>
          <strong>Vacancy reserve.</strong> Properties are not occupied 12 months a year. Budget
          8 percent of annual rent for vacancy. On a $1,800 rent property, that is $144 per month.
          Over a year, it covers roughly one month of vacancy.
        </p>
        <p>
          <strong>HOA fees.</strong> If the property is in an HOA, include the full monthly fee.
          These can range from $50 to $500 or more depending on the community.
        </p>
        <p>
          <strong>Utilities if owner-paid.</strong> Some properties include water, trash, or lawn
          care in the rent. If you pay any utilities, add those costs.
        </p>

        <h2>A Simple Example</h2>
        <p>
          Property: single-family home, purchased for $220,000. Rent: $1,900 per month.
        </p>
        <p>
          Expenses: Mortgage payment: $1,100. Insurance: $120. Property management (10%): $190.
          Maintenance reserve (1% of value / 12): $183. Vacancy reserve (8% of rent): $152. No
          HOA, owner pays no utilities.
        </p>
        <p>
          Total expenses: $1,745 per month. Monthly cash flow: $1,900 minus $1,745 equals $155.
        </p>
        <p>
          That is a modestly positive deal. Not spectacular, but it cash flows. A buyer who only
          looked at rent minus mortgage would have seen $800 per month and thought this was a strong
          performer.
        </p>

        <h2>The Most Common Mistake</h2>
        <p>
          Forgetting maintenance and vacancy. These are real costs that show up on a long enough
          timeline. Skipping them makes every deal look better than it is. You are not being
          conservative when you leave them out. You are setting yourself up for negative surprise.
        </p>

        <h2>What Positive, Neutral, and Negative Cash Flow Mean</h2>
        <p>
          Positive cash flow means the property generates income above all expenses. The property
          is adding to your monthly finances.
        </p>
        <p>
          Neutral or break-even cash flow means expenses roughly equal rent. You are building
          equity and potentially benefiting from appreciation, but the property is not adding
          monthly income. This can be acceptable in high-appreciation markets. Know what you are
          buying.
        </p>
        <p>
          Negative cash flow means you are paying out of pocket each month. The property costs you
          money. Some investors accept this in strong appreciation markets. Most should not, especially
          starting out. Negative cash flow is not a strategy for building financial stability.
        </p>

        <h2>Insurance Is One of Your Most Predictable Expenses</h2>
        <p>
          Unlike maintenance costs that vary month to month, insurance is a fixed annual premium
          that you can model precisely. Get a quote before you close on a property, not after.
          Insurance costs affect cash flow, and in some markets or for some property types, the
          premium is higher than buyers expect.
        </p>

        <h2>Run the Numbers Before You Buy</h2>
        <p>
          Use a calculator to model it out.{" "}
          <Link href="/rental-profit-calculator" className="text-brand hover:underline">
            Run the numbers yourself: investorpropertyinsurance.com/rental-profit-calculator
          </Link>
        </p>

        <div className="mt-8 rounded-lg border border-flame bg-flame/5 p-6">
          <p className="font-semibold text-foreground">
            Buying a rental property? Make sure insurance is part of your plan.
          </p>
          <p className="mt-1 text-sm text-muted">
            Start here:{" "}
            <Link href="/get-a-quote" className="text-brand hover:underline">
              investorpropertyinsurance.com/get-a-quote
            </Link>
          </p>
        </div>
      </article>

      <CTASection />

      <RelatedLinks
        items={[
          {
            href: "/rental-profit-calculator",
            title: "Rental property profit calculator",
            desc: "Calculate monthly cash flow, annual profit, and ROI before you buy.",
          },
          {
            href: "/what-expenses-to-expect-as-landlord",
            title: "What expenses should you expect as a landlord?",
            desc: "The full list of costs to budget.",
          },
          {
            href: "/rental-property-tax-deductions",
            title: "Rental property tax deductions",
            desc: "What you can write off to reduce your tax bill.",
          },
        ]}
      />
    </>
  );
}
