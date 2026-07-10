---
title: "Chinese APT Groups Leverage PeckBirdy JavaScript C2 Framework Since 2023"
publishedAt: 2026-01-27T23:07:51
summary: "Trend Micro researchers have discovered PeckBirdy, a flexible JScript-based C2 framework used by China-linked APT actors to target gambling industries and Asian government entities since 2023."
category: "Chinese Cyber Threat Intelligence"
categories:
  - "Chinese Cyber Threat Intelligence"
tags:
  - "APT"
  - "C2 Framework"
  - "China"
  - "Cyber Espionage"
  - "Government Targeting"
  - "JavaScript"
  - "PeckBirdy"
  - "Trend Micro"
heroImage: "/wp-content/uploads/2026/01/china-peckbirdy-apt.png"
wpId: 1732
wpSlug: "chinese-apt-groups-leverage-peckbirdy-javascript-c2-framework-since-2023"
originalLink: "https://bulwarkblack.com/chinese-apt-groups-leverage-peckbirdy-javascript-c2-framework-since-2023"
draft: false
---


<p style="font-style:italic;font-weight:400"><em>Source: <a href="https://thehackernews.com/2026/01/china-linked-hackers-have-used.html">The Hacker News</a></em></p>



<p>Cybersecurity researchers at Trend Micro have uncovered a sophisticated JScript-based command-and-control (C2) framework called <strong>PeckBirdy</strong> that has been actively used by China-aligned APT actors since 2023. The flexible framework has been deployed against gambling industries and government entities across Asia.</p>



<h2 class="wp-block-heading">A Versatile Attack Framework</h2>



<p>PeckBirdy stands out for its remarkable flexibility, capable of running across multiple execution environments including web browsers, MSHTA, WScript, Classic ASP, Node JS, and .NET via ScriptControl. This versatility allows threat actors to leverage living-off-the-land binaries (LOLBins) to evade detection.</p>



<p>The framework uses WebSocket protocol for C2 communications by default, with fallback mechanisms using Adobe Flash ActiveX objects or Comet. Each victim receives a unique ID that persists across executions, enabling threat actors to maintain persistent access.</p>



<h2 class="wp-block-heading">Two Distinct Campaigns</h2>



<p>Researchers identified two intrusion sets leveraging PeckBirdy:</p>



<ul class="wp-block-list">
<li><strong>SHADOW-VOID-044:</strong> Targets Chinese gambling websites with malicious script injections, serving fake Chrome update pages to deliver malware</li>
<li><strong>SHADOW-EARTH-045:</strong> Focuses on Asian government entities and private organizations, including credential harvesting through injected scripts on government login pages</li>
</ul>



<h2 class="wp-block-heading">Associated Malware and Attribution</h2>



<p>The campaigns deploy additional payloads including:</p>



<ul class="wp-block-list">
<li><strong>HOLODONUT:</strong> A .NET-based modular backdoor with plugin capabilities</li>
<li><strong>MKDOOR:</strong> A modular backdoor for loading and executing server-provided modules</li>
<li>Exploitation scripts for CVE-2020-16040 (Chrome V8 engine vulnerability)</li>
<li>Reverse shell scripts via TCP sockets</li>
</ul>



<p>Infrastructure analysis links these campaigns to multiple China-aligned threat actors including UNC3569, TheWizards, Earth Lusca (Aquatic Panda), and potentially APT41.</p>



<h2 class="wp-block-heading">Detection Challenges</h2>



<p>Trend Micro emphasizes the significant challenges in detecting JavaScript-based frameworks like PeckBirdy. The use of dynamically generated, runtime-injected code and the absence of persistent file artifacts enables these frameworks to evade traditional endpoint security controls.</p>



<p>Organizations should implement behavioral analysis solutions capable of detecting anomalous script execution patterns and maintain vigilance against watering hole attacks targeting industry-specific websites.</p>
