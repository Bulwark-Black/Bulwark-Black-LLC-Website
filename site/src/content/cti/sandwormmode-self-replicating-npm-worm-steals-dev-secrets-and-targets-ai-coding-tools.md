---
title: "SANDWORMMODE: Self-Replicating npm Worm Steals Dev Secrets and Targets AI Coding Tools"
publishedAt: 2026-02-21T21:01:37
summary: "A sophisticated supply chain worm dubbed SANDWORMMODE is actively targeting the npm ecosystem, compromising at least 19 malicious packages designed to steal developer credentials and CI/CD secrets while automatically spreading across repositories and workflows. Researchers at Soc"
category: "Malware"
categories:
  - "Malware"
tags:
  - "AI security"
  - "CI/CD security"
  - "npm security"
  - "SANDWORMMODE"
  - "supply chain attack"
heroImage: "/wp-content/uploads/2026/02/sandwormmode-npm-supply-chain-worm.jpg"
wpId: 1914
wpSlug: "sandwormmode-self-replicating-npm-worm-steals-dev-secrets-and-targets-ai-coding-tools"
originalLink: "https://bulwarkblack.com/sandwormmode-self-replicating-npm-worm-steals-dev-secrets-and-targets-ai-coding-tools"
draft: false
---

<p>A sophisticated supply chain worm dubbed <strong>SANDWORMMODE</strong> is actively targeting the npm ecosystem, compromising at least 19 malicious packages designed to steal developer credentials and CI/CD secrets while automatically spreading across repositories and workflows.</p>
<p>Researchers at <a href="https://socket.dev/blog/sandworm-mode-npm-worm-ai-toolchain-poisoning" target="_blank" rel="noopener">Socket</a> identified the campaign, which uses typosquatted npm packages and poisoned GitHub Actions to infect developer machines and CI pipelines simultaneously.</p>
<h2>Multi-Stage Attack Chain</h2>
<p>The attack executes immediately upon <code>npm install</code>, harvesting sensitive data including:</p>
<ul>
<li>npm and GitHub tokens from <code>.npmrc</code> files</li>
<li>Environment variables and configuration secrets</li>
<li>Cryptocurrency wallet keys</li>
<li>Password manager databases</li>
<li>Cloud provider credentials</li>
</ul>
<p>The worm uses multiple exfiltration channels, including Cloudflare Worker endpoints for initial data theft and DNS tunneling as a fallback method.</p>
<h2>Self-Propagation Mechanisms</h2>
<p>What makes SANDWORMMODE particularly dangerous is its ability to spread autonomously:</p>
<ul>
<li><strong>Credential Abuse:</strong> Uses stolen npm/GitHub tokens to push infected package versions</li>
<li><strong>Carrier Injection:</strong> Adds hidden dependencies to victim repositories via GitHub API</li>
<li><strong>Workflow Injection:</strong> Deploys malicious GitHub Actions that appear as legitimate code quality checks</li>
<li><strong>SSH Fallback:</strong> If API access fails, abuses the victim&#8217;s SSH agent to clone repos and push changes</li>
<li><strong>Git Hook Persistence:</strong> New repositories inherit infection automatically</li>
</ul>
<h2>AI Tool Targeting</h2>
<p>In a novel attack vector, the worm specifically targets AI coding assistants. It installs rogue <strong>MCP (Model Context Protocol) servers</strong> into configurations for:</p>
<ul>
<li>Claude Code</li>
<li>Cursor</li>
<li>VS Code AI extensions</li>
</ul>
<p>Using hidden prompt injection instructions, the malware tricks AI assistants into reading SSH keys, cloud credentials, and API tokens—then exfiltrating them to attacker-controlled servers. The campaign also harvests API keys from multiple major LLM providers.</p>
<h2>Dead Switch Capability</h2>
<p>Although currently disabled, the malware includes a destructive &#8220;dead switch&#8221; feature that could wipe a user&#8217;s home directory if both GitHub and npm access are lost—indicating the campaign is still evolving.</p>
<h2>Recommended Actions</h2>
<p>Socket&#8217;s Threat Research Team urges organizations to:</p>
<ul>
<li>Audit all npm dependencies for the 19 identified malicious packages</li>
<li>Rotate all npm tokens, GitHub PATs, and exposed credentials immediately</li>
<li>Review GitHub Actions workflows for unauthorized changes</li>
<li>Monitor for suspicious repository modifications and auto-merge attempts</li>
<li>Inspect AI tool configurations for unauthorized MCP server entries</li>
</ul>
<p>The campaign represents a significant evolution in supply chain attacks, combining traditional credential theft with AI-assisted exploitation and autonomous propagation.</p>
<p><em>Source: <a href="https://cybersecuritynews.com/shai-hulud-like-npm-worm-attack/" target="_blank" rel="noopener">Cybersecurity News</a> / <a href="https://socket.dev/blog/sandworm-mode-npm-worm-ai-toolchain-poisoning" target="_blank" rel="noopener">Socket Security</a></em></p>
