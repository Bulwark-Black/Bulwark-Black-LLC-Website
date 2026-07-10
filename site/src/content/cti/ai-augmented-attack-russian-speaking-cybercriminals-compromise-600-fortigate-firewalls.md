---
title: "AI-Augmented Attack: Russian-Speaking Cybercriminals Compromise 600+ FortiGate Firewalls"
publishedAt: 2026-02-24T02:02:45
summary: "A Russian-speaking cybercrime group has compromised more than 600 internet-exposed FortiGate firewalls across 55 countries in just over a month, leveraging off-the-shelf generative AI tools to automate and scale their operations, according to a new incident report from AWS. Attac"
category: "Russian Cyber Threat Intelligence"
categories:
  - "Russian Cyber Threat Intelligence"
tags: []
heroImage: "/wp-content/uploads/2026/02/fortigate-ai-attack.jpg"
wpId: 1926
wpSlug: "ai-augmented-attack-russian-speaking-cybercriminals-compromise-600-fortigate-firewalls"
originalLink: "https://bulwarkblack.com/ai-augmented-attack-russian-speaking-cybercriminals-compromise-600-fortigate-firewalls"
draft: false
---

<p>A Russian-speaking cybercrime group has compromised more than 600 internet-exposed FortiGate firewalls across 55 countries in just over a month, leveraging off-the-shelf generative AI tools to automate and scale their operations, according to a new incident report from AWS.</p>
<h2>Attack Campaign Overview</h2>
<p>The campaign, which ran from mid-January to mid-February 2026, didn&#8217;t rely on sophisticated zero-day exploits. Instead, the attackers took a volume-over-finesse approach – scanning for exposed FortiGate management interfaces, trying commonly reused or weak credentials, and exfiltrating configuration files once inside.</p>
<p>What made this campaign notable was the <strong>AI integration throughout the workflow</strong>. AWS security researchers found evidence of AI-generated code, attack playbooks, scripts, and operational notes on compromised infrastructure. The tools were embedded throughout the entire attack chain rather than just used for occasional scripting assistance.</p>
<blockquote>
<p>&#8220;The volume and variety of custom tooling would typically indicate a well-resourced development team. Instead, a single actor or very small group generated this entire toolkit through AI-assisted development.&#8221;</p>
<p>— CJ Moses, CISO at Amazon</p>
</blockquote>
<h2>Post-Compromise Activity</h2>
<p>Once inside a target&#8217;s firewall, the attackers extracted:</p>
<ul>
<li><strong>Administrator and VPN credentials</strong></li>
<li><strong>Network topology details</strong></li>
<li><strong>Firewall rules and configurations</strong></li>
</ul>
<p>From there, they moved laterally into Active Directory environments, dumped credentials, and targeted backup systems including Veeam servers – suggesting potential ransomware preparation or data exfiltration objectives.</p>
<h2>Geographic Distribution</h2>
<p>The activity was opportunistic rather than tightly targeted, with victims spread across Europe, Asia, Africa, and Latin America. AWS noted that some compromises may have enabled access to managed service providers (MSPs), amplifying downstream risk across multiple organizations.</p>
<h2>Key Takeaways</h2>
<p>AWS emphasizes that <strong>basic security hygiene</strong> would have stopped most of this activity:</p>
<ul>
<li>Keep management interfaces off the public internet</li>
<li>Enforce multi-factor authentication (MFA)</li>
<li>Avoid password reuse across systems</li>
<li>Monitor for anomalous login attempts and configuration changes</li>
</ul>
<p>This incident demonstrates how generative AI is lowering the barrier to entry for cybercriminals. A small group – potentially even a single actor – can now produce the tooling that previously required a well-resourced development team. As AI capabilities continue to evolve, defenders must prioritize fundamentals and assume that sophisticated-looking attacks may come from increasingly smaller operations.</p>
<p><em>Source: <a href="https://www.theregister.com/2026/02/23/aws_fortigate_firewalls/" target="_blank" rel="noopener">The Register</a></em></p>
