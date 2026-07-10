---
title: "Critical Veeam Backup Vulnerabilities Draw Ransomware Group Attention: Seven CVSS 9.9 Flaws Patched"
publishedAt: 2026-03-16T15:02:56
summary: "Veeam has released emergency patches for seven severe vulnerabilities in its flagship Backup & Replication platform, several scoring CVSS 9.9 — the highest possible criticality rating. The flaws enable remote code execution (RCE), privilege escalation, and credential theft by aut"
category: "General CTI"
categories:
  - "General CTI"
tags: []
heroImage: "/wp-content/uploads/2026/03/veeam-vulnerabilities-2026.jpg"
wpId: 2065
wpSlug: "critical-veeam-backup-vulnerabilities-draw-ransomware-group-attention-seven-cvss-9-9-flaws-patched"
originalLink: "https://bulwarkblack.com/critical-veeam-backup-vulnerabilities-draw-ransomware-group-attention-seven-cvss-9-9-flaws-patched"
draft: false
---

<p>Veeam has released emergency patches for <strong>seven severe vulnerabilities</strong> in its flagship Backup &amp; Replication platform, several scoring <strong>CVSS 9.9</strong> — the highest possible criticality rating. The flaws enable remote code execution (RCE), privilege escalation, and credential theft by authenticated users, making enterprise backup infrastructure a prime target for ransomware operators.</p>
<h2>Vulnerability Details</h2>
<p>The newly disclosed vulnerabilities affect <strong>Veeam Backup &amp; Replication versions 12 and 13</strong>, impacting both Windows-based deployments and Veeam Software Appliance installations. The critical CVEs include:</p>
<ul>
<li><strong>CVE-2026-21666</strong> — RCE as postgres user via authenticated domain user (CVSS 9.9)</li>
<li><strong>CVE-2026-21667</strong> — RCE via backup viewer privileges (CVSS 9.9)</li>
<li><strong>CVE-2026-21669</strong> — Arbitrary code execution on backup server (CVSS 9.9)</li>
<li><strong>CVE-2026-21708</strong> — RCE through malicious payload execution (CVSS 9.9)</li>
<li><strong>CVE-2026-21668</strong> — File restriction bypass for data tampering</li>
<li><strong>CVE-2026-21670</strong> — SSH credential extraction by low-privileged users</li>
<li><strong>CVE-2026-21671</strong> — RCE in high-availability Veeam Software Appliance deployments</li>
<li><strong>CVE-2026-21672</strong> — Local privilege escalation on Windows VBR servers</li>
</ul>
<p>The attack surface is significant: an attacker who compromises a single domain account — even with limited privileges — can potentially gain full control over backup infrastructure, manipulate or destroy backup data, and pivot deeper into the network.</p>
<h2>Why It Matters: Ransomware Groups Are Watching</h2>
<p>Backup infrastructure has become a high-priority target for ransomware operators. By destroying or encrypting backups, attackers maximize pressure on victims to pay ransoms since organizations lose their recovery options.</p>
<p><strong>Threat actors with documented history of exploiting Veeam vulnerabilities include:</strong></p>
<ul>
<li><strong>FIN7</strong> — Sophisticated cybercrime syndicate linked to Conti, REvil, Maze, Egregor, and BlackBasta ransomware operations</li>
<li><strong>Cuba ransomware</strong> — Previously weaponized Veeam flaws for data theft and backup destruction</li>
<li><strong>Frag ransomware</strong> — Sophos X-Ops reported exploitation of VBR RCE vulnerabilities in late 2024</li>
<li><strong>Akira and Fog ransomware</strong> — Incorporated Veeam exploitation for post-compromise lateral movement</li>
</ul>
<p>Given the rapid pace at which threat actors reverse-engineer patches, <strong>exploitation in the wild is expected imminently</strong>. The window between patch release and active exploitation continues to shrink.</p>
<h2>Technical Root Causes</h2>
<p>The vulnerabilities stem from:</p>
<ul>
<li>Improper input validation</li>
<li>Insufficient privilege separation</li>
<li>Insecure credential storage mechanisms</li>
</ul>
<p>Attackers can exploit these flaws by authenticating to the VBR management interface or leveraging compromised credentials, then issuing crafted requests or executing malicious payloads to achieve code execution or escalate privileges.</p>
<h2>Affected Versions &amp; Patches</h2>
<table>
<thead>
<tr>
<th>Branch</th>
<th>Vulnerable Versions</th>
<th>Patched Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>Version 13</td>
<td>13.0.1.1071 and earlier builds</td>
<td><strong>13.0.1.2067</strong></td>
</tr>
<tr>
<td>Version 12</td>
<td>12.3.2.4165 and earlier builds</td>
<td><strong>12.3.2.4465</strong></td>
</tr>
</tbody>
</table>
<h2>Immediate Actions</h2>
<ol>
<li><strong>Patch immediately</strong> — Upgrade to Veeam Backup &amp; Replication 13.0.1.2067 or 12.3.2.4465</li>
<li><strong>Restrict access</strong> — Limit VBR management interface access to trusted administrative networks</li>
<li><strong>Audit logs</strong> — Monitor for anomalous authentication attempts, unexpected process launches, and unscheduled backup modifications</li>
<li><strong>Network segmentation</strong> — Isolate backup infrastructure from production networks</li>
<li><strong>Enforce MFA</strong> — Strengthen authentication policies for backup administrator accounts</li>
</ol>
<p>Organizations relying on Veeam for business continuity must act swiftly — the ability to execute code as a privileged user on the backup server can enable attackers to delete or encrypt backups, exfiltrate sensitive data, and completely disable disaster recovery capabilities.</p>
<p><a href="https://www.rescana.com/post/veeam-backup-replication-vulnerabilities-critical-rce-flaws-patched-in-latest-security-update" target="_blank" rel="noopener">Source: Rescana</a></p>
