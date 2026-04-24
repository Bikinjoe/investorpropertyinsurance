import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Real Estate Investor Insurance | InvestorPropertyInsurance.com",
    template: "%s | InvestorPropertyInsurance",
  },
  description: site.description,
  openGraph: {
    type: "website",
    url: site.url,
    title: "Real Estate Investor Insurance | InvestorPropertyInsurance.com",
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Investor Insurance",
    description: site.description,
  },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  telephone: `+1-${site.phone}`,
  email: site.email,
  description: site.description,
  areaServed: site.serviceStates.map((s) => ({ "@type": "State", name: s })),
  priceRange: "$$",
  sameAs: [site.parentSiteUrl],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pb-24 md:pb-0">{children}</main>
        <Footer />
        <MobileCTA />
        <JsonLd data={businessSchema} />
      </body>
    </html>
  );
}
