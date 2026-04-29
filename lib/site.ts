export const site = {
  name: "Investor Property Insurance",
  legalName: "Vantage Point Risk Partners LLC",
  url: "https://investorpropertyinsurance.com",
  phone: "541-681-8793",
  phoneHref: "tel:+15416818793",
  phoneCTA: "541-681-8793",
  email: "richard@vantagepointrisk.com",
  emailHref: "mailto:richard@vantagepointrisk.com",
  tagline: "Insurance for property owners and real estate investors. Western US.",
  serviceArea: "Serving AZ, CA, CO, ID, MT, NM, NV, OR, TX, UT, WA & WY",
  serviceStates: ["AZ", "CA", "CO", "ID", "MT", "NM", "NV", "OR", "TX", "UT", "WA", "WY"],
  carrierCount: "20+",
  carriers: [
    { name: "BHHC", logo: "/images/carriers/bhhc.jpg" },
    { name: "The Hartford", logo: "/images/carriers/hartford.jpg" },
    { name: "Openly", logo: "/images/carriers/openly.jpg" },
    { name: "Liberty Mutual", logo: "/images/carriers/libertymutual.jpg" },
    { name: "Travelers", logo: "/images/carriers/travelers.jpg" },
    { name: "Obie", logo: "/images/carriers/obie.jpg" },
    { name: "Steadily", logo: "/images/carriers/steadily.jpg" },
    { name: "REInsurePro", logo: "/images/carriers/reinsurepo.jpg" },
    { name: "Guard", logo: "/images/carriers/guard.jpg" },
    { name: "US Assure", logo: "/images/carriers/usassure.svg" },
    { name: "USLI", logo: "/images/carriers/usli.jpg" },
    { name: "CrossCover", logo: "/images/carriers/crosscover.jpg" },
    { name: "National General", logo: "/images/carriers/nationalgeneral.jpg" },
  ],
  description:
    "Independent insurance agency for real estate investors and income-producing property owners. Coverage for rental properties, commercial property, and professional-service firms. 20+ carrier markets across the western US.",
  parentSiteUrl: "https://www.vantagepointrisk.com",
  team: [
    { name: "Richard Sweet", title: "Owner" },
    { name: "Sabina", title: "Producer" },
    { name: "Hugo", title: "Producer" },
  ],
  nav: [
    {
      label: "Property Types",
      children: [
        { label: "Rentals & Rehabs", href: "/rentals-rehabs" },
        { label: "Short-Term Rentals", href: "/short-term-rentals" },
        { label: "House Hacking", href: "/house-hacking-insurance" },
        { label: "Ground-Up Construction", href: "/ground-up-construction" },
        { label: "Multifamily", href: "/multifamily" },
        { label: "Mobile Home Park", href: "/mobile-home-park-insurance" },
        { label: "Commercial Property", href: "/commercial-property" },
        { label: "Self-Storage Facility", href: "/self-storage-insurance" },
        { label: "Portfolio Landlord", href: "/portfolio-landlord-insurance" },
        { label: "DSCR Loan Coverage", href: "/dscr-loan-insurance" },
      ],
    },
    { label: "Cost", href: "/how-much-does-real-estate-investor-insurance-cost" },
    {
      label: "Resources",
      children: [
        { label: "FAQ", href: "/faq" },
        { label: "Problems We Fix", href: "/real-estate-investor-insurance-problems" },
        { label: "Cost Calculator", href: "/real-estate-investor-insurance-calculator" },
        { label: "Compare Form Types", href: "/landlord-insurance-vs-investor-insurance" },
        { label: "Compare Agencies", href: "/real-estate-investor-insurance-companies" },
        { label: "Best Insurance", href: "/best-insurance-for-real-estate-investors" },
        { label: "Reviews", href: "/real-estate-investor-insurance-reviews" },
      ],
    },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ] as NavItem[],
};

export type NavLeaf = { label: string; href: string };
export type NavGroup = { label: string; children: NavLeaf[] };
export type NavItem = NavLeaf | NavGroup;

export function isNavGroup(item: NavItem): item is NavGroup {
  return "children" in item;
}
