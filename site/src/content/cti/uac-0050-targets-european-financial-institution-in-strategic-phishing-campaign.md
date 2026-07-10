---
title: "UAC-0050 Targets European Financial Institution in Strategic Phishing Campaign"
publishedAt: 2026-02-27T16:03:13
summary: "Russia-aligned threat actor UAC-0050 has expanded operations beyond Ukraine, targeting a European financial institution involved in reconstruction efforts with a sophisticated multi-stage spear-phishing attack. Campaign Overview Security researchers at BlueVoyant have uncovered a"
category: "Threat Intelligence"
categories: []
tags:
  - "Code Red Worm"
  - "Ivanti"
  - "Kovter"
  - "state-sponsored hackers"
heroImage: "/wp-content/uploads/2026/02/uac0050-european-phishing-2026-02-27.jpg"
wpId: 1946
wpSlug: "uac-0050-targets-european-financial-institution-in-strategic-phishing-campaign"
originalLink: "https://bulwarkblack.com/uac-0050-targets-european-financial-institution-in-strategic-phishing-campaign"
draft: false
---


<p><strong>Russia-aligned threat actor UAC-0050 has expanded operations beyond Ukraine, targeting a European financial institution involved in reconstruction efforts with a sophisticated multi-stage spear-phishing attack.</strong></p>



<h2 class="wp-block-heading">Campaign Overview</h2>



<p>Security researchers at BlueVoyant have uncovered a targeted phishing campaign attributed to UAC-0050, also known as the DaVinci Group. The threat cluster, tracked by BlueVoyant as &#8220;Mercenary Akula,&#8221; has traditionally focused on Ukrainian organizations but has now shifted targeting toward Western European entities supporting Ukraine.</p>



<p>The campaign targeted a senior legal and policy advisor at a European financial institution involved in Ukrainian reconstruction and regional development. This role represents a high-value target with access to financial systems, vendor relationships, and institutional processes.</p>



<h2 class="wp-block-heading">Attack Chain Analysis</h2>



<p>The attackers employed a multi-layered infection chain designed to evade security controls:</p>



<ul class="wp-block-list"><li><strong>Initial Access:</strong> Spear-phishing email with legal-themed content, spoofing a Ukrainian judicial domain</li><li><strong>Delivery:</strong> Link to PixelDrain file-sharing platform to bypass email security filters</li><li><strong>Payload Structure:</strong> ZIP archive → password-protected RAR → 7-Zip container → executable disguised as PDF (*.pdf.exe)</li><li><strong>Final Payload:</strong> Remote Manipulator System (RMS), a legitimate Russian remote desktop tool</li></ul>



<p>The use of RMS reflects a &#8220;living-off-the-land&#8221; approach, leveraging legitimate software to avoid triggering traditional antivirus detection.</p>



<h2 class="wp-block-heading">Threat Actor Profile</h2>



<p>UAC-0050 has been previously documented by Ukraine&#8217;s CERT as a mercenary cluster with ties to Russian law enforcement interests. Historical campaigns have utilized tools including:</p>



<ul class="wp-block-list"><li>LiteManager remote administration tool</li><li>RemcosRAT for persistent access</li><li>Various credential harvesting techniques</li></ul>



<p>This latest campaign indicates the group may be conducting strategic reconnaissance against Western European institutions that support Ukraine, potentially for intelligence collection or positioning for future operations.</p>



<h2 class="wp-block-heading">Broader Russian Cyber Operations Context</h2>



<p>This activity aligns with documented patterns of Russian cyber operations. According to CrowdStrike assessments, Russia-nexus actors continue to prioritize intelligence collection across NATO member states, with particular focus on:</p>



<ul class="wp-block-list"><li>Financial institutions supporting Ukraine</li><li>Procurement and logistics entities</li><li>Policy advisory organizations</li><li>Reconstruction coordination bodies</li></ul>



<h2 class="wp-block-heading">Defensive Recommendations</h2>



<p>Organizations involved in Ukraine support operations should implement enhanced security measures:</p>



<ol class="wp-block-list"><li>Implement strict email filtering for file-sharing links (PixelDrain, WeTransfer, etc.)</li><li>Block or alert on nested archive file chains</li><li>Monitor for legitimate remote administration tools in unexpected contexts</li><li>Conduct targeted security awareness training for personnel in legal, procurement, and advisory roles</li><li>Enable enhanced logging for Microsoft 365 and email gateway systems</li></ol>



<h2 class="wp-block-heading">Indicators of Compromise</h2>



<p><strong>Tactics, Techniques, and Procedures (TTPs):</strong></p>



<ul class="wp-block-list"><li>T1566.002 &#8211; Spearphishing Link</li><li>T1036.007 &#8211; Double File Extension</li><li>T1204.002 &#8211; Malicious File Execution</li><li>T1219 &#8211; Remote Access Software (RMS)</li></ul>



<p><em>Source: <a href="https://securereading.com/russian-aligned-phishing-attack-europe/" target="_blank" rel="noopener">SecureReading</a> | Research: BlueVoyant</em></p>
