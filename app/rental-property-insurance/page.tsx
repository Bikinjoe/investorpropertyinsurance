import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "What Insurance Do I Need for a Rental Property? | Investor Property Insurance",
  description:
    "If you rent out a property, you need landlord insurance. Here's what it covers, what it doesn't, and how to get the right policy.",
};

export default function RentalPropertyInsurancePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "What Insurance Do I Need for a Rental Property?",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "If you rent out a property, you need landlord insurance. Here's what it covers, what it doesn't, and how to get the right policy.",
        }}
      />
      <PageHero
        eyebrow="Rental property insurance"
        title="What Insurance Do I Need for a Rental Property?"
        sub="You need landlord insurance. A standard homeowners policy does not cover a home you're renting to someone else."
      />
      <Breadcrumbs items={[{ label: "Rental Property Insurance" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          If you rent out a property, you need landlord insurance. A standard homeowners policy
          does not cover a home you&apos;re renting to someone else. Landlord insurance protects
          the building, your liability as the owner, and in many cases your rental income if the
          property becomes uninhabitable. Here&apos;s what that actually means and how to get it
          right.
        </p>

        <h2>Why Homeowners Insurance Does Not Work</h2>
        <p>
          Homeowners insurance is built for a property you live in. The moment you move out and
          put a tenant in, the coverage changes. Most homeowners policies either exclude rental
          activity or void coverage entirely if the home is used as a rental.
        </p>
        <p>
          If your tenant causes a fire and you try to file a claim on your homeowners policy, you
          may be denied. Your insurer can argue the property was no longer owner-occupied, which
          is a condition of your coverage. That leaves you paying for repairs out of pocket.
        </p>
        <p>
          Landlord insurance exists specifically for this situation. It is designed around the
          risks that come with tenants, not just personal ownership.
        </p>

        <h2>The Three Core Pieces of Landlord Insurance</h2>
        <p>
          <strong>Property Coverage</strong>
        </p>
        <p>
          This covers the physical structure of your rental. Think walls, roof, floors, built-in
          appliances, and anything attached to the building. If a fire damages the kitchen or a
          windstorm tears off the roof, property coverage pays for repairs or replacement.
        </p>
        <p>
          It does not typically cover your tenant&apos;s belongings. That is what renters
          insurance is for. Many landlords require tenants to carry their own renters insurance.
        </p>
        <p>
          <strong>Liability Coverage</strong>
        </p>
        <p>
          This protects you if someone is injured on your property and holds you responsible. If
          a tenant&apos;s guest slips on an icy walkway and breaks an arm, or a contractor gets
          hurt during a repair, liability coverage pays for their medical costs and your legal
          defense if they sue.
        </p>
        <p>
          <strong>Loss of Rental Income</strong>
        </p>
        <p>
          If your property is damaged and becomes unlivable, this coverage replaces the rent you
          would have collected while repairs are underway. Say a fire puts your unit out of
          commission for three months. Loss of rental income pays you during that gap instead of
          leaving you with a mortgage and no revenue.
        </p>

        <h2>Optional Coverage Worth Knowing About</h2>
        <p>
          Flood insurance. Standard landlord policies do not cover flooding. If your property is
          in a flood-prone area, this is a separate policy.
        </p>
        <p>
          Earthquake coverage. Also typically excluded. Relevant in Oregon and across the Pacific
          Northwest.
        </p>
        <p>
          Umbrella liability. Provides protection above your standard policy limits. Useful if
          you own multiple properties.
        </p>

        <h2>What If You Are Just Starting Out?</h2>
        <p>
          If you own one property and just placed your first tenant, a basic landlord insurance
          policy is the right starting point. It typically covers property, liability, and loss
          of rent. You can add coverage as your situation grows.
        </p>
        <p>
          If you own several properties, talk to an agent about portfolio options that cover
          multiple addresses without requiring a separate policy per property.
        </p>

        <h2>Bottom Line</h2>
        <p>
          You need landlord insurance the moment you have a tenant. The policy covers three
          things: property, liability, and lost income. The specifics vary by property type,
          location, and your situation.
        </p>
      </article>

      <section className="container-narrow pb-10">
        <div className="rounded-lg border border-flame bg-flame/5 p-6">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Get the right policy for your rental property.
          </h2>
          <p className="mt-2 text-base text-muted sm:text-lg">
            We shop 20+ carriers to find the right fit for your specific property and situation.
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
            href: "/what-does-landlord-insurance-cover",
            title: "What does landlord insurance cover?",
            desc: "The details on building coverage, liability, and lost rent.",
          },
          {
            href: "/homeowners-insurance-rental-property",
            title: "Can I use my homeowners insurance for a rental?",
            desc: "Why homeowners insurance does not work for a rental property.",
          },
          {
            href: "/landlord-insurance-cost",
            title: "How much does landlord insurance cost?",
            desc: "What drives the price and how to compare quotes correctly.",
          },
        ]}
      />
    </>
  );
}
