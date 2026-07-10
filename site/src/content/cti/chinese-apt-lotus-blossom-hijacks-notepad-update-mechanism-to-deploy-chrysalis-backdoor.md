---
title: "Chinese APT Lotus Blossom Hijacks Notepad++ Update Mechanism to Deploy Chrysalis Backdoor"
publishedAt: 2026-02-03T02:01:35
summary: "Chinese state-sponsored threat actors hijacked Notepad++ update infrastructure for nearly six months, deploying a sophisticated custom backdoor called Chrysalis to selectively targeted victims."
category: "Chinese Cyber Threat Intelligence"
categories:
  - "Chinese Cyber Threat Intelligence"
tags:
  - "Blackfield"
  - "RE#TURGENCE"
heroImage: "/wp-content/uploads/2026/02/notepad-chinese-apt-2026.jpg"
wpId: 1794
wpSlug: "chinese-apt-lotus-blossom-hijacks-notepad-update-mechanism-to-deploy-chrysalis-backdoor"
originalLink: "https://bulwarkblack.com/chinese-apt-lotus-blossom-hijacks-notepad-update-mechanism-to-deploy-chrysalis-backdoor"
draft: false
---

<p><a href="https://www.bleepingcomputer.com/news/security/notepad-plus-plus-update-feature-hijacked-by-chinese-state-hackers-for-months/">Source: BleepingComputer</a></p>
<p>In a significant supply chain attack, Chinese state-sponsored threat actors compromised the update mechanism of Notepad++, one of the world&#8217;s most popular text editors with tens of millions of users worldwide. The campaign persisted for nearly six months—from June 2025 until December 2025—demonstrating the attackers&#8217; persistence and sophistication.</p>
<h2>The Attack</h2>
<p>The attackers infiltrated a hosting provider that served Notepad++&#8217;s update infrastructure, enabling them to intercept and selectively redirect update requests from specific users to malicious servers. Rather than conducting a broad attack, the threat actors demonstrated precise targeting, redirecting only select victims to receive tampered update manifests.</p>
<p>Security researcher Kevin Beaumont reported that at least three organizations were affected by these update hijacks, with attackers conducting hands-on reconnaissance activity following the initial compromise.</p>
<h2>Attribution: Lotus Blossom APT</h2>
<p>Rapid7 researchers attributed the campaign to <strong>Lotus Blossom</strong> (also known as Raspberry Typhoon, Bilbug, and Spring Dragon), a Chinese APT group with a history of sophisticated operations. The attackers deployed a previously undocumented custom backdoor that Rapid7 named <strong>Chrysalis</strong>.</p>
<p>According to the researchers, Chrysalis is a sophisticated tool with extensive capabilities designed for persistent access on victim systems. The backdoor&#8217;s complexity suggests it was purpose-built for long-term espionage operations.</p>
<h2>Timeline of Events</h2>
<ul>
<li><strong>June 2025:</strong> Initial compromise of the hosting provider</li>
<li><strong>Early September 2025:</strong> Attackers briefly lost access when the server was updated</li>
<li><strong>Post-September 2025:</strong> Threat actors regained access using stolen credentials that hadn&#8217;t been rotated</li>
<li><strong>December 2, 2025:</strong> Breach finally detected and attacker access terminated</li>
<li><strong>December 2025:</strong> Notepad++ version 8.8.9 released with improved update security</li>
</ul>
<h2>Security Improvements</h2>
<p>Following the incident, Notepad++ has implemented significant security improvements:</p>
<ul>
<li>Migrated to a new hosting provider with stronger security controls</li>
<li>Rotated all potentially compromised credentials</li>
<li>WinGUp now verifies installer certificates and signatures</li>
<li>Update XML is now cryptographically signed</li>
<li>Version 8.9.2 (expected within a month) will enforce mandatory certificate signature verification</li>
</ul>
<h2>Recommended Actions</h2>
<p>Notepad++ users should take the following steps:</p>
<ul>
<li>Update to version 8.8.9 or later immediately</li>
<li>Change credentials for SSH, FTP/SFTP, and MySQL</li>
<li>Review WordPress admin accounts (if applicable) and reset passwords</li>
<li>Enable automatic updates where possible</li>
</ul>
<h2>Implications</h2>
<p>This attack highlights the growing sophistication of supply chain compromises. By targeting popular developer tools, threat actors can potentially access high-value targets within enterprise environments. The selective targeting observed in this campaign—rather than mass exploitation—indicates a focus on specific organizations of intelligence interest.</p>
<p>Organizations should implement defense-in-depth strategies that include verifying software updates, monitoring for unusual update behavior, and maintaining visibility into developer tool activity across their networks.</p>
