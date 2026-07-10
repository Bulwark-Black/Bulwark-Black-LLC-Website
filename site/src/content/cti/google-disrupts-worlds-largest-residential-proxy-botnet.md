---
title: "Google Disrupts World’s Largest Residential Proxy Botnet"
publishedAt: 2026-01-29T02:48:01
summary: "Google Threat Intelligence Group disrupts IPIDEA, the world’s largest residential proxy network, used by 550+ threat groups including nation-state actors from China, Russia, Iran, and North Korea."
category: "Business"
categories:
  - "Business"
tags: []
wpId: 1741
wpSlug: "google-disrupts-worlds-largest-residential-proxy-botnet"
originalLink: "https://bulwarkblack.com/google-disrupts-worlds-largest-residential-proxy-botnet"
draft: false
---


<figure class="wp-block-image size-full"><img loading="lazy" decoding="async" width="1024" height="1024" src="/wp-content/uploads/2026/01/bluesynack_Google_Disrupts_Worlds_Largest_Residential_Proxy_Bot_6d382b83-a7f4-40f8-b52d-3b34eb6068b8.png" alt="" class="wp-image-1773" srcset="/wp-content/uploads/2026/01/bluesynack_Google_Disrupts_Worlds_Largest_Residential_Proxy_Bot_6d382b83-a7f4-40f8-b52d-3b34eb6068b8.png 1024w, /wp-content/uploads/2026/01/bluesynack_Google_Disrupts_Worlds_Largest_Residential_Proxy_Bot_6d382b83-a7f4-40f8-b52d-3b34eb6068b8-300x300.png 300w, /wp-content/uploads/2026/01/bluesynack_Google_Disrupts_Worlds_Largest_Residential_Proxy_Bot_6d382b83-a7f4-40f8-b52d-3b34eb6068b8-150x150.png 150w, /wp-content/uploads/2026/01/bluesynack_Google_Disrupts_Worlds_Largest_Residential_Proxy_Bot_6d382b83-a7f4-40f8-b52d-3b34eb6068b8-768x768.png 768w" sizes="auto, (max-width: 1024px) 100vw, 1024px" /></figure>


<p><strong>Source:</strong> <a href="https://cloud.google.com/blog/topics/threat-intelligence/disrupting-largest-residential-proxy-network/">Google Threat Intelligence</a></p>
<p>Google Threat Intelligence Group (GTIG) and partners have taken action to disrupt what they believe is <strong>one of the largest residential proxy networks in the world</strong> &#8211; the IPIDEA proxy network. This massive botnet infrastructure was leveraged by over <strong>550 threat groups</strong> from China, North Korea, Iran, and Russia in just a single week.</p>
<h2>What Is IPIDEA?</h2>
<p>Residential proxy networks sell the ability to route traffic through IP addresses owned by internet service providers used for residential customers. By routing traffic through millions of consumer devices worldwide, attackers can mask their malicious activity by hijacking legitimate IP addresses &#8211; making detection and blocking extremely difficult for network defenders.</p>
<h2>Scale of the Operation</h2>
<p>The IPIDEA network controlled multiple ostensibly independent proxy and VPN brands including:</p>
<ul>
<li>360 Proxy, 922 Proxy, ABC Proxy</li>
<li>Luna Proxy, PIA S5 Proxy, PY Proxy</li>
<li>Door VPN, Galleon VPN, Radish VPN</li>
<li>And several others</li>
</ul>
<p>These operators marketed SDKs to developers as ways to &#8220;monetize&#8221; their applications &#8211; once embedded, the SDK secretly enrolled devices into the proxy network as exit nodes.</p>
<h2>Criminal Activity Enabled</h2>
<p>GTIG observed the network being used for:</p>
<ul>
<li>Access to victim SaaS environments</li>
<li>Password spray attacks</li>
<li>Espionage operations by nation-state actors</li>
<li>Criminal and information operations</li>
</ul>
<p>The network was also linked to the <strong>BadBox2.0 botnet</strong>, <strong>Aisuru botnet</strong>, and <strong>Kimwolf botnet</strong>.</p>
<h2>Disruption Actions</h2>
<p>Google&#8217;s disruption included:</p>
<ul>
<li>Legal action to take down command-and-control domains</li>
<li>Intelligence sharing with platform providers and law enforcement</li>
<li>Google Play Protect now automatically removes apps with IPIDEA SDKs</li>
</ul>
<h2>Why It Matters</h2>
<p>This disruption significantly degraded IPIDEA&#8217;s proxy network, reducing available devices by millions. For defenders, the lesson is clear: residential proxies are overwhelmingly misused by bad actors, regardless of operators&#8217; claims about privacy benefits. Organizations should monitor for suspicious traffic patterns from residential IP ranges and implement robust network detection capabilities.</p>