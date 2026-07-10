---
title: "Open-Source CyberStrikeAI Tool Weaponized in AI-Driven FortiGate Attacks Across 55 Countries"
publishedAt: 2026-03-04T16:03:59
summary: "Team Cymru has revealed that threat actors behind the recent AI-assisted campaign targeting Fortinet FortiGate appliances leveraged an open-source, AI-native security testing platform called CyberStrikeAI to execute mass automated attacks, compromising over 600 devices across 55 "
category: "Threat Intelligence"
categories: []
tags: []
heroImage: "/wp-content/uploads/2026/03/cyberstrikeai-fortigate-attack.jpg"
wpId: 1974
wpSlug: "open-source-cyberstrikeai-tool-weaponized-in-ai-driven-fortigate-attacks-across-55-countries"
originalLink: "https://bulwarkblack.com/open-source-cyberstrikeai-tool-weaponized-in-ai-driven-fortigate-attacks-across-55-countries"
draft: false
---

<p>Team Cymru has revealed that threat actors behind the recent AI-assisted campaign targeting Fortinet FortiGate appliances leveraged an open-source, AI-native security testing platform called <strong>CyberStrikeAI</strong> to execute mass automated attacks, compromising over 600 devices across 55 countries.</p>
<h2>Key Findings</h2>
<p>The investigation traced back to IP address 212.11.64[.]250, used by a suspected Russian-speaking threat actor for automated mass scanning of vulnerable FortiGate appliances. Analysis revealed the attacker&#8217;s use of CyberStrikeAI, an offensive security tool with concerning ties to Chinese state-sponsored operations.</p>
<h3>What is CyberStrikeAI?</h3>
<p>CyberStrikeAI is described as an &#8220;open-source artificial intelligence (AI) offensive security tool (OST)&#8221; developed by <strong>Ed1s0nZ</strong>, a China-based developer with suspected ties to the Chinese government. According to its GitHub repository, the tool:</p>
<ul>
<li>Built in <strong>Go programming language</strong></li>
<li>Integrates over <strong>100 security tools</strong></li>
<li>Enables vulnerability discovery, attack-chain analysis, knowledge retrieval, and result visualization</li>
<li>Leverages AI for automated offensive operations</li>
</ul>
<h2>Infrastructure Analysis</h2>
<p>Team Cymru observed <strong>21 unique IP addresses</strong> running CyberStrikeAI between January 20 and February 26, 2026. Servers were primarily hosted in:</p>
<ul>
<li><strong>China</strong></li>
<li><strong>Singapore</strong></li>
<li><strong>Hong Kong</strong></li>
<li>Additional servers detected in the U.S., Japan, and Switzerland</li>
</ul>
<h2>Developer&#8217;s Suspicious Portfolio</h2>
<p>The Ed1s0nZ GitHub account hosts several concerning tools demonstrating advanced offensive capabilities:</p>
<ul>
<li><strong>banana_blackmail</strong> — Golang-based ransomware</li>
<li><strong>PrivHunterAI</strong> — Uses Kimi, DeepSeek, and GPT models to detect privilege escalation vulnerabilities</li>
<li><strong>ChatGPTJailbreak</strong> — Prompts designed to bypass OpenAI safety measures via &#8220;DAN mode&#8221;</li>
<li><strong>InfiltrateX</strong> — Scanner for detecting privilege escalation vulnerabilities</li>
<li><strong>VigilantEye</strong> — Monitors for sensitive data exposure with WeChat Work bot alerts</li>
</ul>
<h2>China Government Ties</h2>
<p>The developer has documented interactions with <strong>Knownsec 404</strong>, a Chinese security vendor that suffered a <a href="https://www.resecurity.com/es/blog/article/knownsec-data-breach-a-trove-of-espionage-tradecraft-with-an-insider-narrative" target="_blank" rel="noopener">major data breach</a> exposing:</p>
<ul>
<li>Employee data</li>
<li>Government clientele</li>
<li>Hacking tools</li>
<li>Stolen data including South Korean call logs</li>
<li>Information on Taiwan&#8217;s critical infrastructure organizations</li>
<li>Ongoing cyber operations against other countries</li>
</ul>
<p>DomainTools described Knownsec as a &#8220;state-aligned cyber contractor&#8221; supporting Chinese national security, intelligence, and military objectives through tools like ZoomEye and Critical Infrastructure Target Library.</p>
<h2>Covering Tracks</h2>
<p>Ed1s0nZ has been observed actively removing references to being honored with the <strong>Level 2 Contribution Award to CNNVD</strong> (China National Vulnerability Database of Information Security) — the vulnerability database overseen by China&#8217;s Ministry of State Security. The developer now claims &#8220;everything shared here is purely for research and learning.&#8221;</p>
<h2>Why This Matters</h2>
<p>This case represents a concerning evolution in the proliferation of AI-augmented offensive security tools:</p>
<ol>
<li><strong>Open-source accessibility</strong> — Tools like CyberStrikeAI lower the barrier for sophisticated attacks</li>
<li><strong>AI acceleration</strong> — Generative AI integration enables rapid vulnerability discovery and exploitation</li>
<li><strong>State-nexus development</strong> — Tools developed by individuals with apparent government ties are being released publicly</li>
<li><strong>Cross-pollination</strong> — Russian-speaking threat actors leveraging Chinese-developed tools demonstrates growing collaboration</li>
</ol>
<h2>Recommendations</h2>
<p>Organizations running FortiGate appliances should:</p>
<ul>
<li>Apply all security patches immediately</li>
<li>Audit for signs of compromise using known IOCs</li>
<li>Monitor for suspicious scanning activity from the identified infrastructure</li>
<li>Consider implementing network segmentation to limit lateral movement</li>
<li>Review logging and detection capabilities for AI-powered attack patterns</li>
</ul>
<p>As security researcher Will Thomas noted: &#8220;The adoption of CyberStrikeAI is poised to accelerate, representing a concerning evolution in the proliferation of AI-augmented offensive security tools.&#8221;</p>
<p><strong>Source:</strong> <a href="https://thehackernews.com/2026/03/open-source-cyberstrikeai-deployed-in.html" target="_blank" rel="noopener">The Hacker News / Team Cymru</a></p>
