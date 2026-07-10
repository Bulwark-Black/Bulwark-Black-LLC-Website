---
title: "KnowledgeDeliver RCE Shows Shared Machine Keys Are Shared Blast Radius"
publishedAt: 2026-05-25T15:04:31
summary: "Mandiant’s KnowledgeDeliver CVE-2026-5426 report shows how shared ASP.NET machine keys can turn ViewState into unauthenticated RCE and user-facing malware delivery."
category: "Cyber Security Blog"
categories:
  - "Cyber Security Blog"
  - "General CTI"
  - "Privacy & Security"
tags: []
heroImage: "/wp-content/uploads/2026/05/knowledgedeliver-viewstate-deserialization-featured.png"
wpId: 2309
wpSlug: "knowledgedeliver-viewstate-shared-machine-key-defense"
originalLink: "https://bulwarkblack.com/knowledgedeliver-viewstate-shared-machine-key-defense"
draft: false
---

<p>Mandiant’s latest write-up on KnowledgeDeliver is a sharp reminder that “default configuration” can become a shared compromise path. The issue, tracked as CVE-2026-5426, affects KnowledgeDeliver deployments that reused a vendor-supplied ASP.NET <code>machineKey</code> across customer environments. Once an attacker knows that key, ASP.NET ViewState validation stops being a meaningful boundary.</p>
<p>That matters because ViewState is not just a browser state blob. In the wrong configuration, it becomes a signed payload path into server-side deserialization. Mandiant reports that an unknown threat actor exploited the issue as a zero-day, achieved unauthenticated remote code execution, deployed the in-memory BLUEBEAM/Godzilla web shell, modified application JavaScript, and pushed users toward a fake “security authentication plugin” that led to Cobalt Strike infection.</p>
<p>Source: <a href="https://cloud.google.com/blog/topics/threat-intelligence/knowledgedeliver-viewstate-deserialization-vulnerability/" target="_blank" rel="noopener">Google Cloud / Mandiant — Exploitation of KnowledgeDeliver via ViewState Deserialization Vulnerability</a>. Supporting disclosure: <a href="https://github.com/mandiant/Vulnerability-Disclosures/blob/master/2026/MNDT-2026-0009.md" target="_blank" rel="noopener">Mandiant MNDT-2026-0009</a>.</p>
<h2>What happened</h2>
<p>KnowledgeDeliver is a learning management system used heavily in Japan. According to Mandiant, deployments installed before February 24, 2026 could rely on a standardized <code>web.config</code> containing hardcoded ASP.NET machine keys. Those keys are used to sign and encrypt data such as ViewState payloads.</p>
<p>If independent customer environments share the same signing material, one recovered key can become a skeleton key. A threat actor can craft a malicious <code>__VIEWSTATE</code> payload, send it to an internet-facing server, and potentially force server-side deserialization that results in OS-level code execution.</p>
<p>Mandiant observed post-exploitation activity that should sound familiar to anyone defending web applications:</p>
<ul>
<li>In-memory web shell activity inside the IIS worker process <code>w3wp.exe</code></li>
<li>Command execution and reconnaissance through <code>cmd.exe</code>, <code>whoami</code>, and PowerShell</li>
<li>Permission changes against the web application directory</li>
<li>JavaScript tampering that attempted to social-engineer users into installing a fake security plugin</li>
<li>Follow-on Cobalt Strike delivery to visiting workstations</li>
</ul>
<h2>Why it matters to SMBs and government contractors</h2>
<p>This is not just a Japan-specific LMS problem. It is a pattern problem.</p>
<p>Many small businesses, nonprofits, schools, and contractors run line-of-business web applications that were installed years ago by a vendor, integrator, or internal admin who has since moved on. Those systems often sit in the blind spot between “application owner” and “infrastructure owner.” When a deployment template ships with a shared secret, that blind spot becomes dangerous.</p>
<p>The key lesson is simple: secrets embedded in templates are not secrets. Shared machine keys, reused API tokens, copied encryption keys, default JWT signing secrets, and cloned service credentials all create the same failure mode. Once exposed in one place, every system using the same value may need to be treated as compromised.</p>
<h2>Defensive takeaways</h2>
<h3>1. Treat machine keys and signing keys as high-value credentials</h3>
<p>If you run ASP.NET applications, confirm that <code>machineKey</code> values are unique per environment and generated with strong randomness. Do not rely on vendor defaults or copied web.config templates. Rotating a shared key is disruptive, but leaving it in place preserves the attacker’s access path.</p>
<h3>2. Hunt IIS behavior, not just files</h3>
<p>In-memory web shells can evade basic file scanning. Monitor for suspicious child processes spawned by <code>w3wp.exe</code>, especially command shells, PowerShell, discovery commands, or permission changes. Application event logs related to ViewState validation failures can also provide early signal.</p>
<h3>3. Watch for web-root tampering</h3>
<p>Mandiant observed JavaScript modification designed to turn a trusted LMS into a malware delivery platform. File integrity monitoring on <code>.js</code>, <code>.aspx</code>, and <code>.config</code> files should be standard on externally reachable web applications.</p>
<h3>4. Restrict access where possible</h3>
<p>If an LMS, portal, or admin application does not need to be public to the entire internet, put it behind VPN, SSO-aware access controls, or known IP restrictions. Internet exposure turns a configuration mistake into a race.</p>
<h3>5. Include users in the incident scope</h3>
<p>This campaign did not stop at the server. The attacker used the compromised application to push a fake plugin to users. If a public-facing web app is compromised, incident response should include endpoint review for users who visited the affected portal during the exposure window.</p>
<h2>Bulwark Black assessment</h2>
<p>CVE-2026-5426 is a good example of why application security and infrastructure security cannot be separated. The root issue is a configuration secret. The exploit path is application deserialization. The post-exploitation activity lands in IIS, JavaScript, endpoint malware, and user trust.</p>
<p>For defenders, the practical move is to build an inventory of externally exposed web applications and ask three questions:</p>
<ul>
<li>Does this app use unique cryptographic secrets per deployment?</li>
<li>Would we notice if the web process started launching shells?</li>
<li>Would we notice if an attacker changed JavaScript served to users?</li>
</ul>
<p>If the answer to any of those is “not sure,” that is the work queue. Shared secrets turn one compromise into an ecosystem problem. The fix starts with inventory, key rotation, exposure reduction, and telemetry that watches what web servers actually do after the first request lands.</p>
