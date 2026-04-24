import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata = {
  title: "Landlord Insurance vs. Real Estate Investor Insurance, What's the Difference?",
  description:
    "Landlord insurance and real estate investor insurance overlap, but the right choice depends on your portfolio, asset mix, and how active you are. Here's the honest comparison.",
};

export default function ComparePage() {
  return (
    <>
      <PageHero
        eyebrow="Honest comparison"
        title="Landlord Insurance vs. Real Estate Investor Insurance: What's the Difference?"
        sub="Both terms describe coverage for a non-owner-occupied property. The difference is in the carrier, the form structure, and how well the program supports an active investor with multiple assets and asset classes."
      />
      <Breadcrumbs items={[{ label: "Compare" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          "Landlord insurance" usually refers to a single-property policy
          for a rental, written on a residential landlord form (DP-3) by a
          carrier that primarily writes homeowner business. "Real estate
          investor insurance" is a broader term that includes landlord
          coverage but extends to portfolios, multiple asset classes, and
          carriers that specifically write investor business.
        </p>
        <p>
          For a single rental house, landlord insurance is usually enough.
          For an active investor with multiple properties, asset variety,
          or growth plans, an investor program is almost always the better
          structure.
        </p>

        <h2>How each model works</h2>

        <h3>Landlord insurance (single property model)</h3>
        <p>
          You buy a rental, you call an agent, the agent writes a DP-3
          policy through a residential carrier (Travelers, Safeco, Liberty
          Mutual, Openly, Hartford, others). The policy looks similar to a
          homeowner policy but is written for rental occupancy. One
          property, one policy, one renewal date.
        </p>
        <p>
          When you buy another property, you start the process over: new
          quote, new policy, new renewal date. After 4 or 5 properties,
          you are managing 4 or 5 separate policies, often with different
          carriers, different renewal dates, and different deductibles.
        </p>

        <h3>Real estate investor insurance (portfolio model)</h3>
        <p>
          You work with an agent who specializes in investors. The agent
          writes your business through a carrier built for investor
          property: REInsurePro, Steadily, Obie, plus standard markets that
          actively want investor business. Multiple properties go on one
          policy with one renewal date. Adding and removing properties
          mid-term is a quick endorsement.
        </p>
        <p>
          The investor program also handles asset classes that single-
          property landlord forms don't: short-term rentals, vacant
          property, rehab, mixed-use, and the transition between asset
          classes (a property that goes from rented to vacant to rehab to
          rented again).
        </p>

        <h2>Where landlord insurance is fine</h2>
        <ul>
          <li>You own one or two rental houses and don't plan to grow significantly.</li>
          <li>The properties are standard residential, fully occupied, in a standard market.</li>
          <li>You don't have STR, rehab, or vacant property exposure.</li>
          <li>You are happy paying separate premiums and managing separate renewals.</li>
          <li>You don't need fast turnaround on certificates or mid-term changes.</li>
        </ul>

        <h2>Where investor insurance wins</h2>
        <ul>
          <li>You have 3+ properties and the count is growing.</li>
          <li>Your portfolio includes mixed asset types (rentals, STR, rehab, multifamily).</li>
          <li>You buy and sell properties frequently and need fast add/remove.</li>
          <li>You have at least one property that standard residential markets won't write at competitive rates.</li>
          <li>You operate through an LLC or trust structure.</li>
          <li>You want one renewal date and one carrier relationship for the bulk of your business.</li>
          <li>You want the agent who handles your insurance to actually understand investor concepts (CAP rate, NOI, cash flow, vacancy, lease structure).</li>
        </ul>

        <h2>When to switch from landlord to investor program</h2>
        <p>
          The transition usually makes sense around 4 to 6 properties. At
          that scale, the administrative friction of separate policies
          starts to outweigh the simplicity. Other triggers:
        </p>
        <ul>
          <li>You added a property type that your current agent can't place well (STR, multifamily, vacant rehab).</li>
          <li>A renewal rate jumped substantially with no claims, and your current agent didn't proactively re-shop.</li>
          <li>You needed a certificate of insurance and your agent took two days to send it.</li>
          <li>You moved a property into an LLC and your current carrier struggled with the entity change.</li>
        </ul>

        <h2>Common misconception</h2>
        <p>
          Investors sometimes assume the investor program is more
          expensive. It usually isn't. Investor carriers price for the
          asset class, not for the convenience of a single-property
          landlord form. For most multi-property investors, the portfolio
          structure is competitive on premium and significantly better on
          coverage.
        </p>

        <h2>Captive agent, generalist, specialist</h2>
        <p>
          Three types of agent you might work with:
        </p>
        <ul>
          <li><strong>Captive agent</strong> (State Farm, Farmers, Allstate). One carrier. Limited to that carrier's products. Usually not the right fit for active investors because the carrier panel is too narrow.</li>
          <li><strong>Generalist independent agent.</strong> Multiple carriers, but not specialized. Often writes investor property as one of many product lines. Quality varies; many are fine for one or two properties but struggle with portfolio and STR.</li>
          <li><strong>Investor specialist independent agent.</strong> Real estate investor business is the entire focus or a major focus. Has access to specialty markets (REInsurePro, Steadily, Obie). Knows the asset classes and the underwriters.</li>
        </ul>
        <p>
          For most multi-property investors, the specialist independent is
          the right fit. That is what we do.
        </p>

        <h2>Our position</h2>
        <p>
          We are an independent specialist. We work with 10+ carrier
          markets that actively write investor business. We write single-
          property landlords (it is fine to start there) and we write
          portfolios. As your situation grows, the program grows with you.
        </p>
        <p>
          If you want a second opinion on your current setup, send us your
          declarations pages and we will tell you honestly whether the
          structure is right for where you are now.
        </p>
      </article>

      <CTASection
        heading="Let us look at your current setup."
        sub="Honest comparison of what you have now vs what an investor program looks like."
      />

      <RelatedLinks
        items={[
          {
            href: "/best-insurance-for-real-estate-investors",
            title: "Best insurance",
            desc: "How to define 'best' for your situation.",
          },
          {
            href: "/real-estate-investor-insurance-problems",
            title: "Common problems",
            desc: "What goes wrong with the wrong structure.",
          },
          {
            href: "/about",
            title: "About us",
            desc: "Why we focus on investor business.",
          },
        ]}
      />
    </>
  );
}
