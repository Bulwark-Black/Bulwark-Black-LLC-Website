---
title: "Starkiller: New Commercial-Grade Phishing Kit Bypasses MFA with Live Site Proxying"
publishedAt: 2026-02-21T16:30:20
summary: "A newly uncovered phishing kit allows cybercriminals to steal credentials with a sophisticated toolkit that spoofs live login pages and bypasses multi-factor authentication (MFA) protections, cybersecurity analysts at Abnormal Security have warned. Dubbed Starkiller, the phishing"
category: "Threat Intelligence"
categories: []
tags: []
wpId: 1912
wpSlug: "starkiller-new-commercial-grade-phishing-kit-bypasses-mfa-with-live-site-proxying"
originalLink: "https://bulwarkblack.com/starkiller-new-commercial-grade-phishing-kit-bypasses-mfa-with-live-site-proxying"
draft: false
---

<p>A newly uncovered phishing kit allows cybercriminals to steal credentials with a sophisticated toolkit that spoofs live login pages and bypasses multi-factor authentication (MFA) protections, cybersecurity analysts at Abnormal Security have warned.</p>
<p>Dubbed <strong>Starkiller</strong>, the phishing platform has been described as &#8220;a commercial-grade cybercrime platform&#8221; and &#8220;a comprehensive toolkit for stealing identities at scale.&#8221; The tool is distributed on the dark web as a SaaS product, complete with subscription pricing, regular updates, and customer support via Telegram.</p>
<h2>How Starkiller Differs from Traditional Phishing Kits</h2>
<p>Unlike most phishing kits that rely on static HTML clones of login pages, Starkiller takes a fundamentally different approach. The phishing site is launched through a <strong>reverse proxy</strong> operated by attacker-controlled infrastructure, serving victims the genuine page content in real-time.</p>
<p>&#8220;Recipients are served genuine page content directly through the attacker&#8217;s infrastructure, ensuring the phishing page is never out of date. And because Starkiller proxies the real site live, there are no template files for security vendors to fingerprint or blocklist,&#8221; Abnormal researchers explained.</p>
<p>The proxy runs in a headless Chrome instance, giving users little to no reason for suspicion — while credentials entered are captured directly by the attackers.</p>
<h2>Extensive Target Support</h2>
<p>Starkiller provides attackers with the ability to mimic:</p>
<ul>
<li>Google and Microsoft</li>
<li>Facebook and Apple</li>
<li>Amazon and Netflix</li>
<li>PayPal and various banks</li>
<li>Many other online services</li>
</ul>
<p>The tool generates deceptive URLs that visually mimic legitimate domains while routing all traffic through attacker infrastructure.</p>
<h2>Real-Time Session Hijacking and MFA Bypass</h2>
<p>Starkiller offers cybercriminals <strong>real-time session monitoring</strong>, allowing them to watch targets interact with the phishing page live. A built-in keylogger captures everything the victim types.</p>
<p>Most critically, Starkiller enables <strong>MFA bypass</strong>. Because the targeted user is authenticating with the real site through the proxy, any one-time codes or authentication tokens they submit are forwarded to the legitimate service in real time — providing attackers with direct access to the account.</p>
<h2>Distribution and Defense</h2>
<p>Starkiller attacks are likely distributed via phishing emails imitating legitimate alerts from services like Google and Microsoft.</p>
<p>&#8220;The level of ongoing development means Starkiller is likely to become increasingly difficult to detect and defend against,&#8221; warned Abnormal researchers.</p>
<p><strong>Recommended defenses:</strong></p>
<ul>
<li>Monitor for anomalous login patterns</li>
<li>Watch for session token reuse from unexpected locations</li>
<li>Implement hardware-based FIDO2 authentication where possible</li>
<li>Train users to verify URLs before entering credentials</li>
</ul>
<p><strong>Source:</strong> <a href="https://www.infosecurity-magazine.com/news/starkiller-phishing-kit-bypasses/" target="_blank" rel="noopener">Infosecurity Magazine</a> | <a href="https://abnormal.ai/blog/starkiller-phishing-kit" target="_blank" rel="noopener">Abnormal Security Research</a></p>
