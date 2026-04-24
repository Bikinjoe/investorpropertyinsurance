import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata = {
  title: "What's the Best Insurance for Real Estate Investors?",
  description:
    "Best investor insurance is the right form, the right carrier, the right limits, and an agent who understands your asset class. Here's how to evaluate.",
};

export default function BestPage() {
  return (
    <>
      <PageHero
        eyebrow="Defining 'best' honestly"
        title="What's the Best Insurance for Real Estate Investors?"
        sub="There is no single best policy. The best policy for you is the right form for your asset class, the right carrier for your property profile, the right limits for your exposure, and an agent who can actually answer the phone."
      />
      <Breadcrumbs items={[{ label: "Best Insurance" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          The best insurance for a real estate investor is a policy
          structure that responds at claim time and a relationship that
          works the rest of the year. Premium price is part of it, but it
          is not the whole story. Cheap insurance that denies your claim
          is not actually cheap.
        </p>
        <p>
          Below is what "best" actually means for an investor, how to
          evaluate it, and the red flags to watch for.
        </p>

        <h2>The four criteria that matter</h2>
        <ol>
          <li><strong>Right form.</strong> DP-3 for 1-4 unit residential. Commercial package for 5+ multifamily and commercial. STR-specific for short-term rentals. Builders risk for active construction. The form has to match the way the property is used.</li>
          <li><strong>Right carrier.</strong> A carrier that actively wants your asset class and your property profile. Some carriers write investor business as a side product. Others build their book around it. The latter is who you want.</li>
          <li><strong>Right limits.</strong> Dwelling at full replacement cost (updated annually). Liability at $1M or higher with an umbrella above. Loss of rents at 12+ months. Ordinance and law at meaningful limits for older buildings.</li>
          <li><strong>Right agent.</strong> Specialist who understands investor concepts, answers the phone, turns around certificates fast, and re-markets your business at renewal. The agent is the difference between insurance you forget about and insurance you fight with.</li>
        </ol>

        <h2>Why specialist beats generalist</h2>
        <p>
          A generalist agent writes a little of everything: home, auto,
          life, business, with investor property as one of many lines.
          They write the policy on whatever form their carrier prefers,
          which is often a homeowner-style form rather than a true
          investor form.
        </p>
        <p>
          A specialist agent writes investor business as a primary or
          exclusive line. They have appointments with carriers that
          specifically write investor (REInsurePro, Steadily, Obie). They
          know which carrier wants STR, which one wants multifamily, which
          one will write vacant rehab properties, and which ones will
          decline before you waste a submission.
        </p>
        <p>
          The price difference between specialist and generalist is
          usually small. The coverage difference and the response at claim
          time can be large.
        </p>

        <h2>What "best" is not</h2>
        <ul>
          <li><strong>Not the cheapest.</strong> The cheapest quote is often the wrong form, the wrong carrier, or both.</li>
          <li><strong>Not the biggest brand.</strong> Nationally famous carriers don't always write investor property well. Some specialty carriers do it much better.</li>
          <li><strong>Not the policy your friend has.</strong> Your friend might have a single SFR. You might have a portfolio with mixed assets. Different answers.</li>
          <li><strong>Not the same as last year.</strong> Carrier appetite changes. Re-shop at renewal.</li>
        </ul>

        <h2>Red flags when evaluating an agent or policy</h2>
        <ul>
          <li>The quote is dramatically lower than others. Often missing coverage.</li>
          <li>The agent can't explain the differences between DP-3, BOP, and commercial package.</li>
          <li>The agent didn't ask about the asset class, the lease, the tenant mix, or the prior claims.</li>
          <li>The agent isn't sure if the policy includes loss of rents.</li>
          <li>The agent doesn't have appointments with any specialty investor carriers.</li>
          <li>The agency's main business is home and auto, with investor as a side product.</li>
          <li>You can't reach the agent by phone or get a certificate within a few hours.</li>
        </ul>

        <h2>Green flags</h2>
        <ul>
          <li>Specializes in real estate investor business.</li>
          <li>Has 8+ carrier markets that actively write investor.</li>
          <li>Asks detailed questions about each property.</li>
          <li>Recommends loss of rents and ordinance and law without you asking.</li>
          <li>Re-markets your business at renewal.</li>
          <li>Issues certificates same-day.</li>
          <li>Will tell you when a coverage you are asking about is unnecessary, instead of selling it to you.</li>
          <li>Gives you options, not just one take-it-or-leave-it quote.</li>
        </ul>

        <h2>The carrier isn't the whole story</h2>
        <p>
          The carrier writes the policy and pays the claim. The agent
          handles everything else: getting you bound, issuing
          certificates, adding and removing properties, re-marketing at
          renewal, advocating if there is a claim dispute.
        </p>
        <p>
          A great carrier paired with a bad agent is still a bad
          experience. Put more weight on the agent than on the carrier
          name. A good agent with access to 10+ carriers will always find
          you the right one.
        </p>

        <h2>When to re-shop</h2>
        <p>
          Re-shop at renewal every year. Carrier appetite changes. New
          carriers enter the market. Your portfolio changes. The agent who
          just lets your policies auto-renew is costing you money over
          time.
        </p>
        <p>
          We re-market every renewal automatically. If a better fit exists
          in our 10+ carrier panel, we will show you. If your current
          carrier is still the best, we'll tell you that too.
        </p>

        <h2>Our pitch, honestly</h2>
        <p>
          We focus on real estate investor insurance. We have 10+ carrier
          markets that actively want this business. We answer the phone.
          We turn around certificates same-day. We re-market at renewal.
          We tell you the truth when something doesn't fit your situation.
          That is what we think "best" looks like for an investor.
        </p>
      </article>

      <CTASection
        heading="See the difference a specialist makes."
        sub="Send us your portfolio. We'll show you where you fit best across 10+ carriers."
      />

      <RelatedLinks
        items={[
          {
            href: "/landlord-insurance-vs-investor-insurance",
            title: "Landlord vs investor",
            desc: "When each program is the right fit.",
          },
          {
            href: "/how-much-does-real-estate-investor-insurance-cost",
            title: "Cost breakdown",
            desc: "What to expect to pay.",
          },
          {
            href: "/real-estate-investor-insurance-reviews",
            title: "Reviews",
            desc: "What investors actually say.",
          },
        ]}
      />
    </>
  );
}
