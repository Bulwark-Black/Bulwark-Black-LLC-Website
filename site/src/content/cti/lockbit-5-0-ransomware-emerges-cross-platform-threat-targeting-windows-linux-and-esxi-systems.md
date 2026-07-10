---
title: "LockBit 5.0 Ransomware Emerges: Cross-Platform Threat Targeting Windows, Linux, and ESXi Systems"
publishedAt: 2026-02-17T21:03:56
summary: "The Acronis Threat Research Unit (TRU) has identified a significantly enhanced version of the notorious LockBit ransomware, designated LockBit 5.0, actively being deployed in campaigns against enterprise environments. The latest variant introduces expanded cross-platform capabili"
category: "Threat Intelligence"
categories: []
tags: []
heroImage: "/wp-content/uploads/2026/02/lockbit-5-keyboard-lock-scaled.jpg"
wpId: 1889
wpSlug: "lockbit-5-0-ransomware-emerges-cross-platform-threat-targeting-windows-linux-and-esxi-systems"
originalLink: "https://bulwarkblack.com/lockbit-5-0-ransomware-emerges-cross-platform-threat-targeting-windows-linux-and-esxi-systems"
draft: false
---

<p><strong>The Acronis Threat Research Unit (TRU) has identified a significantly enhanced version of the notorious LockBit ransomware, designated LockBit 5.0, actively being deployed in campaigns against enterprise environments. The latest variant introduces expanded cross-platform capabilities, enabling attackers to target Windows, Linux, and VMware ESXi systems within a single coordinated attack.</strong></p>
<h2>A New Chapter in Ransomware Evolution</h2>
<p>LockBit 5.0, released in September 2025, continues the group&#8217;s long-running evolution from its early &#8220;ABCD&#8221; branding in 2019 through versions 2.0, 3.0 (&#8220;LockBit Black&#8221;), and 4.0. Each iteration has added new features, and this latest version is no exception. The group&#8217;s operators promote version 5.0 as faster, more modular, and capable of working on &#8220;all versions of Proxmox,&#8221; positioning it directly against modern virtualization deployments.</p>
<p>According to analysis, LockBit 5.0 introduces dedicated builds tailored for enterprise environments, reflecting the continued evolution of ransomware-as-a-service (RaaS) operations. By supporting multiple operating systems and virtualization platforms, the threat actors are positioning themselves to compromise endpoints, servers, and hypervisors simultaneously—significantly increasing the potential scale and severity of attacks.</p>
<h2>Technical Analysis: Three Variants, One Goal</h2>
<h3>Unified Cryptographic Design</h3>
<p>All three variants—Windows, Linux, and ESXi—share the same cryptographic design, combining <strong>XChaCha20</strong> for fast symmetric encryption with <strong>Curve25519</strong> for key exchange. Encrypted files receive a random 16-character extension plus trailing metadata, and all variants drop an identical ransom note. The ransomware also supports free-space wiping by creating temporary files filled with zero bytes, hindering recovery from disk slack space.</p>
<h3>Windows: Heavy Defense Evasion</h3>
<p>The Windows variant stands out for its extensive defense evasion capabilities:</p>
<ul>
<li><strong>DLL Unhooking and Process Hollowing:</strong> Evades endpoint detection tools</li>
<li><strong>ETW Patching:</strong> Overwrites EtwEventWrite with a return instruction to blind security monitoring</li>
<li><strong>Event Log Clearing:</strong> Uses EvtClearLog to wipe Windows event logs</li>
<li><strong>Locale Checks:</strong> Avoids systems associated with Russian-speaking regions</li>
<li><strong>Self-Deletion:</strong> Removes itself via file rename and disposition calls after encryption</li>
</ul>
<h3>Linux and ESXi: Targeting Virtualization</h3>
<p>The Linux and ESXi variants are not packed but heavily encrypt strings and implement strong anti-analysis logic, including checks against debugging tools like gdb, lldb, strace, and ltrace. The ESXi build adds virtualization-specific behavior:</p>
<ul>
<li>Verifies it is running on VMware ESXi</li>
<li>Scans the /vmfs/ directory for virtual machine assets</li>
<li>Can terminate VMs to release locked files</li>
<li>Offers parameters to skip or target specific VM IDs</li>
</ul>
<p>This makes the ESXi variant capable of crippling dozens of virtual servers from a single hypervisor host.</p>
<h2>Victim Scope and Targeting</h2>
<p>Victim data from LockBit&#8217;s leak site lists at least <strong>60 organizations</strong> as of early December 2025, spanning private businesses, healthcare, financial services, manufacturing, government, and education. There is a clear concentration of victims in the United States, though cases appear in other regions as well.</p>
<p>The group allows affiliates to hit virtually any target—including critical infrastructure and medical facilities—while prohibiting attacks in post-Soviet countries and pushing responsibility for victim choice entirely onto its partners.</p>
<h2>Infrastructure Overlaps</h2>
<p>TRU researchers linked LockBit 5.0 infrastructure to historical SmokeLoader activity: one of the IPs hosting LockBit sites was previously associated with SmokeLoader samples and the rodericwalter[.]com domain. Since SmokeLoader is a widely used backdoor and loader, this overlap highlights how criminal ecosystems increasingly share or rent servers to accelerate campaigns and obscure true ownership.</p>
<h2>Recommendations for Defenders</h2>
<p>Acronis TRU advises organizations to adopt a layered security strategy:</p>
<ul>
<li>Comprehensive endpoint and server protection across all platforms</li>
<li>Network segmentation to limit lateral movement</li>
<li>Strong access controls including multi-factor authentication</li>
<li>Regularly tested offline backups—critical for recovery</li>
<li>Cross-environment visibility across Windows, Linux, and virtualized infrastructure</li>
<li>Hypervisor-specific hardening for ESXi and Proxmox environments</li>
</ul>
<p>The unified codebase, common crypto stack, and strong support for Windows, Linux, ESXi, and Proxmox environments show that LockBit 5.0 is engineered for broad enterprise impact rather than single-platform hits. Defenders need visibility and hardening across endpoints, hypervisors, and backups—not just traditional Windows workstations.</p>
<p><em>Source: <a href="https://www.helpnetsecurity.com/2026/02/16/lockbit-5-0-ransomware-windows-linux-esxi/" target="_blank" rel="noopener">Help Net Security</a>, <a href="https://gbhackers.com/lockbit-5-0-ransomware/" target="_blank" rel="noopener">GBHackers</a></em></p>
