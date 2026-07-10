---
title: "LiteLLM Supply Chain Attack: TeamPCP Deploys Multi-Stage Credential Stealer to 95M Monthly Downloads"
publishedAt: 2026-04-02T01:04:53
summary: "A sophisticated supply chain attack has compromised LiteLLM, the widely-used Python library for interfacing with large language models, delivering multi-stage credential-stealing malware to systems downloading over 95 million packages per month. The attack, attributed to TeamPCP—"
category: "AI (General)"
categories:
  - "AI (General)"
  - "Malware"
tags: []
heroImage: "/wp-content/uploads/2026/04/litellm-supply-chain-attack.jpg"
wpId: 2159
wpSlug: "litellm-supply-chain-attack-teampcp-deploys-multi-stage-credential-stealer-to-95m-monthly-downloads"
originalLink: "https://bulwarkblack.com/litellm-supply-chain-attack-teampcp-deploys-multi-stage-credential-stealer-to-95m-monthly-downloads"
draft: false
---


<p>A sophisticated supply chain attack has compromised LiteLLM, the widely-used Python library for interfacing with large language models, delivering multi-stage credential-stealing malware to systems downloading over 95 million packages per month.</p>



<p>The attack, attributed to <strong>TeamPCP</strong>—the same threat group behind the recent <a href="/teampcp-spreads-trivy-supply-chain-attack-to-docker-hub-and-kubernetes-with-devastating-wiper-payload">Trivy supply chain compromises</a>—targeted LiteLLM versions 1.82.7 and 1.82.8 on PyPI. According to <a href="https://www.sonatype.com/blog/compromised-litellm-pypi-package-delivers-multi-stage-credential-stealer">Sonatype Security Research</a>, the compromised packages were available for approximately two hours on March 24, 2026, before being quarantined. Given the package&#8217;s three million daily downloads, significant exposure likely occurred.</p>



<h2 class="wp-block-heading">Why LiteLLM Is a High-Value Target</h2>



<p>LiteLLM serves as a unified abstraction layer for applications interacting with LLMs from providers including OpenAI, Anthropic, Google, and others. Its position in the AI stack—sitting directly between applications and AI service providers—means it typically has access to API keys, environment variables, and sensitive configuration data. Compromising a package in this position allows attackers to intercept and exfiltrate valuable secrets without directly breaching upstream systems.</p>



<p>The library is a dependency for major AI agent frameworks including CrewAI, DSPy, Browser-Use, and Opik, dramatically expanding the attack&#8217;s potential blast radius.</p>



<h2 class="wp-block-heading">Multi-Stage Payload Architecture</h2>



<p>Analysis by <a href="https://cyberinsider.com/new-supply-chain-attack-hits-litellm-with-95m-monthly-downloads/">Endor Labs</a> reveals the attack involved a subtle but effective injection of just 12 lines of obfuscated code into <code>litellm/proxy/proxy_server.py</code>. The code executes automatically when the module is imported, decoding a large base64 payload and launching it via a Python subprocess.</p>



<p>In version 1.82.8, the attackers escalated by adding a <code>litellm_init.pth</code> file that ensures the payload runs every time the Python interpreter starts—even if LiteLLM is never imported.</p>



<p><strong>The three-layer attack structure:</strong></p>



<ul class="wp-block-list"><li><strong>Layer 1:</strong> Launcher and data exfiltration infrastructure</li><li><strong>Layer 2:</strong> Extensive reconnaissance and credential harvesting from SSH keys, AWS/GCP/Azure credentials, Kubernetes secrets, environment files, database configs, and cryptocurrency wallets</li><li><strong>Layer 3:</strong> Persistence mechanism via <code>sysmon.py</code> service that polls C2 servers every 50 minutes for additional payloads</li></ul>



<p>Harvested data is encrypted using <strong>AES-256-CBC</strong> with a randomly generated session key, which is then encrypted using a hardcoded RSA public key. The encrypted archive (<code>tpcp.tar.gz</code>) is exfiltrated to attacker-controlled infrastructure at <code>models[.]litellm[.]cloud</code> and <code>checkmarx[.]zone</code>.</p>



<h2 class="wp-block-heading">Kubernetes Lateral Movement</h2>



<p>Beyond data theft, the malware attempts lateral movement in Kubernetes environments by deploying <strong>privileged pods across all nodes</strong> in a cluster. These pods mount the host filesystem and install a persistent backdoor as a systemd user service named &#8220;System Telemetry Service,&#8221; enabling long-term access.</p>



<h2 class="wp-block-heading">TeamPCP Attribution and LAPSUS$ Connection</h2>



<p>Researchers linked the attack to TeamPCP with high confidence based on overlapping infrastructure, tooling, and techniques. Key attribution indicators include identical persistence mechanisms (<code>~/.config/sysmon/sysmon.py</code>), matching C2 domains, consistent exfiltration filenames, and shared Kubernetes-based propagation techniques observed in the group&#8217;s <a href="/canisterworm-wiper-weaponizes-trivy-supply-chain-to-target-iran">Trivy compromise operations</a>.</p>



<p>There is also <a href="https://www.linkedin.com/posts/mccartypaul_infosec-teampcp-lapsus-ugcPost-7442235106712330240-02gK/">speculation</a> that TeamPCP may be related to the LAPSUS$ extortion group, though attribution remains under active investigation.</p>



<h2 class="wp-block-heading">Indicators of Compromise</h2>



<ul class="wp-block-list"><li>Compromised versions: <code>litellm==1.82.7</code> and <code>litellm==1.82.8</code></li><li>C2 domains: <code>models[.]litellm[.]cloud</code>, <code>checkmarx[.]zone</code></li><li>Artifacts: <code>tpcp.tar.gz</code>, <code>/tmp/pglog</code>, <code>/tmp/.pg_state</code></li><li>Persistence: <code>sysmon.py</code> service, <code>litellm_init.pth</code></li><li>Kubernetes pods: <code>node-setup-*</code></li></ul>



<h2 class="wp-block-heading">Mitigation Recommendations</h2>



<p>Organizations should immediately:</p>



<ul class="wp-block-list"><li>Verify whether LiteLLM versions 1.82.7 or 1.82.8 were installed</li><li>Remove affected packages and treat impacted systems as fully compromised</li><li>Rotate all potentially exposed credentials including API keys, cloud credentials, and Kubernetes secrets</li><li>Review logs for suspicious outbound connections to the C2 domains</li><li>Check for persistence mechanisms and unauthorized services</li><li>Consider rebuilding affected systems from known clean states</li></ul>



<p>For long-term defense, organizations should pin dependencies to verified versions, compare distributed packages against upstream source code, and adopt secure publishing mechanisms like PyPI Trusted Publishers.</p>



<p><strong>Source:</strong> <a href="https://www.sonatype.com/blog/compromised-litellm-pypi-package-delivers-multi-stage-credential-stealer">Sonatype Security Research</a>, <a href="https://cyberinsider.com/new-supply-chain-attack-hits-litellm-with-95m-monthly-downloads/">CyberInsider / Endor Labs</a></p>
