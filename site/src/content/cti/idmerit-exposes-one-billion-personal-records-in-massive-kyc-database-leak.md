---
title: "IDMerit Exposes One Billion Personal Records in Massive KYC Database Leak"
publishedAt: 2026-02-21T16:03:49
summary: "Digital identity verification provider IDMerit inadvertently exposed more than one billion personal records across 26 countries after leaving a database unsecured and accessible on the public internet, according to research by Cybernews. Scale of the Exposure The exposed MongoDB "
category: "General CTI"
categories:
  - "General CTI"
tags: []
heroImage: "/wp-content/uploads/2026/02/idmerit-data-leak-billion-records.jpg"
wpId: 1911
wpSlug: "idmerit-exposes-one-billion-personal-records-in-massive-kyc-database-leak"
originalLink: "https://bulwarkblack.com/idmerit-exposes-one-billion-personal-records-in-massive-kyc-database-leak"
draft: false
---


<p>Digital identity verification provider IDMerit inadvertently exposed more than <strong>one billion personal records</strong> across 26 countries after leaving a database unsecured and accessible on the public internet, according to research by <a href="https://cybernews.com/security/global-data-leak-exposes-billion-records/" target="_blank" rel="noopener">Cybernews</a>.</p>



<h2 class="wp-block-heading">Scale of the Exposure</h2>



<p>The exposed MongoDB database contained <strong>over three billion records</strong> weighing more than one terabyte. Security researchers estimate that approximately one billion of these records contained sensitive personal information, with the remaining two billion consisting of database logs deemed &#8220;likely less sensitive.&#8221;</p>



<p><strong>Countries most affected:</strong></p>



<ul class="wp-block-list"><li>United States: 204 million records</li><li>Mexico: 123 million records</li><li>Philippines: 72 million records</li><li>Germany: 60 million records</li><li>Italy: 53 million records</li><li>France: 52 million records</li><li>Turkey: 49 million records</li><li>Brazil: 39 million records</li></ul>



<h2 class="wp-block-heading">What Data Was Exposed</h2>



<p>The unsecured database contained a wealth of personally identifiable information (PII) used for KYC (Know Your Customer) verification processes:</p>



<ul class="wp-block-list"><li>Full names</li><li>Physical addresses and post codes</li><li>Dates of birth</li><li>National identification numbers</li><li>Phone numbers</li><li>Email addresses</li><li>Gender information</li><li>Telco metadata</li><li>Breach status and social profile annotations</li></ul>



<h2 class="wp-block-heading">Identity Verification as Critical Infrastructure</h2>



<p>IDMerit is a California-based, AI-powered identity verification and fraud prevention company that provides API-based solutions for KYC, AML (Anti-Money Laundering), and digital identity verification. Founded in 2014, the company serves the financial services and fintech industries globally.</p>



<p>&#8220;<em>At this scale, downstream risks include account takeovers, targeted phishing, credit fraud, SIM swaps, and long-tail privacy harms,</em>&#8221; Cybernews warned. &#8220;<em>Industry-wide, the case underlines how third-party identity vendors have become critical infrastructure and can become single points of catastrophic failure.</em>&#8220;</p>



<h2 class="wp-block-heading">The Dangers of Exposed KYC Data</h2>



<p>Unlike typical data breaches where hackers infiltrate systems, this was a <strong>data leak</strong> caused by misconfiguration—the database was simply left unprotected without a password. Cybernews discovered the exposure on November 11 and immediately contacted IDMerit, which subsequently secured the database.</p>



<p>The structured nature of the leaked data makes it particularly dangerous. Cybercriminals could easily search through records to:</p>



<ul class="wp-block-list"><li>Conduct <strong>account takeover attacks</strong> using verified identity information</li><li>Launch <strong>highly targeted spear-phishing campaigns</strong></li><li>Commit <strong>credit fraud and identity theft</strong></li><li>Execute <strong>SIM swap attacks</strong> using phone numbers and personal details</li><li>Bypass identity verification on other platforms using stolen national IDs</li></ul>



<h2 class="wp-block-heading">Recommendations</h2>



<p>If you&#8217;ve used services that may have employed IDMerit for identity verification, consider:</p>



<ul class="wp-block-list"><li>Monitoring your credit reports for suspicious activity</li><li>Being vigilant about targeted phishing attempts via email or text</li><li>Considering a credit freeze if you&#8217;re in highly affected countries</li><li>Enabling multi-factor authentication on all financial accounts</li><li>Using identity theft protection services</li></ul>



<p>This incident serves as a stark reminder that companies handling sensitive identity verification data must treat security as a paramount concern. The centralization of identity data in third-party verification providers creates significant systemic risk when security lapses occur.</p>



<hr class="wp-block-separator has-alpha-channel-opacity" />



<p class="has-small-font-size"><strong>Source:</strong> <a href="https://www.techradar.com/pro/security/massive-global-data-breach-sees-over-a-billion-records-exposed-heres-what-we-know-so-far" target="_blank" rel="noopener">TechRadar</a>, <a href="https://www.tomsguide.com/computing/online-security/1-billion-personal-records-from-26-countries-exposed-in-massive-new-data-leak-how-to-stay-safe" target="_blank" rel="noopener">Tom&#8217;s Guide</a>, <a href="https://cybernews.com/security/global-data-leak-exposes-billion-records/" target="_blank" rel="noopener">Cybernews</a></p>
