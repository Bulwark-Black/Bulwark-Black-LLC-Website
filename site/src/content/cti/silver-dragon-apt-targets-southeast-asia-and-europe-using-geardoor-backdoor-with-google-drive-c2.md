---
title: "Silver Dragon APT Targets Southeast Asia and Europe Using GearDoor Backdoor with Google Drive C2"
publishedAt: 2026-03-03T21:03:12
summary: "Check Point Research has unveiled a sophisticated Chinese APT campaign dubbed Silver Dragon that has been actively targeting government entities and organizations across Southeast Asia and Europe since mid-2024. The threat actor operates within the umbrella of Chinese-nexus APT41"
category: "Chinese Cyber Threat Intelligence"
categories:
  - "Chinese Cyber Threat Intelligence"
tags: []
heroImage: "/wp-content/uploads/2026/03/silver-dragon-apt.jpg"
wpId: 1970
wpSlug: "silver-dragon-apt-targets-southeast-asia-and-europe-using-geardoor-backdoor-with-google-drive-c2"
originalLink: "https://bulwarkblack.com/silver-dragon-apt-targets-southeast-asia-and-europe-using-geardoor-backdoor-with-google-drive-c2"
draft: false
---

<p>Check Point Research has unveiled a sophisticated Chinese APT campaign dubbed <strong>Silver Dragon</strong> that has been actively targeting government entities and organizations across Southeast Asia and Europe since mid-2024. The threat actor operates within the umbrella of Chinese-nexus APT41 and employs multiple infection chains to deliver custom backdoors designed for covert data exfiltration.</p>
<h2>Campaign Overview</h2>
<p>Silver Dragon gains initial access through two primary vectors: exploiting public-facing internet servers and delivering phishing emails with malicious attachments. Once inside, the group establishes persistence by hijacking legitimate Windows services, allowing malware processes to blend seamlessly into normal system activity.</p>
<p>The campaign demonstrates a high level of operational sophistication, with attackers deploying Cobalt Strike beacons for initial foothold establishment and then pivoting to custom tools for long-term access and data theft.</p>
<h2>Custom Malware Arsenal</h2>
<h3>GearDoor Backdoor</h3>
<p>Silver Dragon&#8217;s most notable tool is <strong>GearDoor</strong>, a new backdoor that leverages Google Drive as its command-and-control channel. By routing malicious traffic through a widely trusted cloud service, the malware enables covert communication that can bypass traditional network security controls and URL filtering.</p>
<h3>Supporting Tools</h3>
<ul>
<li><strong>SSHcmd:</strong> A command-line utility functioning as a wrapper for SSH to facilitate remote access</li>
<li><strong>SliverScreen:</strong> A screen-monitoring tool used to capture periodic screenshots of user activity for intelligence gathering</li>
<li><strong>BamboLoader:</strong> An obfuscated C++ loader using RC4 encryption and LZNT1 compression with process injection capabilities</li>
<li><strong>MonikerLoader:</strong> A .NET-based loader with Brainfuck-based string obfuscation for payload delivery</li>
</ul>
<h2>Infection Chains</h2>
<h3>AppDomain Hijacking</h3>
<p>The group exploits <a href="https://attack.mitre.org/techniques/T1574/014/" target="_blank" rel="noopener">T1574.014</a> (AppDomain Manager Injection) by deploying malicious .NET DLLs alongside legitimate Windows utilities like dfsvc.exe and tzsync.exe. By placing a malicious configuration file in the same directory as these binaries, the attackers ensure their loader executes every time the legitimate process runs.</p>
<h3>Service DLL Deployment</h3>
<p>A more direct approach involves hijacking Windows services through registry manipulation. The attackers abuse legitimate services including:</p>
<ul>
<li>wuausrv (Windows Update Service)</li>
<li>bthsrv (Bluetooth Update Service)</li>
<li>COMSysAppSrv (COM+ System Application Service)</li>
<li>DfSvc (.NET Framework ClickOnce Service)</li>
<li>tzsync (Windows Updates Timezone Service)</li>
</ul>
<h3>Phishing Campaign Targeting Uzbekistan</h3>
<p>A third infection chain targets government entities in Uzbekistan through weaponized LNK attachments exceeding 1 MB in size. Upon execution, embedded PowerShell code extracts multiple payloads including a decoy document, legitimate executables for DLL sideloading, and encrypted Cobalt Strike shellcode.</p>
<h2>Technical Indicators</h2>
<p><strong>Cobalt Strike Infrastructure:</strong> The majority of observed implants communicate via DNS tunneling to domains including ns1.onedriveconsole[.]com and ns1.exchange4study[.]com, with some samples using HTTP-based communication through Cloudflare-protected servers.</p>
<p><strong>Evasion Techniques:</strong></p>
<ul>
<li>Control flow flattening in BamboLoader</li>
<li>Brainfuck-based string obfuscation in MonikerLoader</li>
<li>Encrypted payloads with RC4 and single-byte XOR</li>
<li>Process injection into legitimate Windows binaries</li>
<li>DNS tunneling for C2 communication</li>
</ul>
<h2>Connection to APT41</h2>
<p>Check Point Research assesses that Silver Dragon operates within the APT41 umbrella based on shared infrastructure, similar tooling patterns, and targeting alignment with previous APT41 campaigns. APT41 is a well-documented Chinese state-sponsored group known for conducting both espionage operations and financially motivated attacks.</p>
<h2>Recommendations</h2>
<p>Organizations in targeted regions should:</p>
<ul>
<li>Monitor for suspicious AppDomain configuration files near legitimate Windows binaries</li>
<li>Audit Windows service registry keys for unauthorized modifications</li>
<li>Implement DNS monitoring to detect tunneling activity</li>
<li>Block or monitor Google Drive API access from unexpected processes</li>
<li>Train employees to recognize phishing emails with large LNK attachments</li>
<li>Deploy endpoint detection rules for Cobalt Strike beacon patterns</li>
</ul>
<p><strong>Source:</strong> <a href="https://research.checkpoint.com/2026/silver-dragon-targets-organizations-in-southeast-asia-and-europe/" target="_blank" rel="noopener">Check Point Research</a></p>
