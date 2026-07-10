---
title: "PCPJack Shows Cloud Malware Is Moving From Cryptomining to Credential Theft"
publishedAt: 2026-05-07T18:38:54
summary: "SentinelLabs reported PCPJack, a cloud-focused worm that evicts TeamPCP artifacts, steals credentials from exposed infrastructure, and spreads across cloud systems."
category: "Cyber Security Blog"
categories:
  - "Cyber Security Blog"
  - "General CTI"
  - "Malware"
tags: []
heroImage: "/wp-content/uploads/2026/05/pcpjack-cloud-worm.png"
wpId: 2218
wpSlug: "pcpjack-cloud-worm-credential-theft"
originalLink: "https://bulwarkblack.com/pcpjack-cloud-worm-credential-theft"
draft: false
---

<p><em>Source article found in Feedly: SentinelLabs, “PCPJack | Cloud Worm Evicts TeamPCP and Steals Credentials at Scale.”</em></p>
<p>SentinelLabs has reported a cloud-focused credential theft framework called <strong>PCPJack</strong> that behaves more like a worm than a one-off intrusion script. The toolset targets exposed cloud and developer infrastructure, removes artifacts associated with the TeamPCP actor persona, harvests credentials, and attempts to propagate across additional systems.</p>
<p>The operational detail that stands out is the monetization model. This is not the usual “drop a cryptominer on an exposed Docker host” cloud compromise. SentinelLabs notes that PCPJack goes after credentials from cloud, container, developer, productivity, and financial services. That points toward fraud, spam, extortion, resale of access, or follow-on compromise rather than quick commodity mining.</p>
<h2>What PCPJack Targets</h2>
<p>According to SentinelLabs, PCPJack targets exposed services and environments including:</p>
<ul>
<li>Docker and Kubernetes infrastructure</li>
<li>Redis and MongoDB instances</li>
<li>RayML and vulnerable web applications</li>
<li>Cloud metadata and service account credentials</li>
<li>Developer secrets in configuration files, environment variables, Git history, and SSH material</li>
<li>Cryptocurrency wallets and keys</li>
</ul>
<p>The framework includes a Linux bootstrap script, Python modules for credential parsing and lateral movement, cloud range scanning, and persistence mechanisms. It also attempts to remove rival TeamPCP-related tools before establishing itself.</p>
<h2>Why This Matters</h2>
<p>Cloud compromise is maturing. Attackers increasingly understand that the most valuable asset in a cloud environment is not always compute. It is the credential graph: API keys, service tokens, SSH keys, registry credentials, SaaS tokens, database secrets, and CI/CD access.</p>
<p>Once those credentials are collected, the attacker can often move far beyond the first exposed service. A single misconfigured container host can become access to source code, cloud storage, internal databases, Slack workspaces, payment systems, or production deployment pipelines.</p>
<h2>Defensive Takeaways</h2>
<ul>
<li><strong>Find exposed services fast.</strong> Internet-facing Docker, Kubernetes dashboards, Redis, MongoDB, RayML, and similar services should be inventoried and locked down.</li>
<li><strong>Rotate secrets after compromise.</strong> Reimaging a host is not enough if environment variables, service account tokens, SSH keys, or cloud keys were exposed.</li>
<li><strong>Monitor for credential harvesting behavior.</strong> Alert on bulk access to <code>.env</code> files, shell histories, Git repositories, service account paths, Docker secrets, and cloud metadata services.</li>
<li><strong>Harden metadata access.</strong> Restrict access to cloud instance metadata services and enforce least privilege on attached roles.</li>
<li><strong>Watch for persistence.</strong> SentinelLabs observed systemd service creation for root execution and cron-based persistence when running without root.</li>
<li><strong>Treat cloud malware as access theft, not just resource theft.</strong> A missing cryptominer does not mean the incident is low impact.</li>
</ul>
<h2>Bulwark Black Assessment</h2>
<p>PCPJack is a good example of where cloud threat activity is heading: less noisy mining, more credential collection, more lateral movement, and more monetization through stolen access. For defenders, the priority is to reduce exposed management surfaces, tighten identity controls, and make credential discovery noisy enough that it cannot happen quietly.</p>
<p>For small and mid-sized organizations, the practical starting point is simple: inventory internet-facing assets, verify cloud IAM scope, rotate old secrets, and monitor the places attackers actually search for credentials.</p>
<p><strong>Source:</strong> <a href="https://www.sentinelone.com/labs/cloud-worm-evicts-teampcp-and-steals-credentials-at-scale/">SentinelLabs — PCPJack | Cloud Worm Evicts TeamPCP and Steals Credentials at Scale</a></p>
