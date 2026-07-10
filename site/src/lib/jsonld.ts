import { site } from "./site";

export type JsonLdObject = Record<string, unknown>;

const URL_BASE = site.url.replace(/\/$/, "");

export const ALBERT_LINKED_IN = "https://www.linkedin.com/in/albert-lascola";
export const ALBERT_GITHUB = "https://github.com/AlbertL7";

export const personAlbert: JsonLdObject = {
  "@type": "Person",
  "@id": `${URL_BASE}/#albert`,
  name: "Albert LaScola",
  jobTitle: "Owner-Operator, Bulwark Black LLC",
  worksFor: { "@id": `${URL_BASE}/#bulwark-black` },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "ECPI University" },
    { "@type": "CollegeOrUniversity", name: "Western Washington University" },
  ],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "TS/SCI" },
    { "@type": "EducationalOccupationalCredential", name: "CompTIA Security+" },
    { "@type": "EducationalOccupationalCredential", name: "CompTIA Network+" },
    { "@type": "EducationalOccupationalCredential", name: "Certified Ethical Hacker (CEH)" },
    { "@type": "EducationalOccupationalCredential", name: "Certified Blockchain Practitioner (CBP)" },
    { "@type": "EducationalOccupationalCredential", name: "MS, Cyber/Electronic Operations and Warfare" },
  ],
  knowsAbout: [
    "Cyber threat intelligence",
    "Threat-actor tracking",
    "Malware analysis",
    "Detection engineering",
    "Cybersecurity",
    "Custom software development",
    "iOS app development",
    "AI engineering",
  ],
  sameAs: [ALBERT_LINKED_IN, ALBERT_GITHUB],
};

export const organizationBulwarkBlack: JsonLdObject = {
  "@type": "Organization",
  "@id": `${URL_BASE}/#bulwark-black`,
  name: site.legalName,
  legalName: site.legalName,
  url: site.url,
  founder: { "@id": `${URL_BASE}/#albert` },
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.operating.city,
      addressRegion: site.operating.state,
      addressCountry: "US",
    },
  },
  award: site.contracting.certifications,
  identifier: [
    { "@type": "PropertyValue", propertyID: "CAGE", value: site.contracting.cage },
    { "@type": "PropertyValue", propertyID: "UEI", value: site.contracting.uei },
  ],
};

export const localBusiness: JsonLdObject = {
  "@type": "ProfessionalService",
  "@id": `${URL_BASE}/#localbusiness`,
  name: site.name,
  alternateName: site.legalName,
  description: site.description,
  url: site.url,
  email: site.email,
  founder: { "@id": `${URL_BASE}/#albert` },
  image: `${URL_BASE}/og.svg`,
  logo: `${URL_BASE}/favicon.svg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.operating.city,
    addressRegion: site.operating.state,
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "AdministrativeArea", name: "United States (remote)" },
  ],
  knowsAbout: [
    "Cyber threat intelligence",
    "Cybersecurity",
    "Custom web application development",
    "Custom iOS app development",
    "AI integration",
    "Small business IT",
  ],
  sameAs: [ALBERT_LINKED_IN],
};

export function breadcrumb(items: Array<{ name: string; path: string }>): JsonLdObject {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: new URL(it.path, site.url).toString(),
    })),
  };
}

export function faqPage(items: Array<{ q: string; a: string }>): JsonLdObject {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export interface SoftwareApp {
  name: string;
  description: string;
  url?: string;
  appCategory?: string;
  operatingSystem?: string;
}

export function softwareApplication(app: SoftwareApp): JsonLdObject {
  return {
    "@type": "SoftwareApplication",
    name: app.name,
    description: app.description,
    url: app.url,
    applicationCategory: app.appCategory ?? "BusinessApplication",
    operatingSystem: app.operatingSystem ?? "Web",
    creator: { "@id": `${URL_BASE}/#albert` },
    publisher: { "@id": `${URL_BASE}/#bulwark-black` },
  };
}

export function graph(...items: Array<JsonLdObject | null | undefined>): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@graph": items.filter((x): x is JsonLdObject => Boolean(x)),
  };
}
