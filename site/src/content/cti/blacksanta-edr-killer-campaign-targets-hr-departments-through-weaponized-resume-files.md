---
title: "BlackSanta EDR Killer Campaign Targets HR Departments Through Weaponized Resume Files"
publishedAt: 2026-03-10T20:03:51
summary: "A year-long malware campaign targets HR departments through weaponized resume files, deploying the previously undocumented BlackSanta EDR killer that disables endpoint security tools at the kernel level."
category: "Russian Cyber Threat Intelligence"
categories:
  - "Russian Cyber Threat Intelligence"
tags:
  - "LIGHTWORK"
  - "Mimic Ransomware"
heroImage: "/wp-content/uploads/2026/03/blacksanta-edr-killer-scaled.jpg"
wpId: 2033
wpSlug: "blacksanta-edr-killer-campaign-targets-hr-departments-through-weaponized-resume-files"
originalLink: "https://bulwarkblack.com/blacksanta-edr-killer-campaign-targets-hr-departments-through-weaponized-resume-files"
draft: false
---

<p>A sophisticated year-long malware campaign has been quietly compromising HR departments and job recruiters through weaponized resume files, according to new research from Aryaka. The attack features a previously undocumented EDR killer dubbed &#8220;BlackSanta&#8221; that systematically disables endpoint security tools before deploying additional malicious payloads.</p>
<h2>The Attack Vector: Fake Resume Files</h2>
<p>The attack begins when victims receive what appears to be a standard resume file. The malicious payload is delivered via a resume-themed ISO file through recruitment channels, likely distributed through spam emails with links to Dropbox or similar cloud storage services.</p>
<p>&#8220;Once mounted, the ISO appeared as a standard local drive, making its contents appear legitimate and encouraging the user to interact with the file,&#8221; <a href="https://www.aryaka.com/docs/reports/blacksanta-edr-killer-threat-report.pdf" target="_blank" rel="noopener">Aryaka researchers explained</a>.</p>
<p>Inside the ISO is a PDF file that is actually a Windows shortcut (.lnk) file with a hidden extension. When executed, it launches Windows Command Shell, which then launches PowerShell to run a malicious script.</p>
<h2>Multi-Stage Payload Delivery</h2>
<p>The PowerShell script extracts hidden data from an image file and uses it to execute another script in memory. This script downloads a ZIP file from attacker-controlled domains—including &#8220;resumebuilders.us&#8221; and &#8220;thresumebuilder.com&#8221;—containing:</p>
<ul>
<li><strong>SumatraPDF.exe</strong> – A legitimate PDF reader used as a vehicle for DLL sideloading</li>
<li><strong>DWrite.dll</strong> – The malicious DLL that initiates the attack chain</li>
</ul>
<h2>Extensive Anti-Analysis Measures</h2>
<p>The malicious DWrite.dll employs extensive evasion techniques, checking for:</p>
<ul>
<li>Virtual machines and emulated systems</li>
<li>Debuggers and analysis tools</li>
<li>Sandbox environments</li>
</ul>
<p>Critically, the malware will <strong>terminate execution if it detects the target machine is located in Russia or a CIS country</strong>—a strong indicator of Russian-speaking threat actors protecting their own region from infection.</p>
<p>&#8220;To further reduce defensive visibility, Windows Defender SpyNet policy registry keys are modified to disable cloud protection and automatic sample submission,&#8221; the researchers noted.</p>
<h2>BlackSanta: A New EDR Killer</h2>
<p>The most concerning component is BlackSanta, a previously undocumented EDR killer that loads vulnerable kernel-mode drivers to gain privileged access to the system:</p>
<ul>
<li><strong>RogueKiller Antirootkit (v3.1.0)</strong></li>
<li><strong>IObitUnlocker.sys (v1.2.0.1)</strong></li>
</ul>
<p>&#8220;Rather than functioning as a simple auxiliary payload, BlackSanta acts as a dedicated defense-neutralization module that programmatically identifies and interferes with protection and monitoring processes prior to the deployment of follow-on stages,&#8221; the researchers found.</p>
<p>By targeting endpoint security engines alongside telemetry and logging agents, BlackSanta:</p>
<ul>
<li>Directly reduces alert generation</li>
<li>Limits behavioral logging</li>
<li>Weakens investigative visibility on compromised hosts</li>
</ul>
<h2>Attribution and Scope</h2>
<p>The attackers appear to be Russian-speaking based on the geofencing that excludes Russia and CIS countries from targeting. The campaign has been running silently for <strong>over a year</strong>, suggesting a targeted, low-noise operation.</p>
<p>&#8220;We currently lack telemetry to determine how widespread the campaign is,&#8221; said Aditya K. Sood, Aryaka&#8217;s VP of Security Engineering &amp; AI Strategy. &#8220;However, available artifacts indicate that the activity has likely been running silently for over a year, which may suggest a targeted and low-noise operation.&#8221;</p>
<h2>Recommendations</h2>
<p>Organizations with HR and recruitment departments should:</p>
<ul>
<li>Implement strict policies against opening ISO files from external sources</li>
<li>Train HR staff to recognize social engineering attempts disguised as job applications</li>
<li>Monitor for DLL sideloading activity involving SumatraPDF or similar legitimate applications</li>
<li>Block the known malicious domains: resumebuilders.us, thresumebuilder.com</li>
<li>Implement Memory Integrity (HVCI) to prevent vulnerable driver exploitation</li>
<li>Review kernel driver loading events for suspicious activity</li>
</ul>
<p>This campaign demonstrates the evolving sophistication of threat actors in neutralizing endpoint defenses through legitimate-looking delivery mechanisms and kernel-level EDR killing capabilities.</p>
<p><strong>Source:</strong> <a href="https://www.helpnetsecurity.com/2026/03/10/hr-recruiters-malware-resume/" target="_blank" rel="noopener">Help Net Security</a></p>
