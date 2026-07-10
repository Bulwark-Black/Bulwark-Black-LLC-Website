---
title: "PawsRunner Steganography Shows Infostealers Are Hiding in Plain Sight"
publishedAt: 2026-05-16T01:03:47
summary: "FortiGuard Labs reports PureLogs is being delivered through PawsRunner steganography. Here is what SMBs and government contractors should watch for defensively."
category: "Cyber Security Blog"
categories:
  - "Cyber Security Blog"
  - "General CTI"
  - "Malware"
tags: []
heroImage: "/wp-content/uploads/2026/05/purelogs-pawsrunner-steganography-featured.png"
wpId: 2252
wpSlug: "pawsrunner-steganography-purelogs-infostealer-defense"
originalLink: "https://bulwarkblack.com/pawsrunner-steganography-purelogs-infostealer-defense"
draft: false
---

<p>FortiGuard Labs is tracking a phishing campaign that uses <strong>PawsRunner</strong>, a steganography-based loader, to deliver the <strong>PureLogs</strong> infostealer. The campaign is not just another commodity stealer story. It shows how malware operators are making delivery chains harder to inspect by hiding executable payloads inside otherwise ordinary-looking files.</p>
<p>The reported chain starts with an invoice-themed phishing email containing a TXZ archive. Once opened, embedded JavaScript sets large numbers of process environment variables, launches hidden execution, and uses PowerShell to decode, decrypt, decompress, and load .NET payloads in memory. From there, PawsRunner retrieves the next stage through multiple network APIs and can process HTML, Base64 data, or PNG files that contain hidden encrypted payloads.</p>
<p>That matters because many small and mid-sized organizations still tune detection around obvious downloads, suspicious attachments, or known executable formats. PawsRunner pushes defenders into a messier problem: a “legitimate-file-plus-hidden-data” model where an image request may be part of the malware delivery chain.</p>
<h2>Why this matters for SMBs and government contractors</h2>
<p>PureLogs is built to steal data that directly supports follow-on compromise. FortiGuard describes harvesting across browsers, browser extensions, Discord data, files, and system information. For a small business or government contractor, that means the first compromised workstation can quickly become an identity incident, a cloud access problem, or a client-data exposure.</p>
<p>This is especially relevant for organizations that rely heavily on browser-based operations: Microsoft 365, Google Workspace, cloud consoles, banking portals, payroll systems, CRM platforms, and contractor portals. If browser sessions, saved passwords, cookies, or extension data are taken, the breach may not stop at the infected endpoint.</p>
<h2>Defensive takeaways</h2>
<ul>
<li><strong>Treat invoice archives as high risk.</strong> Block or sandbox uncommon compressed formats like TXZ/TAR/XZ when they arrive through email from outside the organization.</li>
<li><strong>Watch for environment-variable abuse.</strong> Large numbers of newly created process environment variables tied to script execution should stand out in endpoint telemetry.</li>
<li><strong>Alert on hidden PowerShell and conhost behavior.</strong> PowerShell with hidden windows, encoded/decrypted payload handling, or reflection-based .NET loading deserves immediate review.</li>
<li><strong>Inspect image-based payload delivery.</strong> PNG downloads from unusual hosts, especially followed by in-memory .NET execution, should be correlated rather than treated as benign web noise.</li>
<li><strong>Harden browser credential exposure.</strong> Disable unmanaged password storage where possible, enforce phishing-resistant MFA for sensitive systems, and monitor for abnormal session reuse.</li>
<li><strong>Scope beyond the machine.</strong> If a stealer is confirmed, rotate credentials, invalidate sessions, review OAuth/app tokens, and check cloud audit logs before declaring containment.</li>
</ul>
<h2>Bulwark Black assessment</h2>
<p>The practical lesson is that infostealer response has to be identity-centric, not just endpoint-centric. Removing the malware is necessary, but it is not enough if the attacker already collected browser sessions, credentials, extension data, and system context. For SMBs and government contractors, the incident response playbook should assume that a stealer infection may lead to SaaS compromise, vendor portal abuse, fraudulent payments, or data extortion.</p>
<p>PawsRunner also reinforces a broader trend: loaders are becoming more evasive, more modular, and more comfortable hiding inside normal-looking content. Defenders should focus less on a single file extension or hash and more on behavior across the chain: archive execution, script staging, hidden PowerShell, image retrieval, in-memory loading, and outbound C2.</p>
<p><em>Source: <a href="https://www.fortinet.com/blog/threat-research/purelogs-delivery-via-pawsrunner-steganography" target="_blank" rel="noopener">FortiGuard Labs — PureLogs: Delivery via PawsRunner Steganography</a>.</em></p>
