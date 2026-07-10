---
title: "Google Blocks Massive Model Extraction Campaign Targeting Gemini AI with 100,000+ Malicious Prompts"
publishedAt: 2026-02-13T16:03:33
summary: "Google has revealed it detected and blocked a sophisticated campaign involving more than 100,000 prompts designed to extract the proprietary reasoning capabilities of its Gemini AI model, according to the Google Threat Intelligence Group’s latest quarterly threat report. The Grow"
category: "Chinese Cyber Threat Intelligence"
categories:
  - "Chinese Cyber Threat Intelligence"
tags: []
heroImage: "/wp-content/uploads/2026/02/gemini-model-extraction.jpg"
wpId: 1863
wpSlug: "google-blocks-massive-model-extraction-campaign-targeting-gemini-ai-with-100000-malicious-prompts"
originalLink: "https://bulwarkblack.com/google-blocks-massive-model-extraction-campaign-targeting-gemini-ai-with-100000-malicious-prompts"
draft: false
---


<p>Google has revealed it detected and blocked a sophisticated campaign involving more than 100,000 prompts designed to extract the proprietary reasoning capabilities of its Gemini AI model, according to the <a href="https://www.csoonline.com/article/4132098/google-fears-massive-attempt-to-clone-gemini-ai-through-model-extraction.html" target="_blank" rel="noopener">Google Threat Intelligence Group&#8217;s latest quarterly threat report</a>.</p>



<h2 class="wp-block-heading">The Growing Threat of Model Extraction</h2>



<p>The coordinated attack represents what security researchers call <strong>model extraction</strong> or <strong>knowledge distillation</strong> — a machine-learning technique where attackers attempt to replicate the essential capabilities of a large AI model into a smaller one. Google&#8217;s real-time detection systems identified and blocked the prompts, protecting the internal reasoning traces that make Gemini&#8217;s capabilities unique.</p>



<p>&#8220;Model extraction and subsequent knowledge distillation enable an attacker to accelerate AI model development quickly and at a significantly lower cost,&#8221; Google stated in the report. &#8220;This activity effectively represents a form of intellectual property theft.&#8221;</p>



<h2 class="wp-block-heading">Attack Methodology Revealed</h2>



<p>The attackers employed sophisticated techniques, instructing Gemini to maintain &#8220;the language used in the thinking content strictly consistent with the main language of the user input.&#8221; This approach was specifically designed to extract Gemini&#8217;s reasoning processes across multiple languages, suggesting an attempt to clone the model&#8217;s capabilities for non-English markets.</p>



<p>Google noted that the breadth of questions in the campaign indicated a systematic effort to replicate Gemini&#8217;s reasoning abilities across a wide variety of tasks and languages — a hallmark of well-funded, state-backed or corporate espionage operations.</p>



<h2 class="wp-block-heading">DeepSeek Accusations Intensify Concerns</h2>



<p>The disclosure comes amid growing industry concerns about AI intellectual property theft. OpenAI simultaneously told US lawmakers that Chinese AI firm <strong>DeepSeek</strong> has deployed &#8220;new, obfuscated methods&#8221; to extract results from leading American AI models. OpenAI accused DeepSeek of attempting to &#8220;free-ride on the capabilities developed by OpenAI and other US frontier labs,&#8221; highlighting how model theft has become a critical concern for companies that have invested billions in AI development.</p>



<h2 class="wp-block-heading">Nation-State APT Groups Weaponize Gemini</h2>



<p>Beyond extraction attempts, Google documented how government-backed threat actors from multiple nations integrated Gemini into their attack operations in late 2025:</p>



<ul class="wp-block-list">
<li><strong>Chinese APT31 and UNC795:</strong> Automated vulnerability analysis, malware debugging, and exploitation technique research</li>
<li><strong>Iranian APT42:</strong> Crafted targeted social engineering campaigns using AI-generated biographical details to build trust with victims</li>
<li><strong>North Korean UNC2970:</strong> Gathered intelligence on defense contractors and cybersecurity firms to support phishing campaigns</li>
</ul>



<p>Google confirmed it disabled accounts and assets associated with these threat groups and used the insights to strengthen defenses against AI misuse.</p>



<h2 class="wp-block-heading">Malware Now Embeds Gemini APIs</h2>



<p>The report also identified a new malware family called <strong>HONESTCUE</strong> that integrates Gemini&#8217;s API directly into its operations. The malware sends seemingly benign prompts to generate working code, which it then compiles and executes in memory — a technique designed to bypass Gemini&#8217;s safety filters through prompt fragmentation.</p>



<p>&#8220;Integration of public AI models like Google Gemini into malware grants threat actors instant access to powerful LLM capabilities without needing to build or train anything themselves,&#8221; noted Pete Luban, Field CISO at AttackIQ. &#8220;Malware capabilities have advanced exponentially, allowing for faster lateral movement, stealthier attack campaigns, and more convincing mimicry of typical company operations.&#8221;</p>



<h2 class="wp-block-heading">Defensive Recommendations</h2>



<p>For organizations providing AI models as services, Google recommends:</p>



<ul class="wp-block-list">
<li>Monitor API access patterns for signs of systematic extraction</li>
<li>Implement strict governance over AI systems and data flows</li>
<li>Deploy response filtering and output controls to prevent attackers from determining model behavior</li>
<li>Conduct continuous testing against realistic adversary behavior</li>
</ul>



<p>The campaign underscores a fundamental shift in the threat landscape: AI models themselves have become high-value targets for nation-state actors and competitors seeking to shortcut billions of dollars in R&amp;D investment.</p>



<p><em>Source: <a href="https://www.csoonline.com/article/4132098/google-fears-massive-attempt-to-clone-gemini-ai-through-model-extraction.html" target="_blank" rel="noopener">CSO Online</a></em></p>
