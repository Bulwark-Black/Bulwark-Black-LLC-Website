---
title: "Nimbus Manticore Shows Iranian APTs Are Moving Faster With AI-Assisted Tooling"
publishedAt: 2026-05-23T01:04:27
summary: "Check Point Research reports that IRGC-affiliated Nimbus Manticore resurfaced with fake Zoom and SQL Developer lures, SEO poisoning, AppDomain hijacking, and a new MiniFast backdoor. Here is what SMBs and government contractors should tighten first."
category: "Cyber Security Blog"
categories:
  - "Cyber Security Blog"
  - "General CTI"
  - "Iranian Cyber Threat Intelligence"
  - "Malware"
tags: []
heroImage: "/wp-content/uploads/2026/05/nimbus-manticore-minifast-iran-apt-featured.png"
wpId: 2297
wpSlug: "nimbus-manticore-minifast-iran-apt-defense"
originalLink: "https://bulwarkblack.com/nimbus-manticore-minifast-iran-apt-defense"
draft: false
---


<p>Iran-nexus intrusion activity is not just louder during geopolitical conflict; it is getting faster and more adaptive. <a href="https://research.checkpoint.com/2026/fast-and-furious-nimbus-manticore-operations-during-the-iranian-conflict/" target="_blank" rel="noopener">Check Point Research reports</a> that IRGC-affiliated Nimbus Manticore, also tracked as UNC1549, resurfaced during the 2026 Iran conflict with updated delivery methods, new malware, and signs of AI-assisted development.</p>



<p>For small businesses and government contractors, the important lesson is practical: the initial access path did not require exotic zero-days. The campaign relied on trusted-looking software flows, career and meeting lures, signed components, search-engine manipulation, and normal Windows persistence mechanisms that can blend into everyday activity.</p>



<h2 class="wp-block-heading">What Check Point observed</h2>



<p>According to Check Point, Nimbus Manticore ran multiple campaign waves around the conflict window. The actor continued using targeted phishing themes against aviation, software, defense, telecommunications, and related organizations, but added several notable changes:</p>



<ul class="wp-block-list">
<li>Fake career and meeting lures that delivered compressed archives or trojanized installers.</li>
<li>Abuse of legitimate Microsoft-signed binaries through .NET AppDomain hijacking.</li>
<li>A trojanized Zoom installation flow designed to look normal while modifying the Zoom scheduled update task.</li>
<li>SEO poisoning around a fake SQL Developer download site to catch users searching for legitimate software.</li>
<li>A newly documented backdoor, MiniFast, with command execution, file transfer, process enumeration, persistence, and polling controls.</li>
<li>Use of valid digital signatures on some campaign files, reinforcing that signed software is not automatically trustworthy.</li>
</ul>



<h2 class="wp-block-heading">Why this matters</h2>



<p>This campaign is a useful warning because it connects three trends that defenders are now seeing across modern intrusions: software trust abuse, identity-adjacent initial access, and faster malware iteration.</p>



<p>The fake Zoom flow is especially relevant. Users expect installers to create update tasks, launch helper processes, and place files in application directories. Nimbus Manticore abused that expectation by waiting for a legitimate-looking scheduled task and then hijacking it for the next stage. That creates a detection problem for teams that only alert on obviously suspicious persistence names.</p>



<p>The SEO-poisoned SQL Developer lure is just as important. Many organizations still treat search-engine downloads as a user-awareness issue instead of an endpoint-control issue. If users can install developer tools from arbitrary search results, attackers can turn ordinary productivity workflows into malware delivery paths.</p>



<h2 class="wp-block-heading">Defensive takeaways for SMBs and government contractors</h2>



<ul class="wp-block-list">
<li><strong>Lock down software installation paths.</strong> Require managed software sources for Zoom, developer tools, VPN clients, remote access tools, and database utilities. Do not rely on users picking the right search result.</li>
<li><strong>Monitor scheduled task changes.</strong> Alert when existing vendor update tasks are modified, especially when command paths shift into user-writable directories or unexpected DLL-loading chains.</li>
<li><strong>Hunt for AppDomain hijacking patterns.</strong> Look for signed executables launched alongside unusual <code>.exe.config</code> files that reference attacker-controlled <code>AppDomainManager</code> classes or DLLs.</li>
<li><strong>Treat code signing as reputation, not proof.</strong> Signed files still need behavioral inspection, source validation, and allowlisting based on business need.</li>
<li><strong>Block user-writable execution where possible.</strong> AppLocker, WDAC, endpoint protection policy, and EDR prevention rules can reduce the value of payloads staged under user profile paths.</li>
<li><strong>Watch for browser-like C2 traffic from odd processes.</strong> MiniFast reportedly impersonated Chrome in HTTP traffic. User-Agent strings should not be trusted when the process, parent process, and network destination do not make sense.</li>
<li><strong>Prioritize aviation, defense, telecom, and engineering-adjacent staff for awareness.</strong> Recruiting, meeting, and software-download lures are especially plausible against these roles.</li>
</ul>



<h2 class="wp-block-heading">Bulwark Black assessment</h2>



<p>Nimbus Manticore is a good example of where Iranian cyber operations are heading: not necessarily noisier malware, but faster adaptation around trusted workflows. The campaign’s value is not only the MiniFast backdoor; it is the way the actor used normal software behavior to reduce suspicion.</p>



<p>For contractors supporting government, defense, aviation, infrastructure, or regulated clients, this should push two controls higher on the roadmap: managed application control and persistence-change monitoring. If a workstation can download a fake tool, execute it from a user directory, and silently alter a scheduled update task, the organization is depending too heavily on user judgment and too lightly on enforceable controls.</p>



<p>Original research: <a href="https://research.checkpoint.com/2026/fast-and-furious-nimbus-manticore-operations-during-the-iranian-conflict/" target="_blank" rel="noopener">Check Point Research — Fast and Furious: Nimbus Manticore Operations During the Iranian Conflict</a>.</p>

