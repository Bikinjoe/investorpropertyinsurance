import Link from "next/link";
import CarrierStrip from "@/components/CarrierStrip";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Investor Property Insurance for Real Estate Investors | Western U.S.",
  description:
    "Insurance for real estate investors, rental property owners, rehab investors, short-term rental operators, and select income-producing property owners across the Western U.S. Start with a fit-based property review.",
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "InsuranceAgency",
          name: "Investor Property Insurance",
          description:
            "Insurance for real estate investors and income-producing property owners across the Western U.S.",
          url: "https://investorpropertyinsurance.com",
          areaServed: "Western United States",
        }}
      />

      {/* Section 1: Hero */}
      <section className="relative border-b border-border bg-gradient-to-br from-white via-surface to-surface-2">
        <div className="container-narrow py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">
            Western U.S. Property Focus
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-foreground sm:text-5xl md:text-6xl">
            Real Estate Investor Insurance Built for How Your Property Is Actually Used
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted sm:text-xl">
            Insurance for rental properties, rehabs, short-term rentals, small multifamily, and select income-producing property across the Western U.S. We help investors find the right coverage path and move quickly when the account fits.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/get-a-quote" className="btn-primary w-full text-lg sm:w-auto">
              Start My Property Review
            </Link>
            <Link href="/who-we-help" className="btn-secondary w-full text-lg sm:w-auto">
              See If We&apos;re a Fit
            </Link>
          </div>

          <div className="mt-10 grid gap-3 text-sm text-foreground sm:grid-cols-2 md:grid-cols-4">
            {[
              "Western U.S. property focus",
              "Fit-based coverage review",
              "Independent carrier access",
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
              The wrong policy can create problems with claims, lenders, vacancy, renovation, rental use, and ownership structure.
            </p>
          </div>
          <Link
            href="/landlord-insurance-vs-homeowners-insurance"
            className="mt-6 inline-block font-semibold text-flame hover:underline"
          >
            Learn Why the Right Form Matters &rarr;
          </Link>
        </div>
      </section>

      {/* Section 3: Guide */}
      <section className="bg-white">
        <div className="container-narrow py-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            How We Help Investors Move Forward
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Good-Fit Accounts Move Fast",
                body: "When the property, ownership, use, and carrier path are clear, we move quickly.",
              },
              {
                title: "Complex Accounts Get Judgment",
                body: "When the risk is more complex, we slow down enough to review it correctly.",
              },
              {
                title: "Wrong-Fit Accounts Get a Clear Answer Early",
                body: "If we are not the right fit, we tell you early instead of dragging you through a weak quote process.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-lg border border-border bg-white p-6 shadow-sm"
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
                body: "Property type, state, ownership, occupancy, lender needs, timing, and claims history.",
              },
              {
                n: "2",
                title: "We Confirm the Coverage Path",
                body: "We check fit, carrier appetite, form type, and red flags.",
              },
              {
                n: "3",
                title: "Move Forward With Clarity",
                body: "If the path is clear, we quote and bind. If not, we explain what needs review.",
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
              <h3 className="text-xl font-bold text-foreground">Strong Fit</h3>
              <ul className="mt-4 space-y-2 text-base text-muted">
                {[
                  "Long-term rentals",
                  "Landlord policies",
                  "DSCR buyer properties",
                  "Small rental portfolios",
                  "Rehabs where carrier path is clear",
                  "Short-term rentals where appetite fits",
                  "Small multifamily",
                  "Select commercial property owners",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 font-bold text-flame">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">May Require Review</h3>
              <ul className="mt-4 space-y-2 text-base text-muted">
                {[
                  "Larger multifamily",
                  "Mixed-use property",
                  "Vacant or heavy renovation property",
                  "Mobile home parks",
                  "Self-storage",
                  "Properties with prior claims, condition issues, or unusual occupancy",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 font-bold text-flame">•</span>
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
                    <span className="mt-1 font-bold text-flame">•</span>
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
          <div className="mt-6 max-w-3xl space-y-4 text-lg text-muted">
            <p>That is the point.</p>
            <p>
              We are a fit-based agency for investors and property owners who want coverage placed correctly. We would rather tell you early that we are not the right fit than place coverage that does not match the property.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Coverage Paths */}
      <section className="bg-white">
        <div className="container-narrow py-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Common Coverage Paths
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/rental-property-insurance",
                title: "Landlord Insurance",
                body: "For rental properties that are not owner-occupied.",
              },
              {
                href: "/rentals-rehabs",
                title: "Rehab and Renovation Insurance",
                body: "For investors improving, renovating, or repositioning property.",
              },
              {
                href: "/short-term-rentals",
                title: "Short-Term Rental Insurance",
                body: "For Airbnb, Vrbo, and similar properties where carrier appetite fits.",
              },
              {
                href: "/multifamily",
                title: "Small Multifamily Insurance",
                body: "For duplexes, triplexes, fourplexes, and select larger multifamily risks.",
              },
              {
                href: "/commercial-property",
                title: "Commercial Property and Lessor's Risk",
                body: "For select income-producing property owners with tenant, building, liability, and lender requirements.",
              },
              {
                href: "/umbrella-insurance-landlords",
                title: "Umbrella and Liability Protection",
                body: "For investors who need liability limits that match their asset and exposure picture.",
              },
            ].map((card) => (
              <div
                key={card.href}
                className="group rounded-lg border border-border bg-white p-6 transition hover:border-flame hover:shadow-md"
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

      {/* Section 8: Final CTA */}
      <section className="bg-surface">
        <div className="container-narrow py-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Ready to Review Your Property?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Start with a short property review. We will confirm whether we are likely a fit, what information is needed, and what coverage path makes sense.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/get-a-quote" className="btn-primary w-full text-lg sm:w-auto">
              Start My Property Review
            </Link>
            <Link href="/who-we-help" className="btn-secondary w-full text-lg sm:w-auto">
              See If We&apos;re a Fit
            </Link>
          </div>
        </div>
      </section>

      {/* Section 9: CarrierStrip */}
      <CarrierStrip />
    </>
  );
}
