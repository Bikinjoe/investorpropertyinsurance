"use client";

import Link from "next/link";
import { useState } from "react";

function fmtDollar(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

type LiabilityOption = {
  value: string;
  label: string;
  recommendation: string;
  liabilityLabel: string;
};

const liabilityOptions: LiabilityOption[] = [
  {
    value: "one",
    label: "I own 1 rental property",
    recommendation:
      "Most agents recommend a minimum of $300,000 in liability. This covers most slip-and-fall injuries and basic claims.",
    liabilityLabel: "$300,000",
  },
  {
    value: "two_three",
    label: "I own 2–3 rental properties",
    recommendation:
      "With multiple properties, your exposure is higher. $500,000 in liability is a reasonable starting point. Consider a personal or commercial umbrella policy for broader protection.",
    liabilityLabel: "$500,000",
  },
  {
    value: "four_plus",
    label: "I own 4 or more rental properties",
    recommendation:
      "At this scale, umbrella coverage becomes important. Start with $300,000–$500,000 per property and add a $1M umbrella on top.",
    liabilityLabel: "$300,000–$500,000 per property + $1M umbrella",
  },
  {
    value: "llc",
    label: "My property is owned by an LLC",
    recommendation:
      "Liability coverage still matters even with an LLC. The LLC provides some asset protection, but insurance is what actually pays defense costs and judgments.",
    liabilityLabel: "$300,000 minimum (LLC doesn't replace coverage)",
  },
];

export default function HowMuchCoverage() {
  const [replacementCost, setReplacementCost] = useState("");
  const [liabilitySelection, setLiabilitySelection] = useState<string | null>(null);
  const [monthlyRent, setMonthlyRent] = useState("");

  const rcValue = parseFloat(replacementCost.replace(/,/g, "")) || 0;
  const rentValue = parseFloat(monthlyRent.replace(/,/g, "")) || 0;
  const lossOfRentalIncome = rentValue * 6;

  const selectedLiability = liabilityOptions.find((o) => o.value === liabilitySelection) ?? null;

  const showSummary = rcValue > 0 && liabilitySelection !== null && rentValue > 0;

  const inputClass =
    "w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame mt-1";

  return (
    <div className="space-y-8">
      {/* Section 1: Dwelling Coverage */}
      <div className="rounded-lg border border-border bg-surface-2 p-6">
        <h2 className="text-lg font-bold text-foreground">Section 1: Dwelling Coverage (Property)</h2>
        <div className="mt-4">
          <label className="block text-sm font-semibold text-foreground">
            Estimated Replacement Cost ($)
          </label>
          <div className="relative mt-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">$</span>
            <input
              type="number"
              min="0"
              placeholder="300,000"
              value={replacementCost}
              onChange={(e) => setReplacementCost(e.target.value)}
              className="w-full rounded-md border border-border bg-surface py-2 pl-7 pr-3 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
            />
          </div>
          <p className="mt-2 text-sm text-muted">
            This is what it would cost to rebuild the structure from scratch — not the market value or purchase price. For a single-family home, this is often 60–80% of market value. When in doubt, your agent can help estimate this.
          </p>
        </div>

        {rcValue > 0 && (
          <div className="mt-5 space-y-3">
            <div className="rounded-md border border-flame/30 bg-white p-4">
              <p className="text-sm font-semibold text-foreground">
                You should carry at least{" "}
                <span className="text-flame">{fmtDollar(rcValue)}</span> in dwelling coverage.
              </p>
              <p className="mt-1 text-sm text-muted">
                Carrying less means you're self-insuring the gap.
              </p>
            </div>
            <div className="rounded-md border border-border bg-white p-4">
              <p className="text-sm text-foreground">
                <span className="font-semibold">Replacement cost vs. actual cash value:</span>{" "}
                Replacement cost policies pay to rebuild at current prices. Actual cash value policies subtract depreciation. Replacement cost is almost always worth the extra premium.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Section 2: Liability Coverage */}
      <div className="rounded-lg border border-border bg-surface-2 p-6">
        <h2 className="text-lg font-bold text-foreground">Section 2: Liability Coverage</h2>
        <p className="mt-1 text-sm text-muted">Select the option that fits your situation.</p>
        <div className="mt-4 space-y-2">
          {liabilityOptions.map((opt) => {
            const selected = liabilitySelection === opt.value;
            return (
              <label
                key={opt.value}
                className={`flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3 transition-colors ${
                  selected
                    ? "border-flame bg-white font-semibold text-foreground"
                    : "border-border bg-white text-foreground hover:border-flame/50"
                }`}
              >
                <input
                  type="radio"
                  name="liability"
                  value={opt.value}
                  checked={selected}
                  onChange={() => setLiabilitySelection(opt.value)}
                  className="h-4 w-4 accent-flame"
                />
                <span className="text-sm">{opt.label}</span>
              </label>
            );
          })}
        </div>

        {selectedLiability && (
          <div className="mt-5 rounded-md border border-flame/30 bg-white p-4">
            <p className="text-sm font-semibold text-foreground">
              Recommended liability:{" "}
              <span className="text-flame">{selectedLiability.liabilityLabel}</span>
            </p>
            <p className="mt-2 text-sm text-muted">{selectedLiability.recommendation}</p>
          </div>
        )}
      </div>

      {/* Section 3: Loss of Rental Income */}
      <div className="rounded-lg border border-border bg-surface-2 p-6">
        <h2 className="text-lg font-bold text-foreground">Section 3: Loss of Rental Income</h2>
        <div className="mt-4">
          <label className="block text-sm font-semibold text-foreground">
            Monthly Rent ($)
          </label>
          <div className="relative mt-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">$</span>
            <input
              type="number"
              min="0"
              placeholder="1,800"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(e.target.value)}
              className="w-full rounded-md border border-border bg-surface py-2 pl-7 pr-3 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
            />
          </div>
        </div>

        {rentValue > 0 && (
          <div className="mt-5 space-y-3">
            <div className="rounded-md border border-flame/30 bg-white p-4">
              <p className="text-sm font-semibold text-foreground">
                You should carry at least{" "}
                <span className="text-flame">{fmtDollar(lossOfRentalIncome)}</span> in loss of rental income coverage.
              </p>
              <p className="mt-1 text-sm text-muted">
                That's 6 months of rent, which covers most major repairs.
              </p>
            </div>
            <div className="rounded-md border border-border bg-white p-4">
              <p className="text-sm text-muted">
                If a fire or major water event makes your unit unlivable, this coverage pays you while repairs happen. Without it, you still owe the mortgage but collect no rent.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Summary */}
      {showSummary && (
        <div className="rounded-lg border border-flame/40 bg-surface-2 p-6">
          <h2 className="text-lg font-bold text-foreground">Your Coverage Summary</h2>
          <p className="mt-1 text-sm text-muted">
            These are starting points. Your agent will confirm based on your specific property, carrier requirements, and risk profile.
          </p>

          <div className="mt-5 space-y-3">
            <div className="flex items-start justify-between gap-4 rounded-md border border-border bg-white px-4 py-3">
              <span className="text-sm font-semibold text-foreground">Recommended dwelling coverage</span>
              <span className="text-sm font-bold text-flame whitespace-nowrap">{fmtDollar(rcValue)}</span>
            </div>
            <div className="flex items-start justify-between gap-4 rounded-md border border-border bg-white px-4 py-3">
              <span className="text-sm font-semibold text-foreground">Recommended liability</span>
              <span className="text-sm font-bold text-flame text-right max-w-[200px]">{selectedLiability?.liabilityLabel}</span>
            </div>
            <div className="flex items-start justify-between gap-4 rounded-md border border-border bg-white px-4 py-3">
              <span className="text-sm font-semibold text-foreground">Recommended loss of rental income</span>
              <span className="text-sm font-bold text-flame whitespace-nowrap">{fmtDollar(lossOfRentalIncome)}</span>
            </div>
          </div>

          <div className="mt-6 rounded-md border border-flame/20 bg-white p-4">
            <p className="text-sm font-semibold text-foreground">
              Ready to get actual coverage in place?
            </p>
            <Link
              href="/get-a-quote"
              className="mt-3 inline-flex items-center rounded-md bg-flame px-6 py-3 text-sm font-bold text-white hover:bg-flame/90 transition-colors"
            >
              Start your review at investorpropertyinsurance.com →
            </Link>
          </div>
        </div>
      )}

      {!showSummary && (
        <div className="rounded-lg border border-dashed border-border bg-surface p-8 text-center text-muted">
          Fill in all three sections to see your personalized coverage summary.
        </div>
      )}
    </div>
  );
}
