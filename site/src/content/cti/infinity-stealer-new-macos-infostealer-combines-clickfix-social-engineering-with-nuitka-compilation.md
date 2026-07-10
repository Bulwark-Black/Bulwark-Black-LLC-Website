---
title: "Infinity Stealer: New macOS Infostealer Combines ClickFix Social Engineering with Nuitka Compilation"
publishedAt: 2026-03-29T20:01:29
summary: "A sophisticated new info-stealing malware named Infinity Stealer is targeting macOS systems using an innovative attack chain that combines ClickFix social engineering with Python payloads compiled using the open-source Nuitka compiler. Attack Overview According to Malwarebytes re"
category: "Malware"
categories:
  - "Malware"
tags: []
heroImage: "/wp-content/uploads/2026/03/infinity-stealer-macos-2026-03-29.jpg"
wpId: 2142
wpSlug: "infinity-stealer-new-macos-infostealer-combines-clickfix-social-engineering-with-nuitka-compilation"
originalLink: "https://bulwarkblack.com/infinity-stealer-new-macos-infostealer-combines-clickfix-social-engineering-with-nuitka-compilation"
draft: false
---

<p>A sophisticated new info-stealing malware named <strong>Infinity Stealer</strong> is targeting macOS systems using an innovative attack chain that combines ClickFix social engineering with Python payloads compiled using the open-source <strong>Nuitka compiler</strong>.</p>
<h2>Attack Overview</h2>
<p>According to <a href="http://www.malwarebytes.com/blog/threat-intel/2026/03/infiniti-stealer-a-new-macos-infostealer-using-clickfix-and-python-nuitka" target="_blank" rel="noopener">Malwarebytes researchers</a>, this marks the first documented macOS campaign combining ClickFix delivery with a Python-based infostealer compiled using Nuitka.</p>
<p>The attack leverages the <strong>ClickFix technique</strong>, presenting a fake CAPTCHA that mimics Cloudflare&#8217;s human verification check. Victims are tricked into executing malicious commands by pasting a base64-obfuscated curl command directly into the macOS Terminal, effectively bypassing OS-level security defenses.</p>
<h2>Why Nuitka Makes Detection Harder</h2>
<p>Unlike PyInstaller, which bundles Python with bytecode that can be decompiled, Nuitka compiles Python scripts into C code, producing native binaries. This approach:</p>
<ul>
<li>Eliminates obvious bytecode layers</li>
<li>Makes static analysis significantly more difficult</li>
<li>Increases resistance to reverse engineering</li>
<li>Results in a real native binary that evades common detection methods</li>
</ul>
<h2>Technical Attack Chain</h2>
<p>The infection begins on the malicious domain <code>update-check[.]com</code>, where victims encounter what appears to be a Cloudflare verification step. The multi-stage attack proceeds as follows:</p>
<ol>
<li><strong>Stage 1:</strong> ClickFix lure delivers a base64-encoded curl command</li>
<li><strong>Stage 2:</strong> Bash script writes the Nuitka loader (8.6 MB Mach-O binary) to /tmp</li>
<li><strong>Stage 3:</strong> Quarantine flag is removed and the loader executes via nohup</li>
<li><strong>Stage 4:</strong> Loader extracts a 35MB zstd-compressed archive containing Infinity Stealer</li>
</ol>
<h2>Data Theft Capabilities</h2>
<p>Before executing its data collection routines, the malware performs anti-analysis checks to detect virtualized or sandboxed environments. Once verified as running on a real system, Infinity Stealer harvests:</p>
<ul>
<li><strong>Browser credentials</strong> from Chromium-based browsers and Firefox</li>
<li><strong>macOS Keychain entries</strong> containing saved passwords and certificates</li>
<li><strong>Cryptocurrency wallet data</strong></li>
<li><strong>Developer secrets</strong> from plaintext files like .env configurations</li>
<li><strong>Screenshots</strong> capturing current user activity</li>
</ul>
<h2>Exfiltration and Command-and-Control</h2>
<p>All stolen data is exfiltrated via HTTP POST requests to the command-and-control (C2) server. The threat actors receive <strong>Telegram notifications</strong> upon successful completion of data theft operations, enabling rapid monetization of stolen credentials.</p>
<h2>Defensive Recommendations</h2>
<p>This campaign demonstrates the increasing sophistication of macOS-targeted threats. Security teams should:</p>
<ul>
<li>Train users to <strong>never paste Terminal commands</strong> from unfamiliar sources</li>
<li>Monitor for suspicious processes executing from /tmp directories</li>
<li>Implement endpoint detection capable of identifying Nuitka-compiled binaries</li>
<li>Block known malicious domains at the network level</li>
<li>Watch for unusual HTTP POST traffic patterns indicating data exfiltration</li>
</ul>
<p>The emergence of malware like Infinity Stealer confirms that threats to macOS users continue to evolve, combining advanced evasion techniques with proven social engineering tactics.</p>
<p><em>Source: <a href="http://www.malwarebytes.com/blog/threat-intel/2026/03/infiniti-stealer-a-new-macos-infostealer-using-clickfix-and-python-nuitka" target="_blank" rel="noopener">Malwarebytes</a></em></p>
