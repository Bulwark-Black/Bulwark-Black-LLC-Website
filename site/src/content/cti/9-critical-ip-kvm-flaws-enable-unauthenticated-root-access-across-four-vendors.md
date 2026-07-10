---
title: "9 Critical IP KVM Flaws Enable Unauthenticated Root Access Across Four Vendors"
publishedAt: 2026-03-20T01:03:12
summary: "Low-cost IP KVM devices—designed to provide remote keyboard, video, and mouse access to physical systems—are introducing catastrophic security risks into enterprise environments. New research from Eclypsium reveals nine vulnerabilities affecting products from GL-iNet, Angeet/Yees"
category: "General CTI"
categories:
  - "General CTI"
tags: []
heroImage: "/wp-content/uploads/2026/03/ip-kvm-network-flaws-2026-03-19.jpg"
wpId: 2083
wpSlug: "9-critical-ip-kvm-flaws-enable-unauthenticated-root-access-across-four-vendors"
originalLink: "https://bulwarkblack.com/9-critical-ip-kvm-flaws-enable-unauthenticated-root-access-across-four-vendors"
draft: false
---

<p>Low-cost IP KVM devices—designed to provide remote keyboard, video, and mouse access to physical systems—are introducing catastrophic security risks into enterprise environments. New research from <a href="https://eclypsium.com/blog/your-kvm-is-the-weak-link-how-30-dollar-devices-can-own-your-entire-network/" target="_blank" rel="noopener">Eclypsium</a> reveals nine vulnerabilities affecting products from GL-iNet, Angeet/Yeeso, Sipeed, and JetKVM, with the most severe enabling unauthenticated attackers to achieve root access.</p>
<h2>Why IP KVM Vulnerabilities Are Uniquely Dangerous</h2>
<p>Unlike typical IoT device compromises, a breached IP KVM grants attackers capabilities equivalent to physical access at the keyboard. These devices operate at the BIOS/UEFI level, enabling threat actors to:</p>
<ul>
<li>Inject keystrokes directly into target systems</li>
<li>Boot from removable media to bypass disk encryption</li>
<li>Circumvent Secure Boot protections</li>
<li>Access locked systems before authentication</li>
<li>Remain invisible to OS-level security software</li>
</ul>
<p>&#8220;A compromised KVM is not like a compromised IoT device sitting on your network. It is a direct, silent channel to every machine it controls,&#8221; researchers Paul Asadoorian and Reynaldo Vasquez Garcia warned.</p>
<h2>The Nine Vulnerabilities: A Breakdown</h2>
<p>The flaws span fundamental security failures that have plagued IoT devices for over a decade:</p>
<p><strong>GL-iNet Comet RM-1 (4 vulnerabilities):</strong></p>
<ul>
<li><strong>CVE-2026-32290</strong> (CVSS 4.2) — Insufficient firmware authenticity verification</li>
<li><strong>CVE-2026-32291</strong> (CVSS 7.6) — UART root access vulnerability</li>
<li><strong>CVE-2026-32292</strong> (CVSS 5.3) — No brute-force protection (Fixed in 1.8.1 BETA)</li>
<li><strong>CVE-2026-32293</strong> (CVSS 3.1) — Insecure initial provisioning via unauthenticated cloud connection</li>
</ul>
<p><strong>JetKVM (2 vulnerabilities):</strong></p>
<ul>
<li><strong>CVE-2026-32294</strong> (CVSS 6.7) — Insufficient update verification (Fixed in 0.5.4)</li>
<li><strong>CVE-2026-32295</strong> (CVSS 7.3) — Insufficient rate limiting (Fixed in 0.5.4)</li>
</ul>
<p><strong>Sipeed NanoKVM (1 vulnerability):</strong></p>
<ul>
<li><strong>CVE-2026-32296</strong> (CVSS 5.4) — Configuration endpoint exposure (Fixed in NanoKVM 2.3.1 / Pro 1.2.4)</li>
</ul>
<p><strong>Angeet ES3 KVM (2 critical vulnerabilities — NO FIX AVAILABLE):</strong></p>
<ul>
<li><strong>CVE-2026-32297</strong> (CVSS 9.8) — Missing authentication for critical function → arbitrary code execution</li>
<li><strong>CVE-2026-32298</strong> (CVSS 8.8) — OS command injection → arbitrary command execution</li>
</ul>
<h2>Pattern of Fundamental Security Failures</h2>
<p>Eclypsium&#8217;s analysis reveals recurring themes across all affected products:</p>
<ul>
<li><strong>Missing firmware signature validation</strong> — allowing supply-chain attacks</li>
<li><strong>No brute-force protection</strong> — enabling credential attacks</li>
<li><strong>Broken access controls</strong> — permitting unauthorized configuration changes</li>
<li><strong>Exposed debug interfaces</strong> — providing direct root access</li>
</ul>
<p>&#8220;These are not exotic zero-days requiring months of reverse engineering,&#8221; the researchers noted. &#8220;These are fundamental security controls that any networked device should implement.&#8221;</p>
<h2>Real-World Attack Implications</h2>
<p>The research highlights how IP KVM devices are already being weaponized. North Korean IT workers operating from China have reportedly used similar devices—including PiKVM and TinyPilot—to remotely control company laptops hosted on &#8220;laptop farms,&#8221; maintaining persistent access to corporate networks.</p>
<p>An attacker who compromises an IP KVM can:</p>
<ul>
<li>Hide tools and backdoors on the device itself</li>
<li>Consistently re-infect host systems even after remediation</li>
<li>Persist indefinitely through tampered firmware updates lacking signature verification</li>
</ul>
<h2>Defensive Recommendations</h2>
<p>Organizations using IP KVM devices should immediately:</p>
<ol>
<li><strong>Enforce MFA</strong> where supported</li>
<li><strong>Isolate KVM devices</strong> on a dedicated management VLAN</li>
<li><strong>Restrict internet access</strong> for these devices</li>
<li><strong>Check Shodan</strong> for external exposure</li>
<li><strong>Monitor network traffic</strong> for unexpected communications</li>
<li><strong>Update firmware immediately</strong> where patches are available</li>
<li><strong>Consider replacement</strong> of unpatched Angeet ES3 devices</li>
</ol>
<h2>The Bottom Line</h2>
<p>The $30 price point of these devices has driven widespread adoption, but security has been an afterthought. Organizations must recognize that IP KVM devices represent a high-value target for attackers—providing silent, persistent access to every machine they control. Until vendors implement fundamental security controls, these &#8220;convenient&#8221; remote access tools remain serious liabilities.</p>
<p><em>Source: <a href="https://thehackernews.com/2026/03/9-critical-ip-kvm-flaws-enable.html" target="_blank" rel="noopener">The Hacker News</a> / <a href="https://eclypsium.com/blog/your-kvm-is-the-weak-link-how-30-dollar-devices-can-own-your-entire-network/" target="_blank" rel="noopener">Eclypsium</a></em></p>
