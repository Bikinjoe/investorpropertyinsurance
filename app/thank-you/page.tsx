import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Thank You, We Got Your Info",
  description:
    "Thanks for reaching out. We will review your property details and get back to you shortly. Usually within one business day.",
  robots: { index: false, follow: false },
};

const steps = [
  {
    n: "1",
    title: "We review your submission.",
    body: "We look at your property type, location, and coverage needs to identify the best carrier options.",
  },
  {
    n: "2",
    title: "We reach out to you.",
    body: "Expect a call or text from our team at the number you provided. We'll have questions and options ready.",
  },
  {
    n: "3",
    title: "You choose what works.",
    body: "We walk you through the options in plain English. No pressure. No insurance jargon. You decide.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-surface to-surface-2">
        <div className="container-narrow py-14 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">
            Got it
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl">
            We got your info. You're in good hands.
          </h1>
          <p className="mt-4 max-w-3xl text-base text-muted sm:text-lg">
            Thanks for reaching out. We'll review your property details and
            get back to you shortly. Usually within one business day, often
            faster.
          </p>
          <p className="mt-3 max-w-3xl text-base text-muted sm:text-lg">
            Here's what happens next:
          </p>
        </div>
      </section>

      <section className="container-narrow py-12">
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-lg border border-border bg-surface-2 p-6"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-flame text-xl font-black text-white">
                {s.n}
              </div>
              <h2 className="mt-4 text-xl font-bold text-foreground">
                {s.title}
              </h2>
              <p className="mt-2 text-base text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-narrow pb-10">
        <div className="rounded-lg border border-flame/40 bg-surface-2 p-6 text-center">
          <p className="text-base text-foreground sm:text-lg">
            Questions in the meantime?{" "}
            <a
              href={site.phoneHref}
              className="font-semibold text-flame hover:underline"
            >
              {site.phoneCTA}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="container-narrow pb-16">
        <Link
          href="/"
          className="text-sm font-semibold text-muted hover:text-flame"
        >
          ← Back to InvestorPropertyInsurance.com
        </Link>
      </section>
    </>
  );
}
