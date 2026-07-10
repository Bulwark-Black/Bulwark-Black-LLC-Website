---
title: "Critical Cisco IMC Authentication Bypass Enables Unauthenticated Admin Access"
publishedAt: 2026-04-04T20:09:21
summary: "Cisco has released urgent security patches addressing multiple critical and high-severity vulnerabilities, including a maximum-severity authentication bypass in the Integrated Management Controller (IMC) that allows unauthenticated attackers to gain administrative access to affec"
category: "Threat Intelligence"
categories: []
tags:
  - "Black"
  - "EugenLoader"
  - "Mimic Ransomware"
  - "RE#TURGENCE"
heroImage: "/wp-content/uploads/2026/04/cisco-imc-server-rack-scaled.jpg"
wpId: 2172
wpSlug: "critical-cisco-imc-authentication-bypass-enables-unauthenticated-admin-access"
originalLink: "https://bulwarkblack.com/critical-cisco-imc-authentication-bypass-enables-unauthenticated-admin-access"
draft: false
---


<p>Cisco has released urgent security patches addressing multiple critical and high-severity vulnerabilities, including a maximum-severity authentication bypass in the Integrated Management Controller (IMC) that allows unauthenticated attackers to gain administrative access to affected systems.</p>



<h2 class="wp-block-heading">CVE-2026-20093: The Core Vulnerability</h2>



<p>Tracked as <strong>CVE-2026-20093</strong>, this critical vulnerability exists in the Cisco IMC password change functionality. The flaw enables remote, unauthenticated attackers to bypass authentication and access vulnerable systems with full administrative privileges—the highest level of access on the device.</p>



<p>Cisco IMC (also known as CIMC) is a hardware module embedded on the motherboard of Cisco UCS C-Series and E-Series servers. It provides out-of-band management capabilities through multiple interfaces including XML API, web interface (WebUI), and command-line interface (CLI)—even when the operating system is powered off or has crashed.</p>



<p>According to <a href="https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-cimc-auth-bypass-AgG2BxTn" target="_blank" rel="noopener">Cisco&#8217;s security advisory</a>: &#8220;This vulnerability is due to incorrect handling of password change requests. An attacker could exploit this vulnerability by sending a crafted HTTP request to an affected device. A successful exploit could allow the attacker to bypass authentication, alter the passwords of any user on the system, including an Admin user, and gain access to the system as that user.&#8221;</p>



<h2 class="wp-block-heading">Why This Matters</h2>



<p>The severity of this vulnerability cannot be overstated. IMC interfaces typically manage critical server infrastructure, and compromise at this level provides attackers with:</p>



<ul class="wp-block-list">
<li><strong>Complete server control</strong>—even when the OS is offline</li>



<li><strong>Password manipulation</strong>—ability to change any user&#8217;s credentials</li>



<li><strong>Persistence</strong>—out-of-band management access survives OS reinstalls</li>



<li><strong>Lateral movement potential</strong>—compromised management interfaces often provide network pivoting opportunities</li>
</ul>



<h2 class="wp-block-heading">Additional Critical Vulnerabilities Patched</h2>



<p>Alongside CVE-2026-20093, Cisco addressed another critical vulnerability this week:</p>



<p><strong>CVE-2026-20160</strong> affects Cisco Smart Software Manager On-Prem (SSM On-Prem) and enables unauthenticated attackers to achieve remote code execution with root-level privileges by sending crafted requests to the exposed service&#8217;s API.</p>



<p>These patches come on the heels of <strong>CVE-2026-20131</strong>, a maximum-severity RCE vulnerability in Cisco Secure Firewall Management Center (FMC) that the Interlock ransomware gang exploited in zero-day attacks. CISA has added this vulnerability to its Known Exploited Vulnerabilities catalog, mandating federal agencies patch within three days.</p>



<h2 class="wp-block-heading">Immediate Actions Required</h2>



<p>Cisco&#8217;s Product Security Incident Response Team (PSIRT) reports no evidence of in-the-wild exploitation or public proof-of-concept code for CVE-2026-20093—yet. However, the company &#8220;strongly recommends&#8221; immediate patching as <strong>no workarounds exist</strong> to mitigate this vulnerability.</p>



<p><strong>Organizations should:</strong></p>



<ol class="wp-block-list">
<li>Inventory all Cisco UCS C-Series and E-Series servers with IMC interfaces</li>



<li>Apply patches immediately through Cisco&#8217;s official channels</li>



<li>Restrict network access to IMC interfaces to trusted management networks only</li>



<li>Monitor IMC logs for suspicious password change attempts</li>



<li>Audit administrative accounts for unauthorized changes</li>
</ol>



<h2 class="wp-block-heading">The Bigger Picture</h2>



<p>This vulnerability disclosure follows a turbulent period for Cisco security. BleepingComputer recently reported that Cisco&#8217;s internal development environment was breached using credentials stolen during the Trivy supply chain attack—highlighting how even major security vendors face significant threats.</p>



<p>For organizations running Cisco server infrastructure, the message is clear: patch now. Authentication bypass vulnerabilities at the management layer represent some of the most dangerous attack vectors, providing adversaries with persistence and control that survives most remediation efforts.</p>



<p><strong>Source:</strong> <a href="https://www.bleepingcomputer.com/news/security/critical-cisco-imc-auth-bypass-gives-attackers-admin-access/" target="_blank" rel="noopener">BleepingComputer</a></p>
