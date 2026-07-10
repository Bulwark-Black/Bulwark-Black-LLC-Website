---
title: "BlackFile Vishing Campaign Shows Why MFA Alone Is Not Enough"
publishedAt: 2026-05-15T20:06:06
summary: "GTIG reports UNC6671 / BlackFile is using vishing, AiTM phishing, and SaaS data theft to extort organizations. Here is what SMBs and government contractors should harden now."
category: "Cyber Security Blog"
categories:
  - "Cyber Security Blog"
  - "General CTI"
  - "Privacy & Security"
tags: []
heroImage: "/wp-content/uploads/2026/05/blackfile-vishing-extortion-featured.png"
wpId: 2250
wpSlug: "blackfile-vishing-extortion-identity-defense"
originalLink: "https://bulwarkblack.com/blackfile-vishing-extortion-identity-defense"
draft: false
---

<p>Google Threat Intelligence Group (GTIG) is tracking an extortion operation it calls <strong>UNC6671 / BlackFile</strong>, and the lesson for small businesses and government contractors is blunt: the breach path does not need a zero-day when identity support workflows can be impersonated well enough.</p>
<p>According to GTIG, the campaign uses voice phishing to walk employees through a fake passkey or MFA enrollment process, captures credentials in real time, intercepts MFA, and then registers attacker-controlled authentication methods for persistence. From there, the operators target Microsoft 365, Okta-connected SaaS, SharePoint, OneDrive, Salesforce, Zendesk, and other cloud repositories for high-volume data theft and extortion.</p>
<p><a href="https://cloud.google.com/blog/topics/threat-intelligence/blackfile-vishing-extortion-operation/" target="_blank" rel="noopener">Original source: Google Cloud / GTIG — “Welcome to BlackFile: Inside a Vishing Extortion Operation”</a></p>
<h2>What happened</h2>
<p>GTIG describes UNC6671 as a high-cadence extortion actor active since early 2026, targeting organizations across North America, Australia, and the United Kingdom. The group’s playbook centers on social engineering rather than exploiting a vendor vulnerability. Callers pose as internal IT or help desk staff and often contact employees on personal phones to bypass normal corporate support channels.</p>
<p>The pretext is practical: mandatory passkey enrollment, MFA reset, or SSO migration. The victim is guided to a lookalike identity portal, enters credentials, approves MFA, and the attacker immediately uses that live session to gain access. In successful cases, the actor then adds a new MFA factor or device so the foothold survives after the phone call ends.</p>
<h2>Why this matters</h2>
<p>For SMBs and government contractors, this is the kind of attack that slips between policy and tooling. The organization may technically “have MFA,” but push approvals, SMS, and one-time codes can still be defeated when an attacker is on the phone with the user and proxying the login in real time.</p>
<p>The more important detail is what happens after login. GTIG observed the actors using valid cloud sessions to search for terms like “confidential” and “SSN,” then automate collection from SharePoint and OneDrive. Some activity may appear as <code>FileAccessed</code> rather than <code>FileDownloaded</code>, especially when scripts or direct HTTP requests are used. If a SOC only treats download events as high severity, exfiltration can hide in plain sight.</p>
<h2>Defensive takeaways</h2>
<ul>
<li><strong>Move priority users to phishing-resistant MFA.</strong> Start with executives, finance, IT admins, proposal teams, HR, and anyone with access to contract, pricing, personnel, or customer data. FIDO2 security keys and properly implemented passkeys are much harder to proxy than push or SMS MFA.</li>
<li><strong>Lock down MFA enrollment.</strong> Alert on new MFA factor registration, especially after failed or abandoned challenges, impossible travel, VPN/hosting-provider IPs, or help-desk themed activity.</li>
<li><strong>Reclassify suspicious access events.</strong> Treat high-volume <code>FileAccessed</code> activity from Python, PowerShell, Go, curl, or unfamiliar clients as potential exfiltration — not harmless browsing.</li>
<li><strong>Hunt for user-agent mismatches.</strong> A session claiming to be Microsoft Office while the user agent shows <code>python-requests</code> or PowerShell should be investigated quickly.</li>
<li><strong>Train against the exact pretext.</strong> Users should know that IT will not call personal phones and ask them to enroll passkeys, approve MFA, or visit an unfamiliar SSO domain during a live call.</li>
<li><strong>Protect SaaS data, not just endpoints.</strong> SharePoint, OneDrive, Salesforce, Zendesk, ServiceNow, and email all need logging, retention, and anomaly detection because that is where extortion operators go after identity compromise.</li>
</ul>
<h2>Bulwark Black assessment</h2>
<p>BlackFile is a good example of where modern intrusion response is headed: identity first, SaaS heavy, and extortion focused. The attacker does not need to deploy ransomware if they can convincingly prove access to customer data, HR files, contracts, pricing, support tickets, and executive mailboxes.</p>
<p>The practical move is to assume a stolen session is possible and make the post-login behavior noisy. New MFA registration, scripted SharePoint access, abnormal SaaS searches, unmanaged device access, and bulk file interaction should all be tied together into one investigation path. That gives defenders a chance to catch the campaign before an extortion email becomes the first real alert.</p>
