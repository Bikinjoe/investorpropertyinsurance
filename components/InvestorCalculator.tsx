"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { site } from "@/lib/site";

type PropType =
  | "sfr"
  | "str"
  | "small_multi"
  | "apt5to10"
  | "apt11to25"
  | "rehab"
  | "commercial";
type AgeBand = "post2000" | "y1980to2000" | "pre1980";
type CostBand = "under200" | "to400" | "to600" | "over600";
type State =
  | "AZ" | "CA" | "CO" | "ID" | "MT" | "NM" | "NV" | "OR" | "TX" | "UT" | "WA" | "WY";
type Occupancy = "rented" | "vacant" | "renovation";
type Claims = "none" | "one" | "twoplus";

const BASE: Record<PropType, [number, number]> = {
  sfr: [800, 1800],
  str: [1200, 3000],
  small_multi: [1500, 3500],
  apt5to10: [3000, 8000],
  apt11to25: [6000, 15000],
  rehab: [1500, 4000],
  commercial: [2500, 10000],
};

const PROP_LABEL: Record<PropType, string> = {
  sfr: "Single Family Rental",
  str: "Short-Term Rental",
  small_multi: "Duplex / Triplex / Fourplex",
  apt5to10: "Apartment (5-10 units)",
  apt11to25: "Apartment (11-25 units)",
  rehab: "Property Under Rehab",
  commercial: "Commercial Property",
};

function round100(n: number) {
  return Math.round(n / 100) * 100;
}
function fmt(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}

type Estimate = {
  lo: number;
  hi: number;
  drivers: string[];
  notes: string[];
};

function calculate(p: {
  propType: PropType;
  age: AgeBand;
  cost: CostBand;
  state: State;
  occupancy: Occupancy;
  claims: Claims;
}): Estimate {
  let [lo, hi] = BASE[p.propType];
  const drivers: string[] = [];
  const notes: string[] = [];

  if (p.age === "pre1980") {
    lo *= 1.2;
    hi *= 1.2;
    drivers.push("pre-1980 construction (+20%) for older wiring, plumbing, and roof exposure");
    notes.push("an updated roof, electrical, and plumbing inspection report often gets you back closer to base rate");
  } else if (p.age === "y1980to2000") {
    drivers.push("1980 to 2000 construction is at base rate for most carriers");
  } else {
    notes.push("post-2000 construction qualifies for the most carrier markets");
  }

  if (p.occupancy === "vacant") {
    lo *= 1.15;
    hi *= 1.15;
    drivers.push("vacant or between-tenants (+15%) for higher vandalism, theft, and water damage exposure");
    notes.push("getting the property re-tenanted moves you back to standard rates");
  } else if (p.occupancy === "renovation") {
    lo *= 1.25;
    hi *= 1.25;
    drivers.push("under renovation (+25%) for the construction-period exposure");
    notes.push("when the renovation completes and the property is ready for occupancy, we transition to a permanent landlord policy at a lower rate");
  }

  if (p.claims === "one") {
    lo *= 1.15;
    hi *= 1.15;
    drivers.push("one prior claim in the last 5 years (+15%)");
    notes.push("most claims roll off your record after 5 years and the surcharge comes off");
  } else if (p.claims === "twoplus") {
    lo *= 1.35;
    hi *= 1.35;
    drivers.push("two or more prior claims (+35%) for the loss-frequency factor");
    notes.push("specialty markets are still available, but the carrier panel narrows");
  }

  if (p.state === "CA" || p.state === "TX") {
    lo *= 1.1;
    hi *= 1.1;
    drivers.push(
      `${p.state} location (+10%) for the higher catastrophe and litigation exposure in the state`
    );
  }

  if (p.cost === "over600") {
    lo *= 1.15;
    hi *= 1.15;
    drivers.push("replacement cost over $600K means a higher dwelling limit");
  } else if (p.cost === "under200") {
    lo *= 0.9;
    hi *= 0.9;
    drivers.push("replacement cost under $200K means a smaller dwelling limit and a lower premium");
  }

  notes.push(
    "shopping the account across our 10+ carrier markets at renewal usually keeps the rate from drifting up"
  );

  return {
    lo: Math.max(0, round100(lo)),
    hi: Math.max(0, round100(hi)),
    drivers,
    notes: Array.from(new Set(notes)).slice(0, 4),
  };
}

export default function InvestorCalculator() {
  const [propType, setPropType] = useState<PropType>("sfr");
  const [age, setAge] = useState<AgeBand>("post2000");
  const [cost, setCost] = useState<CostBand>("to400");
  const [stateVal, setStateVal] = useState<State>("OR");
  const [occupancy, setOccupancy] = useState<Occupancy>("rented");
  const [claims, setClaims] = useState<Claims>("none");

  const estimate = useMemo(
    () =>
      calculate({
        propType,
        age,
        cost,
        state: stateVal,
        occupancy,
        claims,
      }),
    [propType, age, cost, stateVal, occupancy, claims]
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="space-y-6 rounded-lg border border-border bg-surface-2 p-6"
      >
        <div>
          <label htmlFor="propType" className="block text-sm font-semibold text-foreground">
            Property type
          </label>
          <select
            id="propType"
            value={propType}
            onChange={(e) => setPropType(e.target.value as PropType)}
            className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
          >
            {(Object.keys(BASE) as PropType[]).map((k) => (
              <option key={k} value={k}>
                {PROP_LABEL[k]}
              </option>
            ))}
          </select>
        </div>

        <fieldset>
          <legend className="text-sm font-semibold text-foreground">Property age</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {(
              [
                { v: "post2000", l: "Built after 2000" },
                { v: "y1980to2000", l: "Built 1980 to 2000" },
                { v: "pre1980", l: "Built before 1980" },
              ] as { v: AgeBand; l: string }[]
            ).map((o) => (
              <label
                key={o.v}
                className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm ${
                  age === o.v
                    ? "border-flame bg-surface text-foreground"
                    : "border-border bg-surface text-muted hover:border-flame/60"
                }`}
              >
                <input
                  type="radio"
                  name="age"
                  value={o.v}
                  checked={age === o.v}
                  onChange={() => setAge(o.v)}
                  className="accent-flame"
                />
                {o.l}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="cost" className="block text-sm font-semibold text-foreground">
            Estimated replacement cost
          </label>
          <select
            id="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value as CostBand)}
            className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
          >
            <option value="under200">Under $200K</option>
            <option value="to400">$200K to $400K</option>
            <option value="to600">$400K to $600K</option>
            <option value="over600">$600K+</option>
          </select>
        </div>

        <div>
          <label htmlFor="state" className="block text-sm font-semibold text-foreground">
            Location state
          </label>
          <select
            id="state"
            value={stateVal}
            onChange={(e) => setStateVal(e.target.value as State)}
            className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
          >
            {site.serviceStates.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <fieldset>
          <legend className="text-sm font-semibold text-foreground">Occupancy</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {(
              [
                { v: "rented", l: "Currently rented" },
                { v: "vacant", l: "Between tenants (vacant)" },
                { v: "renovation", l: "Under renovation" },
              ] as { v: Occupancy; l: string }[]
            ).map((o) => (
              <label
                key={o.v}
                className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm ${
                  occupancy === o.v
                    ? "border-flame bg-surface text-foreground"
                    : "border-border bg-surface text-muted hover:border-flame/60"
                }`}
              >
                <input
                  type="radio"
                  name="occupancy"
                  value={o.v}
                  checked={occupancy === o.v}
                  onChange={() => setOccupancy(o.v)}
                  className="accent-flame"
                />
                {o.l}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold text-foreground">
            Claims in last 5 years
          </legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {(
              [
                { v: "none", l: "None" },
                { v: "one", l: "1 claim" },
                { v: "twoplus", l: "2+ claims" },
              ] as { v: Claims; l: string }[]
            ).map((o) => (
              <label
                key={o.v}
                className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm ${
                  claims === o.v
                    ? "border-flame bg-surface text-foreground"
                    : "border-border bg-surface text-muted hover:border-flame/60"
                }`}
              >
                <input
                  type="radio"
                  name="claims"
                  value={o.v}
                  checked={claims === o.v}
                  onChange={() => setClaims(o.v)}
                  className="accent-flame"
                />
                {o.l}
              </label>
            ))}
          </div>
        </fieldset>
      </form>

      <aside className="space-y-4">
        <div className="rounded-lg border border-flame/40 bg-surface-2 p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-flame">
            Estimated annual range
          </p>
          <p className="mt-2 text-4xl font-extrabold text-foreground sm:text-5xl">
            {fmt(estimate.lo)} to {fmt(estimate.hi)}
          </p>
          <p className="mt-2 text-sm text-muted">
            Annual premium estimate, dwelling and liability combined.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-surface p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-flame">
            What's driving this estimate
          </h3>
          <p className="mt-3 text-base text-muted">
            Starting point for a {PROP_LABEL[propType].toLowerCase()} is{" "}
            <strong className="text-foreground">
              {fmt(BASE[propType][0])} to {fmt(BASE[propType][1])}
            </strong>{" "}
            per year. Adjustments applied:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
            {estimate.drivers.length > 0 ? (
              estimate.drivers.map((d, i) => <li key={i}>{d}</li>)
            ) : (
              <li>no adjustments. You're at the base profile.</li>
            )}
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-surface p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-flame">
            What could bring the rate down
          </h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
            {estimate.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-dashed border-border bg-surface p-4 text-xs text-muted">
          This is an estimate only. Your actual rate depends on full
          underwriting review including property inspection, prior loss
          detail, lender requirements, and carrier-specific appetite.
        </div>

        <div className="rounded-lg border border-flame bg-surface-2 p-6">
          <h3 className="text-xl font-bold text-foreground">
            Get your actual quote
          </h3>
          <p className="mt-2 text-base text-muted">
            We shop {site.carrierCount} carrier markets and have a real
            number for you. Call or text{" "}
            <a href={site.phoneHref} className="font-semibold text-flame hover:underline">
              {site.phone}
            </a>
            .
          </p>
          <Link href="/get-a-quote" className="btn-primary mt-4 w-full sm:w-auto">
            Get a Quote →
          </Link>
        </div>
      </aside>
    </div>
  );
}
