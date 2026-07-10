---
title: "287 Chrome Extensions Caught Exfiltrating Browsing History from 37.4 Million Users"
publishedAt: 2026-02-20T16:04:41
summary: "A massive data exfiltration operation involving 287 Chrome extensions that secretly steal browsing history from approximately 37.4 million users worldwide has been uncovered by security researcher Q Continuum (alias qcontinuum1). The discovery represents roughly one percent of th"
category: "General CTI"
categories:
  - "General CTI"
tags:
  - "Match Group"
  - "vibe coding"
heroImage: "/wp-content/uploads/2026/02/chrome-extensions-surveillance.jpg"
wpId: 1905
wpSlug: "287-chrome-extensions-caught-exfiltrating-browsing-history-from-37-4-million-users"
originalLink: "https://bulwarkblack.com/287-chrome-extensions-caught-exfiltrating-browsing-history-from-37-4-million-users"
draft: false
---

<p>A massive data exfiltration operation involving <strong>287 Chrome extensions</strong> that secretly steal browsing history from approximately <strong>37.4 million users worldwide</strong> has been uncovered by security researcher Q Continuum (alias qcontinuum1). The discovery represents roughly one percent of the global Chrome user base, highlighting a significant privacy breach affecting millions of internet users.</p>
<h2>How the Extensions Operate</h2>
<p>The researcher developed an automated scanning system using Docker containers and a man-in-the-middle proxy to detect suspicious network activity. The system monitors outbound traffic from extensions and determines whether data transmission correlates with URL length—a key indicator of exfiltrated browsing history.</p>
<p>The malicious extensions employ various obfuscation techniques to hide their activities:</p>
<ul>
<li><strong>ROT47 encoding</strong> — Simple substitution cipher to disguise transmitted data</li>
<li><strong>AES-256 encryption with RSA key pairs</strong> — Advanced encryption to prevent interception and analysis</li>
</ul>
<h2>High-Profile Extensions Identified</h2>
<p>Popular extensions like <strong>&#8220;Poper Blocker,&#8221;</strong> <strong>&#8220;Stylish,&#8221;</strong> and <strong>&#8220;BlockSite&#8221;</strong> were identified among the offenders. Even security tools marketed as privacy-enhancing were flagged—<strong>Avast Online Security</strong>, with six million installations, was included in the list.</p>
<h2>Data Brokers Behind the Collection</h2>
<p>The investigation revealed several data brokers collecting user information:</p>
<ul>
<li><strong>Similarweb</strong> — Web analytics company operating multiple extensions including its official &#8220;Website Traffic &amp; SEO Checker&#8221; (1 million users)</li>
<li><strong>Big Star Labs</strong> — Believed to be affiliated with Similarweb, controlling extensions affecting 3.7 million users</li>
<li><strong>Curly Doggo</strong> — 1.2 million affected users</li>
<li><strong>Offidocs</strong> — 1.7 million affected users</li>
<li>Various Chinese entities also identified</li>
</ul>
<h2>Corporate Espionage Risks</h2>
<p>The exfiltrated browsing data poses risks beyond targeted advertising. <strong>Corporate espionage</strong> becomes possible when employees install seemingly innocent productivity extensions that capture:</p>
<ul>
<li>Internal URLs and intranet addresses</li>
<li>SaaS dashboard links</li>
<li>Personal identifiers embedded in URLs</li>
</ul>
<p>Researchers set up honeypot traps and detected third-party scrapers actively collecting the stolen data. Multiple IP addresses associated with companies like Kontera repeatedly accessed these honeypots, suggesting a broader ecosystem monetizing user browsing histories.</p>
<h2>Recommended Actions</h2>
<p>Users and organizations should immediately:</p>
<ol>
<li>Review installed Chrome extensions and remove those flagged in the research report</li>
<li>Install only <strong>open-source extensions</strong> that can be independently reviewed</li>
<li>Carefully check permission requests before installing any extension</li>
<li>Audit corporate browser policies for extension whitelisting</li>
</ol>
<p>With the Chrome Web Store hosting approximately 240,000 extensions, manual verification is challenging. Organizations should consider implementing browser management policies that restrict extension installations to approved lists only.</p>
<p><em>Source: <a href="https://cybersecuritynews.com/chrome-extensions-exfiltrate-browsing-history/" target="_blank" rel="noopener">Cybersecurity News</a> | Full technical report: <a href="https://github.com/qcontinuum1/spying-extensions" target="_blank" rel="noopener">GitHub &#8211; qcontinuum1/spying-extensions</a></em></p>
