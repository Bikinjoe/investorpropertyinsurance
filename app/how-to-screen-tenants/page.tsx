import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "How to Screen Tenants | Investor Property Insurance",
  description:
    "Good tenants protect your property and your income. Here's what to check before handing over the keys.",
};

export default function HowToScreenTenantsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to Screen Tenants: What Landlords Need to Check",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "Good tenants protect your property and your income. Here's what to check before handing over the keys.",
        }}
      />
      <PageHero
        eyebrow="Tenant screening guide"
        title="How to Screen Tenants: What Landlords Need to Check"
        sub="A good tenant pays on time, respects the property, and stays. A bad one costs you money in ways that compound fast."
      />
      <Breadcrumbs items={[{ label: "How to Screen Tenants" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          Tenant screening is the most important thing you do as a landlord. The right tenant pays
          rent on time, keeps the property in good shape, and renews. The wrong one costs you lost
          rent, property damage, legal fees, and months of your life. Here is what to check before
          you hand over the keys.
        </p>

        <h2>Why Screening Matters More Than You Think</h2>
        <p>
          A bad tenant is not just inconvenient. The financial damage adds up quickly. Lost rent
          during an eviction process can run three to six months in many states. Property damage
          beyond normal wear and tear often exceeds the security deposit. Legal costs for an
          eviction proceeding range from $1,500 to $5,000 or more depending on your state.
        </p>
        <p>
          There is also an insurance angle. Insurance claims follow the property. If a tenant
          causes a fire, a flood, or repeated liability incidents, your claims history goes up.
          That raises your premium at renewal and can make you harder to insure. Screening well
          reduces claims. Fewer claims keep your insurance costs manageable.
        </p>

        <h2>The Five Things to Check</h2>
        <p>
          <strong>1. Credit score.</strong> A credit score of 620 or above is a reasonable starting
          point for most landlords. It shows the applicant pays their obligations. A score below
          600 does not automatically disqualify someone, but it should prompt more questions. Look
          at the pattern: is it a brief rough patch or a long history of non-payment? Context
          matters.
        </p>
        <p>
          <strong>2. Income.</strong> The standard rule of thumb is that the tenant&apos;s gross
          monthly income should be at least three times the monthly rent. If rent is $1,800, you
          want to see at least $5,400 per month in verifiable gross income. Ask for recent pay
          stubs, tax returns for self-employed applicants, or bank statements showing consistent
          deposits.
        </p>
        <p>
          <strong>3. Rental history.</strong> Call previous landlords. Not just the current one,
          who may be trying to get rid of a problem tenant. Ask about payment history, property
          condition at move-out, any lease violations, and whether they would rent to the person
          again. A landlord who hesitates or gives vague answers is a signal worth taking seriously.
        </p>
        <p>
          <strong>4. Criminal background.</strong> Run a background check. You are allowed to
          consider criminal history in tenant screening, but you must apply your standards
          consistently to all applicants. Be aware of local rules. Some cities and states restrict
          how landlords can use criminal records in housing decisions.
        </p>
        <p>
          <strong>5. References.</strong> Personal references matter less than landlord and employer
          references. Anyone can provide three friends who will vouch for them. Ask for an employer
          contact to verify employment and a prior landlord who is not the current one.
        </p>

        <h2>Fair Housing Rules: What You Cannot Do</h2>
        <p>
          Federal fair housing law prohibits discrimination based on race, color, national origin,
          religion, sex, familial status, and disability. Many states and cities add additional
          protected classes including source of income, sexual orientation, and marital status.
        </p>
        <p>
          You cannot ask about these protected categories. You cannot set different standards for
          different applicants based on them. You can set any criteria you want, including minimum
          income, minimum credit score, and no-pets policy, as long as you apply them consistently
          to every applicant.
        </p>
        <p>
          Document your criteria in writing before you advertise. Apply them the same way every
          time. Keep records of every applicant and why they were approved or denied.
        </p>

        <h2>Require Renters Insurance</h2>
        <p>
          Make renters insurance a condition of tenancy. It is inexpensive for the tenant, roughly
          $15 to $30 per month, and it protects both of you. If a tenant accidentally causes a fire
          or floods a neighboring unit, their renters insurance covers their liability. Without it,
          you may be dealing with a damaged property and a tenant who cannot pay for it.
        </p>
        <p>
          Ask for proof of coverage before move-in and at each renewal. Some landlords ask to be
          listed as an interested party on the policy so they receive notice if it lapses.
        </p>

        <h2>The Connection Between Screening and Insurance Costs</h2>
        <p>
          Landlords with clean claims histories get better rates. Landlords with frequent claims get
          higher premiums or lose coverage entirely. A tenant who causes a fire, floods a unit, or
          triggers a liability claim goes into your insurance record, not theirs. Screening well is
          one of the most effective things you can do to keep your insurance costs in line over time.
        </p>

        <h2>Bottom Line</h2>
        <p>
          Check credit, income, rental history, criminal background, and references. Apply your
          standards consistently. Require renters insurance. Keep records. A 30-minute screening
          process can prevent a problem that takes months to resolve.
        </p>

        <div className="mt-8 rounded-lg border border-flame bg-flame/5 p-6">
          <p className="font-semibold text-foreground">
            Want to know if your coverage fits your situation?
          </p>
          <p className="mt-1 text-sm text-muted">
            Start here:{" "}
            <Link href="/get-a-quote" className="text-brand hover:underline">
              investorpropertyinsurance.com/get-a-quote
            </Link>
          </p>
        </div>
      </article>

      <CTASection />

      <RelatedLinks
        items={[
          {
            href: "/first-time-landlord-tips",
            title: "First-time landlord guide",
            desc: "Five things to do before your first tenant moves in.",
          },
          {
            href: "/what-to-do-if-tenant-doesnt-pay-rent",
            title: "What to do if your tenant doesn't pay rent",
            desc: "Steps to take when rent stops coming in.",
          },
          {
            href: "/what-happens-if-tenant-sues-me",
            title: "What happens if a tenant sues me?",
            desc: "How liability coverage works when a tenant takes legal action.",
          },
        ]}
      />
    </>
  );
}
