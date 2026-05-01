"use client";

import Link from "next/link";
import { useState } from "react";

type ChecklistItem = {
  id: string;
  label: string;
  note?: string;
};

type ChecklistGroup = {
  heading: string;
  items: ChecklistItem[];
};

const groups: ChecklistGroup[] = [
  {
    heading: "Property Information",
    items: [
      { id: "address", label: "Property address (full address including unit number if applicable)" },
      { id: "year_built", label: "Year the property was built" },
      { id: "sqft", label: "Square footage of the building" },
      { id: "units", label: "Number of units" },
      { id: "construction", label: "Construction type (wood frame, masonry, etc.)", note: "Your agent can help if you're unsure." },
      { id: "roof", label: "Roof type and age", note: "Approximate is fine." },
    ],
  },
  {
    heading: "Ownership & Occupancy",
    items: [
      { id: "ownership_type", label: "How the property is owned (personally, LLC, trust, partnership)" },
      { id: "entity_name", label: "Entity name if owned by an LLC or trust" },
      { id: "occupancy", label: "Current occupancy status (tenant in place, vacant, owner-occupied plus rental unit)" },
      { id: "lease", label: "Tenant lease in place (yes/no, month-to-month or fixed term)" },
    ],
  },
  {
    heading: "Existing Coverage",
    items: [
      { id: "carrier", label: "Current insurance carrier name (if any)" },
      { id: "expiration", label: "Current policy expiration date" },
      { id: "premium", label: "Current annual premium", note: "Approximate is fine." },
      { id: "claims", label: "Any claims in the last 5 years (yes/no, approximate dates and amounts)" },
    ],
  },
  {
    heading: "Financial Details",
    items: [
      { id: "replacement_cost", label: "Estimated replacement cost of the building", note: "Not market value — what it would cost to rebuild." },
      { id: "monthly_rent", label: "Monthly rent amount" },
      { id: "lender", label: "Lender name and loan number if there is a mortgage" },
    ],
  },
  {
    heading: "Closing / Timing",
    items: [
      { id: "effective_date", label: "Desired effective date or closing date if this is a purchase" },
      { id: "lender_requirements", label: "Lender requirements if applicable (mortgagee clause, required limits)" },
    ],
  },
];

const totalItems = groups.reduce((sum, g) => sum + g.items.length, 0);

function getStatusMessage(pct: number): string {
  if (pct <= 40) return "Getting started. A few more items and you'll be ready.";
  if (pct <= 70) return "Good progress. You're close to having what we need.";
  return "You're ready. Starting your review now will go smoothly.";
}

export default function QuoteReadyChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const checkedCount = checked.size;
  const pct = Math.round((checkedCount / totalItems) * 100);
  const isComplete = pct === 100;
  const statusMessage = getStatusMessage(pct);

  return (
    <div className="space-y-8">
      {/* Progress bar */}
      <div className="rounded-lg border border-border bg-surface-2 p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-foreground">Quote Readiness</p>
          <p className="text-2xl font-extrabold text-flame">{pct}%</p>
        </div>
        <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-border">
          <div
            className={`h-3 rounded-full transition-all duration-300 ${
              isComplete ? "bg-green-600" : "bg-flame"
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className={`mt-3 text-sm font-medium ${isComplete ? "text-green-700" : "text-muted"}`}>
          {isComplete ? "✓ " : ""}{statusMessage}
        </p>
        {isComplete && (
          <Link
            href="/get-a-quote"
            className="mt-4 inline-flex items-center rounded-md bg-green-700 px-6 py-3 text-sm font-bold text-white hover:bg-green-800 transition-colors"
          >
            You're ready. Start your review →
          </Link>
        )}
      </div>

      {/* Checklist groups */}
      <div className="space-y-6">
        {groups.map((group) => {
          const groupChecked = group.items.filter((item) => checked.has(item.id)).length;
          return (
            <div key={group.heading} className="rounded-lg border border-border bg-surface-2 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-base font-bold text-foreground">{group.heading}</h2>
                <span className="text-xs font-semibold text-muted">
                  {groupChecked}/{group.items.length}
                </span>
              </div>
              <div className="space-y-3">
                {group.items.map((item) => {
                  const isChecked = checked.has(item.id);
                  return (
                    <label
                      key={item.id}
                      className={`flex cursor-pointer items-start gap-3 rounded-md border px-4 py-3 transition-colors ${
                        isChecked
                          ? "border-flame/40 bg-white"
                          : "border-border bg-white hover:border-flame/30"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggle(item.id)}
                        className="mt-0.5 h-4 w-4 flex-shrink-0 accent-flame"
                      />
                      <span className={`text-sm ${isChecked ? "text-muted line-through" : "text-foreground"}`}>
                        {item.label}
                        {item.note && (
                          <span className="ml-1 not-italic text-muted no-underline" style={{ textDecoration: "none" }}>
                            {" "}
                            — <em>{item.note}</em>
                          </span>
                        )}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA — always visible */}
      <div className="rounded-lg border border-flame/30 bg-surface-2 p-6">
        <p className="text-base font-semibold text-foreground">
          Don't have everything? Start anyway.
        </p>
        <p className="mt-1 text-sm text-muted">
          We'll collect what's missing as we go.
        </p>
        <Link
          href="/get-a-quote"
          className="mt-4 inline-flex items-center rounded-md bg-flame px-6 py-3 text-sm font-bold text-white hover:bg-flame/90 transition-colors"
        >
          Start your review →
        </Link>
      </div>
    </div>
  );
}
