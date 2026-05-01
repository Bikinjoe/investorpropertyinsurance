"use client";

import Link from "next/link";
import { useState, useMemo, useCallback } from "react";

function fmt(n: number, decimals = 0) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export default function VacancyCalculator() {
  const [monthlyRent, setMonthlyRent] = useState("");
  const [vacancyRate, setVacancyRate] = useState(8);
  const [vacantMonths, setVacantMonths] = useState("0.96"); // 8% * 12
  const [annualPremium, setAnnualPremium] = useState("");

  // Keep slider and months input in sync
  const handleRateChange = useCallback((rate: number) => {
    const clamped = Math.min(30, Math.max(0, rate));
    setVacancyRate(clamped);
    setVacantMonths(((clamped / 100) * 12).toFixed(2));
  }, []);

  const handleMonthsChange = useCallback((months: string) => {
    setVacantMonths(months);
    const m = parseFloat(months) || 0;
    const rate = Math.min(30, (m / 12) * 100);
    setVacancyRate(Math.round(rate * 10) / 10);
  }, []);

  const results = useMemo(() => {
    const rent = parseFloat(monthlyRent) || 0;
    if (rent <= 0) return null;

    const annualGross = rent * 12;
    const vacancyCost = annualGross * (vacancyRate / 100);
    const effectiveIncome = annualGross - vacancyCost;
    const monthsVacant = (vacancyRate / 100) * 12;
    const dailyCost = rent / 30;
    const weeklyCost = dailyCost * 7;

    const premium = parseFloat(annualPremium) || 0;
    const premiumPct = premium > 0 && effectiveIncome > 0
      ? (premium / effectiveIncome) * 100
      : null;

    return {
      annualGross,
      vacancyCost,
      effectiveIncome,
      monthsVacant,
      dailyCost,
      weeklyCost,
      premiumPct,
    };
  }, [monthlyRent, vacancyRate, annualPremium]);

  const inputClass =
    "mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame";
  const labelClass = "block text-sm font-semibold text-foreground";

  return (
    <div className="space-y-8">
      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-lg border border-border bg-surface-2 p-6 space-y-6"
      >
        {/* Monthly Rent */}
        <div>
          <label className={labelClass}>Monthly Rent</label>
          <div className="relative mt-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">$</span>
            <input
              type="number"
              min="0"
              placeholder="2,000"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(e.target.value)}
              className="w-full rounded-md border border-border bg-surface py-2 pl-7 pr-3 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
            />
          </div>
        </div>

        {/* Vacancy Rate slider + months */}
        <div>
          <div className="flex items-center justify-between">
            <label className={labelClass}>Expected Vacancy Rate</label>
            <span className="text-sm font-bold text-flame">{vacancyRate}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="30"
            step="0.5"
            value={vacancyRate}
            onChange={(e) => handleRateChange(parseFloat(e.target.value))}
            className="mt-2 w-full accent-flame"
          />
          <div className="mt-1 flex justify-between text-xs text-muted">
            <span>0%</span>
            <span>15%</span>
            <span>30%</span>
          </div>
        </div>

        <div>
          <label className={labelClass}>Or enter vacant months per year</label>
          <div className="relative mt-1">
            <input
              type="number"
              min="0"
              max="12"
              step="0.1"
              placeholder="0.96"
              value={vacantMonths}
              onChange={(e) => handleMonthsChange(e.target.value)}
              className="w-full rounded-md border border-border bg-surface py-2 pl-3 pr-16 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted">
              months
            </span>
          </div>
          <p className="mt-1 text-xs text-muted">Updates the rate above. Default 8% ≈ 0.96 months/year.</p>
        </div>

        {/* Insurance premium (optional) */}
        <div>
          <label className={labelClass}>
            Annual Insurance Premium{" "}
            <span className="font-normal text-muted">(optional)</span>
          </label>
          <div className="relative mt-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">$</span>
            <input
              type="number"
              min="0"
              placeholder="1,200"
              value={annualPremium}
              onChange={(e) => setAnnualPremium(e.target.value)}
              className="w-full rounded-md border border-border bg-surface py-2 pl-7 pr-3 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
            />
          </div>
          <p className="mt-1 text-xs text-muted">
            Enter your premium to see what it costs as a share of effective income.
          </p>
        </div>
      </form>

      {/* Results */}
      {results ? (
        <div className="space-y-4">
          {/* Primary metrics */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-surface p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Annual Gross Rent</p>
              <p className="mt-1 text-2xl font-bold text-foreground">{fmt(results.annualGross)}</p>
              <p className="mt-0.5 text-xs text-muted">at 0% vacancy</p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-600">Estimated Vacancy Cost</p>
              <p className="mt-1 text-2xl font-bold text-red-700">{fmt(results.vacancyCost)}</p>
              <p className="mt-0.5 text-xs text-red-600">lost to vacancy per year</p>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-700">Effective Annual Income</p>
              <p className="mt-1 text-2xl font-bold text-green-800">{fmt(results.effectiveIncome)}</p>
              <p className="mt-0.5 text-xs text-green-700">after vacancy</p>
            </div>
          </div>

          {/* Vacancy cost breakdown */}
          <div className="rounded-lg border border-border bg-surface p-5 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-flame">
              What Vacancy Actually Costs
            </h3>
            <div className="grid gap-3 sm:grid-cols-3 text-sm">
              <div>
                <p className="text-muted">Each vacant month</p>
                <p className="mt-0.5 text-lg font-bold text-foreground">{fmt(parseFloat(monthlyRent) || 0)}</p>
              </div>
              <div>
                <p className="text-muted">Each vacant week</p>
                <p className="mt-0.5 text-lg font-bold text-foreground">{fmt(results.weeklyCost, 0)}</p>
              </div>
              <div>
                <p className="text-muted">Each vacant day</p>
                <p className="mt-0.5 text-lg font-bold text-foreground">{fmt(results.dailyCost, 0)}</p>
              </div>
            </div>
            <p className="text-sm text-muted">
              At {vacancyRate}% vacancy, you lose roughly{" "}
              <strong className="text-foreground">{results.monthsVacant.toFixed(1)} months</strong> of rent per year.
            </p>
          </div>

          {/* Insurance angle */}
          <div className="rounded-lg border border-flame/30 bg-surface-2 p-5 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-flame">
              What Insurance Can (and Can't) Do About Vacancy
            </h3>
            <p className="text-sm text-muted">
              Standard landlord insurance does not cover vacancy by itself. But if your property becomes vacant due to a covered loss — fire, storm, major water damage — loss of rental income coverage may replace the rent while repairs happen.
            </p>
            {results.premiumPct !== null && (
              <div className="rounded-md border border-border bg-surface p-3">
                <p className="text-sm text-muted">
                  Your insurance costs{" "}
                  <strong className="text-foreground">
                    {results.premiumPct.toFixed(1)}% of your effective annual rental income
                  </strong>
                  . That's{" "}
                  {fmt(parseFloat(annualPremium) || 0)}/year to protect against catastrophic loss.
                </p>
              </div>
            )}
            <Link
              href="/get-a-quote"
              className="inline-flex items-center font-semibold text-flame hover:underline text-sm"
            >
              Make sure your policy includes loss of rental income coverage &rarr;
            </Link>
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-border bg-surface p-8 text-center text-muted">
          Enter your monthly rent to see your vacancy impact analysis.
        </div>
      )}
    </div>
  );
}
