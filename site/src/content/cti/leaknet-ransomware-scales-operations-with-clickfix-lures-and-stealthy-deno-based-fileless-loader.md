---
title: "LeakNet Ransomware Scales Operations with ClickFix Lures and Stealthy Deno-Based Fileless Loader"
publishedAt: 2026-03-19T15:02:41
summary: "The LeakNet ransomware group is rapidly scaling its operations with two dangerous innovations: a social engineering technique called ClickFix and a previously unreported fileless loader built on the legitimate Deno JavaScript runtime. According to ReliaQuest research, LeakNet has"
category: "Malware"
categories:
  - "Malware"
  - "Social Engineering"
tags: []
heroImage: "/wp-content/uploads/2026/03/leaknet-ransomware-clickfix-deno-loader.jpg"
wpId: 2079
wpSlug: "leaknet-ransomware-scales-operations-with-clickfix-lures-and-stealthy-deno-based-fileless-loader"
originalLink: "https://bulwarkblack.com/leaknet-ransomware-scales-operations-with-clickfix-lures-and-stealthy-deno-based-fileless-loader"
draft: false
---

<p>The LeakNet ransomware group is rapidly scaling its operations with two dangerous innovations: a social engineering technique called ClickFix and a previously unreported fileless loader built on the legitimate Deno JavaScript runtime.</p>
<p>According to <a href="https://reliaquest.com/blog/threat-spotlight-casting-a-wider-net-clickfix-deno-and-leaknets-scaling-threat" target="_blank" rel="noopener noreferrer">ReliaQuest research</a>, LeakNet has shifted away from purchasing stolen credentials from initial access brokers (IABs). Instead, the group now plants fake verification pages on compromised but otherwise legitimate websites, casting a much wider net for victims.</p>
<h2>ClickFix Social Engineering: Fake Cloudflare Verification</h2>
<p>The ClickFix technique presents victims with what appears to be a standard Cloudflare Turnstile verification check. Users are then prompted to manually run a command—often through the Windows Run dialog (Win+R)—that initiates the infection chain.</p>
<p>Because these lures are hosted on real websites rather than attacker-owned domains, standard network-layer defenses generate far fewer alerts. The red flag only appears <em>after</em> the user has already executed the malicious command, shifting the burden to behavioral monitoring of suspicious msiexec commands and unexpected outbound connections.</p>
<p>ClickFix has become a preferred delivery method across the threat landscape, facilitating the distribution of 59% of the top malware families tracked in 2025.</p>
<h2>The Deno-Based Fileless Loader: BYOR Attack</h2>
<p>The most technically dangerous component of LeakNet&#8217;s toolkit is a loader built on <strong>Deno</strong>, a legitimate JavaScript and TypeScript runtime used daily by developers.</p>
<p>LeakNet employs a <strong>bring-your-own-runtime (BYOR)</strong> approach: instead of deploying a custom malicious binary that might trigger security tools, the attackers install the <em>real, trusted Deno executable</em> on the victim&#8217;s machine and use it to run harmful code.</p>
<p>The loader is activated through PowerShell and Visual Basic Script files, notably named <code>Romeo*.ps1</code> and <code>Juliet*.vbs</code>. Rather than writing a JavaScript file to disk where it could be scanned, LeakNet feeds the payload to Deno as a base64-encoded data URL, which Deno decodes and runs <strong>entirely in memory</strong>.</p>
<p>No standard file ever touches the endpoint, making the entire process nearly invisible to signature-based security tools.</p>
<h2>Post-Exploitation Behavior</h2>
<p>Once the loader runs, it:</p>
<ul>
<li>Collects system details (username, hostname, memory size, OS version)</li>
<li>Creates a unique victim fingerprint</li>
<li>Connects to attacker-controlled infrastructure for a victim-specific second-stage payload</li>
<li>Prevents duplicate instances by binding to a local port</li>
<li>Enters a looping cycle of fetching and executing further code in memory</li>
</ul>
<h2>Defensive Recommendations</h2>
<p>ReliaQuest recommends the following mitigations:</p>
<ul>
<li><strong>Block newly registered domains</strong> — LeakNet&#8217;s C2 servers are typically only weeks old</li>
<li><strong>Restrict Win+R commands</strong> — Regular users should not be able to run arbitrary commands</li>
<li><strong>Limit PsExec</strong> — Restrict to authorized administrators through Group Policy Objects</li>
<li><strong>Monitor for jli.dll sideloading</strong> in <code>C:\ProgramData\USOShared</code></li>
<li><strong>Watch for unusual outbound S3 bucket connections</strong></li>
<li><strong>Isolate compromised hosts immediately</strong> upon detecting post-exploitation behavior</li>
</ul>
<h2>Why This Matters</h2>
<p>LeakNet&#8217;s combination of mass social engineering via ClickFix and fileless execution via Deno represents a significant evolution in ransomware operations. By avoiding purchased credentials and disk-based payloads, the group minimizes its attack surface footprint while maximizing victim reach.</p>
<p>Organizations relying solely on domain blocklists and file-based detection will find these attacks difficult to catch before damage occurs. Behavioral monitoring and rapid incident isolation are now critical defensive requirements.</p>
<p><em>Source: <a href="https://cybersecuritynews.com/leaknet-scales-ransomware-operations/" target="_blank" rel="noopener noreferrer">Cybersecurity News</a> / <a href="https://reliaquest.com/blog/threat-spotlight-casting-a-wider-net-clickfix-deno-and-leaknets-scaling-threat" target="_blank" rel="noopener noreferrer">ReliaQuest</a></em></p>
