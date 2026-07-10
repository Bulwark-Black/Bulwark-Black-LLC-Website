---
title: "Curious Serpens’ FalseFont Backdoor: Technical Analysis, Detection and Prevention"
publishedAt: 2024-03-22T19:16:53
summary: "By Tom Fakterman, Daniel Frank and Jerome Tujague READ ARTICLE Executive Summary This article reviews the recently discovered FalseFont backdoor, which was used by a suspected Iranian-affiliated threat actor that Unit 42 tracks as Curious Serpens. Curious Serpens (aka Peach Sands"
category: "Iranian Cyber Threat Intelligence"
categories:
  - "Iranian Cyber Threat Intelligence"
tags:
  - "APT33"
  - "Curious Serpens"
  - "Elfin"
  - "FalseFront Backdoor"
  - "Holmium"
  - "MAGNALIUM"
  - "Peach Sandstorm"
  - "REFINED KITTEN"
heroImage: "/wp-content/uploads/2024/03/bluesynack_Curious_Serpens_FalseFont_Backdoor_Technical_Analysi_4533ddf0-f16b-47f9-8904-4612aa556d10.png"
wpId: 1516
wpSlug: "curious-serpens-falsefont-backdoor-technical-analysis-detection-and-prevention"
originalLink: "https://bulwarkblack.com/curious-serpens-falsefont-backdoor-technical-analysis-detection-and-prevention"
draft: false
---


<p>By <a href="https://unit42.paloaltonetworks.com/author/tom-fakterman/">Tom Fakterman</a>, <a href="https://unit42.paloaltonetworks.com/author/daniel-frank/">Daniel Frank</a> and <a href="https://unit42.paloaltonetworks.com/author/jerome-tujague/">Jerome Tujague</a></p>



<p class="has-large-font-size"><a href="https://unit42.paloaltonetworks.com/curious-serpens-falsefont-backdoor/" title="">READ ARTICLE</a></p>



<h2 class="wp-block-heading"><strong>Executive Summary</strong></h2>



<p>This article reviews the recently discovered FalseFont backdoor, which was used by a suspected Iranian-affiliated threat actor that Unit 42 tracks as Curious Serpens. Curious Serpens (aka Peach Sandstorm) is a known espionage group that has previously targeted the aerospace and energy sectors. FalseFont is the latest tool in Curious Serpens’ arsenal. The examples we analyzed show how the threat actors mimic legitimate human resources software, using a fake job recruitment process to trick victims into installing the backdoor.</p>



<p>Our in-depth technical analysis will help security professionals better understand FalseFont and more effectively defend against this threat. This article focuses on analysis of the newly discovered FalseFont backdoor and its capabilities. Lastly, we’ll discuss ways to detect and prevent this targeted backdoor.</p>



<p>Palo Alto Networks customers are better protected from the threats mentioned in this article in the following ways:</p>



<ul class="wp-block-list">
<li><a href="https://docs.paloaltonetworks.com/ngfw" target="_blank" rel="noreferrer noopener">Next-Generation Firewall</a>&nbsp;with the&nbsp;<a href="https://docs.paloaltonetworks.com/advanced-threat-prevention/administration" target="_blank" rel="noreferrer noopener">Advanced Threat Prevention</a>&nbsp;security subscription can help block the malware C2 traffic</li>



<li><a href="https://docs.paloaltonetworks.com/advanced-url-filtering" target="_blank" rel="noreferrer noopener">Advanced URL Filtering</a>&nbsp;and&nbsp;<a href="https://docs.paloaltonetworks.com/dns-security" target="_blank" rel="noreferrer noopener">DNS Security</a>&nbsp;categorize known C2 domains and IPs as malicious.</li>



<li>Organizations can engage the&nbsp;<a href="https://start.paloaltonetworks.com/contact-unit42.html" target="_blank" rel="noreferrer noopener">Unit 42 Incident Response</a>&nbsp;team for specific assistance with this threat and others</li>



<li><a href="https://docs-cortex.paloaltonetworks.com/p/XDR" target="_blank" rel="noreferrer noopener">Cortex XDR</a>&nbsp;and&nbsp;<a href="https://www.paloaltonetworks.com/resources/datasheets/prisma-cloud-compute-edition-aag">Prisma Cloud Compute</a>&nbsp;combined with the&nbsp;<a href="https://docs-cortex.paloaltonetworks.com/p/XSIAM" target="_blank" rel="noreferrer noopener">XSIAM</a>&nbsp;platform help detect and prevent the threats mentioned in this article</li>



<li>The&nbsp;<a href="https://www.paloaltonetworks.com/resources/datasheets/advanced-wildfire">Advanced WildFire</a>&nbsp;machine learning-models and analysis techniques have been reviewed and updated in light of this new malware.</li>
</ul>



<div class="wp-block-file"><a id="wp-block-file--media-481c4210-a1f0-4f15-9700-2029e8c5f3a8" href="/wp-content/uploads/2024/03/IOCs-Curious-Serpens-FalseFont-Backdoor-Technical-Analysis-Detection-and-Prevention.txt">IOCs-Curious-Serpens-FalseFont-Backdoor-Technical-Analysis-Detection-and-Prevention</a><a href="/wp-content/uploads/2024/03/IOCs-Curious-Serpens-FalseFont-Backdoor-Technical-Analysis-Detection-and-Prevention.txt" class="wp-block-file__button wp-element-button" download aria-describedby="wp-block-file--media-481c4210-a1f0-4f15-9700-2029e8c5f3a8">Download</a></div>
