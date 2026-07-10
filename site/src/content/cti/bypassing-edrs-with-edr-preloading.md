---
title: "Bypassing EDRs With EDR-Preloading"
publishedAt: 2024-02-13T15:17:22
summary: "READ ARTICLE Marcus Hutchins Previously, I wrote an article detailing how system calls can be utilized to bypass user mode EDR hooks. Now, I want to introduce an alternative technique, “EDR-Preloading”, which involves running malicious code before the EDR’s DLL is loaded into the"
category: "Red Teaming"
categories:
  - "Red Teaming"
tags:
  - "Bypass"
  - "EDR"
  - "Red Teaming"
heroImage: "/wp-content/uploads/2024/02/bluesynack_malware_monster_sneacking_around_the_computer_corner_70cafed0-12d4-4a04-9882-98430cfa9261.png"
wpId: 1458
wpSlug: "bypassing-edrs-with-edr-preloading"
originalLink: "https://bulwarkblack.com/bypassing-edrs-with-edr-preloading"
draft: false
---


<p class="has-large-font-size"><a href="https://malwaretech.com/2024/02/bypassing-edrs-with-edr-preload.html" title="">READ ARTICLE</a></p>



<p><a href="https://marcushutchins.com/"><br>Marcus Hutchins</a></p>



<p>Previously, I wrote&nbsp;<a href="https://malwaretech.com/2023/12/an-introduction-to-bypassing-user-mode-edr-hooks.html">an article</a>&nbsp;detailing how system calls can be utilized to bypass user mode EDR hooks. Now, I want to introduce an alternative technique, “EDR-Preloading”, which involves running malicious code before the EDR’s DLL is loaded into the process, enabling us to prevent it from running at all. By neutralizing the EDR module, we can freely call functions normally without having to worry about user mode hooks, therefore do not need to rely on direct or indirect syscalls.</p>



<p>This technique makes use of some assumptions and flaws in the way EDRs load their user mode component. The EDR need to inject its DLL into every process in order to hook user mode function, but run the DLL too early and the process will crash, run it too late and the process could have already executed malicious code. The sweet-spot most EDRs have gone with is starting their DLL as late in process initialization as possible, whilst still being able to do everything they need before the process entrypoint is called.</p>



<p>theoretically, all we need is to find a way to load code a little bit earlier in process initialization, then we can preempt the EDR.</p>
