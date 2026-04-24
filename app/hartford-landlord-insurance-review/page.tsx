import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Hartford Landlord Insurance Review for Real Estate Investors",
  description:
    "The Hartford for landlord insurance. What they write well for investors, what they do not, and where they fit in a portfolio. Honest carrier review from an independent broker.",
};

export default function HartfordReviewPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Review",
          itemReviewed: {
            "@type": "Organization",
            name: "The Hartford",
          },
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          reviewBody:
            "The Hartford is a strong landlord insurance carrier for standard residential investor properties. Underwriting is conservative; appetite is best for newer, well-maintained, occupied properties. Limited fit for vacant, rehab, or specialty asset classes.",
        }}
      />
      <PageHero
        eyebrow="Carrier review"
        title="The Hartford Landlord Insurance Review."
        sub="The Hartford is one of the standard markets we write investor business through. Honest assessment of where they fit, where they do not, and how they compare to other carriers in our panel."
      />
      <Breadcrumbs items={[{ label: "Hartford" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          The Hartford is a long-established standard market carrier with
          investor property appetite as part of a broader commercial book.
          We are appointed with The Hartford and write investor accounts
          through them when the property profile fits. Honest assessment
          of where they win and where they do not.
        </p>

        <h2>What The Hartford writes well</h2>
        <p>
          Standard residential investor properties: 1-4 unit rentals built
          after 1980, in good condition, currently rented to long-term
          tenants, with a clean 5-year claims history. The Hartford prices
          competitively in this lane and pairs the policy with strong
          claims service.
        </p>
        <p>
          Multi-line investors. The Hartford writes commercial property,
          general liability, business owners' policies, workers' comp, and
          umbrella in addition to landlord. For an investor who also runs
          a business or owns commercial property, bundling under one
          carrier can simplify administration and unlock multi-line
          discounts.
        </p>
        <p>
          Established carrier infrastructure. AM Best rated A+. Long
          history of paying claims. Strong reinsurance backing. For
          investors who value carrier stability over price, The Hartford
          is a credible choice.
        </p>

        <h2>What The Hartford does not write well</h2>
        <p>
          Older properties (pre-1980) without documented updates. The
          Hartford's appetite tightens significantly for properties with
          knob-and-tube wiring, fuse boxes, galvanized plumbing, or any
          unaddressed asbestos or lead exposure. Properties with documented
          upgrades often qualify but unupgraded older buildings frequently
          decline.
        </p>
        <p>
          Vacant or rehab properties. The Hartford's standard landlord
          form is built for occupied properties. Vacant property periods
          beyond 30-60 days trigger coverage restrictions. Active
          renovation typically requires a different carrier.
        </p>
        <p>
          Short-term rental and vacation property. The Hartford does not
          have a competitive STR product. For Airbnb or VRBO properties,
          we typically place with Steadily, Obie, REInsurePro, or other
          STR specialists.
        </p>
        <p>
          Specialty asset classes. Mobile home parks, self-storage, large
          multifamily (50+ units), assisted living, and most non-standard
          investor properties are outside The Hartford's appetite.
        </p>

        <h2>Who The Hartford is best for</h2>
        <ul>
          <li>Investor with a portfolio of 1-4 unit residential rentals built post-1980.</li>
          <li>Investor who values carrier stability and AM Best rating over the absolute lowest price.</li>
          <li>Investor with multi-line needs (residential investor plus commercial property plus business operations).</li>
          <li>Investor who wants strong claims handling reputation.</li>
        </ul>

        <h2>Who The Hartford is not best for</h2>
        <ul>
          <li>Investor with older buildings without documented updates.</li>
          <li>Investor with vacant, rehab, or short-term rental properties.</li>
          <li>Investor with mobile home parks, self-storage, or specialty asset classes.</li>
          <li>Investor chasing the absolute lowest premium quote.</li>
        </ul>

        <h2>How we use The Hartford in our panel</h2>
        <p>
          The Hartford is one of our 10+ carrier markets. We submit
          investor accounts to them when the property profile matches
          their appetite (newer, well-maintained, occupied, multi-line
          potential). When the profile does not match, we go to other
          carriers in our panel: REInsurePro, Steadily, Obie, Openly,
          Safeco, Travelers, Liberty Mutual, plus E&S markets. The point
          of working with an independent broker is having all of those
          options.
        </p>

        <h2>The bottom line</h2>
        <p>
          The Hartford is a credible standard market for the investor
          properties that fit their appetite. Underwriting is conservative
          but the experience is solid when the policy is in force. For
          properties that do not fit, the right answer is a different
          carrier from our panel.
        </p>
      </article>

      <section className="container-narrow pb-10">
        <div className="rounded-lg border border-flame bg-flame/5 p-6">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            We work with all of these carriers and more.
          </h2>
          <p className="mt-2 text-base text-muted sm:text-lg">
            We find the right one for your specific property. Get a quote.
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
            href: "/travelers-rental-property-insurance-review",
            title: "Travelers review",
            desc: "Another standard market option.",
          },
          {
            href: "/openly-landlord-insurance-review",
            title: "Openly review",
            desc: "Tech-forward standard market.",
          },
          {
            href: "/real-estate-investor-insurance-companies",
            title: "Compare agencies",
            desc: "Side by side: Steadily, Obie, NREIG, RiskWell, VPR.",
          },
        ]}
      />
    </>
  );
}
