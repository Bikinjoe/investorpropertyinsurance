import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Rental Property Calculators & Tools | Investor Property Insurance",
  description:
    "Free calculators and tools for rental property owners and real estate investors. Calculate cash flow, ROI, vacancy impact, and insurance costs.",
};

const financialTools = [
  {
    title: "Rental Property Profit Calculator",
    description: "Calculate monthly cash flow, annual ROI, and cap rate.",
    href: "/rental-profit-calculator",
    live: true,
  },
  {
    title: "Vacancy Impact Calculator",
    description: "See what vacancy months really cost your bottom line.",
    href: "/vacancy-calculator",
    live: true,
  },
];

const insuranceTools = [
  {
    title: "Insurance Cost Estimator",
    description: "Get a rough idea of what landlord insurance might cost.",
    href: "/insurance-cost-estimator",
    live: true,
  },
  {
    title: "Rental Property Insurance Fit Check",
    description: "Answer 5 quick questions to find out if your rental property might have a coverage gap.",
    href: "/insurance-fit-check",
    live: true,
  },
  {
    title: "Quote-Ready Checklist",
    description: "Check off what you have ready. Your quote moves faster when you're prepared.",
    href: "/quote-ready-checklist",
    live: true,
  },
  {
    title: "How Much Coverage Do I Need?",
    description: "A guided tool to estimate appropriate dwelling, liability, and rental income coverage for your property.",
    href: "/how-much-coverage-do-i-need",
    live: true,
  },
];

const comingSoon = [
  {
    title: "Should I Buy This Property?",
    description: "Green / yellow / red deal indicator based on your numbers.",
  },
  {
    title: "Rent Estimator",
    description: "Estimate market rent for a property before you close.",
  },
  {
    title: "Property Management Cost Calculator",
    description: "See how PM fees affect your actual returns.",
  },
];

function LiveToolCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col rounded-lg border border-border bg-surface p-6 transition hover:border-flame hover:shadow-md"
    >
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{description}</p>
      <span className="mt-4 text-sm font-semibold text-flame hover:text-gold">
        Open calculator →
      </span>
    </Link>
  );
}

function ComingSoonCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-surface p-6 opacity-60">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <span className="flex-shrink-0 rounded-full bg-gold/20 px-2 py-0.5 text-xs font-bold text-gold">
          Coming Soon
        </span>
      </div>
      <p className="mt-2 text-sm text-muted">{description}</p>
    </div>
  );
}

export default function CalculatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Calculators & Tools"
        title="Calculators & Tools for Rental Property Owners"
        sub="Run the numbers before you decide. These tools help you evaluate deals, understand costs, and protect your income."
        showCTAs={false}
      />
      <Breadcrumbs items={[{ label: "Calculators & Tools" }]} />

      <section className="container-narrow py-14">
        {/* Financial Tools */}
        <div>
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Financial Tools
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {financialTools.map((tool) => (
              <LiveToolCard key={tool.title} {...tool} />
            ))}
          </div>
        </div>

        {/* Insurance Tools */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Insurance Tools
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {insuranceTools.map((tool) => (
              <LiveToolCard key={tool.title} {...tool} />
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Coming Soon
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {comingSoon.map((tool) => (
              <ComingSoonCard key={tool.title} {...tool} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-lg border border-border bg-surface-2 p-8 text-center">
          <p className="text-base font-semibold text-foreground">
            Have questions the tools don't answer? Talk to someone who knows rental property insurance.
          </p>
          <Link href="/get-a-quote" className="btn-primary mt-5 inline-flex">
            Start a review →
          </Link>
        </div>
      </section>

      <CTASection
        heading="Ready to get covered?"
        sub="Get a quote in 60 seconds. We'll have options back to you fast."
      />
    </>
  );
}
