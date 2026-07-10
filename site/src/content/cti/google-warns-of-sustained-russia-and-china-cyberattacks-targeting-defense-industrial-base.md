---
title: "Google Warns of Sustained Russia and China Cyberattacks Targeting Defense Industrial Base"
publishedAt: 2026-02-11T16:03:52
summary: "Google Threat Intelligence Group (GTIG) has published a comprehensive report revealing persistent cyber operations targeting the defense industrial base (DIB) from Russia and China-linked threat actors. The findings detail how state-sponsored hackers are exploiting everything fro"
category: "General CTI"
categories:
  - "General CTI"
tags: []
heroImage: "/wp-content/uploads/2026/02/google-gtig-defense-industrial-base-threats.jpg"
wpId: 1849
wpSlug: "google-warns-of-sustained-russia-and-china-cyberattacks-targeting-defense-industrial-base"
originalLink: "https://bulwarkblack.com/google-warns-of-sustained-russia-and-china-cyberattacks-targeting-defense-industrial-base"
draft: false
---


<p><strong>Google Threat Intelligence Group (GTIG) has published a comprehensive report revealing persistent cyber operations targeting the defense industrial base (DIB) from Russia and China-linked threat actors.</strong> The findings detail how state-sponsored hackers are exploiting everything from battlefield messaging apps to edge network devices to compromise defense contractors, military personnel, and the broader supply chain.</p>



<h2 class="wp-block-heading">Key Findings</h2>



<p>The GTIG report identifies several distinct threat patterns:</p>



<ul class="wp-block-list">
<li><strong>Russian actors</strong> are actively targeting defense technologies deployed in Ukraine, with particular focus on unmanned aircraft systems (UAS) and secure messaging applications</li>
<li><strong>China-nexus groups</strong> represent the most active threat by volume, increasingly exploiting edge devices and appliances for initial access</li>
<li><strong>North Korean IT workers</strong> continue infiltrating defense organizations through the hiring process</li>
<li><strong>Iranian espionage actors</strong> are spoofing recruitment portals to target defense contractor employees</li>
</ul>



<h2 class="wp-block-heading">Russian Targeting of Ukraine Defense Technologies</h2>



<p>Multiple Russian threat clusters are conducting sophisticated campaigns against Ukraine&#8217;s military technology ecosystem:</p>



<h3 class="wp-block-heading">APT44 (Sandworm)</h3>



<p>Attributed to GRU Unit 74455, APT44 continues attempting to exfiltrate data from Signal and Telegram encrypted messaging applications, likely via physical access to devices obtained during military operations. The group deploys WAVESIGN, a Windows Batch script for decrypting and stealing Signal Desktop data, and INFAMOUSCHISEL malware targeting Android devices running Ukrainian military applications.</p>



<h3 class="wp-block-heading">TEMP.Vermin</h3>



<p>Linked to security agencies of the Luhansk People&#8217;s Republic, this actor deploys malware including VERMONSTER, SPECTRUM, and FIRMACHAGENT via lure content themed around drone production, anti-drone defense systems, and video surveillance.</p>



<h3 class="wp-block-heading">UNC5125 and UNC5792</h3>



<p>These clusters target frontline drone units through fake questionnaires purporting to be from drone training academies, and compromise Signal accounts by exploiting the device-linking feature. UNC5125 has delivered the MESSYFORK backdoor to Ukrainian UAV operators, while UNC5792 uses altered &#8220;group invite&#8221; pages to link actor-controlled devices to victims&#8217; Signal accounts.</p>



<h3 class="wp-block-heading">UNC5976</h3>



<p>Since January 2025, this cluster has conducted phishing campaigns delivering malicious RDP connection files, with infrastructure spoofing defense contractors from the UK, US, Germany, France, Sweden, Norway, Ukraine, Turkey, and South Korea.</p>



<h2 class="wp-block-heading">China-Nexus: The Most Active Threat</h2>



<p>GTIG&#8217;s analysis reveals that <strong>China-nexus groups represent the highest volume of state-sponsored cyber espionage intrusions</strong> against the defense industrial base over the past two years. Key observations include:</p>



<ul class="wp-block-list">
<li><strong>UNC3886</strong> and <strong>UNC5221</strong> exemplify how Chinese APTs increasingly target edge devices and appliances for initial access</li>
<li>Unlike the tactical battlefield focus of Russian operations, Chinese intrusions appear oriented toward preparatory access and R&amp;D theft missions</li>
<li>The targeting of network edge infrastructure poses significant risks as these devices often lack traditional endpoint detection capabilities</li>
</ul>



<h2 class="wp-block-heading">Supply Chain and Ransomware Risks</h2>



<p>The report highlights that <strong>manufacturing has been the most represented sector on ransomware data leak sites since 2020</strong>. While dedicated defense organizations represent a small fraction, many manufacturing companies provide dual-use components for defense applications, creating cascading supply chain risks.</p>



<p>The ability to surge defense component production during wartime can be severely impacted by ransomware intrusions—even when attacks are limited to IT networks.</p>



<h2 class="wp-block-heading">Evasion Tactics on the Rise</h2>



<p>A consistent theme across these campaigns is the increasing sophistication of detection evasion:</p>



<ul class="wp-block-list">
<li>Targeting personal devices and accounts outside enterprise security visibility</li>
<li>Focusing attacks on single endpoints and individuals rather than broad network compromise</li>
<li>Exploiting edge devices that lack traditional EDR coverage</li>
<li>Using legitimate cloud services and supply chain vectors to blend with normal traffic</li>
</ul>



<h2 class="wp-block-heading">Implications for Defense Organizations</h2>



<p>This report underscores the need for defense contractors and military organizations to:</p>



<ol class="wp-block-list">
<li><strong>Extend security monitoring</strong> to personal devices and messaging applications used for sensitive communications</li>
<li><strong>Harden edge infrastructure</strong> including firewalls, VPN appliances, and network devices with regular patching and monitoring</li>
<li><strong>Implement robust hiring verification</strong> to detect IT worker infiltration schemes</li>
<li><strong>Assess supply chain security</strong> for dual-use component providers vulnerable to ransomware</li>
<li><strong>Train personnel</strong> on social engineering tactics including fake recruitment portals and phishing via messaging apps</li>
</ol>



<p>As modern warfare increasingly extends into cyberspace, the defense industrial base remains a critical target. Organizations must adapt their security postures to address threats that increasingly operate outside traditional enterprise boundaries.</p>



<p><strong>Source:</strong> <a href="https://cloud.google.com/blog/topics/threat-intelligence/threats-to-defense-industrial-base">Google Threat Intelligence Group</a></p>
