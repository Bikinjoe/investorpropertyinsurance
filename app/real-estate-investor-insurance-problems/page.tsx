import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Common Problems With Real Estate Investor Insurance (And How to Avoid Them)",
  description:
    "The six most common insurance problems for real estate investors: wrong policy form, vacancy clause, no loss of rents, no ordinance and law, underinsurance, wrong carrier.",
};

type Problem = {
  title: string;
  what: string;
  why: string;
  how: string;
};

const problems: Problem[] = [
  {
    title: "Covered on a homeowner policy instead of an investor form",
    what: "You bought a rental property and your existing agent left the homeowner policy in place, or wrote you on a homeowner form for the new property. A claim happens. The carrier discovers the property was being rented and denies the claim for material misrepresentation.",
    why: "Most general insurance agents do not specialize in investor property. They write what they know (homeowner policies) and don't always understand that the carrier expects owner occupied use. The agent assumes 'a house is a house' and the carrier disagrees at claim time.",
    how: "We always write investor properties on the right form: DP-3 for 1-4 unit residential, commercial package for 5+ multifamily, STR-specific for short-term rentals, builders risk during construction. The carrier knows the property is rented, the form is built for that use, and the claim gets paid.",
  },
  {
    title: "Vacancy clause voiding coverage between tenants",
    what: "Your tenant moves out. The property sits vacant for 45 days while you find a new tenant. During that gap, a pipe bursts and floods the property. The carrier denies the claim because the property exceeded the 30-day vacancy threshold and the policy excludes water damage to vacant property.",
    why: "Most landlord policies have vacancy clauses that limit or eliminate coverage for vandalism, theft, water damage, and certain other perils once the property has been vacant for 30 to 60 days. Investors don't always know the threshold and don't tell the agent the property went vacant.",
    how: "We add a vacancy permit endorsement before the vacancy threshold is reached, which keeps standard coverage in place during the vacant period. For longer vacancies or properties going into renovation, we move you to a vacant property form (DP-1) that is specifically designed for unoccupied properties.",
  },
  {
    title: "No loss of rents coverage means no income during repairs",
    what: "A fire damages your single family rental. The property is uninhabitable for 8 months while it is being rebuilt. Your insurance pays for the structure, but you lose 8 months of rental income. That is the income that was paying your mortgage, taxes, and operating costs.",
    why: "Loss of rents (or business income on commercial) is often an optional coverage. Some agents skip it to keep the premium quote low. Some include it but at limits that are too low for the actual repair period.",
    how: "We include loss of rents on every investor policy by default, with limits that match 12 to 24 months of gross rental income. For larger properties or markets with slow contractors, we recommend the longer period. The premium difference is small. The cash flow difference at claim time is large.",
  },
  {
    title: "Missing ordinance and law coverage on older buildings",
    what: "An older multifamily property has a partial fire loss. The repair is straightforward, but city inspectors require code upgrades to electrical, fire sprinklers, and ADA bathrooms as a condition of the building permit. The standard policy pays the original repair, but not the code-required upgrades. The owner pays $90K out of pocket.",
    why: "Standard property policies often include only a small ordinance and law sublimit (often 5-10% of dwelling). For older buildings, code upgrade costs can easily exceed that. Many agents don't proactively recommend higher ordinance and law on older properties.",
    how: "For pre-1990 properties, especially pre-1980, we proactively recommend ordinance and law at meaningful limits (10-25% of dwelling). The premium cost is small. The protection at claim time can be tens of thousands of dollars.",
  },
  {
    title: "Underinsured at claim time (wrong replacement cost)",
    what: "A property is destroyed by a covered loss. The dwelling limit on the policy was $250K, set when the policy was first written 5 years ago. Construction costs have risen, and the actual replacement cost is now $375K. The carrier pays the $250K limit. The owner pays the $125K shortfall to rebuild.",
    why: "Two reasons. First, replacement cost values are not adjusted at renewal as construction costs rise. Second, some carriers apply a coinsurance penalty if the dwelling limit is below 80% of replacement cost, reducing what they pay even further.",
    how: "We calculate replacement cost at the time of writing and we adjust it at every renewal as construction costs change. Some carriers offer 'guaranteed replacement cost' or 'extended replacement cost' endorsements that pay above the dwelling limit if needed. We add those where they are available and worth the cost.",
  },
  {
    title: "Wrong carrier for the asset class",
    what: "An investor with 8 doors gets quoted by a generalist agent who places everything with one regional homeowner carrier. Three years in, the carrier non-renews the entire portfolio because the carrier exited the investor business. The investor scrambles to find new coverage and pays significantly higher rates because they are now shopping under pressure.",
    why: "Some carriers don't actively want investor business. They write it occasionally to keep an agent relationship intact, but they don't have appetite for it long-term. When the underwriting cycle changes, those carriers exit first.",
    how: "We place investor business with carriers that actively want it: REInsurePro, Steadily, Obie, plus the standard markets that have proven appetite for investor risk over time. We avoid carriers that treat investor property as a side product. If a carrier exits the market, we already have relationships with others.",
  },
];

export default function ProblemsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: problems.map((p) => ({
            "@type": "Question",
            name: p.title,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${p.what} ${p.why} ${p.how}`,
            },
          })),
        }}
      />
      <PageHero
        eyebrow="The 6 problems we see most often"
        title="Common Problems With Real Estate Investor Insurance (And How to Avoid Them)."
        sub="Six recurring problems investors run into with insurance, what causes each one, and how the right structure prevents the problem before it becomes a denied claim."
      />
      <Breadcrumbs items={[{ label: "Problems We Fix" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          Real estate investor insurance is its own product. Most of the
          common problems trace back to the same root cause: the policy was
          structured for a homeowner or generic landlord situation, not for
          the way investors actually use property.
        </p>
        <p>
          Below are the six problems we see most often and how to prevent
          each one. Each section covers what the problem is, why it
          happens, and how a specialist agent prevents it before it becomes
          a denied claim.
        </p>

        {problems.map((p, i) => (
          <section key={i} className="mt-10 rounded-lg border border-border bg-surface-2 p-6">
            <h2 className="!mt-0 text-2xl font-bold text-foreground sm:text-3xl">
              <span className="mr-2 font-mono text-flame">
                {String(i + 1).padStart(2, "0")}
              </span>
              {p.title}
            </h2>

            <h3 className="!mt-5 text-base font-bold uppercase tracking-wider text-flame">
              What the problem is
            </h3>
            <p>{p.what}</p>

            <h3 className="!mt-5 text-base font-bold uppercase tracking-wider text-flame">
              Why it happens
            </h3>
            <p>{p.why}</p>

            <h3 className="!mt-5 text-base font-bold uppercase tracking-wider text-flame">
              How to prevent it
            </h3>
            <p>{p.how}</p>
          </section>
        ))}

        <h2>What you should expect from any agent</h2>
        <p>
          The bar isn't exotic. An insurance agent who specializes in real
          estate investors should write your policies on the right form,
          adjust replacement cost at renewal, recommend ordinance and law
          where it matters, include loss of rents at sufficient limits,
          handle vacancy gaps proactively, and place your business with
          carriers that actually want it.
        </p>
        <p>
          If your current agent does all of that, stay with them. They are
          doing right by you. If they are not, this is the conversation
          worth having. Call or text 541-681-8793 and we can review your
          current setup.
        </p>

        <h2>Start the conversation</h2>
        <p>
          You don't have to move your policies to get a second opinion.
          Send us your current declarations pages and we will tell you
          honestly what is right and what we would change.{" "}
          <Link href="/get-a-quote">Start a quote</Link> or{" "}
          <Link href="/faq">read more in the FAQ</Link>.
        </p>
      </article>

      <CTASection
        heading="Avoid the denied claim."
        sub="A 60-second intake gets us started. We'll review what you have and tell you what to fix."
      />

      <RelatedLinks
        items={[
          {
            href: "/faq",
            title: "Full FAQ",
            desc: "25 questions answered on coverage, cost, and claims.",
          },
          {
            href: "/best-insurance-for-real-estate-investors",
            title: "What 'best' means",
            desc: "How to evaluate an agent and a policy.",
          },
          {
            href: "/landlord-insurance-vs-investor-insurance",
            title: "Landlord vs investor",
            desc: "When each form applies.",
          },
        ]}
      />
    </>
  );
}
