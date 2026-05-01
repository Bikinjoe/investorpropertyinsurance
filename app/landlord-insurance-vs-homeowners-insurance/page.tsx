import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Landlord Insurance vs Homeowners Insurance | Investor Property Insurance",
  description:
    "Homeowners insurance and landlord insurance are not the same. Here's what each covers, what it doesn't, and why the difference matters.",
};

export default function LandlordVsHomeownersPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Landlord Insurance vs Homeowners Insurance: What's the Difference?",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "Homeowners insurance and landlord insurance are not the same. Here's what each covers, what it doesn't, and why the difference matters.",
        }}
      />
      <PageHero
        eyebrow="Insurance basics"
        title="Landlord Insurance vs Homeowners Insurance: What's the Difference?"
        sub="Homeowners insurance is for properties you live in. Landlord insurance is for properties you rent to someone else. Using the wrong one is not just a technicality — it can cost you a claim."
      />
      <Breadcrumbs
        items={[
          { label: "Resources", href: "/resources" },
          { label: "Landlord Insurance vs Homeowners Insurance" },
        ]}
      />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          Homeowners insurance and landlord insurance are not the same product. The core
          difference is simple: homeowners insurance covers a property you occupy. Landlord
          insurance covers a property you rent to someone else. Once you hand the keys to a
          tenant, you need landlord insurance. Keeping a homeowners policy puts your coverage
          at risk.
        </p>

        <h2>What Homeowners Insurance Covers</h2>
        <p>
          Homeowners insurance is designed around one assumption: you live in the property. It
          typically covers the structure, your personal belongings inside the home, and your
          liability as the occupant.
        </p>
        <p>
          If a pipe bursts and damages your kitchen, your homeowners policy may cover the
          repairs. If a guest slips on your front steps and sues you, your liability coverage
          may pay for your defense.
        </p>
        <p>
          The keyword throughout is &ldquo;you.&rdquo; The coverage is built around your use
          of the home, not someone else&rsquo;s.
        </p>

        <h2>What Homeowners Insurance Does NOT Cover Once You Have a Tenant</h2>
        <p>
          Most homeowners policies exclude rental activity. The moment you move out and collect
          rent from a tenant, the coverage assumptions change. Specifically:
        </p>
        <ul>
          <li>
            <strong>Rental activity is often excluded.</strong> Your policy may not cover
            damage that occurs while a tenant is in place, even if the cause would normally
            be covered.
          </li>
          <li>
            <strong>Tenant-caused damage may be denied.</strong> If your tenant starts a
            kitchen fire, some carriers will deny the claim because the occupancy type
            changed without notification.
          </li>
          <li>
            <strong>Loss of rent is not covered.</strong> If the property is damaged and
            uninhabitable, homeowners insurance does not replace the rent you stop collecting.
          </li>
        </ul>
        <p>
          In some cases, your insurer can rescind the policy entirely if they learn the
          property was being rented without disclosure. You would not just lose the claim.
          You would lose the coverage.
        </p>

        <h2>What Landlord Insurance Covers</h2>
        <p>
          Landlord insurance is built for the rental relationship. It typically includes three
          things:
        </p>
        <p>
          <strong>Structure coverage.</strong> The building, attached structures, and built-in
          appliances. Fire, wind, water damage, vandalism — the same perils as homeowners, but
          with occupancy correctly stated.
        </p>
        <p>
          <strong>Liability coverage.</strong> This is where landlord insurance differs most.
          The liability covers you for incidents involving tenants and their guests, not just
          owner-occupant scenarios. If a tenant&rsquo;s guest is injured on your property and
          sues you, landlord liability may cover your defense and any judgment up to your
          policy limit.
        </p>
        <p>
          <strong>Loss of rental income.</strong> If a covered loss — fire, major water
          damage — makes the unit unlivable, this coverage replaces the rent you would have
          collected while repairs are made. You keep paying your mortgage. The insurance covers
          the income gap.
        </p>

        <h2>What Landlord Insurance Does NOT Cover</h2>
        <p>
          Landlord insurance has its own gaps:
        </p>
        <ul>
          <li>
            <strong>Tenant&rsquo;s belongings.</strong> Your policy covers the building, not
            what the tenant owns. Encourage tenants to carry renters insurance.
          </li>
          <li>
            <strong>Flood.</strong> Excluded from standard policies. Requires a separate flood
            insurance policy.
          </li>
          <li>
            <strong>Earthquake.</strong> Also excluded in standard coverage. Relevant in
            Oregon and across the Pacific Northwest.
          </li>
        </ul>

        <h2>Where They Overlap</h2>
        <p>
          Both types of coverage include structure protection and liability. They cover the
          same physical perils — fire, wind, hail, water damage from a burst pipe. Both
          respond to lawsuits.
        </p>
        <p>
          The difference is in the triggers and exclusions. Homeowners coverage triggers around
          owner use. Landlord coverage triggers around rental use. Getting the occupancy wrong
          is how claims get denied.
        </p>

        <h2>The Accidental Landlord Scenario</h2>
        <p>
          This happens more often than people expect. You move out for a job transfer, a
          relationship change, or a temporary relocation. You keep your homeowners policy
          because you plan to come back, or because you did not think about it.
        </p>
        <p>
          A tenant moves in. Six months later, there is a fire. You file a claim on your
          homeowners policy. The adjuster asks: was this property owner-occupied at the
          time of the loss?
        </p>
        <p>
          The answer is no. The claim may be denied.
        </p>
        <p>
          The fix is simple: notify your agent before a tenant moves in. Switch to a landlord
          policy or add a rental endorsement if one is available. Do not assume the policy
          follows the property wherever it goes.
        </p>

        <h2>When You Might Need Both</h2>
        <p>
          If you live in one unit of a multi-unit property and rent the others, your situation
          is more complex. You are both an owner-occupant and a landlord.
        </p>
        <p>
          Some policies are built specifically for this setup. A house hacking policy or an
          owner-occupied duplex policy may cover both your residence and the rental unit under
          one structure. Talk to an agent about how the occupancy is structured and what fits.
        </p>

        <h2>Bottom Line</h2>
        <p>
          If you have a tenant, you need landlord insurance. If you live in the property, you
          need homeowners insurance. The moment the occupancy changes, the coverage should
          change with it.
        </p>
        <p>
          Using the wrong policy is not a technicality. It is the reason claims get denied.
        </p>

        <div className="mt-8 rounded-lg border border-flame bg-flame/5 p-6">
          <p className="text-base font-semibold text-foreground">
            Want to know if your coverage fits your situation?
          </p>
          <p className="mt-1 text-base text-muted">
            Start here:{" "}
            <Link href="/get-a-quote" className="font-semibold text-flame hover:underline">
              investorpropertyinsurance.com/get-a-quote
            </Link>
          </p>
        </div>
      </article>

      <section className="container-narrow pb-10">
        <div className="rounded-lg border border-flame bg-flame/5 p-6">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Not sure if you have the right policy?
          </h2>
          <p className="mt-2 text-base text-muted sm:text-lg">
            We review your current coverage and tell you exactly what needs to change.
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
            href: "/homeowners-insurance-rental-property",
            title: "Can I use my homeowners insurance for a rental?",
            desc: "Why homeowners insurance stops working the moment you have a tenant.",
          },
          {
            href: "/what-does-landlord-insurance-cover",
            title: "What does landlord insurance cover?",
            desc: "The details on building coverage, liability, and lost rent.",
          },
          {
            href: "/house-hacking-insurance",
            title: "House hacking insurance",
            desc: "How to insure a property where you live in one unit and rent the others.",
          },
        ]}
      />
    </>
  );
}
