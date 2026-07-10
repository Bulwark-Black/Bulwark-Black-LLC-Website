---
title: "APT37 Deploys Ruby Jumper Campaign to Breach Air-Gapped Networks"
publishedAt: 2026-02-26T21:01:38
summary: "North Korean threat actor APT37 (Reaper) has expanded its arsenal with sophisticated new malware designed to compromise air-gapped networks — systems physically isolated from the internet that organizations use to protect their most sensitive data. Researchers at Zscaler ThreatLa"
category: "North Korean Cyber Threat Intelligence"
categories:
  - "North Korean Cyber Threat Intelligence"
tags:
  - "C2 Framework"
  - "Simulation"
heroImage: "/wp-content/uploads/2026/02/apt37-air-gap-attack.jpg"
wpId: 1942
wpSlug: "apt37-deploys-ruby-jumper-campaign-to-breach-air-gapped-networks"
originalLink: "https://bulwarkblack.com/apt37-deploys-ruby-jumper-campaign-to-breach-air-gapped-networks"
draft: false
---

<p>North Korean threat actor <strong>APT37 (Reaper)</strong> has expanded its arsenal with sophisticated new malware designed to compromise <strong>air-gapped networks</strong> — systems physically isolated from the internet that organizations use to protect their most sensitive data.</p>
<p>Researchers at <a href="https://www.zscaler.com/blogs/security-research/apt37-adds-new-capabilities-air-gapped-networks" target="_blank" rel="noopener">Zscaler ThreatLabz</a> have uncovered the <strong>&#8220;Ruby Jumper&#8221; campaign</strong>, which employs a complex infection chain featuring multiple novel malware families working in tandem to bridge air-gap defenses using removable media.</p>
<h2>Key Findings</h2>
<ul>
<li><strong>RESTLEAF</strong> — A new backdoor that abuses <strong>Zoho WorkDrive</strong> cloud storage for command-and-control communications. This marks the first observed use of Zoho WorkDrive by APT37.</li>
<li><strong>SNAKEDROPPER</strong> — Deploys a complete Ruby 3.3.0 runtime environment disguised as a USB utility (&#8220;usbspeed.exe&#8221;), which then loads malicious scripts.</li>
<li><strong>THUMBSBD</strong> — Transforms removable media into bidirectional covert C2 relays, enabling operators to deliver commands and exfiltrate data from air-gapped systems via USB drives.</li>
<li><strong>VIRUSTASK</strong> — A propagation module that weaponizes removable media to spread to other air-gapped systems.</li>
</ul>
<h2>Attack Chain</h2>
<p>The attack begins with a malicious LNK file that displays a decoy document (an Arabic-language article about the Palestine-Israel conflict, translated from a North Korean newspaper). The LNK extracts multiple payloads that work together to establish persistence and deploy the air-gap crossing tools.</p>
<p>A scheduled task runs the disguised Ruby interpreter every 5 minutes, which loads malicious scripts that monitor for connected USB drives. When removable media is attached, the malware:</p>
<ol>
<li>Creates a hidden <code>$RECYCLE.BIN</code> directory on the drive</li>
<li>Copies command files and collects reconnaissance data</li>
<li>Stages exfiltration packages for transfer back to attacker infrastructure</li>
</ol>
<h2>Why This Matters</h2>
<p>Air-gapped networks are typically reserved for the most critical systems — classified government networks, industrial control systems, research facilities, and financial infrastructure. APT37&#8217;s investment in developing dedicated tools for this purpose signals their intent to target high-value, well-defended environments.</p>
<p>The use of <strong>legitimate cloud services (Zoho WorkDrive)</strong> for C2 makes detection more difficult, as this traffic blends with normal business operations. Organizations should implement strict USB device policies and monitor for unusual Ruby runtime installations or scheduled tasks.</p>
<h2>Indicators of Compromise</h2>
<p>The following C2 domains were identified:</p>
<ul>
<li><code>philion[.]store</code></li>
<li><code>homeatedke[.]store</code></li>
<li><code>hightkdhe[.]store</code></li>
</ul>
<p>ThreatLabz notes that <code>hightkdhe[.]store</code> was still operational during their investigation.</p>
<p><strong>Source:</strong> <a href="https://www.zscaler.com/blogs/security-research/apt37-adds-new-capabilities-air-gapped-networks" target="_blank" rel="noopener">Zscaler ThreatLabz &#8211; APT37 Adds New Tools For Air-Gapped Networks</a></p>
