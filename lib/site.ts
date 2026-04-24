export const site = {
  name: "Investor Property Insurance",
  legalName: "Vantage Point Risk Partners LLC",
  url: "https://investorpropertyinsurance.com",
  phone: "541-681-8793",
  phoneHref: "tel:+15416818793",
  phoneCTA: "Call or text 541-681-8793",
  email: "richard@vantagepointrisk.com",
  emailHref: "mailto:richard@vantagepointrisk.com",
  tagline: "Real Estate Investor Insurance. Every Asset Class. Western US.",
  serviceArea: "Serving AZ, CA, CO, ID, MT, NM, NV, OR, TX, UT, WA & WY",
  serviceStates: ["AZ", "CA", "CO", "ID", "MT", "NM", "NV", "OR", "TX", "UT", "WA", "WY"],
  carrierCount: "10+",
  carriers: [
    "BHHC",
    "Hartford",
    "Openly",
    "Liberty Mutual",
    "Safeco",
    "Travelers",
    "Obie",
    "Steadily",
    "REInsurePro",
  ],
  description:
    "Independent insurance agency for real estate investors. Coverage for every asset class: rentals, rehabs, short-term rentals, multifamily, and commercial property. 10+ carrier markets across the western US.",
  parentSiteUrl: "https://www.vantagepointrisk.com",
  team: [
    { name: "Richard Sweet", title: "Owner" },
    { name: "Sabina", title: "Producer" },
    { name: "Hugo", title: "Producer" },
  ],
  nav: [
    {
      label: "Asset Classes",
      children: [
        { label: "Rentals & Rehabs", href: "/rentals-rehabs" },
        { label: "Short-Term Rentals", href: "/short-term-rentals" },
        { label: "Ground-Up Construction", href: "/ground-up-construction" },
        { label: "Multifamily", href: "/multifamily" },
        { label: "Commercial Property", href: "/commercial-property" },
      ],
    },
    { label: "Cost", href: "/how-much-does-real-estate-investor-insurance-cost" },
    {
      label: "Resources",
      children: [
        { label: "FAQ", href: "/faq" },
        { label: "Problems We Fix", href: "/real-estate-investor-insurance-problems" },
        { label: "Cost Calculator", href: "/real-estate-investor-insurance-calculator" },
        { label: "Compare", href: "/landlord-insurance-vs-investor-insurance" },
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
