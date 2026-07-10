---
title: "KadNap Botnet Hijacks 14,000+ ASUS Routers Using Novel Kademlia DHT Protocol for Stealth C2"
publishedAt: 2026-03-12T01:03:24
summary: "A newly discovered botnet called KadNap is turning ASUS routers and edge networking devices into covert proxies for cybercriminal operations. Since August 2025, the malware has infected over 14,000 devices across the globe, with researchers from Black Lotus Labs (Lumen Technologi"
category: "Malware"
categories:
  - "Malware"
tags: []
heroImage: "/wp-content/uploads/2026/03/kadnap-botnet-router-scaled.jpg"
wpId: 2041
wpSlug: "kadnap-botnet-hijacks-14000-asus-routers-using-novel-kademlia-dht-protocol-for-stealth-c2"
originalLink: "https://bulwarkblack.com/kadnap-botnet-hijacks-14000-asus-routers-using-novel-kademlia-dht-protocol-for-stealth-c2"
draft: false
---


<p><strong>A newly discovered botnet called KadNap is turning ASUS routers and edge networking devices into covert proxies for cybercriminal operations.</strong> Since August 2025, the malware has infected over 14,000 devices across the globe, with researchers from Black Lotus Labs (Lumen Technologies) revealing a sophisticated command-and-control (C2) infrastructure that leverages a customized version of the <strong>Kademlia Distributed Hash Table (DHT)</strong> protocol to evade detection.</p>



<h2 class="wp-block-heading">Why Kademlia Makes KadNap Dangerous</h2>



<p>The Kademlia DHT protocol is typically used in legitimate peer-to-peer applications for distributed data storage. KadNap weaponizes this technology to <strong>decentralize its C2 infrastructure</strong>, making it significantly harder for defenders to identify and block control servers.</p>



<p>&#8220;KadNap employs a custom version of the Kademlia DHT protocol, which is used to conceal the IP address of their infrastructure within a peer-to-peer system to evade traditional network monitoring,&#8221; <a href="https://blog.lumen.com/silence-of-the-hops-the-kadnap-botnet/" target="_blank" rel="noreferrer noopener">Black Lotus Labs researchers explain</a>. &#8220;Infected devices use the DHT protocol to locate and connect with a C2 server, while defenders cannot easily find and add those C2s to threat lists.&#8221;</p>



<h2 class="wp-block-heading">Global Infection Distribution</h2>



<p>The <strong>United States accounts for 60%</strong> of all infected devices, followed by significant concentrations in Taiwan, Hong Kong, and Russia. Nearly half of the KadNap network connects to C2 infrastructure specifically dedicated to ASUS-based bots, with the remainder communicating through two separate control servers.</p>



<h2 class="wp-block-heading">Infection Chain: From Script to Persistence</h2>



<p>KadNap infections begin with a malicious shell script (<code>aic.sh</code>) downloaded from <code>212.104.141[.]140</code>. The script:</p>



<ul class="wp-block-list">
<li>Establishes <strong>persistence via a cron job</strong> that executes every 55 minutes</li>



<li>Downloads an ELF binary named <code>kad</code> that installs the KadNap client</li>



<li>Determines the host&#8217;s external IP address</li>



<li>Contacts multiple NTP servers to obtain current time and system uptime</li>
</ul>



<h2 class="wp-block-heading">Monetization Through Proxy-as-a-Service</h2>



<p>Black Lotus Labs has linked KadNap to the <strong>Doppelganger proxy service</strong>, believed to be a rebrand of the notorious Faceless service previously associated with the <strong>TheMoon malware botnet</strong>, which also targeted ASUS routers.</p>



<p>Doppelganger sells access to infected devices as residential proxies, enabling threat actors to:</p>



<ul class="wp-block-list">
<li>Route malicious traffic through legitimate residential IPs</li>



<li>Create pseudonymization layers for operational security</li>



<li>Evade IP-based blocklists and security controls</li>



<li>Launch DDoS attacks, credential stuffing, and brute-force campaigns</li>
</ul>



<h2 class="wp-block-heading">Disruption Efforts Underway</h2>



<p>Lumen has taken proactive measures against KadNap, blocking all network traffic to and from the known control infrastructure on their network. However, the botnet&#8217;s use of DHT-based C2 makes complete disruption challenging.</p>



<p>Researchers discovered a weakness in KadNap&#8217;s Kademlia implementation: infected devices consistently connect to two specific nodes before reaching C2 servers, which undermines the full decentralization the protocol could achieve.</p>



<h2 class="wp-block-heading">Indicators of Compromise</h2>



<p><strong>Network IOCs:</strong></p>



<ul class="wp-block-list">
<li>Initial payload server: <code>212.104.141[.]140</code></li>



<li>Initial script: <code>aic.sh</code></li>



<li>Payload binary: <code>kad</code> (ELF executable)</li>
</ul>



<h2 class="wp-block-heading">Defensive Recommendations</h2>



<ol class="wp-block-list">
<li><strong>Update router firmware</strong> — Ensure ASUS routers run the latest firmware with security patches</li>



<li><strong>Disable remote management</strong> — Turn off WAN-side administration if not required</li>



<li><strong>Monitor cron jobs</strong> — Check for unauthorized scheduled tasks running at unusual intervals (55 minutes)</li>



<li><strong>Block known IOCs</strong> — Add the payload server IP to network blocklists</li>



<li><strong>Check for unusual outbound connections</strong> — Monitor for DHT-like P2P traffic patterns from edge devices</li>
</ol>



<hr class="wp-block-separator has-alpha-channel-opacity" />



<p><em>Source: <a href="https://www.bleepingcomputer.com/news/security/new-kadnap-botnet-hijacks-asus-routers-to-fuel-cybercrime-proxy-network/" target="_blank" rel="noreferrer noopener">BleepingComputer</a> | <a href="https://blog.lumen.com/silence-of-the-hops-the-kadnap-botnet/" target="_blank" rel="noreferrer noopener">Black Lotus Labs</a></em></p>
