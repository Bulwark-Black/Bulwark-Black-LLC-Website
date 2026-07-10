---
title: "Malicious Go Crypto Module Steals Passwords and Deploys Rekoobe Backdoor"
publishedAt: 2026-03-03T02:03:31
summary: "A sophisticated supply chain attack has been uncovered targeting Go developers through a malicious module that impersonates the legitimate golang.org/x/crypto library. The attack demonstrates how threat actors are increasingly exploiting namespace confusion to compromise develope"
category: "Malware"
categories:
  - "Malware"
tags:
  - "APT31"
  - "credential theft"
  - "Go Loader / Dropper"
  - "Golang"
  - "Linux backdoor"
  - "namespace confusion"
  - "Rekoobe"
  - "Socket"
  - "supply chain attack"
heroImage: "/wp-content/uploads/2026/03/go-rekoobe-backdoor.jpg"
wpId: 1966
wpSlug: "malicious-go-crypto-module-steals-passwords-and-deploys-rekoobe-backdoor"
originalLink: "https://bulwarkblack.com/malicious-go-crypto-module-steals-passwords-and-deploys-rekoobe-backdoor"
draft: false
---

<p>A sophisticated supply chain attack has been uncovered targeting Go developers through a malicious module that impersonates the legitimate <code>golang.org/x/crypto</code> library. The attack demonstrates how threat actors are increasingly exploiting namespace confusion to compromise developer environments and deploy persistent backdoors.</p>
<h2>The Attack Mechanism</h2>
<p>Security researchers at <a href="https://socket.dev/blog/malicious-go-crypto-module-steals-passwords-and-deploys-rekoobe-backdoor" target="_blank" rel="noopener">Socket</a> discovered the malicious module <code>github[.]com/xinfeisoft/crypto</code>, which masquerades as the legitimate Go crypto library. The attack is particularly insidious because it hooks into the <code>ReadPassword()</code> function within the <code>ssh/terminal/terminal.go</code> file.</p>
<p>&#8220;This activity fits namespace confusion and impersonation of the legitimate golang.org/x/crypto subrepository,&#8221; explained Socket security researcher Kirill Boychenko. &#8220;The legitimate project identifies go.googlesource.com/crypto as canonical and treats GitHub as a mirror, a distinction the threat actor abuses to make github.com/xinfeisoft/crypto look routine in dependency graphs.&#8221;</p>
<h2>Attack Chain</h2>
<p>When a victim application calls <code>ReadPassword()</code>, the malicious code:</p>
<ul>
<li><strong>Captures passwords</strong> entered at terminal prompts</li>
<li><strong>Writes credentials</strong> to <code>/usr/share/nano/.lock</code> for persistence</li>
<li><strong>Exfiltrates secrets</strong> via HTTP POST to attacker-controlled servers</li>
<li><strong>Downloads and executes</strong> shell scripts through a GitHub Raw staging mechanism</li>
</ul>
<h2>The Rekoobe Backdoor</h2>
<p>The attack chain ultimately deploys <strong>Rekoobe</strong>, a Linux trojan active since at least 2015 and linked to Chinese nation-state group <strong>APT31</strong>. The malware:</p>
<ul>
<li>Adds attacker SSH keys to <code>/home/ubuntu/.ssh/authorized_keys</code></li>
<li>Loosens firewall restrictions by setting iptables defaults to ACCEPT</li>
<li>Receives commands from C2 servers for additional payload deployment</li>
<li>Enables reverse shell access for remote control</li>
</ul>
<h2>Defense Implications</h2>
<p>While the Go security team has blocked the malicious package, researchers warn this pattern will likely repeat. &#8220;Defenders should anticipate similar supply chain attacks targeting other &#8216;credential edge&#8217; libraries (SSH helpers, CLI auth prompts, database connectors) and more indirection through hosting surfaces to rotate infrastructure without republishing code,&#8221; Boychenko cautioned.</p>
<p>Organizations using Go in their development environments should audit their dependencies and implement verification processes for third-party libraries.</p>
<p><strong>Source:</strong> <a href="https://thehackernews.com/2026/02/malicious-go-crypto-module-steals.html" target="_blank" rel="noopener">The Hacker News</a></p>
