import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Steadily Insurance Carrier Review for Real Estate Investors",
  description:
    "Steadily as a carrier (not just a brokerage). Their own DP-1 and DP-3 forms, all 50 states, fast binding. What investors should know about Steadily as a market in an independent broker's panel.",
};

export default function SteadilyCarrierReviewPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Review",
          itemReviewed: { "@type": "Organization", name: "Steadily Insurance Company" },
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          reviewBody:
            "Steadily is both a brokerage and a carrier (Steadily Insurance Company, AZ-based). The carrier writes DP-1 and DP-3 landlord forms in all 50 states. As a market in an independent broker's panel, Steadily often competes on standard SFR investor property.",
        }}
      />
      <PageHero
        eyebrow="Carrier review"
        title="Steadily Insurance Carrier Review."
        sub="Steadily is both a brokerage and a carrier (Steadily Insurance Company, AZ-based). They write their own DP-1 and DP-3 landlord forms. Here is what to know about Steadily as a market in our panel."
      />
      <Breadcrumbs items={[{ label: "Steadily as Carrier" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          Steadily is a unique player in landlord insurance: they are both
          a brokerage (steadily.com self-service platform) and a carrier
          (Steadily Insurance Company, AZ-based). When a quote comes back
          from Steadily, it is often through their own carrier rather than
          a third-party market. They claim $40B+ in risk under management
          and write in all 50 states.
        </p>
        <p>
          For investors working with an independent broker, Steadily can
          appear in two ways: as a quote we generate through them as a
          market, or as a competing self-service quote that the investor
          got directly. Below is the carrier-side honest take.
        </p>

        <h2>What Steadily as a carrier writes well</h2>
        <p>
          Standard 1-4 unit residential investor property in all 50
          states. SFR rentals, duplex, triplex, fourplex on DP-3 forms.
          The product is purpose-built for landlord use. Pricing is
          often competitive for standard profiles.
        </p>
        <p>
          Short-term rental coverage. Steadily has STR-specific products
          for Airbnb and VRBO properties. This is one of the few
          landlord-focused carriers that does STR well.
        </p>
        <p>
          Manufactured home rentals. Steadily writes manufactured home
          rentals more readily than most standard carriers. Useful for
          investors with mobile home rental units.
        </p>
        <p>
          Fast underwriting. Because Steadily owns the carrier, the
          quote-to-bind cycle is faster than going through an external
          carrier. Same-day binding is common for standard profiles.
        </p>

        <h2>What Steadily as a carrier does not write well</h2>
        <p>
          Complex commercial property. Steadily is residential-focused.
          Commercial property goes to other markets in our panel.
        </p>
        <p>
          Larger multifamily. Steadily writes some 5-10 unit multifamily
          but larger properties (25+ units) typically go to commercial
          carriers (Travelers, Liberty Mutual, specialty markets).
        </p>
        <p>
          Specialty asset classes. Mobile home parks, self-storage,
          assisted living, and other specialty property classes are
          outside Steadily's standard appetite.
        </p>
        <p>
          Catastrophe-heavy areas. Steadily has tightened appetite in
          high-wildfire and high-wind zones, similar to other carriers.
        </p>

        <h2>How Steadily compares to other carriers in our panel</h2>
        <p>
          For standard SFR investor property, Steadily often competes
          with Safeco, Openly, Travelers, and Liberty Mutual on premium.
          Sometimes Steadily wins, sometimes another carrier does. The
          point of working with an independent broker is having all of
          those options on the same submission.
        </p>
        <p>
          For STR specifically, Steadily is one of our preferred markets
          alongside REInsurePro, Obie, and Proper. Coverage forms are
          purpose-built and pricing is usually competitive.
        </p>

        <h2>Steadily as a carrier vs Steadily self-service</h2>
        <p>
          An investor who quotes directly through steadily.com gets the
          same Steadily carrier behind the policy. The difference is the
          relationship: going through a broker means the policy is one
          option among 10+ being shopped on the same submission, plus
          you have an advocate at renewal and at claim. Going self-service
          means you are buying the Steadily quote without comparison and
          without ongoing advisory.
        </p>

        <h2>The bottom line</h2>
        <p>
          Steadily as a carrier is a real and credible option in our panel
          for standard residential investor property and STR. Often
          competitive on premium. Not the right fit for commercial,
          large multifamily, or specialty asset classes. We use them
          when the profile fits and we go to other markets when it does
          not.
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
            href: "/steadily-review",
            title: "Steadily as a brokerage",
            desc: "Review of Steadily as an agency, not just as a carrier.",
          },
          {
            href: "/obie-insurance-carrier-review",
            title: "Obie as a carrier",
            desc: "The other tech-forward landlord market.",
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
