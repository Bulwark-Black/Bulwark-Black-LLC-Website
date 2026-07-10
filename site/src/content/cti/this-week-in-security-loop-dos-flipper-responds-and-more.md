---
title: "THIS WEEK IN SECURITY: LOOP DOS, FLIPPER RESPONDS, AND MORE!"
publishedAt: 2024-03-22T21:09:43
summary: "by: Jonathan Bennett Here’s a fun thought experiment. UDP packets can be sent with an arbitrary source IP and port, so you can send a packet to one server, and could aim the response at another server. What happens if that response triggers another response? What if you could cra"
category: "General CTI"
categories:
  - "General CTI"
  - "Offensive Devices / Tactics"
  - "Red Teaming"
tags:
  - "Android"
  - "CVE-2023-48788"
  - "CVE-2024-2169"
  - "DoS Loop"
  - "Flipper Zero"
  - "Fortigate"
heroImage: "/wp-content/uploads/2024/03/bluesynack_Flipper_zero_denial_of_service_07a3555b-9d70-4512-8828-68083621f88d.png"
wpId: 1540
wpSlug: "this-week-in-security-loop-dos-flipper-responds-and-more"
originalLink: "https://bulwarkblack.com/this-week-in-security-loop-dos-flipper-responds-and-more"
draft: false
---


<figure class="wp-block-embed is-type-wp-embed is-provider-hackaday wp-block-embed-hackaday"><div class="wp-block-embed__wrapper">
<blockquote class="wp-embedded-content" data-secret="2FDb0qrUKv"><a href="https://hackaday.com/2024/03/22/this-week-in-security-loop-dos-flipper-responds-and-more/">This Week in Security: Loop DOS, Flipper Responds, and More!</a></blockquote><iframe loading="lazy" class="wp-embedded-content" sandbox="allow-scripts" security="restricted" style="position: absolute; clip: rect(1px, 1px, 1px, 1px);" title="&#8220;This Week in Security: Loop DOS, Flipper Responds, and More!&#8221; &#8212; Hackaday" src="https://hackaday.com/2024/03/22/this-week-in-security-loop-dos-flipper-responds-and-more/embed/#?secret=9n8SftQUge#?secret=2FDb0qrUKv" data-secret="2FDb0qrUKv" width="600" height="338" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div></figure>



<p class="has-small-font-size">by:&nbsp;<a href="https://hackaday.com/author/jonathanbennett492054495/">Jonathan Bennett</a></p>



<p>Here’s a fun thought experiment. UDP packets can be sent with an arbitrary source IP and port, so you can send a packet to one server, and could aim the response at another server. What happens if that response triggers another response? What if you could craft a packet that continues that cycle endlessly? That is essentially&nbsp;<a href="https://cispa.de/en/loop-dos" target="_blank" rel="noreferrer noopener">the idea behind Loop DoS</a>&nbsp;(Denial of Service).</p>



<p>This unique avalanche of packets has been managed using specific implementations of several different network services, like TFTP, DNS, and NTP. There are several CVEs being used to track the issue, but&nbsp;<a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-2169" target="_blank" rel="noreferrer noopener">CVE-2024-2169</a>&nbsp;is particularly odd, with the description that “Implementations of UDP application protocol are vulnerable to network loops.” This seems to be a blanket CVE for UDP, which is particularly inappropriate given that&nbsp;<a href="https://bugs.ntp.org/show_bug.cgi?id=1331" target="_blank" rel="noreferrer noopener">the first DoS of this sort was first reported in 2009 at the latest</a>.</p>



<p>More details&nbsp;<a href="https://docs.google.com/document/d/1KByZzrdwQhrXGPPCf9tUzERZyRzg0xOpGbWoDURZxTI/edit#heading=h.edovh0fxvs07" target="_blank" rel="noreferrer noopener">are available in a Google Doc</a>. There some interesting tidbits there, like the existence of cross-protocol loops, and several legacy protocols that are vulnerable by design. The important thing to remember here is you have to have an accessible UDP port for this sort of attack to take place, so if you’re not using it, firewall it.</p>



<h2 class="wp-block-heading">FLIPPER FLIPS BACK</h2>



<p>We’ve covered the saga of the Flipper Zero vs the Canadian government, in the context of car theft. The short version is that Canada has seen an uptick of car thefts from organized crime. Rather than meaningfully dealing with this problem, the Canadian government went looking for scapegoats, and&nbsp;<a href="https://hackaday.com/2024/02/12/canada-bans-flipper-zero-over-what-it-imagines-it-does/">found the Flipper Zero</a>.</p>



<p>Well now,&nbsp;<a href="https://blog.flipper.net/response-to-canadian-government/" target="_blank" rel="noreferrer noopener">Flipper has responded</a>, and put simply, the message is “stop the madness”. There has never been a confirmed case of using a flipper to steal a car, and it’s very unlikely it’s ever happened. On a modern car with proper rolling-code security, it’s not meaningfully possible to use the Flipper Zero for the theft. The two primary ways criminals&nbsp;<em>actually</em>&nbsp;steal cars are with dedicated keyfob repeaters and CAN bus hackers.</p>



<p>There is&nbsp;<a href="https://www.change.org/p/stop-the-absurd-ban-of-flipper-zero-in-canada?ref=blog.flipper.net" target="_blank" rel="noreferrer noopener">a petition to sign</a>, and for Canadians, Flipper suggests contacting your local member of parliament.</p>



<h2 class="wp-block-heading">DATA-ONLY EOP</h2>



<p>In a post on the state of modern exploitation,&nbsp;<a href="https://connormcgarr.github.io/hvci/" target="_blank" rel="noreferrer noopener">[Connor McGarr] explores the world of post-shellcode</a>&nbsp;Elevation of Privilege (EoP) exploits. Why are we talking about exploitation without shellcode? Namely because the latest and greatest of Windows kernel hardening: kCET, kCFG, and HVCI. That’s kernel Control-flow Enforcement Technology, kernel Control Flow Guard, and Hypervisor-Protected Code Integrity. Those technologies together essentially guarantee that any area of kernel memory can either be writable or executable, but not both. That’s a pretty hard limit.</p>



<p>So what’s left? Apparently a lot. Starting with the simplest, a data-only exploit, an attacker can sniff the token of a system process and use it to elevate their own. The rest of the post is an in-depth treatment of how an attacker process can sniff and manipulate its way to a nearly kernel-level position. Impressive stuff.</p>



<h2 class="wp-block-heading">FORTINET OLD AND NEW</h2>



<p>We have&nbsp;<a href="https://www.horizon3.ai/attack-research/attack-blogs/cve-2023-48788-fortinet-forticlientems-sql-injection-deep-dive/" target="_blank" rel="noreferrer noopener">a deep dive into a Forticlient vulnerability, CVE-2023-48788</a>, a SQL injection in the&nbsp;<code>FcmDaemon</code>&nbsp;process. The vulnerable field here was “FCTUID”, and a&nbsp;<code>WAITFOR DELAY</code>&nbsp;message was enough to prove it was the vulnerability. Turning this into an RCE is trivial thanks to the extremely helpful&nbsp;<code>xp_cmdshell</code>&nbsp;function of Microsoft SQL server. That’s off by default, but can be turned back on… via SQL statements. *sigh* It’s a bit jarring to cover Microsoft’s stellar work on hardening the Windows kernel, only to find old cruft in their SQL server still causing problems like this.</p>



<p>And then there’s the newer Fortinet issue, in the Fortigate SSL VPN.&nbsp;<a href="https://www.assetnote.io/resources/research/two-bytes-is-plenty-fortigate-rce-with-cve-2024-21762" target="_blank" rel="noreferrer noopener">Researchers at Assetnote give us all the details</a>&nbsp;on how they tracked this one down, starting with patch diffing and fuzzing the likely vulnerable endpoint. That led to a crash, which was a great start, but even a Ghidra decompile wasn’t quite enough to work out how to turn the crash into an exploit. What was really needed was to hook a debugger to the crashing function.</p>



<p>And that gets into the hack before the hack. As typically happens, the Assetnote folks had to take a system image and backdoor it to get true root access and a usable system terminal. That was an adventure in itself. With that done, GDB did its magic, revealing that the crash they found was nearly useless for exploitation. But a bit of manipulation with leading 0s in the packet that caused the crash, and they had a primitive: The bytes&nbsp;<code>0x0a0d</code>&nbsp;could be written to the stack, at a mostly controlled location. Is that enough for an exploit? Just two bytes?</p>



<p>When you can send packets that get stored on the heap, and you have a debugger to watch what happens, it turns out that&nbsp;<em>is</em>&nbsp;enough. A return pointer was chosen, that could be corrupted with this two-byte write, to jump program execution through a gadget right into a carefully controlled heap location. Write the payload that pops&nbsp;<code>/bin/sh</code>, and victory! Except, remember all that hacking they did on their test copy of Fortigate? One of those steps was replacing the&nbsp;<code>/bin/sh</code>&nbsp;binary with something useful. After a bit more wrangling, and borrowing a function or two from the system SSL library, the exploit was finally finished, using a nodejs</p>
