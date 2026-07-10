---
title: "Seedworm APT Targets US Banks and Airports with New Dindoor and Fakeset Backdoors"
publishedAt: 2026-03-09T15:03:33
summary: "Iranian state-sponsored hackers have maintained persistent access inside multiple US critical infrastructure networks since early February 2026, establishing footholds that security researchers warn could enable devastating attacks amid escalating geopolitical tensions in the Mid"
category: "Iranian Cyber Threat Intelligence"
categories:
  - "Iranian Cyber Threat Intelligence"
tags:
  - "Dindoor"
  - "Fakeset"
  - "Iranian APT"
  - "MuddyWater"
  - "Seedworm"
  - "US critical infrastructure"
heroImage: "/wp-content/uploads/2026/03/seedworm-muddywater-us-critical-infrastructure.jpg"
wpId: 2022
wpSlug: "seedworm-apt-targets-us-banks-and-airports-with-new-dindoor-and-fakeset-backdoors"
originalLink: "https://bulwarkblack.com/seedworm-apt-targets-us-banks-and-airports-with-new-dindoor-and-fakeset-backdoors"
draft: false
---

<p>Iranian state-sponsored hackers have maintained persistent access inside multiple US critical infrastructure networks since early February 2026, establishing footholds that security researchers warn could enable devastating attacks amid escalating geopolitical tensions in the Middle East.</p>
<h2>MuddyWater Returns with New Malware Arsenal</h2>
<p>Symantec and Carbon Black researchers have attributed the activity to <strong>Seedworm</strong> (also known as MuddyWater), an Iranian advanced persistent threat (APT) group linked to Iran&#8217;s Ministry of Intelligence and Security (MOIS). The group has a long history of espionage campaigns targeting government agencies, telecommunications companies, and critical infrastructure worldwide.</p>
<p>The ongoing campaign has compromised networks belonging to:</p>
<ul>
<li>A US bank</li>
<li>A US airport</li>
<li>Non-profit organizations</li>
<li>Israeli operations of a US defense and aerospace software company</li>
</ul>
<p>The attackers have deployed two previously unknown malware families:</p>
<h3>Dindoor Backdoor</h3>
<p>Named for its use of <strong>Deno</strong>, a modern JavaScript and TypeScript runtime environment, Dindoor represents a shift in Seedworm&#8217;s tooling toward cross-platform capable frameworks. The backdoor was digitally signed with a certificate issued to an individual named &#8220;Amy Cherne.&#8221;</p>
<h3>Fakeset Python Backdoor</h3>
<p>This Python-based backdoor uses certificates attributed to both &#8220;Amy Cherne&#8221; and &#8220;Donald Gay&#8221; — the latter having been previously associated with Seedworm&#8217;s Stagecomp and Darkcomp malware. This signature overlap provides strong attribution links to the Iranian APT.</p>
<h2>Espionage-Focused Operations</h2>
<p>The campaign appears focused on intelligence collection rather than disruption. Researchers observed attackers attempting to exfiltrate data from the targeted software company to a Wasabi cloud storage bucket using <strong>Rclone</strong>, the popular open-source cloud synchronization tool often abused by threat actors for data theft.</p>
<blockquote><p>&#8220;While it&#8217;s not known if the operations of Seedworm are disrupted by the current conflict, already having a presence on US and Israeli networks prior to the current hostilities beginning means the threat group is in a potentially dangerous position to launch attacks,&#8221; the researchers noted.</p></blockquote>
<h2>Exposed Infrastructure Reveals Broader Campaign</h2>
<p>In a related development, independent threat-intel research collective <strong>Ctrl-Alt-Intel</strong> claimed to have accessed Seedworm&#8217;s command-and-control infrastructure hosted in the Netherlands, recovering C2 tooling, scripts, logs, and victim data.</p>
<p>Their analysis revealed additional targets including:</p>
<ul>
<li>Israeli healthcare, hosting, immigration, and intelligence organizations</li>
<li>EgyptAir</li>
<li>Jordanian government entities</li>
<li>Various UAE companies</li>
<li>Additional US entities</li>
<li>Jewish and Israeli-linked NGOs</li>
</ul>
<p>The exposed infrastructure demonstrated sophisticated operational tradecraft: &#8220;Multiple custom-developed C2 frameworks, exploitation of over a dozen CVEs including novel SQL injection vulnerabilities, password spraying campaigns, Ethereum-based C2 resolution, and multiple exfiltration channels spanning cloud storage &amp; EC2 instances.&#8221;</p>
<h2>Why This Matters</h2>
<p>With the conflict between Israel and Iran intensifying, Seedworm&#8217;s pre-positioned access in US critical infrastructure represents a significant national security concern. The group&#8217;s presence in banking and aviation networks — both sectors that could cause widespread disruption if attacked — demonstrates Iran&#8217;s strategic cyber preparation for potential escalation.</p>
<p>Organizations in critical infrastructure sectors should immediately:</p>
<ul>
<li>Hunt for indicators of compromise associated with Dindoor and Fakeset</li>
<li>Monitor for unauthorized use of Rclone or similar exfiltration tools</li>
<li>Review certificate trust chains for suspicious signers</li>
<li>Implement enhanced monitoring for Deno runtime execution</li>
</ul>
<p><strong>Source:</strong> <a href="https://www.helpnetsecurity.com/2026/03/06/seedworm-muddywater-backdoors-victims/" target="_blank" rel="noopener">Help Net Security</a></p>
