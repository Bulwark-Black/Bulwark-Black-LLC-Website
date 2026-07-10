---
title: "PDFSider: The Stealthy Backdoor Targeting Fortune 100 Financial Institutions"
publishedAt: 2026-02-04T21:01:57
summary: "A newly identified Windows malware strain called PDFSider has emerged as a dangerous tool in the arsenals of multiple ransomware operators, with at least one confirmed attack targeting a Fortune 100 finance company. Security researchers at Resecurity uncovered the malware during "
category: "Malware"
categories:
  - "Malware"
tags: []
heroImage: "/wp-content/uploads/2026/02/pdfsider-malware.png"
wpId: 1804
wpSlug: "pdfsider-the-stealthy-backdoor-targeting-fortune-100-financial-institutions"
originalLink: "https://bulwarkblack.com/pdfsider-the-stealthy-backdoor-targeting-fortune-100-financial-institutions"
draft: false
---


<p>A newly identified Windows malware strain called <strong>PDFSider</strong> has emerged as a dangerous tool in the arsenals of multiple ransomware operators, with at least one confirmed attack targeting a Fortune 100 finance company. Security researchers at Resecurity uncovered the malware during an incident response engagement, describing it as an advanced stealth backdoor designed for long-term persistence and covert operations.</p>



<h2 class="wp-block-heading">Initial Access Through Social Engineering</h2>



<p>The attack chain begins not with technical exploitation, but with human manipulation. Threat actors posed as IT support staff and convinced employees to launch <strong>Microsoft Quick Assist</strong>, enabling remote access to corporate systems. This social engineering approach demonstrates the continued effectiveness of targeting the human element in the security chain.</p>



<h2 class="wp-block-heading">DLL Side-Loading: Hiding in Plain Sight</h2>



<p>PDFSider employs a sophisticated delivery mechanism known as <strong>DLL side-loading</strong>. The infection chain involves spearphishing emails containing ZIP archives with two components:</p>



<ul class="wp-block-list">
<li>A legitimate, digitally signed executable for <strong>PDF24 Creator</strong> (developed by Miron Geek Software GmbH)</li>



<li>A malicious DLL named <strong>cryptbase.dll</strong></li>
</ul>



<p>Because the legitimate PDF24 application expects this DLL, it loads the attacker&#8217;s malicious version instead of the legitimate library. This technique allows malicious code to execute under the cover of a trusted, signed program, effectively bypassing security controls that focus on executable signatures rather than loaded libraries.</p>



<h2 class="wp-block-heading">Espionage-Grade Tradecraft</h2>



<p>What sets PDFSider apart from typical ransomware tooling is its sophisticated operational security features:</p>



<ul class="wp-block-list">
<li><strong>Memory-Only Execution:</strong> The malware runs primarily in RAM to reduce disk traces, using anonymous pipes to issue commands through CMD</li>



<li><strong>Encrypted C2 Communications:</strong> PDFSider uses Botan 3.0.0 with AES-256-GCM encryption, decrypting inbound data only in memory</li>



<li><strong>DNS Exfiltration:</strong> System information is exfiltrated to attacker-controlled VPS through DNS traffic on port 53</li>



<li><strong>Anti-Analysis Features:</strong> RAM size validation and debugger detection allow the malware to terminate early when sandboxing is suspected</li>



<li><strong>AEAD Authentication:</strong> Uses GCM mode cryptographic authentication, a technique commonly seen in stealthy remote shell backdoors</li>
</ul>



<h2 class="wp-block-heading">Spreading Across Criminal Ecosystems</h2>



<p>While Resecurity initially linked PDFSider to <strong>Qilin ransomware</strong> operations, threat hunting indicates the backdoor is now actively used by multiple ransomware operators. This suggests PDFSider is spreading across criminal ecosystems as a delivery mechanism for follow-on payloads, rather than remaining a niche tool controlled by a single threat actor.</p>



<h2 class="wp-block-heading">AI-Assisted Vulnerability Discovery</h2>



<p>Resecurity warns that AI-assisted coding is making it easier for cybercriminals to identify and exploit vulnerable software at scale. The exploitation of weaknesses in legitimate software like PDF24 for DLL side-loading represents a growing trend where attackers leverage the trust placed in signed applications to bypass endpoint detection and response (EDR) tools.</p>



<h2 class="wp-block-heading">Indicators of Compromise</h2>



<p>Organizations should monitor for:</p>



<ul class="wp-block-list">
<li>Unusual DNS traffic patterns on port 53</li>



<li>PDF24 Creator executables in unexpected locations</li>



<li>Modified or suspicious cryptbase.dll files</li>



<li>Microsoft Quick Assist sessions initiated without legitimate IT support tickets</li>
</ul>



<h2 class="wp-block-heading">Recommendations</h2>



<ul class="wp-block-list">
<li>Implement strict controls around remote access tools like Quick Assist</li>



<li>Monitor for DLL side-loading attempts, even with signed executables</li>



<li>Enhance DNS monitoring and anomaly detection</li>



<li>Train employees to verify IT support requests through official channels</li>
</ul>



<p><em>Based on Resecurity&#8217;s assessment, PDFSider represents espionage-grade tradecraft rather than typical financially motivated ransomware tooling—built to quietly preserve covert access, execute remote commands flexibly, and keep communications protected.</em></p>



<p><strong>Source:</strong> <a href="https://www.cysecurity.news/2026/02/pdfsider-malware-used-in-fortune-100.html" target="_blank" rel="noopener">CySecurity News</a></p>
