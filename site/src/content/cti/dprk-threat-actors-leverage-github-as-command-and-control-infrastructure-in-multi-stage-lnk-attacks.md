---
title: "DPRK Threat Actors Leverage GitHub as Command and Control Infrastructure in Multi-Stage LNK Attacks"
publishedAt: 2026-04-02T20:06:07
summary: "North Korean state-sponsored threat actors have been observed targeting South Korean organizations with a sophisticated multi-stage attack chain that abuses GitHub as command and control (C2) infrastructure. Fortinet FortiGuard Labs published research on April 2, 2026 detailing t"
category: "North Korean Cyber Threat Intelligence"
categories:
  - "North Korean Cyber Threat Intelligence"
tags: []
heroImage: "/wp-content/uploads/2026/04/dprk-github-c2-campaign.jpg"
wpId: 2161
wpSlug: "dprk-threat-actors-leverage-github-as-command-and-control-infrastructure-in-multi-stage-lnk-attacks"
originalLink: "https://bulwarkblack.com/dprk-threat-actors-leverage-github-as-command-and-control-infrastructure-in-multi-stage-lnk-attacks"
draft: false
---

<p>North Korean state-sponsored threat actors have been observed targeting South Korean organizations with a sophisticated multi-stage attack chain that abuses GitHub as command and control (C2) infrastructure. <a href="https://www.fortinet.com/blog/threat-research/dprk-related-campaigns-with-lnk-and-github-c2" target="_blank" rel="noopener">Fortinet FortiGuard Labs published research</a> on April 2, 2026 detailing the campaign, which leverages malicious LNK (shortcut) files, encoded payloads, and living-off-the-land (LOTL) techniques to maintain persistence while evading detection.</p>
<h2>Attack Overview</h2>
<p>The campaign relies on malicious LNK files delivered via phishing, disguised with decoy PDF documents to deceive victims. When opened, the files appear legitimate while PowerShell scripts execute silently in the background. The threat actors have evolved their tactics over time—earlier versions contained identifying metadata linking them to known North Korean APT groups including Kimsuky, APT37, and Lazarus. Recent variants have stripped this metadata and introduced more sophisticated obfuscation.</p>
<h2>Multi-Stage Infection Chain</h2>
<p>The attack proceeds through three distinct stages:</p>
<p><strong>Stage 1 &#8211; LNK Execution:</strong> Malicious LNK files contain hidden scripts with embedded decoding functions. The files drop a decoy PDF while executing PowerShell commands retrieved from GitHub repositories.</p>
<p><strong>Stage 2 &#8211; Persistence &amp; Reconnaissance:</strong> The PowerShell payload performs extensive anti-analysis checks, scanning for over 40 security analysis tools and virtual machine indicators including vmtoolsd, WireShark, x64dbg, ProcessHacker, and IDA. If detected, the malware terminates immediately. Otherwise, it establishes persistence via scheduled tasks that execute every 30 minutes using VBScript, collects detailed system information (OS version, boot time, running processes), and exfiltrates data to GitHub using hardcoded access tokens.</p>
<p><strong>Stage 3 &#8211; C2 Communication:</strong> The malware maintains persistent connections to GitHub repositories to download additional modules and instructions, enabling ongoing monitoring and further exploitation of compromised systems.</p>
<h2>GitHub Infrastructure Abuse</h2>
<p>The attackers leverage multiple GitHub accounts for their operations, including:</p>
<ul>
<li>motoralis (primary operational hub)</li>
<li>God0808RAMA</li>
<li>Pigresy80</li>
<li>entire73</li>
<li>pandora0009</li>
<li>brandonleeodd93-blip</li>
</ul>
<p>By conducting all activity within private repositories, the threat actors conceal malicious payloads and exfiltrated logs from public view while exploiting GitHub&#8217;s trusted reputation to bypass corporate security filters. A &#8220;keep-alive&#8221; script uploads network configuration details, allowing real-time monitoring of infected machines.</p>
<h2>Why This Matters</h2>
<p>This campaign demonstrates how nation-state actors are increasingly turning legitimate infrastructure into covert attack surfaces. By abusing trusted platforms like GitHub and leveraging built-in Windows tools (PowerShell, VBScript, scheduled tasks), attackers can blend malicious traffic with normal activity, making detection significantly more challenging for enterprise security teams. Organizations should monitor for unusual PowerShell or VBScript activity and implement controls around untrusted documents.</p>
<h2>Indicators of Compromise</h2>
<p>Key IOCs include the GitHub repositories used for C2:</p>
<ul>
<li>hxxps://api[.]github[.]com/repos/motoralis/singled/contents/kcca/technik</li>
<li>hxxps://raw[.]githubusercontent[.]com/motoralis/singled/main/kcca/paper[.]jim</li>
</ul>
<p>Fortinet customers are protected via detection signature: <code>LNK/Agent.ALN!tr</code></p>
<p><em>Source: <a href="https://www.infosecurity-magazine.com/news/github-covert-multi-stage-malware/" target="_blank" rel="noopener">Infosecurity Magazine</a> | <a href="https://www.fortinet.com/blog/threat-research/dprk-related-campaigns-with-lnk-and-github-c2" target="_blank" rel="noopener">Fortinet FortiGuard Labs</a></em></p>
