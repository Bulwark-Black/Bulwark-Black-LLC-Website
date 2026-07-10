---
title: "Backdoor.Win32 Carbanak (Anunak) / Named Pipe Null DACL"
publishedAt: 2024-01-11T16:22:58
summary: "Read Article Discovery / credits: Malvuln (John Page aka hyp3rlinx) (c) 2024 Original source: https://malvuln.com/advisory/b8e1e5b832e5947f41fd6ae6ef6d09a1.txt Contact: malvuln13@gmail.com Media: twitter.com/malvuln Threat: Backdoor.Win32 Carbanak (Anunak) Vulnerability: Named Pi"
category: "Global Cyber Threat Intelligence"
categories:
  - "Global Cyber Threat Intelligence"
  - "Russian Cyber Threat Intelligence"
tags:
  - "Anunak"
  - "Backdoor.Win32"
  - "Carbanak"
heroImage: "/wp-content/uploads/2024/01/bluesynack_backdoors_computer_security_breaches_Carbonak_296c3044-31e7-432c-914e-277c77680c74.png"
wpId: 1327
wpSlug: "backdoor-win32-carbanak-anunak-named-pipe-null-dacl"
originalLink: "https://bulwarkblack.com/backdoor-win32-carbanak-anunak-named-pipe-null-dacl"
draft: false
---


<p class="has-x-large-font-size"><a href="https://cxsecurity.com/issue/WLB-2024010029" title="">Read Article</a></p>



<p><strong>Discovery / credits: Malvuln (John Page aka hyp3rlinx) (c) 2024 Original source: https://malvuln.com/advisory/b8e1e5b832e5947f41fd6ae6ef6d09a1.txt Contact: malvuln13@gmail.com </strong></p>



<p><strong>Media: twitter.com/malvuln Threat: Backdoor.Win32 Carbanak (Anunak) Vulnerability: Named Pipe </strong></p>



<p><strong>Null DACL Family: Carbanak Type: PE32 MD5: b8e1e5b832e5947f41fd6ae6ef6d09a1 Vuln ID: MVID-2024-0667 Dropped files: AlhEXlUJ.exe, AlhEXlUJbVpfX1EMVw.bin </strong></p>



<p><strong>Disclosure: 01/09/2024 </strong></p>



<p><strong>Description: Carbanak malware creates 8 named pipes used for C2 and interprocess communications and grants RW access to the Everyone user group. Low privileged users can modify the pipes DACLs, removing rights for Everyone denying access to all users. First 6 pipes are created by its parent process and last 2 by the child process. The pipes names are randomly generated each time the it is run all except for one JFNfVUYDXmlZQV. Therefore, we can detect Carbanak by that one pipe, as the &#8220;JFNfVUYDXmlZQVI&#8221; pipe is always created regardless of other randomly named pipes. Listing Carbanaks named pipes they get grouped as they are created at same time with 2 of them listed prior to the JFNfVUYDXmlZQVI pipe. Carbanak creates a directory named &#8220;Mozilla&#8221; under ProgramData with hidden files, one of which is AlhEXlUJ.exe used by the service it creates which runs as SYSTEM. The malwares service names created seem to use an already existing service name and add &#8220;Sys&#8221; at the end of its name. Exploitation steps, output all named pipes and look for &#8220;JFNfVUYDXmlZQVI&#8221; if detected, exploit the DACL on 2 previously listed pipes and 5 pipes listed after. Successfully tested in VM environment.</strong></p>



<div class="wp-block-file"><a id="wp-block-file--media-1b667ac1-37a7-4e5e-aa94-9dd98e81270c" href="/wp-content/uploads/2024/01/IOC-and-TTPs-Backdoor.Win32-Carbanak-Anunak-Named-Pipe-Null-DACL.txt">IOC-and-TTPs-Backdoor.Win32-Carbanak-Anunak-Named-Pipe-Null-DACL</a><a href="/wp-content/uploads/2024/01/IOC-and-TTPs-Backdoor.Win32-Carbanak-Anunak-Named-Pipe-Null-DACL.txt" class="wp-block-file__button wp-element-button" download aria-describedby="wp-block-file--media-1b667ac1-37a7-4e5e-aa94-9dd98e81270c">Download</a></div>
