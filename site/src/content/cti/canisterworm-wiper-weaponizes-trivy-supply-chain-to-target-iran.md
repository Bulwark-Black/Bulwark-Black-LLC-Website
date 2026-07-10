---
title: "CanisterWorm Wiper Weaponizes Trivy Supply Chain to Target Iran"
publishedAt: 2026-03-24T20:03:06
summary: "A cybercrime group is attempting to leverage the ongoing US-Iran conflict by deploying a destructive wiper malware that specifically targets systems configured for Iranian users, according to new research from Krebs on Security and Aikido. TeamPCP Launches Iran-Targeting Wiper Th"
category: "Iranian Cyber Threat Intelligence"
categories:
  - "Iranian Cyber Threat Intelligence"
tags: []
heroImage: "/wp-content/uploads/2026/03/canisterworm-iran-wiper.jpg"
wpId: 2111
wpSlug: "canisterworm-wiper-weaponizes-trivy-supply-chain-to-target-iran"
originalLink: "https://bulwarkblack.com/canisterworm-wiper-weaponizes-trivy-supply-chain-to-target-iran"
draft: false
---

<p>A cybercrime group is attempting to leverage the ongoing US-Iran conflict by deploying a destructive wiper malware that specifically targets systems configured for Iranian users, according to new research from Krebs on Security and Aikido.</p>
<h2>TeamPCP Launches Iran-Targeting Wiper</h2>
<p>The financially motivated threat actor <strong>TeamPCP</strong> has weaponized its existing supply chain compromise to deploy <strong>CanisterWorm</strong>, a wiper that identifies and destroys data on systems matching Iran&#8217;s timezone or configured with Farsi as the default language.</p>
<p>Security researcher <strong>Charlie Eriksen</strong> from Aikido <a href="https://www.aikido.dev/blog/teampcp-stage-payload-canisterworm-iran" target="_blank" rel="noopener">reports</a> that if the wiper detects a victim in Iran with access to a Kubernetes cluster, it will systematically destroy data on every node in that cluster. Systems without Kubernetes access simply have their local data wiped.</p>
<h2>Blockchain-Based Command Infrastructure</h2>
<p>TeamPCP&#8217;s infrastructure—dubbed CanisterWorm by researchers—leverages the <strong>Internet Computer Protocol (ICP)</strong>, a blockchain-based system of tamperproof &#8220;smart contracts&#8221; that combine code and data. These canisters can serve web content directly and their distributed architecture makes them highly resistant to takedown attempts.</p>
<p>&#8220;The canisters will remain reachable so long as their operators continue to pay virtual currency fees to keep them online,&#8221; Krebs noted.</p>
<h2>Supply Chain Attack Chain</h2>
<p>The Iran-targeting payload emerged from TeamPCP&#8217;s March 19 supply chain attack against <strong>Trivy</strong>, the popular vulnerability scanner from Aqua Security. The attackers injected credential-stealing malware into official GitHub releases, capturing SSH keys, cloud credentials, Kubernetes tokens, and cryptocurrency wallets.</p>
<p>According to <strong>Wiz</strong>, TeamPCP has now expanded operations to compromise the <strong>KICS</strong> vulnerability scanner from Checkmarx, with the GitHub Action compromised between 12:58 and 16:50 UTC on March 23rd.</p>
<h2>Chaotic Tactics</h2>
<p>TeamPCP&#8217;s operators have demonstrated erratic behavior, toggling their malicious canisters between serving malware and redirecting to Rick Roll videos on YouTube. They&#8217;ve also been spotted bragging about their exploits in Telegram groups and spamming compromised GitHub accounts to demonstrate their access.</p>
<p>&#8220;It&#8217;s a little all over the place, and there&#8217;s a chance this whole Iran thing is just their way of getting attention,&#8221; Eriksen told Krebs. &#8220;I feel like these people are really playing this Chaotic Evil role here.&#8221;</p>
<h2>Why It Matters</h2>
<p>As tensions between the US and Iran escalate, opportunistic threat actors are injecting themselves into the conflict—regardless of whether their attacks cause meaningful damage. The Iran-focused wiper payload emerged during Iran&#8217;s ongoing internet restrictions following recent demonstrations, potentially limiting its actual impact.</p>
<p>For organizations using Trivy or KICS in their CI/CD pipelines, immediate review of credentials and tokens is critical. Teams should verify they&#8217;re using clean versions of these tools and rotate any potentially compromised secrets.</p>
<p><a href="https://krebsonsecurity.com/2026/03/canisterworm-springs-wiper-attack-targeting-iran/" target="_blank" rel="noopener">Source: Krebs on Security</a></p>
