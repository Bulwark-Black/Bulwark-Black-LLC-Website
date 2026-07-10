---
title: "Demystifying Generative AI 🤖 A Security Researcher’s Notes"
publishedAt: 2024-01-26T17:26:09
summary: "Roberto Rodriguez – Nov 4, 2023 • 22 min read Read Article As a security researcher, stepping into the world of Generative Artificial Intelligence (GenAI) was like entering unfamiliar territory. While I was excited by the potential it held for revolutionizing security, I soon rea"
category: "AI (General)"
categories:
  - "AI (General)"
tags:
  - "AI"
heroImage: "/wp-content/uploads/2024/01/2024-01-26-09_25_00-Demystifying-Generative-AI-🤖-A-Security-Researchers-Notes.png"
wpId: 1440
wpSlug: "demystifying-generative-ai-%f0%9f%a4%96-a-security-researchers-notes"
originalLink: "https://bulwarkblack.com/demystifying-generative-ai-%f0%9f%a4%96-a-security-researchers-notes"
draft: false
---


<h4 class="wp-block-heading"><a href="https://blog.openthreatresearch.com/author/cyb3rward0g/"><br>Roberto Rodriguez</a> &#8211; Nov 4, 2023 • 22 min read</h4>



<p class="has-large-font-size"><a href="https://blog.openthreatresearch.com/demystifying-generative-ai-a-security-researchers-notes/" title="">Read Article</a></p>



<p>As a security researcher, stepping into the world of Generative Artificial Intelligence (GenAI) was like entering unfamiliar territory. While I was excited by the potential it held for revolutionizing security, I soon realized there were many unfamiliar concepts and terms that were new to me.</p>



<p>In this blog post, I simplify Generative AI concepts and share a few practical applications in security. We start by defining terminology around AI, learn how&nbsp;<code>Neural Networks</code>&nbsp;process language, and explain the role of large language models (LLMs) in modern Generative AI. Along the way, I explain concepts like tokenization, embeddings, retrieval augmented generation, and agents. I hope this helps you and inspires you to build your own tools.</p>



<h2 class="wp-block-heading" id="what-is-artificial-intelligence-ai">What is Artificial Intelligence (AI)?</h2>



<p>AI refers to a machine or computer program that can process data and, in advanced forms, learn and improve its responses over time. AI models can be basic scripts or advanced systems that improve by analyzing samples of data.</p>



<figure class="wp-block-image"><img decoding="async" src="https://blog.openthreatresearch.com/content/images/2023/09/image.png" alt=""/></figure>



<h3 class="wp-block-heading" id="a-little-bit-of-history">A little bit of history&#8230;</h3>



<p>Artificial intelligence has a long history dating back to the 1950s. In&nbsp;<code>1956</code>, the&nbsp;<a href="https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth?ref=blog.openthreatresearch.com">Dartmouth Summer Research Project on Artificial Intelligence</a>&nbsp;workshop, attended by influential researchers such as&nbsp;<a href="https://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist)?ref=blog.openthreatresearch.com">John McCarthy</a>,&nbsp;<a href="https://en.wikipedia.org/wiki/Marvin_Minsky?ref=blog.openthreatresearch.com">Marvin Minsky</a>,&nbsp;<a href="https://en.wikipedia.org/wiki/Nathaniel_Rochester_(computer_scientist)?ref=blog.openthreatresearch.com">Nathaniel Rochester</a>, and&nbsp;<a href="https://en.wikipedia.org/wiki/Claude_Shannon?ref=blog.openthreatresearch.com">Claude Shannon</a>, was the first time the term &#8216;artificial intelligence&#8217; was coined, marking a significant moment in the field.</p>
