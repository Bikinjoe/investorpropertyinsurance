import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  eyebrow?: string;
  title: string;
  sub?: string;
  showCTAs?: boolean;
};

export default function PageHero({ eyebrow, title, sub, showCTAs = true }: Props) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-surface to-surface-2">
      <div className="container-narrow py-14 sm:py-20">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {sub && (
          <p className="mt-4 max-w-3xl text-base text-muted sm:text-lg">{sub}</p>
        )}
        {showCTAs && (
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/get-a-quote" className="btn-primary w-full sm:w-auto">
              Get a Quote
            </Link>
            <a href={site.phoneHref} className="btn-secondary w-full sm:w-auto">
              {site.phoneCTA}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
