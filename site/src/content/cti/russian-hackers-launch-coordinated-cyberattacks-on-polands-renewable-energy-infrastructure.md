---
title: "Russian Hackers Launch Coordinated Cyberattacks on Poland’s Renewable Energy Infrastructure"
publishedAt: 2026-02-01T16:02:50
summary: "Russian state-sponsored threat actors launched coordinated cyberattacks against Poland’s energy sector on December 29, 2025, targeting over 30 wind and solar farms, a manufacturing company, and a major combined heat and power (CHP) plant that serves nearly 500,000 people, accordi"
category: "Russian Cyber Threat Intelligence"
categories:
  - "Russian Cyber Threat Intelligence"
tags:
  - "Critical Infrastructure"
heroImage: "/wp-content/uploads/2026/02/poland-energy-cyberattack.png"
wpId: 1782
wpSlug: "russian-hackers-launch-coordinated-cyberattacks-on-polands-renewable-energy-infrastructure"
originalLink: "https://bulwarkblack.com/russian-hackers-launch-coordinated-cyberattacks-on-polands-renewable-energy-infrastructure"
draft: false
---

<p>Russian state-sponsored threat actors launched coordinated cyberattacks against Poland&#8217;s energy sector on December 29, 2025, targeting over 30 wind and solar farms, a manufacturing company, and a major combined heat and power (CHP) plant that serves nearly 500,000 people, according to CERT Polska.</p>
<p>The attacks aimed to cause sabotage during a period of severe winter weather. While attackers successfully disrupted communications and remote monitoring capabilities, electricity generation and heat supply were not interrupted—demonstrating both the resilience of well-designed industrial systems and the potentially catastrophic intent behind these operations.</p>
<h2>Attribution: Static Tundra with Possible Sandworm Links</h2>
<p>CERT Polska attributed the attacks to a threat cluster called <strong>Static Tundra</strong>, linked to Russia&#8217;s FSB Center 16 and also tracked as Berserk Bear (CrowdStrike), Ghost Blizzard (Microsoft), and Dragonfly (Symantec). However, recent reports from ESET and Dragos suggest that Sandworm, another Russian state-sponsored group, may be responsible with moderate confidence.</p>
<p>CERT Polska noted this marks the <strong>first publicly described destructive activity</strong> attributed to the Static Tundra cluster, despite their long-documented interest in the energy sector.</p>
<h2>Attack Methodology: IT and OT Convergence</h2>
<p>Attackers infiltrated renewable energy substations through <strong>exposed FortiGate devices</strong> used for VPN and firewall functions—often without multi-factor authentication enabled. Known vulnerabilities and reused credentials helped attackers move laterally between facilities.</p>
<p>After gaining access, they executed a sophisticated multi-stage attack:</p>
<ul>
<li><strong>Reconnaissance and mapping</strong> of industrial control systems</li>
<li><strong>Firmware tampering</strong> on Hitachi RTUs</li>
<li><strong>Wiper deployment</strong> on Mikronika controllers</li>
<li><strong>Protection relay disabling</strong></li>
<li><strong>HMI computer compromise</strong> using DynoWiper malware</li>
<li><strong>Moxa serial device sabotage</strong></li>
</ul>
<h2>Novel Wiper Malware: DynoWiper and LazyWiper</h2>
<p>The attackers deployed two previously unknown wiper tools designed purely for destruction with no ransom demand:</p>
<p><strong>DynoWiper</strong>: A Windows wiper that corrupts and deletes files by overwriting them with random data. Notably, it has no command-and-control capability, no persistence mechanism, and makes no effort to hide—indicating a one-shot sabotage design.</p>
<p><strong>LazyWiper</strong>: A PowerShell script targeting multiple file types. Analysts believe portions may have been generated using AI tools based on code characteristics.</p>
<p>Both malware variants spread through Active Directory using malicious Group Policy tasks, enabling simultaneous execution across compromised networks.</p>
<h2>Why This Matters</h2>
<p>This incident represents a significant escalation in Russia&#8217;s cyber operations against NATO-allied critical infrastructure:</p>
<ul>
<li>Direct targeting of renewable energy during winter—maximizing potential humanitarian impact</li>
<li>Simultaneous IT and OT compromise—crossing the traditional enterprise/industrial boundary</li>
<li>First confirmed destructive operation from Static Tundra cluster</li>
<li>Demonstrates Russian capability to coordinate multi-target energy sector attacks</li>
</ul>
<p>For organizations operating critical infrastructure, this attack highlights the urgent need for OT network segmentation, multi-factor authentication on all remote access points, and enhanced monitoring of industrial control systems—particularly during geopolitically sensitive periods.</p>
<p><strong>Source:</strong> <a href="https://securityaffairs.com/187503/apt/cyberattacks-disrupt-communications-at-wind-solar-and-heat-facilities-in-poland.html" target="_blank" rel="noopener">Security Affairs</a></p>
