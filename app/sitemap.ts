import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/rentals-rehabs",
    "/short-term-rentals",
    "/house-hacking-insurance",
    "/ground-up-construction",
    "/multifamily",
    "/mobile-home-park-insurance",
    "/commercial-property",
    "/self-storage-insurance",
    "/portfolio-landlord-insurance",
    "/dscr-loan-insurance",
    "/how-much-does-real-estate-investor-insurance-cost",
    "/real-estate-investor-insurance-problems",
    "/landlord-insurance-vs-investor-insurance",
    "/best-insurance-for-real-estate-investors",
    "/real-estate-investor-insurance-reviews",
    "/real-estate-investor-insurance-companies",
    "/steadily-review",
    "/obie-insurance-review",
    "/nreig-review",
    "/riskwell-review",
    "/hartford-landlord-insurance-review",
    "/travelers-rental-property-insurance-review",
    "/safeco-landlord-insurance-review",
    "/openly-landlord-insurance-review",
    "/liberty-mutual-rental-property-review",
    "/steadily-insurance-carrier-review",
    "/obie-insurance-carrier-review",
    "/get-a-quote",
    "/faq",
    "/real-estate-investor-insurance-calculator",
    "/about",
    "/blog",
    "/contact",
  ];
  const blogRoutes = getAllSlugs().map((slug) => `/blog/${slug}`);
  return [...staticRoutes, ...blogRoutes].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
