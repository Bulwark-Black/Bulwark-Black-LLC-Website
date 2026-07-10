---
title: "Threat Modeling LLM Applications"
publishedAt: 2024-01-26T17:04:10
summary: "Posted by Gavin Klondike on 06 June 2023 Read Article Before we get started: Hi! My name is GTKlondike, and these are my opinions as a cybersecurity consultant. While experts from the AI Village provided input, I will always welcome open discussion so that we can come to a better"
category: "AI (General)"
categories:
  - "AI (General)"
  - "Offensive Devices / Tactics"
tags:
  - "AI"
heroImage: "/wp-content/uploads/2024/01/bluesynack_Threat_Modeling_Artificial_Intelligence_7fa1cfb9-63c6-4c0e-9a12-819e6e917e78.png"
wpId: 1434
wpSlug: "threat-modeling-llm-applications"
originalLink: "https://bulwarkblack.com/threat-modeling-llm-applications"
draft: false
---


<p>Posted by Gavin Klondike on 06 June 2023</p>



<p class="has-large-font-size"><a href="https://aivillage.org/large%20language%20models/threat-modeling-llm/" title="">Read Article</a></p>



<p>Before we get started: Hi! My name is GTKlondike, and these are my opinions as a cybersecurity consultant. While experts from the AI Village provided input, I will always welcome open discussion so that we can come to a better understanding of LLM security together. If you’d like to continue this conversation, you can reach me on Twitter at&nbsp;<a href="https://twitter.com/GTKlondike">@GTKlondike</a>. And checkout my&nbsp;<a href="https://www.youtube.com/@NetsecExplained">YouTube channel, Netsec Explained</a>, for more advanced security topics.</p>



<hr class="wp-block-separator has-alpha-channel-opacity"/>



<p>This past week, OWASP kicked-off their&nbsp;<a href="https://owasp.org/www-project-top-10-for-large-language-model-applications/">OWASP Top 10 for Large Language Model (LLM) Applications project</a>. I’m happy that LLM security is being taken seriously and feel fortunate to have joined the kick-off and Slack for this project.</p>



<p>As part of our conversations, there’s been a bit of debate around what’s considered a vulnerability and what’s considered a feature of how LLMs operate. So I figured now would be a good time to take a stab at building a high-level threat model to suss out these differences and contribute to a greater understanding of LLMs in a security context. I’d also like for this post to act as a starting point for anyone interested in building or deploying their own LLM applications.</p>
