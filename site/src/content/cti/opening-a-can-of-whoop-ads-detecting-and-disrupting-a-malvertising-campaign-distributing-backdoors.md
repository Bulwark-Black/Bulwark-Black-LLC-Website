---
title: "Opening a Can of Whoop Ads: Detecting and Disrupting a Malvertising Campaign Distributing Backdoors"
publishedAt: 2024-01-09T18:53:58
summary: "Read Article Earlier this year, Mandiant’s Managed Defense threat hunting team identified an UNC2975 malicious advertising (“malvertising”) campaign presented to users in sponsored search engine results and social media posts, consistent with activity reported in From DarkGate to"
category: "Global Cyber Threat Intelligence"
categories:
  - "Global Cyber Threat Intelligence"
tags:
  - "DANABOT"
  - "DARKGATE"
  - "PAPERDROP"
  - "PAPERTEAR"
  - "UNC2975"
  - "yara"
heroImage: "/wp-content/uploads/2024/01/bluesynack_malicious_advertisements_6e547f35-783a-4abf-a610-ad27a66c3464.png"
wpId: 1173
wpSlug: "opening-a-can-of-whoop-ads-detecting-and-disrupting-a-malvertising-campaign-distributing-backdoors"
originalLink: "https://bulwarkblack.com/opening-a-can-of-whoop-ads-detecting-and-disrupting-a-malvertising-campaign-distributing-backdoors"
draft: false
---


<p class="has-x-large-font-size"><a href="https://www.mandiant.com/resources/blog/detecting-disrupting-malvertising-backdoors" title="">Read Article</a></p>



<p>Earlier this year, Mandiant’s Managed Defense threat hunting team identified an UNC2975 malicious advertising (“malvertising”) campaign presented to users in sponsored search engine results and social media posts, consistent with activity reported in&nbsp;<a href="https://www.esentire.com/blog/from-darkgate-to-danabot" target="_blank" rel="noreferrer noopener">From DarkGate to DanaBot</a>. This campaign dates back to at least June 19, 2023, and has abused search engine traffic and leveraged malicious advertisements to affect multiple organizations, which resulted in the delivery of the DANABOT and DARKGATE backdoors.</p>



<p>Managed Defense worked with Advanced Practices and with the Google Anti-Malvertising team to remove the malicious advertisements from the ads ecosystem, and subsequently alerted other impacted organizations to also take actions against this campaign.</p>



<p>This blog post covers the details of recently discovered infrastructure operated by the distribution threat cluster UNC2975, which Mandiant has tracked since 2021, that leveraged malicious advertisements to trick users into visiting fake “unclaimed funds&#8221; themed websites. In this UNC2975 campaign, the malicious websites delivered PAPERDROP and PAPERTEAR downloader malware that eventually led to DANABOT and DARKGATE backdoor malware. This blog post also highlights how Mandiant&#8217;s findings result in takedowns of malicious ad campaigns served on Google infrastructure.&nbsp;</p>



<div class="wp-block-file"><a id="wp-block-file--media-7adeedf0-3151-4612-bfd3-733547225fb2" href="/wp-content/uploads/2024/01/IOCs-TTPs-and-yara-Opening-a-Can-of-Whoop-Ads-Detecting-and-Disrupting-a-Malvertising-Campaign-Distributing-Backdoors.txt">IOCs-TTPs-and-yara-Opening-a-Can-of-Whoop-Ads-Detecting-and-Disrupting-a-Malvertising-Campaign-Distributing-Backdoors</a><a href="/wp-content/uploads/2024/01/IOCs-TTPs-and-yara-Opening-a-Can-of-Whoop-Ads-Detecting-and-Disrupting-a-Malvertising-Campaign-Distributing-Backdoors.txt" class="wp-block-file__button wp-element-button" download aria-describedby="wp-block-file--media-7adeedf0-3151-4612-bfd3-733547225fb2">Download</a></div>
