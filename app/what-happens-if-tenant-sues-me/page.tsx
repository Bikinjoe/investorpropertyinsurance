import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "What Happens If a Tenant Sues Me? | Investor Property Insurance",
  description:
    "Liability coverage in your landlord insurance may pay your legal defense and any judgment. Here's how it works and where it ends.",
};

export default function WhatHappensIfTenantSuesMePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "What Happens If a Tenant Sues Me?",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "Liability coverage in your landlord insurance may pay your legal defense and any judgment. Here's how it works and where it ends.",
        }}
      />
      <PageHero
        eyebrow="Landlord liability"
        title="What Happens If a Tenant Sues Me?"
        sub="Liability coverage in your landlord insurance may cover your legal defense costs and any resulting settlement or judgment, up to your policy limits."
      />
      <Breadcrumbs items={[{ label: "What Happens If a Tenant Sues Me" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          Getting sued as a landlord is more common than most people expect. The good news:
          liability coverage in your landlord insurance policy may cover your legal defense costs
          and any resulting settlement or judgment, up to your policy limits. Here is what that
          actually means, and where the coverage ends.
        </p>

        <h2>Why Tenants Sue Landlords</h2>
        <p>
          The most common reasons:
        </p>
        <p>
          Injury on the property. A tenant or their guest falls due to a hazardous condition. A
          broken step, an icy walkway, a faulty railing. If you knew about the problem and did
          not fix it, your exposure is real.
        </p>
        <p>
          Habitability claims. A tenant argues the unit was unsafe or unlivable. Mold, pest
          infestations, broken heat in winter, a roof that leaks every time it rains.
        </p>
        <p>
          Security deposit disputes. A tenant claims you wrongfully withheld their deposit. In
          some states, if you lose this case, you may owe two or three times the original deposit
          amount.
        </p>
        <p>
          Discrimination claims. A tenant claims you denied them housing based on a protected
          characteristic. Race, religion, familial status, and disability are federally protected
          categories.
        </p>

        <h2>What Liability Coverage Actually Does</h2>
        <p>
          Liability coverage does two things. It pays for your legal defense, including attorney
          fees and court costs. And it pays settlements or judgments against you, up to the
          policy limit.
        </p>
        <p>
          A tenant&apos;s visitor slips on a broken step outside the unit. You knew the step was
          cracked. You had not fixed it. The visitor breaks their ankle and files a lawsuit for
          $85,000 in medical bills and lost wages. Your liability coverage may pay the legal
          defense costs and cover the judgment if you lose.
        </p>
        <p>
          Without that coverage, you are paying an attorney out of your own pocket.
        </p>

        <h2>What Liability Coverage Does Not Pay For</h2>
        <p>
          Intentional acts. If you deliberately do something harmful, coverage typically does
          not apply.
        </p>
        <p>
          Discrimination claims. Many standard policies exclude discrimination lawsuits
          specifically. Ask your agent about this directly.
        </p>
        <p>
          Criminal acts. Outside the scope of a standard liability policy.
        </p>
        <p>
          Contract disputes. Lease disputes and some security deposit claims may or may not
          trigger coverage depending on how the policy is written.
        </p>

        <h2>How Much Liability Coverage Do You Need?</h2>
        <p>
          Most landlord policies start with $300,000 in liability coverage. At minimum, carry
          $300,000. A single injury lawsuit can exceed that limit quickly.
        </p>
        <p>
          If you own multiple properties, consider an umbrella policy. It adds $1 million or
          more in coverage above your standard liability limit for a relatively modest annual
          cost.
        </p>

        <h2>What to Do If You Get a Demand Letter or Are Served</h2>
        <p>
          Notify your insurer immediately. Do not wait. Do not respond to the demand letter
          yourself. Do not try to settle the matter informally before involving your insurer.
        </p>
        <p>
          Most liability policies require prompt notification of a claim. If you delay and the
          insurer argues they were prejudiced by late notice, they may have grounds to deny
          coverage. Call your agent the same day you receive the letter.
        </p>
      </article>

      <section className="container-narrow pb-10">
        <div className="rounded-lg border border-flame bg-flame/5 p-6">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Make sure your liability coverage is in place.
          </h2>
          <p className="mt-2 text-base text-muted sm:text-lg">
            We review your coverage limits and find the right policy before something goes wrong.
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
            href: "/rental-property-insurance",
            title: "What insurance do I need for a rental property?",
            desc: "Start here if you are new to landlord insurance.",
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
