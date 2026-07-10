---
title: "Vibe Coding Gone Wrong: Moltbook AI Social Network Exposes 4.75 Million Records in Massive Database Breach"
publishedAt: 2026-02-03T16:02:13
summary: "Google-owned Wiz discovers 4.75 million exposed records in AI social network Moltbook, including 1.5M API tokens and plaintext OpenAI keys—all because Row Level Security was never enabled on the “vibe-coded” platform."
category: "General CTI"
categories:
  - "General CTI"
tags:
  - "AI security"
  - "API exposure"
  - "data breach"
  - "database misconfiguration"
  - "Moltbook"
  - "Supabase"
  - "vibe coding"
heroImage: "/wp-content/uploads/2026/02/moltbook-vibe-coding-breach.webp"
wpId: 1796
wpSlug: "vibe-coding-gone-wrong-moltbook-ai-social-network-exposes-4-75-million-records-in-massive-database-breach"
originalLink: "https://bulwarkblack.com/vibe-coding-gone-wrong-moltbook-ai-social-network-exposes-4-75-million-records-in-massive-database-breach"
draft: false
---

<p>In a stark reminder of the security risks inherent in AI-generated code, the viral AI social network <strong>Moltbook</strong> has been found to have exposed <strong>4.75 million database records</strong> through a simple but catastrophic misconfiguration. The breach, discovered by Google-owned cybersecurity firm <strong>Wiz</strong>, exposed API keys, authentication tokens, email addresses, and private messages—all because basic security controls were never implemented.</p>
<h2>What is Moltbook?</h2>
<p>Moltbook positioned itself as &#8220;the front page of the agent internet&#8221;—a social platform designed exclusively for AI agents to post, comment, vote, and build karma. The platform recently went viral when OpenAI co-founder Andrej Karpathy described it as &#8220;genuinely the most incredible sci-fi takeoff-adjacent thing I have seen recently.&#8221;</p>
<p>But here&#8217;s the twist: the founder publicly admitted he &#8220;vibe-coded&#8221; the entire platform, stating he &#8220;didn&#8217;t write a single line of code&#8221; and instead relied entirely on AI to build it.</p>
<h2>The Breach: Missing Row Level Security</h2>
<p>Wiz researchers discovered that Moltbook used <strong>Supabase</strong> as its backend-as-a-service provider. While examining the site&#8217;s client-side JavaScript, they found the Supabase API key hardcoded in plain view. Under normal circumstances, this wouldn&#8217;t be catastrophic—Supabase is designed to work with certain keys exposed, provided <strong>Row Level Security (RLS)</strong> policies are properly configured.</p>
<p>The problem? <strong>Moltbook had RLS completely disabled.</strong></p>
<p>This single missing configuration turned what should have been a secure public key into a master key granting full read and write access to the entire production database.</p>
<h2>What Was Exposed</h2>
<p>The breach exposed approximately <strong>4.75 million records</strong>, including:</p>
<ul>
<li><strong>1.5 million API authentication tokens</strong> — enabling complete account takeover of any AI agent</li>
<li><strong>35,000+ human email addresses</strong> — personal information meant to stay private</li>
<li><strong>29,000 early-registration emails</strong> — signups for Moltbook&#8217;s upcoming developer product</li>
<li><strong>4,060 private messages</strong> — including conversations containing plaintext <strong>OpenAI API keys</strong></li>
<li><strong>Full write access</strong> — attackers could modify any post, inject malicious content, or deface the entire platform</li>
</ul>
<h2>The 88:1 Ratio Revelation</h2>
<p>Perhaps the most surprising finding wasn&#8217;t just the security failure—it was what the database revealed about Moltbook&#8217;s supposed &#8220;AI agent revolution.&#8221;</p>
<p>While the platform claimed 1.5 million registered AI agents, the database showed only <strong>17,000 human owners</strong> behind them—an 88:1 ratio. Anyone could register millions of agents with a simple script and no rate limiting. The revolutionary AI social network was largely <strong>humans operating fleets of bots</strong>.</p>
<h2>Why This Matters</h2>
<p><strong>For cybersecurity professionals:</strong> This breach demonstrates how &#8220;vibe coding&#8221;—using AI to generate entire applications without deep technical review—can introduce catastrophic security gaps. AI code generators don&#8217;t yet reason about security posture, access controls, or data protection. Human security review remains essential.</p>
<p><strong>For organizations:</strong> The exposure of OpenAI API keys in private messages highlights how security failures can cascade across ecosystems. A single platform&#8217;s misconfiguration exposed credentials for entirely unrelated third-party services.</p>
<p><strong>For the AI ecosystem:</strong> As AI-native applications proliferate, write access vulnerabilities pose risks beyond simple data exposure. Attackers could inject malicious prompts that propagate to downstream AI agents, manipulating an entire ecosystem.</p>
<h2>Five Security Lessons from the Moltbook Breach</h2>
<ol>
<li><strong>AI tools don&#8217;t reason about security</strong> — Configuration details still require careful human review</li>
<li><strong>Verify participation metrics</strong> — Without rate limits and identity verification, bot-driven inflation is trivial</li>
<li><strong>Privacy cascades across ecosystems</strong> — Users shared API keys assuming privacy; one breach exposed them all</li>
<li><strong>Write access is more dangerous than read access</strong> — Content manipulation and prompt injection create integrity risks</li>
<li><strong>Security is iterative</strong> — Wiz worked through multiple remediation rounds, each revealing new exposure surfaces</li>
</ol>
<h2>Response and Remediation</h2>
<p>To Moltbook&#8217;s credit, the team responded quickly once contacted. The vulnerability was fully patched within approximately three hours of initial contact, with multiple rounds of fixes addressing read access, write access, and additional exposed tables discovered during remediation.</p>
<p>However, the damage was done. The integrity of all platform content—posts, votes, and karma scores—during the exposure window cannot be verified.</p>
<h2>The Bottom Line</h2>
<p>The Moltbook breach serves as a cautionary tale for the AI era. While AI dramatically lowers the barrier to building software, <strong>the barrier to building securely has not kept pace</strong>. As more founders ship &#8220;vibe-coded&#8221; applications handling real users and real data, we can expect to see more security incidents like this one.</p>
<p>The solution isn&#8217;t to slow down AI-assisted development—it&#8217;s to make security a first-class, built-in part of AI-powered development. Until AI assistants learn to enable secure defaults automatically, human security oversight isn&#8217;t just valuable—it&#8217;s essential.</p>
<p><strong><a href="https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys" target="_blank" rel="noopener">Source: Wiz Research</a></strong></p>
