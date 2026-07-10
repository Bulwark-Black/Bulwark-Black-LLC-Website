---
title: "Global Coalition Dismantles Tycoon 2FA Phishing Platform: 87 Million Emails, 330 Domains Seized"
publishedAt: 2026-03-05T02:03:33
summary: "Microsoft, Europol, and a coalition of cybersecurity partners have dismantled Tycoon 2FA, one of the most prolific phishing-as-a-service (PhaaS) platforms ever documented, seizing 330 domains used for credential theft and multi-factor authentication bypass. The coordinated takedo"
category: "General CTI"
categories:
  - "General CTI"
tags: []
heroImage: "/wp-content/uploads/2026/03/tycoon-2fa-takedown.jpg"
wpId: 1978
wpSlug: "global-coalition-dismantles-tycoon-2fa-phishing-platform-87-million-emails-330-domains-seized"
originalLink: "https://bulwarkblack.com/global-coalition-dismantles-tycoon-2fa-phishing-platform-87-million-emails-330-domains-seized"
draft: false
---


<p>Microsoft, Europol, and a coalition of cybersecurity partners have dismantled <strong>Tycoon 2FA</strong>, one of the most prolific phishing-as-a-service (PhaaS) platforms ever documented, seizing 330 domains used for credential theft and multi-factor authentication bypass. The coordinated takedown marks the first cross-border public-private action of its kind under a U.S. court order and Europol&#8217;s Cyber Intelligence Extension Programme (CIEP).</p>



<p><a href="https://cybersecuritynews.com/tycoon-2fa-phishing-kit-dismatled/" target="_blank" rel="noopener">Source: Cybersecurity News</a></p>



<h2 class="wp-block-heading">The Scale of the Threat</h2>



<p>Active since 2023, Tycoon 2FA accounted for an staggering <strong>62% of all phishing attempts</strong> that Microsoft blocked by mid-2025. The platform&#8217;s reach was massive:</p>



<ul class="wp-block-list">
<li><strong>87.5 million phishing emails</strong> sent between October 2025 and January 2026</li>
<li><strong>500,000+ organizations</strong> targeted globally</li>
<li><strong>96,000 confirmed victims</strong>, including 55,000 Microsoft customers</li>
<li><strong>33 million messages</strong> sent in November 2025 alone—the most prolific month ever tracked</li>
</ul>



<p>The healthcare and education sectors bore the brunt of attacks. Over 100 Health-ISAC member organizations were successfully phished, causing operational disruptions including delayed patient care in New York hospitals and schools.</p>



<h2 class="wp-block-heading">How Tycoon 2FA Bypassed MFA</h2>



<p>Unlike traditional phishing that simply harvests credentials, Tycoon 2FA employed <strong>adversary-in-the-middle (AitM)</strong> techniques to defeat multi-factor authentication in real-time. The platform:</p>



<ul class="wp-block-list">
<li>Used reverse proxies to relay victim inputs directly to legitimate services like Microsoft 365 and Gmail</li>
<li>Captured session tokens and authentication codes as they were entered</li>
<li>Hijacked authenticated sessions without triggering security alerts</li>
</ul>



<p>Evasion techniques included CAPTCHA challenges, bot filtering, browser fingerprinting, Base64/LZ compression, DOM vanishing, and multi-domain redundancy for data exfiltration.</p>



<h2 class="wp-block-heading">The Takedown Operation</h2>



<p>The coordinated action brought together an unprecedented coalition of industry and law enforcement partners:</p>



<ul class="wp-block-list">
<li><strong>Microsoft</strong> led the seizure of control panels and fake login infrastructure</li>
<li><strong>Europol</strong> coordinated cross-border operations</li>
<li><strong>Partners:</strong> Proofpoint, Intel 471, eSentire, Cloudflare, SpyCloud, Resecurity, Coinbase, and Shadowserver</li>
<li>Infrastructure takedowns executed across jurisdictions including Latvia and the UK</li>
</ul>



<p>The platform was reportedly operated by Saad Fridi (Pakistan-based) with marketing and support partners, integrating with services like RedVDS for hosting and email distribution.</p>



<h2 class="wp-block-heading">The Impersonation Economy</h2>



<p>Tycoon 2FA&#8217;s takedown reflects the cascading effects in the underground cybercrime economy. Previous disruptions of Lumma Stealer, RaccoonO365, and Fake ONNX forced cybercriminals to shift to Tycoon as an alternative, concentrating traffic on the platform before its eventual demise.</p>



<p>Between November 2025 and January 2026, phishing message volume dropped by approximately <strong>57.6%</strong> from its peak, demonstrating the impact of sustained infrastructure seizures.</p>



<h2 class="wp-block-heading">Defensive Recommendations</h2>



<p>Organizations should implement phishing-resistant authentication:</p>



<ul class="wp-block-list">
<li>Deploy <strong>passkeys</strong> or <strong>FIDO2 hardware keys</strong> instead of SMS/TOTP</li>
<li>Enforce device trust and session controls</li>
<li>Monitor for proxy anomalies and unusual login patterns</li>
<li>Enable AI-driven email filtering</li>
<li>Join sector ISACs for shared threat intelligence</li>
</ul>



<p>The takedown sends a clear message: sustained disruptions raise costs for PhaaS operators, forcing tighter access controls and eventual shutdowns that reshape the cybercrime market.</p>
