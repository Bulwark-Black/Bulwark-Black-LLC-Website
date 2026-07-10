---
title: "Unit 42 Warns: AI Agents Could Enable Gift Card Theft and Returns Fraud at Scale"
publishedAt: 2026-03-23T01:04:32
summary: "Palo Alto Networks’ Unit 42 has published new research examining how the rise of “agentic commerce” – AI agents that autonomously browse, shop, and transact on behalf of users – could be exploited by cybercriminals to conduct retail fraud at unprecedented scale. Read the full res"
category: "AI (General)"
categories:
  - "AI (General)"
  - "General CTI"
tags: []
heroImage: "/wp-content/uploads/2026/03/agentic-ai-retail-fraud.jpg"
wpId: 2101
wpSlug: "unit-42-warns-ai-agents-could-enable-gift-card-theft-and-returns-fraud-at-scale"
originalLink: "https://bulwarkblack.com/unit-42-warns-ai-agents-could-enable-gift-card-theft-and-returns-fraud-at-scale"
draft: false
---


<p>Palo Alto Networks&#8217; Unit 42 has published new research examining how the rise of &#8220;agentic commerce&#8221; – AI agents that autonomously browse, shop, and transact on behalf of users – could be exploited by cybercriminals to conduct retail fraud at unprecedented scale. <a href="https://unit42.paloaltonetworks.com/retail-fraud-agentic-ai/" target="_blank" rel="noopener">Read the full research from Unit 42</a>.</p>



<h2 class="wp-block-heading">The Coming Wave of Agentic Commerce</h2>



<p>According to research cited by Unit 42, agentic AI is expected to handle 15-25% of all e-commerce volume by 2030, potentially generating $3-5 trillion in global retail revenue. However, the World Economic Forum estimates that by 2028, one in four data breaches could result from AI agent exploitation.</p>



<p>The research focuses on Google&#8217;s Universal Commerce Protocol (UCP), an open-source standard unveiled at NRF Big Show 2026 that enables AI agents to securely conduct commerce. While UCP implements tokenized payments and verifiable credentials, Unit 42 researchers identified concerning attack vectors through prompt injection.</p>



<h2 class="wp-block-heading">Attack Scenario 1: Gift Card Theft via Payload Poisoning</h2>



<p>Unit 42 demonstrated how attackers could create malicious &#8220;deals aggregator&#8221; sites that UCP agents crawl to find coupons. Hidden within these sites would be prompt injection payloads designed to reprogram the agent&#8217;s behavior:</p>



<ul class="wp-block-list">
<li>The shopping agent visits the attacker&#8217;s site looking for discounts</li>


<li>Indirect prompt injection reprograms the agent&#8217;s memory</li>


<li>When constructing the checkout payload, the agent adds an unauthorized gift card to the order</li>


<li>If the UI only shows &#8220;Total Price,&#8221; users approve without noticing the hidden line item</li>
</ul>



<p>The researchers note: &#8220;The real danger isn&#8217;t just the $100 stolen; it&#8217;s the invisible death of customer loyalty.&#8221;</p>



<h2 class="wp-block-heading">Attack Scenario 2: Returns Fraud via Logic Hijacking</h2>



<p>A second attack scenario involves manipulating UCP&#8217;s state machine to issue refunds without proper verification. Attackers could embed hidden instructions in marketplace listings that trick agents into bypassing return verification steps:</p>



<ul class="wp-block-list">
<li>A bot purchases an item with malicious metadata</li>


<li>When initiating a return, the agent reads the product page for instructions</li>


<li>Hidden prompt injection triggers instant refund without shipping verification</li>


<li>Organized crime groups could automate 10,000 fraudulent returns per hour</li>
</ul>



<h2 class="wp-block-heading">The Scale of the Threat</h2>



<p>Organized Retail Crime (ORC) already costs retailers approximately $700,000 per $1 billion in sales, with 57% of retailers reporting increased ORC activity. The researchers warn that agentic commerce could &#8220;supercharge&#8221; existing fraud patterns by enabling automated exploitation at scale.</p>



<h2 class="wp-block-heading">Defensive Recommendations</h2>



<p>Unit 42 recommends that organizations implementing agentic commerce adopt:</p>



<ul class="wp-block-list">
<li><strong>Know Your Agent (KYA)</strong> frameworks for identity validation</li>


<li><strong>Agent reputation scoring</strong> to validate behavior patterns</li>


<li>Implementation of <strong>Agent Payments Protocol (AP2)</strong> security principles</li>


<li><strong>Unit 42 AI Security Assessments</strong> to identify AI-related risks</li>
</ul>



<p>The research emphasizes that while protocols like AP2 address authorization and authenticity, additional guardrails will be necessary as agentic commerce evolves. Organizations should also engage with the NRF Center for Digital Risk &amp; Innovation for collaborative fraud prevention efforts.</p>



<h2 class="wp-block-heading">Why This Matters</h2>



<p>As AI agents become trusted intermediaries in consumer transactions, the attack surface for prompt injection expands significantly. The &#8220;invisible&#8221; nature of these attacks – where customers may not notice unauthorized charges until reviewing bank statements – poses both financial and reputational risks for retailers.</p>



<p>Organizations deploying AI agents for commerce should prioritize security assessments and implement robust verification mechanisms before threat actors begin exploiting these new attack vectors at scale.</p>
