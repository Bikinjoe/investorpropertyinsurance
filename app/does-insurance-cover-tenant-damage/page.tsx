import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does Insurance Cover Tenant Damage? | Investor Property Insurance",
  description:
    "Sometimes. It depends on the type of damage, your policy, and whether it was accidental or intentional.",
};

export default function DoesInsuranceCoverTenantDamagePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Does Insurance Cover Tenant Damage?",
          author: { "@type": "Organization", name: "Vantage Point Risk Partners" },
          publisher: { "@type": "Organization", name: "Investor Property Insurance" },
          description:
            "Sometimes. It depends on the type of damage, your policy, and whether it was accidental or intentional.",
        }}
      />
      <PageHero
        eyebrow="Tenant damage coverage"
        title="Does Insurance Cover Tenant Damage?"
        sub="Sometimes. The type of damage and how it happened determines whether your policy responds."
      />
      <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Does Insurance Cover Tenant Damage?" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          The short answer is: it depends. Landlord insurance may cover some types of tenant damage and
          will not cover others. The determining factors are whether the damage was accidental or
          intentional, whether it qualifies as a covered peril, and what your specific policy says.
        </p>

        <h2>Accidental damage versus intentional damage</h2>
        <p>
          Accidental damage caused by a tenant may be covered. If a tenant accidentally starts a
          small kitchen fire, leaves the water running and floods the bathroom, or backs a vehicle
          into the garage door, those incidents may qualify as covered losses under your landlord policy.
        </p>
        <p>
          Intentional damage is different. If a tenant deliberately punches holes in walls, breaks
          windows in anger, or destroys fixtures before moving out, that is vandalism. Standard
          landlord policies do not automatically cover vandalism by occupants. Some policies include
          malicious damage by tenants as an endorsement. Many do not. Check your policy.
        </p>
        <p>
          The reason for the distinction: insurance is designed to cover sudden, unexpected events, not
          foreseeable damage from the people you chose to rent to.
        </p>

        <h2>Wear and tear is never covered</h2>
        <p>
          Worn carpet, scuffed walls, stained countertops, doors that no longer latch properly, and
          similar deterioration from normal use are all wear and tear. No landlord policy covers these.
          They are a cost of doing business as a landlord.
        </p>
        <p>
          Security deposits exist to address wear and tear beyond normal use. Insurance is for sudden,
          accidental, or covered damage. If you are filing claims for routine tenant damage at move-out,
          you are using the policy incorrectly and will likely face non-renewal.
        </p>

        <h2>What a vandalism endorsement covers</h2>
        <p>
          Some carriers offer a tenant vandalism endorsement or malicious damage coverage as an
          add-on to the standard landlord policy. This endorsement specifically covers intentional
          damage caused by a tenant.
        </p>
        <p>
          It typically covers things like broken fixtures, punched walls, damaged appliances, and
          similar destruction. The deductible on vandalism coverage is usually higher than on standard
          property claims.
        </p>
        <p>
          If you are buying a new policy or renewing, ask whether tenant vandalism coverage is available.
          Not every carrier offers it. It is worth having if you can get it.
        </p>

        <h2>Security deposit versus insurance claim for tenant damage</h2>
        <p>
          The security deposit is your first line of recovery for tenant damage. Use it. Do not file
          an insurance claim for damage that the security deposit covers.
        </p>
        <p>
          Filing small claims for tenant damage at move-out is one of the fastest ways to get
          non-renewed by your carrier. Insurance is for significant, unexpected losses. A security
          deposit is for normal tenant damage.
        </p>
        <p>
          If the damage significantly exceeds the security deposit, that is when insurance becomes
          relevant. Document everything with photos at move-in and move-out. Get repair estimates.
          If the damage is clearly above the security deposit and is the type the policy may cover,
          contact your agent before filing a formal claim.
        </p>

        <h2>What to do when a tenant causes damage</h2>
        <p>
          Document the damage immediately with time-stamped photos. Get repair estimates from at least
          two contractors. Apply the security deposit against documented costs. Calculate what remains
          above the deposit.
        </p>
        <p>
          If the remaining damage is above your deductible and is the type your policy may cover, call
          your agent. Describe the damage and what caused it. Ask whether it qualifies as a covered loss
          before filing a formal claim. Your agent can help you make that determination without triggering
          the claims process prematurely.
        </p>
        <p>
          If the remaining damage is below your deductible, it is more cost-effective to pay out of
          pocket than to file a claim. Repeated small claims will affect your renewal options and pricing.
        </p>

        <h2>Bottom line</h2>
        <p>
          Some tenant damage is covered. Some is not. Accidental damage from a covered peril may qualify.
          Intentional damage requires a vandalism endorsement. Wear and tear is never covered. Your
          security deposit handles normal move-out damage. Insurance handles the exceptions.
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
