"use client";

import Link from "next/link";
import { useState } from "react";

type Answer = string | null;

const questions = [
  {
    id: "q1",
    text: "What type of policy covers your rental property right now?",
    options: [
      { label: "Homeowners insurance (the same policy as my primary home)", value: "homeowners", score: 3 },
      { label: "Landlord / dwelling policy (specifically for rental properties)", value: "landlord", score: 0 },
      { label: "I'm not sure", value: "not_sure", score: 2 },
      { label: "I don't have coverage yet", value: "no_coverage", score: 4 },
    ],
  },
  {
    id: "q2",
    text: "Does your policy list the correct named insured?",
    options: [
      { label: "Yes, the property owner (me personally) is listed", value: "me_personally", score: 0 },
      { label: "Yes, my LLC or entity is listed as named insured", value: "llc_listed", score: 0 },
      { label: "I'm not sure who is listed", value: "not_sure", score: 1 },
      { label: "My policy is in my name but the property is owned by an LLC", value: "mismatch", score: 3 },
    ],
  },
  {
    id: "q3",
    text: "Does your policy include loss of rental income coverage?",
    options: [
      { label: "Yes, I confirmed it's included", value: "confirmed_yes", score: 0 },
      { label: "I think so, but I haven't confirmed", value: "think_so", score: 1 },
      { label: "No, it's not included", value: "not_included", score: 2 },
      { label: "I don't know", value: "dont_know", score: 1 },
    ],
  },
  {
    id: "q4",
    text: "How long has your property been vacant in the last 12 months?",
    options: [
      { label: "It hasn't been vacant (tenant in place the whole time)", value: "no_vacancy", score: 0 },
      { label: "Less than 30 days between tenants", value: "under_30", score: 0 },
      { label: "30–60 days", value: "30_60", score: 1 },
      { label: "More than 60 days", value: "over_60", score: 2 },
    ],
  },
  {
    id: "q5",
    text: "What is your current liability limit?",
    options: [
      { label: "$300,000 or higher", value: "300k_plus", score: 0 },
      { label: "$100,000–$299,000", value: "100_299k", score: 1 },
      { label: "Less than $100,000", value: "under_100k", score: 2 },
      { label: "I don't know my liability limit", value: "dont_know", score: 1 },
    ],
  },
];

export default function InsuranceFitCheck() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [showResult, setShowResult] = useState(false);

  const allAnswered = questions.every((q) => answers[q.id] != null);

  const score = questions.reduce((total, q) => {
    const selected = answers[q.id];
    if (!selected) return total;
    const option = q.options.find((o) => o.value === selected);
    return total + (option?.score ?? 0);
  }, 0);

  // Which questions triggered concern (score > 0)
  const flaggedQuestions = questions.filter((q) => {
    const selected = answers[q.id];
    if (!selected) return false;
    const option = q.options.find((o) => o.value === selected);
    return (option?.score ?? 0) > 0;
  });

  const handleSelect = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setShowResult(false);
  };

  const handleCheck = () => {
    if (allAnswered) setShowResult(true);
  };

  const resultInfo =
    score <= 1
      ? {
          color: "green",
          icon: "🟢",
          heading: "Your setup looks solid.",
          body: "A quick review can confirm everything is still current.",
          cta: "Schedule a quick review",
          ctaHref: "/get-a-quote",
        }
      : score <= 4
      ? {
          color: "yellow",
          icon: "🟡",
          heading: "There may be a gap worth looking at.",
          body: "One or two of your answers suggest your coverage might not match your situation.",
          cta: "Start a coverage review",
          ctaHref: "/get-a-quote",
        }
      : {
          color: "red",
          icon: "🔴",
          heading: "There's a likely coverage gap.",
          body: "Based on your answers, your property may not be fully protected.",
          cta: "Start a coverage review now",
          ctaHref: "/get-a-quote",
        };

  const colorClasses = {
    green: {
      bg: "bg-green-50",
      border: "border-green-300",
      heading: "text-green-800",
      body: "text-green-700",
      cta: "bg-green-700 hover:bg-green-800",
    },
    yellow: {
      bg: "bg-yellow-50",
      border: "border-yellow-300",
      heading: "text-yellow-800",
      body: "text-yellow-700",
      cta: "bg-yellow-600 hover:bg-yellow-700",
    },
    red: {
      bg: "bg-red-50",
      border: "border-red-300",
      heading: "text-red-800",
      body: "text-red-700",
      cta: "bg-red-700 hover:bg-red-800",
    },
  };

  const flaggedIds = new Set(flaggedQuestions.map((q) => q.id));

  return (
    <div className="space-y-8">
      {/* Questions */}
      <div className="space-y-6">
        {questions.map((q, idx) => {
          const isFlagged = showResult && flaggedIds.has(q.id);
          return (
            <fieldset
              key={q.id}
              className={`rounded-lg border p-6 transition-colors ${
                isFlagged
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-border bg-surface-2"
              }`}
            >
              <legend className="mb-4 text-base font-bold text-foreground">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-flame text-xs font-bold text-white">
                  {idx + 1}
                </span>
                {q.text}
                {isFlagged && (
                  <span className="ml-2 text-xs font-semibold text-yellow-700">
                    ⚠ Flagged
                  </span>
                )}
              </legend>
              <div className="space-y-2">
                {q.options.map((opt) => {
                  const checked = answers[q.id] === opt.value;
                  return (
                    <label
                      key={opt.value}
                      className={`flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3 transition-colors ${
                        checked
                          ? "border-flame bg-white font-semibold text-foreground"
                          : "border-border bg-white text-foreground hover:border-flame/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={opt.value}
                        checked={checked}
                        onChange={() => handleSelect(q.id, opt.value)}
                        className="h-4 w-4 accent-flame"
                      />
                      <span className="text-sm">{opt.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          );
        })}
      </div>

      {/* Check button */}
      <div>
        <button
          onClick={handleCheck}
          disabled={!allAnswered}
          className={`w-full rounded-lg px-6 py-4 text-base font-bold text-white transition-colors ${
            allAnswered
              ? "bg-flame hover:bg-flame/90 cursor-pointer"
              : "cursor-not-allowed bg-border text-muted"
          }`}
        >
          {allAnswered ? "Check my coverage →" : "Answer all 5 questions to see your result"}
        </button>
      </div>

      {/* Result */}
      {showResult && (
        <div
          className={`rounded-lg border p-6 ${
            colorClasses[resultInfo.color as keyof typeof colorClasses].bg
          } ${colorClasses[resultInfo.color as keyof typeof colorClasses].border}`}
        >
          <p className={`text-xl font-bold ${colorClasses[resultInfo.color as keyof typeof colorClasses].heading}`}>
            {resultInfo.icon} {resultInfo.heading}
          </p>
          <p className={`mt-2 text-base ${colorClasses[resultInfo.color as keyof typeof colorClasses].body}`}>
            {resultInfo.body}
          </p>

          {/* Flagged items summary (for yellow/red) */}
          {score >= 2 && flaggedQuestions.length > 0 && (
            <div className="mt-4 space-y-1">
              <p className="text-sm font-semibold text-foreground">Answers that raised a flag:</p>
              <ul className="ml-4 list-disc space-y-1">
                {flaggedQuestions.map((q) => {
                  const selectedOption = q.options.find((o) => o.value === answers[q.id]);
                  return (
                    <li key={q.id} className="text-sm text-foreground">
                      <span className="font-semibold">Q{questions.indexOf(q) + 1}:</span>{" "}
                      {selectedOption?.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <Link
            href={resultInfo.ctaHref}
            className={`mt-5 inline-flex items-center rounded-md px-6 py-3 text-sm font-bold text-white transition-colors ${
              colorClasses[resultInfo.color as keyof typeof colorClasses].cta
            }`}
          >
            {resultInfo.cta} →
          </Link>

          {/* Disclaimer */}
          <p className="mt-4 text-xs text-muted">
            This is a quick indicator, not a coverage audit. An agent review takes about 10 minutes and gives you a real answer.
          </p>
        </div>
      )}
    </div>
  );
}
