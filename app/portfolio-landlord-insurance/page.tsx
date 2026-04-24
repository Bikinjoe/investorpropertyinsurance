import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Portfolio Landlord Insurance, When a Blanket Policy Beats Individual Policies",
  description:
    "Portfolio landlord insurance: scheduled vs blanket policies, when consolidation saves money, how to add and remove properties mid-term, and which carriers write true portfolio programs for real estate investors.",
};

const faqs = [
  {
    q: "When does a portfolio policy save money over individual policies?",
    a: "Most active investors with 5+ properties see real savings from consolidation. The savings come from: portfolio carrier discounts (often 5 to 15%), elimination of multiple minimum premiums, simpler renewal cycle, and reduced administrative overhead. For portfolios under 5 properties, individual policies are often comparable on premium and the simplicity of one policy is not yet meaningful.",
  },
  {
    q: "What is the difference between scheduled and blanket coverage?",
    a: "Scheduled coverage lists each property separately on the policy, with its own dwelling limit, deductible, and replacement cost. Blanket coverage applies a single dwelling limit across all properties and 'follows the loss' to wherever it is needed. Scheduled is more predictable; blanket is more flexible and can provide higher per-property limits in a single large loss. Many portfolio policies are hybrid, scheduled at the property level but blanket on certain coverages.",
  },
  {
    q: "How do I add and remove properties from a portfolio policy?",
    a: "On most portfolio policies, properties are added and removed mid-term with a quick endorsement. Send the property details to your agent (address, year built, replacement cost, occupancy) and the carrier issues the endorsement, often within 24 to 48 hours. Removed properties are pro-rated for premium. Some portfolio policies include automatic acquisition coverage (newly purchased properties are covered for 30 to 90 days before formal scheduling).",
  },
  {
    q: "Which carriers offer true portfolio programs for investors?",
    a: "REInsurePro, Steadily, and Obie are the dominant specialty markets for investor portfolio coverage. Several E&S carriers also write portfolios for larger or more complex investors. Standard regional carriers (Travelers, Liberty Mutual, Safeco) typically require separate policies per property and do not offer true portfolio structures.",
  },
];

export default function PortfolioLandlordPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHero
        eyebrow="Multi-property programs"
        title="Portfolio Landlord Insurance: When a Blanket Policy Makes More Sense Than Individual Policies."
        sub="Once you cross 5 doors, individual policies stop making sense for most investors. A portfolio policy with one renewal date and one carrier saves money, simplifies administration, and keeps your insurance from drifting out of date."
      />
      <Breadcrumbs items={[{ label: "Portfolio Landlord" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          Most active real estate investors start with one rental, one
          policy, one renewal date. By the time the portfolio reaches 5 or
          6 properties, the administrative friction of separate policies
          becomes meaningful. By 10 properties, it is genuinely costly,
          both in time and often in premium.
        </p>
        <p>
          A portfolio policy consolidates the program: multiple properties
          on one policy, one carrier, one renewal date. Properties get
          added and removed with quick endorsements as the portfolio
          changes. The premium is often lower than the sum of individual
          policies, and the operational simplicity is significant.
        </p>
        <p>
          Below is how portfolio coverage works, when it makes sense, and
          which carriers offer true portfolio programs for investors.
        </p>

        <h2>Scheduled vs blanket policies</h2>

        <h3>Scheduled coverage</h3>
        <p>
          Each property is listed separately on the policy with its own
          dwelling limit, deductible, and replacement cost. The policy
          declarations page shows every property line by line.
        </p>
        <p>
          Pros:
        </p>
        <ul>
          <li>Predictable. Each property has its own clear coverage.</li>
          <li>Easy for lenders to read: they can see their specific property and limit.</li>
          <li>Simple to add and remove individual properties.</li>
          <li>Premium is the sum of each property's individual rate.</li>
        </ul>
        <p>
          Best for: portfolios where property values vary widely
          (a $200K rental and a $2M apartment building), or properties in
          different states with different insurance requirements.
        </p>

        <h3>Blanket coverage</h3>
        <p>
          A single dwelling limit applies across all properties on the
          policy. The limit "follows the loss" to wherever it is needed.
          The carrier underwrites the entire portfolio together.
        </p>
        <p>
          Pros:
        </p>
        <ul>
          <li>Flexible. A single property loss can use the full blanket limit.</li>
          <li>Often cheaper for portfolios with similar property values.</li>
          <li>Simpler underwriting (one program, not 10 individual files).</li>
          <li>Better fit for portfolios with frequent buying and selling.</li>
        </ul>
        <p>
          Best for: portfolios of 5+ properties with similar property
          types and value ranges. Common for multifamily portfolios.
        </p>

        <h3>Hybrid programs</h3>
        <p>
          Many portfolio policies are hybrids: properties are scheduled
          (each listed with its own dwelling limit), but certain
          coverages (business income, ordinance and law, equipment
          breakdown) are written on a blanket basis across the portfolio.
          This combines the predictability of scheduled with the
          flexibility of blanket on the coverages where blanket helps
          most.
        </p>

        <h2>When a portfolio policy saves money</h2>
        <p>
          The savings from consolidating come from several sources:
        </p>
        <ul>
          <li>
            <strong>Carrier discounts.</strong> Most portfolio carriers
            offer a multi-property discount, often 5 to 15% off the
            equivalent individual policies.
          </li>
          <li>
            <strong>Elimination of multiple minimum premiums.</strong>{" "}
            Each individual policy has a minimum premium (often $300 to
            $600). On a portfolio, the minimum applies once.
          </li>
          <li>
            <strong>Renewal date alignment.</strong> One renewal date
            instead of 5 or 10 means you re-shop the entire portfolio at
            once, often catching savings opportunities you would miss
            with staggered renewals.
          </li>
          <li>
            <strong>Reduced administrative overhead.</strong> One bill,
            one certificate format, one mid-term endorsement process.
          </li>
        </ul>
        <p>
          Typical savings for a 6 to 10 property portfolio moving from
          individual policies to a portfolio policy run 10 to 25% on
          combined premium, plus the time saved at renewal.
        </p>

        <h2>When individual policies still make sense</h2>
        <p>
          Portfolio is not always the answer. Individual policies fit
          better when:
        </p>
        <ul>
          <li>
            Portfolio is under 4 properties. The carrier and admin
            savings are not yet large enough to justify the change.
          </li>
          <li>
            Properties are in states the portfolio carrier does not
            write. You may need to keep some individual policies in
            states outside the portfolio carrier's footprint.
          </li>
          <li>
            One property is unusual (very high value, very old, specialty
            asset class) and needs a carrier that does not write the
            rest of your portfolio.
          </li>
          <li>
            You have widely varying property values where the per-property
            rate setting on individual policies is more efficient than a
            blanket structure.
          </li>
        </ul>
        <p>
          A common solution is a hybrid approach: portfolio policy for
          the bulk of your residential rentals, plus separate policies
          for unusual properties.
        </p>

        <h2>How to add and remove properties</h2>
        <p>
          Adding a property to an existing portfolio policy:
        </p>
        <ol>
          <li>
            Send us the property details: address, year built, square
            footage, construction type, occupancy, replacement cost
            estimate.
          </li>
          <li>
            We send the request to the carrier as an endorsement.
          </li>
          <li>
            Carrier confirms acceptance and issues a binder, usually
            within 24 to 48 hours.
          </li>
          <li>
            You receive a certificate of insurance and confirmation of
            the new portfolio premium.
          </li>
        </ol>
        <p>
          Removing a property:
        </p>
        <ol>
          <li>Send us the property address and sale or transfer date.</li>
          <li>We endorse the property off the policy effective on that date.</li>
          <li>You receive a return premium credit, pro-rated to the policy term.</li>
        </ol>
        <p>
          Some portfolio policies include automatic acquisition coverage
          for newly purchased properties (30 to 90 days of automatic
          coverage before formal scheduling). This is a useful safety
          net for active investors who close on properties faster than
          they can update insurance paperwork.
        </p>

        <h2>Which carriers offer true portfolio programs</h2>
        <p>
          The carriers that actively write investor portfolio business:
        </p>

        <h3>Specialty investor markets</h3>
        <p>
          REInsurePro, Steadily, Obie. Built specifically for real
          estate investor portfolios. Streamlined intake, easy
          add/remove processes, broad coverage forms designed for
          investor exposures.
        </p>

        <h3>E&S markets</h3>
        <p>
          For larger portfolios, properties standard markets will not
          write, or unusual asset class mixes. Higher premium but
          available for accounts that do not fit the specialty markets.
        </p>

        <h3>Standard regional carriers</h3>
        <p>
          Travelers, Liberty Mutual, Safeco, Hartford typically require
          separate policies per property. Some have begun offering
          limited multi-property programs, but they are not true
          portfolio structures and do not offer the same operational
          simplicity.
        </p>

        <h2>Practical guidance for active investors</h2>
        <ul>
          <li>
            <strong>Trigger to consider portfolio: 5+ doors</strong> with
            growth plans.
          </li>
          <li>
            <strong>Time the switch at renewal</strong> of one of your
            existing policies to avoid cancellation fees.
          </li>
          <li>
            <strong>Plan for any unusual properties</strong> to remain on
            individual policies if needed.
          </li>
          <li>
            <strong>Use the renewal cycle</strong> to re-shop the entire
            portfolio annually rather than letting individual policies
            drift.
          </li>
          <li>
            <strong>Keep the lender list current.</strong> Lenders need
            certificates per property; we issue them on demand from the
            portfolio.
          </li>
        </ul>

        <h2>What to send us for a portfolio quote</h2>
        <ul>
          <li>List of properties with: address, year built, square footage, construction type, occupancy, replacement cost estimate.</li>
          <li>Annual gross rental income for each property.</li>
          <li>Prior 5-year claims history.</li>
          <li>Current carrier(s) and renewal dates.</li>
          <li>LLC or entity structures holding title.</li>
          <li>Lender details for each property.</li>
        </ul>
        <p>
          A portfolio quote typically takes 3 to 7 business days because
          we are submitting an entire portfolio for underwriting. We will
          let you know up front what to expect.{" "}
          <Link href="/get-a-quote">Start a quote</Link> or call or text
          541-681-8793.
        </p>

        <h2>Common questions</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </article>

      <CTASection
        heading="Consolidate the portfolio."
        sub="Send us the property list and we'll quote a true portfolio program."
      />

      <RelatedLinks
        items={[
          {
            href: "/rentals-rehabs",
            title: "1-4 unit rentals",
            desc: "Coverage on individual residential properties.",
          },
          {
            href: "/multifamily",
            title: "Multifamily",
            desc: "5+ unit apartment coverage.",
          },
          {
            href: "/dscr-loan-insurance",
            title: "DSCR loan coverage",
            desc: "Insurance for investment-property financing.",
          },
        ]}
      />
    </>
  );
}
