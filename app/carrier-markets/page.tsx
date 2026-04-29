import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Carrier Markets | Investor Property Insurance",
  description:
    "We work with 20+ insurance carriers for real estate investors and property owners across the Western US. Obie, Steadily, REInsurePro, Hartford, Travelers, Guard, BHHC, US Assure, and more.",
};

const carriers = [
  {
    name: "BHHC",
    fullName: "Berkshire Hathaway Homestate Companies",
    logo: "/images/carriers/bhhc.jpg",
    bestFor:
      "Commercial property owners, LLC-owned rentals, and portfolio landlords who need a financially strong carrier with a stable renewal history.",
    strengths: [
      "Strong financial backing from Berkshire Hathaway",
      "Stable renewal history — less carrier disruption",
      "Good for larger property values and portfolios",
    ],
    states: ["OR", "WA", "CA", "ID", "NV"],
  },
  {
    name: "The Hartford",
    fullName: "The Hartford",
    logo: "/images/carriers/hartford.jpg",
    bestFor:
      "Small commercial property owners and professional-service firms needing BOP, GL, and property coverage bundled under one carrier.",
    strengths: [
      "Broad appetite for small commercial accounts",
      "Strong BOP product for property owners and service firms",
      "Good for professional firms needing GL and property together",
    ],
    states: ["OR", "WA", "CA", "ID", "NV", "UT", "AZ", "CO", "WY", "MT"],
  },
  {
    name: "Openly",
    fullName: "Openly",
    logo: "/images/carriers/openly.jpg",
    bestFor:
      "Individual homeowners and landlords with 1–4 unit rental properties who want fast digital quoting at a competitive price.",
    strengths: [
      "Fast digital quoting — same-day turnaround common",
      "Competitive personal lines pricing",
      "Good for individually owned rentals and primary homes",
    ],
    states: ["OR", "WA", "CA", "ID", "NV", "AZ", "CO"],
  },
  {
    name: "Liberty Mutual / Safeco",
    fullName: "Liberty Mutual / Safeco",
    logo: "/images/carriers/libertymutual.jpg",
    bestFor:
      "Property owners and investor households needing personal lines coverage — home, auto, umbrella — under one carrier.",
    strengths: [
      "Broad personal lines appetite across the western US",
      "Competitive for home/auto/umbrella bundle accounts",
      "Safeco now fully integrated under Liberty Mutual",
    ],
    states: ["OR", "WA", "CA", "ID", "NV", "UT", "AZ", "CO", "WY", "MT"],
  },
  {
    name: "Travelers",
    fullName: "Travelers",
    logo: "/images/carriers/travelers.jpg",
    bestFor:
      "Commercial property owners and small business owners who need BOP or GL from a carrier with a top-tier financial rating.",
    strengths: [
      "A++ financial rating — among the strongest in the industry",
      "Good commercial property appetite",
      "Competitive for professional-service firms and small commercial",
    ],
    states: ["OR", "WA", "CA", "ID", "NV", "UT", "AZ", "CO", "WY", "MT"],
  },
  {
    name: "Obie",
    fullName: "Obie",
    logo: "/images/carriers/obie.jpg",
    bestFor:
      "Individual landlords and rental property investors, especially 1–10 unit portfolios, who want a purpose-built investor product.",
    strengths: [
      "Purpose-built for rental property investors",
      "Fast digital intake — no lengthy applications",
      "Competitive pricing for clean, stabilized rental risks",
    ],
    states: ["OR", "WA", "CA", "ID", "NV", "UT", "AZ", "CO"],
  },
  {
    name: "Steadily",
    fullName: "Steadily",
    logo: "/images/carriers/steadily.jpg",
    bestFor:
      "Landlords, short-term rental owners, and investors with active rental portfolios — including Airbnb and VRBO operators.",
    strengths: [
      "Covers short-term rentals most carriers won't touch",
      "Fast digital process for single properties and portfolios",
      "Good for investors actively adding properties",
    ],
    states: ["OR", "WA", "CA", "ID", "NV", "AZ", "CO", "UT"],
  },
  {
    name: "REInsurePro",
    fullName: "REInsurePro",
    logo: "/images/carriers/reinsurepo.jpg",
    bestFor:
      "Real estate investors with portfolios, rental properties, and LLC- or trust-owned rentals who need investor-specific product design.",
    strengths: [
      "Investor-focused product design — built for how investors actually own property",
      "Good for LLC and trust ownership structures",
      "Portfolio pricing available for multi-property accounts",
    ],
    states: ["OR", "WA", "CA", "ID", "NV", "UT", "AZ", "CO", "WY", "MT"],
  },
  {
    name: "Guard",
    fullName: "Berkshire Hathaway Guard",
    logo: "/images/carriers/guard.jpg",
    bestFor:
      "Small commercial property owners and LLC-owned rental portfolios that need Berkshire Hathaway financial strength at the small commercial level.",
    strengths: [
      "Backed by Berkshire Hathaway",
      "Strong commercial property appetite for smaller accounts",
      "Good renewal stability — low non-renewal risk",
    ],
    states: ["OR", "WA", "CA", "ID", "NV", "CO"],
  },
  {
    name: "US Assure",
    fullName: "US Assure",
    logo: "/images/carriers/usassure.svg",
    bestFor:
      "Builders risk and renovation projects tied to real estate investor activity — ground-up construction, rehabs, and occupied-while-renovating properties.",
    strengths: [
      "Strong builders risk product purpose-built for construction and renovation",
      "Good for renovation and rehab projects at all stages",
      "Fast bind process — coverage when you need it",
    ],
    states: ["OR", "WA", "CA", "ID", "NV", "UT", "AZ", "CO", "WY", "MT"],
  },
  {
    name: "USLI",
    fullName: "USLI",
    logo: "/images/carriers/usli.jpg",
    bestFor:
      "Professional-service firms and consultants needing E&O, GL, or specialty liability coverage that standard carriers often decline.",
    strengths: [
      "Strong professional liability appetite",
      "Good for consultants, agencies, and service firms",
      "Specialty underwriting — handles accounts standard carriers pass on",
    ],
    states: ["OR", "WA", "CA", "ID", "NV", "UT", "AZ", "CO", "WY", "MT"],
  },
  {
    name: "CrossCover",
    fullName: "CrossCover Insurance",
    logo: "/images/carriers/crosscover.jpg",
    bestFor:
      "Real estate investors and property owners with specialty or hard-to-place risks that standard markets won't write.",
    strengths: [
      "Specialty market access for non-standard risks",
      "Good for distressed, vacant, or unusual property types",
      "Flexible underwriting — fewer automatic declines",
    ],
    states: ["OR", "WA", "CA", "ID", "NV", "UT", "AZ", "CO", "WY", "MT"],
  },
  {
    name: "National General",
    fullName: "National General",
    logo: "/images/carriers/nationalgeneral.jpg",
    bestFor:
      "Personal auto and personal lines coverage for property owners and investor households who are value-conscious buyers.",
    strengths: [
      "Competitive personal auto pricing",
      "Good for value-conscious personal lines buyers",
      "Broad personal lines appetite across the western US",
    ],
    states: ["OR", "WA", "CA", "ID", "NV", "AZ", "CO"],
  },
  {
    name: "Aegis",
    fullName: "Aegis General Insurance Agency",
    logo: "/images/carriers/aegis.jpg",
    bestFor:
      "Personal lines for property owners, especially those with non-standard or specialty personal risks that standard carriers decline.",
    strengths: [
      "Strong personal lines appetite including non-standard risks",
      "Good for clients who need flexible underwriting",
      "Western US focus aligns with our service area",
    ],
    states: ["OR", "WA", "CA", "ID", "NV", "UT", "AZ", "CO", "WY", "MT"],
  },
];

export default function CarrierMarketsPage() {
  return (
    <>
      <PageHero
        eyebrow="Market Access"
        title="Our Carrier Markets"
        sub="We work with 20+ insurance carriers to find the right fit for real estate investors, income-producing property owners, and professional-service firms across the Western US."
      />
      <Breadcrumbs items={[{ label: "Carrier Markets" }]} />

      <section className="container-narrow py-10">
        <p className="text-base text-muted sm:text-lg">
          Carrier fit matters. Placing a rental portfolio with the wrong carrier creates pricing problems, coverage gaps, and renewal headaches. We route each account to the market most likely to provide the best combination of coverage, price, and long-term stability — based on your ownership structure, property type, state, and risk profile.
        </p>
      </section>

      <section className="container-narrow pb-16">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Carriers We Work With
        </h2>
        <p className="mt-3 text-base text-muted sm:text-lg">
          These are some of the carriers we access for real estate investor and property owner accounts. Each has specific strengths, appetites, and best-fit account profiles.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {carriers.map((carrier) => (
            <div
              key={carrier.name}
              className="flex flex-col rounded-lg border border-border bg-white p-5 shadow-sm"
            >
              {/* Logo */}
              <div className="flex h-14 items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={carrier.logo}
                  alt={`${carrier.fullName} logo`}
                  loading="lazy"
                  style={{ maxWidth: 120, maxHeight: 50, objectFit: "contain" }}
                />
              </div>

              {/* Name */}
              <h3 className="mt-4 text-lg font-bold text-foreground">
                {carrier.fullName}
              </h3>

              {/* Best for */}
              <p className="mt-2 text-sm text-muted leading-relaxed">
                <span className="font-semibold text-foreground">Best for: </span>
                {carrier.bestFor}
              </p>

              {/* Strengths */}
              <div className="mt-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Strengths
                </p>
                <ul className="mt-1.5 space-y-1">
                  {carrier.strengths.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-0.5 text-flame flex-shrink-0">→</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* States */}
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  States
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {carrier.states.map((state) => (
                    <span
                      key={state}
                      className="rounded-md bg-surface-2 px-2 py-0.5 text-xs font-medium text-muted border border-border"
                    >
                      {state}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-2 border-y border-border">
        <div className="container-narrow py-14 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Not sure which carrier fits your situation?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted sm:text-lg">
            Carrier fit depends on ownership structure, property type, occupancy, state, and your account profile. We do the routing so you don't have to guess. Start with a quick intake and we'll identify the right path.
          </p>
          <div className="mt-6">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center rounded-md bg-flame px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-flame/90 focus:outline-none focus:ring-2 focus:ring-flame"
            >
              Start your property insurance review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
