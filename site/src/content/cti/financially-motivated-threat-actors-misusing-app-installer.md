---
title: "Financially motivated threat actors misusing App Installer"
publishedAt: 2024-01-09T19:14:14
summary: "Read Article Since mid-November 2023, Microsoft Threat Intelligence has observed threat actors, including financially motivated actors like Storm-0569, Storm-1113, Sangria Tempest, and Storm-1674, utilizing the ms-appinstaller URI scheme (App Installer) to distribute malware. In "
category: "General CTI"
categories:
  - "General CTI"
  - "Global Cyber Threat Intelligence"
tags:
  - "Batloader"
  - "Black Basta Ransomware"
  - "Carbonak"
  - "DARKGATE"
  - "EugenLoader"
  - "Gracewire"
  - "Pikabot"
  - "POWERTRASH"
  - "SectopRAT"
  - "Storm-0569"
  - "Storm-1113"
  - "Storm-1674"
heroImage: "/wp-content/uploads/2024/01/bluesynack_money_d94bcd12-ce6a-42e0-a2c6-192fffe3afe4.png"
wpId: 1178
wpSlug: "financially-motivated-threat-actors-misusing-app-installer"
originalLink: "https://bulwarkblack.com/financially-motivated-threat-actors-misusing-app-installer"
draft: false
---


<p class="has-x-large-font-size"><a href="https://www.microsoft.com/en-us/security/blog/2023/12/28/financially-motivated-threat-actors-misusing-app-installer/" title="">Read Article</a></p>



<p>Since mid-November 2023, Microsoft Threat Intelligence has observed threat actors, including financially motivated actors like&nbsp;<a href="https://www.microsoft.com/en-us/security/blog/2022/11/17/dev-0569-finds-new-ways-to-deliver-royal-ransomware-various-payloads/">Storm-0569</a>, Storm-1113,&nbsp;<a href="https://www.microsoft.com/en-us/security/blog/2023/09/12/malware-distributor-storm-0324-facilitates-ransomware-access/#Sangria-Tempest">Sangria Tempest</a>, and Storm-1674, utilizing the&nbsp;<a href="https://learn.microsoft.com/windows/msix/app-installer/installing-windows10-apps-web">ms-appinstaller URI scheme</a>&nbsp;(App Installer) to distribute malware. In addition to ensuring that customers are protected from observed attacker activity, Microsoft investigated the use of App Installer in these attacks. In response to this activity, Microsoft has disabled the ms-appinstaller protocol handler by default.</p>



<p>The observed threat actor activity abuses the current implementation of the ms-appinstaller protocol handler as an access vector for malware that may lead to ransomware distribution. Multiple cybercriminals are also selling a malware kit as a service that abuses the MSIX file format and ms-appinstaller protocol handler. These threat actors distribute signed malicious MSIX application packages using websites accessed through malicious advertisements for legitimate popular software. A second vector of phishing through Microsoft Teams is also in use by Storm-1674.</p>



<p>Threat actors have likely chosen the ms-appinstaller protocol handler vector because it can bypass mechanisms designed to help keep users safe from malware, such as Microsoft Defender SmartScreen and built-in browser warnings for downloads of executable file formats.</p>



<p>MITIGATING ASSOCIATED ACTIVITY<a href="https://www.microsoft.com/en-us/security/blog/2023/12/28/financially-motivated-threat-actors-misusing-app-installer/#recommendations">Get recommendations&nbsp;</a></p>



<p>In this blog, we provide an analysis of activity by financially motivated threat actors abusing App Installer observed since mid-November 2023.</p>



<div class="wp-block-file"><a id="wp-block-file--media-39ed83c7-6208-4c4f-80af-dbe74f9b0a6e" href="/wp-content/uploads/2024/01/IOCs-and-TTPs-Financially-motivated-threat-actors-misusing-App-Installer.txt">IOCs-and-TTPs-Financially-motivated-threat-actors-misusing-App-Installer</a><a href="/wp-content/uploads/2024/01/IOCs-and-TTPs-Financially-motivated-threat-actors-misusing-App-Installer.txt" class="wp-block-file__button wp-element-button" download aria-describedby="wp-block-file--media-39ed83c7-6208-4c4f-80af-dbe74f9b0a6e">Download</a></div>
