import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-bg text-foreground">
      <div className="container-narrow py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-bold text-white">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-flame text-white">
                <span className="text-lg font-black leading-none">IP</span>
              </span>
              <span>InvestorPropertyInsurance</span>
            </div>
            <p className="mt-3 text-sm text-muted">
              {site.legalName}. Independent insurance agency for real estate
              investors. Every asset class. Western US.
            </p>
            <p className="mt-3 text-xs text-muted">{site.serviceArea}.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Asset Classes
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/rentals-rehabs" className="hover:text-flame">Rentals & Rehabs</Link></li>
              <li><Link href="/short-term-rentals" className="hover:text-flame">Short-Term Rentals</Link></li>
              <li><Link href="/ground-up-construction" className="hover:text-flame">Ground-Up Construction</Link></li>
              <li><Link href="/multifamily" className="hover:text-flame">Multifamily</Link></li>
              <li><Link href="/commercial-property" className="hover:text-flame">Commercial Property</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/how-much-does-real-estate-investor-insurance-cost" className="hover:text-flame">Cost</Link></li>
              <li><Link href="/real-estate-investor-insurance-calculator" className="hover:text-flame">Cost Calculator</Link></li>
              <li><Link href="/real-estate-investor-insurance-problems" className="hover:text-flame">Problems We Fix</Link></li>
              <li><Link href="/landlord-insurance-vs-investor-insurance" className="hover:text-flame">Compare</Link></li>
              <li><Link href="/best-insurance-for-real-estate-investors" className="hover:text-flame">Best Insurance</Link></li>
              <li><Link href="/real-estate-investor-insurance-reviews" className="hover:text-flame">Reviews</Link></li>
              <li><Link href="/faq" className="hover:text-flame">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-flame">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Talk to us
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={site.phoneHref} className="font-semibold text-white hover:text-flame">
                  {site.phoneCTA}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="hover:text-flame">
                  {site.email}
                </a>
              </li>
              <li><Link href="/about" className="hover:text-flame">About</Link></li>
              <li><Link href="/contact" className="hover:text-flame">Contact</Link></li>
              <li><Link href="/get-a-quote" className="hover:text-flame">Get a Quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Licensed independent
            insurance agency. Not affiliated with any single carrier. Quotes
            are estimates and subject to underwriting approval.
          </p>
          <p className="mt-3 text-foreground">
            <a
              href={site.parentSiteUrl}
              className="font-semibold text-flame hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by Vantage Point Risk Partners, your real estate investor insurance agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
