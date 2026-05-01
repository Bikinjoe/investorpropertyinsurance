import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance for Multiple Rental Properties | Investor Property Insurance",
  description:
    "Owning multiple rentals doesn't mean managing multiple headaches. Here's how portfolio insurance works.",
};

export default function MultipleRentalPropertyInsurancePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Insurance for Multiple Rental Properties",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "Owning multiple rentals doesn't mean managing multiple headaches. Here's how portfolio insurance works.",
        }}
      />
      <PageHero
        eyebrow="Multiple rental property insurance"
        title="Insurance for Multiple Rental Properties"
        sub="One policy for the whole portfolio is possible. Here's when it makes sense and how it works."
      />
      <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Multiple Rental Property Insurance" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          If you own three rental properties, you have three renewal dates, three insurance bills, and
          three policies to track. That is manageable. At ten properties, it becomes a real administrative
          problem. Portfolio insurance solves it.
        </p>

        <h2>Blanket and portfolio policies versus individual policies</h2>
        <p>
          An individual policy insures one property. A portfolio or blanket policy insures multiple
          properties under a single contract with a single premium and a single renewal date.
        </p>
        <p>
          With a blanket policy, the total insured value is pooled across all properties. If one property
          has a large claim, the full blanket limit is available to respond, rather than capping out at
          the individual property limit. This flexibility matters in a major loss.
        </p>
        <p>
          Portfolio policies are not the same as individual policies stacked together. The underwriting
          looks at the whole portfolio, not each property in isolation. Your pricing reflects the
          combined risk profile.
        </p>

        <h2>One renewal date</h2>
        <p>
          All properties renew at the same time on the same policy. One call, one review, one renewal.
          You do not have to track multiple expiration dates across multiple carriers.
        </p>
        <p>
          When you add a new property to the portfolio, you add it to the existing policy rather than
          opening a new account with a new carrier. That simplicity adds up over time, especially as
          the portfolio grows.
        </p>

        <h2>Cost per property often lower with a portfolio approach</h2>
        <p>
          Carriers give volume discounts. A landlord insuring ten properties with one carrier is a
          better customer than ten landlords each insuring one property. The per-property premium often
          drops meaningfully at three or more properties.
        </p>
        <p>
          The savings vary by carrier and portfolio size, but a 10% to 20% reduction per property
          compared to individual policies is not unusual. On a portfolio of ten properties, that can
          be several thousand dollars per year.
        </p>

        <h2>What carriers offer this</h2>
        <p>
          Not every carrier offers portfolio or blanket policies for residential rental properties.
          The carriers that focus on investor property business, including carriers like REInsurePro,
          Obie, Steadily, and others that specialize in this segment, are more likely to offer portfolio
          pricing and blanket forms.
        </p>
        <p>
          Standard carriers that primarily write personal lines may offer multiple-property discounts
          but not true portfolio or blanket coverage. The distinction matters when you have a major claim.
        </p>
        <p>
          Working with an independent agent who places investor property business regularly is the
          fastest way to access portfolio options. They know which carriers offer them and can compare
          the terms side by side.
        </p>

        <h2>Umbrella consideration for portfolio owners</h2>
        <p>
          The more properties you own, the more liability exposure you carry. A portfolio policy does not
          change that math. Each property is a separate place where a tenant or visitor can be injured.
        </p>
        <p>
          Landlords with three or more properties should consider adding a commercial umbrella policy
          above their portfolio coverage. A $1 million umbrella typically costs $500 to $1,500 per year
          depending on the portfolio size and structure.
        </p>
        <p>
          If your properties are held in LLCs, the umbrella needs to be structured to cover the entities,
          not just you personally. Get this right at policy inception.
        </p>

        <h2>When individual policies still make sense</h2>
        <p>
          Portfolio coverage is not always the right answer. If your properties are in different states,
          you may need separate policies because not all carriers are admitted in every state. If you
          own a mix of property types, a portfolio policy may not accommodate all of them cleanly.
        </p>
        <p>
          For a mixed portfolio with a duplex, a short-term rental, and a small commercial building,
          individual policies placed with specialists for each property type may give you better coverage
          and better pricing than trying to stuff everything into one policy.
        </p>

        <h2>Bottom line</h2>
        <p>
          If you own three or more similar residential rental properties, a portfolio policy is worth
          exploring. The administrative simplicity and potential cost savings are real. The right approach
          depends on your property mix, the states you operate in, and which carriers are available to you.
        </p>
        <p>
          Ready to find the right coverage? Start here:{" "}
          <Link href="/get-a-quote" className="text-brand font-semibold hover:underline">
            investorpropertyinsurance.com/get-a-quote
          </Link>
        </p>
      </article>

      <CTASection />
    </>
  );
}
