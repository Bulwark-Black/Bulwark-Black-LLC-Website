---
title: "Velvet Tempest Ransomware Group Deploys CastleRAT via ClickFix Attacks Linked to Termite Operations"
publishedAt: 2026-03-08T02:05:29
summary: "Five-Year Ransomware Affiliate Uses Malvertising and Legitimate Windows Tools in Sophisticated Intrusion Security researchers at MalBeacon have exposed a 12-day intrusion campaign by Velvet Tempest (also tracked as DEV-0504), a prolific ransomware affiliate group now deploying th"
category: "Projects"
categories:
  - "Projects"
tags: []
heroImage: "/wp-content/uploads/2026/03/void-geist-malware.jpg"
wpId: 1997
wpSlug: "velvet-tempest-ransomware-group-deploys-castlerat-via-clickfix-attacks-linked-to-termite-operations"
originalLink: "https://bulwarkblack.com/velvet-tempest-ransomware-group-deploys-castlerat-via-clickfix-attacks-linked-to-termite-operations"
draft: false
---

<h2>Five-Year Ransomware Affiliate Uses Malvertising and Legitimate Windows Tools in Sophisticated Intrusion</h2>
<p>Security researchers at MalBeacon have exposed a 12-day intrusion campaign by <strong>Velvet Tempest</strong> (also tracked as DEV-0504), a prolific ransomware affiliate group now deploying the <strong>CastleRAT</strong> backdoor through ClickFix social engineering attacks.</p>
<p>The campaign demonstrates the continued evolution of ransomware operators toward sophisticated initial access techniques that leverage legitimate Windows utilities and social engineering to evade detection.</p>
<h3>Threat Actor Profile: Velvet Tempest</h3>
<p>Velvet Tempest has been active for at least five years as a ransomware affiliate, deploying some of the most devastating strains in recent history:</p>
<ul>
<li><strong>Ryuk</strong> (2018-2020)</li>
<li><strong>REvil</strong> (2019-2022)</li>
<li><strong>Conti</strong> (2019-2022)</li>
<li><strong>BlackMatter</strong> (2021)</li>
<li><strong>BlackCat/ALPHV</strong> (2021-2024)</li>
<li><strong>LockBit</strong> (2022-present)</li>
<li><strong>RansomHub</strong> (2024-present)</li>
<li><strong>Termite</strong> (current)</li>
</ul>
<p>The group is now linked to Termite ransomware, which has claimed high-profile victims including SaaS provider Blue Yonder and Australian IVF giant Genea.</p>
<h3>Attack Chain: ClickFix to CastleRAT</h3>
<p>MalBeacon observed the intrusion between February 3-16, 2026, in an emulated non-profit organization environment with over 3,000 endpoints.</p>
<p><strong>Initial Access:</strong> Velvet Tempest used malvertising to deliver a ClickFix and CAPTCHA combination. Victims were tricked into pasting an obfuscated command into the Windows Run dialog—a technique that bypasses browser-based protections.</p>
<p><strong>Execution:</strong> The pasted command triggered nested cmd.exe chains and leveraged <em>finger.exe</em>—a legitimate Windows utility—to fetch malware loaders. One payload was an archive disguised as a PDF file.</p>
<p><strong>Staging:</strong> Subsequent PowerShell commands downloaded additional payloads, compiled .NET components via csc.exe in temporary directories, and deployed Python-based persistence mechanisms in C:\ProgramData.</p>
<p><strong>Backdoor Deployment:</strong> The attack ultimately delivered <strong>DonutLoader</strong> and <strong>CastleRAT</strong>—a remote access trojan associated with CastleLoader, known for distributing RATs and infostealers like LummaStealer.</p>
<h3>Post-Exploitation Activity</h3>
<p>After gaining access, operators performed hands-on-keyboard activities including:</p>
<ul>
<li>Active Directory reconnaissance</li>
<li>Host discovery and environment profiling</li>
<li>Chrome credential harvesting via PowerShell script</li>
</ul>
<p>Notably, the PowerShell script was hosted on an IP address researchers linked to tool staging for previous Termite ransomware intrusions—establishing the connection between CastleRAT deployment and the Termite operation.</p>
<h3>Detection Indicators</h3>
<p>Security teams should monitor for:</p>
<ul>
<li>ClickFix-style CAPTCHA pages prompting users to paste commands into Run dialog</li>
<li>finger.exe network connections to external hosts</li>
<li>Nested cmd.exe execution chains</li>
<li>csc.exe compilation in temp directories</li>
<li>Python components persisting in C:\ProgramData</li>
<li>DonutLoader or CastleRAT indicators of compromise</li>
</ul>
<h3>Why This Matters</h3>
<p>Velvet Tempest&#8217;s adoption of ClickFix represents a broader trend among ransomware affiliates toward social engineering-based initial access. By convincing users to execute commands themselves, attackers bypass email security, browser protections, and endpoint detection tools that monitor for automated exploitation.</p>
<p>The group&#8217;s five-year track record with multiple ransomware strains also highlights the reality of the ransomware ecosystem: sophisticated affiliates move between ransomware-as-a-service operations, bringing their TTPs and infrastructure with them.</p>
<p><a href="https://www.bleepingcomputer.com/news/security/termite-ransomware-breaches-linked-to-clickfix-castlerat-attacks/" target="_blank" rel="noopener">Source: BleepingComputer / MalBeacon</a></p>
