---
title: "EnCase Forensic Driver Weaponized: BYOVD Attack Targets 59 EDR Tools Through SonicWall VPN Breach"
publishedAt: 2026-02-05T02:02:23
summary: "Security researchers at Huntress have documented a sophisticated intrusion where threat actors leveraged compromised SonicWall SSLVPN credentials to deploy a custom EDR killer that abuses a legitimate forensic driver from Guidance Software’s EnCase to terminate security processes"
category: "General CTI"
categories:
  - "General CTI"
tags: []
heroImage: "/wp-content/uploads/2026/02/edr-killer-byovd-attack.jpg"
wpId: 1806
wpSlug: "encase-forensic-driver-weaponized-byovd-attack-targets-59-edr-tools-through-sonicwall-vpn-breach"
originalLink: "https://bulwarkblack.com/encase-forensic-driver-weaponized-byovd-attack-targets-59-edr-tools-through-sonicwall-vpn-breach"
draft: false
---

<p>Security researchers at Huntress have documented a sophisticated intrusion where threat actors leveraged compromised SonicWall SSLVPN credentials to deploy a custom EDR killer that abuses a legitimate forensic driver from Guidance Software&#8217;s EnCase to terminate security processes from kernel mode.</p>
<h2>Attack Overview</h2>
<p>The attack, disrupted in early February 2026 before ransomware deployment, demonstrates a growing trend in the threat landscape: adversaries weaponizing signed, legitimate drivers to disable endpoint security. The technique, known as <strong>Bring Your Own Vulnerable Driver (BYOVD)</strong>, allows attackers to bypass Windows Driver Signature Enforcement by loading drivers with valid cryptographic signatures, even if their certificates have been revoked.</p>
<h2>Technical Analysis</h2>
<h3>Initial Access</h3>
<p>Huntress&#8217;s Managed SIEM captured the full intrusion timeline through SonicWall telemetry. The threat actor successfully authenticated to the victim&#8217;s SSLVPN from IP address <code>69.10.60[.]250</code>, after a denied portal login attempt from <code>193.160.216[.]221</code> just one minute prior.</p>
<h3>The EDR Killer Binary</h3>
<p>The deployed malware is a 64-bit Windows executable masquerading as a firmware update utility. What makes it particularly evasive is its <strong>wordlist-based encoding scheme</strong>. Rather than storing the embedded kernel driver as raw bytes or using traditional encryption, the developers created a 256-word dictionary where each English word corresponds to a specific byte value.</p>
<p>The encoded driver payload is stored as a 384,528-byte string of space-separated English words. For example, &#8220;block both choice about&#8221; decodes to <code>4D 5A 90 00</code> — the MZ signature of a DOS executable header.</p>
<h3>Why This Works: The Certificate Gap</h3>
<p>The EnCase forensic driver (EnPortv.sys) exploited in this attack has a signing certificate that <strong>expired in January 2010</strong> and was subsequently revoked. However, Windows still accepts the signature because:</p>
<ul>
<li><strong>No CRL Checking:</strong> The Windows kernel does not check Certificate Revocation Lists when loading drivers</li>
<li><strong>July 2015 Exception:</strong> Drivers signed with certificates issued before July 29, 2015 that chain to supported cross-signed CAs are still permitted</li>
<li><strong>Valid Timestamp:</strong> The driver contains a timestamp from when the certificate was valid, so the signature remains valid indefinitely</li>
</ul>
<h3>Target List: 59 Security Products</h3>
<p>The EDR killer maintains a list of <strong>59 target process names</strong> hashed using FNV-1a. Major endpoint security vendors targeted include:</p>
<ul>
<li>CrowdStrike (CSFalconService, csagent)</li>
<li>SentinelOne (SentinelAgent, SentinelServiceHost)</li>
<li>Carbon Black (RepMgr, RepWAV)</li>
<li>Symantec (ccSvcHst, SepMasterService)</li>
<li>Microsoft Defender (MsMpEng, MsSense)</li>
<li>McAfee (masvc, mfetp)</li>
<li>Sophos (SAVAdminService, SavService)</li>
<li>Trend Micro (PccNTMon, NTRTScan)</li>
<li>Kaspersky (avp, avpui)</li>
<li>ESET (ekrn, egui)</li>
</ul>
<p>Once the kernel driver is loaded, it exposes an IOCTL interface allowing the usermode component to terminate any process directly from kernel mode, bypassing Protected Process Light (PPL) protections.</p>
<h2>Persistence Mechanism</h2>
<p>The malware establishes persistence by registering the driver as a Windows kernel service with deceptive naming:</p>
<ul>
<li><strong>Service Name:</strong> OemHwUpd</li>
<li><strong>Display Name:</strong> OEM Hardware HAL Service</li>
<li><strong>Path:</strong> C:\ProgramData\OEM\Firmware\OemHwUpd.sys</li>
</ul>
<p>Anti-forensic measures include timestomping (copying timestamps from ntdll.dll) and setting hidden/system file attributes.</p>
<h2>Defensive Recommendations</h2>
<ol>
<li><strong>Enable MFA on all remote access services</strong> — the initial compromise occurred due to lack of multi-factor authentication</li>
<li><strong>Enable HVCI/Memory Integrity</strong> — ensures Microsoft&#8217;s Vulnerable Driver Blocklist is enforced</li>
<li><strong>Deploy WDAC driver block rules</strong> — use Microsoft&#8217;s recommended driver block rules</li>
<li><strong>Enable ASR rule for vulnerable drivers</strong> — &#8220;Block abuse of exploited vulnerable signed drivers&#8221;</li>
<li><strong>Monitor for suspicious service creation</strong> — alert on services mimicking OEM/hardware components</li>
</ol>
<h2>Indicators of Compromise</h2>
<table>
<tr>
<th>Indicator</th>
<th>Type</th>
</tr>
<tr>
<td>C:\ProgramData\OEM\Firmware\OemHwUpd.sys</td>
<td>File Path</td>
</tr>
<tr>
<td>OemHwUpd</td>
<td>Service Name</td>
</tr>
<tr>
<td>69.10.60[.]250</td>
<td>Threat Actor IP</td>
</tr>
<tr>
<td>193.160.216[.]221</td>
<td>Threat Actor IP</td>
</tr>
</table>
<p><em>This attack underscores the urgent need for organizations to implement kernel-level protections and maintain vigilance over driver loading policies. As BYOVD techniques become standard components of the ransomware playbook, defenders must adapt by leveraging Microsoft&#8217;s driver blocklist and attack surface reduction rules.</em></p>
<p><strong>Source:</strong> <a href="https://www.huntress.com/blog/encase-byovd-edr-killer" target="_blank" rel="noopener">Huntress Blog</a></p>
