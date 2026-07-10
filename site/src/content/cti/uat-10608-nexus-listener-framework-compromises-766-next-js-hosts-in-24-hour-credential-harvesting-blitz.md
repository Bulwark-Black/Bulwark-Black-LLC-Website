---
title: "UAT-10608: NEXUS Listener Framework Compromises 766 Next.js Hosts in 24-Hour Credential Harvesting Blitz"
publishedAt: 2026-04-03T15:05:56
summary: "Cisco Talos has disclosed a large-scale automated credential harvesting campaign carried out by a threat cluster they are tracking as “UAT-10608.” The systematic exploitation campaign leverages a custom framework called “NEXUS Listener” to target Next.js applications vulnerable t"
category: "General CTI"
categories:
  - "General CTI"
tags: []
heroImage: "/wp-content/uploads/2026/04/nexus-listener-credential-harvesting.jpg"
wpId: 2163
wpSlug: "uat-10608-nexus-listener-framework-compromises-766-next-js-hosts-in-24-hour-credential-harvesting-blitz"
originalLink: "https://bulwarkblack.com/uat-10608-nexus-listener-framework-compromises-766-next-js-hosts-in-24-hour-credential-harvesting-blitz"
draft: false
---

<p>Cisco Talos has disclosed a large-scale automated credential harvesting campaign carried out by a threat cluster they are tracking as &#8220;UAT-10608.&#8221; The systematic exploitation campaign leverages a custom framework called &#8220;NEXUS Listener&#8221; to target Next.js applications vulnerable to React2Shell (CVE-2025-55182), resulting in the compromise of at least 766 hosts within a 24-hour period.</p>
<h2>Key Findings</h2>
<p>The scope of this automated campaign is staggering:</p>
<ul>
<li><strong>766 hosts compromised</strong> in under 24 hours</li>
<li><strong>91.5%</strong> of compromised hosts yielded database credentials</li>
<li><strong>78.2%</strong> contained SSH private keys enabling lateral movement</li>
<li><strong>25.6%</strong> exposed AWS credentials with potentially broad IAM permissions</li>
<li><strong>11.4%</strong> had live Stripe API keys for payment processing</li>
<li><strong>8.6%</strong> leaked GitHub tokens enabling supply chain attacks</li>
</ul>
<h2>Attack Methodology</h2>
<p>UAT-10608 exploits <strong>CVE-2025-55182</strong>, broadly referred to as &#8220;React2Shell&#8221; — a pre-authentication remote code execution vulnerability in React Server Components (RSC). The attack requires no authentication and targets publicly accessible applications using vulnerable versions of Next.js.</p>
<p>Once initial access is achieved, the automated toolkit deploys multi-phase harvesting scripts that iterate through collection phases including:</p>
<ul>
<li><strong>environ</strong> — Process environment variables</li>
<li><strong>ssh</strong> — SSH private keys and authorized_keys</li>
<li><strong>tokens</strong> — Pattern-matched credential strings</li>
<li><strong>cloud_meta</strong> — Cloud metadata APIs (AWS/GCP/Azure)</li>
<li><strong>k8s</strong> — Kubernetes service account tokens</li>
<li><strong>docker</strong> — Container configurations</li>
</ul>
<h2>The NEXUS Listener Framework</h2>
<p>The core component of this operation is a web-based GUI that aggregates all stolen data, providing operators with:</p>
<ul>
<li>Precompiled statistics on credentials harvested and hosts compromised</li>
<li>Search capabilities to sift through compromised data</li>
<li>Per-host credential breakdowns organized by collection phase</li>
</ul>
<p>The framework displays &#8220;v3&#8221; in its interface, indicating active development and iteration by the threat actors.</p>
<h2>Why This Matters</h2>
<p><strong>Supply Chain Risk:</strong> Several hosts showed evidence of npm and pip registry credentials, enabling potential malicious package publication under legitimate maintainer identities.</p>
<p><strong>Lateral Movement:</strong> The massive corpus of exposed SSH keys creates persistent access that survives application credential rotation — especially dangerous in organizations with shared key infrastructure.</p>
<p><strong>Cloud Infrastructure Takeover:</strong> AWS keys with broad IAM permissions enable data exfiltration from S3, EC2 control plane operations, and lateral movement within AWS organizations.</p>
<h2>Recommendations</h2>
<ol>
<li><strong>Audit Next.js applications</strong> for React2Shell vulnerability immediately</li>
<li><strong>Rotate all credentials</strong> if any overlap with victim profile is suspected</li>
<li><strong>Enforce IMDSv2</strong> on all AWS EC2 instances to block unauthenticated metadata service abuse</li>
<li><strong>Segment SSH keys</strong> — avoid reusing key pairs across environments</li>
<li><strong>Deploy RASP or WAF rules</strong> tuned for Next.js-specific attack patterns</li>
<li><strong>Audit container environments</strong> for least-privilege access controls</li>
</ol>
<p><strong>Snort Rule:</strong> ID 65554 for CVE-2025-55182 (React2Shell)</p>
<p><em>Source: <a href="https://blog.talosintelligence.com/uat-10608-inside-a-large-scale-automated-credential-harvesting-operation-targeting-web-applications/" target="_blank" rel="noopener">Cisco Talos</a></em></p>
