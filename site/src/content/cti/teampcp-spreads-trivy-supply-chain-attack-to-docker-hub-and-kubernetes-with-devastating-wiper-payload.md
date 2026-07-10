---
title: "TeamPCP Spreads Trivy Supply Chain Attack to Docker Hub and Kubernetes with Devastating Wiper Payload"
publishedAt: 2026-03-23T20:02:17
summary: "The cybersecurity community is reeling from an escalating supply chain attack targeting Trivy, Aqua Security’s popular open-source vulnerability scanner with over 33,800 GitHub stars. The threat actor known as TeamPCP has expanded their campaign from compromised GitHub Actions to"
category: "General CTI"
categories:
  - "General CTI"
tags: []
heroImage: "/wp-content/uploads/2026/03/trivy-supply-chain-attack.jpg"
wpId: 2105
wpSlug: "teampcp-spreads-trivy-supply-chain-attack-to-docker-hub-and-kubernetes-with-devastating-wiper-payload"
originalLink: "https://bulwarkblack.com/teampcp-spreads-trivy-supply-chain-attack-to-docker-hub-and-kubernetes-with-devastating-wiper-payload"
draft: false
---

<p>The cybersecurity community is reeling from an escalating supply chain attack targeting Trivy, Aqua Security&#8217;s popular open-source vulnerability scanner with over 33,800 GitHub stars. The threat actor known as <strong>TeamPCP</strong> has expanded their campaign from compromised GitHub Actions to Docker Hub images and now a destructive Kubernetes wiper that specifically targets Iranian infrastructure.</p>
<h2>The Attack Timeline</h2>
<p>The attack began in late February 2026 when TeamPCP exploited a misconfiguration in Trivy&#8217;s GitHub Actions environment, extracting a privileged access token (PAT) that provided access to both of Aqua Security&#8217;s GitHub organizations.</p>
<p>Key developments include:</p>
<ul>
<li><strong>GitHub Actions Compromise:</strong> Attackers hijacked 75 tags of aquasecurity/trivy-action and aquasecurity/setup-trivy to inject credential-stealing malware</li>
<li><strong>Docker Hub Poisoning:</strong> Malicious Trivy versions 0.69.4, 0.69.5, and 0.69.6 were pushed to Docker Hub on March 22 without corresponding GitHub releases</li>
<li><strong>Repository Defacement:</strong> All 44 repositories in Aqua Security&#8217;s internal aquasec-com GitHub organization were renamed with tpcp-docs- prefixes and descriptions changed to TeamPCP Owns Aqua Security</li>
<li><strong>npm Worm:</strong> Stolen credentials enabled the distribution of a self-propagating worm called <strong>CanisterWorm</strong> across 47 npm packages</li>
</ul>
<h2>The Kubernetes Wiper: A Destructive Turn</h2>
<p>Perhaps most alarming is the emergence of a new wiper malware that specifically targets Kubernetes clusters located in Iran. According to Aikido security researcher Charlie Eriksen, the payload performs geographic checks and deploys devastating actions:</p>
<ul>
<li>On Kubernetes: Deploys privileged DaemonSets across every node including control plane</li>
<li>Iranian nodes are wiped and force-rebooted via a container named kamikaze</li>
<li>Non-Iranian nodes receive the CanisterWorm backdoor as a systemd service</li>
<li>Non-K8s Iranian hosts receive destructive file system wipe commands</li>
</ul>
<p>The malware spreads through SSH via stolen keys and exploits exposed Docker APIs on port 2375 across the local subnet.</p>
<h2>Technical Analysis: How the Breach Occurred</h2>
<p>The attack leveraged a single point of failure: a service account named <strong>Argon-DevOps-Mgt</strong> (GitHub ID 139343333) that bridged both of Aqua Security&#8217;s GitHub organizations. This service account used a Personal Access Token (PAT) for authentication instead of a more secure GitHub App token.</p>
<p>Key weaknesses exploited:</p>
<ul>
<li>PAT tokens function like passwords with longer validity periods</li>
<li>Service accounts typically lack multi-factor authentication (MFA)</li>
<li>A single compromised token provided write/admin access to both organizations</li>
<li>Docker Hub tags are not immutable allowing attackers to push malicious images</li>
</ul>
<p>The defacement of all 44 internal repositories occurred in a scripted 2-minute burst between 20:31:07 UTC and 20:32:26 UTC on March 22, 2026.</p>
<h2>Indicators of Compromise</h2>
<p>Organizations should immediately review:</p>
<ul>
<li>Trivy Docker images: Avoid versions 0.69.4, 0.69.5, and 0.69.6</li>
<li>Last known clean release: 0.69.3</li>
<li>GitHub Actions: Pin actions by commit SHA, not tags</li>
<li>CI/CD pipelines: Treat recent Trivy executions as potentially compromised</li>
</ul>
<h2>Why This Matters</h2>
<p>This incident represents a devastating irony: a cloud security company being compromised by a cloud-native threat actor. TeamPCP has demonstrated sophisticated capabilities targeting the security vendor ecosystem itself, building capability across cloud exploitation, supply chain worms, and Kubernetes wipers.</p>
<p>CrowdStrike&#8217;s analysis provides critical guidance: Pin your actions by committing SHA, monitor your CI/CD runners with the same rigor as production hosts, and treat any code that runs in your pipeline as code that runs in your infrastructure.</p>
<h2>Aqua Security&#8217;s Response</h2>
<p>Aqua Security has engaged incident response firm Sygnia and states their investigation is actively focused on validating that all access paths have been identified and fully closed. The company reports no evidence that commercial products were impacted due to a controlled integration process that lags the open-source Trivy.</p>
<p>The last known clean Trivy release is 0.69.3. Organizations should immediately audit their CI/CD pipelines and treat any recent Trivy executions as potentially compromised.</p>
<p><em>This is a developing story. Updates will be provided as new information emerges.</em></p>
<p><a href="https://www.bleepingcomputer.com/news/security/trivy-supply-chain-attack-spreads-to-docker-github-repos/" target="_blank" rel="noopener">Source: BleepingComputer</a></p>
