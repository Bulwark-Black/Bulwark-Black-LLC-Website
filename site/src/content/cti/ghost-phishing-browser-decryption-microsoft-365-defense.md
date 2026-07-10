---
title: "Ghost Phishing Shows Why Email Security Must Follow the Browser"
publishedAt: 2026-07-09T20:03:04
summary: "Ghost phishing hides the real lure until the browser renders it. Here is what SMBs and government contractors should do to defend Microsoft 365 identities."
category: "Cyber Security Blog"
categories:
  - "Cyber Security Blog"
  - "General CTI"
  - "Privacy & Security"
  - "Social Engineering"
tags: []
heroImage: "/wp-content/uploads/2026/07/ghost-phishing-browser-decryption-featured.png"
wpId: 2466
wpSlug: "ghost-phishing-browser-decryption-microsoft-365-defense"
originalLink: "https://bulwarkblack.com/ghost-phishing-browser-decryption-microsoft-365-defense"
draft: false
---

<p>A new EvilTokens “ghost phishing” campaign is a useful reminder that the real phishing page does not always exist when the email security stack first inspects the link. According to reporting in <a href="https://thehackernews.com/2026/07/new-ghost-phishing-wave-is-breaking.html" target="_blank" rel="noopener">The Hacker News</a>, the campaign hides the malicious HTML behind browser-side decryption and uses Microsoft device-code phishing to move from a clicked link to Microsoft 365 account takeover.</p>
<p>That matters for small businesses, managed service providers, and government contractors because Microsoft 365 is not just email anymore. It is identity, file storage, Teams, SharePoint, invoicing, contracts, and often the first step toward business email compromise. If the first scan says “clean,” but the browser later decrypts the actual lure, defenders can lose the window where fast containment is easiest.</p>
<h2>What happened</h2>
<p>The reported campaign uses an EvilTokens phishing flow where the initial page can appear harmless to static inspection. The dangerous content is encrypted and only becomes visible after the victim’s browser decrypts and renders it in the Document Object Model. The attack then abuses Microsoft’s device-code login flow: the victim completes a legitimate Microsoft authentication process, but the authorization is handed to the attacker-controlled session.</p>
<p>That approach weakens controls that only evaluate the initial URL response, because the page seen by the scanner may not be the page the employee sees after browser execution. In practical terms, security teams may get a clean or inconclusive verdict while the user is already being pushed through a cloud-account authorization flow.</p>
<h2>Why it matters</h2>
<p>This is not just a phishing-page trick. It is a cloud identity problem.</p>
<ul>
<li><strong>Password theft is not required.</strong> Device-code phishing can grant access without capturing a password directly.</li>
<li><strong>Email scanning can miss the final behavior.</strong> If malicious content appears only after browser-side decryption, static URL checks have limited evidence.</li>
<li><strong>Microsoft 365 compromise scales fast.</strong> One account can expose mailboxes, OneDrive, SharePoint, Teams chats, invoices, contracts, and downstream SaaS access.</li>
<li><strong>Incident response gets delayed.</strong> Analysts may waste time reconciling a “clean” URL verdict with a user report or suspicious sign-in alert.</li>
</ul>
<h2>Defensive takeaways</h2>
<p>Organizations do not need exotic tooling to reduce the risk, but they do need to treat browser behavior and cloud identity telemetry as first-class evidence.</p>
<ul>
<li><strong>Monitor device-code authentication.</strong> Alert on unusual device-code flows, unfamiliar locations, impossible travel, and risky sign-ins tied to Microsoft 365.</li>
<li><strong>Harden conditional access.</strong> Require phishing-resistant MFA where possible, restrict unmanaged devices, and enforce session controls for sensitive apps.</li>
<li><strong>Inspect suspicious links dynamically.</strong> Use sandboxing or browser-isolation workflows that capture DOM changes, JavaScript behavior, network requests, and final rendered content.</li>
<li><strong>Train users on device-code prompts.</strong> Make it clear that entering a code into a Microsoft page can still authorize attacker access if the request started from a suspicious email.</li>
<li><strong>Review OAuth and session activity after suspected phishing.</strong> Revoke sessions, inspect mailbox rules, check forwarding, review app consent, and validate SharePoint/OneDrive access.</li>
<li><strong>Pre-stage containment playbooks.</strong> A fast Microsoft 365 account-isolation checklist beats a slow debate over whether the original URL looked malicious.</li>
</ul>
<h2>Bulwark Black assessment</h2>
<p>Ghost phishing works because many defenses still think like gateways: evaluate the message, score the URL, and move on. Attackers are pushing the decisive moment into the browser and into cloud identity flows where the old evidence trail is thinner.</p>
<p>For SMBs and government contractors, the priority should be simple: do not let a clean link verdict override suspicious identity behavior. If a user reports an odd Microsoft login flow, or if Entra ID shows device-code authentication from an unexpected source, treat it as an account-takeover investigation until proven otherwise.</p>
<p>The best defensive posture combines user reporting, dynamic link analysis, conditional access, session revocation, and Microsoft 365 audit review. The goal is not to catch every phishing page at the perimeter. The goal is to prevent one browser-rendered lure from becoming a full mailbox, file, and vendor-payment incident.</p>
<p><strong>Source:</strong> <a href="https://thehackernews.com/2026/07/new-ghost-phishing-wave-is-breaking.html" target="_blank" rel="noopener">The Hacker News — New Ghost Phishing Wave Is Breaking Traditional Email Security</a></p>
