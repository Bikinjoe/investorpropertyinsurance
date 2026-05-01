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
    { name: "Aegis", logo: "/images/carriers/aegis.jpg" },
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
    { label: "Home", href: "/" },
    { label: "Who We Help", href: "/who-we-help" },
    {
      label: "Insurance Solutions",
      href: "/insurance-solutions",
      children: [
        { label: "Rental Property Insurance", href: "/rental-property-insurance" },
        { label: "Portfolio & Multiple Properties", href: "/multiple-rental-property-insurance" },
        { label: "Commercial Property", href: "/commercial-property" },
        { label: "Short-Term Rentals", href: "/short-term-rentals" },
        { label: "Builders Risk & Renovation", href: "/rentals-rehabs" },
      ],
    },
    { label: "Resource Center", href: "/resources" },
    { label: "Calculators & Tools", href: "/calculators" },
    { label: "Referral Partners", href: "/referral-partners" },
    { label: "About", href: "/about" },
    { label: "Start Here", href: "/start-here", cta: true },
  ] as NavItem[],
};

export type NavLeaf = { label: string; href: string; cta?: boolean };
export type NavGroup = { label: string; href?: string; children: NavLeaf[] };
export type NavItem = NavLeaf | NavGroup;

export function isNavGroup(item: NavItem): item is NavGroup {
  return "children" in item;
}
