---
title: "Infinity Stealer: New macOS Infostealer Uses ClickFix and Nuitka Compilation to Evade Detection"
publishedAt: 2026-03-29T15:02:30
summary: "A sophisticated new information-stealing malware named Infinity Stealer has emerged targeting macOS systems, combining the increasingly popular ClickFix social engineering technique with advanced evasion capabilities through Nuitka compilation. According to Malwarebytes research,"
category: "Malware"
categories:
  - "Malware"
tags: []
heroImage: "/wp-content/uploads/2026/03/infinity-stealer-macos-clickfix-2026.jpg"
wpId: 2140
wpSlug: "infinity-stealer-new-macos-infostealer-uses-clickfix-and-nuitka-compilation-to-evade-detection"
originalLink: "https://bulwarkblack.com/infinity-stealer-new-macos-infostealer-uses-clickfix-and-nuitka-compilation-to-evade-detection"
draft: false
---


<p>A sophisticated new information-stealing malware named <strong>Infinity Stealer</strong> has emerged targeting macOS systems, combining the increasingly popular ClickFix social engineering technique with advanced evasion capabilities through Nuitka compilation.</p>



<p>According to <a href="https://www.bleepingcomputer.com/news/security/new-infinity-stealer-malware-grabs-macos-data-via-clickfix-lures/" target="_blank" rel="noopener">Malwarebytes research</a>, this represents the first documented macOS campaign combining ClickFix delivery with a Python-based infostealer compiled using Nuitka—a technique that produces native binaries far more resistant to analysis than traditional PyInstaller packages.</p>



<h2 class="wp-block-heading">How the Attack Works</h2>



<p>The attack chain begins with a fake Cloudflare human verification page hosted on <code>update-check[.]com</code>. Victims are tricked into pasting a base64-obfuscated curl command directly into macOS Terminal—a hallmark of the ClickFix technique that bypasses traditional OS-level security controls.</p>



<p>Once executed, the command:</p>



<ul class="wp-block-list">
<li>Decodes a Bash script that writes the Nuitka loader to <code>/tmp</code></li>
<li>Removes the quarantine flag to bypass Gatekeeper</li>
<li>Executes the payload via <code>nohup</code></li>
<li>Passes C2 and authentication tokens via environment variables</li>
<li>Deletes itself and closes the Terminal window</li>
</ul>



<h2 class="wp-block-heading">Why Nuitka Matters</h2>



<p>The use of Nuitka compilation represents a significant evolution in macOS malware. Unlike PyInstaller, which bundles Python with bytecode that analysts can often decompile, Nuitka compiles Python scripts into C code and produces genuine native Mach-O binaries.</p>



<p>The resulting 8.6 MB binary contains a 35MB zstd-compressed archive with the final Infinity Stealer payload—making static analysis and signature-based detection considerably more difficult.</p>



<h2 class="wp-block-heading">Data Theft Capabilities</h2>



<p>The malware performs anti-analysis checks before harvesting:</p>



<ul class="wp-block-list">
<li><strong>Browser credentials</strong> from Chromium-based browsers and Firefox</li>
<li><strong>macOS Keychain</strong> entries</li>
<li><strong>Cryptocurrency wallets</strong></li>
<li><strong>Developer secrets</strong> from <code>.env</code> files and similar plaintext configurations</li>
<li><strong>Screenshots</strong> of the victim&#8217;s desktop</li>
</ul>



<p>Stolen data is exfiltrated via HTTP POST requests to command-and-control infrastructure, with Telegram notifications alerting threat actors upon successful data theft.</p>



<h2 class="wp-block-heading">Key Takeaways for Defenders</h2>



<ul class="wp-block-list">
<li><strong>User awareness is critical:</strong> Never paste commands from websites into Terminal without understanding them fully</li>
<li><strong>Monitor Terminal execution:</strong> ClickFix attacks rely on user interaction—behavioral monitoring can help detect suspicious Terminal activity</li>
<li><strong>Watch for quarantine bypass:</strong> <code>xattr -d com.apple.quarantine</code> commands are a red flag</li>
<li><strong>macOS is not immune:</strong> The sophistication of Infinity Stealer proves that Apple systems face advanced, targeted threats</li>
</ul>



<p><a href="https://www.bleepingcomputer.com/news/security/new-infinity-stealer-malware-grabs-macos-data-via-clickfix-lures/" target="_blank" rel="noopener">Source: BleepingComputer</a></p>
