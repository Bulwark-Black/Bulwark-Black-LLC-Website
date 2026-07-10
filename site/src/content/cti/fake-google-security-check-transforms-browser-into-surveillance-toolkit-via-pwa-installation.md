---
title: "Fake Google Security Check Transforms Browser Into Surveillance Toolkit via PWA Installation"
publishedAt: 2026-03-02T21:04:42
summary: "A sophisticated phishing campaign has been discovered that transforms web browsers into comprehensive surveillance platforms by masquerading as a Google Account security page. According to Malwarebytes researchers, this attack represents one of the most fully-featured browser-bas"
category: "General CTI"
categories:
  - "General CTI"
  - "Malware"
tags: []
heroImage: "/wp-content/uploads/2026/03/google-pwa-phishing-2026-03-02.jpg"
wpId: 1964
wpSlug: "fake-google-security-check-transforms-browser-into-surveillance-toolkit-via-pwa-installation"
originalLink: "https://bulwarkblack.com/fake-google-security-check-transforms-browser-into-surveillance-toolkit-via-pwa-installation"
draft: false
---

<p>A sophisticated phishing campaign has been discovered that transforms web browsers into comprehensive surveillance platforms by masquerading as a Google Account security page. According to <a href="https://www.malwarebytes.com/blog/privacy/2026/02/inside-a-fake-google-security-check-that-becomes-a-browser-rat" target="_blank" rel="noopener">Malwarebytes researchers</a>, this attack represents one of the most fully-featured browser-based surveillance toolkits observed in the wild.</p>
<h2>Attack Methodology</h2>
<p>The attack begins with a convincing replica of a Google Account security alert. Victims are guided through a four-step process that appears to enhance their security but actually grants extensive access to attackers:</p>
<ol>
<li><strong>PWA Installation:</strong> Users install the &#8220;security tool&#8221; as a Progressive Web App, which removes the browser address bar and creates the appearance of a native application</li>
<li><strong>Notification Permissions:</strong> Framed as enabling &#8220;security alerts,&#8221; this grants the attacker a persistent communication channel</li>
<li><strong>Contact Harvesting:</strong> Using the legitimate Contact Picker API, the site tricks users into sharing contacts under the guise of &#8220;protection&#8221;</li>
<li><strong>Location Tracking:</strong> GPS data including latitude, longitude, altitude, heading, and speed are exfiltrated under the premise of &#8220;identity verification&#8221;</li>
</ol>
<h2>Technical Capabilities</h2>
<p>The malware operates on two levels. The page script runs while the app is open, attempting to read clipboard contents on focus changes, intercept SMS verification codes via WebOTP API, and build detailed device fingerprints. It polls the command-and-control server every 30 seconds, awaiting operator commands.</p>
<p>The service worker component survives even after closing the browser tab. It handles push notifications, executes background tasks, and queues stolen data locally when offline, automatically flushing the queue when connectivity returns.</p>
<h2>Browser as HTTP Proxy</h2>
<p>Perhaps the most concerning capability is the WebSocket relay that allows attackers to route arbitrary web requests through the victim&#8217;s browser. This enables:</p>
<ul>
<li>Access to internal corporate resources if the victim is on a corporate network</li>
<li>Bypassing IP-based access controls</li>
<li>Making attacker traffic appear to originate from the victim&#8217;s residential IP</li>
<li>Internal network port scanning from within the browser sandbox</li>
</ul>
<h2>Android Companion Implant</h2>
<p>For victims who follow every prompt, the attack delivers a secondary Android APK disguised as a &#8220;critical security update.&#8221; The 122KB package, labeled &#8220;System Service,&#8221; requests 33 permissions including:</p>
<ul>
<li>SMS and call log access</li>
<li>Microphone access</li>
<li>Accessibility service control</li>
<li>A custom keyboard for keystroke capture</li>
<li>Notification listener for intercepting 2FA codes</li>
<li>Autofill service hijacking</li>
</ul>
<h2>Indicators of Compromise</h2>
<p>The infrastructure uses the domain <code>google-prism[.]com</code> as the sole command-and-control server, routed through Cloudflare&#8217;s CDN.</p>
<h2>Protection Recommendations</h2>
<p>Organizations and individuals should:</p>
<ul>
<li>Train users to verify URLs before granting any browser permissions</li>
<li>Be suspicious of any &#8220;security check&#8221; that requests PWA installation</li>
<li>Regularly audit browser notification permissions and revoke suspicious entries</li>
<li>Deploy endpoint detection and response (EDR) solutions capable of monitoring browser-based attacks</li>
<li>Monitor for service worker registrations from unknown domains</li>
</ul>
<p>This attack demonstrates the evolving sophistication of browser-based threats and the need for comprehensive security awareness training that addresses modern attack vectors beyond traditional email phishing.</p>
