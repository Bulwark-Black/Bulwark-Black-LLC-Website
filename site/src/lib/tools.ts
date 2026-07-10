export interface Tool {
  name: string;
  blurb: string;
  url?: string;
  pricing: "free" | "freemium" | "paid";
  tags?: string[];
}

export interface ToolCategory {
  slug: string;
  title: string;
  summary: string;
  tools: Tool[];
}

export const toolCategories: ToolCategory[] = [
  {
    slug: "ai-assistants",
    title: "AI Assistants & Agents",
    summary: "What I actually reach for, and what I tune for clients.",
    tools: [
      { name: "Claude", blurb: "Daily driver for long-form thinking, code, and writing.", url: "https://claude.ai", pricing: "freemium", tags: ["LLM", "Daily Driver"] },
      { name: "ChatGPT", blurb: "Second opinion and image-heavy tasks.", url: "https://chatgpt.com", pricing: "freemium", tags: ["LLM"] },
      { name: "Google Gemini", blurb: "Fast multi-modal answers tied into Google services.", url: "https://gemini.google.com", pricing: "freemium", tags: ["LLM", "Google"] },
      { name: "Claude Code", blurb: "Pair-programming agent in the terminal, does most of the heavy lifting on builds like this site.", url: "https://claude.com/claude-code", pricing: "paid", tags: ["Coding Agent"] },
      { name: "OpenClaw (Hermez Agent)", blurb: "Browser relay that lets AI agents click, read, and act on pages on your behalf, the backbone for tool-use and agentic automations.", url: "https://openclaw.ai", pricing: "freemium", tags: ["Agent", "Browser", "Tool Use"] },
    ],
  },
  {
    slug: "privacy-and-security",
    title: "Privacy & Security",
    summary: "What I install on my own machines and recommend to clients first.",
    tools: [
      { name: "Mullvad VPN", blurb: "No-account VPN, buy with cash, generate an account number, no email required.", url: "https://mullvad.net", pricing: "paid", tags: ["VPN", "No-log"] },
      { name: "NordVPN", blurb: "Polished consumer VPN with broad device support, what most clients want when they want a VPN.", url: "https://nordvpn.com", pricing: "paid", tags: ["VPN", "Consumer"] },
      { name: "NordPass", blurb: "Cross-device password manager from Nord, easy to bundle with NordVPN for clients who want one login for everything.", url: "https://nordpass.com", pricing: "freemium", tags: ["Password Manager"] },
      { name: "Privacy.com", blurb: "Virtual card numbers per merchant, kills recurring-charge surprises.", url: "https://privacy.com", pricing: "freemium", tags: ["Cards", "Privacy"] },
      { name: "Brave Browser", blurb: "Default browser. Built-in ad and tracker blocking, sane defaults.", url: "https://brave.com", pricing: "free", tags: ["Browser"] },
    ],
  },
  {
    slug: "networking-and-dns",
    title: "Networking & DNS",
    summary: "Where the domains live, what's in front of them, and how the devices reach each other.",
    tools: [
      { name: "Cloudflare", blurb: "DNS, CDN, and WAF in front of nearly every site I touch, fast, generous free tier, hard to beat for security at the edge.", url: "https://cloudflare.com", pricing: "freemium", tags: ["DNS", "CDN", "WAF"] },
      { name: "GoDaddy", blurb: "Where most of the domain registrations live, including this one.", url: "https://godaddy.com", pricing: "paid", tags: ["Domains", "Registrar"] },
      { name: "Tailscale", blurb: "Zero-config mesh VPN built on WireGuard, wires every device into one private network without port-forwarding gymnastics.", url: "https://tailscale.com", pricing: "freemium", tags: ["Mesh VPN", "WireGuard"] },
      { name: "GL.iNet Flint", blurb: "Travel and home router with built-in WireGuard, the whole network rides through your VPN of choice. The right way to do work-from-anywhere.", url: "https://www.gl-inet.com", pricing: "paid", tags: ["Router", "Hardware", "WFA"] },
    ],
  },
  {
    slug: "hosting-and-cloud",
    title: "Hosting & Cloud",
    summary: "Where I run things, and where I help clients run theirs.",
    tools: [
      { name: "DigitalOcean", blurb: "Default for small Linux servers, predictable pricing, simple console, this site runs on a DO droplet.", url: "https://digitalocean.com", pricing: "paid", tags: ["VPS", "Linux"] },
      { name: "Hetzner", blurb: "Best price-to-performance for EU-based projects and bigger boxes.", url: "https://hetzner.com", pricing: "paid", tags: ["VPS", "Dedicated"] },
      { name: "Google Cloud", blurb: "Specifically for Gemini API access, BigQuery, and Workspace integrations.", url: "https://cloud.google.com", pricing: "freemium", tags: ["Cloud", "AI APIs"] },
      { name: "Microsoft Azure", blurb: "When clients are a Microsoft shop and need Entra/365 integration.", url: "https://azure.microsoft.com", pricing: "paid", tags: ["Cloud", "Microsoft"] },
    ],
  },
  {
    slug: "websites-and-apps",
    title: "Websites & Apps",
    summary: "What I build sites and small apps with, same stack you're looking at.",
    tools: [
      { name: "Astro", blurb: "Content-first website framework. Ships near-zero JavaScript by default.", url: "https://astro.build", pricing: "free", tags: ["Framework"] },
      { name: "Tailwind CSS", blurb: "Utility-first CSS, fast to build, easy to hand off.", url: "https://tailwindcss.com", pricing: "free", tags: ["CSS"] },
      { name: "Nginx", blurb: "Web server in front of every site I run.", url: "https://nginx.org", pricing: "free", tags: ["Server"] },
      { name: "PostgreSQL", blurb: "Default database for anything that needs to remember things.", url: "https://www.postgresql.org", pricing: "free", tags: ["Database"] },
      { name: "GitHub", blurb: "Source of truth for every repo I work in.", url: "https://github.com", pricing: "freemium", tags: ["Git", "CI"] },
    ],
  },
  {
    slug: "auth-and-identity",
    title: "Auth & Identity",
    summary: "Sign-in, accounts, and SSO for client apps.",
    tools: [
      { name: "Clerk", blurb: "Drop-in auth for client apps, saves weeks vs. rolling your own.", url: "https://clerk.com", pricing: "freemium", tags: ["Auth", "SaaS"] },
      { name: "Microsoft Entra (Azure AD)", blurb: "When the client is a Microsoft shop and needs SSO into 365.", url: "https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id", pricing: "paid", tags: ["SSO", "Enterprise"] },
      { name: "Microsoft Authenticator", blurb: "Default 2FA app for clients living in 365, push approvals, passwordless sign-in, recovery built in.", url: "https://www.microsoft.com/en-us/security/mobile-authenticator-app", pricing: "free", tags: ["2FA", "TOTP"] },
      { name: "Google Authenticator", blurb: "Simple, offline TOTP codes, what I install when a client just wants the basic six-digit codes and nothing else.", url: "https://safety.google/authentication/", pricing: "free", tags: ["2FA", "TOTP"] },
    ],
  },
  {
    slug: "payments-and-finance",
    title: "Payments & Finance",
    summary: "What handles money on the apps I build and run.",
    tools: [
      { name: "Stripe", blurb: "Default payments processor. Clean APIs, sane fees, real reporting.", url: "https://stripe.com", pricing: "paid", tags: ["Payments"] },
      { name: "RevenueCat", blurb: "Mobile in-app purchases without rolling your own subscription engine.", url: "https://www.revenuecat.com", pricing: "freemium", tags: ["Mobile IAP"] },
    ],
  },
  {
    slug: "email-and-communication",
    title: "Email & Communication",
    summary: "Inbound, outbound, and signing.",
    tools: [
      { name: "Resend", blurb: "Transactional and broadcast email with a developer-friendly API.", url: "https://resend.com", pricing: "freemium", tags: ["Email API"] },
      { name: "Gmail / Google Workspace", blurb: "Personal and project mailboxes I run my day out of.", url: "https://workspace.google.com", pricing: "paid", tags: ["Mail"] },
      { name: "Microsoft Outlook", blurb: "When clients live in 365, calendar, mail, and shared inboxes without forcing them to switch.", url: "https://outlook.com", pricing: "freemium", tags: ["Mail", "Microsoft"] },
      { name: "Microsoft Teams", blurb: "Where most enterprise and federal clients meet, meetings, chat, and shared files in one window.", url: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software", pricing: "freemium", tags: ["Chat", "Video"] },
      { name: "Docusign", blurb: "Client agreements and statements of work.", url: "https://www.docusign.com", pricing: "paid", tags: ["E-Sign"] },
    ],
  },
  {
    slug: "remote-support",
    title: "Remote Support",
    summary: "How I help clients without driving across the state.",
    tools: [
      { name: "RustDesk", blurb: "Self-hosted remote desktop. Free, encrypted, no third-party in the middle.", url: "https://rustdesk.com", pricing: "free", tags: ["Remote", "Self-Hosted"] },
      { name: "TigerVNC", blurb: "Battle-tested VNC client when I need a no-frills connection.", url: "https://tigervnc.org", pricing: "free", tags: ["VNC"] },
      { name: "Zoom", blurb: "When the client just wants a normal screen share with audio.", url: "https://zoom.us", pricing: "freemium", tags: ["Video"] },
    ],
  },
  {
    slug: "data-and-tools",
    title: "Data & Developer Tools",
    summary: "What's open on my machine when something breaks.",
    tools: [
      { name: "VS Code", blurb: "Daily-driver editor. Strong extension ecosystem, first-class Git, fast on big repos.", url: "https://code.visualstudio.com", pricing: "free", tags: ["IDE"] },
      { name: "Sublime Text", blurb: "Snappy, low-friction editor for quick edits, scratch files, and giant log dives.", url: "https://www.sublimetext.com", pricing: "paid", tags: ["Editor"] },
      { name: "DBeaver", blurb: "Multi-database GUI, one app for Postgres, MySQL, SQLite.", url: "https://dbeaver.io", pricing: "free", tags: ["DB GUI"] },
      { name: "Insomnia", blurb: "API testing and documentation without the bloat.", url: "https://insomnia.rest", pricing: "freemium", tags: ["API"] },
      { name: "Firecrawl", blurb: "Programmatic web scraping that respects rate limits and robots.txt.", url: "https://firecrawl.dev", pricing: "freemium", tags: ["Scraping"] },
      { name: "draw.io", blurb: "Architecture diagrams that come out clean and version in git.", url: "https://www.drawio.com", pricing: "free", tags: ["Diagrams"] },
    ],
  },
  {
    slug: "writing-and-notes",
    title: "Writing & Notes",
    summary: "Where I think and where the runbooks live.",
    tools: [
      { name: "Obsidian", blurb: "Local-first markdown notes. Every client engagement gets a vault.", url: "https://obsidian.md", pricing: "freemium", tags: ["Notes", "Markdown"] },
      { name: "Greenshot", blurb: "Fast cropped screenshots for runbooks and bug reports.", url: "https://getgreenshot.org", pricing: "free", tags: ["Screenshots"] },
      { name: "PDF Expert", blurb: "When a PDF needs to be marked up, signed, or stitched.", url: "https://pdfexpert.com", pricing: "paid", tags: ["PDF"] },
    ],
  },
];
