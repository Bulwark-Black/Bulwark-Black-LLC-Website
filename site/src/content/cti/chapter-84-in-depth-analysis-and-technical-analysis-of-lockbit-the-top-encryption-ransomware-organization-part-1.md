---
title: "Chapter 84: In-depth analysis and technical analysis of LockBit, the top encryption ransomware organization (Part 1)"
publishedAt: 2024-01-07T20:41:31
summary: "Read Article Excerpt LockBit operators and affiliates will find ways to obtain the victim’s initial access rights and use them to deliver encrypted ransomware. The attack methods can be roughly divided into the following methods: 1. Extensive vulnerability scanning . Using Nday v"
category: "Malware"
categories:
  - "Malware"
tags:
  - "ABCD Ransomeware"
  - "BlackMatter"
  - "Conti"
  - "Exfiltrator-22"
  - "LockBit"
  - "StealBit"
  - "Trojan"
heroImage: "/wp-content/uploads/2024/01/bluesynack_in_depth_analysis_of_Lockbit_malware._Cyber_gang_of__403de72c-fb25-4707-bc9e-567716a95915.png"
wpId: 1078
wpSlug: "chapter-84-in-depth-analysis-and-technical-analysis-of-lockbit-the-top-encryption-ransomware-organization-part-1"
originalLink: "https://bulwarkblack.com/chapter-84-in-depth-analysis-and-technical-analysis-of-lockbit-the-top-encryption-ransomware-organization-part-1"
draft: false
---


<p class="has-x-large-font-size"><a href="http://Part1 Preface  Hello, my name is ABC_123 .In the past two years, the LockBit encryption ransomware group has been very active, and they have successfully extorted up to $91 million in the United States alone.Since the beginning of 2022, LockBit's operators claim to have Penetrated more than 500 organizations in different fields around the world, and LockBit 3.0 and its variants have become the encryption ransomware that has attracted global attention.Recently, the LockBit organization exploited the Citrix Bleed vulnerability (CVE-2023-4966) to attack multiple important targets including Boeing Airlines and a large bank in the United States , attracting widespread attention from various industries.Since many netizens want ABC_123 to introduce the LockBit encryption ransomware organization, today we will discuss the relevant situation of the LockBit encryption ransomware organization in detail. Note: LockBit ransomware uses encryption algorithms such as RSA and AES, which are usually unable to decrypt without the decryption key. LockBit has not made its keystore public for years. Microsoft has discovered that there is a bug in LockBit version 2.0, which allows it to be decrypted under certain special circumstances , such as restoring the Mssql database. In addition, because LockBit only encrypts the first 4KB of the file, some data can be recovered. However, achieving complete decryption is impossible">Read Article</a></p>



<p class="has-large-font-size">Excerpt </p>



<p class="has-medium-font-size"><strong><em>LockBit operators and affiliates will find ways to obtain the victim&#8217;s initial access rights and use them to deliver encrypted ransomware. The attack methods can be roughly divided into the following methods: </em></strong></p>



<p><strong>1.  Extensive vulnerability scanning  </strong>. Using Nday vulnerabilities, 1day vulnerabilities, and 0day vulnerabilities to scan assets in batches is often referred to as casting a wide net.<strong> </strong></p>



<p><strong>2   Ghost employees in the company</strong> . By bribing corporate insiders with money, LockBit has paid millions of dollars to insiders who provided important access to the company, or insiders who clicked on encrypted extortion emails, or who manually ran virus programs. .<strong> </strong></p>



<p><strong>3   New 1-day vulnerabilities</strong> . Such as Feita firewall CVE-2018-13379 vulnerability, Citrix NetScaler network device vulnerability, VMware log4j2 vulnerability, F5 code execution vulnerability, etc.<strong> </strong></p>



<p><strong>4Account   passwords sold on the dark web</strong> . Including VPN, RDP, corporate email account and password.<strong> </strong></p>



<p><strong>5   IAB Estate Sale Permissions</strong> . The LockBit organization will purchase the corresponding permissions from IAB attackers.<strong> </strong></p>



<p><strong>6   RDP password credentials</strong> . Obtained through underground purchase or RDP brute force cracking method</p>



<p><strong> 7   VPN Utilization</strong> . Through VPN vulnerabilities or weak VPN passwords.<strong> </strong></p>



<p><strong>8   social workers fishing</strong> . Backdoors are bundled in email attachments, and there are also Office macro processing backdoors.</p>



<div class="wp-block-file"><a id="wp-block-file--media-53b94dd3-c8cc-4dfe-9342-85e3910a744d" href="/wp-content/uploads/2024/01/IOCs-Chapter-84-In-depth-analysis-and-technical-analysis-of-LockBit-the-top-encryption-ransomware-organization-Part-1.txt">IOCs-Chapter-84-In-depth-analysis-and-technical-analysis-of-LockBit-the-top-encryption-ransomware-organization-Part-1</a><a href="/wp-content/uploads/2024/01/IOCs-Chapter-84-In-depth-analysis-and-technical-analysis-of-LockBit-the-top-encryption-ransomware-organization-Part-1.txt" class="wp-block-file__button wp-element-button" download aria-describedby="wp-block-file--media-53b94dd3-c8cc-4dfe-9342-85e3910a744d">Download</a></div>
