---
title: "Threat Actors Abuse Atlassian Jira Cloud to Bypass Email Security and Target Government Entities"
publishedAt: 2026-02-18T16:04:31
summary: "Trend Micro researchers have uncovered a sophisticated spam campaign that weaponizes Atlassian Jira Cloud’s trusted infrastructure to bypass traditional email security controls and target government and corporate entities worldwide. The campaign, active from late December 2025 th"
category: "Threat Intelligence"
categories: []
tags:
  - "APTlord"
  - "DANABOT"
  - "DARKGATE"
  - "Industroyer 2"
  - "Training"
heroImage: "/wp-content/uploads/2026/02/atlassian-jira-spam-campaign.jpg"
wpId: 1893
wpSlug: "threat-actors-abuse-atlassian-jira-cloud-to-bypass-email-security-and-target-government-entities"
originalLink: "https://bulwarkblack.com/threat-actors-abuse-atlassian-jira-cloud-to-bypass-email-security-and-target-government-entities"
draft: false
---


<p><strong>Trend Micro researchers have uncovered a sophisticated spam campaign that weaponizes Atlassian Jira Cloud&#8217;s trusted infrastructure to bypass traditional email security controls and target government and corporate entities worldwide.</strong></p>



<p>The campaign, active from late December 2025 through late January 2026, demonstrates how threat actors can exploit legitimate software-as-a-service (SaaS) platforms to deliver malicious content while evading detection.</p>



<h2 class="wp-block-heading">Key Findings</h2>



<ul class="wp-block-list"><li><strong>Trusted Domain Abuse:</strong> Attackers leveraged Atlassian Cloud&#8217;s strong domain reputation to bypass blocklists and email filters</li><li><strong>Valid Authentication:</strong> Emails passed SPF and DKIM checks through Atlassian&#8217;s integrated email system, appearing legitimate to security controls</li><li><strong>Multi-Language Targeting:</strong> Campaigns targeted English, French, German, Italian, Portuguese, and Russian speakers with localized subject lines</li><li><strong>Government Focus:</strong> Specific targeting of government and corporate sectors, including highly skilled Russian professionals working abroad</li><li><strong>Financial Motivation:</strong> Recipients were redirected to dubious investment schemes and online casino landing pages via Keitaro Traffic Distribution System (TDS)</li></ul>



<h2 class="wp-block-heading">Attack Methodology</h2>



<p>Threat actors created Atlassian Cloud accounts using randomized naming conventions, enabling them to generate disposable Jira Cloud instances at scale. Analysis revealed these instances resolved to legitimate AWS infrastructure (13.227.180.4), confirming the use of genuine Atlassian Cloud services rather than compromised servers.</p>



<p>The attackers exploited Jira Automation rules to deliver crafted emails through an integrated email sending platform. Notably, recipients did not need to be listed users within the Jira instance, nor accept any invitation—allowing widespread, anonymous delivery without exposing attacker infrastructure.</p>



<h2 class="wp-block-heading">Why This Attack Works</h2>



<p>Traditional email security places higher trust on notifications from SaaS providers. This campaign exploited that inherent trust by:</p>



<ul class="wp-block-list"><li>Using legitimate atlassian.net sender domains with strong reputation</li><li>Passing SPF and DKIM authentication checks automatically</li><li>Targeting organizations already using Atlassian Jira, where such emails are routinely trusted</li><li>Creating trial accounts with no domain ownership verification required</li></ul>



<h2 class="wp-block-heading">Indicators of Compromise</h2>



<p>Malicious domains identified in the campaign include:</p>



<ul class="wp-block-list"><li>adrinal[.]com</li><li>barankinyserialxud[.]online</li><li>archicad3d[.]com</li><li>go[.]sparkpostmail1[.]com (redirect intermediary)</li></ul>



<h2 class="wp-block-heading">Defensive Recommendations</h2>



<p>Organizations should:</p>



<ul class="wp-block-list"><li>Deploy advanced email security solutions with AI-powered threat detection</li><li>Implement identity-aware controls for emails from cloud SaaS providers</li><li>Train employees to scrutinize Jira notifications, especially those with unexpected links</li><li>Monitor for emails from unfamiliar Atlassian instances</li><li>Consider allowlisting only known, internal Atlassian Cloud instances</li></ul>



<p>Trend Micro has shared the findings with Atlassian&#8217;s security team to address the platform abuse.</p>



<p><a href="https://www.trendmicro.com/en_us/research/26/b/spam-campaign-abuses-atlassian-jira.html" target="_blank" rel="noreferrer noopener">Source: Trend Micro Research</a></p>
