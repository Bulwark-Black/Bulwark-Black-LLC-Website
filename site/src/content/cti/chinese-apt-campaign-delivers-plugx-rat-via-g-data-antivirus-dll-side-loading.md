---
title: "Chinese APT Campaign Delivers PlugX RAT via G DATA Antivirus DLL Side-Loading"
publishedAt: 2026-02-27T02:05:17
summary: "A sophisticated Chinese-aligned threat campaign has been observed delivering the PlugX Remote Access Trojan (RAT) through a clever abuse of legitimate G DATA antivirus components, according to new research from LAB52. The Attack Chain The infection begins with a spear-phishing em"
category: "Chinese Cyber Threat Intelligence"
categories:
  - "Chinese Cyber Threat Intelligence"
tags: []
heroImage: "/wp-content/uploads/2026/02/plugx-malware-gdata.jpg"
wpId: 1944
wpSlug: "chinese-apt-campaign-delivers-plugx-rat-via-g-data-antivirus-dll-side-loading"
originalLink: "https://bulwarkblack.com/chinese-apt-campaign-delivers-plugx-rat-via-g-data-antivirus-dll-side-loading"
draft: false
---


<p>A sophisticated Chinese-aligned threat campaign has been observed delivering the PlugX Remote Access Trojan (RAT) through a clever abuse of legitimate G DATA antivirus components, according to new research from <a href="https://lab52.io/blog/plugx-meeting-invitation-via-msbuild-and-gdata/" target="_blank" rel="noopener">LAB52</a>.</p>



<h2 class="wp-block-heading">The Attack Chain</h2>



<p>The infection begins with a spear-phishing email titled &#8220;Meeting Invitation&#8221; containing two links — one redirecting to Iceland&#8217;s Ministry of Foreign Affairs website as a legitimacy decoy, and another delivering a malicious ZIP archive. The archive contains:</p>



<ul class="wp-block-list">
<li><strong>Invitation_Letter_No.02_2026.exe</strong> — A renamed copy of MSBuild.exe used as a Living-off-the-Land Binary (LOLBIN)</li>



<li><strong>Invitation_Letter_No.02_2026.csproj</strong> — A malicious C# project file containing Base64-encoded URLs</li>
</ul>



<p>When executed, the MSBuild binary processes the .csproj file, which downloads three additional components from the attacker-controlled domain <code>onedow[.]gesecole[.]net</code>:</p>



<ul class="wp-block-list">
<li><strong>AVK.exe</strong> — A legitimate G DATA Antivirus executable</li>



<li><strong>Avk.dll</strong> — The malicious PlugX loader (detected as Korplug)</li>



<li><strong>AVKTray.dat</strong> — An encrypted payload file</li>
</ul>



<h2 class="wp-block-heading">DLL Side-Loading Abuse</h2>



<p>The attack leverages DLL side-loading — a technique where legitimate, digitally signed applications are tricked into loading malicious DLLs. In this case, the genuine G DATA executable (AVK.exe) requires Avk.dll to function, allowing the malicious loader to execute with the trusted application&#8217;s reputation.</p>



<p>The loader employs multiple obfuscation techniques:</p>



<ul class="wp-block-list">
<li><strong>XOR encoding</strong> with key 0x7F to hide the payload filename</li>



<li><strong>XOR decryption</strong> with key 0x4F to decode AVKTray.dat</li>



<li><strong>DJB2-based API hashing</strong> to obfuscate function calls</li>



<li><strong>RC4 encryption</strong> for configuration data</li>
</ul>



<h2 class="wp-block-heading">Persistence and Command-and-Control</h2>



<p>The malware establishes persistence through the Windows Run registry key using the name &#8220;G DATA,&#8221; making the backdoor appear as legitimate security software. Files are deployed to <code>C:\Users\Public\GDatas</code>, and the malware communicates with its C2 server at <code>decoraat[.]net</code> over HTTPS port 443.</p>



<p>A decoy PDF is embedded within the payload&#8217;s overlay section and displayed to victims during infection, maintaining the illusion of a legitimate meeting invitation.</p>



<h2 class="wp-block-heading">Historical Context</h2>



<p>PlugX has been a staple of Chinese cyber-espionage operations since approximately 2008, linked to threat actors including Mustang Panda, APT41, APT10, and Deep Panda. These groups have targeted government institutions, diplomatic entities, defense organizations, and technology companies across Europe, Asia, and North America.</p>



<p>The use of meeting invitation themes for spear-phishing is a well-established tactic. Similar campaigns have been observed from:</p>



<ul class="wp-block-list">
<li><strong>UNC6384</strong> (overlapping with Mustang Panda) — exploited ZDI-CAN-25373 using European Commission meeting lures</li>



<li><strong>APT29 (Cozy Bear)</strong> — used fake diplomatic event invitations to deploy WINELOADER</li>



<li><strong>APT34</strong> — leveraged spoofed LinkedIn invitations for backdoor deployment</li>
</ul>



<h2 class="wp-block-heading">Indicators of Compromise</h2>



<p><strong>Network Indicators:</strong></p>



<ul class="wp-block-list">
<li><code>https[:]//onedow[.]gesecole[.]net/download</code></li>



<li><code>https[:]//decoraat[.]net:443</code></li>
</ul>



<p><strong>File Hashes (SHA256):</strong></p>



<ul class="wp-block-list">
<li>AVKTray.dat: <code>e7ed0cd4115f3ff35c38d36cc50c6a13eba2d845554439a36108789cd1e05b17</code></li>



<li>Avk.dll: <code>46314092c8d00ab93cbbdc824b9fc39dec9303169163b9625bae3b1717d70ebc</code></li>



<li>Invitation ZIP: <code>29cd44aa2a51a200d82cca578d97dc13241bc906ea6a33b132c6ca567dc8f3ad</code></li>
</ul>



<h2 class="wp-block-heading">Defensive Recommendations</h2>



<ul class="wp-block-list">
<li>Monitor for MSBuild.exe executing .csproj files from user-writable directories</li>



<li>Implement application whitelisting to prevent unauthorized DLL loading</li>



<li>Block network connections to the identified C2 infrastructure</li>



<li>Monitor for registry modifications to Run keys mimicking security software names</li>



<li>Train users to scrutinize meeting invitation emails from unknown sources</li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity" />



<p><em>Source: <a href="https://lab52.io/blog/plugx-meeting-invitation-via-msbuild-and-gdata/" target="_blank" rel="noopener">LAB52</a></em></p>
