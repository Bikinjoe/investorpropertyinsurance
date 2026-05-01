import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Start Here | Investor Property Insurance",
  description:
    "Not sure where to start? Pick the path that fits your situation and we'll take it from there.",
};

const paths = [
  {
    icon: "🏠",
    title: "I own a rental property",
    body: "Single-family, duplex, multi-unit, or short-term rental.",
    cta: "Start a rental property review →",
    href: "/get-a-quote",
  },
  {
    icon: "🔑",
    title: "I'm buying a property and need coverage before closing",
    body: "Lender deadline, new purchase, or refinance.",
    cta: "Prepare for closing →",
    href: "/get-a-quote",
  },
  {
    icon: "📋",
    title: "I own multiple rentals or a portfolio",
    body: "Two or more properties, LLC-owned, or actively growing.",
    cta: "Review my portfolio →",
    href: "/get-a-quote",
  },
  {
    icon: "🏢",
    title: "I own a commercial or income-producing property",
    body: "Office, retail, mixed-use, multifamily, or other income property.",
    cta: "Start a property review →",
    href: "/get-a-quote",
  },
];

export default function StartHerePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-surface to-surface-2">
        <div className="container-narrow py-14 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">
            Start Here
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl">
            Let's Find the Right Path
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
            Pick the situation that fits closest. We'll ask the right questions from there.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Start Here" }]} />

      {/* Path Cards */}
      <section className="container-narrow py-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {paths.map((path) => (
            <div
              key={path.title}
              className="flex flex-col rounded-lg border border-border bg-surface p-6 transition hover:border-flame hover:shadow-md"
            >
              <span className="text-3xl" aria-hidden>{path.icon}</span>
              <h2 className="mt-3 text-lg font-bold text-foreground">{path.title}</h2>
              <p className="mt-2 flex-1 text-sm text-muted">{path.body}</p>
              <Link
                href={path.href}
                className="mt-5 inline-flex items-center text-sm font-semibold text-flame hover:text-gold"
              >
                {path.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Not sure which fits? Start with the first one that seems closest. We'll ask the right questions.
        </p>

        {/* Secondary path */}
        <div className="mt-6 flex justify-center">
          <Link
            href="/resources"
            className="text-sm font-semibold text-flame hover:text-gold"
          >
            I have a question first → Visit the Resource Center
          </Link>
        </div>
      </section>
    </>
  );
}
