---
title: "StrikeShark Shows Loader Malware Is an Edge-Exposure Problem"
publishedAt: 2026-06-25T15:09:47
summary: "Kaspersky’s StrikeShark research shows how opportunistic exploitation of exposed servers can become a multi-stage SharkLoader and Cobalt Strike intrusion. Here is what SMBs and government contractors should review now."
category: "Cyber Security Blog"
categories:
  - "Cyber Security Blog"
  - "General CTI"
  - "Malware"
  - "Privacy & Security"
tags: []
heroImage: "/wp-content/uploads/2026/06/sharkloader-strikeshark-featured.png"
wpId: 2411
wpSlug: "strikeshark-sharkloader-cobalt-strike-defense"
originalLink: "https://bulwarkblack.com/strikeshark-sharkloader-cobalt-strike-defense"
draft: false
---

<p>Kaspersky’s Securelist team published new research on <a href="https://securelist.com/strikeshark-campaign/120326/" target="_blank" rel="noopener">StrikeShark</a>, a campaign using a previously undocumented malware family called SharkLoader to deploy Cobalt Strike Beacon. The key lesson is not just “new loader, new campaign.” It is that exposed enterprise software, stale public-facing services, and installer-themed lures are still giving operators a reliable path from initial access to hands-on-keyboard activity.</p>
<p>For small businesses, MSPs, and government contractors, this is the kind of threat that sits between vulnerability management and incident response. SharkLoader is not the first loader to abuse DLL side-loading, encrypted components, scheduled tasks, and in-memory execution. What makes the campaign worth attention is the combination of broad victimology, publicly exploitable edge systems, and post-compromise tooling that can quickly turn a single internet-facing foothold into a full network investigation.</p>
<h2>What Kaspersky reported</h2>
<p>Kaspersky says the activity first surfaced during an investigation involving a diplomatic organization in Indonesia, then expanded into additional infections across several regions and sectors. Reported targets included government organizations in Taiwan, software development companies, and entities in Hong Kong, Lebanon, Syria, Colombia, North Macedonia, Nepal, Serbia, and other locations.</p>
<p>The initial access picture is especially important. Kaspersky observed exploitation of internet-facing applications, including Microsoft Exchange, Microsoft SharePoint, Openfire Server, GeoServer, Fortinet FortiOS, Cisco IOS XE Web UI, Zimbra, F5 BIG-IP, Hikvision products, Apache Shiro, and other exposed technologies. The researchers assessed with medium confidence that the actor is primarily using publicly available proof-of-concept exploit code rather than relying on custom exploit development.</p>
<p>That matters because it puts StrikeShark squarely in the “known exposure plus operational discipline” category. The actor does not need a zero-day if the perimeter still has old vulnerabilities, forgotten admin interfaces, or appliances that were patched without a compromise review.</p>
<h2>How SharkLoader works</h2>
<p>SharkLoader’s infection chain relies on multiple components. Kaspersky described abuse of the legitimate Windows <code>SystemSettings.exe</code> application for DLL side-loading, with a malicious <code>SystemSettings.dll</code> acting as the main loader. The chain then decrypts and reflectively loads encrypted modules, including components that carry Cobalt Strike Beacon and API-hooking functionality.</p>
<p>The campaign also used custom droppers disguised as legitimate software installers or update utilities, including Google Update and Cisco AnyConnect-themed samples. In some cases, decoy PDF documents were displayed to make the execution appear normal while malware components were quietly written into user profile paths.</p>
<p>Persistence was also practical rather than exotic. Kaspersky observed scheduled tasks configured to execute the copied legitimate application from the malware working directory, which then triggered the side-loaded SharkLoader DLL. That gives defenders a concrete place to look: scheduled tasks that launch trusted Windows binaries from unusual paths are worth immediate review.</p>
<h2>Why this matters to SMBs and government contractors</h2>
<p>Many smaller organizations and contractors do not have a clean separation between vulnerability management, endpoint detection, and server administration. Edge systems get patched when someone remembers, appliances are managed by different vendors, and “internet-facing inventory” often exists as a spreadsheet that is out of date the day after it is created.</p>
<p>StrikeShark punishes that gap. The reported exploitation targets are the same kinds of systems that frequently sit at the boundary of contractor environments: VPNs, collaboration platforms, web UIs, mail servers, remote administration portals, and line-of-business servers exposed for convenience. Once one of those systems is compromised, the attacker can move into a more familiar playbook: webshells, side-loaded DLLs, scheduled tasks, Cobalt Strike, credential access, and lateral movement.</p>
<h2>Defensive takeaways</h2>
<ul>
<li><strong>Rebuild the internet-facing inventory.</strong> Do not rely only on asset records. Validate externally exposed systems from the outside, including cloud-hosted management panels, forgotten subdomains, partner-managed appliances, and legacy web applications.</li>
<li><strong>Patch and then investigate.</strong> If a vulnerable Exchange, SharePoint, Fortinet, Cisco IOS XE, Openfire, GeoServer, Zimbra, F5, or similar system was exposed during an exploitation window, treat patching as step one. Review logs, web roots, scheduled tasks, new services, unusual binaries, and outbound traffic.</li>
<li><strong>Hunt for trusted binaries in strange paths.</strong> Look for <code>SystemSettings.exe</code> or other legitimate Windows binaries running from <code>ProgramData</code>, <code>AppData</code>, temporary directories, or vendor-looking folders that do not match normal software installation paths.</li>
<li><strong>Review scheduled tasks aggressively.</strong> Tasks with update-themed names, unusual SIDs, high-frequency triggers, or commands launching signed binaries from user-writable paths should be escalated.</li>
<li><strong>Watch for Cobalt Strike behavior, not just hashes.</strong> SharkLoader components will change. Beacon behavior, suspicious memory allocation, process injection, anomalous DNS/HTTP patterns, and lateral movement tooling are more durable signals.</li>
<li><strong>Tighten installer trust.</strong> If users download VPN clients, update tools, or vendor installers from email links or search results, that is a policy and awareness problem. Provide known-good internal download locations for common business tools.</li>
</ul>
<h2>Bulwark Black assessment</h2>
<p>StrikeShark is a good reminder that perimeter exposure remains one of the cheapest paths into serious environments. The malware has interesting engineering, but the business risk is simpler: a neglected edge service can become a Cobalt Strike foothold, and a convincing installer lure can still bypass human trust controls.</p>
<p>For organizations supporting government work, this should trigger a quick control check: current external attack surface inventory, prioritized patch SLAs for internet-facing systems, EDR coverage on servers, scheduled-task monitoring, and a documented process for deciding when a patched edge device needs a rebuild or forensic review. If those pieces are missing, the next “new loader” report will not be the real problem. The real problem will be that the environment gave the loader an easy place to land.</p>
<p><strong>Original source:</strong> <a href="https://securelist.com/strikeshark-campaign/120326/" target="_blank" rel="noopener">Kaspersky Securelist — StrikeShark: investigating a new campaign delivering Cobalt Strike through SharkLoader</a>.</p>
