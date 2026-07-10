---
title: "Silver Fox APT Unleashes ValleyRAT with Rare PoolParty Process Injection Technique"
publishedAt: 2026-02-06T02:02:14
summary: "A sophisticated malware campaign targeting Chinese-speaking users has revealed a significant evolution in the Silver Fox APT group’s capabilities. According to new research from Cybereason Security Services, the threat actors are deploying fake software installers to deliver Vall"
category: "Malware"
categories:
  - "Malware"
tags:
  - "Chinese APT"
  - "fake installer"
  - "PoolParty"
  - "process injection"
  - "remote access trojan"
  - "Silver Fox APT"
  - "ValleyRAT"
  - "Winos 4.0"
heroImage: "/wp-content/uploads/2026/02/silver-fox-apt-valleyrat.jpg"
wpId: 1815
wpSlug: "silver-fox-apt-unleashes-valleyrat-with-rare-poolparty-process-injection-technique"
originalLink: "https://bulwarkblack.com/silver-fox-apt-unleashes-valleyrat-with-rare-poolparty-process-injection-technique"
draft: false
---

<p>A sophisticated malware campaign targeting Chinese-speaking users has revealed a significant evolution in the Silver Fox APT group&#8217;s capabilities. According to new research from <a href="https://www.cybereason.com/blog/fake-installer-valleyrat" target="_blank" rel="noopener">Cybereason Security Services</a>, the threat actors are deploying fake software installers to deliver ValleyRAT (also known as Winos 4.0) using a rare process injection technique that bypasses most security tools.</p>
<h2>A Rare and Dangerous Injection Method</h2>
<p>What sets this campaign apart is the implementation of &#8220;PoolParty Variant 7&#8221; — an obscure process injection technique rarely observed in the wild. Unlike standard malware that relies on well-known injection methods, this approach manipulates Windows I/O Completion Ports to force legitimate processes into executing malicious code.</p>
<p>&#8220;The sample we analyzed uses a process-injection technique called PoolParty Variant 7, which is not common,&#8221; the researchers noted. The malware duplicates a handle from Explorer.exe and leverages the ZwSetIoCompletion() API to trigger execution, effectively hiding within a trusted system process and evading detection.</p>
<h2>Sophisticated Persistence Mechanisms</h2>
<p>The attackers have implemented a robust &#8220;watchdog&#8221; system designed to restart the infection if interrupted. Rather than using simple batch file checks, the malware injects code directly into Explorer.exe and UserAccountBroker.exe — making the persistence mechanism nearly invisible and extremely difficult to remove.</p>
<h2>Anti-Security Countermeasures</h2>
<p>The malware actively scans for and attempts to disable Chinese security software, particularly products from Qihoo 360. When it detects processes like &#8220;360tray.exe&#8221; and &#8220;ZhuDongFangYu.exe,&#8221; it doesn&#8217;t just hide — it attacks by severing TCP connections to the security software&#8217;s cloud servers, effectively blinding the protective tools.</p>
<h2>Attribution and Connections</h2>
<p>The evidence points to the Silver Fox APT group, which has been linked to ValleyRAT since its first identification in 2023. Notably, researchers found code similarities with SADBRIDGE — the only other known malware family to employ the PoolParty Variant 7 technique — suggesting shared tools or an evolving arsenal within the group.</p>
<h2>Attack Vector</h2>
<p>The campaign distributes malware through fake installers for popular applications including:</p>
<ul>
<li>LINE messaging app</li>
<li>ToDesk remote desktop</li>
<li>AnyDesk remote access software</li>
</ul>
<h2>Defensive Recommendations</h2>
<p>Organizations should carefully verify digital signatures on all software installers. A certificate that appears valid but fails verification is a telltale sign of tampering. Security teams should also monitor for unusual API calls related to I/O Completion Ports and suspicious interactions with Explorer.exe.</p>
<p><strong>Source:</strong> <a href="https://securityonline.info/stealth-injection-silver-fox-apt-upgrades-valleyrat-with-rare-poolparty-tech/" target="_blank" rel="noopener">Security Online</a></p>
