import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import CarrierStrip from "@/components/CarrierStrip";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata = {
  title: "Real Estate Investor Insurance, Built for Investors",
  description:
    "Insurance for every real estate asset class: rentals, rehabs, short-term rentals, multifamily, and commercial. 10+ carrier markets across the western US.",
};

const homeFAQs = [
  {
    q: "Why do I need investor insurance instead of a homeowner policy?",
    a: (
      <p>
        Homeowner policies assume you live in the property. The moment you
        rent it out, the policy can deny claims for material misrepresentation.
        An investor form (DP-3 for 1-4 units, commercial package for 5+) is
        built for the way you actually use the property.{" "}
        <Link href="/landlord-insurance-vs-investor-insurance">
          See the full comparison.
        </Link>
      </p>
    ),
  },
  {
    q: "Do you write short-term rentals (Airbnb / VRBO)?",
    a: (
      <p>
        Yes. Standard landlord and homeowner policies usually exclude STR
        activity. We work with carriers that write purpose-built short-term
        rental policies covering host liability, amenities, business
        income, and bedbug claims.{" "}
        <Link href="/short-term-rentals">More on STR coverage.</Link>
      </p>
    ),
  },
  {
    q: "Can you cover my whole portfolio on one policy?",
    a: (
      <p>
        Yes. We write portfolio policies through carriers that specialize in
        investor business. One renewal date. One carrier. Properties added
        and removed as you buy and sell. Most active investors with 5+ doors
        end up here.{" "}
        <Link href="/faq">Read more in the FAQ.</Link>
      </p>
    ),
  },
  {
    q: "How much does investor property insurance cost?",
    a: (
      <p>
        Single family rental: $800 to $1,800 per year. STR: $1,200 to $3,000.
        Small apartment building: $3,000 to $8,000. Commercial: $2,500 to
        $10,000+. Your number depends on location, construction type, claims
        history, and a few other factors.{" "}
        <Link href="/how-much-does-real-estate-investor-insurance-cost">
          See the full cost breakdown.
        </Link>
      </p>
    ),
  },
  {
    q: "What states do you write in?",
    a: (
      <p>
        AZ, CA, CO, ID, MT, NM, NV, OR, TX, UT, WA, and WY. The 12 western
        states. We have carriers in every market we serve.
      </p>
    ),
  },
];

const assetCards = [
  {
    href: "/rentals-rehabs",
    title: "Rentals & Rehabs",
    desc: "1-4 unit residential, vacant, and properties under renovation.",
  },
  {
    href: "/short-term-rentals",
    title: "Short-Term Rentals",
    desc: "Airbnb, VRBO, and vacation properties with host liability.",
  },
  {
    href: "/ground-up-construction",
    title: "Ground-Up Construction",
    desc: "Builders risk for new builds and major renovations.",
  },
  {
    href: "/multifamily",
    title: "5+ Unit Multifamily",
    desc: "Apartments, student housing, and hotels.",
  },
  {
    href: "/commercial-property",
    title: "Commercial Property",
    desc: "Office, retail, warehouse, industrial, and mixed-use.",
  },
  {
    href: "/contact",
    title: "Not sure?",
    desc: "We'll figure it out together. Call or text.",
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
            acceptedAnswer: { "@type": "Answer", text: typeof f.a === "string" ? f.a : "" },
          })),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-bg via-surface to-surface-2 text-white">
        <div className="container-narrow py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-flame">
            {site.tagline}
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Real Estate Investor Insurance.
            <br />
            <span className="text-flame">Built for Investors, Not Homeowners.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-foreground sm:text-xl">
            We insure every asset class: rentals, rehabs, short-term rentals,
            apartments, and commercial property. {site.carrierCount} carrier
            markets. Western US specialists.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/get-a-quote" className="btn-primary w-full text-lg sm:w-auto">
              Get a Quote
            </Link>
            <a href={site.phoneHref} className="btn-secondary w-full bg-surface-2 text-lg sm:w-auto">
              {site.phoneCTA}
            </a>
          </div>

          <div className="mt-10 grid gap-3 text-sm text-foreground sm:grid-cols-2 md:grid-cols-4">
            {[
              "10+ carrier markets",
              "Every asset class",
              "12 western states",
              "Independent agency",
            ].map((b) => (
              <div key={b} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-flame text-xs font-bold text-white">
                  ✓
                </span>
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Asset class cards */}
      <section className="container-narrow py-16">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          Coverage for every asset class.
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted sm:text-lg">
          Investor property is not a single product. The right form, the right
          carrier, and the right limits depend on what you actually own. Pick
          your asset class to see how we structure coverage for it.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {assetCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-lg border border-border bg-surface-2 p-6 transition hover:border-flame hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-foreground group-hover:text-flame">
                {card.title}
              </h3>
              <p className="mt-2 text-base text-muted">{card.desc}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-flame">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Problem section */}
      <section className="bg-surface">
        <div className="container-narrow py-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Most agents treat investor property like homeowner insurance.
            <br />
            <span className="text-flame">Your property is a business asset.</span>
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-lg text-muted">
            <p>
              Vacancy clauses, loss of rents, ordinance and law, habitational
              liability. These are not optional. They are the difference
              between a claim that gets paid and one that does not.
            </p>
            <p>
              We specialize in investor insurance. We know which carriers
              write your asset class, what coverage you actually need, and how
              to structure a policy that works when something goes wrong.
            </p>
            <p className="font-semibold text-foreground">
              That's the whole job.
            </p>
          </div>
        </div>
      </section>

      {/* Guide section */}
      <section className="container-narrow py-16">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          We know investor insurance.
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg text-muted">
          <p>
            Vantage Point Risk Partners is an independent insurance agency
            specializing in real estate investor coverage. {site.carrierCount}{" "}
            carrier markets. Every asset class.
          </p>
          <p>{site.serviceArea}.</p>
          <p className="font-semibold text-foreground">
            We work for you. Not the insurance company.
          </p>
        </div>
      </section>

      {/* 3-step plan */}
      <section className="bg-bg text-white">
        <div className="container-narrow py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Get covered in 3 steps.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "1",
                title: "Tell us about your property.",
                body: "Asset class, location, how it's used. Takes 60 seconds.",
              },
              {
                n: "2",
                title: "We shop 10+ carrier markets.",
                body: "We find the right policy for your specific asset, not a generic landlord form.",
              },
              {
                n: "3",
                title: "You get covered.",
                body: "We handle the paperwork. You get back to investing.",
              },
            ].map((s) => (
              <div key={s.n} className="rounded-lg border border-border bg-surface p-6">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-flame text-xl font-black">
                  {s.n}
                </div>
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-base text-muted">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/get-a-quote" className="btn-primary text-lg">
              Start My Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Carrier strip */}
      <section className="container-narrow py-16">
        <CarrierStrip />
      </section>

      {/* FAQ Preview */}
      <section className="bg-surface">
        <div className="container-narrow py-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Common questions.
          </h2>
          <p className="mt-2 text-lg text-muted">
            Quick answers to what investors ask us most.
          </p>
          <div className="mt-8">
            <FAQAccordion items={homeFAQs} />
          </div>
          <div className="mt-6 text-center">
            <Link href="/faq" className="btn-secondary">
              See all 25 questions
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        heading="Every property type. Every investor stage."
        sub="Get a quote in 60 seconds. We'll have options back to you fast."
      />
    </>
  );
}
