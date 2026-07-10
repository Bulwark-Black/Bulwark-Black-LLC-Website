---
title: "SolarWinds Fixes Six Critical Web Help Desk Vulnerabilities Including RCE and Auth Bypass"
publishedAt: 2026-01-29T16:05:46
summary: "SolarWinds patches six severe vulnerabilities in Web Help Desk, including four critical flaws (CVSS 9.8) enabling unauthenticated remote code execution and authentication bypass. Organizations should update to WHD 2026.1 immediately."
category: "General CTI"
categories:
  - "General CTI"
tags: []
heroImage: "/wp-content/uploads/2026/01/solarwinds-web-help-desk-vulnerabilities.jpg"
wpId: 1744
wpSlug: "solarwinds-fixes-six-critical-web-help-desk-vulnerabilities-including-rce-and-auth-bypass"
originalLink: "https://bulwarkblack.com/solarwinds-fixes-six-critical-web-help-desk-vulnerabilities-including-rce-and-auth-bypass"
draft: false
---

<p><strong>Source:</strong> <a href="https://thehackernews.com/2026/01/solarwinds-fixes-four-critical-web-help.html" target="_blank" rel="noopener">The Hacker News</a></p>
<p>SolarWinds has released critical security updates for its Web Help Desk platform, addressing six severe vulnerabilities &#8211; four of which carry critical severity ratings. These flaws could allow attackers to bypass authentication and achieve remote code execution (RCE) without any credentials.</p>
<h2>The Critical Vulnerabilities</h2>
<p>The most severe issues include:</p>
<ul>
<li><strong>CVE-2025-40551</strong> (CVSS 9.8) &#8211; An untrusted data deserialization vulnerability enabling unauthenticated remote code execution</li>
<li><strong>CVE-2025-40552</strong> (CVSS 9.8) &#8211; An authentication bypass allowing attackers to execute actions and methods without credentials</li>
<li><strong>CVE-2025-40553</strong> (CVSS 9.8) &#8211; Another deserialization flaw leading to RCE on the host machine</li>
<li><strong>CVE-2025-40554</strong> (CVSS 9.8) &#8211; Authentication bypass enabling specific action invocation within Web Help Desk</li>
<li><strong>CVE-2025-40536</strong> (CVSS 8.1) &#8211; Security control bypass granting access to restricted functionality</li>
<li><strong>CVE-2025-40537</strong> (CVSS 7.5) &#8211; Hard-coded credentials allowing admin function access via the client user account</li>
</ul>
<h2>Why This Matters</h2>
<p>Security researchers from Horizon3.ai and watchTowr discovered these vulnerabilities. According to Rapid7 analysis, the deserialization vulnerabilities (CVE-2025-40551 and CVE-2025-40553) are highly reliable vectors for attackers to leverage, and because they do not require authentication, the potential impact is significant.</p>
<p>SolarWinds Web Help Desk has a history of security issues. In late 2024, CISA added CVE-2024-28986 and CVE-2024-28987 to its Known Exploited Vulnerabilities catalog due to active exploitation in the wild. This pattern suggests threat actors actively target this platform.</p>
<h2>Immediate Action Required</h2>
<p>Organizations running SolarWinds Web Help Desk should immediately update to version <strong>WHD 2026.1</strong>. Given the critical nature of these flaws and the history of exploitation targeting this software, delayed patching significantly increases risk exposure.</p>
<p><strong>Key takeaways for defenders:</strong></p>
<ul>
<li>Patch immediately &#8211; all six vulnerabilities are addressed in WHD 2026.1</li>
<li>Monitor for exploitation attempts against Web Help Desk instances</li>
<li>Review network segmentation around help desk systems</li>
<li>Consider the broader attack surface of IT service management tools</li>
</ul>
