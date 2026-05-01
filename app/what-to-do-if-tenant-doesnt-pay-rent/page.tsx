import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Tenant Not Paying Rent | Investor Property Insurance",
  description:
    "When a tenant stops paying rent, insurance won't fix it, but having the right plan will. Here's what to do.",
};

export default function TenantDoesntPayRentPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "What to Do If Your Tenant Doesn't Pay Rent",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "When a tenant stops paying rent, insurance won't fix it, but having the right plan will. Here's what to do.",
        }}
      />
      <PageHero
        eyebrow="Landlord guide"
        title="What to Do If Your Tenant Doesn't Pay Rent"
        sub="Non-payment is not an insurance problem. It is a cash flow and legal problem. Here is how to handle it step by step."
      />
      <Breadcrumbs items={[{ label: "Tenant Doesn't Pay Rent" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          When rent does not come in, most landlords go through the same sequence: wait a few days,
          send a text, wait some more, then panic. The right move is faster and more structured than
          that. Here is what to do, in order, when a tenant stops paying.
        </p>

        <h2>Days 1 to 5: Communicate Directly</h2>
        <p>
          Reach out the day after rent was due. Keep it brief. "Rent was due on the 1st. I
          haven&apos;t received it. Let me know when to expect it." Send this in writing, either
          email or text, so you have a record.
        </p>
        <p>
          Some late payments are honest mistakes. A bank transfer that did not go through, a missed
          reminder, a paycheck that landed a few days late. Give the tenant a short window to
          respond and explain. If they communicate quickly and pay within a few days, document it
          and note whether it is a pattern.
        </p>
        <p>
          If they do not respond at all, or they give you a vague story with no payment date, move
          to the next step.
        </p>

        <h2>Days 5 to 10: Send Formal Written Notice</h2>
        <p>
          This is the legal trigger. In most states, you must serve a formal written notice before
          you can begin eviction proceedings. The most common is a "Pay or Vacate" notice, which
          gives the tenant a set number of days to pay the rent in full or leave the property.
        </p>
        <p>
          The required notice period varies by state. In Oregon, the standard is 10 days for
          non-payment of rent, though this can vary. Check your state&apos;s current landlord-tenant
          law or consult a local attorney to confirm the correct notice period and required language.
          The notice must be delivered properly, either in person, posted on the door, or mailed
          according to your state&apos;s rules.
        </p>
        <p>
          Keep a copy of the notice and documentation of how it was delivered. You will need this
          if you go to court.
        </p>

        <h2>The Eviction Process</h2>
        <p>
          If the tenant does not pay or vacate after the notice period, you can file for eviction
          with your local court. This is called an unlawful detainer proceeding in most states.
        </p>
        <p>
          The process varies significantly by state and sometimes by county. In Oregon, eviction
          cases move relatively quickly compared to other states, but you still need to go through
          the court system. Self-help eviction, changing the locks, turning off utilities, or
          removing the tenant&apos;s belongings without a court order, is illegal everywhere.
          Do it wrong and you could owe the tenant damages.
        </p>
        <p>
          If the amount owed is significant or the tenant is likely to contest the eviction, hire
          an attorney. The cost is worth it. A botched eviction that gets thrown out on a procedural
          error means starting over.
        </p>

        <h2>What Insurance Does Not Cover</h2>
        <p>
          Be clear about this: landlord insurance does not cover unpaid rent due to tenant
          non-payment. If your tenant simply decides to stop paying, that is not a covered loss.
          There is no insurance product that reliably fills this gap in a standard policy.
        </p>
        <p>
          Some landlords purchase rent guarantee insurance, which is a separate product designed
          specifically for non-payment situations. It exists, but it has limitations and exclusions.
          Talk to an agent if you want to understand what is available in your market.
        </p>

        <h2>What Insurance Does Cover</h2>
        <p>
          Here is where insurance does help: if your property becomes uninhabitable due to a covered
          loss, such as a fire, a burst pipe, or storm damage, your landlord policy&apos;s loss of
          rental income coverage kicks in. It replaces the rent you would have collected while the
          property is being repaired.
        </p>
        <p>
          Example: a kitchen fire puts your unit out of commission for four months. Your policy
          covers the cost of repairs. Your loss of rental income coverage pays you the equivalent
          of four months of rent while repairs are underway. That is a real protection. It is just
          not the same thing as covering a tenant who chooses not to pay.
        </p>

        <h2>The Financial Buffer You Actually Need</h2>
        <p>
          Insurance covers the building and specific losses. It does not replace your operating
          reserves. Every landlord should carry three to six months of expenses in a separate
          account. That covers mortgage payments, property taxes, and insurance premiums during a
          vacancy or a non-payment situation while eviction proceedings work through the courts.
        </p>
        <p>
          The landlords who survive non-payment without lasting damage are the ones who planned for
          it financially before it happened.
        </p>

        <h2>Bottom Line</h2>
        <p>
          Communicate the day after rent is due. Send formal written notice within 5 to 10 days if
          there is no payment. Follow your state&apos;s eviction process exactly. Know what your
          insurance covers and what it does not. Keep operating reserves on hand. Non-payment is
          manageable when you have a plan.
        </p>

        <div className="mt-8 rounded-lg border border-flame bg-flame/5 p-6">
          <p className="font-semibold text-foreground">
            Ready to protect your rental income?
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
            href: "/rental-income-insurance",
            title: "Rental income insurance",
            desc: "How loss of rental income coverage works and when it applies.",
          },
          {
            href: "/how-to-screen-tenants",
            title: "How to screen tenants",
            desc: "Prevent non-payment problems before they start.",
          },
          {
            href: "/what-expenses-to-expect-as-landlord",
            title: "What expenses should you expect as a landlord?",
            desc: "Build the right financial buffer before you need it.",
          },
        ]}
      />
    </>
  );
}
