import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-foreground/20 bg-foreground text-white">
      <div className="container-narrow py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-bold text-white">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-gold text-foreground">
                <span className="text-lg font-black leading-none">IP</span>
              </span>
              <span>InvestorPropertyInsurance</span>
            </div>
            <p className="mt-3 text-sm text-white/75">
              {site.legalName}. Independent insurance agency for real estate
              investors. Every asset class. Western US.
            </p>
            <p className="mt-3 text-xs text-white/60">{site.serviceArea}.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Asset Classes
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/rentals-rehabs" className="text-white/85 hover:text-gold">Rentals & Rehabs</Link></li>
              <li><Link href="/short-term-rentals" className="text-white/85 hover:text-gold">Short-Term Rentals</Link></li>
              <li><Link href="/house-hacking-insurance" className="text-white/85 hover:text-gold">House Hacking</Link></li>
              <li><Link href="/ground-up-construction" className="text-white/85 hover:text-gold">Ground-Up Construction</Link></li>
              <li><Link href="/multifamily" className="text-white/85 hover:text-gold">Multifamily</Link></li>
              <li><Link href="/mobile-home-park-insurance" className="text-white/85 hover:text-gold">Mobile Home Park</Link></li>
              <li><Link href="/commercial-property" className="text-white/85 hover:text-gold">Commercial Property</Link></li>
              <li><Link href="/self-storage-insurance" className="text-white/85 hover:text-gold">Self-Storage</Link></li>
              <li><Link href="/portfolio-landlord-insurance" className="text-white/85 hover:text-gold">Portfolio Landlord</Link></li>
              <li><Link href="/dscr-loan-insurance" className="text-white/85 hover:text-gold">DSCR Loan Coverage</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Resources
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/how-much-does-real-estate-investor-insurance-cost" className="text-white/85 hover:text-gold">Cost</Link></li>
              <li><Link href="/real-estate-investor-insurance-calculator" className="text-white/85 hover:text-gold">Cost Calculator</Link></li>
              <li><Link href="/real-estate-investor-insurance-problems" className="text-white/85 hover:text-gold">Problems We Fix</Link></li>
              <li><Link href="/landlord-insurance-vs-investor-insurance" className="text-white/85 hover:text-gold">Compare</Link></li>
              <li><Link href="/best-insurance-for-real-estate-investors" className="text-white/85 hover:text-gold">Best Insurance</Link></li>
              <li><Link href="/real-estate-investor-insurance-reviews" className="text-white/85 hover:text-gold">Reviews</Link></li>
              <li><Link href="/faq" className="text-white/85 hover:text-gold">FAQ</Link></li>
              <li><Link href="/blog" className="text-white/85 hover:text-gold">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Talk to us
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={site.phoneHref} className="font-semibold text-white hover:text-gold">
                  {site.phoneCTA}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="text-white/85 hover:text-gold">
                  {site.email}
                </a>
              </li>
              <li><Link href="/about" className="text-white/85 hover:text-gold">About</Link></li>
              <li><Link href="/contact" className="text-white/85 hover:text-gold">Contact</Link></li>
              <li><Link href="/get-a-quote" className="text-white/85 hover:text-gold">Get a Quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Licensed independent
            insurance agency. Not affiliated with any single carrier. Quotes
            are estimates and subject to underwriting approval.
          </p>
          <p className="mt-3">
            <a
              href={site.parentSiteUrl}
              className="font-semibold text-gold hover:underline"
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
