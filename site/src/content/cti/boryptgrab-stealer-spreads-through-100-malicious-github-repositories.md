---
title: "BoryptGrab Stealer Spreads Through 100+ Malicious GitHub Repositories"
publishedAt: 2026-03-08T20:03:35
summary: "A massive malware distribution campaign has been discovered leveraging more than 100 GitHub repositories to spread the BoryptGrab information stealer. According to Trend Micro research, the campaign targets Windows users through deceptive downloads masquerading as legitimate soft"
category: "Malware"
categories:
  - "Malware"
tags: []
heroImage: "/wp-content/uploads/2026/03/github-malicious-repos.png"
wpId: 2013
wpSlug: "boryptgrab-stealer-spreads-through-100-malicious-github-repositories"
originalLink: "https://bulwarkblack.com/boryptgrab-stealer-spreads-through-100-malicious-github-repositories"
draft: false
---

<p>A massive malware distribution campaign has been discovered leveraging more than 100 GitHub repositories to spread the BoryptGrab information stealer. According to <a href="https://www.trendmicro.com/en_us/research/26/c/boryptgrab-stealer-targets-users-via-deceptive-github-pages.html" target="_blank" rel="noopener">Trend Micro research</a>, the campaign targets Windows users through deceptive downloads masquerading as legitimate software tools and gaming cheats.</p>
<h2>The Attack Chain</h2>
<p>The threat actors behind this campaign have deployed an extensive network of public GitHub repositories that pose as free software tools, game cheats, and utilities. These malicious repositories are carefully crafted with SEO-optimized README files to ensure they rank highly in search engine results near legitimate software projects.</p>
<p>The infection chain begins when victims download ZIP archives from these repositories. The archives launch infection through several methods, including DLL side-loading attacks where an executable loads a malicious <code>libcurl.dll</code> that decrypts a hidden launcher payload.</p>
<h2>BoryptGrab Capabilities</h2>
<p>BoryptGrab is a C/C++ information stealer designed to harvest sensitive data including:</p>
<ul>
<li><strong>Browser Data:</strong> Targets Chrome, Edge, Firefox, Opera, Brave, Vivaldi, and Yandex browsers using techniques to bypass Chrome&#8217;s App-Bound Encryption</li>
<li><strong>Cryptocurrency Wallets:</strong> Steals from Exodus, Electrum, Ledger Live, Atomic, Binance, Wasabi, and Trezor</li>
<li><strong>System Information:</strong> Captures screenshots, system details, and uses a file grabber module</li>
<li><strong>Messaging Apps:</strong> Extracts Telegram files and Discord tokens</li>
</ul>
<p>The malware employs anti-analysis techniques including virtual machine detection, process scanning, and privilege escalation attempts. It uses build names such as <em>Shrek</em>, <em>Leon</em>, <em>CryptoByte</em>, and <em>Yaropolk</em> to track infections across its operations.</p>
<h2>Additional Payloads</h2>
<p>Beyond the primary stealer, the campaign delivers several additional malicious components:</p>
<ul>
<li><strong>TunnesshClient:</strong> A PyInstaller backdoor that creates reverse SSH tunnels for remote command execution</li>
<li><strong>HeaconLoad:</strong> A Golang downloader that maintains persistence through registry entries and scheduled tasks</li>
<li><strong>Vidar Variants:</strong> Additional infostealer payloads</li>
</ul>
<h2>Russian Origin Indicators</h2>
<p>Evidence suggests the threat actors may have Russian origins, including Russian-language comments throughout the code and infrastructure, along with Russian log messages in malware samples. The attackers also employ obfuscation techniques such as XOR-encrypted strings and dynamic API resolution.</p>
<h2>Recommendations</h2>
<p>Organizations and individuals should:</p>
<ul>
<li>Verify software downloads from official sources only</li>
<li>Be suspicious of GitHub repositories offering free premium software or game cheats</li>
<li>Use endpoint detection and response (EDR) solutions to detect malicious DLL side-loading</li>
<li>Monitor for unusual scheduled task creation and registry modifications</li>
<li>Implement application whitelisting where possible</li>
</ul>
<p><em>Source: <a href="https://securityaffairs.com/189110/malware/massive-github-malware-operation-spreads-boryptgrab-stealer.html" target="_blank" rel="noopener">Security Affairs</a></em></p>
