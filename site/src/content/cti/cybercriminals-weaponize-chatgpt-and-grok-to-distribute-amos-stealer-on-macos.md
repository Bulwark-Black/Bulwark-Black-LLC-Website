---
title: "Cybercriminals Weaponize ChatGPT and Grok to Distribute AMOS Stealer on macOS"
publishedAt: 2026-02-12T02:04:53
summary: "A sophisticated attack campaign is exploiting user trust in artificial intelligence platforms to distribute the Atomic macOS Stealer (AMOS), representing a dangerous evolution in social engineering tactics that combines legitimate AI chatbot services with paid Google advertising."
category: "Malware"
categories:
  - "Malware"
tags:
  - "Meduza"
  - "Penetration Testing"
heroImage: "/wp-content/uploads/2026/02/chatgpt-grok-amos-stealer.jpg"
wpId: 1853
wpSlug: "cybercriminals-weaponize-chatgpt-and-grok-to-distribute-amos-stealer-on-macos"
originalLink: "https://bulwarkblack.com/cybercriminals-weaponize-chatgpt-and-grok-to-distribute-amos-stealer-on-macos"
draft: false
---

<p>A sophisticated attack campaign is exploiting user trust in artificial intelligence platforms to distribute the Atomic macOS Stealer (AMOS), representing a dangerous evolution in social engineering tactics that combines legitimate AI chatbot services with paid Google advertising.</p>
<p>According to <a href="https://flare.io/learn/resources/blog/the-macos-stealer-gold-rush-how-cybercriminals-are-racing-to-exploit-apples-ecosystem" target="_blank" rel="noopener">research from Flare</a>, threat actors are creating shareable AI chat links on ChatGPT and Grok containing step-by-step &#8220;installation guides&#8221; disguised as legitimate macOS troubleshooting instructions. These malicious conversations are then promoted to the top of Google search results through paid advertising campaigns.</p>
<h2>The ClickFix Technique</h2>
<p>The campaign leverages a technique known as &#8220;ClickFix,&#8221; where users searching for common troubleshooting solutions—such as clearing disk space on macOS—are redirected to seemingly authentic AI-generated instructions hosted on trusted domains. What makes this attack particularly effective is its ability to bypass traditional security measures by appearing completely legitimate.</p>
<p>The malicious instructions are hosted on official ChatGPT and Grok websites rather than suspicious third-party domains, lending them an air of credibility that catches even security-conscious users off guard.</p>
<h2>Devastating Impact on Victims</h2>
<p>The infection process begins when users are tricked into opening Terminal and pasting what appears to be a harmless command. The malicious command downloads a script that repeatedly requests the user&#8217;s system password under the guise of legitimate system operations.</p>
<p>Once credentials are provided, the AMOS stealer immediately begins harvesting sensitive information including:</p>
<ul>
<li><strong>Cryptocurrency wallet data</strong> from Electrum, Exodus, Coinbase, MetaMask, and Ledger Live</li>
<li><strong>Seed phrases and private keys</strong> enabling immediate theft of digital assets</li>
<li><strong>Browser credentials</strong> from Chrome, Safari, and Firefox</li>
<li><strong>Keychain credentials</strong> and personal files</li>
<li><strong>Active login sessions</strong> and autofill information</li>
</ul>
<p>A persistent backdoor is also installed that survives system reboots and provides long-term remote access to the compromised machine.</p>
<h2>Why It Works</h2>
<p>The social engineering component proves remarkably effective because users inherently trust results appearing on reputable platforms like OpenAI and X.AI domains, combined with the additional credibility boost from appearing as sponsored Google search results.</p>
<h2>Defensive Recommendations</h2>
<p>Organizations and individual Mac users should:</p>
<ul>
<li>Monitor for unsigned applications requesting system passwords</li>
<li>Watch for unusual Terminal activity</li>
<li>Track unexpected network connections to unfamiliar domains</li>
<li>Educate users that instructions appearing on trusted AI platforms can be compromised through social engineering</li>
<li>Independently verify any guidance requesting Terminal command execution through official support channels before implementation</li>
</ul>
<p>This campaign serves as a stark reminder that even trusted platforms can be weaponized against users, and that AI-generated content should be treated with the same skepticism as any other online information source.</p>
<p><em>Source: <a href="https://cybersecuritynews.com/threat-actors-weaponize-chatgpt-grok-to-distribute-amos-stealer/" target="_blank" rel="noopener">Cyber Security News</a> / <a href="https://flare.io/learn/resources/blog/the-macos-stealer-gold-rush-how-cybercriminals-are-racing-to-exploit-apples-ecosystem" target="_blank" rel="noopener">Flare Research</a></em></p>
