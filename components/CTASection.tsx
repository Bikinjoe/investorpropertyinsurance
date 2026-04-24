import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  heading?: string;
  sub?: string;
};

export default function CTASection({
  heading = "Ready to get covered?",
  sub = "Get a quote in 60 seconds. We'll have options back to you fast.",
}: Props) {
  return (
    <section className="bg-flame text-white">
      <div className="container-narrow py-14 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">{heading}</h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-white/85 sm:text-lg">{sub}</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/get-a-quote"
            className="inline-flex w-full items-center justify-center rounded-md bg-gold px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-white hover:text-flame focus:outline-none focus:ring-2 focus:ring-white sm:w-auto"
          >
            Get a Quote
          </Link>
          <a href={site.phoneHref} className="btn-on-dark w-full sm:w-auto">
            {site.phoneCTA}
          </a>
        </div>
      </div>
    </section>
  );
}
