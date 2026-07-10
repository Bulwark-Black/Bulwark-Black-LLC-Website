---
title: "Fake 7-Zip Downloads Convert Home PCs Into Residential Proxy Nodes for Cybercriminals"
publishedAt: 2026-02-09T21:02:27
summary: "A sophisticated brand impersonation campaign is weaponizing the popular 7-Zip file archiver to silently transform infected Windows computers into residential proxy nodes—monetizing victims’ IP addresses for fraud, scraping, and anonymity laundering operations. The Lookalike Domai"
category: "Malware"
categories:
  - "Malware"
tags: []
heroImage: "/wp-content/uploads/2026/02/fake-7zip-proxy-malware.jpg"
wpId: 1839
wpSlug: "fake-7-zip-downloads-convert-home-pcs-into-residential-proxy-nodes-for-cybercriminals"
originalLink: "https://bulwarkblack.com/fake-7-zip-downloads-convert-home-pcs-into-residential-proxy-nodes-for-cybercriminals"
draft: false
---

<p>A sophisticated brand impersonation campaign is weaponizing the popular 7-Zip file archiver to silently transform infected Windows computers into residential proxy nodes—monetizing victims&#8217; IP addresses for fraud, scraping, and anonymity laundering operations.</p>
<h2>The Lookalike Domain Trap</h2>
<p>Security researchers at <a href="https://www.malwarebytes.com/blog/news/2026/02/fake-7-zip-downloads-are-turning-home-pcs-into-proxy-nodes" target="_blank" rel="noopener">Malwarebytes</a> have documented a long-running campaign where attackers operate <code>7zip[.]com</code>—a convincing lookalike of the legitimate 7-zip.org project site. The malicious site distributes a trojanized installer that delivers a <strong>fully functional copy of 7-Zip</strong> alongside hidden proxyware components.</p>
<p>The campaign was brought to light when a PC builder, following a YouTube tutorial, downloaded 7-Zip from the wrong domain. Nearly two weeks later, Microsoft Defender flagged the system with <code>Trojan:Win32/Malgent!MSR</code>—demonstrating how attackers can maintain long-lived access by masquerading as trusted software.</p>
<h2>Trojanized Installer with Code Signing</h2>
<p>The installer comes <strong>Authenticode-signed</strong> using a now-revoked certificate issued to &#8220;Jozeal Network Technology Co., Limited,&#8221; lending superficial legitimacy. During installation, a modified 7zfm.exe is deployed alongside three hidden components:</p>
<ul>
<li><strong>Uphero.exe</strong> — Service manager and update loader</li>
<li><strong>hero.exe</strong> — Primary proxy payload (Go-compiled)</li>
<li><strong>hero.dll</strong> — Supporting library</li>
</ul>
<p>All components are written to <code>C:\Windows\SysWOW64\hero\</code>, a privileged directory unlikely to be manually inspected.</p>
<h2>Infection Chain: System-Level Persistence</h2>
<p>The malware executes a methodical infection chain:</p>
<ol>
<li><strong>File deployment</strong> — Payload installed into SysWOW64, requiring elevated privileges</li>
<li><strong>Service persistence</strong> — Both Uphero.exe and hero.exe registered as auto-start Windows services running under SYSTEM privileges</li>
<li><strong>Firewall manipulation</strong> — Uses <code>netsh</code> to remove existing rules and create allow rules for its binaries</li>
<li><strong>Host profiling</strong> — Enumerates hardware identifiers, memory, CPU, disk, and network configuration via WMI, reporting to iplogger[.]org</li>
</ol>
<h2>Residential Proxy Monetization</h2>
<p>The malware&#8217;s primary function is converting infected machines into <strong>residential proxy nodes</strong>. The hero.exe component retrieves configuration from rotating &#8220;smshero&#8221;-themed C2 domains, establishing outbound proxy connections on ports 1000 and 1002. Traffic uses a lightweight <strong>XOR-encoded protocol (key 0x70)</strong> to obscure control messages.</p>
<p>Residential proxy access is sold to third parties for fraud, web scraping, ad abuse, and anonymity laundering—turning everyday home PCs into criminal infrastructure.</p>
<h2>Broader Campaign: upStage Proxy Operation</h2>
<p>The 7-Zip impersonation is part of a larger operation dubbed &#8220;upStage Proxy.&#8221; Related binaries have been identified under names including:</p>
<ul>
<li>upHola.exe</li>
<li>upTiktok</li>
<li>upWhatsapp</li>
<li>upWire</li>
</ul>
<p>All variants share identical TTPs: SysWOW64 deployment, Windows service persistence, firewall manipulation via netsh, and encrypted HTTPS C2 traffic through Cloudflare infrastructure with DNS-over-HTTPS via Google&#8217;s resolver.</p>
<h2>Evasion Techniques</h2>
<p>The malware incorporates multiple anti-analysis features:</p>
<ul>
<li>Virtual machine detection (VMware, VirtualBox, QEMU, Parallels)</li>
<li>Anti-debugging checks and suspicious DLL loading detection</li>
<li>Runtime API resolution and PEB inspection</li>
<li>AES, RC4, Camellia, Chaskey, XOR encoding, and Base64 for encrypted configuration handling</li>
</ul>
<h2>Indicators of Compromise</h2>
<h3>File Hashes (SHA-256)</h3>
<ul>
<li><code>e7291095de78484039fdc82106d191bf41b7469811c4e31b4228227911d25027</code> (Uphero.exe)</li>
<li><code>b7a7013b951c3cea178ece3363e3dd06626b9b98ee27ebfd7c161d0bbcfbd894</code> (hero.exe)</li>
<li><code>3544ffefb2a38bf4faf6181aa4374f4c186d3c2a7b9b059244b65dce8d5688d9</code> (hero.dll)</li>
</ul>
<h3>Malicious Domains</h3>
<ul>
<li>soc.hero-sms[.]co</li>
<li>neo.herosms[.]co</li>
<li>flux.smshero[.]co</li>
<li>nova.smshero[.]ai</li>
<li>apex.herosms[.]ai</li>
<li>spark.herosms[.]io</li>
<li>iplogger[.]org</li>
</ul>
<h3>Host Indicators</h3>
<ul>
<li>Windows services with image paths pointing to <code>C:\Windows\SysWOW64\hero\</code></li>
<li>Firewall rules named &#8220;Uphero&#8221; or &#8220;hero&#8221;</li>
<li>Mutex: <code>Global\3a886eb8-fe40-4d0a-b78b-9e0bcb683fb7</code></li>
</ul>
<h2>Defensive Recommendations</h2>
<p>Any system that has executed installers from 7zip.com should be considered compromised. Security teams should:</p>
<ul>
<li>Verify software sources and bookmark official project domains (7-zip.org)</li>
<li>Treat unexpected code-signing identities with skepticism</li>
<li>Monitor for unauthorized Windows services and firewall rule changes</li>
<li>Block known C2 domains and proxy endpoints at the network perimeter</li>
</ul>
<p><em>Source: <a href="https://www.malwarebytes.com/blog/news/2026/02/fake-7-zip-downloads-are-turning-home-pcs-into-proxy-nodes" target="_blank" rel="noopener">Malwarebytes</a></em></p>
