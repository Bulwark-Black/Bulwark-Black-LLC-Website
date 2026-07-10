---
title: "Google and Mandiant Disrupt GRIDTIDE: Chinese APT Espionage Campaign Compromises 53 Victims in 42 Countries"
publishedAt: 2026-03-06T02:03:44
summary: "Google Threat Intelligence Group (GTIG) and Mandiant have executed a coordinated takedown of one of the most expansive cyber espionage campaigns in recent memory. The operation targeted UNC2814, a suspected People’s Republic of China (PRC)-nexus threat actor that has operated glo"
category: "Chinese Cyber Threat Intelligence"
categories:
  - "Chinese Cyber Threat Intelligence"
tags: []
heroImage: "/wp-content/uploads/2026/03/gridtide-global-espionage.jpg"
wpId: 1984
wpSlug: "google-and-mandiant-disrupt-gridtide-chinese-apt-espionage-campaign-compromises-53-victims-in-42-countries"
originalLink: "https://bulwarkblack.com/google-and-mandiant-disrupt-gridtide-chinese-apt-espionage-campaign-compromises-53-victims-in-42-countries"
draft: false
---

<p>Google Threat Intelligence Group (GTIG) and Mandiant have executed a coordinated takedown of one of the most expansive cyber espionage campaigns in recent memory. The operation targeted UNC2814, a suspected People&#8217;s Republic of China (PRC)-nexus threat actor that has operated globally since 2017, compromising telecommunications and government organizations across four continents.</p>
<h2>Scale of the Compromise</h2>
<p>As of February 18, 2026, GTIG confirmed that UNC2814 had achieved persistent access to <strong>53 victims in 42 countries</strong> spanning Africa, Asia, the Americas, and Europe. The investigation revealed suspected targeting in at least 20 additional nations, underscoring the decade-long effort behind this prolific campaign.</p>
<h2>The GRIDTIDE Backdoor: Innovation Through Abuse</h2>
<p>Central to UNC2814&#8217;s operations is GRIDTIDE, a sophisticated C-based backdoor with a novel command-and-control (C2) mechanism. Rather than exploiting vulnerabilities, GRIDTIDE abuses legitimate Google Sheets API functionality to disguise its malicious traffic as benign cloud activity.</p>
<h3>Key Capabilities:</h3>
<ul>
<li><strong>Arbitrary shell command execution</strong> via Base64-encoded instructions</li>
<li><strong>File upload and download</strong> through spreadsheet cell ranges</li>
<li><strong>AES-128 CBC encryption</strong> for configuration protection</li>
<li><strong>Cell-based polling mechanism</strong> for C2 communication</li>
<li><strong>URL-safe Base64 encoding</strong> to evade detection</li>
</ul>
<p>The malware connects to attacker-controlled Google Sheets using stolen service account credentials, treating the spreadsheet not as a document but as a communication channel. Commands arrive in cell A1, responses go back via status messages, and data transfers occur across the A2:An range in 45KB fragments.</p>
<h2>Targeting Telecommunications for Surveillance</h2>
<p>GTIG&#8217;s investigation revealed that UNC2814 specifically targeted endpoints containing personally identifiable information (PII), including:</p>
<ul>
<li>Full names and phone numbers</li>
<li>Dates and places of birth</li>
<li>Voter ID and National ID numbers</li>
</ul>
<p>This targeting pattern is consistent with espionage operations designed to identify, track, and monitor persons of interest. Historical PRC-nexus intrusions against telecoms have resulted in the theft of call data records, unencrypted SMS messages, and the compromise of lawful intercept systems—enabling surveillance of dissidents, activists, and traditional espionage targets.</p>
<h2>The Disruption</h2>
<p>GTIG executed a comprehensive takedown:</p>
<ol>
<li><strong>Terminated all Google Cloud Projects</strong> controlled by the attacker</li>
<li><strong>Disabled attacker accounts</strong> and revoked Google Sheets API access</li>
<li><strong>Sinkholed domains</strong> (both current and historical)</li>
<li><strong>Issued victim notifications</strong> and active support for compromised organizations</li>
<li><strong>Released IOCs</strong> dating back to 2023 to help defenders</li>
</ol>
<h2>Indicators of Compromise</h2>
<p>Key artifacts include:</p>
<ul>
<li>GRIDTIDE binary: <code>ce36a5fc44cbd7de947130b67be9e732a7b4086fb1df98a5afd724087c973b47</code></li>
<li>Configuration key file: <code>01fc3bd5a78cd59255a867ffb3dfdd6e0b7713ee90098ea96cc01c640c6495eb</code></li>
<li>C2 server: <code>130.94.6[.]228</code></li>
<li>SoftEther VPN servers: Multiple IPs including <code>38.60.194[.]21</code>, <code>207.148.73[.]18</code></li>
</ul>
<p>A comprehensive IOC collection is available via <a href="https://www.virustotal.com/gui/collection/d0acdcacc1fec8a9673d037ecc413c215d238f6fbf53247add30c8a58f275e3d/summary" target="_blank" rel="noopener">Google Threat Intelligence (GTI)</a>.</p>
<h2>Key Takeaways</h2>
<p>This disruption highlights several critical trends:</p>
<ul>
<li><strong>Cloud services as C2:</strong> Legitimate SaaS APIs provide excellent cover for malicious traffic</li>
<li><strong>Long-term persistence:</strong> UNC2814 operated for nearly a decade before detection</li>
<li><strong>Global reach:</strong> Prolific actors can achieve simultaneous access to dozens of countries</li>
<li><strong>Telecom targeting:</strong> Carriers remain prime targets for state-sponsored surveillance</li>
</ul>
<p>GTIG emphasizes that UNC2814 has no observed overlaps with activity publicly reported as &#8220;Salt Typhoon&#8221; and uses distinct TTPs. The group will likely attempt to rebuild its global footprint.</p>
<p><strong>Source:</strong> <a href="https://cloud.google.com/blog/topics/threat-intelligence/disrupting-gridtide-global-espionage-campaign" target="_blank" rel="noopener">Google Cloud Blog &#8211; Disrupting the GRIDTIDE Global Cyber Espionage Campaign</a></p>
