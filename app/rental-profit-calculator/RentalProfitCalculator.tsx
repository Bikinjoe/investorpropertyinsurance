"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

function fmt(n: number, decimals = 0) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function fmtPct(n: number) {
  return n.toFixed(2) + "%";
}

function monthlyMortgage(principal: number, annualRate: number, termYears: number): number {
  if (principal <= 0) return 0;
  if (annualRate === 0) return principal / (termYears * 12);
  const r = annualRate / 100 / 12;
  const n = termYears * 12;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

export default function RentalProfitCalculator() {
  // Purchase inputs
  const [purchasePrice, setPurchasePrice] = useState("");
  const [downPaymentMode, setDownPaymentMode] = useState<"pct" | "dollar">("pct");
  const [downPaymentPct, setDownPaymentPct] = useState("20");
  const [downPaymentDollar, setDownPaymentDollar] = useState("");
  const [interestRate, setInterestRate] = useState("7.0");
  const [loanTerm, setLoanTerm] = useState("30");
  const [closingCosts, setClosingCosts] = useState("0");

  // Income inputs
  const [monthlyRent, setMonthlyRent] = useState("");
  const [otherIncome, setOtherIncome] = useState("0");
  const [vacancyRate, setVacancyRate] = useState("8");

  // Expense inputs
  const [propertyTaxes, setPropertyTaxes] = useState("");
  const [insurance, setInsurance] = useState("125");
  const [hoa, setHoa] = useState("0");
  const [managementPct, setManagementPct] = useState("0");
  const [maintenancePct, setMaintenancePct] = useState("10");
  const [utilities, setUtilities] = useState("0");

  const results = useMemo(() => {
    const pp = parseFloat(purchasePrice) || 0;
    const dp =
      downPaymentMode === "pct"
        ? pp * ((parseFloat(downPaymentPct) || 0) / 100)
        : parseFloat(downPaymentDollar) || 0;
    const rate = parseFloat(interestRate) || 0;
    const term = parseFloat(loanTerm) || 30;
    const cc = parseFloat(closingCosts) || 0;
    const rent = parseFloat(monthlyRent) || 0;
    const other = parseFloat(otherIncome) || 0;
    const vacancy = parseFloat(vacancyRate) || 0;
    const taxes = parseFloat(propertyTaxes) || 0;
    const ins = parseFloat(insurance) || 0;
    const hoaAmt = parseFloat(hoa) || 0;
    const mgmtPct = parseFloat(managementPct) || 0;
    const maintPct = parseFloat(maintenancePct) || 0;
    const util = parseFloat(utilities) || 0;

    if (pp <= 0 || rent <= 0 || taxes <= 0) return null;

    const loanAmount = pp - dp;
    const mortgage = monthlyMortgage(loanAmount, rate, term);
    const grossMonthlyIncome = rent + other;
    const effectiveGrossIncome = grossMonthlyIncome * (1 - vacancy / 100);
    const mgmtAmt = rent * (mgmtPct / 100);
    const maintAmt = rent * (maintPct / 100);
    const totalExpenses = mortgage + taxes + ins + hoaAmt + mgmtAmt + maintAmt + util;
    const monthlyCashFlow = effectiveGrossIncome - totalExpenses;
    const annualCashFlow = monthlyCashFlow * 12;
    const totalCashInvested = dp + cc;
    const cocReturn = totalCashInvested > 0 ? (annualCashFlow / totalCashInvested) * 100 : 0;

    // NOI excludes mortgage
    const expensesExMortgage = taxes + ins + hoaAmt + mgmtAmt + maintAmt + util;
    const annualNOI = (effectiveGrossIncome - expensesExMortgage) * 12;
    const capRate = pp > 0 ? (annualNOI / pp) * 100 : 0;

    // Break-even rent: total expenses = (rent + other) * (1 - vacancy/100)
    // breakEvenRent = totalExpenses / (1 - vacancy/100) - other
    const vacancyFactor = 1 - vacancy / 100;
    // But management and maintenance are % of rent, so:
    // effectiveGross = (R + other) * vacancyFactor
    // expenses = mortgage + taxes + ins + hoa + R*(mgmt/100) + R*(maint/100) + util
    // Set effectiveGross = expenses and solve for R:
    // (R + other) * vf = mortgage + taxes + ins + hoa + R*(mgmt+maint)/100 + util
    // R*vf + other*vf = fixedExp + R*variableRate
    // R*(vf - variableRate) = fixedExp - other*vf
    const variableRate = (mgmtPct + maintPct) / 100;
    const fixedExp = mortgage + taxes + ins + hoaAmt + util;
    const denominator = vacancyFactor - variableRate;
    const breakEvenRent =
      denominator > 0 ? (fixedExp - other * vacancyFactor) / denominator : 0;

    let verdict: "positive" | "thin" | "negative";
    if (monthlyCashFlow > 100) verdict = "positive";
    else if (monthlyCashFlow >= -50) verdict = "thin";
    else verdict = "negative";

    return {
      loanAmount,
      mortgage,
      effectiveGrossIncome,
      totalExpenses,
      monthlyCashFlow,
      annualCashFlow,
      totalCashInvested,
      cocReturn,
      capRate,
      breakEvenRent,
      verdict,
      dp,
    };
  }, [
    purchasePrice, downPaymentMode, downPaymentPct, downPaymentDollar,
    interestRate, loanTerm, closingCosts,
    monthlyRent, otherIncome, vacancyRate,
    propertyTaxes, insurance, hoa, managementPct, maintenancePct, utilities,
  ]);

  const inputClass =
    "mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame";
  const labelClass = "block text-sm font-semibold text-foreground";

  return (
    <div className="space-y-8">
      {/* Form */}
      <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
        {/* Group 1 – Purchase */}
        <fieldset className="rounded-lg border border-border bg-surface-2 p-6">
          <legend className="mb-4 text-base font-bold text-foreground">Purchase Details</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Purchase Price</label>
              <div className="relative mt-1">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">$</span>
                <input
                  type="number"
                  min="0"
                  placeholder="350,000"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(e.target.value)}
                  className="w-full rounded-md border border-border bg-surface py-2 pl-7 pr-3 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Down Payment</label>
              <div className="mt-1 flex gap-2">
                <div className="relative flex-1">
                  {downPaymentMode === "dollar" ? (
                    <>
                      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">$</span>
                      <input
                        type="number"
                        min="0"
                        placeholder="70,000"
                        value={downPaymentDollar}
                        onChange={(e) => setDownPaymentDollar(e.target.value)}
                        className="w-full rounded-md border border-border bg-surface py-2 pl-7 pr-3 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                      />
                    </>
                  ) : (
                    <>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        step="0.5"
                        placeholder="20"
                        value={downPaymentPct}
                        onChange={(e) => setDownPaymentPct(e.target.value)}
                        className="w-full rounded-md border border-border bg-surface py-2 pl-3 pr-7 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                      />
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">%</span>
                    </>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setDownPaymentMode(downPaymentMode === "pct" ? "dollar" : "pct")}
                  className="rounded-md border border-border bg-surface px-3 py-2 text-xs font-semibold text-flame hover:border-flame"
                >
                  {downPaymentMode === "pct" ? "$ instead" : "% instead"}
                </button>
              </div>
            </div>

            <div>
              <label className={labelClass}>Interest Rate</label>
              <div className="relative mt-1">
                <input
                  type="number"
                  min="0"
                  max="30"
                  step="0.125"
                  placeholder="7.0"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full rounded-md border border-border bg-surface py-2 pl-3 pr-7 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">%</span>
              </div>
            </div>

            <div>
              <label className={labelClass}>Loan Term (years)</label>
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className={inputClass}
              >
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Closing Costs (optional)</label>
              <div className="relative mt-1">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">$</span>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={closingCosts}
                  onChange={(e) => setClosingCosts(e.target.value)}
                  className="w-full rounded-md border border-border bg-surface py-2 pl-7 pr-3 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
              </div>
            </div>
          </div>
        </fieldset>

        {/* Group 2 – Income */}
        <fieldset className="rounded-lg border border-border bg-surface-2 p-6">
          <legend className="mb-4 text-base font-bold text-foreground">Income</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Monthly Rent</label>
              <div className="relative mt-1">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">$</span>
                <input
                  type="number"
                  min="0"
                  placeholder="2,200"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(e.target.value)}
                  className="w-full rounded-md border border-border bg-surface py-2 pl-7 pr-3 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Other Monthly Income</label>
              <div className="relative mt-1">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">$</span>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={otherIncome}
                  onChange={(e) => setOtherIncome(e.target.value)}
                  className="w-full rounded-md border border-border bg-surface py-2 pl-7 pr-3 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
              </div>
              <p className="mt-1 text-xs text-muted">Parking, laundry, storage, etc.</p>
            </div>

            <div>
              <label className={labelClass}>Expected Vacancy Rate</label>
              <div className="relative mt-1">
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.5"
                  placeholder="8"
                  value={vacancyRate}
                  onChange={(e) => setVacancyRate(e.target.value)}
                  className="w-full rounded-md border border-border bg-surface py-2 pl-3 pr-7 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">%</span>
              </div>
              <p className="mt-1 text-xs text-muted">8% ≈ about 1 month vacant per year</p>
            </div>
          </div>
        </fieldset>

        {/* Group 3 – Expenses */}
        <fieldset className="rounded-lg border border-border bg-surface-2 p-6">
          <legend className="mb-4 text-base font-bold text-foreground">Monthly Expenses</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Property Taxes (per month)</label>
              <div className="relative mt-1">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">$</span>
                <input
                  type="number"
                  min="0"
                  placeholder="300"
                  value={propertyTaxes}
                  onChange={(e) => setPropertyTaxes(e.target.value)}
                  className="w-full rounded-md border border-border bg-surface py-2 pl-7 pr-3 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Insurance (per month)</label>
              <div className="relative mt-1">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">$</span>
                <input
                  type="number"
                  min="0"
                  placeholder="125"
                  value={insurance}
                  onChange={(e) => setInsurance(e.target.value)}
                  className="w-full rounded-md border border-border bg-surface py-2 pl-7 pr-3 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>HOA (per month)</label>
              <div className="relative mt-1">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">$</span>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={hoa}
                  onChange={(e) => setHoa(e.target.value)}
                  className="w-full rounded-md border border-border bg-surface py-2 pl-7 pr-3 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Property Management</label>
              <div className="relative mt-1">
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.5"
                  placeholder="0"
                  value={managementPct}
                  onChange={(e) => setManagementPct(e.target.value)}
                  className="w-full rounded-md border border-border bg-surface py-2 pl-3 pr-7 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">%</span>
              </div>
              <p className="mt-1 text-xs text-muted">% of monthly rent</p>
            </div>

            <div>
              <label className={labelClass}>Maintenance Reserve</label>
              <div className="relative mt-1">
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.5"
                  placeholder="10"
                  value={maintenancePct}
                  onChange={(e) => setMaintenancePct(e.target.value)}
                  className="w-full rounded-md border border-border bg-surface py-2 pl-3 pr-7 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">%</span>
              </div>
              <p className="mt-1 text-xs text-muted">% of monthly rent. 10% is a common rule of thumb.</p>
            </div>

            <div>
              <label className={labelClass}>Utilities (owner-paid, per month)</label>
              <div className="relative mt-1">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">$</span>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={utilities}
                  onChange={(e) => setUtilities(e.target.value)}
                  className="w-full rounded-md border border-border bg-surface py-2 pl-7 pr-3 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
              </div>
            </div>
          </div>
        </fieldset>
      </form>

      {/* Results */}
      {results ? (
        <div className="space-y-4">
          {/* Cash Flow — big number */}
          <div
            className={`rounded-lg border p-6 ${
              results.monthlyCashFlow >= 0
                ? "border-green-200 bg-green-50"
                : "border-red-200 bg-red-50"
            }`}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-muted">
              Monthly Cash Flow
            </p>
            <p
              className={`mt-1 text-5xl font-extrabold sm:text-6xl ${
                results.monthlyCashFlow >= 0 ? "text-green-700" : "text-red-600"
              }`}
            >
              {fmt(results.monthlyCashFlow)}
            </p>
            <p className="mt-1 text-sm text-muted">per month after all expenses</p>
          </div>

          {/* Key metrics grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <MetricCard label="Annual Cash Flow" value={fmt(results.annualCashFlow)} />
            <MetricCard
              label="Cash-on-Cash Return"
              value={fmtPct(results.cocReturn)}
              sub={`on ${fmt(results.totalCashInvested)} invested`}
            />
            <MetricCard label="Cap Rate" value={fmtPct(results.capRate)} />
            <MetricCard label="Monthly Mortgage" value={fmt(results.mortgage)} />
            <MetricCard label="Total Monthly Expenses" value={fmt(results.totalExpenses)} />
            <MetricCard
              label="Break-even Rent"
              value={fmt(Math.max(0, results.breakEvenRent))}
              sub="needed to cover all expenses"
            />
          </div>

          {/* Verdict */}
          <div
            className={`rounded-lg border p-5 text-base font-semibold ${
              results.verdict === "positive"
                ? "border-green-200 bg-green-50 text-green-800"
                : results.verdict === "thin"
                ? "border-yellow-200 bg-yellow-50 text-yellow-800"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {results.verdict === "positive" && (
              <>✓ This property cash flows. You'd net {fmt(results.monthlyCashFlow)}/month.</>
            )}
            {results.verdict === "thin" && (
              <>⚠ Thin margins. Small changes in vacancy or expenses could push this negative.</>
            )}
            {results.verdict === "negative" && (
              <>✗ This property doesn't cash flow at current numbers.</>
            )}
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-border bg-surface p-8 text-center text-muted">
          Enter purchase price, monthly rent, and property taxes to see your results.
        </div>
      )}

      {/* Insurance CTA */}
      <div className="rounded-lg border border-flame/30 bg-surface-2 p-6">
        <p className="text-base text-muted">
          Insurance is one of the few expenses you can get right before closing. Get an estimate before you finalize the numbers.
        </p>
        <Link
          href="/insurance-cost-estimator"
          className="mt-3 inline-flex items-center font-semibold text-flame hover:underline"
        >
          Get an insurance estimate &rarr;
        </Link>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</p>
      <p className="mt-1 text-2xl font-bold text-foreground">{value}</p>
      {sub && <p className="mt-0.5 text-xs text-muted">{sub}</p>}
    </div>
  );
}
