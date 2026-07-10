---
title: "From Akamai to F5 to NTLM… with love."
publishedAt: 2024-01-08T16:05:46
summary: "Read Article Discovery Note: This paper will be covering 1 smuggle gadget out of about 10 that I use in my testing, however this paper will show how this gadget, originally found by @albinowax, can be modified to pin one provider against another in a brutal fashion as you will re"
category: "Bug Bounty"
categories:
  - "Bug Bounty"
tags:
  - "Akamai"
  - "Cache Poisoning"
  - "Request Smuggling"
heroImage: "/wp-content/uploads/2024/01/comics-1.png"
wpId: 1097
wpSlug: "from-akamai-to-f5-to-ntlm-with-love"
originalLink: "https://bulwarkblack.com/from-akamai-to-f5-to-ntlm-with-love"
draft: false
---


<p class="has-x-large-font-size"><strong><a href="https://blog.malicious.group/from-akamai-to-f5-to-ntlm/" title="Read Article">Read Article</a></strong></p>



<h2 class="wp-block-heading" id="discovery">Discovery</h2>



<p><em>Note: This paper will be covering 1 smuggle gadget out of about 10 that I use in my testing, however this paper will show how this gadget, originally found by @albinowax, can be modified to pin one provider against another in a brutal fashion as you will read soon.</em></p>



<p>As a freelance security researcher and bug hunter, I was already well acquainted with both Request Smuggling and Cache Poisoning bugs, and have had multiple reports on each in the past across all the platforms I hunt on. However, when&nbsp;<em>@albinowax</em>&nbsp;released his Malformed Content-Length paper, I didn&#8217;t fully understand its potential on release. I was in the middle of some malware research and development and honestly didn&#8217;t give it the attention I should have at the time. I was wrong.</p>



<p>Months later on a bug hunting engagement, I ran a HTTP Smuggler scan towards the end of my work day since it had recently been updated to include the Malformed Content-Length gadgets&nbsp;<em>@albinowax</em>&nbsp;had been working on previously. To my surprise, there was actually a hit, in fact, there was 3 hits over 25 subdomains.</p>



<p>The image below was one of the three hits that Burp-Suite picked up on, and I marked it up some so that I could explain this a bit.</p>
