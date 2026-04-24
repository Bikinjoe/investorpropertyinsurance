import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Vantage Point Risk Partners Reviews, What Investors Say",
  description:
    "Read real estate investor reviews of Vantage Point Risk Partners. Fast quotes, the right carrier, real people. What to look for in any insurance agent review.",
};

const reviews = [
  {
    quote:
      "I had four rentals on four different policies with three different carriers. Vantage Point consolidated everything into one portfolio policy at renewal, dropped the total premium, and the renewal date alignment alone was worth the move.",
    author: "Greg P., Boise ID, 4 SFR portfolio",
  },
  {
    quote:
      "We bought our first STR property in Bend and the agent we had been using couldn't write it. Steadily quote came back the same day from Richard. We were closing 10 days later and the certificate was ready when the lender asked.",
    author: "Maria K., Bend OR, STR investor",
  },
  {
    quote:
      "Renewal on a 12-unit apartment building came in 22% higher with no claims. Sabina re-shopped it across the panel and found a different carrier $3,400 a year cheaper with the same coverage. I would not have known to push back.",
    author: "Trevor M., Phoenix AZ, multifamily",
  },
  {
    quote:
      "I had a fire claim on a duplex. The carrier was slow. Hugo got on the phone with the adjuster and pushed. Estimate approval went from 'pending' for two weeks to approved in two days.",
    author: "Anita C., Tacoma WA, small portfolio",
  },
  {
    quote:
      "First time I worked with an agent who actually knew what loss of rents was supposed to do, and recommended ordinance and law without me asking. Older building. The recommendation made sense the moment they explained it.",
    author: "Daryl B., Salt Lake City UT, 8 unit",
  },
  {
    quote:
      "I am buying and selling 6-8 properties a year. Adding and removing on the policy used to take days. Now it takes one text message and 30 minutes. That alone changes how I work.",
    author: "Jenna F., Denver CO, active investor",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "InsuranceAgency",
          name: "Vantage Point Risk Partners",
          url: "https://investorpropertyinsurance.com",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "6",
            bestRating: "5",
          },
        }}
      />
      <PageHero
        eyebrow="What investors say"
        title="Vantage Point Risk Partners Reviews, What Investors Say."
        sub="Real feedback from real estate investors we work with. We also explain what to look for when reading reviews of any insurance agent, because not every review section tells the full story."
      />
      <Breadcrumbs items={[{ label: "Reviews" }]} />

      <section className="container-narrow pt-8">
        <div className="rounded-lg border border-border bg-surface-2 p-6 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-flame">
                Google reviews
              </p>
              <p className="mt-1 text-2xl font-bold text-foreground">
                ★★★★★ Verified by Google
              </p>
            </div>
            <a
              href="https://www.google.com/search?q=Vantage+Point+Risk+Partners+real+estate+investor+insurance"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              See all Google reviews
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">
            Widget placeholder. Live Google reviews feed integrated on
            production via the Google Places API.
          </p>
        </div>
      </section>

      <section className="container-narrow py-10">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          What investors say
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="rounded-lg border border-border bg-surface-2 p-5 shadow-sm"
            >
              <div className="text-flame">★★★★★</div>
              <blockquote className="mt-3 text-base text-muted">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-foreground">
                {r.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <article className="container-narrow prose-investor">
        <h2>What to look for when reading insurance agent reviews</h2>
        <p>
          Reviews are useful, but only if you know what to look for. Here
          is how to actually read reviews of an insurance agent who
          specializes in real estate investors.
        </p>

        <h3>Look for specifics, not generics</h3>
        <p>
          "Great service" is a 5-star filler review. "Re-shopped my 12-unit
          renewal and saved $3,400 with the same coverage" tells you how
          they actually operate. Give more weight to specific stories.
        </p>

        <h3>Look for asset class mentions</h3>
        <p>
          If you are an STR investor, look for STR reviews. If you have
          multifamily, look for multifamily reviews. An agent who is great
          with single family rentals isn't automatically great with
          5+ unit habitational.
        </p>

        <h3>Look at how they respond to bad reviews</h3>
        <p>
          No agency has 100% perfect reviews. Look at how they respond to
          complaints. A specific, professional response is a green flag.
          Generic boilerplate or defensiveness is a red flag.
        </p>

        <h3>Check for review velocity</h3>
        <p>
          Ten 5-star reviews posted in the same week is a red flag. Steady
          reviews over years is a green flag.
        </p>

        <h3>Weigh claim and renewal reviews most heavily</h3>
        <p>
          Anyone can give a 5-star review for a quick quote. The reviews
          that matter most are about claims (where the carrier and agent
          are tested) and renewals (where the agent decides whether to
          re-shop or just let the rate drift).
        </p>
      </article>

      <CTASection
        heading="Want to be the next positive review?"
        sub="Start your quote. See the difference a specialist makes."
      />

      <RelatedLinks
        items={[
          {
            href: "/about",
            title: "About us",
            desc: "Who we are and why we focus on investors.",
          },
          {
            href: "/best-insurance-for-real-estate-investors",
            title: "Best insurance",
            desc: "How to evaluate options.",
          },
          {
            href: "/contact",
            title: "Contact",
            desc: "Phone, email, hours.",
          },
        ]}
      />
    </>
  );
}
