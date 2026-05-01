import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import CarrierStrip from "@/components/CarrierStrip";
import { site } from "@/lib/site";

export const metadata = {
  title: "About, Real Estate Investor Insurance Specialists",
  description:
    "Vantage Point Risk Partners is an independent insurance agency specializing in real estate investor coverage across the western US. 20+ carriers, every asset class.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Real Estate Investor Insurance Specialists."
        sub="We focus on insurance for real estate investors. Every asset class, every investor stage, across the 12 western states. Not generalists writing investor as a side product."
      />
      <Breadcrumbs items={[{ label: "About" }]} />

      <section className="container-narrow pt-8">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          Who You're Working With
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8">
          <div className="overflow-hidden rounded-lg border border-border bg-surface-2 p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/richard-sweet.jpg"
              alt="Richard Sweet, Real Estate Investor Insurance Specialist"
              width={400}
              height={500}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-md object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Owner, Vantage Point Risk Partners
            </p>
            <h3 className="mt-1 text-2xl font-bold text-foreground sm:text-3xl">
              Richard Sweet
            </h3>
            <p className="mt-1 text-sm text-muted">
              Eugene, Oregon. Licensed in OR, WA, CA and across all 12 western states.
            </p>
            <div className="mt-5 space-y-3 text-base text-muted sm:text-lg">
              <p>
                Independent agent specializing in real estate investor
                insurance: rentals, rehabs, short-term rentals, multifamily,
                commercial property, and the specialty asset classes most
                generalist agents will not touch. Works with 20+ carrier
                markets that actively write investor business: BHHC,
                Hartford, Openly, Liberty Mutual, Safeco, Travelers, Obie,
                Steadily, REInsurePro, plus E&S markets.
              </p>
              <p>
                Focused on getting investor portfolios placed correctly,
                priced fairly, and re-shopped at every renewal. Most
                quotes turn around the same business day.
              </p>
              <p>
                Direct line: <a href={site.phoneHref} className="font-semibold text-flame hover:underline">{site.phone}</a>.
                Email: <a href={site.emailHref} className="font-semibold text-flame hover:underline">{site.email}</a>.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-4">
              <a href={site.phoneHref} className="btn-primary">
                {site.phoneCTA}
              </a>
              <a href={site.emailHref} className="btn-secondary">
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-narrow pt-10">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          The team
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {site.team.map((m) => (
            <div key={m.name} className="rounded-lg border border-border bg-surface-2 p-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-flame">
                {m.title}
              </p>
              <p className="mt-1 text-lg font-bold text-foreground">{m.name}</p>
              <p className="mt-2 text-sm text-muted">
                Quoting, binding, and servicing investor accounts across the
                western US.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-narrow pt-10">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Our Carrier Markets
        </h2>
        <p className="mt-3 text-base text-muted sm:text-lg">
          We work across 20+ carriers that actively write real estate
          investor business. The right carrier for you depends on the asset
          class, the property condition, the state, and the size of your
          portfolio.
        </p>
        <div className="mt-6">
          <CarrierStrip />
        </div>
      </section>

      <section className="container-narrow pt-10">
        <div className="rounded-lg border border-border bg-surface-2 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            How We Handle Problems
          </h2>
          <p className="mt-3 text-base text-muted sm:text-lg">
            Things go sideways in insurance. Here is how we handle the three
            things that matter most.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-flame">
                Claims
              </p>
              <h3 className="mt-2 text-lg font-bold text-foreground">
                We help you file and we push.
              </h3>
              <p className="mt-2 text-sm text-muted">
                Call us first. We walk you through what the carrier needs,
                report the claim, and follow up with the adjuster. If a
                claim stalls, we escalate. We don't make claims go away
                that shouldn't, but we make sure the carrier pays what the
                policy says they owe.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-flame">
                Carrier non-renewal
              </p>
              <h3 className="mt-2 text-lg font-bold text-foreground">
                We re-market before the deadline.
              </h3>
              <p className="mt-2 text-sm text-muted">
                If a carrier non-renews, we know about it before you do
                (we are on the notification list). We re-shop the policy
                across our panel and bind new coverage so there is no gap
                in coverage.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-flame">
                Billing issues
              </p>
              <h3 className="mt-2 text-lg font-bold text-foreground">
                We go to bat for you.
              </h3>
              <p className="mt-2 text-sm text-muted">
                Premium changed mid-term? Auto-pay failed? Lender escrow
                math wrong? Forward it to us. We figure out what happened,
                talk to the billing rep, and fix it. Usually the same day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-narrow pt-10">
        <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            States We Serve
          </h2>
          <p className="mt-3 text-base text-muted sm:text-lg">
            {site.serviceArea}.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {site.serviceStates.map((s) => (
              <span
                key={s}
                className="rounded-md border border-border bg-surface-2 px-3 py-1.5 text-sm font-semibold text-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Try the difference."
        sub="Get a quote from a specialist. We will have options back to you fast."
      />

      <RelatedLinks
        items={[
          {
            href: "/contact",
            title: "Contact",
            desc: "Phone, email, hours.",
          },
          {
            href: "/real-estate-investor-insurance-reviews",
            title: "Reviews",
            desc: "What investors say.",
          },
          {
            href: "/get-a-quote",
            title: "Get a quote",
            desc: "60-second intake to start.",
          },
        ]}
      />
    </>
  );
}
