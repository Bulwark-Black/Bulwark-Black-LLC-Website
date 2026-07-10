---
title: "Match Group Data Breach Exposes User Information from Tinder, Hinge, and OkCupid"
publishedAt: 2026-01-30T08:41:50
summary: "Match Group confirms cybersecurity incident after ShinyHunters voice phishing campaign compromises SSO account, exposing data from popular dating apps including Tinder, Hinge, OkCupid, and Match.com."
category: "Business"
categories:
  - "Business"
tags:
  - "data breach"
  - "dating apps"
  - "Hinge"
  - "Match Group"
  - "OkCupid"
  - "Okta"
  - "ShinyHunters"
  - "SSO security"
  - "Tinder"
  - "voice phishing"
heroImage: "/wp-content/uploads/2026/01/match-group-breach.png"
wpId: 1746
wpSlug: "match-group-data-breach-exposes-user-information-from-tinder-hinge-and-okcupid"
originalLink: "https://bulwarkblack.com/match-group-data-breach-exposes-user-information-from-tinder-hinge-and-okcupid"
draft: false
---

<p><strong>Source:</strong> <a href="https://www.bleepingcomputer.com/news/security/match-group-breach-exposes-data-from-hinge-tinder-okcupid-and-match/" target="_blank">BleepingComputer</a></p>
<p>Match Group, the parent company behind some of the world&#8217;s most popular dating platforms-including Tinder, Hinge, OkCupid, Match.com, and Meetic-has confirmed a cybersecurity incident that compromised user data.</p>
<h2>What Happened</h2>
<p>The ShinyHunters threat group leaked approximately 1.7 GB of compressed files allegedly containing 10 million records of user information and internal documents. Match Group has confirmed that hackers stole a &#8220;limited amount of user data&#8221; in the incident.</p>
<p>The attack was conducted through a sophisticated voice phishing (vishing) campaign targeting single sign-on (SSO) accounts. The threat actors compromised an Okta SSO account using a phishing domain at &#8216;matchinternal.com&#8217;, which gave them access to the company&#8217;s AppsFlyer marketing analytics instance as well as Google Drive and Dropbox cloud storage accounts.</p>
<h2>Impact Assessment</h2>
<p>According to Match Group&#8217;s statement, the investigation-conducted with external experts-found no indication that the hackers accessed:</p>
<ul>
<li>User login credentials</li>
<li>Financial information</li>
<li>Private communications</li>
</ul>
<p>The company stated the incident affects &#8220;a limited amount of user data&#8221; and is already notifying affected individuals. However, with Match Group&#8217;s user base estimated at over 80 million active users and annual revenue of .5 billion, even a &#8220;limited&#8221; breach could have significant implications.</p>
<h2>Defense Recommendations</h2>
<p>Security experts recommend organizations implement the following protections against similar social engineering attacks:</p>
<ul>
<li><strong>Phishing-resistant MFA:</strong> Deploy FIDO2 security keys or passkeys where possible, as these are resistant to social engineering in ways that push-based or SMS authentication are not</li>
<li><strong>Strict app authorization policies:</strong> Implement controls to prevent unauthorized application access</li>
<li><strong>Network zones and access control lists:</strong> Know where legitimate requests originate and allowlist those networks</li>
<li><strong>Monitor for anomalies:</strong> Track logs for unusual API activity or unauthorized device enrollments</li>
</ul>
<p>This incident is part of a larger ShinyHunters campaign targeting SSO accounts at Okta, Microsoft, and Google across over a hundred high-value organizations.</p>
<h2>Key Takeaways</h2>
<p>The Match Group breach highlights the growing threat of voice phishing against enterprise SSO systems. Organizations should prioritize phishing-resistant authentication methods and implement robust monitoring to detect compromised accounts before data exfiltration occurs.</p>
