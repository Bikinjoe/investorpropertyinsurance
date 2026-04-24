import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact, Talk to a Real Estate Investor Insurance Specialist",
  description:
    "Call or text 541-681-8793 or email richard@vantagepointrisk.com. Real people answering investor insurance questions across the western US.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Talk to a real person"
        title="Talk to a Real Estate Investor Insurance Specialist."
        sub="Call, text, email, or send a message. We answer phones during business hours and reply to emails the same day."
        showCTAs={false}
      />
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="container-narrow py-10">
        <div className="grid gap-6 sm:grid-cols-2">
          <a
            href={site.phoneHref}
            className="group rounded-lg border border-border bg-surface-2 p-6 shadow-sm transition hover:border-flame hover:shadow-md"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-flame">
              Phone
            </p>
            <p className="mt-2 text-3xl font-bold text-foreground group-hover:text-flame">
              Call or text {site.phone}
            </p>
            <p className="mt-2 text-sm text-muted">
              Click to call or text. Mon to Fri, 8am to 6pm Pacific.
              After-hours messages returned next business day.
            </p>
          </a>
          <a
            href={site.emailHref}
            className="group rounded-lg border border-border bg-surface-2 p-6 shadow-sm transition hover:border-flame hover:shadow-md"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-flame">
              Email
            </p>
            <p className="mt-2 break-all text-2xl font-bold text-foreground group-hover:text-flame">
              {site.email}
            </p>
            <p className="mt-2 text-sm text-muted">
              Best for non-urgent quote requests, document submissions, and
              renewal questions.
            </p>
          </a>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Send a message
            </h2>
            <p className="mt-3 text-base text-muted">
              Quick contact form. Goes straight to our inbox.
            </p>
            <form
              action={site.emailHref}
              method="post"
              encType="text/plain"
              className="mt-6 space-y-4"
            >
              <div>
                <label className="block text-sm font-semibold text-foreground" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground" htmlFor="property">
                  Property type / asset class
                </label>
                <input
                  id="property"
                  name="property"
                  type="text"
                  placeholder="SFR, STR, multifamily, commercial, etc."
                  className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send message
              </button>
              <p className="text-xs text-muted">
                This form opens your email client with the message
                pre-filled. For faster response, just call or text {site.phone}.
              </p>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              About us
            </h2>
            <div className="mt-3 space-y-3 text-base text-muted">
              <p>
                <strong className="text-foreground">{site.legalName}</strong>
                <br />
                Independent insurance agency for real estate investors
                <br />
                {site.serviceArea}
              </p>
              <p>
                We work with {site.carrierCount} carrier markets that
                actively write real estate investor business. Single property
                or full portfolio.
              </p>
              <p>
                Sister sites:{" "}
                <a href="https://truckpolicy.com" className="font-semibold text-flame hover:underline">truckpolicy.com</a>{" "}·{" "}
                <a href={site.parentSiteUrl} className="font-semibold text-flame hover:underline">vantagepointrisk.com</a>
              </p>
            </div>

            <div className="mt-6 rounded-lg border border-border bg-surface p-5">
              <h3 className="text-lg font-bold text-foreground">Office hours</h3>
              <ul className="mt-2 space-y-1 text-base text-muted">
                <li>Monday to Friday: 8am to 6pm Pacific</li>
                <li>Saturday: by appointment</li>
                <li>Sunday: closed</li>
                <li>After hours: leave a voicemail or text and we'll call back</li>
              </ul>
            </div>

            <div className="mt-6 rounded-lg border border-flame bg-flame p-5 text-white">
              <h3 className="text-lg font-bold text-white">Need a quote?</h3>
              <p className="mt-2 text-sm text-white/85">
                Skip the form. Get straight to a quote.
              </p>
              <Link
                href="/get-a-quote"
                className="mt-4 inline-flex items-center justify-center rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-white"
              >
                Start my quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: "/about", title: "About us", desc: "Who we are." },
          { href: "/faq", title: "FAQ", desc: "Common questions answered." },
          { href: "/get-a-quote", title: "Get a quote", desc: "60-second intake." },
        ]}
      />
    </>
  );
}
