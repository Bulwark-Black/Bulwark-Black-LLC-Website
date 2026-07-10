---
title: "BlueNoroff’s GhostCall and GhostHire Campaigns Use Stolen Victim Videos to Compromise Crypto Executives"
publishedAt: 2026-02-10T16:02:30
summary: "North Korean threat actor BlueNoroff (also known as Sapphire Sleet, APT38, Alluring Pisces, Stardust Chollima, and TA444) has launched two sophisticated campaigns—GhostCall and GhostHire—targeting cryptocurrency executives, blockchain developers, and venture capital professionals"
category: "North Korean Cyber Threat Intelligence"
categories:
  - "North Korean Cyber Threat Intelligence"
tags: []
heroImage: "/wp-content/uploads/2026/02/bluenoroff-ghostcall-crypto.jpg"
wpId: 1843
wpSlug: "bluenoroffs-ghostcall-and-ghosthire-campaigns-use-stolen-victim-videos-to-compromise-crypto-executives"
originalLink: "https://bulwarkblack.com/bluenoroffs-ghostcall-and-ghosthire-campaigns-use-stolen-victim-videos-to-compromise-crypto-executives"
draft: false
---

<p>North Korean threat actor BlueNoroff (also known as Sapphire Sleet, APT38, Alluring Pisces, Stardust Chollima, and TA444) has launched two sophisticated campaigns—<strong>GhostCall</strong> and <strong>GhostHire</strong>—targeting cryptocurrency executives, blockchain developers, and venture capital professionals, according to <a href="https://securelist.com/bluenoroff-apt-campaigns-ghostcall-and-ghosthire/117842/" target="_blank" rel="noopener">research published by Kaspersky</a>.</p>
<h2>GhostCall: Fake Investment Meetings with Real Victim Recordings</h2>
<p>In the GhostCall campaign, attackers impersonate venture capitalists on Telegram, approaching executives at tech companies with investment or partnership opportunities. Victims are invited to join what appears to be a legitimate Zoom meeting, but the calls use <strong>real video recordings stolen from previous victims</strong>—not deepfakes.</p>
<p>During these fake calls, victims see what they believe is a live multi-participant meeting. After 3-5 seconds, an error message prompts them to download a &#8220;Zoom SDK Update&#8221; that delivers malicious AppleScript on macOS or uses the ClickFix technique on Windows to compromise the system.</p>
<blockquote>
<p>&#8220;Our research revealed that these videos were, in fact, real recordings secretly taken from other victims who had been targeted by the same actor using the same method.&#8221;</p>
</blockquote>
<h2>GhostHire: Malicious GitHub Repositories Disguised as Job Assessments</h2>
<p>The GhostHire campaign targets Web3 developers through fake job recruitment. Attackers posing as recruiters conduct screening calls, then add victims to a Telegram bot that delivers either a ZIP file or GitHub repository link with a <strong>30-minute time limit</strong> to complete a supposed coding assessment.</p>
<p>The pressure tactic encourages victims to quickly execute the malicious project without proper vetting. Once run, the project downloads OS-specific payloads tailored to the victim&#8217;s system.</p>
<h2>AI-Enhanced Attack Operations</h2>
<p>BlueNoroff is leveraging AI to enhance its operations:</p>
<ul>
<li><strong>ChatGPT-generated images</strong> with C2PA metadata detected in victim profile photos</li>
<li><strong>AI-generated code comments</strong> in the stealer modules</li>
<li>Enhanced social engineering scripts and fake profiles</li>
</ul>
<h2>Comprehensive Credential and Secrets Theft</h2>
<p>The campaigns deploy a modular stealer suite that harvests:</p>
<ul>
<li>Cryptocurrency wallet data</li>
<li>macOS Keychain credentials</li>
<li>Browser-stored passwords and sessions</li>
<li>OpenAI API keys</li>
<li>Cloud platform and DevOps credentials</li>
<li>Telegram data and collaboration app secrets</li>
</ul>
<h2>Global Victim Distribution</h2>
<p>GhostCall victims have been identified across <strong>Japan, Italy, France, Singapore, Turkey, Spain, Sweden, India, and Hong Kong</strong>. GhostHire primarily targets victims in <strong>Japan and Australia</strong>.</p>
<h2>Recommendations</h2>
<p>Organizations and individuals in the Web3/cryptocurrency space should:</p>
<ul>
<li>Verify investment meeting invitations through established channels</li>
<li>Never execute code from untrusted GitHub repositories</li>
<li>Be suspicious of artificial time pressure during recruitment processes</li>
<li>Verify identities through video calls using your own meeting links</li>
<li>Implement endpoint protection that detects malicious AppleScripts</li>
</ul>
<p><em><a href="https://securelist.com/bluenoroff-apt-campaigns-ghostcall-and-ghosthire/117842/" target="_blank" rel="noopener">Source: Kaspersky Securelist</a></em></p>
