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

function fmtPct(n: number, decimals = 2) {
  return n.toFixed(decimals) + "%";
}

function monthlyMortgage(principal: number, annualRate: number, termYears: number): number {
  if (principal <= 0) return 0;
  if (annualRate === 0) return principal / (termYears * 12);
  const r = annualRate / 100 / 12;
  const n = termYears * 12;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

type Verdict = "green" | "yellow" | "red";

export default function DealAnalyzer() {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [downPaymentPct, setDownPaymentPct] = useState("20");
  const [propertyTaxes, setPropertyTaxes] = useState("");
  const [insurance, setInsurance] = useState("125");
  const [otherExpenses, setOtherExpenses] = useState("");
  const [interestRate, setInterestRate] = useState("7.0");
  const [loanTerm, setLoanTerm] = useState("30");

  const results = useMemo(() => {
    const pp = parseFloat(purchasePrice) || 0;
    const rent = parseFloat(monthlyRent) || 0;
    const dpPct = parseFloat(downPaymentPct) || 0;
    const taxes = parseFloat(propertyTaxes) || 0;
    const ins = parseFloat(insurance) || 125;
    const other = parseFloat(otherExpenses) || 0;
    const rate = parseFloat(interestRate) || 0;
    const term = parseFloat(loanTerm) || 30;

    if (pp <= 0 || rent <= 0) return null;

    const downPayment = pp * (dpPct / 100);
    const loanAmount = pp - downPayment;
    const mortgage = monthlyMortgage(loanAmount, rate, term);

    const totalMonthlyExpenses = mortgage + taxes + ins + other;
    const monthlyCashFlow = rent - totalMonthlyExpenses;
    const annualCashFlow = monthlyCashFlow * 12;

    const cashInvested = pp * (dpPct / 100);
    const cocReturn = cashInvested > 0 ? (annualCashFlow / cashInvested) * 100 : 0;

    const grm = rent > 0 ? pp / (rent * 12) : 0;

    const onePercentCheck = rent / pp;
    const onePercentPct = onePercentCheck * 100;
    const passesOnePercent = onePercentCheck >= 0.01;

    // Verdict logic
    let verdict: Verdict;
    if (monthlyCashFlow < 0 || cocReturn < 3) {
      verdict = "red";
    } else if (
      monthlyCashFlow >= 0 &&
      cocReturn >= 6 &&
      grm <= 12
    ) {
      verdict = "green";
    } else {
      verdict = "yellow";
    }

    return {
      mortgage,
      totalMonthlyExpenses,
      monthlyCashFlow,
      annualCashFlow,
      downPayment,
      cocReturn,
      grm,
      onePercentPct,
      passesOnePercent,
      verdict,
    };
  }, [purchasePrice, monthlyRent, downPaymentPct, propertyTaxes, insurance, otherExpenses, interestRate, loanTerm]);

  const inputClass =
    "mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame";
  const labelClass = "block text-sm font-semibold text-foreground";

  const verdictConfig = {
    green: {
      bg: "bg-green-50",
      border: "border-green-300",
      dot: "🟢",
      heading: "This deal works. Here's why.",
      textColor: "text-green-800",
    },
    yellow: {
      bg: "bg-yellow-50",
      border: "border-yellow-300",
      dot: "🟡",
      heading: "Thin margins. Small changes could flip this.",
      textColor: "text-yellow-800",
    },
    red: {
      bg: "bg-red-50",
      border: "border-red-300",
      dot: "🔴",
      heading: "This deal doesn't cash flow at current numbers.",
      textColor: "text-red-700",
    },
  };

  return (
    <div className="space-y-8">
      {/* Form */}
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <fieldset className="rounded-lg border border-border bg-surface-2 p-6">
          <legend className="mb-4 text-base font-bold text-foreground">Property Details</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Purchase Price */}
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

            {/* Monthly Rent */}
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

            {/* Down Payment */}
            <div>
              <label className={labelClass}>Down Payment</label>
              <div className="relative mt-1">
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
              </div>
            </div>

            {/* Interest Rate */}
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

            {/* Loan Term */}
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
          </div>
        </fieldset>

        <fieldset className="rounded-lg border border-border bg-surface-2 p-6">
          <legend className="mb-4 text-base font-bold text-foreground">Monthly Expenses</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Property Taxes */}
            <div>
              <label className={labelClass}>Property Taxes</label>
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
              <p className="mt-1 text-xs text-muted">Per month</p>
            </div>

            {/* Insurance */}
            <div>
              <label className={labelClass}>Insurance</label>
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
              <p className="mt-1 text-xs text-muted">Per month. Default $125.</p>
            </div>

            {/* Other Expenses */}
            <div>
              <label className={labelClass}>Other Monthly Expenses</label>
              <div className="relative mt-1">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">$</span>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={otherExpenses}
                  onChange={(e) => setOtherExpenses(e.target.value)}
                  className="w-full rounded-md border border-border bg-surface py-2 pl-7 pr-3 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
              </div>
              <p className="mt-1 text-xs text-muted">Maintenance, management, utilities, etc.</p>
            </div>
          </div>
        </fieldset>
      </form>

      {/* Results */}
      {results ? (
        <div className="space-y-4">
          {/* Verdict card */}
          <div
            className={`rounded-lg border-2 p-6 ${verdictConfig[results.verdict].bg} ${verdictConfig[results.verdict].border}`}
          >
            <p className={`text-2xl font-extrabold sm:text-3xl ${verdictConfig[results.verdict].textColor}`}>
              {verdictConfig[results.verdict].dot} {verdictConfig[results.verdict].heading}
            </p>
          </div>

          {/* Metrics grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <MetricCard
              label="Monthly Cash Flow"
              value={fmt(results.monthlyCashFlow)}
              highlight
              positive={results.monthlyCashFlow >= 0}
            />
            <MetricCard
              label="Annual Cash Flow"
              value={fmt(results.annualCashFlow)}
            />
            <MetricCard
              label="Cash-on-Cash Return"
              value={fmtPct(results.cocReturn)}
              sub={`on ${fmt(results.downPayment)} down`}
            />
            <MetricCard
              label="Gross Rent Multiplier"
              value={results.grm.toFixed(1) + "x"}
              sub="lower is better. Target: below 12"
            />
            <MetricCard
              label="Monthly Mortgage"
              value={fmt(results.mortgage)}
            />
            <MetricCard
              label="Total Monthly Expenses"
              value={fmt(results.totalMonthlyExpenses)}
            />
          </div>

          {/* 1% Rule */}
          <div className={`rounded-lg border p-4 ${results.passesOnePercent ? "border-green-200 bg-green-50" : "border-yellow-200 bg-yellow-50"}`}>
            <p className={`text-sm font-semibold ${results.passesOnePercent ? "text-green-800" : "text-yellow-800"}`}>
              {results.passesOnePercent ? "✓" : "○"} 1% Rule:{" "}
              Monthly rent is {fmtPct(results.onePercentPct, 2)} of purchase price.
            </p>
            <p className="mt-1 text-xs text-muted">
              The 1% rule suggests aiming for 1% or higher. At this price, that would be{" "}
              {fmt((parseFloat(purchasePrice) || 0) * 0.01)}/month in rent.
            </p>
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-border bg-surface p-8 text-center text-muted">
          Enter a purchase price and monthly rent to see your deal analysis.
        </div>
      )}

      {/* Below calculator CTAs */}
      <div className="space-y-4">
        <div className="rounded-lg border border-flame/30 bg-surface-2 p-6">
          <p className="text-base text-foreground font-semibold">
            Insurance is one of the most predictable expenses in your deal analysis.
          </p>
          <p className="mt-1 text-base text-muted">
            Get an estimate before you finalize the numbers.
          </p>
          <Link
            href="/insurance-cost-estimator"
            className="mt-3 inline-flex items-center font-semibold text-flame hover:underline"
          >
            Get an insurance estimate &rarr;
          </Link>
        </div>

        <div className="rounded-lg border border-border bg-surface p-6">
          <Link
            href="/get-a-quote"
            className="inline-flex items-center font-semibold text-flame hover:underline"
          >
            Start a rental property review &rarr; /get-a-quote
          </Link>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  sub,
  highlight,
  positive,
}: {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
  positive?: boolean;
}) {
  const textColor =
    highlight && positive !== undefined
      ? positive
        ? "text-green-700"
        : "text-red-600"
      : "text-foreground";

  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</p>
      <p className={`mt-1 text-2xl font-bold ${textColor}`}>{value}</p>
      {sub && <p className="mt-0.5 text-xs text-muted">{sub}</p>}
    </div>
  );
}
