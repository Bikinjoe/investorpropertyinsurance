import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Obie Insurance Review, Honest Assessment for Real Estate Investors",
  description:
    "Obie Insurance review. Tech-enabled landlord platform embedded in Kiavi, Visio, and other PropTech lenders. Best for: investors closing DSCR loans through partner platforms. Where they fall short: direct relationships, complex risk.",
};

const faqs = [
  {
    q: "What is Obie Insurance and who owns it?",
    a: "Obie is a tech-enabled landlord and investor insurance platform headquartered in Chicago. It is a venture-backed InsurTech, founded around 2018. They are licensed in all 50 states and partner with major PropTech firms (Kiavi, Visio Lending, MoFin, Liberty Mutual's Comparion). They write through multiple carriers including a Markel partnership announced in 2025.",
  },
  {
    q: "Is Obie the same as obie.com?",
    a: "No. The obie.com domain redirects to a hospitality company called Obie Companies. Obie Insurance lives at obieinsurance.com. The naming overlap causes confusion at the front end. If you searched for Obie and ended up at a hospitality site, the right URL is obieinsurance.com.",
  },
  {
    q: "Does Obie work with DSCR loans?",
    a: "Yes, this is one of their strongest channels. Obie is embedded in Kiavi and Visio's lending platforms, which means investors closing DSCR loans through those lenders often get Obie offered as an integrated insurance option. The integration is convenient. The trade-off is that Obie's quote may not be the most competitive once you compare across multiple carriers.",
  },
  {
    q: "What is Obie not good for?",
    a: "Obie is built for the embedded transaction, not for an ongoing broker relationship. They cover residential investor property well but do not write commercial, trucking, mobile home parks, self-storage, or many specialty asset classes. For a portfolio investor with mixed asset types or anyone who wants a real broker advocate, Obie is not the right fit.",
  },
];

export default function ObieReviewPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Review",
          itemReviewed: {
            "@type": "Organization",
            name: "Obie Insurance",
            url: "https://obieinsurance.com",
          },
          author: {
            "@type": "Organization",
            name: "Vantage Point Risk Partners",
          },
          reviewBody:
            "Obie is a tech-enabled landlord insurance platform with strong PropTech integrations (Kiavi, Visio, MoFin). Best for investors closing through partner lenders. Less suited for direct broker relationships and specialty asset classes.",
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
        title="Obie Insurance Review."
        sub="Obie is the InsurTech play in landlord insurance. Embedded in lender platforms like Kiavi and Visio. Here is who it fits, where it falls short, and how it compares."
      />
      <Breadcrumbs
        items={[
          { label: "Compare Agencies", href: "/real-estate-investor-insurance-companies" },
          { label: "Obie" },
        ]}
      />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          Obie is a venture-backed InsurTech focused on landlord and
          investor property insurance. Headquartered in Chicago, founded
          around 2018, licensed in all 50 states. The model is tech-enabled
          embedded insurance: Obie's quote engine is integrated into the
          checkout flow of major PropTech lenders (Kiavi, Visio Lending,
          MoFin) and platforms (Liberty Mutual's Comparion network). When
          you close a DSCR loan with Kiavi, Obie's quote is right there.
        </p>

        <h2>What Obie does well</h2>
        <p>
          Distribution. Obie wins customers at the moment of transaction.
          An investor closing a DSCR loan with a partner lender gets
          Obie's quote integrated into the closing process. No separate
          shopping, no separate forms, no separate carrier conversations.
          The convenience is real.
        </p>
        <p>
          The technology stack is strong. The Knowledge Hub and Risk Map
          tools provide actual investor-relevant content. Obie has won
          HousingWire Tech100 three years in a row, ranked #350 on the
          2025 Inc. 5000, and is rated #9 in insurance on that list. The
          Markel carrier partnership announced in 2025 expanded their
          underwriting capacity meaningfully.
        </p>
        <p>
          For a tech-first investor who wants the insurance to feel like
          part of the lending stack rather than a separate vendor
          relationship, Obie delivers that experience.
        </p>

        <h2>Where Obie falls short</h2>
        <p>
          The direct-consumer experience is secondary to the partner
          channel. Obie is built to win business through PropTech
          integrations. Investors who find Obie directly (not through a
          lender) get a competent product but not the proactive advisory
          that a real broker provides.
        </p>
        <p>
          Coverage breadth is residential investor only. No commercial
          property, no trucking, no specialty asset classes (mobile home
          parks, self-storage, hospitality). An investor who needs more
          than residential investor property has to maintain another
          agency relationship for the rest.
        </p>
        <p>
          The Obie pricing through partner channels is not always the
          cheapest. The convenience of embedded insurance comes at a
          quote that often loses to a real broker shopping the same
          property across multiple carriers. Always worth comparing.
        </p>
        <p>
          Naming confusion is a small but real friction: obie.com
          redirects to a hospitality company, and a customer trying to
          find Obie Insurance has to know to use obieinsurance.com.
        </p>

        <h2>Who Obie is best for</h2>
        <p>
          An investor closing a DSCR loan with Kiavi, Visio, or MoFin
          who wants the insurance integrated into the lending stack and
          values speed over price-shopping. A first-time investor who
          appreciates the embedded experience and does not yet know they
          are leaving money on the table by not comparing.
        </p>

        <h2>Who Obie is not best for</h2>
        <ul>
          <li>Investors who want a real broker relationship and proactive renewal advisory.</li>
          <li>Investors with portfolios across multiple asset classes (commercial, multifamily, specialty).</li>
          <li>Investors who also need trucking or personal lines under the same agency.</li>
          <li>Investors who want to shop the policy across multiple carriers, not just Obie's program.</li>
          <li>Investors with non-standard properties (vacant, rehab, MHP, self-storage, mixed-use).</li>
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
          Obie is well built for what they target: embedded landlord
          insurance through PropTech lender platforms. If you are
          closing a DSCR loan with Kiavi or Visio and value the
          integrated experience, Obie is a legitimate option. If you
          want a broker who shops your account across 10+ carriers and
          handles your full insurance program, Obie is not designed for
          that role.
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
            desc: "Side by side: Steadily, Obie, NREIG, RiskWell, VPR.",
          },
          {
            href: "/dscr-loan-insurance",
            title: "DSCR loan coverage",
            desc: "Insurance built for DSCR loan requirements.",
          },
          {
            href: "/steadily-review",
            title: "Steadily review",
            desc: "The other big national InsurTech.",
          },
        ]}
      />
    </>
  );
}
