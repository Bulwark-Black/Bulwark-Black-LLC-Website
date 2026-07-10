---
title: "Microsoft to Disable 30-Year-Old NTLM Authentication Protocol by Default"
publishedAt: 2026-01-31T02:05:00
summary: "Microsoft announces NTLM will be disabled by default in upcoming Windows releases, marking the end of the 30-year-old authentication protocol that has been a persistent security vulnerability."
category: "General CTI"
categories:
  - "General CTI"
tags:
  - "Authentication Bypass"
  - "Kerberos"
  - "Microsoft Office"
  - "NTLM"
  - "Windows Security"
heroImage: "/wp-content/uploads/2026/01/ntlm-windows-security.jpg"
wpId: 1762
wpSlug: "microsoft-to-disable-30-year-old-ntlm-authentication-protocol-by-default"
originalLink: "https://bulwarkblack.com/microsoft-to-disable-30-year-old-ntlm-authentication-protocol-by-default"
draft: false
---

<p>Microsoft has announced a significant security architecture change: the 30-year-old NTLM (New Technology LAN Manager) authentication protocol will be disabled by default in upcoming Windows releases.</p>
<p>Source: <a href="https://www.bleepingcomputer.com/news/microsoft/microsoft-to-disable-ntlm-by-default-in-future-windows-releases/" target="_blank" rel="noopener">BleepingComputer</a></p>
<h2>Why This Matters</h2>
<p>NTLM, introduced in 1993 with Windows NT 3.1, has been a persistent security liability for enterprises. Despite being superseded by Kerberos in Windows 2000, NTLM remained as a fallback authentication method—one that attackers have exploited extensively.</p>
<p>The protocol&#8217;s weak cryptography has made it a favorite target for attackers using:</p>
<ul>
<li><strong>NTLM relay attacks</strong> (PetitPotam, ShadowCoerce, DFSCoerce, RemotePotato0)</li>
<li><strong>Pass-the-hash attacks</strong> for credential theft and lateral movement</li>
</ul>
<h2>Microsoft&#8217;s Three-Phase Transition Plan</h2>
<p><strong>Phase 1 (Now):</strong> Enhanced auditing tools in Windows 11 24H2 and Windows Server 2025 to identify NTLM usage across environments.</p>
<p><strong>Phase 2 (H2 2026):</strong> New features including IAKerb and Local Key Distribution Center to address scenarios that currently trigger NTLM fallback.</p>
<p><strong>Phase 3 (Future):</strong> Network NTLM disabled by default in future Windows releases. The protocol will remain available but must be explicitly re-enabled via policy controls.</p>
<h2>What Organizations Should Do</h2>
<p>Security teams should:</p>
<ul>
<li>Audit current NTLM usage using Windows built-in tools</li>
<li>Identify applications and services that still depend on NTLM</li>
<li>Plan migration to Kerberos-based authentication</li>
<li>Review Active Directory Certificate Services (AD CS) configurations to prevent relay attacks</li>
</ul>
<p>This move marks Microsoft&#8217;s continued push toward passwordless, phishing-resistant authentication—a welcome change for enterprises tired of dealing with NTLM-related security incidents.</p>
