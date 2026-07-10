---
title: "Velvet Ant Shows Authentication Infrastructure Is Critical Infrastructure"
publishedAt: 2026-06-13T15:04:04
summary: "Velvet Ant’s Operation Highland shows why PAM, OpenSSH, jump hosts, and proxy paths deserve the same defensive priority as identity providers and domain controllers."
category: "Chinese Cyber Threat Intelligence"
categories:
  - "Chinese Cyber Threat Intelligence"
  - "Cyber Security Blog"
  - "General CTI"
  - "Privacy & Security"
tags: []
heroImage: "/wp-content/uploads/2026/06/velvet-ant-operation-highland-authentication-stack-featured.png"
wpId: 2381
wpSlug: "velvet-ant-operation-highland-authentication-stack-defense"
originalLink: "https://bulwarkblack.com/velvet-ant-operation-highland-authentication-stack-defense"
draft: false
---


<p>Sygnia’s reporting on <a href="https://www.sygnia.co/blog/operation-highland-velvet-ant/" target="_blank" rel="noreferrer noopener">Velvet Ant’s Operation Highland</a> is a useful reminder that “isolated” does not mean unreachable. The China-nexus actor reportedly maintained access in an internal critical infrastructure environment for nearly a decade by chaining exposed systems, internal pivots, and authentication-stack compromise.</p>



<p>The most important lesson for small and mid-sized organizations is not that every environment needs nation-state-level tooling. It is that authentication infrastructure is business-critical infrastructure. If PAM modules, OpenSSH binaries, VPN gateways, identity providers, or jump hosts are trusted blindly, an attacker who owns them can make normal administrative activity work for the intrusion instead of against it.</p>



<h2 class="wp-block-heading">What Sygnia Reported</h2>



<p>According to Sygnia, Operation Highland began with compromised internet-facing systems and moved inward through a deliberately engineered access chain. The actor used modified GS-Netcat for covert access, custom SOCKS5 proxying for tunneling, and Nginx/FastCGI modifications to build an execution path toward a segregated critical infrastructure network with no direct internet connectivity.</p>



<p>Once inside, the actor reportedly modified Linux Pluggable Authentication Modules and OpenSSH components. That matters because PAM and SSH sit in the path of normal administration. Backdoored authentication components can harvest credentials, accept attacker-controlled passwords, observe administrator activity, and survive ordinary password rotations.</p>



<p>BleepingComputer also summarized the campaign and noted the cleanup challenge: replacing tampered authentication components can break remote access or lock administrators out if remediation is not tested carefully first. That is the part defenders should pay attention to. Recovery is harder when the systems used to administer recovery are part of the compromise.</p>



<h2 class="wp-block-heading">Why It Matters for SMBs and Government Contractors</h2>



<p>Most organizations do not have a formal “authentication integrity” program. They patch servers, rotate credentials, enable MFA where possible, and monitor endpoint alerts. Those are necessary controls, but they may not catch a carefully modified PAM library, trojanized SSH binary, or quietly altered reverse-proxy path.</p>



<p>For government contractors, manufacturers, utilities, healthcare providers, and professional services firms, the risk is especially sharp. Segmented environments often depend on jump hosts, admin workstations, SSH, VPN, privileged accounts, and service accounts. If those trust paths are altered, segmentation can become a map for the attacker rather than a barrier.</p>



<h2 class="wp-block-heading">Defensive Takeaways</h2>



<ul class="wp-block-list">
<li><strong>Treat authentication components as high-value assets.</strong> Monitor PAM modules, OpenSSH binaries, VPN appliances, identity provider connectors, jump hosts, and privileged access tooling with the same seriousness as domain controllers.</li>
<li><strong>Baseline file integrity on critical systems.</strong> Use package verification, cryptographic hashes, EDR telemetry, and file integrity monitoring for authentication libraries, SSH binaries, startup scripts, Nginx configurations, systemd units, and reverse-proxy rules.</li>
<li><strong>Validate segmentation paths.</strong> Do not assume “no internet access” equals no remote path. Map which exposed servers can reach internal assets, management networks, backups, and admin interfaces.</li>
<li><strong>Harden and monitor jump infrastructure.</strong> Centralize admin access, require phishing-resistant MFA where possible, record privileged sessions, and alert on new tunnels, unexpected listening ports, and unusual proxy behavior.</li>
<li><strong>Prepare offline recovery.</strong> Keep known-good images, immutable backups, tested rollback procedures, and break-glass access plans that do not depend on potentially compromised authentication paths.</li>
<li><strong>Practice binary replacement in a lab.</strong> If authentication components are suspected to be tampered with, test replacement and rollback before touching production systems.</li>
</ul>



<h2 class="wp-block-heading">Bulwark Black Assessment</h2>



<p>Operation Highland is less about one exotic tool and more about a durable attacker mindset: control the trust layer, then let defenders keep using it. That is why authentication-stack integrity should be part of incident response, compliance readiness, and security architecture reviews.</p>



<p>The practical move is to expand “identity security” beyond accounts and MFA. Identity also includes the binaries, libraries, proxies, jump boxes, and logs that make authentication work. If those layers are not measured, baselined, and recoverable, an attacker can turn normal administration into long-term persistence.</p>



<p><strong>Original source:</strong> <a href="https://www.sygnia.co/blog/operation-highland-velvet-ant/" target="_blank" rel="noreferrer noopener">Sygnia — Velvet Ant’s Operation Highland</a>. Additional reporting: <a href="https://www.bleepingcomputer.com/news/security/chinese-hackers-hijack-auth-flow-spy-on-isolated-network-for-a-decade/" target="_blank" rel="noreferrer noopener">BleepingComputer</a>.</p>

