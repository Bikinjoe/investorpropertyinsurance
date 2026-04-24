import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "NREIG Review, Honest Assessment for Real Estate Investors",
  description:
    "NREIG (National Real Estate Insurance Group) review. BiggerPockets-endorsed agency with per-property monthly billing. Best for: REI community investors with active portfolios. Where they fall short: complex commercial, no local presence.",
};

const faqs = [
  {
    q: "What is NREIG and who owns it?",
    a: "NREIG (National Real Estate Insurance Group) is a real estate investor insurance agency headquartered in Kansas City, MO. They have been in business since 2007 and are one of the longest-running dedicated REI insurance agencies in the US. They are the official insurance partner of BiggerPockets, which means BiggerPockets links to insurance route to NREIG.",
  },
  {
    q: "How does NREIG's per-property monthly billing work?",
    a: "NREIG uses a per-property monthly billing model rather than annual policy terms. Investors add and remove properties from the program and the billing adjusts each month. This fits the cash flow rhythm of an active investor portfolio (frequent buying, selling, and turnover). The trade-off is that the per-property pricing can get expensive at scale.",
  },
  {
    q: "What does NREIG cover?",
    a: "NREIG covers fix-and-flip properties, rental properties, vacant properties, properties under renovation, and portfolios. Coverage is on a program structure (a proprietary insurance program rather than direct-to-carrier). They specialize in the real estate investor segment and do not write outside it.",
  },
  {
    q: "What is NREIG not good for?",
    a: "NREIG is not the strongest fit for: complex commercial property (their program is built for residential investor risk), large multifamily or hospitality, investors who want transparent pricing or self-service quoting, and investors who need cross-line coverage (trucking, personal, business). The website is also a JavaScript SPA that does not render for content scrapers, which limits their organic SEO presence.",
  },
];

export default function NREIGReviewPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Review",
          itemReviewed: {
            "@type": "Organization",
            name: "National Real Estate Insurance Group (NREIG)",
            url: "https://nreig.com",
          },
          author: {
            "@type": "Organization",
            name: "Vantage Point Risk Partners",
          },
          reviewBody:
            "NREIG is the BiggerPockets-endorsed REI insurance agency with per-property monthly billing. Strong for active portfolio investors in the REI community. Less suited for complex commercial or non-standard asset classes.",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHero
        eyebrow="Agency review"
        title="NREIG Review."
        sub="National Real Estate Insurance Group has been writing REI insurance since 2007. They are BiggerPockets' official partner, with a per-property monthly billing model that fits active portfolios. Here is who they fit and where they fall short."
      />
      <Breadcrumbs
        items={[
          { label: "Compare Agencies", href: "/real-estate-investor-insurance-companies" },
          { label: "NREIG" },
        ]}
      />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          NREIG is one of the oldest dedicated real estate investor
          insurance agencies in the US. Founded in 2007, headquartered in
          Kansas City, Missouri, with a national footprint across all 50
          states. They are the official insurance partner of BiggerPockets,
          which has been a major distribution channel for them: every
          BiggerPockets insurance link routes to NREIG.
        </p>

        <h2>What NREIG does well</h2>
        <p>
          REI community presence. NREIG has built their brand inside the
          investor community over almost two decades. They show up at REI
          conferences, sponsor BiggerPockets content, and have built
          relationships with REI educators, podcasters, and active
          investors. Inside the BiggerPockets and broader REI community,
          they are a known name.
        </p>
        <p>
          The per-property monthly billing model fits the cash flow rhythm
          of an active investor portfolio. You add a property, the billing
          adjusts. You sell a property, the billing adjusts. There is no
          annual renewal cycle to manage across each individual property,
          which simplifies administration for investors who buy and sell
          frequently.
        </p>
        <p>
          The investor specialty focus means NREIG understands investor
          concepts (vacancy, rehab, fix-and-flip, portfolio management)
          better than a generalist carrier or agent. They do not have to
          be educated about how investors actually use property.
        </p>

        <h2>Where NREIG falls short</h2>
        <p>
          The website is a JavaScript-rendered single page application
          that does not load for content scrapers. This is a real
          technical issue that hurts their organic SEO and makes their
          content harder to find through search. For an agency that
          relies heavily on community-driven distribution, the SEO
          weakness is offset by BiggerPockets traffic, but it is still a
          gap.
        </p>
        <p>
          Pricing is not transparent. There is no online quote tool, no
          pricing calculator, no way for an investor to estimate cost
          without going through a manual intake. Compared to Steadily and
          Obie's instant-quote experiences, NREIG feels older.
        </p>
        <p>
          The per-property monthly billing model that helps small
          portfolios can become expensive at scale. For a portfolio of 30+
          properties, a true blanket policy structure (which other
          carriers offer) often beats the NREIG per-property pricing.
        </p>
        <p>
          Coverage breadth is residential investor focused. NREIG does
          not write commercial property, trucking, personal lines, or
          most specialty asset classes (large multifamily, mobile home
          parks, self-storage, hospitality). An investor who needs cross-line
          coverage has to maintain other agency relationships for the
          rest.
        </p>
        <p>
          No local presence anywhere in the western US. NREIG does not
          have offices, staff, or community presence in OR, WA, ID, or
          any of the other VPR-served states. For investors who value
          local market knowledge and local relationships, that gap is
          meaningful.
        </p>

        <h2>Who NREIG is best for</h2>
        <p>
          A BiggerPockets-active investor with 5+ properties who values
          the REI community connection and the per-property monthly
          billing simplicity. An investor who is comfortable with manual
          intake and not focused on instant online quoting.
        </p>

        <h2>Who NREIG is not best for</h2>
        <ul>
          <li>Investors who want instant online quoting or transparent pricing.</li>
          <li>Investors with large portfolios (30+ properties) where a true blanket policy beats per-property monthly pricing.</li>
          <li>Investors with complex commercial property, large multifamily, or specialty asset classes.</li>
          <li>Investors who need trucking, personal lines, or commercial coverage under the same agency.</li>
          <li>Investors in the western US who value local market knowledge and local relationships.</li>
        </ul>

        <h2>Common questions</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}

        <h2>The bottom line</h2>
        <p>
          NREIG is a credible, established option for active REI community
          investors who want a name they recognize from BiggerPockets and
          a per-property monthly billing model. For investors with larger
          portfolios, complex asset classes, or a need for local
          relationships, an independent broker (us, RiskWell, or others)
          will usually be a better fit.
        </p>
      </article>

      <section className="container-narrow pb-10">
        <div className="rounded-lg border border-flame bg-flame/5 p-6">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Want to compare options?
          </h2>
          <p className="mt-2 text-base text-muted sm:text-lg">
            We shop 10+ carriers and specialize in western US real estate
            investors. Call or text 541-681-8793 or get a quote below.
          </p>
          <div className="mt-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link href="/get-a-quote" className="btn-primary w-full sm:w-auto">
              Get a Quote
            </Link>
            <a href="tel:+15416818793" className="btn-secondary w-full sm:w-auto">
              Call or text 541-681-8793
            </a>
          </div>
        </div>
      </section>

      <CTASection />

      <RelatedLinks
        items={[
          {
            href: "/real-estate-investor-insurance-companies",
            title: "Compare all agencies",
            desc: "Side by side comparison of every major REI insurance option.",
          },
          {
            href: "/portfolio-landlord-insurance",
            title: "Portfolio landlord coverage",
            desc: "How blanket and scheduled portfolio policies work.",
          },
          {
            href: "/riskwell-review",
            title: "RiskWell review",
            desc: "The other boutique REI specialist.",
          },
        ]}
      />
    </>
  );
}
