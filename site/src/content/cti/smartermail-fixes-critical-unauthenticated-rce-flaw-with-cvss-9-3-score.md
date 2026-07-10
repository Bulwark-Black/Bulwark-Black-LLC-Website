---
title: "SmarterMail Fixes Critical Unauthenticated RCE Flaw with CVSS 9.3 Score"
publishedAt: 2026-01-30T16:05:31
summary: "SmarterTools patches critical CVE-2026-24423 (CVSS 9.3) unauthenticated RCE vulnerability in SmarterMail email server. Two other flaws including one under active exploitation also addressed. Update immediately."
category: "General CTI"
categories:
  - "General CTI"
tags: []
heroImage: "/wp-content/uploads/2026/01/smartermail-rce-vulnerability-2026.jpg"
wpId: 1752
wpSlug: "smartermail-fixes-critical-unauthenticated-rce-flaw-with-cvss-9-3-score"
originalLink: "https://bulwarkblack.com/smartermail-fixes-critical-unauthenticated-rce-flaw-with-cvss-9-3-score"
draft: false
---

<p><strong>Source: <a href="https://thehackernews.com/2026/01/smartermail-fixes-critical.html" target="_blank" rel="noopener">The Hacker News</a></strong></p>
<p>SmarterTools has released urgent security updates for its SmarterMail email server software, addressing multiple critical vulnerabilities including an unauthenticated remote code execution (RCE) flaw with a CVSS score of 9.3.</p>
<h2>Critical RCE Vulnerability (CVE-2026-24423)</h2>
<p>The most severe vulnerability, tracked as <strong>CVE-2026-24423</strong>, allows attackers to achieve remote code execution without authentication through the ConnectToHub API method. According to the CVE description:</p>
<p><em>&#8220;The attacker could point the SmarterMail to the malicious HTTP server, which serves the malicious OS command. This command will be executed by the vulnerable application.&#8221;</em></p>
<p>The vulnerability was discovered and reported by researchers from watchTowr, CODE WHITE GmbH, and VulnCheck.</p>
<h2>Additional Vulnerabilities Patched</h2>
<p>SmarterTools also addressed:</p>
<ul>
<li><strong>CVE-2026-23760 (CVSS 9.3)</strong> &#8211; Another critical flaw that is already under active exploitation in the wild</li>
<li><strong>CVE-2026-25067 (CVSS 6.9)</strong> &#8211; A medium-severity vulnerability enabling NTLM relay attacks and unauthorized network authentication through unauthenticated path coercion</li>
</ul>
<h2>Urgent Action Required</h2>
<p>Organizations running SmarterMail should immediately update to:</p>
<ul>
<li><strong>Build 9511</strong> (January 15, 2026) &#8211; Patches CVE-2026-24423 and CVE-2026-23760</li>
<li><strong>Build 9518</strong> (January 22, 2026) &#8211; Patches CVE-2026-25067</li>
</ul>
<p>With two vulnerabilities already under active exploitation, administrators should prioritize this update to prevent potential compromise of email infrastructure.</p>
<h2>Why This Matters</h2>
<p>Email servers are high-value targets for attackers as they contain sensitive communications and can serve as pivot points for further network compromise. Unauthenticated RCE vulnerabilities are particularly dangerous as they require no prior access or credentials to exploit.</p>
