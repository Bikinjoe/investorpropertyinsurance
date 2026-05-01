import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import CarrierStrip from "@/components/CarrierStrip";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Investor Property Insurance for Real Estate Investors | Western U.S.",
  description:
    "Insurance for real estate investors, rental property owners, rehab investors, short-term rental operators, and select income-producing property owners across the Western U.S. Start with a fit-based property review.",
};

const homeFAQs = [
  {
    q: "Is landlord insurance the same as homeowners insurance?",
    a: "No. A rental property is not insured the same way as a home you live in. Ownership, occupancy, rental use, and carrier rules all matter.",
  },
  {
    q: "Can you insure properties owned by an LLC?",
    a: "Often, yes, but the correct path depends on the carrier, property type, state, occupancy, and ownership structure.",
  },
  {
    q: "Do you insure short-term rentals?",
    a: "We review short-term rentals where carrier appetite fits. STR coverage is more specialized than standard landlord insurance.",
  },
  {
    q: "Do you insure rehabs or renovation projects?",
    a: "Yes, when the project fits available carrier appetite. Renovation, vacancy, and construction activity can materially change the insurance path.",
  },
  {
    q: "Do you shop every carrier every time?",
    a: "No. We focus on the carrier path that fits the property, ownership, use, and underwriting facts. Remarketing or broad shopping is not always the right answer.",
  },
  {
    q: "What if we are not a fit?",
    a: "We will tell you early. We would rather give you a clear answer than drag you through a weak quote process.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFAQs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      {/* Section 1: Hero */}
      <section className="relative border-b border-border bg-gradient-to-br from-white via-surface to-surface-2">
        <div className="container-narrow py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">
            Western U.S. Property Focus
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-foreground sm:text-5xl md:text-6xl">
            Real Estate Investor Insurance Built for the Way Your Property Is Actually Used
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted sm:text-xl">
            Rental properties, rehabs, short-term rentals, small multifamily, and select income-producing property across the Western U.S. We help investors avoid the wrong policy, confirm the right coverage path, and move quickly when the account fits.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/get-a-quote" className="btn-primary w-full text-lg sm:w-auto">
              Start My Property Review
            </Link>
            <Link href="/who-we-help" className="btn-secondary w-full text-lg sm:w-auto">
              See If We&apos;re a Fit
            </Link>
          </div>

          <div className="mt-10 grid gap-3 text-sm text-foreground sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              "Western U.S. property focus",
              "Rental, rehab, STR, and small multifamily paths",
              "Independent carrier access",
              "Fit-based coverage review",
              "Fast movement for good-fit accounts",
            ].map((b) => (
              <div key={b} className="flex items-start gap-2">
                <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-flame text-xs font-bold text-white">
                  ✓
                </span>
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Section 2: Problem */}
      <section className="bg-surface">
        <div className="container-narrow py-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Your Investment Property Is Not Your Personal Home
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-lg text-muted">
            <p>
              A rental, rehab, short-term rental, or entity-owned property has different insurance issues than a home you live in.
            </p>
            <p>
              The wrong policy can create problems with vacancy, renovation, rental use, lender requirements, LLC ownership, loss of rents, tenant injury claims, ordinance or law, short-term rental use, and claim disputes after a loss.
            </p>
            <p>
              A cheap quote is not helpful if it is built on the wrong coverage path.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Guide */}
      <section className="bg-white">
        <div className="container-narrow py-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            We Help Investors Find the Right Coverage Path
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted">
            Most investors are trying to move fast. Closings, lender deadlines, renovations, tenants, and refinance timelines do not wait. But speed only helps if the coverage is placed correctly. We help property owners and real estate investors understand which carrier, form, limits, and coverage path actually match the property.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Good-Fit Accounts Move Fast",
                body: "When the property, ownership, occupancy, use, and carrier path are clear, we move quickly.",
              },
              {
                title: "Complex Accounts Get Judgment",
                body: "When the risk is more complex, we slow down enough to review the details correctly.",
              },
              {
                title: "Wrong-Fit Accounts Get a Clear Answer Early",
                body: "If we are not the right fit, we will tell you early rather than drag you through a weak quote process.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-lg border border-border bg-surface-2 p-6"
              >
                <h3 className="text-xl font-bold text-foreground">{card.title}</h3>
                <p className="mt-2 text-base text-muted">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="bg-surface">
        <div className="container-narrow py-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            How It Works
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                n: "1",
                title: "Tell Us What You Own",
                body: "We look at the property type, state, ownership, occupancy, lender needs, renovation plans, claims history, and timing.",
              },
              {
                n: "2",
                title: "We Confirm the Coverage Path",
                body: "We check fit, carrier appetite, form type, and red flags before wasting your time with a weak quote process.",
              },
              {
                n: "3",
                title: "Move Forward With Clarity",
                body: "If the path is clear, we quote and bind quickly. If the account needs review, we explain what is missing. If we are not the right fit, we tell you early.",
              },
            ].map((s) => (
              <div key={s.n} className="flex flex-col">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-flame text-xl font-black text-white">
                  {s.n}
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-base text-muted">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/get-a-quote" className="btn-primary">
              Start My Property Review
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Property Types */}
      <section className="bg-white">
        <div className="container-narrow py-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Investor Property Types We Commonly Review
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold text-foreground">Strong-Fit Property Types</h3>
              <ul className="mt-4 space-y-2 text-base text-muted">
                {[
                  "Long-term rental properties",
                  "Landlord policies",
                  "DSCR buyer properties",
                  "Small rental portfolios",
                  "Rehabs and renovations where the carrier path is clear",
                  "Short-term rentals where appetite fits",
                  "Small multifamily",
                  "Select commercial property owners",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-flame font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">May Require Additional Review</h3>
              <ul className="mt-4 space-y-2 text-base text-muted">
                {[
                  "Larger multifamily",
                  "Mixed-use property",
                  "Vacant property",
                  "Heavy renovation projects",
                  "Mobile home parks",
                  "Self-storage",
                  "Properties with prior claims, condition issues, or unusual occupancy",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-flame font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Not Usually Ideal</h3>
              <ul className="mt-4 space-y-2 text-base text-muted">
                {[
                  "Price-only shoppers",
                  "Same-day emergencies with incomplete information",
                  "Properties with unclear ownership or occupancy",
                  "Risks outside validated carrier appetite",
                  "Clients unwilling to complete structured intake",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-flame font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Not for Everyone */}
      <section className="bg-surface">
        <div className="container-narrow py-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            We Are Not Trying to Quote Every Property
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-muted">
            That is the point. We are a fit-based agency for investors and property owners who want coverage placed correctly. We are not built for every risk or every last-minute quote emergency. We would rather tell you early that we are not the right fit than place coverage that does not match the property.
          </p>
        </div>
      </section>

      {/* Section 7: Coverage Paths */}
      <section className="bg-white">
        <div className="container-narrow py-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Common Coverage Paths for Real Estate Investors
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/rental-property-insurance",
                title: "Landlord Insurance",
                body: "For rental properties that are not owner-occupied and need coverage aligned with tenant occupancy and rental use.",
              },
              {
                href: "/rentals-rehabs",
                title: "Rehab and Renovation Insurance",
                body: "For investors improving, renovating, or repositioning property before rental, resale, or occupancy.",
              },
              {
                href: "/short-term-rentals",
                title: "Short-Term Rental Insurance",
                body: "For properties rented through Airbnb, Vrbo, or similar platforms, where carrier appetite and coverage form matter.",
              },
              {
                href: "/multifamily",
                title: "Small Multifamily Insurance",
                body: "For duplexes, triplexes, fourplexes, and select larger multifamily risks where the carrier path fits.",
              },
              {
                href: "/commercial-property",
                title: "Commercial Property and Lessor's Risk",
                body: "For select income-producing property owners with tenant, building, liability, and lender requirements.",
              },
              {
                href: "/umbrella-insurance-landlords",
                title: "Umbrella and Liability Protection",
                body: "For investors who need to review whether liability limits match their asset and exposure picture.",
              },
            ].map((card) => (
              <div
                key={card.href}
                className="group rounded-lg border border-border bg-surface-2 p-6 transition hover:border-flame hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-foreground group-hover:text-flame">
                  {card.title}
                </h3>
                <p className="mt-2 text-base text-muted">{card.body}</p>
                <Link
                  href={card.href}
                  className="mt-3 inline-block text-sm font-semibold text-flame hover:underline"
                >
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: What Can Go Wrong */}
      <section className="bg-surface">
        <div className="container-narrow py-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            What Can Go Wrong With the Wrong Policy?
          </h2>
          <p className="mt-4 text-lg text-muted">
            The wrong policy may look fine until something changes or a claim happens.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "The Property Is Rented but Written Like a Home",
                body: "A homeowner policy may not fit a property used as a rental.",
              },
              {
                title: "The Property Is Vacant or Under Renovation",
                body: "Vacancy and renovation can change what the carrier will or will not cover.",
              },
              {
                title: "The Property Is Owned by an LLC or Entity",
                body: "Ownership structure can affect the correct named insured and coverage path.",
              },
              {
                title: "The Lender Requires Evidence That Does Not Match the Policy",
                body: "A lender request can expose whether the coverage was placed correctly.",
              },
              {
                title: "A Claim Reveals the Policy Was Built on the Wrong Assumptions",
                body: "The worst time to discover a mismatch is after a loss.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-base text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: What Information We Need */}
      <section className="bg-white">
        <div className="container-narrow py-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            What Information Do We Need to Review Your Property?
          </h2>
          <p className="mt-4 text-lg text-muted">
            To move quickly, we need the right details upfront.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Basic Property Details",
                body: "Address, property type, year built, condition, square footage, occupancy, and current use.",
              },
              {
                title: "Ownership and Entity Information",
                body: "Personal ownership, LLC ownership, trust ownership, or other entity structure.",
              },
              {
                title: "Rental or Occupancy Details",
                body: "Long-term rental, short-term rental, vacant, owner-occupied, tenant-occupied, or under renovation.",
              },
              {
                title: "Lender or Closing Requirements",
                body: "Mortgagee clause, loan number, evidence requirements, closing deadlines, or refinance requirements.",
              },
              {
                title: "Prior Coverage and Claims",
                body: "Current policy, renewal dates, loss history, cancellations, or underwriting issues.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-surface-2 p-6"
              >
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-base text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Success / Outcome */}
      <section className="bg-surface">
        <div className="container-narrow py-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Walk Away Knowing the Coverage Path Makes Sense
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-muted">
            When the account fits, you get a clear recommendation, a clean quote process, and coverage built around how the property is actually owned, occupied, financed, and used.
          </p>
          <ul className="mt-6 space-y-2 text-lg text-muted">
            {[
              "No guessing.",
              "No homeowner-policy mismatch.",
              "No vague quote chase.",
              "No pretending every property is the same.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-flame text-xs font-bold text-white">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 11: Final CTA */}
      <section className="bg-white">
        <div className="container-narrow py-16 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Ready to Review Your Property?
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted">
            Start with a short property review. We will confirm whether we are likely a fit, what information is needed, and what coverage path makes sense.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/get-a-quote" className="btn-primary w-full sm:w-auto">
              Start My Property Review
            </Link>
            <Link href="/quote-ready-checklist" className="btn-secondary w-full sm:w-auto">
              See What Information We Need
            </Link>
          </div>
        </div>
      </section>

      {/* Section 12: FAQ */}
      <section className="bg-surface">
        <div className="container-narrow py-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <FAQAccordion items={homeFAQs} />
          </div>
        </div>
      </section>

      {/* Section 13: Carrier Strip */}
      <section className="container-narrow py-16">
        <CarrierStrip />
      </section>

      <CTASection
        heading="Ready to Review Your Property?"
        sub="Start with a fit-based property review. We confirm the coverage path before wasting your time."
      />
    </>
  );
}
