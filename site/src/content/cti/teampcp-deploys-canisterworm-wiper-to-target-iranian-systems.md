---
title: "TeamPCP Deploys CanisterWorm Wiper to Target Iranian Systems"
publishedAt: 2026-03-24T15:03:54
summary: "The cybercrime group TeamPCP has added a destructive wiper component to their cloud-native attack infrastructure, specifically targeting systems in Iran based on timezone and language settings. From Data Theft to Destruction Security researcher Charlie Eriksen at Aikido discovere"
category: "Threat Intelligence"
categories: []
tags:
  - "Adware"
  - "Energy Security"
  - "Exfiltrator-22"
  - "GDPR"
  - "Lumma"
  - "NoName"
  - "Youtube"
heroImage: "/wp-content/uploads/2026/03/canisterworm-wiper-iran.jpg"
wpId: 2109
wpSlug: "teampcp-deploys-canisterworm-wiper-to-target-iranian-systems"
originalLink: "https://bulwarkblack.com/teampcp-deploys-canisterworm-wiper-to-target-iranian-systems"
draft: false
---

<p>The cybercrime group TeamPCP has added a destructive wiper component to their cloud-native attack infrastructure, specifically targeting systems in Iran based on timezone and language settings.</p>
<h2>From Data Theft to Destruction</h2>
<p>Security researcher Charlie Eriksen at Aikido discovered that TeamPCP deployed the wiper payload over the weekend, leveraging the same technical infrastructure used in their recent <a href="https://www.wiz.io/blog/trivy-compromised-teampcp-supply-chain-attack" target="_blank" rel="noopener">supply chain attack against Trivy</a>, the popular vulnerability scanner from Aqua Security.</p>
<p>The malicious payload, dubbed &#8220;CanisterWorm,&#8221; checks whether the victim&#8217;s timezone corresponds to Iran and whether Farsi is set as the default language. If these conditions are met and the system has access to a Kubernetes cluster, the wiper destroys data on every node in that cluster. Systems without Kubernetes access are simply wiped locally.</p>
<h2>Blockchain-Based Command Infrastructure</h2>
<p>TeamPCP operates their campaign infrastructure using Internet Computer Protocol (ICP) canisters—tamperproof, blockchain-based smart contracts that combine code and data. These canisters can serve web content directly and their distributed architecture makes them highly resistant to takedown attempts, remaining operational as long as operators pay virtual currency fees.</p>
<h2>Pattern of Cloud-Native Attacks</h2>
<p>According to research from Flare published in January, TeamPCP has been compromising corporate cloud environments since December 2025 using a self-propagating worm targeting:</p>
<ul>
<li>Exposed Docker APIs</li>
<li>Kubernetes clusters</li>
<li>Redis servers</li>
<li>React2Shell vulnerabilities</li>
</ul>
<p>The group predominantly targets cloud infrastructure over end-user devices, with Azure (61%) and AWS (36%) accounting for 97% of compromised servers.</p>
<h2>Supply Chain Attack Expansion</h2>
<p>Wiz is <a href="https://www.wiz.io/blog/teampcp-attack-kics-github-action" target="_blank" rel="noopener">reporting</a> that TeamPCP has also pushed credential-stealing malware to the KICS vulnerability scanner from Checkmarx, with the scanner&#8217;s GitHub Action compromised on March 23rd.</p>
<p>This represents the second major supply chain attack involving Trivy in as many months, following the HackerBot-Claw campaign in February that mass-exploited misconfigured GitHub Actions workflows.</p>
<h2>Chaos as a Strategy</h2>
<p>Eriksen noted the group&#8217;s erratic behavior, rapidly taking malicious code up and down while adding new features. When not serving malware, the canister redirected visitors to a Rick Roll video on YouTube. &#8220;It&#8217;s a little all over the place, and there&#8217;s a chance this whole Iran thing is just their way of getting attention,&#8221; Eriksen told Krebs on Security. &#8220;I feel like these people are really playing this Chaotic Evil role here.&#8221;</p>
<h2>Implications</h2>
<p>While the actual damage from the wiper remains unconfirmed—the payload was only active briefly—this attack demonstrates how cybercriminal groups can quickly pivot to destructive operations targeting specific nations. Organizations using cloud infrastructure should audit their Docker API exposure, Kubernetes cluster security, and GitHub Actions configurations.</p>
<p><a href="https://krebsonsecurity.com/2026/03/canisterworm-springs-wiper-attack-targeting-iran/" target="_blank" rel="noopener">Source: Krebs on Security</a></p>
