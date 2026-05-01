"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

type PropertyType = "sfr" | "duplex" | "triplex" | "apartment" | "condo";
type StateCode = "OR" | "WA" | "CA" | "ID" | "NV" | "UT" | "AZ" | "CO" | "WY" | "MT";
type CoverageType = "basic" | "standard" | "broad";
type LiabilityLimit = "100k" | "300k" | "500k";
type Deductible = "500" | "1000" | "2500" | "5000";

const PROPERTY_TYPES: { value: PropertyType; label: string }[] = [
  { value: "sfr", label: "Single-Family Home" },
  { value: "duplex", label: "Duplex" },
  { value: "triplex", label: "Triplex / Fourplex" },
  { value: "apartment", label: "Small Apartment (5-10 units)" },
  { value: "condo", label: "Condo / Townhome" },
];

const WESTERN_STATES: { value: StateCode; label: string }[] = [
  { value: "OR", label: "Oregon" },
  { value: "WA", label: "Washington" },
  { value: "CA", label: "California" },
  { value: "ID", label: "Idaho" },
  { value: "NV", label: "Nevada" },
  { value: "UT", label: "Utah" },
  { value: "AZ", label: "Arizona" },
  { value: "CO", label: "Colorado" },
  { value: "WY", label: "Wyoming" },
  { value: "MT", label: "Montana" },
];

const COVERAGE_DESCRIPTIONS: Record<CoverageType, { title: string; description: string; bullets: string[] }> = {
  basic: {
    title: "Basic",
    description: "Named-peril coverage for the most common losses.",
    bullets: [
      "Fire and smoke damage",
      "Lightning strikes",
      "Windstorm and hail",
      "Liability protection",
      "Loss of rental income after a covered loss",
    ],
  },
  standard: {
    title: "Standard",
    description: "Broader coverage including water damage and theft.",
    bullets: [
      "Everything in Basic",
      "Water damage (accidental discharge)",
      "Theft and vandalism",
      "Freezing of plumbing",
      "Falling objects",
    ],
  },
  broad: {
    title: "Broad",
    description: "Open-peril coverage — protects against everything not explicitly excluded.",
    bullets: [
      "Everything in Standard",
      "Open perils on structure (broadest protection)",
      "Equipment breakdown coverage",
      "Extended replacement cost",
      "Higher sublimits on personal property",
    ],
  },
};

function fmt(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export default function InsuranceCostEstimator() {
  const [propertyType, setPropertyType] = useState<PropertyType>("sfr");
  const [replacementCost, setReplacementCost] = useState("");
  const [state, setState] = useState<StateCode>("OR");
  const [yearBuilt, setYearBuilt] = useState("");
  const [coverageType, setCoverageType] = useState<CoverageType>("standard");
  const [liabilityLimit, setLiabilityLimit] = useState<LiabilityLimit>("300k");
  const [deductible, setDeductible] = useState<Deductible>("1000");

  const results = useMemo(() => {
    const rc = parseFloat(replacementCost) || 0;
    const yb = parseInt(yearBuilt) || 0;
    if (rc <= 0 || yb <= 0) return null;

    // Base: 0.5% of replacement cost for SFR
    let base = rc * 0.005;

    // Property type multiplier
    const typeMultipliers: Record<PropertyType, number> = {
      sfr: 1.0,
      duplex: 1.2,
      triplex: 1.4,
      apartment: 1.8,
      condo: 0.7,
    };
    base *= typeMultipliers[propertyType];

    // State multiplier
    const stateMultiplier = state === "CA" ? 1.3 : state === "OR" ? 1.1 : 1.0;
    base *= stateMultiplier;

    // Year built multiplier
    const ageMultiplier = yb < 1970 ? 1.2 : yb < 1990 ? 1.1 : 1.0;
    base *= ageMultiplier;

    // Coverage type multiplier
    const coverageMultipliers: Record<CoverageType, number> = {
      basic: 0.85,
      standard: 1.0,
      broad: 1.15,
    };
    base *= coverageMultipliers[coverageType];

    // Liability multiplier
    const liabilityMultipliers: Record<LiabilityLimit, number> = {
      "100k": 0.95,
      "300k": 1.0,
      "500k": 1.08,
    };
    base *= liabilityMultipliers[liabilityLimit];

    // Deductible multiplier
    const deductibleMultipliers: Record<Deductible, number> = {
      "500": 1.1,
      "1000": 1.0,
      "2500": 0.9,
      "5000": 0.8,
    };
    base *= deductibleMultipliers[deductible];

    const annualLow = Math.round((base * 0.8) / 50) * 50;
    const annualHigh = Math.round((base * 1.2) / 50) * 50;
    const monthlyLow = Math.round(annualLow / 12);
    const monthlyHigh = Math.round(annualHigh / 12);

    return { annualLow, annualHigh, monthlyLow, monthlyHigh };
  }, [propertyType, replacementCost, state, yearBuilt, coverageType, liabilityLimit, deductible]);

  const inputClass =
    "mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame";
  const labelClass = "block text-sm font-semibold text-foreground";
  const coverageInfo = COVERAGE_DESCRIPTIONS[coverageType];

  return (
    <div className="space-y-8">
      {/* Disclaimer */}
      <div className="rounded-lg border border-gold/40 bg-yellow-50 p-4 text-sm text-yellow-900">
        <strong>Important:</strong> This is a rough estimate only. Actual premiums vary based on carrier, property condition, claims history, and underwriting. Use this to budget, not to quote.
      </div>

      {/* Form */}
      <form onSubmit={(e) => e.preventDefault()} className="rounded-lg border border-border bg-surface-2 p-6 space-y-6">
        <div>
          <label className={labelClass}>Property Type</label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value as PropertyType)}
            className={inputClass}
          >
            {PROPERTY_TYPES.map((pt) => (
              <option key={pt.value} value={pt.value}>
                {pt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Estimated Replacement Cost</label>
          <p className="mt-0.5 text-xs text-muted">What would it cost to rebuild? Not market value.</p>
          <div className="relative mt-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">$</span>
            <input
              type="number"
              min="0"
              placeholder="350,000"
              value={replacementCost}
              onChange={(e) => setReplacementCost(e.target.value)}
              className="w-full rounded-md border border-border bg-surface py-2 pl-7 pr-3 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>State</label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value as StateCode)}
              className={inputClass}
            >
              {WESTERN_STATES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass}>Year Built</label>
            <input
              type="number"
              min="1800"
              max={new Date().getFullYear()}
              placeholder="1985"
              value={yearBuilt}
              onChange={(e) => setYearBuilt(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        {/* Coverage Type */}
        <fieldset>
          <legend className={labelClass}>Coverage Type</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {(["basic", "standard", "broad"] as CoverageType[]).map((ct) => (
              <label
                key={ct}
                className={`flex cursor-pointer flex-col gap-1 rounded-md border p-3 text-sm ${
                  coverageType === ct
                    ? "border-flame bg-surface text-foreground"
                    : "border-border bg-surface text-muted hover:border-flame/60"
                }`}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="coverage"
                    value={ct}
                    checked={coverageType === ct}
                    onChange={() => setCoverageType(ct)}
                    className="accent-flame"
                  />
                  <span className="font-semibold capitalize">{ct}</span>
                </div>
                <span className="text-xs leading-snug text-muted">
                  {COVERAGE_DESCRIPTIONS[ct].description}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Liability Limit</label>
            <select
              value={liabilityLimit}
              onChange={(e) => setLiabilityLimit(e.target.value as LiabilityLimit)}
              className={inputClass}
            >
              <option value="100k">$100,000</option>
              <option value="300k">$300,000</option>
              <option value="500k">$500,000</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Deductible</label>
            <select
              value={deductible}
              onChange={(e) => setDeductible(e.target.value as Deductible)}
              className={inputClass}
            >
              <option value="500">$500</option>
              <option value="1000">$1,000</option>
              <option value="2500">$2,500</option>
              <option value="5000">$5,000</option>
            </select>
          </div>
        </div>
      </form>

      {/* Results */}
      {results ? (
        <div className="space-y-4">
          <div className="rounded-lg border border-flame/40 bg-surface-2 p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-flame">
              Estimated Annual Premium Range
            </p>
            <p className="mt-2 text-4xl font-extrabold text-foreground sm:text-5xl">
              {fmt(results.annualLow)} – {fmt(results.annualHigh)}
            </p>
            <p className="mt-2 text-base text-muted">
              Roughly <strong className="text-foreground">{fmt(results.monthlyLow)} – {fmt(results.monthlyHigh)}/month</strong>
            </p>
          </div>

          <div className="rounded-lg border border-border bg-surface p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-flame">
              What {coverageInfo.title} Coverage Includes
            </h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
              {coverageInfo.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-dashed border-border bg-surface p-4 text-xs text-muted">
            This estimate is based on simplified rating logic. Your actual premium depends on full underwriting review, property inspection, claims history, lender requirements, and carrier appetite.
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-border bg-surface p-8 text-center text-muted">
          Enter your property details above to see an estimated premium range.
        </div>
      )}

      {/* CTA */}
      <div className="rounded-lg border border-flame bg-surface-2 p-6">
        <h3 className="text-xl font-bold text-foreground">Ready to get an actual quote?</h3>
        <p className="mt-2 text-base text-muted">It takes about 5 minutes. We shop across 20+ carrier markets and come back with real numbers.</p>
        <Link href="/get-a-quote" className="btn-primary mt-4 inline-flex">
          Start your quote &rarr;
        </Link>
      </div>
    </div>
  );
}
