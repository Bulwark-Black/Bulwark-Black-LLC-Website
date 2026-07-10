---
title: "Seedworm APT Deploys Dindoor and Fakeset Backdoors Inside US Critical Infrastructure Networks"
publishedAt: 2026-03-10T15:04:00
summary: "Iran’s Seedworm APT group (also known as MuddyWater) has established persistent access inside the networks of multiple US organizations since early February 2026, deploying two previously unknown malware implants as geopolitical tensions between the US and Iran escalate. New Back"
category: "Iranian Cyber Threat Intelligence"
categories:
  - "Iranian Cyber Threat Intelligence"
tags: []
heroImage: "/wp-content/uploads/2026/03/seedworm-muddywater-critical-infrastructure-2026.jpg"
wpId: 2031
wpSlug: "seedworm-apt-deploys-dindoor-and-fakeset-backdoors-inside-us-critical-infrastructure-networks"
originalLink: "https://bulwarkblack.com/seedworm-apt-deploys-dindoor-and-fakeset-backdoors-inside-us-critical-infrastructure-networks"
draft: false
---

<p>Iran&#8217;s Seedworm APT group (also known as MuddyWater) has established persistent access inside the networks of multiple US organizations since early February 2026, deploying two previously unknown malware implants as geopolitical tensions between the US and Iran escalate.</p>
<h2>New Backdoor Arsenal: Dindoor and Fakeset</h2>
<p>Joint research from <a href="https://www.helpnetsecurity.com/2026/03/06/seedworm-muddywater-backdoors-victims/" target="_blank" rel="noopener">Symantec and Carbon Black</a> has identified Seedworm activity on the networks of:</p>
<ul>
<li><strong>A US bank</strong> – financial sector targeting</li>
<li><strong>A US airport</strong> – aviation infrastructure at risk</li>
<li><strong>Non-profit organizations</strong> – expanded targeting scope</li>
<li><strong>Israeli operations of a US defense/aerospace software company</strong> – supply chain infiltration</li>
</ul>
<p>The group deployed two novel backdoors:</p>
<p><strong>Dindoor</strong> – A sophisticated backdoor leveraging Deno, a runtime environment for JavaScript and TypeScript, to execute commands on infected machines. Dindoor was digitally signed with a certificate issued to an individual named &#8220;Amy Cherne.&#8221;</p>
<p><strong>Fakeset</strong> – A Python-based backdoor also signed using certificates attributed to &#8220;Amy Cherne&#8221; and &#8220;Donald Gay.&#8221; The &#8220;Donald Gay&#8221; certificate has previously been associated with Stagecomp and Darkcomp malware used by Seedworm.</p>
<h2>Attribution: Iran&#8217;s Ministry of Intelligence</h2>
<p>Seedworm has been linked to Iran&#8217;s Ministry of Intelligence and Security (MOIS) and is known for espionage campaigns targeting government agencies, telecommunications companies, and critical infrastructure globally. The group&#8217;s focus on US and Israeli targets amid the current conflict positions them dangerously for potential follow-on attacks.</p>
<p>Researchers observed attackers using Rclone, an open-source file synchronization tool, to exfiltrate data from the compromised software company to Wasabi cloud storage – a clear indicator of espionage objectives.</p>
<h2>Exposed VPS Reveals Broader Operation</h2>
<p>In a related development, independent threat-intel research collective Ctrl-Alt-Intel accessed Seedworm infrastructure hosted in the Netherlands, harvesting C2 tooling, scripts, logs, and victim data. Their analysis revealed additional targets including:</p>
<ul>
<li>Israeli organizations (healthcare, hosting, immigration, intelligence)</li>
<li>EgyptAir</li>
<li>Jordanian government entities</li>
<li>Various UAE companies</li>
<li>US entities</li>
<li>Jewish/Israeli-linked NGOs</li>
</ul>
<p>The exposed infrastructure showed exploitation of over a dozen CVEs including novel SQL injection vulnerabilities, password spraying campaigns, Ethereum-based C2 resolution, and multiple exfiltration channels spanning cloud storage and EC2 instances.</p>
<h2>Why This Matters</h2>
<p>With Iranian cyber operations potentially accelerating alongside the broader Middle East conflict, Seedworm&#8217;s pre-established network presence in US critical infrastructure represents a significant threat. The group demonstrates continuous evolution of custom tooling while rapidly adopting public exploit code – a dangerous combination for defenders.</p>
<p><strong>Critical Recommendations:</strong></p>
<ul>
<li>Hunt for Deno-based processes and unusual JavaScript/TypeScript execution</li>
<li>Monitor for Rclone and cloud storage exfiltration patterns</li>
<li>Audit certificate-signed executables, particularly those using &#8220;Amy Cherne&#8221; or &#8220;Donald Gay&#8221; certificates</li>
<li>Review network traffic to Wasabi cloud storage</li>
<li>Implement enhanced monitoring for defense and aerospace supply chain partners</li>
</ul>
<p><em>Source: <a href="https://www.helpnetsecurity.com/2026/03/06/seedworm-muddywater-backdoors-victims/" target="_blank" rel="noopener">Help Net Security</a></em></p>
