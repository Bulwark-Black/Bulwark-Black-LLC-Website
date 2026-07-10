---
title: "Iranian Threat Actors Target Hikvision and Dahua IP Cameras for Kinetic Strike Coordination"
publishedAt: 2026-03-16T20:02:50
summary: "As Iran-Israel-US military operations escalate in the Middle East, Check Point Research and Tenable have identified a significant surge in Iranian threat actors targeting IP cameras manufactured by Hikvision and Dahua. The activity, which began spiking on February 28, 2026, coinc"
category: "Iranian Cyber Threat Intelligence"
categories:
  - "Iranian Cyber Threat Intelligence"
  - "Operational Technology (OT)"
tags: []
heroImage: "/wp-content/uploads/2026/03/iranian-ip-camera-targeting.jpg"
wpId: 2067
wpSlug: "iranian-threat-actors-target-hikvision-and-dahua-ip-cameras-for-kinetic-strike-coordination"
originalLink: "https://bulwarkblack.com/iranian-threat-actors-target-hikvision-and-dahua-ip-cameras-for-kinetic-strike-coordination"
draft: false
---


<p>As Iran-Israel-US military operations escalate in the Middle East, <a href="https://research.checkpoint.com/2026/interplay-between-iranian-targeting-of-ip-cameras-and-physical-warfare-in-the-middle-east/">Check Point Research</a> and <a href="https://www.tenable.com/blog/cyber-retaliation-analyzing-iranian-cyber-activity-following-operation-epic-fury">Tenable</a> have identified a significant surge in Iranian threat actors targeting IP cameras manufactured by Hikvision and Dahua. The activity, which began spiking on February 28, 2026, coincides with the start of Operation Epic Fury and extends across Israel, Qatar, Bahrain, Kuwait, the UAE, Cyprus, and Lebanon.</p>



<h2 class="wp-block-heading">Surveillance as a Weapon of War</h2>



<p>The targeting campaign is not random opportunism—it appears to be systematic reconnaissance and battle damage assessment (BDA) support for kinetic military operations. Check Point researchers identified attack infrastructure that combines commercial VPN exit nodes (Mullvad, ProtonVPN, Surfshark, NordVPN) with virtual private servers, attributed to multiple Iranian-nexus threat actors.</p>



<p>The implications are chilling: by compromising security cameras near strategic targets, Iranian operators can observe locations before and after missile strikes, enabling real-time target correction and damage assessment. In one documented case during the June 2025 Israel-Iran conflict, Iran reportedly took control of a street camera facing the Weizmann Institute of Science just prior to striking it with a ballistic missile.</p>



<h2 class="wp-block-heading">Exploited Vulnerabilities</h2>



<p>The Iranian operators are exploiting known vulnerabilities in Hikvision and Dahua devices, several of which have been added to CISA&#8217;s Known Exploited Vulnerabilities (KEV) Catalog:</p>



<ul class="wp-block-list">
<li><strong>CVE-2017-7921</strong> — Hikvision IP Camera Improper Authentication (CVSS 10.0)</li>
<li><strong>CVE-2021-36260</strong> — Hikvision Web Server Command Injection (CVSS 9.8)</li>
<li><strong>CVE-2021-33044</strong> — Dahua Authentication Bypass (CVSS 9.8)</li>
<li><strong>CVE-2023-6895</strong> — Hikvision Intercom Broadcasting System Command Injection (CVSS 9.8)</li>
<li><strong>CVE-2025-34067</strong> — Hikvision Integrated Security Management Platform RCE (CVSS 9.8)</li>
</ul>



<p>Patches are available for all listed vulnerabilities, but many organizations have not applied them, leaving cameras exposed to exploitation.</p>



<h2 class="wp-block-heading">Activity Correlated with Geopolitical Events</h2>



<p>Check Point&#8217;s deep-dive analysis revealed waves of camera-targeting activity that align closely with geopolitical flashpoints:</p>



<ul class="wp-block-list">
<li><strong>January 14-15:</strong> Surge during Iran&#8217;s internal protests when Iranian officials anticipated potential U.S. strikes and closed airspace</li>
<li><strong>January 24:</strong> CENTCOM commander visited Israel and met with IDF Chief of Staff</li>
<li><strong>Early February:</strong> Iran&#8217;s leadership increasingly worried about imminent U.S. military action</li>
<li><strong>February 28:</strong> Sharp spike coinciding with the start of Operation Epic Fury</li>
</ul>



<p>This pattern suggests that camera-targeting activity from Iranian infrastructure may serve as an early warning indicator of follow-on kinetic operations.</p>



<h2 class="wp-block-heading">Recommendations for Defenders</h2>



<p>Organizations with IP cameras—particularly those in Israel, Gulf states, or with ties to defense, critical infrastructure, or government—should take immediate action:</p>



<ul class="wp-block-list">
<li><strong>Eliminate public exposure:</strong> Remove direct WAN access to cameras and NVRs; place them behind VPN or zero-trust access gateways</li>
<li><strong>Patch immediately:</strong> Apply firmware updates for all listed CVEs; replace end-of-life devices</li>
<li><strong>Enforce strong credentials:</strong> Change default passwords and enforce unique credentials per device</li>
<li><strong>Network segmentation:</strong> Isolate cameras on dedicated VLANs with no lateral access to corporate or OT networks</li>
<li><strong>Monitor for anomalies:</strong> Watch for repeated login failures, unexpected remote logins, and unusual outbound connections from camera devices</li>
</ul>



<h2 class="wp-block-heading">The Bigger Picture</h2>



<p>This campaign demonstrates how cyber operations have become an integral component of modern warfare. Iranian threat actors aren&#8217;t just stealing data—they&#8217;re building real-time intelligence capabilities that directly support kinetic military operations. The convergence of cyber reconnaissance and physical strikes represents a new frontier in hybrid warfare that defenders must account for.</p>



<p>Organizations should review Tenable&#8217;s <a href="https://www.tenable.com/blog/operation-epic-fury-potential-iranian-cyber-counteroffensive-operations">Operation Epic Fury threat brief</a> and the IT-ISAC&#8217;s joint advisory for additional guidance on defending against Iranian threat actors.</p>
