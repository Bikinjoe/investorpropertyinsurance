import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "What Does Landlord Insurance Actually Cover? | Investor Property Insurance",
  description:
    "Landlord insurance covers the building, liability, and lost rental income. Here's what each piece does and what it does not cover.",
};

export default function WhatDoesLandlordInsuranceCoverPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "What Does Landlord Insurance Actually Cover?",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "Landlord insurance covers the building, liability, and lost rental income. Here's what each piece does and what it does not cover.",
        }}
      />
      <PageHero
        eyebrow="Landlord insurance coverage"
        title="What Does Landlord Insurance Actually Cover?"
        sub="Three core things: the building, liability if someone gets hurt, and lost rental income when a covered event makes the unit uninhabitable."
      />
      <Breadcrumbs items={[{ label: "What Landlord Insurance Covers" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          Landlord insurance covers three core things: damage to the building you rent out,
          liability if someone gets hurt on your property, and lost rental income when a covered
          event makes the unit uninhabitable. Here&apos;s what each one actually means in
          practice.
        </p>

        <h2>Building Coverage</h2>
        <p>
          Building coverage pays to repair or rebuild the physical structure after a covered
          loss. That includes the roof, walls, floors, built-in appliances, and attached
          structures like a garage.
        </p>
        <p>
          Say a pipe bursts in winter and floods your unit. Water soaks through the subfloor,
          ruins the drywall, and wrecks the kitchen cabinets. Building coverage may pay to dry
          out the structure, replace the flooring, repair the drywall, and restore those
          built-in cabinets.
        </p>
        <p>
          What it does not cover: flooding from outside the structure. If that burst pipe was
          an internal plumbing failure, you may have coverage. If rising groundwater or storm
          runoff caused the flooding, a standard landlord policy will not pay for it. Flood
          damage from outside sources requires a separate flood policy.
        </p>
        <p>
          Earthquake damage is also excluded from most standard policies. In the Pacific
          Northwest, that is a risk worth knowing about.
        </p>

        <h2>Your Tenant&apos;s Belongings Are Not Your Responsibility</h2>
        <p>
          Your building coverage does not cover anything your tenant owns. Their furniture,
          electronics, clothing, the TV on the wall, the laptop on the desk: none of it.
        </p>
        <p>
          When that pipe bursts and your tenant&apos;s couch is ruined, that is on them, not
          you. If your tenant wants protection for their belongings, they need their own renters
          insurance policy. Requiring it as a lease condition is a reasonable practice.
        </p>

        <h2>Liability Coverage</h2>
        <p>
          Liability coverage protects you when someone gets hurt on your property and holds you
          responsible.
        </p>
        <p>
          A friend of your tenant comes over for dinner. They slip on the wet hallway floor and
          chip a tooth. They contact you saying they plan to file a claim. Liability coverage
          may pay your legal defense costs and any settlement or judgment, up to the policy
          limit.
        </p>
        <p>
          The key word is negligence. If a hazardous condition on your property caused harm and
          you knew or should have known about it, you have exposure. Liability coverage is
          designed for that scenario.
        </p>
        <p>
          What it does not cover: intentional acts, criminal conduct, or in many cases,
          discrimination claims. Ask your agent about that directly before assuming you are
          protected.
        </p>

        <h2>Loss of Rental Income</h2>
        <p>
          The pipe bursts. The unit floods. It is unlivable for six weeks while contractors
          make repairs. You cannot collect rent during that time. Loss of rental income coverage
          may reimburse you for the rent you are missing while repairs are underway.
        </p>
        <p>
          The trigger is a covered loss making the unit uninhabitable. What does not trigger
          this coverage: a tenant who stops paying. If your tenant skips out or just stops
          writing checks, that is not a covered loss. That is a collections or eviction
          situation.
        </p>

        <h2>What Landlord Insurance Typically Does Not Cover</h2>
        <p>
          Tenant belongings. Normal wear and tear. Intentional damage by a tenant. Flooding
          from outside the structure. Earthquake damage.
        </p>

        <h2>Optional Add-Ons Worth Knowing About</h2>
        <p>
          A vandalism endorsement may extend coverage to deliberate damage to the structure.
          Flood insurance is available through the National Flood Insurance Program and some
          private carriers. Earthquake coverage is available in most western states as a
          separate policy or a rider.
        </p>
      </article>

      <section className="container-narrow pb-10">
        <div className="rounded-lg border border-flame bg-flame/5 p-6">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Get the coverage that actually fits your property.
          </h2>
          <p className="mt-2 text-base text-muted sm:text-lg">
            We build the right policy for your specific situation across 20+ carriers.
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
            href: "/rental-property-insurance",
            title: "What insurance do I need for a rental property?",
            desc: "The full breakdown on landlord insurance and what it covers.",
          },
          {
            href: "/landlord-insurance-cost",
            title: "How much does landlord insurance cost?",
            desc: "What drives the price and how to compare quotes correctly.",
          },
          {
            href: "/what-happens-if-tenant-sues-me",
            title: "What happens if a tenant sues me?",
            desc: "How liability coverage works and where it ends.",
          },
        ]}
      />
    </>
  );
}
