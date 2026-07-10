---
title: "Chinese APT UnsolicitedBooker Deploys LuciDoor and MarsSnake Backdoors Against Central Asian Telecoms"
publishedAt: 2026-02-24T16:03:09
summary: "A China-aligned threat actor known as UnsolicitedBooker has expanded its targeting to telecommunications companies in Kyrgyzstan and Tajikistan, deploying two sophisticated backdoors—LuciDoor and MarsSnake—in a series of espionage campaigns documented by Positive Technologies res"
category: "Chinese Cyber Threat Intelligence"
categories:
  - "Chinese Cyber Threat Intelligence"
tags: []
heroImage: "/wp-content/uploads/2026/02/unsolicitedbooker-telecom-attack-scaled.jpg"
wpId: 1928
wpSlug: "chinese-apt-unsolicitedbooker-deploys-lucidoor-and-marssnake-backdoors-against-central-asian-telecoms"
originalLink: "https://bulwarkblack.com/chinese-apt-unsolicitedbooker-deploys-lucidoor-and-marssnake-backdoors-against-central-asian-telecoms"
draft: false
---

<p>A China-aligned threat actor known as <strong>UnsolicitedBooker</strong> has expanded its targeting to telecommunications companies in <strong>Kyrgyzstan and Tajikistan</strong>, deploying two sophisticated backdoors—<strong>LuciDoor</strong> and <strong>MarsSnake</strong>—in a series of espionage campaigns documented by Positive Technologies researchers.</p>
<h2>Campaign Overview</h2>
<p>UnsolicitedBooker, first documented by ESET in May 2025 after targeting Saudi Arabian organizations, has been active since at least <strong>March 2023</strong>. The group has a history of targeting organizations across Asia, Africa, and the Middle East, with researchers identifying tactical overlaps with other Chinese threat clusters including <strong>Space Pirates</strong> and the Zardoor campaign.</p>
<blockquote><p><em>&#8220;The group used several unique and rare instruments of Chinese origin.&#8221;</em> — Positive Technologies researchers Alexander Badaev and Maxim Shamanov</p></blockquote>
<h2>Attack Chain Details</h2>
<p>The latest attacks targeting Central Asian telecom providers follow a consistent pattern:</p>
<ul>
<li><strong>September 2025:</strong> Phishing emails containing Microsoft Office documents with malicious macros targeted Kyrgyz organizations</li>
<li><strong>November 2025:</strong> Same tactics using a different loader (MarsSnakeLoader) to deploy MarsSnake</li>
<li><strong>January 2026:</strong> Expanded operations against Tajikistan companies using embedded links instead of attachments</li>
</ul>
<p>When victims enable macros in the decoy documents (which display telecom provider tariff plans), a C++ malware loader called <strong>LuciLoad</strong> or <strong>MarsSnakeLoader</strong> stealthily installs the respective backdoor.</p>
<h2>Backdoor Capabilities</h2>
<h3>LuciDoor (C++)</h3>
<ul>
<li>Establishes encrypted C2 communication</li>
<li>Collects and exfiltrates system information</li>
<li>Executes commands via cmd.exe</li>
<li>Writes files to the compromised system</li>
<li>Uploads files to C2 server</li>
</ul>
<h3>MarsSnake</h3>
<ul>
<li>Harvests system metadata</li>
<li>Executes arbitrary commands</li>
<li>Reads and writes any file on disk</li>
</ul>
<h2>Infrastructure and Attribution</h2>
<p>Positive Technologies noted several interesting operational security aspects:</p>
<ul>
<li>The group used <strong>hacked routers as C2 servers</strong> in at least one case</li>
<li>Infrastructure was configured to <strong>mimic Russian infrastructure</strong> in some attacks</li>
<li>MarsSnake was also deployed against targets <strong>within China</strong>, using Windows shortcut files based on the publicly available <strong>FTPlnk_phishing</strong> pentesting tool</li>
<li>Similar LNK artifacts were previously associated with <strong>Mustang Panda</strong> attacks targeting Thailand in 2022</li>
</ul>
<blockquote><p><em>&#8220;Interestingly, at the very beginning, the group used a backdoor we dubbed LuciDoor, but later switched to the MarsSnake backdoor. However, in 2026, the group made a U-turn and resumed using LuciDoor.&#8221;</em> — Positive Technologies</p></blockquote>
<h2>Why This Matters</h2>
<p>Telecommunications providers are high-value targets for nation-state actors due to their access to sensitive communications data and critical infrastructure positioning. The targeting of Central Asian telecoms—particularly in Kyrgyzstan and Tajikistan—aligns with Chinese strategic interests in the region and the broader Belt and Road Initiative.</p>
<h2>Recommendations</h2>
<ul>
<li>Block macro execution from untrusted Office documents</li>
<li>Monitor for suspicious C2 communications, especially to compromised network devices</li>
<li>Hunt for indicators of LuciLoad, MarsSnakeLoader, LuciDoor, and MarsSnake backdoors</li>
<li>Implement network segmentation to limit lateral movement</li>
<li>Deploy endpoint detection and response (EDR) solutions with behavioral analysis capabilities</li>
</ul>
<p><strong>Source:</strong> <a href="https://thehackernews.com/2026/02/unsolicitedbooker-targets-central-asian.html" target="_blank" rel="noopener">The Hacker News</a> / <a href="https://ptsecurity.com/research/pt-esc-threat-intelligence/poisonous-mars-or-how-lucidoor-knocks-on-the-doors-of-the-cis/" target="_blank" rel="noopener">Positive Technologies</a></p>
