import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "5 Landlord Insurance Mistakes | Investor Property Insurance",
  description:
    "These 5 insurance mistakes cost landlords thousands. Here's what to watch for before your next renewal.",
};

export default function LandlordInsuranceMistakesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "5 Costly Insurance Mistakes Landlords Make",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "These 5 insurance mistakes cost landlords thousands. Here's what to watch for before your next renewal.",
        }}
      />
      <PageHero
        eyebrow="Insurance basics"
        title="5 Costly Insurance Mistakes Landlords Make"
        sub="Most landlord insurance mistakes are not obvious until a claim gets denied. Here's what to check before that happens."
      />
      <Breadcrumbs
        items={[
          { label: "Resources", href: "/resources" },
          { label: "5 Landlord Insurance Mistakes" },
        ]}
      />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          The five mistakes below show up in claim disputes, coverage gaps, and renewal
          surprises. None of them are complicated to fix. Most just require a conversation
          with your agent. The problem is that most landlords never have that conversation
          until something goes wrong.
        </p>

        <h2>Mistake 1: Keeping Your Homeowners Policy After You Place a Tenant</h2>
        <p>
          This is the most common mistake and the most expensive. You buy a home, live in it
          for a few years, then move out and rent it to a tenant. You keep the homeowners
          policy because it is cheaper, simpler, or because no one told you to switch.
        </p>
        <p>
          <strong>What happens:</strong> A fire breaks out. The tenant calls 911. You file a
          claim. The adjuster asks whether the property was owner-occupied at the time of the
          loss. You say no. The claim gets denied.
        </p>
        <p>
          Homeowners insurance excludes rental activity. The moment you have a tenant, the
          policy may stop responding to losses. In some cases, the carrier may retroactively
          void the policy from the date the occupancy changed.
        </p>
        <p>
          <strong>The fix:</strong> Switch to a landlord policy before the tenant moves in.
          Call your agent the week you sign the lease, not after the keys are handed over.
        </p>

        <h2>Mistake 2: Choosing Actual Cash Value Instead of Replacement Cost</h2>
        <p>
          When you buy a landlord policy, you typically choose between two settlement methods:
          actual cash value (ACV) or replacement cost. ACV is cheaper. It is also the option
          that leaves you short when you need it most.
        </p>
        <p>
          <strong>What happens:</strong> A storm destroys your roof. The roof is 15 years old.
          Replacement cost to install a new roof runs $18,000. Your ACV policy pays the
          depreciated value of the old roof. You get $7,000. You pay the other $11,000 out of
          pocket.
        </p>
        <p>
          <strong>The fix:</strong> Confirm your policy is written on a replacement cost basis,
          not ACV. Check the declarations page. Look for the words &ldquo;replacement cost
          value&rdquo; or &ldquo;RCV.&rdquo; If you see &ldquo;actual cash value&rdquo; or
          &ldquo;ACV,&rdquo; ask your agent what it would cost to switch.
        </p>

        <h2>Mistake 3: Not Carrying Loss of Rental Income Coverage</h2>
        <p>
          Loss of rental income coverage replaces the rent you would have collected while your
          property is uninhabitable due to a covered loss. It is often available as an add-on
          or a separate coverage line. Many landlords skip it.
        </p>
        <p>
          <strong>What happens:</strong> A water pipe bursts and causes significant damage to
          two units. Repairs take three months. Your tenant cannot live there. You still owe
          the mortgage. You still owe property taxes. You collect no rent for 90 days.
        </p>
        <p>
          Without loss of rental income coverage, that gap comes out of your pocket. With it,
          the policy replaces the lost rent while repairs are made.
        </p>
        <p>
          <strong>The fix:</strong> Confirm loss of rents is included in your current policy.
          Check the declarations page for &ldquo;fair rental value&rdquo; or &ldquo;loss of
          rents.&rdquo; Verify the limit is enough to cover at least six months of rent. If
          repairs take longer, some policies extend further. Know your limit before you need it.
        </p>

        <h2>Mistake 4: Underestimating Your Liability Exposure</h2>
        <p>
          Standard landlord policies often start with $100,000 in liability coverage. That
          number sounds significant until you see what a single injury lawsuit actually costs.
        </p>
        <p>
          <strong>What happens:</strong> A tenant&rsquo;s guest slips on a wet floor in the
          common area of your rental and breaks their hip. They sue you for $200,000 in medical
          costs, lost wages, and pain and suffering. Your policy limit is $100,000. The judgment
          is $180,000. You pay $80,000 out of pocket, plus any legal costs above what the
          insurer covered.
        </p>
        <p>
          <strong>The fix:</strong> Carry at least $300,000 in liability. If you own multiple
          properties, consider a personal umbrella policy on top of that. Umbrella policies are
          relatively inexpensive and extend your liability protection across all your properties.
        </p>

        <h2>Mistake 5: Not Updating the Policy When Something Changes</h2>
        <p>
          Your landlord policy was written based on facts you gave your agent at the time of
          application: property address, occupancy type, number of units, who owns it. When
          those facts change and you do not notify the carrier, coverage gaps open up.
        </p>
        <p>
          <strong>What happens:</strong> You renovate and add a rental unit to your garage.
          You transfer the property to an LLC for liability protection. You hire a property
          manager. You do not call your agent. A claim comes in. The adjuster reviews the
          policy and finds the property description no longer matches reality. The claim is
          disputed.
        </p>
        <p>
          <strong>The fix:</strong> Call your agent when anything material changes. New unit,
          renovation, LLC transfer, new property manager, new tenant type, significant increase
          in property value. Any of these may require a policy update. It usually takes one
          phone call.
        </p>

        <h2>Bottom Line</h2>
        <p>
          None of these mistakes require a complex fix. They require a policy review and an
          honest conversation with your agent. Most landlords who have had coverage for more
          than a couple years have never done that review.
        </p>
        <p>
          Do the review before the claim. Not after.
        </p>

        <div className="mt-8 rounded-lg border border-flame bg-flame/5 p-6">
          <p className="text-base font-semibold text-foreground">
            Ready to make sure your coverage is set up correctly?
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
            Get a policy review before your next renewal.
          </h2>
          <p className="mt-2 text-base text-muted sm:text-lg">
            We find gaps before they cost you. Most reviews take less than 20 minutes.
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
            desc: "The full breakdown on building coverage, liability, and lost rent.",
          },
          {
            href: "/landlord-insurance-vs-homeowners-insurance",
            title: "Landlord insurance vs homeowners insurance",
            desc: "Why using the wrong policy is how claims get denied.",
          },
          {
            href: "/umbrella-insurance-landlords",
            title: "Umbrella insurance for landlords",
            desc: "How umbrella coverage extends your liability protection across all your properties.",
          },
        ]}
      />
    </>
  );
}
