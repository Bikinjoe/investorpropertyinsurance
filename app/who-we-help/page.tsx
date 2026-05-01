import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Who We Help | Investor Property Insurance",
  description:
    "We're built for real estate investors, rental property owners, and income-producing property owners in the Western US. Here's how to know if we're a fit.",
};

const audiences = [
  {
    title: "Real Estate Investors",
    body: "Landlords, portfolio investors, DSCR buyers, short-term rental operators, and value-add investors across the Western US. If rental income is part of your strategy, this is where we focus.",
    linkLabel: "See coverage for investors →",
    href: "/rental-property-insurance",
  },
  {
    title: "Income-Producing Property Owners",
    body: "Commercial property owners, multifamily operators, mixed-use owners, and business owners with real property exposure. If the building earns income, we can help find the right path.",
    linkLabel: "See coverage for property owners →",
    href: "/commercial-property",
  },
  {
    title: "Clean Professional-Service Firms",
    body: "Consultants, bookkeepers, agencies, advisors, and service firms that need E&O, cyber, GL, and BOP — without the complexity of high-risk operations.",
    linkLabel: "See coverage for professional firms →",
    href: "/get-a-quote",
  },
];

const notAFit = [
  "Restaurants, bars, and food service businesses",
  "Roofing contractors and broad general contractors",
  "Large commercial fleets or trucking operations",
  "High-claims accounts needing specialty markets only",
  "Accounts requiring unlimited high-touch custom service",
  "Anyone looking only for the cheapest price regardless of coverage fit",
];

const howWeWork = [
  {
    number: "01",
    heading: "We route accounts to the right carrier — not just the closest one.",
    body: "Carrier selection is a decision, not a default. We match each risk to the market that fits it.",
  },
  {
    number: "02",
    heading: "We use structured intake so nothing gets missed.",
    body: "Every account goes through the same intake process. The questions are consistent. The coverage is complete.",
  },
  {
    number: "03",
    heading: "Humans handle judgment. Systems handle the rest.",
    body: "Our team makes coverage decisions. The administrative and routing work is automated. That's how we stay fast without cutting corners.",
  },
];

export default function WhoWeHelpPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Help"
        title="Who We're Built to Help"
        sub="We focus on a specific type of client. That focus is what makes us useful."
        showCTAs={false}
      />
      <Breadcrumbs items={[{ label: "Who We Help" }]} />

      {/* Section 1: Three Audiences */}
      <section className="container-narrow py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="flex flex-col rounded-lg border border-border bg-surface p-6"
            >
              <h2 className="text-xl font-bold text-foreground">{a.title}</h2>
              <p className="mt-3 flex-1 text-base text-muted">{a.body}</p>
              <Link
                href={a.href}
                className="mt-5 text-sm font-semibold text-flame hover:text-gold"
              >
                {a.linkLabel}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Who May Not Be a Fit */}
      <section className="border-t border-border bg-surface-2">
        <div className="container-narrow py-14">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            When We May Not Be the Right Agency
          </h2>
          <ul className="mt-6 space-y-3">
            {notAFit.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 text-gold" aria-hidden>✕</span>
                <span className="text-base text-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-base text-muted">
            We'd rather tell you this upfront than waste your time. If your situation doesn't fit, we'll try to point you toward a better path.
          </p>
        </div>
      </section>

      {/* Section 3: How We Work */}
      <section className="border-t border-border">
        <div className="container-narrow py-14">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            How We Work
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {howWeWork.map((block) => (
              <div key={block.number} className="flex flex-col gap-2">
                <span className="text-3xl font-extrabold text-gold">{block.number}</span>
                <h3 className="text-base font-bold text-foreground">{block.heading}</h3>
                <p className="text-sm text-muted">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="border-t border-border bg-surface">
        <div className="container-narrow py-14 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Not sure if you're a fit?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted">
            Tell us about your situation and we'll let you know. No pressure, no obligation.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/get-a-quote" className="btn-primary w-full sm:w-auto">
              Start a review →
            </Link>
            <Link href="/resources" className="btn-secondary w-full sm:w-auto">
              See what we cover →
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to find out if we're a fit?"
        sub="Tell us about your property or business and we'll take it from there."
      />
    </>
  );
}
