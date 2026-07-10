---
title: "Google Disrupts UNC2814 GRIDTIDE Campaign: Chinese APT Breaches 53 Organizations Across 42 Countries"
publishedAt: 2026-03-01T02:03:39
summary: "Google has disclosed details of a massive disruption operation against UNC2814, a suspected China-nexus cyber espionage group that breached at least 53 organizations across 42 countries. The campaign, tracked as GRIDTIDE, represents one of the most far-reaching espionage operatio"
category: "Chinese Cyber Threat Intelligence"
categories:
  - "Chinese Cyber Threat Intelligence"
tags: []
heroImage: "/wp-content/uploads/2026/03/gridtide-global.jpg"
wpId: 1956
wpSlug: "google-disrupts-unc2814-gridtide-campaign-chinese-apt-breaches-53-organizations-across-42-countries"
originalLink: "https://bulwarkblack.com/google-disrupts-unc2814-gridtide-campaign-chinese-apt-breaches-53-organizations-across-42-countries"
draft: false
---


<p>Google has disclosed details of a massive disruption operation against <strong>UNC2814</strong>, a suspected China-nexus cyber espionage group that breached at least 53 organizations across 42 countries. The campaign, tracked as <strong>GRIDTIDE</strong>, represents one of the most far-reaching espionage operations uncovered in recent years.</p>



<h2 class="wp-block-heading">The Scope of the Intrusion</h2>



<p>According to <a href="https://cloud.google.com/blog/topics/threat-intelligence/disrupting-gridtide-global-espionage-campaign" target="_blank" rel="noopener">Google Threat Intelligence Group (GTIG) and Mandiant&#8217;s report</a>, UNC2814 has been active since at least 2017, targeting international governments and global telecommunications organizations across Africa, Asia, and the Americas. The group is suspected to be linked to additional infections in more than 20 other nations, bringing the potential total to over 70 countries.</p>



<p><em>&#8220;This prolific, elusive actor has a long history of targeting international governments and global telecommunications organizations,&#8221;</em> the researchers stated. <em>&#8220;We believe many of these organizations have been compromised for years.&#8221;</em></p>



<h2 class="wp-block-heading">GRIDTIDE: Google Sheets as Command-and-Control</h2>



<p>Central to UNC2814&#8217;s operations is a novel backdoor dubbed <strong>GRIDTIDE</strong>—a C-based malware that abuses the Google Sheets API as a command-and-control (C2) communication channel. This technique allows attackers to disguise malicious traffic as benign productivity tool usage.</p>



<p>The backdoor&#8217;s C2 mechanism uses a cell-based polling system with specific spreadsheet cells assigned for different purposes:</p>



<ul class="wp-block-list">
<li><strong>A1</strong> – Polls for attacker commands and returns status responses</li>
<li><strong>A2-An</strong> – Transfers data including command output and files</li>
<li><strong>V1</strong> – Stores system data from the victim endpoint</li>
</ul>



<p>GRIDTIDE supports file upload/download operations and the execution of arbitrary shell commands, providing attackers with comprehensive control over compromised systems.</p>



<h2 class="wp-block-heading">Attack Techniques and Persistence</h2>



<p>UNC2814 employs a sophisticated toolkit beyond GRIDTIDE:</p>



<ul class="wp-block-list">
<li><strong>SoftEther VPN Bridge</strong> – Establishes encrypted outbound connections to external infrastructure</li>
<li><strong>Living-off-the-Land (LotL) binaries</strong> – Conducts reconnaissance, privilege escalation, and persistence</li>
<li><strong>Service account abuse</strong> – Enables SSH-based lateral movement within compromised environments</li>
<li><strong>Systemd persistence</strong> – Creates services at /etc/systemd/system/xapt.service spawning malware from /usr/sbin/xapt</li>
</ul>



<p>Evidence indicates that GRIDTIDE is specifically deployed on endpoints containing personally identifiable information (PII), consistent with cyber espionage activity focused on monitoring persons of interest.</p>



<h2 class="wp-block-heading">Google&#8217;s Disruption Actions</h2>



<p>As part of its disruption operation, Google has taken decisive action:</p>



<ul class="wp-block-list">
<li>Terminated all Google Cloud Projects controlled by the attacker</li>
<li>Disabled all known UNC2814 infrastructure</li>
<li>Cut off access to attacker-controlled accounts</li>
<li>Blocked Google Sheets API calls used for C2 communications</li>
<li>Issued formal victim notifications to each targeted organization</li>
</ul>



<h2 class="wp-block-heading">Implications for Defenders</h2>



<p>This campaign highlights the continued evolution of Chinese nation-state groups embedding themselves into networks for long-term access. The abuse of legitimate cloud services like Google Sheets for C2 communications presents significant challenges for network defenders.</p>



<p><em>&#8220;The global scope of UNC2814&#8217;s activity, evidenced by confirmed or suspected operations in over 70 countries, underscores the serious threat facing telecommunications and government sectors,&#8221;</em> Google concluded. <em>&#8220;Prolific intrusions of this scale are generally the result of years of focused effort and will not be easily re-established.&#8221;</em></p>



<p><strong>Organizations should:</strong></p>



<ul class="wp-block-list">
<li>Monitor for unusual Google Sheets API activity from server endpoints</li>
<li>Audit SoftEther VPN installations across the environment</li>
<li>Review systemd services for unexpected entries</li>
<li>Implement network segmentation for systems containing PII</li>
<li>Enhance monitoring of edge devices and network perimeter systems</li>
</ul>



<p><a href="https://thehackernews.com/2026/02/google-disrupts-unc2814-gridtide.html" target="_blank" rel="noopener">Source: The Hacker News</a></p>
