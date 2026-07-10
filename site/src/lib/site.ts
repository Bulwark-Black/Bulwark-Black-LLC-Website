export type NavChild = { label: string; href: string; external?: boolean };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const site = {
  name: "Bulwark Black",
  legalName: "Bulwark Black LLC",
  tagline: "Cyber Threat Intelligence · Custom Software · Remote Tech Help",
  description:
    "Bulwark Black is a veteran-owned (SDVOSB) cyber threat intelligence and custom software studio. Daily CTI on threat actors, malware, and IOCs, plus custom web and iOS apps, AI setup, and small-business IT and cybersecurity, delivered remotely across the United States.",
  url: "https://bulwarkblack.com",
  email: "support@bulwarkblack.com",
  nav: [
    {
      label: "Software",
      href: "/products/",
      children: [
        { label: "Contractor Codex", href: "https://contractorcodex.com", external: true },
        { label: "SAMscout AI", href: "https://samscout.ai", external: true },
        { label: "VA Disability Calc & Track", href: "/va-disability-calc-track-app/" },
        { label: "All software", href: "/products/" },
      ],
    },
    {
      label: "Threat Intel",
      href: "/cyber-threat-intelligence/",
      children: [
        { label: "Latest reporting", href: "/cyber-threat-intelligence/" },
        { label: "Russian CTI", href: "/category/russian-cyber-threat-intelligence/" },
        { label: "Chinese CTI", href: "/category/chinese-cyber-threat-intelligence/" },
        { label: "North Korean CTI", href: "/category/north-korean-cyber-threat-intelligence/" },
        { label: "Iranian CTI", href: "/category/iranian-cyber-threat-intelligence/" },
        { label: "Global / Anomalous", href: "/category/anomalous-cyber-threat-intelligence/" },
        { label: "Malware", href: "/category/malware/" },
        { label: "IOC / YARA downloads", href: "/cyber-threat-intelligence/" },
      ],
    },
    {
      label: "Services",
      href: "/services/",
      children: [
        { label: "Websites & Web Apps", href: "/services/" },
        { label: "Custom iOS Apps", href: "/services/" },
        { label: "AI & Automation", href: "/services/" },
        { label: "Small-Business IT & Cybersecurity", href: "/services/" },
      ],
    },
    {
      label: "Company",
      href: "/about/",
      children: [
        { label: "About", href: "/about/" },
        { label: "Community", href: "/community/" },
        { label: "Contact", href: "/contact/" },
      ],
    },
    { label: "Blog", href: "/blog/" },
  ] as NavItem[],
  booking: {
    calendlyUrl: "https://calendly.com/rural-tech-and-support/tech-advisory-call",
    offering: "AI Advisory or Anything Technical",
    duration: "1 hour",
    price: "$199",
    priceNote: "Payment required to book. Non-refundable.",
  },
  aiosBooking: {
    calendlyUrl: "https://calendly.com/rural-tech-and-support/ai-system-setup-hour",
    offering: "AI Workspace Setup Hour",
    duration: "1 hour",
    price: "$250",
    priceNote: "Payment required to book. Non-refundable. Most owners need 2 to 4 sessions to finish the build.",
  },
  // Registered WA base. Audience is national/remote.
  operating: {
    city: "Spokane",
    state: "WA",
    geo: { lat: 47.6588, lng: -117.426 },
  },
  // Remote/nationwide (US) framing.
  serviceAreas: [
    "Remote across the United States",
    "On-site by arrangement",
    "Nationwide federal & agency support",
  ],
  address: {
    street: "522 W Riverside Ave, Ste N",
    city: "Spokane",
    state: "WA",
    zip: "99201",
    label: "Registered agent address (mailing only)",
  },
  contracting: {
    cage: "17UL6",
    uei: "DVNTWBJ2HMP8",
    naics: [
      "541512",
      "541511",
      "541519",
      "541330",
      "541690",
      "541990",
      "811210",
      "334516",
      "561612",
      "425120",
      "336611",
    ],
    certifications: ["SDVOSB", "SAM Registered"],
  },
};

export type Site = typeof site;
