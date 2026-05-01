import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Rental Property Tax Deductions | Investor Property Insurance",
  description:
    "Landlords can deduct mortgage interest, depreciation, insurance, repairs, and more. Here's what to know.",
};

export default function RentalPropertyTaxDeductionsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Rental Property Tax Deductions: What Landlords Can Write Off",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "Landlords can deduct mortgage interest, depreciation, insurance, repairs, and more. Here's what to know.",
        }}
      />
      <PageHero
        eyebrow="Landlord tax guide"
        title="Rental Property Tax Deductions: What Landlords Can Write Off"
        sub="Landlords have real deductions available. Here are the main ones and what they actually mean."
      />
      <Breadcrumbs items={[{ label: "Rental Property Tax Deductions" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <div className="rounded-lg border border-border bg-surface p-4 text-sm text-muted">
          <strong>Important:</strong> This is general information, not tax advice. Tax laws change
          and your specific situation matters. Work with a CPA who has experience with rental
          property owners before making decisions based on this.
        </div>

        <p className="mt-6">
          Rental property ownership comes with a meaningful set of tax deductions. Most landlords
          leave money on the table because they do not know what qualifies or they do not keep
          good enough records. Here is what you can generally deduct and what you cannot.
        </p>

        <h2>What You Can Deduct</h2>
        <p>
          <strong>Mortgage interest.</strong> The interest portion of your mortgage payment on the
          rental property is deductible. This is typically one of the largest deductions for
          landlords, especially in the early years of a loan when interest makes up most of the
          payment. Principal repayment is not deductible.
        </p>
        <p>
          <strong>Property taxes.</strong> The real estate taxes you pay on the rental property
          are deductible as a rental expense. This is separate from the property tax deduction
          limits that apply to your personal residence.
        </p>
        <p>
          <strong>Insurance premiums.</strong> Your landlord insurance premium is a deductible
          business expense. This includes the base policy and any add-ons you pay for as part of
          the rental operation. Keep your annual statement from your insurer for your records.
        </p>
        <p>
          <strong>Repairs and maintenance.</strong> Work done to keep the property in its current
          condition is deductible in the year you pay for it. Fixing a leaky faucet, repainting
          between tenants, replacing a broken window, servicing the furnace. These are repairs.
          Deduct them when you pay them.
        </p>
        <p>
          <strong>Property management fees.</strong> If you pay a property manager, their fees are
          deductible as a rental operating expense.
        </p>
        <p>
          <strong>Depreciation.</strong> This is the big one that many landlords miss or underuse.
          The IRS allows you to deduct the cost of a residential rental building over 27.5 years.
          If the building portion of your property is worth $275,000, you can deduct $10,000 per
          year in depreciation, even if the property is appreciating in market value. Land does
          not depreciate, only the structure.
        </p>
        <p>
          <strong>Travel to the property.</strong> Reasonable travel costs to manage or inspect
          your rental are deductible. Keep a log. Track the miles, dates, and purpose of each trip.
          If you fly to an out-of-state property for a legitimate inspection or repair oversight,
          that travel is generally deductible.
        </p>
        <p>
          <strong>Professional fees.</strong> Attorney fees, accountant fees, and fees paid to
          professionals related to the rental business are deductible. If you pay a lawyer to
          handle an eviction or a CPA to prepare your Schedule E, those costs qualify.
        </p>

        <h2>What You Cannot Deduct</h2>
        <p>
          <strong>Capital improvements in the year you make them.</strong> There is an important
          line between a repair and an improvement. Replacing a broken faucet is a repair. Replacing
          all the plumbing in the house is an improvement. Improvements add value or extend the
          life of the property. They must be depreciated over time, not deducted immediately. This
          distinction matters and is a common audit trigger.
        </p>
        <p>
          <strong>Personal use portions.</strong> If you use the property personally during the
          year, you must allocate expenses between personal and rental use. Only the rental portion
          is deductible. If you use a vacation property 30 days for yourself and rent it out 120
          days, you can only deduct 80 percent of the expenses.
        </p>

        <h2>Why Keeping Records Matters</h2>
        <p>
          Rental property returns get scrutiny. Schedule E is a common audit area. The difference
          between winning and losing an audit is documentation. Keep receipts for every repair and
          maintenance item. Keep your insurance statements. Log your mileage. Save your property
          management invoices. Keep these for at least three to seven years after the tax year they
          relate to.
        </p>
        <p>
          A dedicated folder, physical or digital, for each property per year is the simplest
          system that works.
        </p>

        <h2>The Insurance Premium Is Already Deductible</h2>
        <p>
          One benefit of having proper landlord insurance is that the premium is a legitimate
          deductible business expense. You are not just protecting the property. You are paying for
          something the IRS already recognizes as a cost of operating a rental business. That does
          not make insurance free, but it does reduce the after-tax cost.
        </p>

        <h2>Bottom Line</h2>
        <p>
          The major deductions are mortgage interest, property taxes, insurance, repairs,
          depreciation, property management fees, travel, and professional services. Improvements
          must be depreciated, not expensed. Keep records for everything. Work with a CPA who
          knows rental properties. The deductions are real, and they are worth tracking correctly.
        </p>

        <div className="mt-8 rounded-lg border border-flame bg-flame/5 p-6">
          <p className="font-semibold text-foreground">
            Want to know if your coverage fits your situation?
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
            href: "/how-to-calculate-cash-flow-rental-property",
            title: "How to calculate cash flow on a rental property",
            desc: "Model your actual numbers including all expenses.",
          },
          {
            href: "/what-expenses-to-expect-as-landlord",
            title: "What expenses should you expect as a landlord?",
            desc: "The full cost picture before you buy.",
          },
          {
            href: "/rental-profit-calculator",
            title: "Rental property profit calculator",
            desc: "Run the numbers on any property.",
          },
        ]}
      />
    </>
  );
}
