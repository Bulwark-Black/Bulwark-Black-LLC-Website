---
title: "Fake Clawdbot VS Code Extension Deploys ScreenConnect RAT"
publishedAt: 2026-01-27T23:41:51
summary: "A malicious VS Code extension impersonating the popular Clawdbot AI assistant has been caught deploying ScreenConnect RAT on Windows machines. The trojanized extension worked as a functional AI coding tool while silently installing remote access software."
category: "Malware"
categories:
  - "Malware"
tags:
  - "Developer Security"
  - "Extension Security"
  - "Malware"
  - "RAT"
  - "ScreenConnect"
  - "Supply Chain"
  - "Trojan"
  - "VS Code"
heroImage: "/wp-content/uploads/2026/01/fake-clawdbot-vscode.png"
wpId: 1735
wpSlug: "fake-clawdbot-vs-code-extension-deploys-screenconnect-rat"
originalLink: "https://bulwarkblack.com/fake-clawdbot-vs-code-extension-deploys-screenconnect-rat"
draft: false
---


<p style="font-style:italic;font-weight:400"><em>Source: <a href="https://www.aikido.dev/blog/fake-clawdbot-vscode-extension-malware">Aikido Security</a></em></p>



<p>On January 27, 2026, Aikido Security&#8217;s malware detection system flagged a malicious VS Code extension called &#8220;ClawdBot Agent&#8221; that functions as a fully operational trojan. The extension presents itself as a legitimate AI coding assistant while silently deploying ScreenConnect RAT on Windows machines the moment VS Code launches.</p>



<h2 class="wp-block-heading">The Attack Vector</h2>



<p>The fake extension impersonates the legitimate <a href="https://clawd.bot/">Clawdbot</a> AI assistant, which has gained significant popularity in the developer community. The attackers claimed the name on the VS Code marketplace before the real Clawdbot team published an official extension.</p>



<p>What makes this attack particularly dangerous is that the extension actually works as an AI coding assistant, integrating with seven different AI providers including OpenAI, Anthropic, and Google. This functionality ensures users have no reason to suspect malicious activity.</p>



<h2 class="wp-block-heading">Technical Analysis</h2>



<p>The extension uses the <code>onStartupFinished</code> activation event, meaning it runs automatically every time VS Code starts without user interaction. The malicious <code>initCore()</code> function fetches configuration from a C2 server and downloads the payload.</p>



<p>Key technical findings:</p>



<ul class="wp-block-list">
<li><strong>Payload:</strong> Legitimate ScreenConnect (ConnectWise) software configured to connect to attacker infrastructure at <code>meeting.bulletmailer[.]net:8041</code></li>
<li><strong>Backup Mechanism:</strong> Rust-based DWrite.dll provides redundant payload delivery via Dropbox, disguised as a Zoom update</li>
<li><strong>Staging:</strong> Files dropped to <code>%TEMP%\Lightshot</code> directory</li>
<li><strong>Process Camouflage:</strong> Payload runs as <code>Code.exe</code>, blending with legitimate VS Code processes</li>
</ul>



<h2 class="wp-block-heading">Quadruple Impersonation</h2>



<p>The attackers employed multiple layers of brand impersonation to avoid detection:</p>



<ol class="wp-block-list">
<li><strong>Clawdbot</strong> &#8211; Extension name</li>
<li><strong>VS Code</strong> &#8211; Payload executable name (Code.exe)</li>
<li><strong>Lightshot</strong> &#8211; Staging folder name</li>
<li><strong>Zoom</strong> &#8211; Dropbox payload disguise</li>
</ol>



<h2 class="wp-block-heading">Remediation</h2>



<p>If you installed the &#8220;ClawdBot Agent&#8221; extension:</p>



<ul class="wp-block-list">
<li>Uninstall the extension immediately from VS Code</li>
<li>Check for and remove ScreenConnect installation at <code>C:\Program Files (x86)\ScreenConnect Client\</code></li>
<li>Delete <code>%TEMP%\Lightshot</code> folder</li>
<li>Block <code>meeting.bulletmailer[.]net</code> at your firewall</li>
<li>Rotate any API keys entered into the extension</li>
<li>Run a full antivirus scan</li>
</ul>



<p>Microsoft has since removed the malicious extension from the VS Code marketplace following Aikido&#8217;s report.</p>
