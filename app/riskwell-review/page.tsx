import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "RiskWell Review, Honest Assessment for Real Estate Investors",
  description:
    "RiskWell insurance review. Texas-based boutique broker for real estate investors with strong REI community presence. Best for: Texas and Southeast investors. Where they fall short: not licensed in OR, WA, or ID.",
};

const faqs = [
  {
    q: "What is RiskWell and where are they based?",
    a: "RiskWell is a boutique commercial brokerage headquartered in McKinney, Texas. They focus on real estate investors as one of four practice verticals (alongside bowling/family entertainment centers, service contractors, and white-collar advisors). They have been recognized as a Best Practices Agency in 2025 and have insured 3,000+ investment properties.",
  },
  {
    q: "Where is RiskWell licensed?",
    a: "RiskWell is licensed in approximately 22 states with strong presence in Texas and the Southeast. Recent expansions have added states like Maryland, Nevada, and Utah. As of this review, they are not licensed in Oregon, Washington, or Idaho. Their footprint continues to expand but the Pacific Northwest is not yet covered.",
  },
  {
    q: "Who is RiskWell best for?",
    a: "RiskWell is a strong fit for Texas and Southeast investors with portfolios of 10+ properties, multifamily owners, and active flippers. Their content is investor-specific (NNN leases, wholetail properties, portfolio management) rather than generic landlord content. The Pace Morby testimonial signals serious REI community credibility.",
  },
  {
    q: "What is RiskWell not good for?",
    a: "Investors in OR, WA, or ID. RiskWell is not licensed in those states. Investors outside their 22-state footprint cannot work with them. Beyond geography, RiskWell is also a boutique agency without the tech-platform speed of Steadily or Obie, so investors who prioritize instant online quoting may prefer the InsurTech options.",
  },
];

export default function RiskWellReviewPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Review",
          itemReviewed: {
            "@type": "Organization",
            name: "RiskWell",
            url: "https://riskwell.com",
          },
          author: {
            "@type": "Organization",
            name: "Vantage Point Risk Partners",
          },
          reviewBody:
            "RiskWell is a Texas-based boutique broker focused on real estate investors. Strong REI community presence, deep specialization. Best for Texas and Southeast investors. Not licensed in OR, WA, or ID.",
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
        title="RiskWell Review."
        sub="RiskWell is a boutique Texas brokerage focused on real estate investors. The closest model to what we do, but with a different geographic footprint. Here is the honest comparison."
      />
      <Breadcrumbs
        items={[
          { label: "Compare Agencies", href: "/real-estate-investor-insurance-companies" },
          { label: "RiskWell" },
        ]}
      />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          RiskWell is a boutique commercial brokerage based in McKinney,
          Texas. They have been recognized as a Best Practices Agency in
          2025 and have insured 3,000+ investment properties as a posted
          milestone. Real estate investors are one of four practice
          verticals at the firm (alongside bowling and family entertainment
          centers, service contractors, and white-collar advisors).
          Founder-led, well established in Texas, and growing.
        </p>

        <h2>What RiskWell does well</h2>
        <p>
          Real REI specialization. RiskWell's blog covers NNN lease
          properties, wholetail properties, fix-and-flip insurance, and
          alternative asset classes. The content is written for
          professional investors, not for accidental landlords. They have
          a YouTube channel with investor-specific content. A Pace Morby
          testimonial sits on their site, which signals serious credibility
          inside the REI community.
        </p>
        <p>
          Asset class breadth within the investor segment. RiskWell
          explicitly covers rentals and rehabs, short-term rentals,
          ground-up construction, 5+ unit multifamily, commercial
          property, and what they call "alternative asset classes"
          (self-storage and warehouse get a mention). Among the boutique
          REI specialists, this is one of the wider menus.
        </p>
        <p>
          The boutique agency model. RiskWell is what a real estate
          investor-focused broker looks like done right: deep specialization,
          real community presence, real content, real understanding of
          investor needs. It is the model we admire and (independently)
          built our agency on.
        </p>

        <h2>Where RiskWell falls short</h2>
        <p>
          Geographic footprint. RiskWell is licensed in approximately 22
          states. They are strongest in Texas and have been expanding into
          parts of the Southeast. As of this review, they are not
          licensed in Oregon, Washington, or Idaho. For PNW investors,
          they simply are not an option.
        </p>
        <p>
          No state-specific content. RiskWell's content is good but not
          state-specific. They do not have Texas-specific landlord
          insurance pages, Florida-specific pages, or any other
          state-level content depth. That is a content gap for them, but
          relative to most competitors it is a small one.
        </p>
        <p>
          No tech platform. RiskWell is a brokerage, not a platform.
          Investors who want instant online quoting or self-service tools
          will prefer Steadily or Obie. RiskWell's model is the human
          broker, which is the right model for portfolio investors but
          not the fastest path to a single quote.
        </p>
        <p>
          Limited blog cadence. The blog is good but thin. Eight to ten
          posts total. For an agency with this much expertise, the
          content output is small relative to potential.
        </p>

        <h2>Who RiskWell is best for</h2>
        <p>
          A Texas, Florida, or Southeast portfolio investor with 10+
          properties who wants a boutique broker relationship. An
          investor who values the REI community credibility (Pace Morby
          tier) and is willing to work with a smaller, specialty firm
          rather than a national platform.
        </p>

        <h2>Who RiskWell is not best for</h2>
        <ul>
          <li>Investors in OR, WA, ID, or other PNW states. RiskWell is not licensed there.</li>
          <li>Investors who want instant online quoting or self-service.</li>
          <li>Investors with state-specific needs in markets RiskWell does not serve.</li>
          <li>Investors who need trucking or personal lines under the same agency (RiskWell is investor-focused only).</li>
        </ul>

        <h2>How we compare to RiskWell</h2>
        <p>
          We are similar in model: boutique independent broker, focused
          on real estate investors, with a real broker relationship and
          ability to shop multiple carriers. The differences are
          geography and breadth:
        </p>
        <ul>
          <li><strong>We are licensed in OR, WA, ID.</strong> RiskWell is not.</li>
          <li><strong>We are licensed in 12 western states</strong> (AZ, CA, CO, ID, MT, NM, NV, OR, TX, UT, WA, WY). RiskWell covers ~22 nationally with TX focus.</li>
          <li><strong>We cover commercial, trucking, and personal lines</strong> in addition to investor property. RiskWell is investor-focused only.</li>
          <li><strong>RiskWell has the bigger REI community profile</strong> nationally (Pace Morby, YouTube, blog). We are building locally in the PNW.</li>
        </ul>
        <p>
          For investors in our footprint, we are the closest equivalent
          experience to working with RiskWell. For investors in TX or the
          Southeast specifically, RiskWell is a legitimate option and we
          would not pretend otherwise.
        </p>

        <h2>Common questions</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}

        <h2>The bottom line</h2>
        <p>
          RiskWell is one of the few boutique REI brokerages doing this
          right. Their geographic footprint and asset class focus make
          them a strong fit for a specific kind of investor. For PNW
          investors and investors in our 12-state footprint, we are the
          equivalent local option.
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
            href: "/about",
            title: "About us",
            desc: "How we approach REI insurance for the western US.",
          },
          {
            href: "/best-insurance-for-real-estate-investors",
            title: "Best insurance for investors",
            desc: "How to evaluate any agent or platform.",
          },
        ]}
      />
    </>
  );
}
