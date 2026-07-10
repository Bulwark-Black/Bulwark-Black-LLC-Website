---
title: "Showboat and JFMBackdoor Show Telecom Intrusions Are Built for Pivoting"
publishedAt: 2026-06-01T01:06:17
summary: "Lumen and PwC reporting on Showboat, Red Lamassu, and JFMBackdoor shows how China-linked telecom intrusions combine Linux footholds, proxying, and Windows backdoors. Here is what SMBs and government contractors should harden now."
category: "Chinese Cyber Threat Intelligence"
categories:
  - "Chinese Cyber Threat Intelligence"
  - "Cyber Security Blog"
  - "General CTI"
  - "Malware"
tags: []
heroImage: "/wp-content/uploads/2026/06/red-lamassu-showboat-telecom-cti-featured.png"
wpId: 2327
wpSlug: "showboat-jfmbackdoor-telecom-intrusion-defense"
originalLink: "https://bulwarkblack.com/showboat-jfmbackdoor-telecom-intrusion-defense"
draft: false
---

<p>Recent paired research from Lumen Black Lotus Labs and PwC is a useful reminder that telecom intrusions are rarely about a single malware sample. The reporting connects a China-linked activity set tracked by PwC as Red Lamassu, also known publicly as Calypso, to tooling built for long-term access across both Linux and Windows environments.</p>
<p>Lumen detailed <a href="https://www.lumen.com/blog/en-us/introducing-showboat-a-new-malware-family-taunts-defenses-and-targets-international-telecom-firms" target="_blank" rel="noopener">Showboat</a>, a Linux post-exploitation framework seen in activity targeting telecommunications organizations. PwC’s companion report on <a href="https://www.pwc.com/gx/en/issues/cybersecurity/cyber-threat-intelligence/red-lamassu-open-season.html" target="_blank" rel="noopener">Red Lamassu and JFMBackdoor</a> expands the picture with a Windows backdoor delivered through DLL side-loading. Taken together, the reports point to an operator focused on persistence, proxying, file movement, screenshots, remote shells, and internal network reach.</p>
<h2>What was reported</h2>
<p>Lumen describes Showboat as a modular Linux implant used as a foothold inside telecommunications environments. Its capabilities include remote shell access, file transfer, SOCKS5 proxying, port mapping, persistence, process hiding, and C2 switching. Those are not “smash and grab” features; they are designed to keep access alive and help the operator reach systems that are not directly exposed to the internet.</p>
<p>PwC’s report adds a Windows-side view of the same broader activity. Their JFMBackdoor analysis describes a DLL side-loading chain that ultimately loads a full-featured backdoor with remote shell capability, file and registry operations, process and service management, proxying, screenshot capture, and self-removal. PwC ties the activity to telecom and government-adjacent targeting across parts of Asia, with infrastructure and tooling overlaps that align with Red Lamassu operations.</p>
<h2>Why this matters for SMBs and government contractors</h2>
<p>Most small and mid-sized organizations are not telecommunications carriers, but the tradecraft still matters. Telecom-targeted tooling often becomes a blueprint for intrusion behavior elsewhere: compromise an edge or server foothold, hide on a Linux system, proxy deeper into the LAN, then use Windows tooling to expand access and collect intelligence.</p>
<p>For government contractors, the bigger lesson is that Linux infrastructure cannot be treated as “lower risk” simply because it is not part of the standard Windows endpoint stack. VPN appliances, web servers, identity infrastructure, jump hosts, monitoring systems, and internal Linux utilities can all become pivot points. If those systems are lightly monitored, an attacker can use them as quiet infrastructure inside the business.</p>
<h2>Defensive takeaways</h2>
<ul>
<li><strong>Monitor Linux servers like endpoints.</strong> Collect process, service, authentication, outbound connection, and file integrity telemetry from Linux systems that touch production, identity, remote access, or customer environments.</li>
<li><strong>Look for unexpected proxy behavior.</strong> SOCKS, port mapping, unusual outbound connections, and internal-to-internal tunneling deserve attention, especially from servers that should have narrow communication patterns.</li>
<li><strong>Hunt for DLL side-loading paths.</strong> Windows detections should flag unusual DLL loads from writable directories, suspicious parent-child process chains, and legitimate binaries running from temporary or user-writable paths.</li>
<li><strong>Baseline internet-facing infrastructure.</strong> Track certificates, listening ports, exposed admin panels, and externally reachable services. Actor infrastructure in this reporting leaned heavily on reusable network patterns; defenders can apply the same clustering mindset internally.</li>
<li><strong>Separate admin paths from production traffic.</strong> If a compromised Linux host can reach domain controllers, backup systems, file shares, or management interfaces without additional controls, it is not just a server compromise — it is an enterprise compromise path.</li>
<li><strong>Practice “foothold containment.”</strong> Incident response plans should include rapid isolation of Linux servers, credential rotation for service accounts, review of SSH keys, and validation of scheduled jobs, systemd services, and persistence mechanisms.</li>
</ul>
<h2>Bulwark Black assessment</h2>
<p>The Showboat and JFMBackdoor reporting is high-signal because it shows the operational stack, not just a malware name. Linux footholds, proxy functions, Windows backdoors, screenshot capture, service manipulation, and anti-forensic cleanup all support the same objective: durable access inside networks where connectivity itself is valuable intelligence.</p>
<p>The practical move for defenders is to treat every server with routing, authentication, or management reach as a monitored endpoint. If your security program only sees Windows laptops and ignores Linux infrastructure, network appliances, and internal jump paths, you are leaving the exact terrain these actors prefer uncovered.</p>
<p><em>Sources: <a href="https://www.lumen.com/blog/en-us/introducing-showboat-a-new-malware-family-taunts-defenses-and-targets-international-telecom-firms" target="_blank" rel="noopener">Lumen Black Lotus Labs on Showboat</a>; <a href="https://www.pwc.com/gx/en/issues/cybersecurity/cyber-threat-intelligence/red-lamassu-open-season.html" target="_blank" rel="noopener">PwC Threat Intelligence on Red Lamassu / JFMBackdoor</a>.</em></p>
