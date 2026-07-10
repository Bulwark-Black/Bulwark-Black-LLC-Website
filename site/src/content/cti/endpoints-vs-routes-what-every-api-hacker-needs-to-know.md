---
title: "Endpoints vs Routes: What every API hacker needs to know"
publishedAt: 2024-02-14T05:46:28
summary: "READ ARTICLE DANA EPP’S BLOG API Hacking Fundamentals February 13, 2024 I recently had an interesting conversation on Twitter/X that got me thinking about API endpoints vs routes. It all started with this tweet: The conversation progressed into whether this was one vulnerability "
category: "Bug Bounty"
categories:
  - "Bug Bounty"
tags:
  - "API"
  - "Bug Bounty"
heroImage: "/wp-content/uploads/2024/02/bluesynack_an_API_in_bug_bounty_hacker_c308b28d-861f-4a59-8f49-106678cc6b0c.png"
wpId: 1462
wpSlug: "endpoints-vs-routes-what-every-api-hacker-needs-to-know"
originalLink: "https://bulwarkblack.com/endpoints-vs-routes-what-every-api-hacker-needs-to-know"
draft: false
---


<p><a href="https://danaepp.com/endpoints-vs-routes" title="">READ ARTICLE</a></p>



<p>DANA EPP&#8217;S BLOG <a href="https://danaepp.com/category/api-hacking-fundamentals">API Hacking Fundamentals</a> February 13, 2024</p>



<ul class="wp-block-list"></ul>



<p>I recently had an interesting conversation on Twitter/X that got me thinking about API endpoints vs routes. It all started with this tweet:</p>



<figure class="wp-block-image size-full"><img loading="lazy" decoding="async" width="492" height="337" src="/wp-content/uploads/2024/02/image.png" alt="" class="wp-image-1464" srcset="/wp-content/uploads/2024/02/image.png 492w, /wp-content/uploads/2024/02/image-300x205.png 300w" sizes="auto, (max-width: 492px) 100vw, 492px" /></figure>



<p>The conversation progressed into whether this was one vulnerability or two. It also started questioning my understanding and definition of what an API endpoint vs. an API route means.</p>



<p>I’ve decided to clarify my thinking by writing this post. I want to explore the nomenclatures and see what the community thinks. By the end of the article, I am hoping you agree with me that Manuel should be submitting two separate reports to the vendor.</p>



<h2 class="wp-block-heading">What is an API endpoint?</h2>



<p>An API endpoint is a specific URL or URI (Uniform Resource Identifier) where an API can be accessed by a client application. It represents a specific function or resource available in the API. The endpoint is what the API exposes for a specific operation. It is the point of interaction where the API services can be consumed.</p>



<p>Consider an API for a user management system. An endpoint in this API might be&nbsp;<code><strong>https://api.example.com/users/12345</strong></code>, where accessing this URL could return information about the user with ID&nbsp;<strong><code><strong>12345</strong></code></strong>.</p>



<p></p>
