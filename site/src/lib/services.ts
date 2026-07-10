export interface ServiceItem {
  slug: string;
  name: string;
  blurb: string;
  tags: string[];
}

export interface ServiceCategory {
  slug: string;
  icon: string;
  title: string;
  summary: string;
  items: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "websites-web-apps",
    icon: "🌐",
    title: "Websites & Web Apps",
    summary:
      "Fast, clean marketing sites and custom web apps built for your business, not a template you have to fight. Designed, built, and deployed by the person who will maintain it.",
    items: [
      {
        slug: "business-website",
        name: "Business Website",
        blurb:
          "A fast, mobile-ready site with the pages you actually need, real copy, and analytics, launched and yours to keep.",
        tags: ["Website", "SEO"],
      },
      {
        slug: "custom-web-app",
        name: "Custom Web App",
        blurb:
          "A purpose-built application around your real workflow: portals, dashboards, intake, scheduling, billing. Built to spec, documented, and handed off.",
        tags: ["Web App", "Full-Stack"],
      },
      {
        slug: "client-portal",
        name: "Client Portal & Billing",
        blurb:
          "Branded client portals with quotes, approvals, invoicing, and payments wired in, so your customers self-serve and you get paid faster.",
        tags: ["Portal", "Payments"],
      },
      {
        slug: "web-ai-chat",
        name: "Website + AI Assistant",
        blurb:
          "A site with a trained assistant that answers questions and captures leads when you are not at the desk.",
        tags: ["Website", "AI"],
      },
    ],
  },
  {
    slug: "ios-apps",
    icon: "📱",
    title: "Custom iOS Apps",
    summary:
      "Native iPhone and iPad apps built for businesses and published to the App Store. From a focused single-purpose tool to a full product, designed, developed, and shipped end to end.",
    items: [
      {
        slug: "ios-mvp",
        name: "iOS App MVP",
        blurb:
          "Scope, design, and build a focused first version of your app idea, then ship it to TestFlight and the App Store.",
        tags: ["iOS", "Swift"],
      },
      {
        slug: "ios-product",
        name: "Full iOS Product",
        blurb:
          "A complete native app with accounts, sync, offline support, and in-app purchases, built to grow with real users.",
        tags: ["iOS", "Product"],
      },
      {
        slug: "app-store-launch",
        name: "App Store Launch",
        blurb:
          "App Store Connect setup, listing, screenshots, privacy labels, and review prep, so your launch does not stall.",
        tags: ["App Store", "Launch"],
      },
      {
        slug: "ios-maintenance",
        name: "Ongoing App Maintenance",
        blurb:
          "OS updates, bug fixes, and small feature work kept on a steady cadence so your app does not rot after launch.",
        tags: ["Maintenance", "Support"],
      },
    ],
  },
  {
    slug: "ai-automation",
    icon: "🤖",
    title: "AI & Automation",
    summary:
      "Practical AI setup and quiet automation that saves you real hours. We pick the right tools, wire them into how you actually work, and skip the hype when it does not fit.",
    items: [
      {
        slug: "ai-workspace-setup",
        name: "AI Workspace Setup",
        blurb:
          "The right AI tools chosen for your situation, connected to your business knowledge, and tuned so they save time instead of becoming another chore.",
        tags: ["AI", "Setup"],
      },
      {
        slug: "custom-ai-workflow",
        name: "Custom AI Workflow",
        blurb:
          "An end-to-end workflow built around a real task: drafting documents, summarizing intake, or automating data entry, measured by outcome.",
        tags: ["AI", "Workflow"],
      },
      {
        slug: "speed-to-lead",
        name: "Speed-to-Lead Automation",
        blurb:
          "Capture, qualify, route, and follow up with new inbound leads in minutes, not hours.",
        tags: ["Automation", "CRM"],
      },
      {
        slug: "document-processing",
        name: "Document Processing",
        blurb:
          "Extract, validate, and route structured data from invoices, forms, and PDFs without the manual re-typing.",
        tags: ["OCR", "Data"],
      },
    ],
  },
  {
    slug: "it-security",
    icon: "🛡",
    title: "Small-Business IT + Cybersecurity",
    summary:
      "Right-sized IT support and security fundamentals for small teams, delivered remotely. Backups that actually restore, hardened accounts, and someone honest to call.",
    items: [
      {
        slug: "cybersecurity-assessment",
        name: "Cybersecurity Assessment",
        blurb:
          "A vulnerability scan, policy review, and prioritized recommendations written for the person who has to act on them.",
        tags: ["Assessment", "Compliance"],
      },
      {
        slug: "account-hardening",
        name: "Account & Device Hardening",
        blurb:
          "MFA, password manager rollout, and endpoint hardening to current best practices, without breaking what your team uses daily.",
        tags: ["Hardening", "MFA"],
      },
      {
        slug: "backup-verification",
        name: "Backup Setup & Verification",
        blurb:
          "Automated backup configuration plus a real restore test before I sign off. A backup you have not tested is a guess.",
        tags: ["Backup", "DR"],
      },
      {
        slug: "on-call-support",
        name: "Remote On-Call Support",
        blurb:
          "Recurring business-hours response so your team has a real number to call, and clear runbooks so nothing depends on one person.",
        tags: ["Support", "Runbooks"],
      },
      {
        slug: "cloud-migration",
        name: "Cloud & Email Migration",
        blurb:
          "Move workloads, mail, and files to a current platform, verified, documented, and with a security review.",
        tags: ["Cloud", "Migration"],
      },
    ],
  },
];
