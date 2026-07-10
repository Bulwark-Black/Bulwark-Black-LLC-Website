---
title: "Operation Lightning: Global Takedown of SocksEscort Botnet That Enslaved 369,000 Routers in 163 Countries"
publishedAt: 2026-03-15T20:02:26
summary: "A coordinated international law enforcement operation has dismantled SocksEscort, a criminal proxy service that infected hundreds of thousands of residential routers worldwide to enable large-scale fraud, ransomware distribution, and other cybercrimes. The Scope of the Threat Acc"
category: "General CTI"
categories:
  - "General CTI"
tags: []
heroImage: "/wp-content/uploads/2026/03/socksescort-botnet-routers.jpg"
wpId: 2061
wpSlug: "operation-lightning-global-takedown-of-socksescort-botnet-that-enslaved-369000-routers-in-163-countries"
originalLink: "https://bulwarkblack.com/operation-lightning-global-takedown-of-socksescort-botnet-that-enslaved-369000-routers-in-163-countries"
draft: false
---

<p>A coordinated international law enforcement operation has dismantled <strong>SocksEscort</strong>, a criminal proxy service that infected hundreds of thousands of residential routers worldwide to enable large-scale fraud, ransomware distribution, and other cybercrimes.</p>
<h2>The Scope of the Threat</h2>
<p>According to the U.S. Department of Justice, SocksEscort offered access to approximately <strong>369,000 different IP addresses across 163 countries</strong> since summer 2020. As of February 2026, the service listed nearly 8,000 actively infected routers, with 2,500 located in the United States alone.</p>
<p>The proxy service marketed itself as offering &#8220;static residential IPs with unlimited bandwidth&#8221; that could bypass spam blocklists. Pricing ranged from $15/month for 30 proxies to $200/month for 5,000 proxies—making sophisticated anonymization accessible to cybercriminals at scale.</p>
<h2>How Victims Were Defrauded</h2>
<p>The criminal infrastructure enabled devastating financial losses:</p>
<ul>
<li><strong>$1 million</strong> in cryptocurrency stolen from a New York resident</li>
<li><strong>$700,000</strong> defrauded from a Pennsylvania manufacturing business</li>
<li><strong>$100,000</strong> stolen from U.S. service members with MILITARY STAR cards</li>
</ul>
<h2>Operation Lightning: The Takedown</h2>
<p>Codenamed <strong>Operation Lightning</strong>, the effort involved law enforcement from Austria, Bulgaria, France, Germany, Hungary, the Netherlands, Romania, and the United States. Key results include:</p>
<ul>
<li><strong>34 domains</strong> and <strong>23 servers</strong> seized across seven countries</li>
<li><strong>$3.5 million</strong> in cryptocurrency frozen</li>
<li>Criminal infrastructure dismantled</li>
</ul>
<p>Europol revealed that compromised devices were exploited for ransomware attacks, DDoS campaigns, and the distribution of child sexual abuse material (CSAM). The devices were primarily infected through a vulnerability in residential modems of a specific brand.</p>
<h2>The AVrecon Malware</h2>
<p>SocksEscort was powered by <strong>AVrecon</strong>, a sophisticated malware first documented by Lumen Black Lotus Labs in July 2023 but active since at least May 2021. Key technical details from the FBI alert:</p>
<ul>
<li>Written in C language, primarily targeting MIPS and ARM devices</li>
<li>Targets approximately 1,200 device models from <strong>Cisco, D-Link, Hikvision, Mikrotik, NETGEAR, TP-Link, and Zyxel</strong></li>
<li>Exploits critical vulnerabilities including Remote Code Execution (RCE) and command injection</li>
<li>Uses device&#8217;s built-in update mechanism to flash custom firmware containing AVrecon</li>
<li>Disables device update and flashing features, causing permanent infection</li>
</ul>
<p>Beyond proxy functionality, AVrecon can establish remote shells and act as a loader for arbitrary payloads.</p>
<h2>Why This Matters</h2>
<p>Residential proxy botnets represent a growing threat because they allow attackers to:</p>
<ul>
<li><strong>Blend malicious traffic with legitimate activity</strong> by routing through home IP addresses</li>
<li><strong>Bypass geographic restrictions</strong> and blocklists designed to stop attacks</li>
<li><strong>Evade attribution</strong> by hiding behind victims&#8217; networks</li>
</ul>
<p>&#8220;Over the past several years, SocksEscort maintained an average size of approximately 20,000 distinct victims weekly, with communications routed through an average of 15 command-and-control nodes,&#8221; Black Lotus Labs noted.</p>
<h2>Protecting Your Network</h2>
<p>Organizations and home users with SOHO routers should:</p>
<ol>
<li>Check if your router model is among those targeted (Cisco, D-Link, Hikvision, Mikrotik, NETGEAR, TP-Link, Zyxel)</li>
<li>Verify firmware is updated to the latest version</li>
<li>If update fails or router behaves unusually, consider factory reset or replacement</li>
<li>Change default credentials and disable remote management if not needed</li>
<li>Monitor network traffic for unusual outbound connections</li>
</ol>
<p><a href="https://thehackernews.com/2026/03/authorities-disrupt-socksescort-proxy.html" target="_blank" rel="noopener">Source: The Hacker News</a></p>
