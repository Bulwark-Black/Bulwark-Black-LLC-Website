---
title: "DKnife: Cisco Talos Exposes China-Nexus Gateway-Monitoring AitM Framework Active Since 2019"
publishedAt: 2026-02-05T16:03:06
summary: "Cisco Talos researchers have disclosed a sophisticated adversary-in-the-middle (AitM) framework dubbed “DKnife” that enables China-nexus threat actors to intercept, manipulate, and weaponize network traffic at the gateway level. The framework has been operational since at least 2"
category: "Chinese Cyber Threat Intelligence"
categories:
  - "Chinese Cyber Threat Intelligence"
tags: []
heroImage: "/wp-content/uploads/2026/02/dknife-china-aitm-framework.jpg"
wpId: 1809
wpSlug: "dknife-cisco-talos-exposes-china-nexus-gateway-monitoring-aitm-framework-active-since-2019"
originalLink: "https://bulwarkblack.com/dknife-cisco-talos-exposes-china-nexus-gateway-monitoring-aitm-framework-active-since-2019"
draft: false
---

<p>Cisco Talos researchers have disclosed a sophisticated adversary-in-the-middle (AitM) framework dubbed &#8220;DKnife&#8221; that enables China-nexus threat actors to intercept, manipulate, and weaponize network traffic at the gateway level. The framework has been operational since at least 2019 and its command and control infrastructure remains active as of January 2026.</p>
<h2>Seven Linux Implants for Deep-Packet Inspection</h2>
<p>DKnife comprises seven ELF-based Linux implants designed to run on router and edge devices. These components work together to perform deep-packet inspection, DNS hijacking, traffic manipulation, and malware delivery. The framework&#8217;s modular architecture allows operators to conduct campaigns ranging from covert monitoring to active inline attacks that replace legitimate downloads with malicious payloads.</p>
<p>Configuration elements including PPPoE, VLAN tagging, bridged interfaces (br0), and adjustable MTU and MAC parameters indicate that DKnife is tailored specifically for Linux-based firmware on edge networking devices.</p>
<h2>Delivering ShadowPad and DarkNimbus Backdoors</h2>
<p>The framework serves as a C2 infrastructure for both Android and Windows variants of the <a href="https://malpedia.caad.fkie.fraunhofer.de/details/win.shadowpad" target="_blank" rel="noopener">ShadowPad</a> and <a href="https://www.trendmicro.com/en_us/research/24/l/earth-minotaur.html" target="_blank" rel="noopener">DarkNimbus</a> backdoors. For Windows variants, DKnife inspects UDP traffic and responds to specific markers with C2 server information. For Android variants, the backdoor contacts what appears to be a Baidu URL that DKnife intercepts to inject C2 configuration.</p>
<p>Talos&#8217; discovery validates earlier hypotheses from <a href="https://www.trendmicro.com/en_us/research/24/l/earth-minotaur.html" target="_blank" rel="noopener">Trend Micro research</a> that DarkNimbus operated within an AitM environment.</p>
<h2>Hijacking Binary Downloads and Android Updates</h2>
<p>DKnife intercepts Android application update manifest requests and substitutes them with malicious responses redirecting to attacker-controlled URLs. The framework&#8217;s configuration includes 185 JSON files targeting popular Chinese-language applications including news media, video streaming, e-commerce platforms, taxi services, and gaming applications.</p>
<p>The DNS hijacking capabilities support both IPv4 and IPv6 protocols. For configured domains, DKnife injects responses pointing to internal addresses (10.3.3.3) created by the yitiji.bin component, routing victims to malware delivery infrastructure.</p>
<h2>Link to WizardNet Campaigns</h2>
<p>During infrastructure pivoting, Talos identified a host exhibiting DKnife port activity that also hosted the <a href="https://www.welivesecurity.com/en/eset-research/thewizards-apt-group-slaac-spoofing-adversary-in-the-middle-attacks/" target="_blank" rel="noopener">WizardNet backdoor</a>. WizardNet, first disclosed by ESET in April 2025, is deployed via the Spellbinder framework which performs AitM attacks using IPv6 SLAAC spoofing.</p>
<p>The URL redirection paths and port configurations are identical to those used by DKnife, suggesting a shared development or operational lineage between the two frameworks. ESET&#8217;s reporting indicates WizardNet activity has targeted the Philippines, Cambodia, and the United Arab Emirates.</p>
<h2>Indicators of Chinese-Speaking Threat Actors</h2>
<p>Multiple artifacts confirm the developers and operators are native Simplified Chinese speakers:</p>
<ul>
<li>Configuration files contain extensive Simplified Chinese comments</li>
<li>The &#8220;yitiji.bin&#8221; component name is Pinyin for &#8220;一体机&#8221; (all-in-one)</li>
<li>Activity reports to C2 servers use Simplified Chinese message labels</li>
<li>Targeting focuses on Chinese-language services including WeChat</li>
</ul>
<p>Based on the language artifacts, targeting patterns, and the ShadowPad malware association, Talos assesses with high confidence that China-nexus threat actors operate DKnife.</p>
<h2>Defensive Recommendations</h2>
<p>Organizations should implement the following measures to defend against gateway-level AitM attacks:</p>
<ul>
<li>Monitor edge devices and routers for unauthorized modifications or suspicious ELF binaries</li>
<li>Implement certificate pinning for critical application updates</li>
<li>Use encrypted DNS (DoH/DoT) to prevent DNS hijacking</li>
<li>Validate firmware integrity on network devices</li>
<li>Monitor for unusual traffic patterns indicating AitM activity</li>
</ul>
<p>The full technical analysis including indicators of compromise is available in <a href="https://blog.talosintelligence.com/knife-cutting-the-edge/" target="_blank" rel="noopener">Cisco Talos&#8217; detailed report</a>.</p>
