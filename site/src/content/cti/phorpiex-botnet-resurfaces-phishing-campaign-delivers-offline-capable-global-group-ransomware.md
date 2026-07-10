---
title: "Phorpiex Botnet Resurfaces: Phishing Campaign Delivers Offline-Capable Global Group Ransomware"
publishedAt: 2026-02-12T16:03:17
summary: "A new phishing campaign leveraging the infamous Phorpiex botnet has been observed distributing Global Group ransomware through weaponized Windows shortcut (.LNK) files, according to a new advisory from Forcepoint X-Labs. The Attack Chain The campaign uses phishing emails with the"
category: "Malware"
categories:
  - "Malware"
tags: []
heroImage: "/wp-content/uploads/2026/02/phorpiex-global-group-ransomware.jpg"
wpId: 1857
wpSlug: "phorpiex-botnet-resurfaces-phishing-campaign-delivers-offline-capable-global-group-ransomware"
originalLink: "https://bulwarkblack.com/phorpiex-botnet-resurfaces-phishing-campaign-delivers-offline-capable-global-group-ransomware"
draft: false
---


<p>A new phishing campaign leveraging the infamous Phorpiex botnet has been observed distributing Global Group ransomware through weaponized Windows shortcut (.LNK) files, according to a new advisory from <a href="https://www.forcepoint.com/blog/x-labs/phorpiex-global-group-ransomware-lnk-phishing" target="_blank" rel="noopener">Forcepoint X-Labs</a>.</p>



<h2 class="wp-block-heading">The Attack Chain</h2>



<p>The campaign uses phishing emails with the subject line &#8220;Your Document&#8221; — a lure that has remained effective throughout 2024 and 2025. Attackers disguise malicious shortcut files using double extensions like <strong>Document.doc.lnk</strong>, exploiting Windows&apos; default behavior of hiding known file extensions.</p>



<p>Once opened, the infection chain unfolds rapidly:</p>



<ul class="wp-block-list">
<li>The shortcut launches <strong>cmd.exe</strong></li>



<li>PowerShell downloads a remote payload, saving it as <strong>windrv.exe</strong></li>



<li>The binary executes silently without visible user prompts</li>
</ul>



<h2 class="wp-block-heading">Phorpiex: A 15-Year-Old Threat Still Thriving</h2>



<p>Phorpiex is a modular malware-as-a-service (MaaS) botnet that has been active since approximately 2010. Despite its age, the botnet remains highly effective as a distribution platform for ransomware and other secondary malware.</p>



<h2 class="wp-block-heading">Global Group Ransomware: Designed for Stealth</h2>



<p>What makes Global Group ransomware particularly dangerous is its <strong>offline operation model</strong>. Unlike modern ransomware families that rely on command-and-control (C2) communication, Global Group:</p>



<ul class="wp-block-list">
<li><strong>Generates encryption keys locally</strong> — no C2 server contact required</li>



<li><strong>Performs no data exfiltration</strong> — reducing network traffic that might trigger alerts</li>



<li><strong>Functions in air-gapped environments</strong> — a significant threat to isolated systems</li>
</ul>



<p>The ransomware uses the <strong>ChaCha20-Poly1305</strong> encryption algorithm and appends the <strong>.Reco</strong> extension to encrypted files. A ransom note titled <strong>README.Reco.txt</strong> is dropped across the system, and the desktop wallpaper is replaced with a GLOBAL GROUP message.</p>



<p>Adding to forensic challenges, the malware <strong>deletes itself after execution</strong> and <strong>removes shadow copies</strong>, severely complicating recovery efforts.</p>



<h2 class="wp-block-heading">Why This Matters</h2>



<p>&#8220;This campaign demonstrates how long-standing malware families like Phorpiex remain highly effective when paired with simple but reliable phishing techniques,&#8221; <a href="https://www.infosecurity-magazine.com/news/phorpiex-phishing-global-group/" target="_blank" rel="noopener">Forcepoint noted</a>. &#8220;By exploiting familiar file types such as Windows shortcut files, attackers can gain initial access with minimal friction.&#8221;</p>



<h2 class="wp-block-heading">Recommendations</h2>



<ul class="wp-block-list">
<li><strong>Block .LNK attachments</strong> at the email gateway</li>



<li><strong>Enable file extension display</strong> in Windows to expose double-extension tricks</li>



<li><strong>Monitor for suspicious PowerShell execution</strong> following shortcut file access</li>



<li><strong>Maintain offline backups</strong> — critical given Global Group&apos;s shadow copy deletion</li>



<li><strong>Train users</strong> to recognize phishing emails with generic document lures</li>
</ul>



<p><em>Source: <a href="https://www.infosecurity-magazine.com/news/phorpiex-phishing-global-group/" target="_blank" rel="noopener">Infosecurity Magazine</a></em></p>
