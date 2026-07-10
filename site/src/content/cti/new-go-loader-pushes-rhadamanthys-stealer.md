---
title: "New Go loader pushes Rhadamanthys stealer"
publishedAt: 2024-03-22T20:30:27
summary: "READ ARTICLE Posted: March 22, 2024 by Jérôme Segura Malware loaders (also known as droppers or downloaders) are a popular commodity in the criminal underground. Their primary function is to successfully compromise a machine and deploy one or multiple additional payloads. A good "
category: "Malware"
categories:
  - "Malware"
tags:
  - "Go Loader / Dropper"
  - "PuTTY"
  - "Rhadamanthys Stealer"
heroImage: "/wp-content/uploads/2024/03/bluesynack_New_Go_loader_pushes_Rhadamanthys_stealer_55e778ab-bc9f-4dc4-b3da-477cee1cff0a.png"
wpId: 1527
wpSlug: "new-go-loader-pushes-rhadamanthys-stealer"
originalLink: "https://bulwarkblack.com/new-go-loader-pushes-rhadamanthys-stealer"
draft: false
---


<p><a href="https://www.malwarebytes.com/blog/threat-intelligence/2024/03/new-go-loader-pushes-rhadamanthys" title="">READ ARTICLE</a></p>



<p class="has-small-font-size">Posted: March 22, 2024&nbsp;by&nbsp;<a href="https://www.malwarebytes.com/blog/authors/jeromesegura">Jérôme Segura</a></p>



<p>Malware loaders (also known as droppers or downloaders) are a popular commodity in the criminal underground. Their primary function is to successfully compromise a machine and deploy one or multiple additional payloads.</p>



<p>A good loader avoids detection and identifies victims as legitimate (i.e. not sandboxes) before pushing other malware. This part is quite critical as the value of a loader is directly tied to the satisfaction of its “customers”.</p>



<p>In this blog post, we describe a malvertising campaign with a loader that was new to us. The program is written in the Go language and uses an interesting technique to deploy its follow-up payload, the Rhadamanthys stealer.</p>



<h2 class="wp-block-heading" id="h-malicious-ad-targets-system-administrators">Malicious ad targets system administrators</h2>



<p>PuTTY is a very popular SSH and Telnet client for Windows that has been used by IT admins for years. The threat actor bought an ad that claims to be the PuTTY homepage and appeared at the top of the Google search results page, right before the official website.</p>



<figure class="wp-block-image"><img decoding="async" src="https://www.malwarebytes.com/wp-content/uploads/sites/2/2024/03/image_8d1f4a.png" alt="" class="wp-image-107107"/></figure>



<p>In this example, the ad looks suspicious simply because ad snippet shows a domain name (<em>arnaudpairoto[.]com</em>) that is completely unrelated. This is not always the case, and we continue to see many malicious ads that exactly match the impersonated brand.</p>



<h2 class="wp-block-heading" id="h-fake-putty-site">Fake PuTTY site</h2>



<p>The ad URL points to the attacker controlled domain where they can easily defeat security checks by showing a “legitimate” page to visitors that are not real victims. For example, a crawler, sandbox or scanner, will see this half finished blog:</p>



<figure class="wp-block-image"><img decoding="async" src="https://www.malwarebytes.com/wp-content/uploads/sites/2/2024/03/image_70b0ee.png?w=1024" alt="" class="wp-image-107198"/></figure>



<p>Real victims coming from the US will be redirected to a fake site instead that looks and feels exactly like putty.org. One of the big differences though is the download link.</p>



<div class="wp-block-file"><a id="wp-block-file--media-c4e288f0-b6e8-49db-9470-14a20647b5fc" href="/wp-content/uploads/2024/03/IOCs-New-Go-loader-pushes-Rhadamanthys-stealer.txt">IOCs-New-Go-loader-pushes-Rhadamanthys-stealer</a><a href="/wp-content/uploads/2024/03/IOCs-New-Go-loader-pushes-Rhadamanthys-stealer.txt" class="wp-block-file__button wp-element-button" download aria-describedby="wp-block-file--media-c4e288f0-b6e8-49db-9470-14a20647b5fc">Download</a></div>
