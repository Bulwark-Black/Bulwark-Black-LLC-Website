---
title: "Diesel Vortex: Russian Cybercrime Group Steals 1,600+ Credentials From Global Logistics Sector"
publishedAt: 2026-02-26T02:04:05
summary: "A Russian-linked cybercrime group dubbed Diesel Vortex has been systematically targeting the global freight and logistics industry, stealing over 1,600 unique login credentials from users of major logistics platforms in a sophisticated phishing campaign that ran from September 20"
category: "Russian Cyber Threat Intelligence"
categories:
  - "Russian Cyber Threat Intelligence"
tags: []
heroImage: "/wp-content/uploads/2026/02/diesel-vortex-logistics.jpg"
wpId: 1938
wpSlug: "diesel-vortex-russian-cybercrime-group-steals-1600-credentials-from-global-logistics-sector"
originalLink: "https://bulwarkblack.com/diesel-vortex-russian-cybercrime-group-steals-1600-credentials-from-global-logistics-sector"
draft: false
---


<p>A Russian-linked cybercrime group dubbed <strong>Diesel Vortex</strong> has been systematically targeting the global freight and logistics industry, stealing over 1,600 unique login credentials from users of major logistics platforms in a sophisticated phishing campaign that ran from September 2025 through February 2026.</p>



<h2 class="wp-block-heading">Campaign Overview</h2>



<p>Security researchers at Have I Been Squatted, in collaboration with Ctrl-Alt-Intel, uncovered the operation after discovering an exposed .git directory that revealed the group&#8217;s entire infrastructure, codebase, and victim database. The investigation exposed a structured, financially-driven criminal enterprise with Armenian-language coordination among operators.</p>



<p><strong>Key findings from the investigation:</strong></p>



<ul class="wp-block-list">
<li><strong>3,474 credential pairs stolen</strong> (1,649 unique)</li>
<li><strong>52 phishing domains deployed</strong></li>
<li><strong>75,840 target contact emails</strong> (57,092 unique)</li>
<li><strong>35 check fraud attempts</strong> targeting EFS</li>
<li><strong>9,016 unique visitor IPs</strong> tracked</li>
</ul>



<h2 class="wp-block-heading">Targeted Platforms</h2>



<p>The group built dedicated phishing infrastructure impersonating platforms used daily by freight brokers, trucking companies, and supply chain operators:</p>



<ul class="wp-block-list">
<li><strong>DAT Truckstop</strong> – America&#8217;s largest freight marketplace</li>
<li><strong>Penske Logistics</strong> – Fleet management systems</li>
<li><strong>Electronic Funds Source (EFS)</strong> – Fuel card and payment networks</li>
<li><strong>Timocom</strong> – European freight exchange</li>
<li><strong>Teleroute</strong> – European load board</li>
<li><strong>Central Dispatch</strong> – Auto transport marketplace</li>
<li><strong>Girteka</strong> – Cross-border transport logistics</li>
</ul>



<h2 class="wp-block-heading">Phishing-as-a-Service Operation</h2>



<p>Analysis of the recovered codebase revealed Diesel Vortex operates a Phishing-as-a-Service (PhaaS) platform internally branded as <strong>&#8220;GlobalProfit&#8221;</strong> and marketed to other operators as <strong>&#8220;MC Profit Always&#8221;</strong> – with &#8220;MC&#8221; likely referring to Motor Carrier operating authority identifiers.</p>



<p>A recovered mind map outlined the group&#8217;s entire operational structure, including:</p>



<ul class="wp-block-list">
<li>Distinct functional roles: call center, mail support, programmer, and acquisition staff</li>
<li>Infiltration of logistics and trucking Telegram communities</li>
<li>Reseller and outsourcing arrangements</li>
<li>Financial tracking across revenue categories</li>
<li>Voice phishing (vishing) techniques targeting drivers</li>
</ul>



<h2 class="wp-block-heading">Sophisticated Nine-Stage Cloaking System</h2>



<p>The phishing infrastructure employed a sophisticated nine-stage funnel before rendering any phishing page, designed to evade security researchers and automated detection:</p>



<ol class="wp-block-list">
<li><strong>Global kill switch</strong> – Database-controlled master toggle</li>
<li><strong>Scheduling gates</strong> – Time-based access restrictions</li>
<li><strong>IP blocklist</strong> – 254 entries covering security vendors and cloud providers</li>
<li><strong>ISP filtering</strong> – ipinfo.io lookups blocking 49 ASN patterns</li>
<li><strong>User-agent filtering</strong> – Blocking crawlers and automation tools</li>
<li><strong>URL parameter gates</strong> – Requiring specific GET parameters</li>
<li><strong>Custom path validation</strong> – Exact URL path matching</li>
<li><strong>Ban list checks</strong> – Additional blocklist verification</li>
<li><strong>Final render decision</strong> – Configurable error codes for blocked requests</li>
</ol>



<h2 class="wp-block-heading">Criminal Motivations</h2>



<p>With intercepted credentials, the group was able to:</p>



<ul class="wp-block-list">
<li><strong>Invoice redirection</strong> – Diverting payments to attacker-controlled accounts</li>
<li><strong>Double-brokering</strong> – Intercepting and re-brokering legitimate loads</li>
<li><strong>Check fraud</strong> – Direct financial theft via EFS</li>
<li><strong>PII theft</strong> – Harvesting personal information for further attacks</li>
<li><strong>Account takeover</strong> – Full control of victim logistics accounts</li>
</ul>



<h2 class="wp-block-heading">Coordinated Takedown</h2>



<p>A coordinated takedown effort involved Google Threat Intelligence Group, Cloudflare, GitLab, IPInfo, and Ping Identity. Microsoft Threat Intelligence Center and CrowdStrike provided additional assistance with victim notification efforts.</p>



<h2 class="wp-block-heading">Implications for the Logistics Sector</h2>



<p>This campaign highlights the logistics sector&#8217;s vulnerability to targeted phishing attacks. Unlike traditional enterprise targets, trucking companies and independent operators often lack sophisticated security programs, making them attractive targets for credential theft operations.</p>



<p>Organizations in the freight and logistics industry should:</p>



<ul class="wp-block-list">
<li>Implement <strong>FIDO2 hardware security keys</strong> for MFA</li>
<li>Deploy <strong>DNS filtering</strong> to block known phishing domains</li>
<li>Train staff to recognize <strong>voice phishing attempts</strong></li>
<li>Monitor for <strong>unauthorized account access</strong></li>
<li>Use <strong>verified payment channels</strong> resistant to redirection</li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity" />



<p><em>Source: <a href="https://haveibeensquatted.com/blog/diesel-vortex-inside-the-russian-cybercrime-group-targeting-us-eu-freight" target="_blank" rel="noopener">Have I Been Squatted</a></em></p>
