---
title: "SonicWall Cloud Breach Enables Ransomware Attack on 74 US Banks and Credit Unions"
publishedAt: 2026-02-02T02:01:47
summary: "State-sponsored hackers exploited SonicWall’s MySonicWall cloud breach to launch a ransomware attack affecting 74 US banks and credit unions, compromising data of over 400,000 individuals. The attack demonstrates how third-party security breaches can cascade into devastating down"
category: "General CTI"
categories:
  - "General CTI"
tags:
  - "Black Basta Ransomware"
  - "financial sector"
  - "Marquis"
  - "Network Firewalls"
  - "SonicWall"
  - "state-sponsored hackers"
  - "supply chain attack"
heroImage: "/wp-content/uploads/2026/02/marquis-sonicwall-breach.jpg"
wpId: 1787
wpSlug: "sonicwall-cloud-breach-enables-ransomware-attack-on-74-us-banks-and-credit-unions"
originalLink: "https://bulwarkblack.com/sonicwall-cloud-breach-enables-ransomware-attack-on-74-us-banks-and-credit-unions"
draft: false
---

<p><strong>Source: <a href="https://www.bleepingcomputer.com/news/security/marquis-blames-ransomware-breach-on-sonicwall-cloud-backup-hack/" target="_blank" rel="noopener">BleepingComputer</a></strong></p>
<p>A devastating supply chain attack has exposed the interconnected vulnerabilities in enterprise security infrastructure. Marquis Software Solutions, a Texas-based financial services provider serving over 700 banks, credit unions, and mortgage lenders, has revealed that an August 2025 ransomware attack affecting 74+ U.S. financial institutions was made possible by exploiting stolen configuration data from SonicWall&#8217;s cloud backup service breach.</p>
<h2>Key Findings</h2>
<ul>
<li>Over 400,000 individuals had sensitive personal information compromised, including Social Security numbers, financial account details, and personal identifiers</li>
<li>State-sponsored hackers breached SonicWall&#8217;s MySonicWall cloud service in September 2025, initially reported as affecting 5% of customers but later confirmed to impact <strong>all</strong> cloud backup users</li>
<li>Attackers accessed firewall configuration backup files via API calls, then used this information to circumvent Marquis&#8217;s firewall defenses</li>
<li>The attack did not exploit CVE-2024-40766 as initially suspected – instead, stolen configuration data provided the roadmap to bypass security controls</li>
</ul>
<h2>Attack Timeline</h2>
<p><strong>August 14, 2025:</strong> Marquis detected ransomware attack and initiated investigation<br />
<strong>September 17, 2025:</strong> SonicWall disclosed MySonicWall cloud breach (claimed 5% affected)<br />
<strong>October 9, 2025:</strong> SonicWall confirmed all cloud backup customers were impacted<br />
<strong>November 5, 2025:</strong> Mandiant investigation attributed breach to state-sponsored hackers<br />
<strong>January 29, 2026:</strong> Marquis publicly attributed ransomware attack to SonicWall breach</p>
<h2>Why This Matters</h2>
<p>This incident demonstrates the cascading impact of supply chain compromises. Organizations may maintain strong internal security postures, yet remain vulnerable when third-party service providers are breached. The stolen firewall configurations essentially provided attackers with a complete map of Marquis&#8217;s network defenses – allowing them to identify and exploit weaknesses with surgical precision.</p>
<h2>Implications for Enterprise Security</h2>
<p>The breach highlights several critical security considerations:</p>
<ul>
<li><strong>Cloud Service Risk:</strong> Configuration files stored in cloud backup services can become attack vectors if the provider is compromised</li>
<li><strong>Vendor Assessment:</strong> Third-party security breaches can directly enable attacks against downstream customers</li>
<li><strong>Defense in Depth:</strong> Single points of failure in vendor services can compromise otherwise secure configurations</li>
<li><strong>Credential Management:</strong> SonicWall warned that extracted credentials and tokens could make it &#8220;significantly easier&#8221; to compromise customers&#8217; firewalls</li>
</ul>
<h2>Mitigation Recommendations</h2>
<p>Organizations should immediately:</p>
<ul>
<li>Reset all credentials, API keys, and authentication tokens for network security devices</li>
<li>Conduct comprehensive firewall configuration audits against known-good baselines</li>
<li>Deploy multi-factor authentication across all administrative interfaces and VPN connections</li>
<li>Reassess network segmentation strategies to limit lateral movement potential</li>
<li>Evaluate security posture of all third-party cloud services handling configuration data</li>
</ul>
<p>Marquis is evaluating legal options against SonicWall, including seeking recoupment of incident response expenses. The specific ransomware family used in the attack has not been publicly disclosed.</p>
