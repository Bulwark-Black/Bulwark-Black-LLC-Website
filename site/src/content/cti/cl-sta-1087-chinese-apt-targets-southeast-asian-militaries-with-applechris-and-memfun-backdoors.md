---
title: "CL-STA-1087: Chinese APT Targets Southeast Asian Militaries with AppleChris and MemFun Backdoors"
publishedAt: 2026-04-03T20:06:25
summary: "Unit 42 researchers have uncovered a sophisticated Chinese espionage campaign, designated CL-STA-1087, that has been systematically targeting military organizations across Southeast Asia since at least 2020. The state-sponsored operation demonstrates exceptional operational patie"
category: "Chinese Cyber Threat Intelligence"
categories:
  - "Chinese Cyber Threat Intelligence"
tags:
  - "AppleChris"
  - "CL-STA-1087"
  - "dead drop resolver"
  - "MemFun"
  - "military espionage"
  - "process hollowing"
  - "Southeast Asia"
heroImage: "/wp-content/uploads/2026/04/china-military-espionage-southeast-asia.jpg"
wpId: 2165
wpSlug: "cl-sta-1087-chinese-apt-targets-southeast-asian-militaries-with-applechris-and-memfun-backdoors"
originalLink: "https://bulwarkblack.com/cl-sta-1087-chinese-apt-targets-southeast-asian-militaries-with-applechris-and-memfun-backdoors"
draft: false
---

<p><strong>Unit 42 researchers have uncovered a sophisticated Chinese espionage campaign, designated CL-STA-1087, that has been systematically targeting military organizations across Southeast Asia since at least 2020.</strong> The state-sponsored operation demonstrates exceptional operational patience and deploys previously undocumented malware tools designed for long-term intelligence collection against regional defense forces.</p>
<h2>Executive Summary</h2>
<p>The investigation reveals a methodical espionage operation focused on highly targeted intelligence gathering rather than bulk data theft. The attackers actively searched for files concerning military capabilities, organizational structures, and—critically—collaborative efforts with Western armed forces. This strategic focus suggests the campaign aims to understand regional military alliances and defensive capabilities.</p>
<h2>New Malware Arsenal</h2>
<p>Unit 42 identified two previously undocumented backdoors deployed in this campaign:</p>
<h3>AppleChris Backdoor</h3>
<p>Named after its mutex string <code>0XFEXYCDAPPLE05CHRIS</code>, this backdoor exists in multiple variants:</p>
<ul>
<li><strong>Dropbox Variant:</strong> Uses a dual dead drop resolver (DDR) approach with attacker-controlled Dropbox and Pastebin accounts</li>
<li><strong>Tunneler Variant:</strong> A more advanced version with streamlined Pastebin-based DDR and network proxy tunneling capabilities</li>
</ul>
<p>AppleChris features include:</p>
<ul>
<li>RSA-1024 encryption for C2 resolution</li>
<li>AES encryption for command payloads</li>
<li>DLL hijacking via the Volume Shadow Copy Service</li>
<li>Custom HTTP verbs (PUT, POT, DPF, UPF, CPF, LPF) for command tracking</li>
<li>Comprehensive backdoor functionality: drive enumeration, file operations, process management, remote shell execution</li>
</ul>
<h3>MemFun Backdoor</h3>
<p>A sophisticated multi-stage malware platform consisting of three components:</p>
<ol>
<li><strong>Initial Loader:</strong> Disguised as <code>GoogleUpdate.exe</code></li>
<li><strong>In-Memory Downloader:</strong> Executes entirely in memory</li>
<li><strong>Final Payload:</strong> A DLL retrieved from C2 containing the main backdoor functionality</li>
</ol>
<p>MemFun employs advanced evasion techniques:</p>
<ul>
<li><strong>Timestomping:</strong> Modifies file creation timestamps to match Windows system files</li>
<li><strong>Process Hollowing:</strong> Injects payload into suspended <code>dllhost.exe</code> process</li>
<li><strong>Reflective DLL Loading:</strong> Loads malicious code without writing to disk</li>
<li><strong>Memory Wiping:</strong> Zeroes the first 4KB of allocated memory to erase PE headers</li>
</ul>
<h2>Attack Chain and Persistence</h2>
<p>The campaign demonstrated a distinctive &#8220;long game&#8221; approach:</p>
<ol>
<li><strong>Initial Compromise:</strong> Attackers established persistence on an unmanaged endpoint</li>
<li><strong>Dormancy Period:</strong> The environment remained inactive for several months after initial access</li>
<li><strong>Reactivation:</strong> Operations resumed with deployment of AppleChris backdoor via WMI and Windows .NET commands</li>
<li><strong>Lateral Movement:</strong> Systematic spread to domain controllers, web servers, IT workstations, and executive assets</li>
</ol>
<h2>C2 Infrastructure</h2>
<p>The attackers utilized PowerShell scripts configured to establish reverse shells to the following command and control servers:</p>
<ul>
<li><code>154.39.142[.]177</code></li>
<li><code>154.39.137[.]203</code></li>
<li><code>8.212.169[.]27</code></li>
<li><code>109.248.24[.]177</code></li>
</ul>
<h2>Intelligence Targeting</h2>
<p>The collected intelligence focused on:</p>
<ul>
<li>Official meeting records</li>
<li>Joint military activities documentation</li>
<li>Operational capabilities assessments</li>
<li>C4I systems (Command, Control, Communications, Computers, and Intelligence)</li>
<li>Military organizational structures and strategy</li>
<li>Collaboration documents with Western armed forces</li>
</ul>
<h2>MITRE ATT&amp;CK Techniques</h2>
<ul>
<li><strong>T1574.001:</strong> DLL Search Order Hijacking</li>
<li><strong>T1102.001:</strong> Dead Drop Resolver</li>
<li><strong>T1055.012:</strong> Process Hollowing</li>
<li><strong>T1070.006:</strong> Timestomping</li>
<li><strong>T1620:</strong> Reflective Code Loading</li>
</ul>
<h2>Why This Matters</h2>
<p>This campaign represents a significant threat to regional security in Southeast Asia. The attackers&#8217; focus on Western military collaboration documents suggests efforts to understand—and potentially counter—defensive alliances in the region. The custom-developed toolset and stable operational infrastructure indicate a well-resourced, patient adversary capable of maintaining long-term access to sensitive military networks.</p>
<p>Organizations in the defense sector should implement robust endpoint detection capabilities, monitor for suspicious Pastebin and Dropbox access, and scrutinize WMI-based lateral movement patterns.</p>
<p><strong>Source:</strong> <a href="https://origin-unit42.paloaltonetworks.com/espionage-campaign-against-military-targets/" target="_blank" rel="noopener">Unit 42 / Palo Alto Networks</a></p>
