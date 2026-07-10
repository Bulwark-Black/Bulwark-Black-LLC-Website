---
title: "Detecting API endpoints and source code with JS Miner"
publishedAt: 2024-02-07T04:43:28
summary: "Read Article DANA EPP’S BLOG Security (de)engineering for fun and profit Let’s be honest. Most APIs are naked without some sort of web app frontend calling it. These days, those apps are usually written in some sort of framework based on Javascript. With a bit of work, we can do "
category: "Bug Bounty"
categories:
  - "Bug Bounty"
  - "Offensive Devices / Tactics"
  - "Red Teaming"
tags:
  - "Bug Bounty"
  - "Burp Suite"
  - "JS Miner"
  - "Red Teaming"
heroImage: "/wp-content/uploads/2024/02/bluesynack_java_scrip_miner_in_burp_suite_45b9091d-7a24-44ec-9c0f-df7aef9ee628.png"
wpId: 1453
wpSlug: "detecting-api-endpoints-and-source-code-with-js-miner"
originalLink: "https://bulwarkblack.com/detecting-api-endpoints-and-source-code-with-js-miner"
draft: false
---


<p class="has-large-font-size"><a href="https://danaepp.com/detecting-api-endpoints-and-source-code-with-js-miner" title="">Read Article</a> </p>



<p>DANA EPP&#8217;S BLOG</p>



<p>Security (de)engineering for fun and profit</p>



<figure class="wp-block-image"><img decoding="async" src="https://danaepp.com/wp-content/uploads/2024/02/Detecting-API-endpoints-and-source-code-with-JS-Miner.png" alt=""/></figure>



<p>Let’s be honest. Most APIs are&nbsp;<strong>naked</strong>&nbsp;without some sort of web app frontend calling it.</p>



<p>These days, those apps are usually written in some sort of framework based on Javascript. With a bit of work, we can do deeper recon against our API targets if we interrogate the Javascript files embedded within the web application.</p>



<p>Let me show you one way to do it using a free Burp Suite extension called&nbsp;<a href="https://github.com/minamo7sen/burp-JS-Miner">JS Miner.</a></p>



<h2 class="wp-block-heading">What is JS Miner?</h2>



<p>JS Miner is a free Burp Suite Professional extension that finds interesting stuff inside static files like JavaScript and JSON.</p>



<p>You need the Professional edition because it taps directly into the Burp web vulnerability scanner.</p>



<p>If you open up Burp Suite and head over to the BApp Store, you can search for JS Miner and get the&nbsp;<a href="https://portswigger.net/bappstore/0ab7a94d8e11449daaf0fb387431225b">full breakdown of what it does</a>. However, there are several features I want to point out specifically:</p>



<ol class="wp-block-list">
<li>It automatically&nbsp;<strong>scans for hardcoded secrets</strong>&nbsp;and credentials.</li>



<li>It passively&nbsp;<strong>scans for subdomains</strong>&nbsp;the web app calls and pulls code and data from.</li>



<li>It can actively try to&nbsp;<strong>construct source code</strong>&nbsp;from JavaScript Source Map Files (if found).</li>



<li>It passively tries to&nbsp;<strong>detect API endpoints</strong>&nbsp;that use GET/POST/PUT/DELETE/PATCH.</li>
</ol>



<p>The results are displayed as&nbsp;<strong>Issues</strong>&nbsp;in the dashboard and Site Map. It can look something like this:</p>



<figure class="wp-block-image"><img decoding="async" src="https://i0.wp.com/danaepp.com/wp-content/uploads/2024/01/JS-Miner-Issues.jpg?resize=3108%2C2006&amp;ssl=1" alt="" class="wp-image-2632"/></figure>



<p>Now let me show you an easy way to add it to your API hacking workflow.</p>
