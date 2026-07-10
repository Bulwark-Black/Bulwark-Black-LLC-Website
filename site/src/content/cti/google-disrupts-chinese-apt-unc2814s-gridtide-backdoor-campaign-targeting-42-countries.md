---
title: "Google Disrupts Chinese APT UNC2814’s GRIDTIDE Backdoor Campaign Targeting 42 Countries"
publishedAt: 2026-03-06T21:04:07
summary: "Google Threat Intelligence Group (GTIG) has disrupted a massive global cyber espionage campaign targeting telecommunications and government organizations across 42 countries. The threat actor, tracked as UNC2814, is a suspected People’s Republic of China (PRC)-nexus cyber espiona"
category: "Chinese Cyber Threat Intelligence"
categories:
  - "Chinese Cyber Threat Intelligence"
tags: []
heroImage: "/wp-content/uploads/2026/03/gridtide-surveillance.jpg"
wpId: 1988
wpSlug: "google-disrupts-chinese-apt-unc2814s-gridtide-backdoor-campaign-targeting-42-countries"
originalLink: "https://bulwarkblack.com/google-disrupts-chinese-apt-unc2814s-gridtide-backdoor-campaign-targeting-42-countries"
draft: false
---

<p><strong>Google Threat Intelligence Group (GTIG) has disrupted a massive global cyber espionage campaign targeting telecommunications and government organizations across 42 countries.</strong></p>
<p>The threat actor, tracked as UNC2814, is a suspected People&#8217;s Republic of China (PRC)-nexus cyber espionage group that GTIG has monitored since 2017. The attacker deployed a novel backdoor called GRIDTIDE that abuses Google Sheets as a command-and-control (C2) platform, hiding malicious traffic within legitimate cloud API requests.</p>
<h2>Key Findings</h2>
<ul>
<li><strong>42+ countries impacted</strong> across four continents (Africa, Asia, Americas, Europe)</li>
<li><strong>53 confirmed victims</strong> with suspected infections in at least 20 additional countries</li>
<li>Primary targets: <strong>telecommunications providers and government entities</strong></li>
<li>Campaign active since at least 2017</li>
</ul>
<h2>GRIDTIDE Backdoor Capabilities</h2>
<p>GRIDTIDE is a sophisticated C-based backdoor capable of:</p>
<ul>
<li>Executing arbitrary shell commands</li>
<li>Uploading and downloading files</li>
<li>Using Google Sheets as a high-availability C2 platform</li>
<li>AES-128 encrypted communications</li>
<li>Host fingerprinting and reconnaissance</li>
</ul>
<p>The malware treats Google Sheets not as a document, but as a communication channel to facilitate raw data transfer and shell command execution—effectively evading standard network detection.</p>
<h2>Disruption Actions</h2>
<p>GTIG&#8217;s coordinated response included:</p>
<ul>
<li>Terminating all Google Cloud Projects controlled by UNC2814</li>
<li>Identifying and disabling all known attacker infrastructure</li>
<li>Disabling attacker accounts and revoking API access</li>
<li>Releasing IOCs linked to UNC2814 infrastructure active since 2023</li>
</ul>
<h2>Target Data Exfiltration</h2>
<p>Mandiant&#8217;s investigation revealed UNC2814 targeted endpoints containing sensitive personally identifiable information (PII), including:</p>
<ul>
<li>Full names and phone numbers</li>
<li>Dates and places of birth</li>
<li>Voter ID and National ID numbers</li>
</ul>
<p>While GTIG did not directly observe data exfiltration during this campaign, historical PRC-nexus intrusions against telecoms have resulted in theft of call data records, unencrypted SMS messages, and compromise of lawful intercept systems—enabling surveillance of dissidents, activists, and traditional espionage targets.</p>
<h2>Indicators of Compromise</h2>
<p>Organizations should monitor for:</p>
<ul>
<li>Suspicious processes executing from <code>/var/tmp/</code> directories</li>
<li>Service creation at <code>/etc/systemd/system/xapt.service</code></li>
<li>SoftEther VPN Bridge deployments</li>
<li>Unusual Google Sheets API activity</li>
</ul>
<p><strong>Note:</strong> UNC2814 has no observed overlaps with Salt Typhoon and uses distinct tactics, techniques, and procedures (TTPs).</p>
<p>Source: <a href="https://cloud.google.com/blog/topics/threat-intelligence/disrupting-gridtide-global-espionage-campaign" target="_blank" rel="noopener">Google Cloud Blog &#8211; GTIG</a></p>
