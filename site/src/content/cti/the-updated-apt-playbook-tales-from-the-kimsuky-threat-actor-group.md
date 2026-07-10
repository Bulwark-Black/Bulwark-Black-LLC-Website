---
title: "The Updated APT Playbook: Tales from the Kimsuky threat actor group"
publishedAt: 2024-03-22T20:17:35
summary: "READ ARTICLE Last updated at Thu, 21 Mar 2024 13:20:04 GMT Co-authors are Christiaan Beek and Raj Samani Within Rapid7 Labs we continually track and monitor threat groups. This is one of our key areas of focus as we work to ensure that our ability to protect customers remains con"
category: "North Korean Cyber Threat Intelligence"
categories:
  - "North Korean Cyber Threat Intelligence"
tags:
  - "Black Banshee"
  - "CHM Files"
  - "Kimsuky"
  - "Thalium"
heroImage: "/wp-content/uploads/2024/03/bluesynack_The_updated_APT_playbook_Tales_from_the_kimsuky_thre_a28daf59-0198-44cb-910f-3caab1b99b97.png"
wpId: 1521
wpSlug: "the-updated-apt-playbook-tales-from-the-kimsuky-threat-actor-group"
originalLink: "https://bulwarkblack.com/the-updated-apt-playbook-tales-from-the-kimsuky-threat-actor-group"
draft: false
---


<p class="has-large-font-size"><a href="https://www.rapid7.com/blog/post/2024/03/20/the-updated-apt-playbook-tales-from-the-kimsuky-threat-actor-group/" title="">READ ARTICLE</a></p>



<p><em>Last updated at Thu, 21 Mar 2024 13:20:04 GMT</em></p>



<p><em>Co-authors are Christiaan Beek and Raj Samani</em></p>



<p>Within&nbsp;<a href="https://www.rapid7.com/research/">Rapid7 Labs</a>&nbsp;we continually track and monitor threat groups. This is one of our key areas of focus as we work to ensure that our ability to protect customers remains constant. As part of this process, we routinely identify evolving tactics from threat groups in what is an unceasing game of cat and mouse.</p>



<p>Our team recently ran across some interesting activity that we believe is the work of the&nbsp;<a href="https://attack.mitre.org/groups/G0094/" target="_blank" rel="noreferrer noopener">Kimsuky</a>&nbsp;threat actor group, also known as Black Banshee or Thallium. Originating from North Korea and active since at least 2012, Kimsuky focuses primarily on intelligence gathering. The group is known to have targeted South Korean government entities, individuals associated with the Korean peninsula&#8217;s unification process, and global experts in various fields relevant to the regime&#8217;s interests. In recent years, Kimsuky’s activity has also expanded across the APAC region to impact Japan, Vietnam, Thailand, etc.</p>



<p>Through our research, we saw an updated playbook that underscores Kimsuky’s efforts to bypass modern security measures. Their evolution in tactics, techniques, and procedures (TTPs) underscores the dynamic nature of cyber espionage and the continuous arms race between threat actors and defenders.</p>



<p>In this blog we will detail new techniques that we have observed used by this actor group over the recent months. We believe that sharing these evolving techniques gives defenders the latest insights into measures required to protect their assets.</p>



<h3 class="wp-block-heading" id="anatomy-of-the-attack">Anatomy of the Attack</h3>



<p>Let’s begin by highlighting where we started our analysis of Kimsuky and how the more we investigated, the more we discovered — to the point where we believe we observed a new wave of attacks by this actor.</p>



<p>Following the identification of the target, typically we would anticipate the reconnaissance phase to initiate in an effort to identify methods to allow access into the target. Since Kimsuky’s focus is intelligence gathering, gaining access needs to remain undetected; subsequently, the intrusion is intended to not trigger alerts.</p>



<p>Over the years, we have observed a change in this group’s methods, starting with weaponized Office documents, ISO files, and beginning last year, the abuse of shortcut files (LNK files). By disguising these LNK files as benign documents or files, attackers trick users into executing them. PowerShell commands, or even full binaries, are hidden in the LNK files — all hidden for the end-user who doesn’t detect this at the surface.</p>



<p>Our latest findings lead us to observations that we believe are Kimsuky using CHM files which are delivered in several ways, as part of an ISO|VHD|ZIP or RAR file. The reason they would use this approach is that such containers have the ability to pass the first line of defense and then the CHM file will be executed.</p>



<p>CHM files, or Compiled HTML Help files, are a proprietary format for online help files developed by Microsoft. They contain a collection of HTML pages and a table of contents, index, and full text search capability. Essentially, CHM files are used to display help documentation in a structured, navigable format. They are compiled using the Microsoft HTML Help Workshop and can include text, images, and hyperlinks, similar to web pages, but are packaged as a single compressed file with a .chm extension.</p>



<p>While originally designed for help documentation, CHM files have also been exploited for malicious purposes, such as distributing malware, because they can execute JavaScript when opened. CHM files are a small archive that can be extracted with unzipping tools to extract the content of the CHM file for analysis.</p>



<div class="wp-block-file"><a id="wp-block-file--media-5b75307d-dfca-4ae9-9129-3dd4affedcc4" href="/wp-content/uploads/2024/03/IOCs-The-Updated-APT-Playbook-Tales-from-the-Kimsuky-threat-actor-group.txt">IOCs-The-Updated-APT-Playbook-Tales-from-the-Kimsuky-threat-actor-group</a><a href="/wp-content/uploads/2024/03/IOCs-The-Updated-APT-Playbook-Tales-from-the-Kimsuky-threat-actor-group.txt" class="wp-block-file__button wp-element-button" download aria-describedby="wp-block-file--media-5b75307d-dfca-4ae9-9129-3dd4affedcc4">Download</a></div>
