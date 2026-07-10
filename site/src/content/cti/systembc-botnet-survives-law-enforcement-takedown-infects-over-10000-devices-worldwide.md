---
title: "SystemBC Botnet Survives Law Enforcement Takedown, Infects Over 10,000 Devices Worldwide"
publishedAt: 2026-02-05T21:02:12
summary: "The SystemBC malware loader has demonstrated remarkable resilience, continuing to operate despite targeted efforts during Europol’s Operation Endgame in May 2024. Cybersecurity firm Silent Push has identified more than 10,000 unique infected IP addresses across a massive botnet i"
category: "Malware"
categories:
  - "Malware"
tags: []
heroImage: "/wp-content/uploads/2026/02/systembc-botnet-2026-02-05.jpg"
wpId: 1813
wpSlug: "systembc-botnet-survives-law-enforcement-takedown-infects-over-10000-devices-worldwide"
originalLink: "https://bulwarkblack.com/systembc-botnet-survives-law-enforcement-takedown-infects-over-10000-devices-worldwide"
draft: false
---

<p>The SystemBC malware loader has demonstrated remarkable resilience, continuing to operate despite targeted efforts during Europol&#8217;s Operation Endgame in May 2024. Cybersecurity firm Silent Push has identified more than 10,000 unique infected IP addresses across a massive botnet infrastructure that shows no signs of slowing down.</p>
<h2>Key Findings</h2>
<p>Silent Push researchers deployed a custom-built SystemBC tracker that revealed a thriving criminal infrastructure:</p>
<ul>
<li><strong>10,340+ victim IPs</strong> identified in a single cluster</li>
<li><strong>2,888 average daily active infections</strong></li>
<li><strong>38-day average infection persistence</strong>, with some exceeding 100 days</li>
<li><strong>New Perl variant</strong> discovered targeting Linux systems with zero antivirus detections</li>
<li><strong>Government infrastructure compromised</strong> in Vietnam and Burkina Faso</li>
</ul>
<h2>What is SystemBC?</h2>
<p>First documented by Proofpoint in 2019 (also known as &#8220;Coroxy&#8221; or &#8220;DroxiDat&#8221;), SystemBC is a multi-platform proxy malware that converts compromised systems into SOCKS5 proxies. The malware serves two primary purposes:</p>
<ol>
<li><strong>Traffic Proxying:</strong> Routes malicious traffic through compromised systems to mask attacker infrastructure</li>
<li><strong>Persistent Backdoor:</strong> Maintains external access to infected internal networks for follow-on attacks</li>
</ol>
<p>The malware uses a &#8220;backconnect&#8221; architecture with RC4-encrypted custom protocols, enabling threat actors to relay traffic through infected systems while evading detection. Historically, SystemBC has been a precursor to ransomware deployments, making early detection critical.</p>
<h2>Global Impact</h2>
<p>The infection distribution reveals a heavy focus on hosting infrastructure rather than residential networks:</p>
<ul>
<li><strong>United States:</strong> 4,300+ infected IPs (largest concentration)</li>
<li><strong>Germany:</strong> 829 infected IPs</li>
<li><strong>France:</strong> 448 infected IPs</li>
<li><strong>Singapore:</strong> 419 infected IPs</li>
<li><strong>India:</strong> 294 infected IPs</li>
</ul>
<p>Top targeted ASNs include major hosting providers: Network Solutions, UnifiedLayer, Namecheap, GoDaddy, and IONOS. This targeting strategy explains the extended infection durations—hosting IPs remain stable far longer than residential connections.</p>
<h2>Government Systems Compromised</h2>
<p>Perhaps most concerning, Silent Push identified SystemBC infections affecting government infrastructure:</p>
<ul>
<li><strong>Vietnam:</strong> IP address 103.28.36[.]105 was found hosting the official provincial government website phutho.duchop[.]gov[.]vn</li>
<li><strong>Burkina Faso:</strong> IP address 196.13.207[.]92 linked to multiple government domains including concours[.]gov[.]bf</li>
</ul>
<p>Many infected IPs have also been observed conducting WordPress exploitation activity, suggesting attackers are leveraging the botnet for broader web application attacks.</p>
<h2>New Linux Variant Evades Detection</h2>
<p>Researchers discovered a previously undocumented SystemBC variant written in Perl, specifically designed to target Linux systems. This variant achieved <strong>zero detections across all 62 antivirus engines on VirusTotal</strong>—a stark reminder that signature-based detection alone is insufficient.</p>
<p>The associated dropper files (SafeObject and StringHash) recursively hunt for writable directories before deploying 264 embedded SystemBC payloads. The code contains Russian-language strings, providing a clue about potential origins.</p>
<h2>Bulletproof Hosting Infrastructure</h2>
<p>SystemBC command-and-control servers leverage abuse-tolerant bulletproof hosting providers, specifically:</p>
<ul>
<li><strong>BTHoster</strong> (bthoster[.]com)</li>
<li><strong>AS213790</strong> (BTCloud)</li>
</ul>
<p>Despite Operation Endgame&#8217;s disruption efforts, the malware&#8217;s developer &#8220;psevdo&#8221; continues posting updates on Russian-language forums, announcing Linux bot and C2 server updates and bug fixes.</p>
<h2>Indicators of Compromise (IOCs)</h2>
<p><strong>SystemBC C2 IPs:</strong></p>
<ul>
<li>36.255.98[.]159</li>
<li>62.60.131[.]191</li>
<li>36.255.98[.]179</li>
<li>62.60.131[.]184</li>
<li>36.255.98[.]152</li>
<li>36.255.98[.]160</li>
<li>62.60.131[.]187</li>
<li>62.60.131[.]204</li>
<li>62.60.131[.]180</li>
<li>36.255.98[.]165</li>
</ul>
<p><strong>Malicious SHA256 Hashes:</strong></p>
<ul>
<li>SystemBC Perl: c729bf6ea292116b3477da4843aaeec73370e2bd46e7a27674671e9a65fb473a</li>
<li>SafeObject dropper: 0f5c81eaf35755a52e670c89b9546e7047828d83f346e3c29be1f6958e14a384</li>
<li>StringHash dropper: da95384032f84228ef62f982f3c0f9e574dc6b06b606db33889ea6a5f93d6ae2</li>
</ul>
<h2>Mitigation Recommendations</h2>
<ol>
<li><strong>Block known IOCs:</strong> Implement blocking for the C2 IPs and file hashes listed above</li>
<li><strong>Monitor hosting ASNs:</strong> Increase monitoring for traffic to/from bulletproof hosting providers</li>
<li><strong>Patch WordPress:</strong> Many infections leverage WordPress exploitation as an entry vector</li>
<li><strong>Deploy EDR:</strong> Signature-based detection missed the new Perl variant entirely</li>
<li><strong>Watch for SOCKS5 traffic:</strong> Unusual proxy behavior may indicate SystemBC infection</li>
</ol>
<h2>Why This Matters</h2>
<p>SystemBC&#8217;s survival of Operation Endgame demonstrates the challenges law enforcement faces in permanently disrupting criminal infrastructure. The malware&#8217;s role as a ransomware precursor makes it a critical indicator—organizations detecting SystemBC activity should assume they may be in the early stages of a larger intrusion chain.</p>
<p>With continued development of new variants and expansion into Linux environments, SystemBC remains an active threat requiring proactive defense strategies beyond traditional signature-based detection.</p>
<p><a href="https://www.silentpush.com/blog/systembc/" target="_blank" rel="noopener"><strong>SOURCE: Silent Push</strong></a></p>
