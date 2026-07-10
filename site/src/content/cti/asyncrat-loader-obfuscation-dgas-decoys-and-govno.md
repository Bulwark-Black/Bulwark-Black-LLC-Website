---
title: "AsyncRAT loader: Obfuscation, DGAs, decoys and Govno"
publishedAt: 2024-01-07T21:06:01
summary: "Read Article Executive summary AT&T Alien Labs has identified a campaign to deliver AsyncRAT onto unsuspecting victim systems. During at least 11 months, this threat actor has been working on delivering the RAT through an initial JavaScript file, embedded in a phishing page. Afte"
category: "Chinese Cyber Threat Intelligence"
categories:
  - "Chinese Cyber Threat Intelligence"
  - "Malware"
tags:
  - "AsyncRAT"
  - "Earth Berberoka"
heroImage: "/wp-content/uploads/2024/01/bluesynack_multiple_rats_on_the_side_desk_overlooking_what_is_o_42d999ea-f698-40b6-a79b-aea52aef9f38.png"
wpId: 1084
wpSlug: "asyncrat-loader-obfuscation-dgas-decoys-and-govno"
originalLink: "https://bulwarkblack.com/asyncrat-loader-obfuscation-dgas-decoys-and-govno"
draft: false
---


<p class="has-x-large-font-size"><a href="https://cybersecurity.att.com/blogs/labs-research/asyncrat-loader-obfuscation-dgas-decoys-and-govno">Read Article</a></p>



<h2 class="wp-block-heading">Executive summary</h2>



<p>AT&amp;T Alien Labs has identified a campaign to deliver AsyncRAT onto unsuspecting victim systems. During at least 11 months, this threat actor has been working on delivering the RAT through an initial JavaScript file, embedded in a phishing page. After more than 300 samples and over 100 domains later, the threat actor is persistent in their intentions.</p>



<h3 class="wp-block-heading">Key takeaways:</h3>



<ul class="wp-block-list">
<li>The victims and their companies are carefully selected to broaden the impact of the campaign. Some of the identified targets manage key infrastructure in the US.</li>



<li>The loader uses a fair amount of obfuscation and anti-sandboxing techniques to elude automatic detections.</li>



<li>As part of the obfuscation, the attacker also uses a lot of variable’s names and values, which are randomly generated to harden pivot/detection by strings.</li>



<li><a href="https://en.wikipedia.org/wiki/Domain_generation_algorithm" target="_blank" rel="noreferrer noopener">DGA domains</a>&nbsp;are recycled every week and decoy redirections when a VM is identified to avoid analysis by researchers.</li>



<li>The ongoing registration of new and active domains indicates this campaign is still active.</li>



<li>There is an&nbsp;<a href="https://otx.alienvault.com/pulse/65816ab93cbf54b394cee64c" target="_blank" rel="noreferrer noopener">OTX pulse</a>&nbsp;with more information.</li>
</ul>



<div class="wp-block-file"><a id="wp-block-file--media-de8e49a1-4fc9-4bed-bacb-11608363863c" href="/wp-content/uploads/2024/01/AsyncRAT-loader-hashes.txt">AsyncRAT-loader-hashes</a><a href="/wp-content/uploads/2024/01/AsyncRAT-loader-hashes.txt" class="wp-block-file__button wp-element-button" download aria-describedby="wp-block-file--media-de8e49a1-4fc9-4bed-bacb-11608363863c">Download</a></div>



<div class="wp-block-file"><a id="wp-block-file--media-6cb77009-cf9d-483b-809e-f43123598d99" href="/wp-content/uploads/2024/01/AsyncRAT-loader-URL-Check.txt">AsyncRAT-loader-URL-Check</a><a href="/wp-content/uploads/2024/01/AsyncRAT-loader-URL-Check.txt" class="wp-block-file__button wp-element-button" download aria-describedby="wp-block-file--media-6cb77009-cf9d-483b-809e-f43123598d99">Download</a></div>



<div class="wp-block-file"><a id="wp-block-file--media-1237bb5f-5518-4cba-8055-300c42e1c522" href="/wp-content/uploads/2024/01/IOCs-and-other-AsyncRat.txt">IOCs-and-other-AsyncRat</a><a href="/wp-content/uploads/2024/01/IOCs-and-other-AsyncRat.txt" class="wp-block-file__button wp-element-button" download aria-describedby="wp-block-file--media-1237bb5f-5518-4cba-8055-300c42e1c522">Download</a></div>
