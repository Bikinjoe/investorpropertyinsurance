import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Referral Partners | Investor Property Insurance",
  description:
    "We partner with CPAs, real estate agents, property managers, lenders, and attorneys who serve real estate investors and property owners in the Western US.",
};

const partnerTypes = [
  "Real estate agents and brokers",
  "Mortgage lenders and DSCR lenders",
  "CPAs and bookkeepers serving real estate investors",
  "Property managers",
  "Real estate attorneys",
  "Investor groups and meetups",
];

const strongReferrals = [
  "Rental property owner or investor (1 or more properties)",
  "Income-producing property owner",
  "Business owner with commercial property or liability exposure",
  "Client who values guidance over lowest price",
  "Client in Oregon, Washington, California, Idaho, Nevada, Utah, Arizona, Colorado, Wyoming, or Montana",
];

const referralSteps = [
  "We review the situation and confirm whether it's a fit.",
  "If it fits, we handle the intake and quote process — you don't have to manage it.",
  "We keep you informed if the referral relationship warrants it.",
  "We don't take referrals that don't fit and create a bad experience for your client.",
];

const whatWeDontDo = [
  "We don't quote every risk regardless of fit",
  "We don't promise the cheapest price",
  "We don't create high-touch service expectations we can't deliver",
];

export default function ReferralPartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Referral Partners"
        title="Insurance Partnership for Real Estate Professionals"
        sub="We work with CPAs, real estate agents, property managers, lenders, and attorneys who serve real estate investors and property owners."
        showCTAs={false}
      />
      <Breadcrumbs items={[{ label: "Referral Partners" }]} />

      {/* Section 1: Who we partner with */}
      <section className="container-narrow py-14">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Who We Partner With
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {partnerTypes.map((type) => (
            <li key={type} className="flex items-center gap-3">
              <span className="flex-shrink-0 text-gold" aria-hidden>→</span>
              <span className="text-base text-foreground">{type}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 2: What a good referral looks like */}
      <section className="border-t border-border bg-surface-2">
        <div className="container-narrow py-14">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            What Makes a Strong Referral
          </h2>
          <ul className="mt-6 space-y-3">
            {strongReferrals.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 text-gold" aria-hidden>✓</span>
                <span className="text-base text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3: What happens when you send a referral */}
      <section className="border-t border-border">
        <div className="container-narrow py-14">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            What Happens When You Send a Referral
          </h2>
          <ol className="mt-6 space-y-4">
            {referralSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-flame text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-1 text-base text-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 4: What we're not */}
      <section className="border-t border-border bg-surface">
        <div className="container-narrow py-14">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            What We Don't Do
          </h2>
          <ul className="mt-6 space-y-3">
            {whatWeDontDo.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 text-gold" aria-hidden>✕</span>
                <span className="text-base text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="border-t border-border">
        <div className="container-narrow py-14 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Ready to send a referral?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted">
            The fastest path is to introduce us directly or share what you know about the client's situation.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/get-a-quote" className="btn-primary w-full sm:w-auto">
              Send a referral →
            </Link>
            <button
              type="button"
              disabled
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-base font-semibold text-muted opacity-60 sm:w-auto"
              aria-disabled="true"
            >
              Download our referral checklist
              <span className="rounded-full bg-gold/20 px-2 py-0.5 text-xs font-bold text-gold">
                Coming Soon
              </span>
            </button>
          </div>
        </div>
      </section>

      <CTASection
        heading="Let's work together."
        sub="Send us a client situation and we'll tell you quickly if it's a fit."
      />
    </>
  );
}
