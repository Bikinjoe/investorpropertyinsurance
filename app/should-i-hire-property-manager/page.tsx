import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Should I Hire a Property Manager? | Investor Property Insurance",
  description:
    "Property managers cost 8-12% of rent. Here's how to know if it's worth it for your situation.",
};

export default function ShouldIHirePropertyManagerPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Should I Hire a Property Manager?",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "Property managers cost 8-12% of rent. Here's how to know if it's worth it for your situation.",
        }}
      />
      <PageHero
        eyebrow="Property management guide"
        title="Should I Hire a Property Manager?"
        sub="Property managers cost 8 to 12 percent of monthly rent. Whether that is worth it depends on your situation."
      />
      <Breadcrumbs items={[{ label: "Should I Hire a Property Manager?" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          A property manager handles the day-to-day work of running your rental. They collect rent,
          coordinate repairs, screen tenants, and enforce lease terms. The cost is typically 8 to
          12 percent of monthly rent, sometimes more. For some landlords it is clearly worth it.
          For others it eats too much of the margin. Here is how to think through it.
        </p>

        <h2>What a Property Manager Actually Does</h2>
        <p>
          The job varies by company, so read the contract carefully. In general, a full-service
          property manager handles:
        </p>
        <p>
          Tenant screening. Advertising the unit, reviewing applications, running credit and
          background checks, and placing a qualified tenant.
        </p>
        <p>
          Rent collection. Processing payments, sending late notices, and following up on
          non-payment according to your state&apos;s legal requirements.
        </p>
        <p>
          Maintenance coordination. Receiving repair requests, dispatching contractors, overseeing
          the work, and billing the cost to you.
        </p>
        <p>
          Lease enforcement. Handling lease violations, issuing notices, and coordinating with an
          attorney if eviction is required.
        </p>
        <p>
          Some companies also handle accounting, provide monthly statements, and assist with
          year-end reporting. Others charge additional fees for leasing, lease renewals, or
          maintenance coordination above a set threshold.
        </p>

        <h2>What They Cost</h2>
        <p>
          The standard fee structure is 8 to 12 percent of collected monthly rent. On a $1,800
          per month unit, that is $144 to $216 per month, or $1,728 to $2,592 per year.
        </p>
        <p>
          Watch for additional charges. Many property managers also charge a leasing fee (often
          half to one full month&apos;s rent when they place a new tenant), a lease renewal fee
          (typically $150 to $300), and a maintenance markup on repairs. Some charge a flat monthly
          fee instead of a percentage. Read the full contract before signing.
        </p>

        <h2>When Hiring a Property Manager Makes Sense</h2>
        <p>
          You own more than two or three properties. The time required to manage multiple units,
          respond to tenant calls, coordinate overlapping repairs, and track multiple leases and
          payment schedules adds up fast. Property management software helps, but beyond a certain
          scale, having a professional handle it is simply more efficient.
        </p>
        <p>
          You live more than 30 minutes from the property. Being remote makes every maintenance
          call, inspection, and tenant issue harder. A local property manager handles what you
          cannot physically reach.
        </p>
        <p>
          You do not want to be available. Property management requires availability. Tenant
          emergencies do not follow business hours. If you are not willing to take a call at 9pm
          about a broken furnace, someone else needs to be.
        </p>

        <h2>When It Probably Is Not Worth It</h2>
        <p>
          You own one nearby property. If you have one unit within reasonable distance, the math
          often does not work. You are paying $1,500 to $2,500 per year for services you could
          provide yourself.
        </p>
        <p>
          Your margins are thin. If your property cash flows $200 per month, a 10 percent management
          fee might eliminate most of it. Run the actual numbers before deciding.
        </p>
        <p>
          You want control. Property managers make decisions on your behalf within the scope of their
          contract. If you want to choose your own contractors, approve every repair, and know every
          detail of what is happening, that can create friction with a management company.
        </p>

        <h2>The Insurance Angle</h2>
        <p>
          If you hire a property manager, list them as an additional insured on your landlord
          policy. This is important. A property manager acting on your behalf has exposure under
          your policy, and carriers want to know who is managing the property.
        </p>
        <p>
          Check your carrier&apos;s requirements. Some require notification any time a professional
          property manager takes over management. Failing to disclose can create issues at claim
          time. A quick call to your agent when you hire a property manager avoids that problem.
        </p>
        <p>
          Also confirm that the property management company carries its own errors and omissions
          insurance and general liability coverage. If they make a mistake that results in a claim,
          you want them covered too.
        </p>

        <h2>Bottom Line</h2>
        <p>
          Property management costs 8 to 12 percent of rent plus additional fees. It is worth it
          if you own multiple properties, live far away, or simply do not want the day-to-day
          involvement. For one nearby property with solid margins, self-managing often makes more
          financial sense. Either way, notify your insurance carrier when the management arrangement
          changes.
        </p>

        <div className="mt-8 rounded-lg border border-flame bg-flame/5 p-6">
          <p className="font-semibold text-foreground">
            Have questions about protecting your rental portfolio?
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
            href: "/how-to-grow-rental-portfolio",
            title: "How to grow a rental property portfolio",
            desc: "What changes as you scale from one property to many.",
          },
          {
            href: "/portfolio-landlord-insurance",
            title: "Portfolio landlord insurance",
            desc: "One policy for multiple properties.",
          },
          {
            href: "/what-expenses-to-expect-as-landlord",
            title: "What expenses should you expect as a landlord?",
            desc: "Budget for property management and every other cost.",
          },
        ]}
      />
    </>
  );
}
