import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "First Time Landlord Tips | Investor Property Insurance",
  description:
    "Renting out your first property? Here's what most first-time landlords wish they'd known about insurance, screening, and setup.",
};

export default function FirstTimeLandlordTipsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "First-Time Landlord: What You Need to Know Before You Rent",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "Renting out your first property? Here's what most first-time landlords wish they'd known about insurance, screening, and setup.",
        }}
      />
      <PageHero
        eyebrow="First-time landlord guide"
        title="First-Time Landlord: What You Need to Know Before You Rent"
        sub="You are now running a business. Here are the five things to get right before your first tenant moves in."
      />
      <Breadcrumbs items={[{ label: "First-Time Landlord Tips" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          The moment you rent your property to someone, you stop being a homeowner and start being
          a landlord. That is a real shift. You have a tenant, a lease, legal obligations, and
          financial exposure you did not have before. Most first-time landlords underestimate this.
          Here is what to get right before the keys change hands.
        </p>

        <h2>You Are Running a Business Now</h2>
        <p>
          This is the mindset shift that matters most. A rental property is not a favor to a
          friend or a side project. It is a business. You have income coming in, expenses going
          out, legal responsibilities to your tenant, and liability exposure if something goes wrong.
        </p>
        <p>
          Treating it casually is the most common mistake first-time landlords make. The second
          most common is treating a tenant like a friend instead of a business relationship. Both
          lead to the same place: unpaid rent, damaged property, and expensive legal problems.
        </p>

        <h2>Five Things to Do Before Your First Tenant Moves In</h2>
        <p>
          <strong>1. Get the right insurance.</strong> Your homeowners policy does not cover a
          rental property. The moment you have a tenant, you need landlord insurance. This covers
          the building, your liability as the owner, and your rental income if the property
          becomes uninhabitable due to a covered loss. If you skip this step and something goes
          wrong, you are paying for it yourself.
        </p>
        <p>
          <strong>2. Put everything in writing.</strong> A lease is not optional. It documents the
          rent amount, due date, late fees, security deposit terms, maintenance responsibilities,
          and what happens if the tenant does not pay. If you ever end up in court, the lease is
          your evidence. A handshake agreement is not.
        </p>
        <p>
          <strong>3. Document the property condition.</strong> Walk through the property with your
          tenant before move-in. Take photos or video of every room. Note any existing damage. Both
          parties sign off. This protects you when the tenant moves out and disputes the security
          deposit. Without it, you have no baseline to compare against.
        </p>
        <p>
          <strong>4. Require renters insurance.</strong> Your landlord policy covers the building.
          It does not cover your tenant&apos;s belongings or their personal liability. If their
          laptop is stolen or they accidentally flood a neighboring unit, that falls on them. Renters
          insurance covers both. Requiring it is a reasonable condition of tenancy and costs tenants
          roughly $15 to $30 per month.
        </p>
        <p>
          <strong>5. Know your state&apos;s landlord-tenant law basics.</strong> Every state has
          rules on security deposit limits, notice requirements before entering, eviction procedures,
          and habitability standards. Oregon, for example, limits security deposits, requires 24-hour
          notice before entry in most cases, and has specific steps for eviction. Not knowing the law
          is not a defense when a tenant files a complaint.
        </p>

        <h2>Why Homeowners Insurance Will Not Protect You</h2>
        <p>
          Homeowners insurance is built for the person living in the property. Once you move a
          tenant in, the risk profile changes completely. Your insurer knows this, and most policies
          exclude rental activity or void coverage if the home is no longer owner-occupied.
        </p>
        <p>
          If your tenant causes a fire and you file a homeowners claim, your insurer can deny it.
          They are within their rights to do so. That leaves you rebuilding out of pocket. Landlord
          insurance is not expensive. The gap between having it and not having it is enormous.
        </p>

        <h2>The First 30 Days Matter</h2>
        <p>
          The first month of any tenancy sets the tone. If rent is due on the 1st and the tenant
          pays on the 5th without consequence, you have established that late payment is acceptable.
          It is harder to reset expectations later than to set them correctly at the start.
        </p>
        <p>
          Send a welcome letter outlining how and when to pay rent, who to contact for maintenance
          requests, and what the late fee policy is. Keep communication in writing. Create a paper
          trail from day one.
        </p>

        <h2>The One Mistake to Avoid</h2>
        <p>
          Treating the tenancy like a favor. If you rented to a friend, a family member, or a
          neighbor as a kindness, you still need a lease, documented condition, and proper insurance.
          The legal obligations do not change because you like the person. When things go wrong with
          informal arrangements, they go wrong badly.
        </p>
        <p>
          Run it like a business from the start. It protects you, and it actually protects the
          tenant too.
        </p>

        <h2>Bottom Line</h2>
        <p>
          Get the right insurance. Sign a real lease. Document the property condition. Require
          renters insurance. Know the basics of your state&apos;s landlord-tenant law. Do those
          five things before move-in, and you are ahead of most first-time landlords.
        </p>

        <div className="mt-8 rounded-lg border border-flame bg-flame/5 p-6">
          <p className="font-semibold text-foreground">
            Buying a rental property? Make sure insurance is part of your plan.
          </p>
          <p className="mt-1 text-sm text-muted">
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
            href: "/rental-property-insurance",
            title: "What insurance do I need for a rental property?",
            desc: "Landlord insurance explained: what it covers and how to get the right policy.",
          },
          {
            href: "/how-to-screen-tenants",
            title: "How to screen tenants",
            desc: "What to check before handing over the keys.",
          },
          {
            href: "/what-expenses-to-expect-as-landlord",
            title: "What expenses should you expect as a landlord?",
            desc: "The full list of costs to budget before you buy.",
          },
        ]}
      />
    </>
  );
}
