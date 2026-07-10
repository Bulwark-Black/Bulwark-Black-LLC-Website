---
title: "Virtual Host Enumeration for Uncovering Hidden Subdomains"
publishedAt: 2024-01-26T23:11:52
summary: "Read Article Nairuz Abulhul – Nov 28, 2023 | Published in R3d Buck3T | 8 min read When performing external penetration testing or bug bounty hunting, we explore the targeted system from various angles to collect as much information as possible to identify potential attack vectors"
category: "Bug Bounty"
categories:
  - "Bug Bounty"
tags:
  - "Bug Bounty"
  - "vhost"
heroImage: "/wp-content/uploads/2024/01/bluesynack_bug_bounty_hunting_for_virtual_hosts_9b3d94f8-7214-4e22-85f0-b4d0dc4f78c0.png"
wpId: 1444
wpSlug: "virtual-host-enumeration-for-uncovering-hidden-subdomains"
originalLink: "https://bulwarkblack.com/virtual-host-enumeration-for-uncovering-hidden-subdomains"
draft: false
---


<p class="has-large-font-size"><a href="https://medium.com/r3d-buck3t/virtual-host-enumeration-for-uncovering-hidden-subdomains-e800625c2b8f" title="">Read Article</a></p>



<p><a href="https://medium.com/@nairuzabulhul?source=post_page-----e800625c2b8f--------------------------------">Nairuz Abulhul</a> &#8211; Nov 28, 2023 | Published in <a href="https://medium.com/r3d-buck3t?source=post_page-----e800625c2b8f--------------------------------">R3d Buck3T</a> | 8 min read </p>



<p id="2c96">When performing external penetration testing or bug bounty hunting, we explore the targeted system from various angles to collect as much information as possible to identify potential attack vectors. This involves identifying all the available assets, domains, and subdomains.</p>



<p id="c7df">During this process, one of the things we focus on is enumerating virtual hosts. By doing so, we can discover hidden or undocumented assets that may be misconfigured or vulnerable. For instance, we may find a virtual host accessible without authentication, which may lead to unauthorized access to sensitive data.</p>



<p id="9e49">In this article, we will discuss different ways to enumerate virtual hosts and gather information from them. We will use the HTB Academy exercise in the&nbsp;<em>“Information Gathering — Web Edition”</em>&nbsp;module to demonstrate the enumeration steps.</p>



<h1 class="wp-block-heading" id="a0d3">Table of Contents</h1>



<ul class="wp-block-list">
<li><a href="https://medium.com/r3d-buck3t/virtual-host-enumeration-for-uncovering-hidden-subdomains-e800625c2b8f#c410"><strong>Virtual Hosting Overview</strong></a><br>–&nbsp;<a href="https://medium.com/r3d-buck3t/virtual-host-enumeration-for-uncovering-hidden-subdomains-e800625c2b8f#8005">IP-based Hosting</a><br>–&nbsp;<a href="https://medium.com/r3d-buck3t/virtual-host-enumeration-for-uncovering-hidden-subdomains-e800625c2b8f#92eb">Name-based Hosting</a></li>



<li><a href="https://medium.com/r3d-buck3t/virtual-host-enumeration-for-uncovering-hidden-subdomains-e800625c2b8f#6ca7"><strong>Virtual Hosts Enumeration</strong></a><br>–&nbsp;<a href="https://medium.com/r3d-buck3t/virtual-host-enumeration-for-uncovering-hidden-subdomains-e800625c2b8f#b048">Ffuf</a><br>–&nbsp;<a href="https://medium.com/r3d-buck3t/virtual-host-enumeration-for-uncovering-hidden-subdomains-e800625c2b8f#a4ed">Gobuster</a><br>–<a href="https://medium.com/r3d-buck3t/virtual-host-enumeration-for-uncovering-hidden-subdomains-e800625c2b8f#b8f9">&nbsp;Curl</a></li>



<li><a href="https://medium.com/r3d-buck3t/virtual-host-enumeration-for-uncovering-hidden-subdomains-e800625c2b8f#f1c1"><strong>Post Enumeration</strong></a><br>–&nbsp;<a href="https://medium.com/r3d-buck3t/virtual-host-enumeration-for-uncovering-hidden-subdomains-e800625c2b8f#2f25">hakcheckurl</a><br>–&nbsp;<a href="https://medium.com/r3d-buck3t/virtual-host-enumeration-for-uncovering-hidden-subdomains-e800625c2b8f#5313">Eyewitness</a></li>
</ul>



<p></p>



<p></p>



<p></p>



<p></p>



<p></p>



<p></p>



<p></p>



<p></p>



<p></p>
