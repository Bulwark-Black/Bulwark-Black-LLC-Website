---
title: "Axios npm Supply Chain Attack Deploys Cross-Platform RAT to 83 Million Weekly Users"
publishedAt: 2026-04-01T01:02:39
summary: "On March 31, 2026, the cybersecurity landscape was shaken by a significant supply chain attack targeting Axios, one of the most widely used HTTP client libraries in the JavaScript ecosystem with over 83 million weekly downloads. Attackers compromised a maintainer account to injec"
category: "Malware"
categories:
  - "Malware"
tags: []
heroImage: "/wp-content/uploads/2026/04/axios-supply-chain-attack.jpg"
wpId: 2155
wpSlug: "axios-npm-supply-chain-attack-deploys-cross-platform-rat-to-83-million-weekly-users"
originalLink: "https://bulwarkblack.com/axios-npm-supply-chain-attack-deploys-cross-platform-rat-to-83-million-weekly-users"
draft: false
---


<p>On March 31, 2026, the cybersecurity landscape was shaken by a significant supply chain attack targeting Axios, one of the most widely used HTTP client libraries in the JavaScript ecosystem with <strong>over 83 million weekly downloads</strong>. Attackers compromised a maintainer account to inject a cross-platform remote access trojan (RAT) into two malicious package versions.</p>



<h2 class="wp-block-heading">Attack Vector: Maintainer Account Compromise</h2>



<p>According to <a href="https://thehackernews.com/2026/03/axios-supply-chain-attack-pushes-cross.html" target="_blank" rel="noopener">The Hacker News</a>, the threat actor compromised the npm account of &#8220;jasonsaayman,&#8221; the primary Axios maintainer, and changed its registered email address to a Proton Mail address under their control (&#8220;ifstap@proton.me&#8221;). Using stolen credentials, the attackers bypassed the project&#8217;s GitHub Actions CI/CD pipeline to manually publish two malicious versions:</p>



<ul class="wp-block-list">
<li><strong>axios@1.14.1</strong> (published March 31, 00:21 UTC)</li>
<li><strong>axios@0.30.4</strong> (published March 31, 01:00 UTC)</li>
</ul>



<h2 class="wp-block-heading">Phantom Dependency Injection</h2>



<p>Rather than embedding malicious code directly into Axios, the attackers employed a subtle technique: they injected a fake dependency called <strong>&#8220;plain-crypto-js@4.2.1&#8221;</strong> that was never referenced in the Axios source code. This phantom dependency&#8217;s sole purpose was to execute a postinstall script that deployed the RAT. The clean version (4.2.0) was staged 18 hours before the attack to establish credibility.</p>



<h2 class="wp-block-heading">Cross-Platform RAT Capabilities</h2>



<p>The malware delivered platform-specific payloads targeting <strong>macOS, Windows, and Linux</strong> systems, each communicating with a C2 server at sfrclak.com:8000:</p>



<ul class="wp-block-list">
<li><strong>macOS:</strong> AppleScript payload saves a trojan binary to /Library/Caches/com.apple.act.mond and executes it via /bin/zsh</li>
<li><strong>Windows:</strong> Disguises PowerShell as Windows Terminal (wt.exe), uses VBScript to fetch and execute a PowerShell RAT with registry persistence</li>
<li><strong>Linux:</strong> Downloads Python RAT script to /tmp/ld.py and executes via nohup in the background</li>
</ul>



<p>All variants support system fingerprinting, shell command execution, file system enumeration, and the ability to run additional payloads. The Windows variant uniquely establishes persistence through a Registry Run key.</p>



<h2 class="wp-block-heading">Anti-Forensics and Stealth</h2>



<p>StepSecurity researchers noted the attack&#8217;s emphasis on evasion. After execution, the dropper deleted itself and replaced its package.json with a clean version to conceal evidence of compromise. The cleanup occurred within 36 seconds of installation—just enough time to establish persistence before covering tracks.</p>



<blockquote class="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow"><p>&#8220;This was not opportunistic. The malicious dependency was staged 18 hours in advance. Three separate payloads were pre-built for three operating systems. Both release branches were hit within 39 minutes. Every trace was designed to self-destruct.&#8221;</p><cite>— Ashish Kurmi, StepSecurity</cite></blockquote>



<h2 class="wp-block-heading">Timeline</h2>



<ul class="wp-block-list">
<li><strong>March 30, 05:57 UTC:</strong> Clean plain-crypto-js@4.2.0 published</li>
<li><strong>March 30, 23:59 UTC:</strong> Malicious plain-crypto-js@4.2.1 published</li>
<li><strong>March 31, 00:21 UTC:</strong> axios@1.14.1 published via compromised account</li>
<li><strong>March 31, 01:00 UTC:</strong> axios@0.30.4 published</li>
<li><strong>~03:15 UTC:</strong> Both malicious Axios versions removed from npm</li>
<li><strong>03:25 UTC:</strong> npm places security hold on plain-crypto-js</li>
</ul>



<h2 class="wp-block-heading">Immediate Actions Required</h2>



<p>Developers who installed axios@1.14.1 or axios@0.30.4 should treat their systems as <strong>fully compromised</strong>. Safe versions include 1.14.0 and 0.30.3. Recommended remediation steps:</p>



<ol class="wp-block-list">
<li><strong>Rotate all credentials</strong>, including API keys and tokens immediately</li>
<li><strong>Review network logs</strong> for connections to sfrclak.com or packages.npm.org</li>
<li><strong>Rebuild affected systems entirely</strong> rather than attempting partial cleanup</li>
<li><strong>Reinstall dependencies</strong> with scripts disabled (npm install &#8211;ignore-scripts)</li>
<li><strong>Audit your package-lock.json</strong> for any reference to plain-crypto-js</li>
</ol>



<h2 class="wp-block-heading">Why This Matters</h2>



<p>This attack demonstrates the fragility of the npm supply chain. A single compromised maintainer account can impact millions of developers worldwide. The malicious versions were available for approximately <strong>three hours</strong>, but given Axios&#8217;s massive download volume, the blast radius could be substantial.</p>



<p>As SafeDep noted: &#8220;No Axios source files were modified, making traditional diff-based code review less likely to catch it. The malicious behavior lives entirely in a transitive dependency, triggered automatically by npm&#8217;s postinstall lifecycle.&#8221;</p>



<p><strong>Source:</strong> <a href="https://thehackernews.com/2026/03/axios-supply-chain-attack-pushes-cross.html" target="_blank" rel="noopener">The Hacker News</a> | <a href="https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan" target="_blank" rel="noopener">StepSecurity</a></p>
