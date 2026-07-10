---
title: "Detecting and Responding to Security Incidents and Why its Difficult."
publishedAt: 2024-02-19T07:29:46
summary: "Quick Picture of Attacker Vs Defender With the relentless advancement of technology and continuous improvements in security measures, there remains a significant challenge in detecting and responding to security incidents. This difficulty arises partly due to the diverse tactics "
category: "Cyber Security Blog"
categories:
  - "Cyber Security Blog"
  - "Detection"
tags:
  - "Alerts"
  - "Blue Team"
  - "Detection"
heroImage: "/wp-content/uploads/2024/02/bluesynack_cyber_attacker_versus_cyber_defender_red_team_blue_t_148f85f1-41c6-4915-994b-eeb0bc00d60a-2.png"
wpId: 1477
wpSlug: "detecting-and-responding-to-security-incidents-and-why-its-difficult"
originalLink: "https://bulwarkblack.com/detecting-and-responding-to-security-incidents-and-why-its-difficult"
draft: false
---


<p class="has-large-font-size">Quick Picture of Attacker Vs Defender</p>



<p class="has-medium-font-size">With the relentless advancement of technology and continuous improvements in security measures, there remains a significant challenge in detecting and responding to security incidents. This difficulty arises partly due to the diverse tactics employed by hackers, nation-states, bad actors, hacktivists, and ransomware gangs, among others, who are constantly devising new methods of attack.</p>



<p>The rapid pace at which technology evolves often outstrips the thoroughness of security testing, if such testing is conducted at all. Programmers are frequently focused on functionality and meeting deadlines rather than prioritizing security from the outset. This approach can have critical implications, potentially determining whether a company succeeds financially or not.</p>



<p>Consider the scenario where a new application is launched with only minimal regulatory compliance testing. While some superficial issues may be identified and addressed, more profound vulnerabilities often remain undetected. Once the application is accessible online, it becomes a target for countless bots and hackers. These adversaries may discover and exploit vulnerabilities, leading to breaches that companies scramble to contain by issuing patches or statements and then developing detections for the newly discovered vulnerabilities.</p>



<p>This scenario can show the importance of detection engineering. When a new virus or vulnerability is identified, it is crucial to conduct thorough parsing and root cause analysis of the affected binary. Understanding the tactics, techniques, and procedures (TTPs) used can aid in preventing future zero-day attacks that exploit the same vulnerabilities in the underlying services of  web applications or networks.</p>



<p class="has-large-font-size"><strong>Alert Types and Cyber Threat Intelligence</strong></p>



<p>The analyst workflow typically reacts to security incidents rather than proactively preventing them. The process often begins with an alert, which the analyst must acknowledge. </p>



<h3 class="wp-block-heading">Alert Types and Their Structures</h3>



<p>There are many different types of alerts, and their categorization depends on the organization and how they have structured their alerts. Typically, all alerts fall into the following categories: Endpoint Detection (EDR), Risk-Based Analysis (RBA), Threat Hunt (TH), Sigma/Yara, IDS/IPS, Email-based/phishing, Data Loss Prevention (DLP), and Cloud-based alerts.</p>



<h3 class="wp-block-heading">Endpoint Detection Alerts</h3>



<p>Endpoint detection alerts originate from end users within the company and typically signal any known malware or suspicious endpoint activity.</p>



<h3 class="wp-block-heading">Risk-Based Analysis Alerts</h3>



<p>Risk-Based Analysis alerts are generated from behaviors that might be considered normal but can be deemed malicious or suspicious if repeated frequently over a certain period. RBA can also trigger an alert based on a score, initiating an investigation if that activity reaches a specified threshold.</p>



<h3 class="wp-block-heading">Threat Hunt Alerts</h3>



<p>TH alerts are usually based on Cyber Threat Intelligence (CTI) and known tactics used to bypass EDR, WAF, IDS, firewalls, or any security measures that may exist within the organization.</p>



<h3 class="wp-block-heading">Sigma/Yara Alerts</h3>



<p>Sigma/Yara alerts are similar to threat hunt alerts but may have been sourced from an external database with pre-created rules.</p>



<h3 class="wp-block-heading">Email/Phishing-based Alerts</h3>



<p>Email/Phishing-based alerts are self-explanatory; an alert will fire if someone reports a phishing email, or if a malicious email is detected, it will typically be blocked by the email service monitoring the company&#8217;s emails.</p>



<h3 class="wp-block-heading">Data Loss Prevention Alerts</h3>



<p>Data Loss Prevention alerts are triggered when keywords or known sensitive data have been transferred, downloaded, emailed, or otherwise potentially exposed to areas inside or outside the network where they should not be. Examples include company AWS keys, proprietary code, personally identifiable information (PII), credit card information, health information, and anything else considered sensitive.</p>



<h3 class="wp-block-heading">Cloud Alerts</h3>



<p>Cloud alerts usually come from cloud providers hosting services. For instance, AWS has GuardDuty alerts and CloudTrail, while Azure uses Sentinel. These alerts are forwarded to and displayed in your Security Information and Event Management (SIEM) platform and are aggregated in Security Orchestration, Automation, and Response (SOAR), which helps handle and collect data from multiple sources at scale for triage.</p>



<h3 class="wp-block-heading">The Role of VirusTotal</h3>



<p>VirusTotal is beneficial for many reasons; it is an organization that receives malicious URLs, files, and malware from public sources, verifies these files by hashing them, and runs them through the top 61 security vendors in the world. This ensures that everything is up to date and allows for the integration of this massive database into your SIEM for detections. This aids in detecting incoming phishing, identifying TTPs, and assisting in the analyst&#8217;s workflow for identifying malicious files/URLs.</p>



<h3 class="wp-block-heading">Integrating Cyber Threat Intelligence</h3>



<p>Integrating cyber threat intelligence into the analyst&#8217;s workflow can greatly benefit threat detection in your company&#8217;s environment. For example, if you receive a cyber threat intelligence report indicating that users have been infected with the new Black Cat ransomware from links in the comments section on YouTube that appear legitimate, the report highlights the malicious links related to the activity. You can now proactively block those URLs in your environment and even conduct a threat hunt to see if any company personnel visited those URLs. This could prevent the attack before it happens or mitigate an ongoing attack.</p>



<h3 class="wp-block-heading">Conclusion</h3>



<p>Overall, considering all the different sources of information, the constant updating and learning, the challenge of staying up to date, and the various investigation techniques that can be deployed in relation to known or suspicious activity, all contribute to the difficulty of detecting and responding to security incidents.</p>
