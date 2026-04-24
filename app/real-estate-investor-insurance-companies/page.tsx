import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Real Estate Investor Insurance Companies, An Honest Comparison",
  description:
    "Honest comparison of Steadily, Obie, NREIG, RiskWell, and Vantage Point Risk Partners. Who fits which investor profile, what each does well, where each falls short.",
};

const agencies = [
  {
    slug: "steadily-review",
    name: "Steadily",
    bestFor: "Single family landlords who want fast, online self-service",
    states: "All 50",
    assets: "SFR, multifamily, condos, STR, manufactured",
    model: "Self-service / own carrier",
    pnw: "No local presence",
  },
  {
    slug: "obie-insurance-review",
    name: "Obie",
    bestFor: "Investors using Kiavi, Visio, or other PropTech lenders",
    states: "All 50",
    assets: "SFR, multifamily, apartments, condos",
    model: "Embedded InsurTech",
    pnw: "No local presence",
  },
  {
    slug: "nreig-review",
    name: "NREIG",
    bestFor: "BiggerPockets community investors with active portfolios",
    states: "All 50",
    assets: "Rentals, flips, vacant, rehab, portfolio",
    model: "Program / per-property monthly",
    pnw: "No local presence",
  },
  {
    slug: "riskwell-review",
    name: "RiskWell",
    bestFor: "Texas and Southeast portfolio investors wanting a boutique broker",
    states: "~22 states (TX focus)",
    assets: "Rentals, flips, multifamily, alt classes",
    model: "Boutique broker",
    pnw: "Not in OR / WA / ID",
  },
  {
    slug: null,
    name: "Vantage Point Risk Partners",
    bestFor: "Western US investors across every asset class, with a real broker relationship",
    states: "AZ, CA, CO, ID, MT, NM, NV, OR, TX, UT, WA, WY",
    assets: "Every asset class + commercial cross-sell",
    model: "Independent broker, 10+ carriers",
    pnw: "Local PNW roots",
    highlight: true,
  },
];

const reviews = [
  {
    name: "Steadily",
    headline: "Built for the small landlord. Fast, self-service, online.",
    body: [
      "Steadily is the largest landlord insurance specialist in the US by their own description, with $40B+ in risk under management. They run their own carrier (Steadily Insurance Company) and write in all 50 states. Their core product is self-service online quoting for landlord coverage on single family rentals, condos, multifamily, and short-term rentals.",
      "What they do well: speed and price. An investor with a single SFR who wants a quote in minutes and binding the same day will be happy with Steadily. Their state-by-state landing pages and FAQ library are the most developed content in the space. They built for the investor who wants a vending machine experience.",
      "Where they fall short: there is no local relationship, no broker advisory, and no commercial line cross-sell. Their state pages are templated, not localized (their Washington state page actually describes Washington D.C.). For a portfolio investor with multiple asset classes, complex risk, or a need for proactive renewal management, the self-service model leaves a lot on the table. There is also no ability to shop multiple carriers; everything goes through Steadily's own program.",
      "Best for: a first-property investor with a standard SFR who values speed over relationship.",
    ],
  },
  {
    name: "Obie",
    headline: "InsurTech embedded in lender platforms. Strong via PropTech.",
    body: [
      "Obie is a tech-enabled landlord insurance platform headquartered in Chicago. They are licensed in all 50 states and partner with Kiavi, Visio Lending, MoFin, Liberty Mutual's Comparion, and other PropTech firms. The model is embedded insurance: when you borrow from Kiavi, Obie's quote is right there in the closing flow.",
      "What they do well: distribution. Obie captures investors at the moment of transaction, before those investors think about shopping insurance separately. The Knowledge Hub and Risk Map tools are useful. They have won HousingWire Tech100 three years running and ranked #350 on the 2025 Inc. 5000.",
      "Where they fall short: the consumer experience outside of PropTech integrations is secondary. Obie is built for the partner-channel buyer, not for an investor who finds them directly and wants advisory. They cover standard residential investor risks well but do not cover commercial, trucking, or specialty asset classes.",
      "Best for: an investor closing a DSCR loan with Kiavi or Visio who wants to satisfy lender requirements quickly without thinking about it.",
    ],
  },
  {
    name: "NREIG",
    headline: "BiggerPockets-endorsed. Real REI brand.",
    body: [
      "NREIG (National Real Estate Insurance Group) has been writing real estate investor insurance since 2007. They are the official insurance partner of BiggerPockets, which means every BiggerPockets insurance link routes to them. Their core product is per-property monthly billing on a program structure that covers fix-and-flip, rentals, vacant, rehab, and portfolios.",
      "What they do well: REI community presence. NREIG shows up at REI conferences, has long-standing relationships in the investor community, and the per-property monthly billing model fits the cash flow of an active investor portfolio. They are one of the most established names in the niche.",
      "Where they fall short: the website is a JavaScript-rendered SPA that does not load for content scrapers, which likely hurts their organic SEO. There is no transparent pricing, no state-specific content, and no calculator or quote tool that an investor can self-serve. The per-property billing model can get expensive at scale. The brand is strong inside REI circles and weak outside them.",
      "Best for: a BiggerPockets-active investor with 5+ properties who values the REI community connection.",
    ],
  },
  {
    name: "RiskWell",
    headline: "Texas boutique. Closest model to what we do.",
    body: [
      "RiskWell is a boutique commercial brokerage based in McKinney, TX. They focus on real estate investors as one of four practice verticals (alongside bowling, service contractors, and white-collar advisors). They have a strong REI community presence in Texas, an active blog, a YouTube channel, and a Pace Morby testimonial. They have insured 3,000+ properties.",
      "What they do well: niche specialization with real local expertise. RiskWell is built to serve professional investors with 10+ properties, multifamily owners, and people running flip operations. The blog content is investor-specific, not generic landlord content. The model is what a real estate investor specialist should look like.",
      "Where they fall short: the geographic footprint. RiskWell is licensed in around 22 states, with strength in TX and the Southeast. They are not licensed in OR, WA, or ID. For a PNW investor, they are not an option.",
      "Best for: a Texas or Southeast portfolio investor who wants a boutique broker relationship and is not in the PNW.",
    ],
  },
  {
    name: "Vantage Point Risk Partners",
    headline: "Western US specialists with the broker relationship the others can't offer.",
    body: [
      "Vantage Point Risk Partners is an independent insurance brokerage focused on real estate investor coverage across the western US. We work with 10+ carrier markets (BHHC, Hartford, Openly, Liberty Mutual, Safeco, Travelers, Obie, Steadily, REInsurePro, plus E&S markets). Headquartered in Eugene, Oregon. Licensed in AZ, CA, CO, ID, MT, NM, NV, OR, TX, UT, WA, WY.",
      "What we do well: the asset class breadth and the relationship. We write rentals, rehabs, short-term rentals, house hacking, multifamily, mobile home parks, self-storage, commercial property, and DSCR-loan-compliant policies. We re-shop every renewal across the panel. We answer the phone. We understand investor concepts (CAP rate, NOI, LLC titling, portfolio strategy) without having to be educated on them. We are a real broker, not a self-service platform, not a captive agent.",
      "Where we are honest: we are not the cheapest single-family quote in 90 seconds. Steadily and Obie will beat us on speed for that profile. We are the right call when you want a broker who knows your portfolio, advocates at claim time, and handles your trucking or commercial business too.",
      "The white space we own: nobody else has local PNW investor positioning. Steadily covers OR/WA but the content is templated and sometimes wrong. Obie has no PNW presence. NREIG and RiskWell are not in the PNW. We are.",
      "Best for: western US investors with multiple asset classes, growing portfolios, or any complexity that benefits from a real broker relationship.",
    ],
    highlight: true,
  },
];

export default function CompaniesHubPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Real Estate Investor Insurance Companies",
          itemListElement: agencies.map((a, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: a.name,
            description: a.bestFor,
          })),
        }}
      />
      <PageHero
        eyebrow="The honest comparison"
        title="Real Estate Investor Insurance Companies: An Honest Comparison."
        sub="The investor insurance market has consolidated into a handful of national platforms and a few boutique brokers. Here is what each one does well, where each falls short, and which one fits which investor profile."
      />
      <Breadcrumbs items={[{ label: "Compare Agencies" }]} />

      <article className="container-narrow pt-8 pb-2">
        <div className="prose-investor">
          <p>
            If you are shopping real estate investor insurance, you have
            probably run across the same handful of names: Steadily, Obie,
            NREIG, RiskWell, plus the standard captive agents (State Farm,
            Allstate, Farmers). They are not all built the same way. Some
            are tech platforms. Some are brokers. Some are program
            administrators. The one that fits you depends on what kind of
            investor you are and what you actually need from your insurance
            relationship.
          </p>
          <p>
            Below is the comparison. Honest take on each, then a side-by-side
            table, then deeper reviews. We include ourselves at the bottom
            and we tell you when one of the others is the better fit for
            your situation.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">
          Side by side
        </h2>
        <div className="mt-4 overflow-x-auto rounded-lg border border-border">
          <table className="w-full border-collapse text-sm sm:text-base">
            <thead>
              <tr className="bg-surface-2">
                <th className="border-b border-border px-3 py-2 text-left font-semibold text-foreground">Agency</th>
                <th className="border-b border-border px-3 py-2 text-left font-semibold text-foreground">Best for</th>
                <th className="border-b border-border px-3 py-2 text-left font-semibold text-foreground">States</th>
                <th className="border-b border-border px-3 py-2 text-left font-semibold text-foreground">Asset classes</th>
                <th className="border-b border-border px-3 py-2 text-left font-semibold text-foreground">Model</th>
                <th className="border-b border-border px-3 py-2 text-left font-semibold text-foreground">Local PNW</th>
              </tr>
            </thead>
            <tbody>
              {agencies.map((a) => (
                <tr
                  key={a.name}
                  className={
                    a.highlight
                      ? "bg-flame/5 font-medium text-foreground"
                      : "bg-white"
                  }
                >
                  <td className="border-b border-border px-3 py-2 align-top text-foreground">
                    {a.slug ? (
                      <Link href={`/${a.slug}`} className="font-semibold text-flame hover:underline">
                        {a.name}
                      </Link>
                    ) : (
                      <span className="font-semibold">{a.name}</span>
                    )}
                  </td>
                  <td className="border-b border-border px-3 py-2 align-top text-muted">{a.bestFor}</td>
                  <td className="border-b border-border px-3 py-2 align-top text-muted">{a.states}</td>
                  <td className="border-b border-border px-3 py-2 align-top text-muted">{a.assets}</td>
                  <td className="border-b border-border px-3 py-2 align-top text-muted">{a.model}</td>
                  <td className="border-b border-border px-3 py-2 align-top text-muted">{a.pnw}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-investor mt-10">
          {reviews.map((r) => (
            <section
              key={r.name}
              className={`mt-10 rounded-lg border p-6 ${
                r.highlight
                  ? "border-flame bg-flame/5"
                  : "border-border bg-surface-2"
              }`}
            >
              <h2 className="!mt-0 text-2xl font-bold text-foreground sm:text-3xl">
                {r.name}
              </h2>
              <p className="!mt-2 text-base font-semibold text-flame sm:text-lg">
                {r.headline}
              </p>
              {r.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {r.name !== "Vantage Point Risk Partners" && (
                <p className="!mt-4">
                  <Link
                    href={`/${
                      r.name === "Steadily"
                        ? "steadily-review"
                        : r.name === "Obie"
                        ? "obie-insurance-review"
                        : r.name === "NREIG"
                        ? "nreig-review"
                        : "riskwell-review"
                    }`}
                  >
                    Full {r.name} review →
                  </Link>
                </p>
              )}
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-lg border border-flame bg-flame/5 p-6 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Compare for yourself.
          </h2>
          <p className="mt-3 text-base text-muted sm:text-lg">
            Get a quote from Vantage Point Risk Partners and see the
            difference a specialist makes.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/get-a-quote" className="btn-primary w-full sm:w-auto">
              Get a Quote
            </Link>
            <a
              href="tel:+15416818793"
              className="btn-secondary w-full sm:w-auto"
            >
              Call or text 541-681-8793
            </a>
          </div>
        </section>
      </article>

      <RelatedLinks
        items={[
          {
            href: "/best-insurance-for-real-estate-investors",
            title: "What 'best' means for investors",
            desc: "How to actually evaluate an agent and a policy.",
          },
          {
            href: "/landlord-insurance-vs-investor-insurance",
            title: "Landlord vs investor insurance",
            desc: "When each form fits.",
          },
          {
            href: "/real-estate-investor-insurance-reviews",
            title: "What our investors say",
            desc: "Reviews of working with Vantage Point Risk Partners.",
          },
        ]}
      />
    </>
  );
}
