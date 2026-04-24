import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "DSCR Loan Insurance Requirements, What Your Lender Actually Needs",
  description:
    "DSCR loan insurance requirements: minimum coverage, lender clauses, loss of rents, and the common mistakes that delay closing. Insurance set up to satisfy DSCR loan terms.",
};

const faqs = [
  {
    q: "What insurance does a DSCR lender require?",
    a: "DSCR (Debt Service Coverage Ratio) loans typically require: dwelling coverage at full replacement cost or at least the loan balance, the lender named as mortgagee/loss payee, a 30-day notice of cancellation in favor of the lender, liability coverage of $300K to $1M depending on the lender, loss of rents (or business income) equal to 12 months of gross rental income, flood insurance if the property is in a FEMA flood zone, wind/hail coverage where applicable. Specific requirements vary by lender.",
  },
  {
    q: "Why does a DSCR loan need different insurance than an owner-occupied loan?",
    a: "DSCR loans are investment property loans where the lender qualifies the deal based on the property's rental income, not the borrower's personal income. The lender treats the property as a business asset and requires insurance that reflects its rental use: a landlord (DP-3) form rather than a homeowner form, loss of rents to protect the income that services the debt, and proper named insured (often an LLC).",
  },
  {
    q: "Can I close on a DSCR loan with a homeowner policy in place?",
    a: "Sometimes yes for the closing, but the lender will typically require conversion to a landlord policy at or shortly after closing. Some DSCR lenders will fund with a homeowner policy in place if the borrower commits to converting it within a specified period. Most DSCR lenders prefer to see the correct policy in place at closing to avoid post-funding lapses.",
  },
  {
    q: "What are the most common DSCR loan insurance mistakes that delay closing?",
    a: "Three recurring problems: (1) wrong named insured (the borrower's personal name instead of the LLC that holds title), (2) dwelling limit too low (set at owner-occupied valuation rather than full replacement cost), and (3) missing loss of rents coverage (most DSCR lenders require 12 months minimum). All three can delay closing by 3 to 7 days while the policy is rewritten. Sending us the loan documents at quote time prevents these.",
  },
];

export default function DSCRPage() {
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
        eyebrow="Lender requirements"
        title="DSCR Loan Insurance Requirements: What Your Lender Actually Needs."
        sub="DSCR loans treat the property as a business asset. Your insurance has to match: a landlord form, the right named insured, loss of rents, and lender clauses set up correctly. Get this right at the start so closing does not get delayed."
      />
      <Breadcrumbs items={[{ label: "DSCR Loan Coverage" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          DSCR (Debt Service Coverage Ratio) loans are the most common
          investment property financing product. The lender qualifies the
          loan based on the property's projected rental income covering
          the debt service, not on the borrower's personal income. Because
          the property is an investment asset, the lender requires
          insurance that reflects that use: a landlord policy with
          specific lender clauses and coverages.
        </p>
        <p>
          Most insurance problems on DSCR closings come from one of three
          mistakes: wrong named insured, dwelling limit set too low, or
          missing loss of rents. All three are easy to avoid if the agent
          knows what DSCR lenders expect. Below is the playbook.
        </p>

        <h2>What DSCR loans require for insurance</h2>
        <p>
          The standard DSCR insurance requirements look like this:
        </p>
        <ul>
          <li><strong>Dwelling coverage</strong> at full replacement cost or at minimum 100% of the loan balance, whichever is greater.</li>
          <li><strong>Lender named as mortgagee/loss payee</strong> with the exact lender name, address, and loan number.</li>
          <li><strong>30-day notice of cancellation</strong> in favor of the lender (the carrier must notify the lender 30 days before any cancellation or non-renewal).</li>
          <li><strong>Liability coverage</strong> of $300K to $1M (most DSCR lenders require $1M for single family rentals, may accept $500K for smaller properties).</li>
          <li><strong>Loss of rents (fair rental value or business income)</strong> equal to 12 months of gross rental income.</li>
          <li><strong>Flood insurance</strong> if the property is in a FEMA flood zone (Zone A or V).</li>
          <li><strong>Wind/hail coverage</strong> where applicable (typically a separate consideration in coastal or hail-prone states).</li>
          <li><strong>Named insured</strong> matching the title holder (often an LLC; the policy needs to name the LLC as the insured, not the borrower personally).</li>
          <li><strong>Replacement cost on the dwelling</strong> (not actual cash value).</li>
        </ul>
        <p>
          Some DSCR lenders add specific items: a particular liability
          limit on the additional insured for the lender, ordinance and
          law coverage on older buildings, equipment breakdown for
          multifamily properties, or specific environmental endorsements.
          Loan documents will spell out the specifics.
        </p>

        <h2>Minimum coverage requirements explained</h2>
        <p>
          Three coverages cause the most issues at closing:
        </p>

        <h3>Dwelling at full replacement cost</h3>
        <p>
          Lenders want to see that the policy will pay to fully rebuild
          the structure if it is destroyed. The dwelling limit needs to
          equal or exceed the replacement cost of the building (not the
          purchase price, not the appraised value, not the loan balance).
          For older properties or properties in high-construction-cost
          markets, replacement cost can exceed purchase price meaningfully.
        </p>
        <p>
          We calculate replacement cost using the same tools the carriers
          use (CoreLogic, MSB, or carrier-specific calculators). The
          number is on the binder we send to the lender.
        </p>

        <h3>Loss of rents at 12 months</h3>
        <p>
          DSCR lenders care about loss of rents because the rental income
          is what services the debt. If a fire takes the property out of
          service for 6 months, the lender wants the policy (not the
          borrower) to cover the lost income during repair. 12 months is
          the standard minimum. Some lenders require 18 months for larger
          properties.
        </p>

        <h3>Liability matching the lender requirement</h3>
        <p>
          $1M is the most common DSCR liability minimum. Some lenders
          accept $500K on smaller properties. Always carry at least the
          lender requirement, and consider an umbrella policy above it
          if your portfolio is larger.
        </p>

        <h2>How to structure the policy to satisfy lender requirements</h2>
        <p>
          The structure that satisfies most DSCR lenders without
          overpaying:
        </p>
        <ol>
          <li>
            <strong>DP-3 form</strong> on the property (1-4 unit
            residential investor form), or commercial package for 5+
            unit multifamily.
          </li>
          <li>
            <strong>Named insured matches title.</strong> If title is in
            an LLC, the policy names the LLC. If title is personal, the
            policy names you personally. Misalignment causes closing
            delays.
          </li>
          <li>
            <strong>Mortgagee clause</strong> with the lender's exact
            name, complete mailing address, and loan number.
          </li>
          <li>
            <strong>Dwelling at full replacement cost.</strong>
          </li>
          <li>
            <strong>Liability at the lender minimum</strong> (typically $1M).
          </li>
          <li>
            <strong>Loss of rents at 12 months</strong> of gross rental income.
          </li>
          <li>
            <strong>Flood insurance</strong> if the FEMA determination places the property in Zone A or V.
          </li>
          <li>
            <strong>30-day notice of cancellation</strong> built into the policy in favor of the mortgagee.
          </li>
          <li>
            <strong>Certificate / binder sent to lender</strong> in the format they require, before the closing date.
          </li>
        </ol>

        <h2>Common mistakes that delay closing</h2>

        <h3>Wrong named insured</h3>
        <p>
          The most common DSCR insurance issue. Title is held by an LLC,
          but the policy was written in the borrower's personal name. The
          lender's title commitment shows the LLC; the insurance binder
          shows the individual; the closing has to be paused while the
          policy is rewritten. Add 2 to 5 business days.
        </p>
        <p>
          Fix: send us the LLC formation documents and confirm exact
          naming at quote time. We write the policy in the LLC name from
          the start.
        </p>

        <h3>Dwelling limit too low</h3>
        <p>
          The agent set dwelling at the purchase price ($300K), but full
          replacement cost is $425K. Lender flags it. Closing pauses.
        </p>
        <p>
          Fix: we calculate replacement cost properly at quote time and
          set dwelling to match. If the lender uses a different
          calculation, we adjust before closing.
        </p>

        <h3>Missing loss of rents</h3>
        <p>
          Some agents skip loss of rents to make the premium look lower.
          On a DSCR loan, this is usually a deal-breaker because the
          lender wants to see the coverage on the binder.
        </p>
        <p>
          Fix: we include 12 months of loss of rents on every DSCR-bound
          policy by default.
        </p>

        <h3>Wrong mortgagee details</h3>
        <p>
          The mortgagee clause has a typo in the lender name, or uses an
          old address, or omits the loan number. Lender pushes back.
        </p>
        <p>
          Fix: we ask for the exact mortgagee clause language from the
          lender at the start, or we copy it directly from the loan
          commitment letter.
        </p>

        <h3>Missing flood determination</h3>
        <p>
          Lender's FEMA flood determination shows Zone A. The borrower
          and agent thought it was Zone X. Closing pauses while flood
          insurance is bound.
        </p>
        <p>
          Fix: we check FEMA zone at quote time and let you know if
          flood insurance is required. We can quote it in parallel.
        </p>

        <h3>Late binder to lender</h3>
        <p>
          Lender needs the binder/certificate 2 to 3 business days
          before closing. If it arrives the day of closing, the lender
          may not have time to process and the closing gets rescheduled.
        </p>
        <p>
          Fix: send us the lender contact information and closing date.
          We send the binder directly to the lender 5+ days before
          closing.
        </p>

        <h2>Working the DSCR insurance requirements list</h2>
        <p>
          Send us:
        </p>
        <ol>
          <li>Property address.</li>
          <li>Loan amount and lender name.</li>
          <li>Lender's insurance requirements (often a one-page sheet).</li>
          <li>The loan commitment letter or term sheet.</li>
          <li>Title documents showing exact named insured (LLC or personal).</li>
          <li>Closing date.</li>
          <li>Lender contact for binder/certificate delivery.</li>
        </ol>
        <p>
          We can typically turn around a DSCR-compliant binder in the
          same business day for most properties.
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
        heading="Get a DSCR-ready policy."
        sub="Send us the loan documents. We'll have a lender-compliant binder ready before your closing date."
      />

      <RelatedLinks
        items={[
          {
            href: "/rentals-rehabs",
            title: "1-4 unit rentals",
            desc: "DP-3 coverage for residential investment properties.",
          },
          {
            href: "/portfolio-landlord-insurance",
            title: "Portfolio landlord",
            desc: "Multi-property programs for active investors.",
          },
          {
            href: "/multifamily",
            title: "Multifamily",
            desc: "Coverage for 5+ unit DSCR loans.",
          },
        ]}
      />
    </>
  );
}
