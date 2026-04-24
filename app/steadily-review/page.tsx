import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Steadily Insurance Review, Honest Assessment for Real Estate Investors",
  description:
    "Steadily insurance review. Self-service landlord platform, all 50 states, own carrier. Best for: single-property landlords. Where they fall short: portfolios, complex risk, no local advisory.",
};

const faqs = [
  {
    q: "Is Steadily a good landlord insurance company?",
    a: "Steadily is the largest dedicated landlord insurance specialist in the US. They are a strong fit for investors with a single SFR or condo who want fast, online, self-service quoting and binding. They have less depth for portfolio investors, complex asset classes, or anyone who wants a real broker relationship.",
  },
  {
    q: "What states does Steadily cover?",
    a: "Steadily writes landlord insurance in all 50 states plus DC. They run their own carrier (Steadily Insurance Company, AZ-based) and they are also appointed with multiple external carriers. They have state-by-state landing pages for every state, though some of the content is templated and not always locally accurate.",
  },
  {
    q: "What is Steadily not good for?",
    a: "Steadily is not built for portfolio investors who need a real broker relationship, multi-asset programs (commercial, trucking, personal lines), or proactive renewal advisory. The model is self-service and transactional. For an investor who wants someone to call them before renewal to flag a carrier appetite change, Steadily is not the right fit.",
  },
  {
    q: "Is Steadily cheaper than an independent agent?",
    a: "Sometimes for a simple single-property profile. The catch is that Steadily can only write through their own program. An independent broker who shops 10+ carriers can often beat the Steadily quote on the same property, especially for older buildings, properties in higher-risk areas, or anything with a prior claim. The right answer is to compare.",
  },
];

export default function SteadilyReviewPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Review",
          itemReviewed: {
            "@type": "Organization",
            name: "Steadily Insurance",
            url: "https://steadily.com",
          },
          author: {
            "@type": "Organization",
            name: "Vantage Point Risk Partners",
          },
          reviewBody:
            "Steadily is the largest dedicated landlord insurance specialist in the US. Strong for single-property investors who want fast self-service. Less suited for portfolio investors and complex asset classes.",
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
        title="Steadily Insurance Review."
        sub="Steadily calls itself the largest landlord insurance specialist in the US. Here is what they do well, where they fall short, and which investor profile fits."
      />
      <Breadcrumbs
        items={[
          { label: "Compare Agencies", href: "/real-estate-investor-insurance-companies" },
          { label: "Steadily" },
        ]}
      />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          Steadily is a tech-first landlord insurance platform headquartered
          in Austin, Texas. Founded in 2020, they have grown fast: $40B+ in
          risk under management, all 50 states plus DC, and recognition on
          the Inc. 5000 multiple times. They run their own carrier
          (Steadily Insurance Company, AZ-based) and write through external
          carriers as well. Their core product is online self-service
          landlord insurance quoting on DP-1 and DP-3 forms covering single
          family rentals, multifamily, condos, short-term rentals,
          manufactured homes, and Airbnbs.
        </p>

        <h2>What Steadily does well</h2>
        <p>
          Speed is the headline. An investor with a standard single family
          rental can get a quote online in minutes and bind same day. The
          platform is well-built. The website is fast. The state-by-state
          landing pages are the most developed in the space, with FAQs,
          glossaries, a Landlord Hub resource center, and a Landlord 101
          quiz. The content operation is real and has been cited as the
          most active in landlord insurance.
        </p>
        <p>
          Carrier integration is a strength too. Because Steadily owns the
          carrier, the underwriting, binding, and policy issuance happen in
          a single tech stack. The customer gets an instant binder. The
          experience is closer to buying a SaaS product than buying
          insurance.
        </p>

        <h2>Where Steadily falls short</h2>
        <p>
          The self-service model is the strength and the weakness. There is
          no broker relationship. No human is calling you before renewal to
          flag a carrier appetite change. No advocate is fighting with the
          adjuster on a contested claim. If your situation is simple, that
          might not matter. If your situation is anything other than
          simple, it does.
        </p>
        <p>
          The state pages are templated. Steadily's Washington state page
          actually describes Washington D.C. (Capitol Hill, Georgetown,
          government employers) rather than Washington state. It is the
          kind of mistake a content team makes when they are scaling fast
          and not really paying attention to local accuracy. For investors
          who want a partner who actually knows the local market, that is
          a tell.
        </p>
        <p>
          Steadily writes landlord insurance only. No commercial property,
          no trucking, no personal lines. An investor who also runs a
          business or has a fleet has to maintain separate agency
          relationships for each line, which gets expensive and
          fragmented.
        </p>

        <h2>Who Steadily is best for</h2>
        <p>
          A first-property investor or single-property landlord with a
          standard SFR who values speed over advisory and does not need
          coverage outside of residential investor property. The investor
          who wants the equivalent of buying a flight on Expedia: pick the
          option, click buy, get the confirmation.
        </p>

        <h2>Who Steadily is not best for</h2>
        <ul>
          <li>Portfolio investors with 5+ properties who want one renewal date and proactive re-shopping.</li>
          <li>Investors with mixed asset classes (residential plus commercial, residential plus STR, etc.).</li>
          <li>Investors with complex risk: vacant rehab, mobile home park, mixed-use, larger multifamily.</li>
          <li>Investors who also need commercial, trucking, or personal lines.</li>
          <li>Investors in OR, WA, ID, or other PNW states who value local market knowledge.</li>
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
          Steadily is good at what they do. For the simple-single-property
          investor who wants a fast online quote, they are a legitimate
          option. For everyone else, an independent broker shopping 10+
          carriers will usually do better on coverage match, often beat
          them on price, and definitely beat them on relationship.
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
            href: "/obie-insurance-review",
            title: "Obie review",
            desc: "InsurTech embedded in lender platforms.",
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
