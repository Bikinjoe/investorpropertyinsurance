import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources for Landlords and Real Estate Investors | Investor Property Insurance",
  description:
    "Practical guides, tools, and answers for landlords and property investors. Insurance basics, property types, carrier markets, and FAQs.",
};

const insuranceBasics = [
  {
    title: "What Insurance Do I Need for a Rental Property?",
    description:
      "If you rent out a property, you need landlord insurance. A standard homeowners policy does not cover a home you're renting to someone else.",
    href: "/rental-property-insurance",
  },
  {
    title: "Can I Use My Homeowners Insurance for a Rental?",
    description:
      "No. Once you hand the keys to a tenant, your homeowners policy stops protecting you as a landlord.",
    href: "/homeowners-insurance-rental-property",
  },
  {
    title: "What Does Landlord Insurance Actually Cover?",
    description:
      "The building, your liability, and lost rent after a covered loss. Here's what that means in practice.",
    href: "/what-does-landlord-insurance-cover",
  },
  {
    title: "What Happens If a Tenant Sues Me?",
    description:
      "Your liability coverage may pay for your legal defense and any judgment against you, up to your policy limit.",
    href: "/what-happens-if-tenant-sues-me",
  },
  {
    title: "How Much Does Landlord Insurance Cost?",
    description:
      "Most single-family landlord policies run $800 to $2,500 per year. Here's what moves the price.",
    href: "/landlord-insurance-cost",
  },
];

const propertyTypes = [
  {
    title: "Rentals and Rehabs",
    description:
      "Coverage for occupied rentals and properties under renovation. Includes builder's risk options for rehab projects.",
    href: "/rentals-rehabs",
  },
  {
    title: "Short-Term Rentals",
    description:
      "Airbnb and VRBO properties carry higher liability exposure. Here's what standard policies miss and what you need.",
    href: "/short-term-rentals",
  },
  {
    title: "House Hacking",
    description:
      "Living in one unit while renting others changes your coverage options. Here's how to insure it correctly.",
    href: "/house-hacking-insurance",
  },
  {
    title: "Ground-Up Construction",
    description:
      "Builder's risk coverage for new construction. Protects the project while it's being built.",
    href: "/ground-up-construction",
  },
  {
    title: "Multifamily Properties",
    description:
      "Five or more units shifts to commercial lines. Here's what that means for your coverage and cost.",
    href: "/multifamily",
  },
  {
    title: "Mobile Home Parks",
    description:
      "Park-owned infrastructure, common areas, and liability for residents. Specialized coverage for a specialized asset.",
    href: "/mobile-home-park-insurance",
  },
  {
    title: "Commercial Property",
    description:
      "Office, retail, industrial, and mixed-use properties. Coverage built around income-producing commercial assets.",
    href: "/commercial-property",
  },
  {
    title: "Portfolio Landlord Insurance",
    description:
      "One policy for multiple properties. Simplifies renewals and may lower your per-property cost.",
    href: "/portfolio-landlord-insurance",
  },
  {
    title: "DSCR Loan Coverage",
    description:
      "Lenders financing DSCR loans have specific insurance requirements. Here's what they want and how to meet it.",
    href: "/dscr-loan-insurance",
  },
];

const investorGuides = [
  {
    title: "First-Time Landlord: What You Need to Know Before You Rent",
    description:
      "The shift from homeowner to landlord, the five things to do before move-in, and the one mistake that costs new landlords the most.",
    href: "/first-time-landlord-tips",
  },
  {
    title: "How to Screen Tenants: What Landlords Need to Check",
    description:
      "Credit, income, rental history, criminal background, and references. What to check and how to apply fair housing rules.",
    href: "/how-to-screen-tenants",
  },
  {
    title: "What to Do If Your Tenant Doesn't Pay Rent",
    description:
      "The step-by-step process from first contact to eviction, and what insurance does and does not cover.",
    href: "/what-to-do-if-tenant-doesnt-pay-rent",
  },
  {
    title: "Should I Hire a Property Manager?",
    description:
      "Property managers cost 8 to 12 percent of rent. Here's how to know if it's worth it and what to check on your insurance policy.",
    href: "/should-i-hire-property-manager",
  },
  {
    title: "Rental Property Tax Deductions: What Landlords Can Write Off",
    description:
      "Mortgage interest, depreciation, insurance, repairs, management fees, and more. What qualifies and what does not.",
    href: "/rental-property-tax-deductions",
  },
  {
    title: "How to Calculate Cash Flow on a Rental Property",
    description:
      "The correct formula including mortgage, insurance, management, maintenance reserve, and vacancy. Not just rent minus mortgage.",
    href: "/how-to-calculate-cash-flow-rental-property",
  },
  {
    title: "How to Grow a Rental Property Portfolio",
    description:
      "Financing strategy, the insurance shift at three-plus properties, LLC structure, and what changes as you scale.",
    href: "/how-to-grow-rental-portfolio",
  },
  {
    title: "What Expenses Should You Expect as a Landlord?",
    description:
      "Fixed, variable, and one-time costs. The full expense picture before you buy, including the 50 percent rule.",
    href: "/what-expenses-to-expect-as-landlord",
  },
  {
    title: "When Should You Sell Your Rental Property?",
    description:
      "Signs it is time to sell, signs to keep holding, tax considerations, and what happens to your landlord policy at closing.",
    href: "/when-to-sell-rental-property",
  },
];

const tools = [
  {
    title: "Rental Property Profit Calculator",
    description:
      "Calculate monthly cash flow, annual profit, and ROI before you buy.",
    href: "/rental-profit-calculator",
  },
  {
    title: "Insurance Cost Estimator",
    description:
      "Get a rough idea of what landlord insurance might cost before you talk to an agent.",
    href: "/insurance-cost-estimator",
  },
  {
    title: "Vacancy Impact Calculator",
    description: "See how vacancy months affect your annual income.",
    href: "/vacancy-calculator",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Resources for Landlords and Real Estate Investors",
          description:
            "Practical guides, tools, and answers for landlords and property investors.",
          publisher: {
            "@type": "Organization",
            name: "Investor Property Insurance",
          },
        }}
      />

      {/* Hero */}
      <section className="bg-surface border-b border-border py-14 text-center">
        <div className="container-narrow">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Resources for Landlords and Real Estate Investors
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Practical guides, tools, and answers to the questions landlords actually ask.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Resources" }]} />

      {/* Section 1: Insurance Basics */}
      <section className="bg-white py-14">
        <div className="container-wide">
          <h2 className="mb-8 border-l-4 border-brand pl-4 text-2xl font-bold text-foreground">
            Insurance Basics
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insuranceBasics.map((card) => (
              <ResourceCard
                key={card.href}
                category="Insurance Basics"
                title={card.title}
                description={card.description}
                href={card.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Property Types */}
      <section className="bg-surface py-14">
        <div className="container-wide">
          <h2 className="mb-8 border-l-4 border-brand pl-4 text-2xl font-bold text-foreground">
            Property Types
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {propertyTypes.map((card) => (
              <ResourceCard
                key={card.href}
                category="Property Types"
                title={card.title}
                description={card.description}
                href={card.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Carrier Markets */}
      <section className="bg-white py-14">
        <div className="container-wide">
          <h2 className="mb-8 border-l-4 border-brand pl-4 text-2xl font-bold text-foreground">
            Carrier Markets
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ResourceCard
              category="Carrier Markets"
              title="Our Carrier Markets"
              description="We work with 20+ carriers for real estate investors and property owners across the Western US."
              href="/carrier-markets"
            />
          </div>
        </div>
      </section>

      {/* Section 3b: Real Estate Investor Guides */}
      <section className="bg-white py-14">
        <div className="container-wide">
          <h2 className="mb-8 border-l-4 border-brand pl-4 text-2xl font-bold text-foreground">
            Real Estate Investor Guides
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {investorGuides.map((card) => (
              <ResourceCard
                key={card.href}
                category="Investor Guides"
                title={card.title}
                description={card.description}
                href={card.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Tools */}
      <section className="bg-surface py-14">
        <div className="container-wide">
          <h2 className="mb-8 border-l-4 border-brand pl-4 text-2xl font-bold text-foreground">
            Tools
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((card) => (
              <ResourceCard
                key={card.href}
                category="Tools"
                title={card.title}
                description={card.description}
                href={card.href}
                linkLabel="Try the Calculator →"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: FAQ */}
      <section className="bg-white py-14">
        <div className="container-wide">
          <h2 className="mb-8 border-l-4 border-brand pl-4 text-2xl font-bold text-foreground">
            FAQ
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ResourceCard
              category="FAQ"
              title="Common Questions"
              description="25 answered questions on rental, short-term rental, multifamily, and commercial property insurance for real estate investors."
              href="/faq"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ResourceCard({
  category,
  title,
  description,
  href,
  linkLabel = "Learn More →",
}: {
  category: string;
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-white p-6 shadow-sm">
      <span className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {category}
      </span>
      <h3 className="mb-2 text-base font-bold text-foreground">{title}</h3>
      <p className="mb-4 flex-1 text-sm text-muted-foreground">{description}</p>
      <Link
        href={href}
        className="text-sm font-semibold text-brand hover:underline"
      >
        {linkLabel}
      </Link>
    </div>
  );
}
