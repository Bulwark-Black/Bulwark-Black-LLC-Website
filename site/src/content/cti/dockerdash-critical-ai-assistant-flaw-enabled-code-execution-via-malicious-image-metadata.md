---
title: "DockerDash: Critical AI Assistant Flaw Enabled Code Execution via Malicious Image Metadata"
publishedAt: 2026-02-14T16:02:57
summary: "Cybersecurity researchers at Noma Labs have disclosed details of a critical vulnerability in Ask Gordon, Docker’s AI assistant integrated into Docker Desktop and the Docker CLI. The flaw, codenamed DockerDash, could have been exploited to execute arbitrary code and exfiltrate sen"
category: "Threat Intelligence"
categories: []
tags:
  - "APT29"
  - "Cozy Bear"
  - "DARKGATE"
  - "NoName"
  - "Ocean Lotus"
  - "Operation Cobalt Kitty"
heroImage: "/wp-content/uploads/2026/02/docker-ai-vulnerability-2026-02-14.jpg"
wpId: 1869
wpSlug: "dockerdash-critical-ai-assistant-flaw-enabled-code-execution-via-malicious-image-metadata"
originalLink: "https://bulwarkblack.com/dockerdash-critical-ai-assistant-flaw-enabled-code-execution-via-malicious-image-metadata"
draft: false
---

<p>Cybersecurity researchers at <a href="https://noma.security/blog/dockerdash-two-attack-paths-one-ai-supply-chain-crisis/" target="_blank" rel="noopener">Noma Labs</a> have disclosed details of a critical vulnerability in <strong>Ask Gordon</strong>, Docker&#8217;s AI assistant integrated into Docker Desktop and the Docker CLI. The flaw, codenamed <strong>DockerDash</strong>, could have been exploited to execute arbitrary code and exfiltrate sensitive data from compromised environments.</p>
<p>Docker addressed the vulnerability in <a href="https://docs.docker.com/desktop/release-notes/#4500" target="_blank" rel="noopener">version 4.50.0</a>, released in November 2025. Organizations running older versions should upgrade immediately.</p>
<h2>Attack Mechanism: Weaponizing Image Metadata</h2>
<p>The DockerDash vulnerability exploits a critical trust boundary violation in how Ask Gordon parses container metadata. Attackers can embed malicious instructions within Dockerfile LABEL fields—typically used for innocuous metadata descriptions—which become injection vectors when processed by the AI assistant.</p>
<p>&#8220;In DockerDash, a single malicious metadata label in a Docker image can be used to compromise your Docker environment through a simple three-stage attack,&#8221; explained Sasi Levi, security research lead at Noma. &#8220;Every stage happens with zero validation, taking advantage of current agents and MCP Gateway architecture.&#8221;</p>
<h3>The Three-Stage Attack Chain</h3>
<ol>
<li><strong>Injection:</strong> Attacker publishes a Docker image containing weaponized LABEL instructions in the Dockerfile</li>
<li><strong>Processing:</strong> When a victim queries Ask Gordon AI about the image, Gordon reads the metadata, failing to differentiate between legitimate descriptions and embedded malicious instructions</li>
<li><strong>Execution:</strong> Ask Gordon forwards the parsed instructions to the MCP (Model Context Protocol) Gateway, which interprets them as standard requests from a trusted source and invokes MCP tools without validation</li>
</ol>
<h2>AI Supply Chain Risk: A Growing Concern</h2>
<p>The vulnerability has been characterized as a case of <strong>Meta-Context Injection</strong>—a new class of attacks where AI assistants treat unverified metadata as executable commands. The MCP Gateway, which serves as connective tissue between large language models and local environments, cannot distinguish between informational metadata and pre-authorized runnable instructions.</p>
<p>&#8220;By embedding malicious instructions in these metadata fields, an attacker can hijack the AI&#8217;s reasoning process,&#8221; Levi noted.</p>
<h2>Impact: Code Execution and Data Exfiltration</h2>
<p><strong>Code Execution (Critical):</strong> MCP tools execute attacker-supplied commands with the victim&#8217;s Docker privileges, achieving full remote code execution in cloud and CLI environments.</p>
<p><strong>Data Exfiltration (High):</strong> A variant attack targets Ask Gordon&#8217;s Desktop implementation to capture sensitive environment data, including:</p>
<ul>
<li>Installed tools and container details</li>
<li>Docker configuration</li>
<li>Mounted directories</li>
<li>Network topology</li>
</ul>
<h2>Remediation</h2>
<p>Organizations using Docker Desktop or the Docker CLI with Ask Gordon AI should:</p>
<ol>
<li><strong>Upgrade immediately</strong> to Docker Desktop 4.50.0 or later</li>
<li><strong>Review container sources</strong> and only pull images from trusted registries</li>
<li><strong>Implement image scanning</strong> to detect potentially malicious metadata before deployment</li>
<li><strong>Treat AI supply chain risk</strong> as a core security concern moving forward</li>
</ol>
<h2>The Bigger Picture</h2>
<p>DockerDash underscores the emerging risks of AI integration in developer tooling. As AI assistants become more deeply embedded in development workflows, their ability to interpret and act on contextual data creates new attack surfaces.</p>
<p>&#8220;The DockerDash vulnerability underscores your need to treat AI Supply Chain Risk as a current core threat,&#8221; Levi concluded. &#8220;Mitigating this new class of attacks requires implementing zero-trust validation on all contextual data provided to the AI model.&#8221;</p>
<p><em>Source: <a href="https://thehackernews.com/2026/02/docker-fixes-critical-ask-gordon-ai.html" target="_blank" rel="noopener">The Hacker News</a></em></p>
