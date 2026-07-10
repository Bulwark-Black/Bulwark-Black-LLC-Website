---
title: "Automating C2 Infrastructure with Terraform, Nebula, Caddy and Cobalt Strike"
publishedAt: 2024-01-11T18:30:02
summary: "Read Article The ability to quickly build out a C2 infrastructure within a few minutes, including all the set up and tear down logic included would be a great asset for any offensive security group or operator. In this post, I will show exactly how to build a fully automated func"
category: "Business"
categories:
  - "Business"
  - "Offensive Devices / Tactics"
  - "Projects"
tags:
  - "C2"
  - "Nebula"
  - "Project"
  - "Terraform"
heroImage: "/wp-content/uploads/2024/01/featured-3-1.png"
wpId: 1364
wpSlug: "automating-c2-infrastructure-with-terraform-nebula-caddy-and-cobalt-strike"
originalLink: "https://bulwarkblack.com/automating-c2-infrastructure-with-terraform-nebula-caddy-and-cobalt-strike"
draft: false
---


<p class="has-x-large-font-size"><a href="https://blog.malicious.group/automating-c2-infrastructure-with-terraform-nebula-caddy-and-cobalt-strike/" title="">Read Article</a></p>



<p>The ability to quickly build out a C2 infrastructure within a few minutes, including all the set up and tear down logic included would be a great asset for any offensive security group or operator. &nbsp;In this post, I will show exactly how to build a fully automated functional C2 infrastructure using&nbsp;<a href="https://www.terraform.io/?ref=blog.malicious.group">Terraform</a>,&nbsp;<a href="https://github.com/slackhq/nebula?ref=blog.malicious.group">Nebula</a>,&nbsp;<a href="https://caddyserver.com/?ref=blog.malicious.group">Caddy</a>&nbsp;and&nbsp;<a href="https://www.cobaltstrike.com/?ref=blog.malicious.group">Cobalt Strike</a>.</p>



<p>Special thanks to both&nbsp;<a href="https://twitter.com/byt3bl33d3r?ref=blog.malicious.group">@byt3bl33d3r</a>&nbsp;and&nbsp;<a href="https://twitter.com/bin3xish477?ref=blog.malicious.group">@bin3xish477</a>&nbsp;for bringing Caddy to my attention as a possible replacement for Nginx/Apache.</p>



<h2 class="wp-block-heading" id="tldr">TL;DR</h2>



<p>If reading all the content below is too hard for you 🙂 you can simply skim the paper and check the git repo below if you are only interested in the code.</p>
