---
title: "Iranian MOIS Cyber Actors Embrace Criminal Ecosystem: From Rhadamanthys to Ransomware Affiliates"
publishedAt: 2026-03-11T01:03:08
summary: "A new Check Point Research report reveals that Iranian Ministry of Intelligence and Security (MOIS)-linked threat actors are increasingly engaging with the cybercrime ecosystem, moving beyond mere imitation to directly leveraging criminal tools, services, and affiliate-style rela"
category: "Iranian Cyber Threat Intelligence"
categories:
  - "Iranian Cyber Threat Intelligence"
tags: []
heroImage: "/wp-content/uploads/2026/03/iranian-mois-cybercrime-2026.jpg"
wpId: 2035
wpSlug: "iranian-mois-cyber-actors-embrace-criminal-ecosystem-from-rhadamanthys-to-ransomware-affiliates"
originalLink: "https://bulwarkblack.com/iranian-mois-cyber-actors-embrace-criminal-ecosystem-from-rhadamanthys-to-ransomware-affiliates"
draft: false
---

<p>A new <a href="https://research.checkpoint.com/2026/iranian-mois-actors-the-cyber-crime-connection/" target="_blank" rel="noopener">Check Point Research report</a> reveals that Iranian Ministry of Intelligence and Security (MOIS)-linked threat actors are increasingly engaging with the cybercrime ecosystem, moving beyond mere imitation to directly leveraging criminal tools, services, and affiliate-style relationships in support of state objectives.</p>
<h2>Key Findings</h2>
<p>The research highlights a significant evolution in Iranian cyber operations, where state-sponsored actors are now actively participating in criminal ecosystems rather than simply mimicking their tactics. This shift provides dual advantages: enhanced operational capabilities through mature criminal tooling, and complicated attribution that fuels confusion around Iranian threat activity.</p>
<h2>Void Manticore (Handala) Deploys Rhadamanthys Infostealer</h2>
<p><strong>Void Manticore</strong>, operating under the &#8220;Handala Hack&#8221; persona, has been caught using <strong>Rhadamanthys</strong>, a commercial infostealer sold on darknet forums. This marks a departure from custom malware to off-the-shelf criminal tools. The group deployed Rhadamanthys alongside custom wipers in phishing campaigns targeting Israeli organizations, often impersonating F5 security updates.</p>
<h2>MuddyWater&#8217;s Criminal Connections</h2>
<p>CISA-attributed <strong>MuddyWater</strong>, a subordinate MOIS element, shows extensive overlap with criminal malware clusters:</p>
<ul>
<li><strong>Tsundere Botnet (DinDoor)</strong>: A Node.js/Deno-based botnet linked to MuddyWater operations through shared infrastructure</li>
<li><strong>CastleLoader Connection</strong>: Shared code-signing certificates (&#8220;Amy Cherne&#8221; and &#8220;Donald Gay&#8221;) between MuddyWater&#8217;s StageComp malware, Tsundere variants, and CastleLoader, a Malware-as-a-Service offering</li>
</ul>
<p>Check Point notes this overlap has created significant confusion in threat attribution, with researchers incorrectly clustering unrelated activities together.</p>
<h2>Iranian Actors as Qilin Ransomware Affiliates</h2>
<p>Perhaps most significantly, the report details evidence that Iranian-affiliated operators participated as <strong>Qilin ransomware affiliates</strong> in the October 2025 attack on Israel&#8217;s Shamir Medical Center. While initially presented as a standard ransomware incident, Israeli assessments later identified Iranian actors as the real force behind the attack. This suggests MOIS actors are leveraging ransomware-as-a-service (RaaS) programs for both plausible deniability and operational capability—part of a broader campaign targeting Israeli hospitals since late 2023.</p>
<h2>Why This Matters</h2>
<p>This convergence of state-sponsored and criminal operations represents a dangerous evolution in Iranian cyber capabilities:</p>
<ul>
<li><strong>Enhanced Deniability</strong>: Criminal tools and RaaS affiliations provide layers of cover for state-directed operations</li>
<li><strong>Expanded Capabilities</strong>: Access to mature criminal tooling, resilient infrastructure, and affiliate networks</li>
<li><strong>Attribution Challenges</strong>: Overlapping indicators of compromise complicate incident response and threat intelligence</li>
<li><strong>Hospital Targeting</strong>: The use of ransomware affiliates against healthcare infrastructure suggests willingness to leverage criminal ecosystems for strategic objectives</li>
</ul>
<h2>Indicators of Compromise</h2>
<p>Check Point released IOCs including Rhadamanthys variants and multiple CastleLoader/FakeSet samples signed with suspicious certificates. Security teams should hunt for these indicators and monitor for the &#8220;Amy Cherne&#8221; and &#8220;Donald Gay&#8221; certificate common names in their environments.</p>
<p><strong>Source:</strong> <a href="https://research.checkpoint.com/2026/iranian-mois-actors-the-cyber-crime-connection/" target="_blank" rel="noopener">Check Point Research</a></p>
