import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata = {
  title: "Short-Term Rental Insurance for Airbnb, VRBO, and Vacation Properties",
  description:
    "Purpose-built STR coverage with host liability, amenity liability, and business income. Standard homeowner and landlord policies do not cover Airbnb or VRBO use.",
};

export default function ShortTermRentalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Airbnb · VRBO · vacation"
        title="Short-Term Rental Insurance, Airbnb, VRBO, and Vacation Properties."
        sub="Standard homeowner and landlord policies do not cover short-term rental activity. Here is what you actually need, and the carriers that write it."
      />
      <Breadcrumbs items={[{ label: "Short-Term Rentals" }]} />

      <article className="container-narrow prose-investor pb-4 pt-8">
        <p>
          Short-term rentals are a commercial use of residential property.
          Standard homeowner and landlord (DP-3) forms are written for
          long-term occupancy and routinely deny claims that arise from
          paying guest stays.
        </p>
        <p>
          Whether you operate full-time on Airbnb, list a few weekends a
          month on VRBO, or run a peak-season vacation rental, the right
          policy is a purpose-built STR form. Below is what those policies
          cover, what they don't, and why platform "host protection" alone
          is not enough.
        </p>

        <h2>Why standard homeowner and landlord policies don't cover STR</h2>
        <p>
          Insurance carriers price standard residential policies based on
          long-term, single-occupancy use. Short-term rentals introduce
          different risks:
        </p>
        <ul>
          <li>High guest turnover (different people every few days).</li>
          <li>Guests who are unfamiliar with the property and its hazards.</li>
          <li>Higher likelihood of parties, alcohol use, and accidents.</li>
          <li>Pool, hot tub, fire pit, and amenity liability that residential carriers don't price for.</li>
          <li>Theft and damage from short-stay guests.</li>
        </ul>
        <p>
          Buried in most homeowner and landlord policy language are
          conditions that exclude or limit coverage for "rental periods of
          less than 30 days," "transient occupancy," or "business use." If
          you have a covered loss during STR activity, the claim can be
          denied.
        </p>

        <h2>What an Airbnb or VRBO host policy actually covers</h2>
        <p>
          A purpose-built short-term rental policy typically includes:
        </p>
        <ul>
          <li><strong>Building and contents</strong> at replacement cost, written for STR occupancy.</li>
          <li><strong>Host liability</strong> for guest injuries and property damage to others, typically $1M to $2M per occurrence.</li>
          <li><strong>Amenity liability</strong> for pools, hot tubs, fire pits, trampolines, and other higher-risk features (subject to underwriting).</li>
          <li><strong>Business income</strong> for lost rental income if a covered loss takes the property out of service.</li>
          <li><strong>Theft of contents</strong> by guests.</li>
          <li><strong>Malicious damage</strong> by guests (subject to deductible).</li>
          <li>Optional: <strong>bedbug coverage</strong>, which standard policies almost always exclude.</li>
        </ul>

        <h2>Don't rely on Airbnb's host protection</h2>
        <p>
          Airbnb's "Host Liability Insurance" and "AirCover" provide some
          baseline protection, but they have meaningful gaps:
        </p>
        <ul>
          <li>Limits and sublimits that may be inadequate for higher-value claims.</li>
          <li>Coverage tied to bookings on Airbnb only, not to other channels (VRBO, direct, off-platform).</li>
          <li>No coverage for the structure itself in many scenarios (just liability).</li>
          <li>Long claim processes with the platform, not a real adjuster relationship.</li>
          <li>Exclusions for specific amenity-related claims and certain damage types.</li>
        </ul>
        <p>
          Treat platform protection as a backstop. Carry a real STR policy
          as your primary coverage.
        </p>

        <h2>Commercial exposure triggers</h2>
        <p>
          A few specific situations push your coverage from "borderline" to
          "definitely commercial" and require the right form:
        </p>
        <ul>
          <li>You list the property on multiple platforms (Airbnb, VRBO, direct booking).</li>
          <li>The property is held in an LLC.</li>
          <li>You file the rental income on Schedule C as a business (not Schedule E as passive rental).</li>
          <li>Average length of stay is under 30 days.</li>
          <li>You provide hotel-like services (cleaning between stays, hosted check-in, on-site amenities).</li>
        </ul>
        <p>
          Any of these and you need an STR-specific policy. All of them and
          you may need a small commercial package depending on the scale.
        </p>

        <h2>Amenity liability: pools, hot tubs, and high-risk features</h2>
        <p>
          STR properties often have amenities that drive bookings and also
          drive claims. Pools, hot tubs, fire pits, trampolines, ATVs, and
          docks are the recurring drivers of injury claims.
        </p>
        <p>
          Most STR carriers will write properties with these amenities, but
          underwriting often requires:
        </p>
        <ul>
          <li>Photo documentation of amenities and safety equipment.</li>
          <li>Safety covers, fencing, and lockable gates for pools and hot tubs.</li>
          <li>Posted house rules acknowledging amenity risk.</li>
          <li>Higher liability limits (often $1M to $2M per occurrence).</li>
        </ul>
        <p>
          Some specific amenities (trampolines, certain dog breeds, ATVs)
          are excluded by some carriers entirely. We know which carriers
          will write what, so you don't waste time on declined submissions.
        </p>

        <h2>Business income for STR</h2>
        <p>
          Business income (also called "loss of income" or "rental loss")
          pays the rental income you would have collected during a covered
          shutdown. For STR properties this is often more meaningful than
          long-term rental loss of rents because daily rental rates are
          higher and properties book months in advance.
        </p>
        <p>
          Standard limits are 12 months of historical rental income. For
          peak-season properties, look for forms that calculate based on
          peak rates rather than annual averages.
        </p>

        <h2>Carriers that write STR</h2>
        <p>
          Specialty STR carriers include Steadily, REInsurePro, Obie,
          Proper, and Slice. Plus several E&S carriers that write STR with
          higher limits and more flexibility for unusual properties.
        </p>
        <p>
          We work across multiple STR markets. Send us the address, average
          nightly rate, channels you list on, amenities, and any prior
          claims, and we will quote it. Most STR quotes turn around the
          same day.
        </p>
      </article>

      <CTASection
        heading="Get a real STR policy."
        sub="Quoting takes 60 seconds. Coverage that actually responds to a guest claim."
      />

      <RelatedLinks
        items={[
          {
            href: "/rentals-rehabs",
            title: "Long-term rentals",
            desc: "DP-3 coverage for 1-4 unit traditional rentals.",
          },
          {
            href: "/how-much-does-real-estate-investor-insurance-cost",
            title: "Cost breakdown",
            desc: "STR rates and what affects them.",
          },
          {
            href: "/faq",
            title: "FAQ",
            desc: "More on STR coverage in the FAQ.",
          },
        ]}
      />
    </>
  );
}
