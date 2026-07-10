---
title: "TGR-STA-1030 Espionage Campaign Compromises 70 Organizations Across 37 Nations Using ShadowGuard Linux Rootkit"
publishedAt: 2026-02-09T02:02:32
summary: "A massive, state-aligned cyber espionage campaign has quietly infiltrated government networks across 37 countries, targeting ministries of finance, law enforcement, and critical infrastructure. In a new report, Unit 42 exposes the operations of TGR-STA-1030 (also tracked as UNC66"
category: "Chinese Cyber Threat Intelligence"
categories:
  - "Chinese Cyber Threat Intelligence"
tags: []
heroImage: "/wp-content/uploads/2026/02/tgr-sta-1030-espionage.jpg"
wpId: 1834
wpSlug: "tgr-sta-1030-espionage-campaign-compromises-70-organizations-across-37-nations-using-shadowguard-linux-rootkit"
originalLink: "https://bulwarkblack.com/tgr-sta-1030-espionage-campaign-compromises-70-organizations-across-37-nations-using-shadowguard-linux-rootkit"
draft: false
---


<p>A massive, state-aligned cyber espionage campaign has quietly infiltrated government networks across <strong>37 countries</strong>, targeting ministries of finance, law enforcement, and critical infrastructure. In a new report, <strong>Unit 42</strong> exposes the operations of <strong>TGR-STA-1030</strong> (also tracked as <strong>UNC6619</strong>), an Asia-based threat group that has compromised at least <strong>70 organizations</strong> worldwide over the past year.</p>



<p>The group&#8217;s activities are meticulously timed to coincide with real-world geopolitical events, from mining disputes in Africa to high-level diplomatic meetings in Europe. One specific detail stands out from the research: &#8220;We found that one of the attackers uses the handle <strong>&#8216;JackMa,&#8217;</strong> which could refer to the billionaire businessman and philanthropist who co-founded Alibaba Group.&#8221;</p>



<h2 class="wp-block-heading">Sophisticated Phishing and Evasive Malware</h2>



<p>The group&#8217;s primary entry point is sophisticated phishing. In early 2025, they targeted European governments with emails claiming to be about a &#8220;ministry reorganization.&#8221; These messages contained links to malicious archives hosted on mega.nz.</p>



<p>The malware inside, dubbed <strong>Diaoyu Loader</strong> (referencing the Chinese term for &#8220;fishing&#8221;), employs clever evasion tactics. According to the report: &#8220;If the malware sample is submitted to a sandbox in isolation, the absence of this auxiliary file [pic1.png] causes the process to terminate gracefully&#8221; — effectively hiding its true nature from automated analysis tools.</p>



<h2 class="wp-block-heading">ShadowGuard: A Never-Before-Seen Linux Rootkit</h2>



<p>Once inside target networks, TGR-STA-1030 establishes deep persistence. The investigation uncovered a <strong>never-before-seen Linux rootkit named ShadowGuard</strong>. This advanced tool operates at the kernel level using <strong>eBPF technology</strong>, making it nearly invisible to standard security monitoring.</p>



<p>&#8220;It conceals specified process IDs (PIDs), making them invisible to standard user-space analysis tools like the standard Linux <code>ps aux</code> command,&#8221; the Unit 42 report explains.</p>



<h2 class="wp-block-heading">Strategic Targeting Aligned with Geopolitical Events</h2>



<p>The group&#8217;s targets read like a map of strategic economic interests:</p>



<ul class="wp-block-list">
<li><strong>Americas:</strong> Reconnaissance of Honduran government infrastructure spiked on October 31, 2025—just 30 days before an election where candidates discussed restoring ties with Taiwan.</li>



<li><strong>Europe:</strong> Scanning of the Czech President&#8217;s website surged shortly after it was announced he would co-patronize the Dalai Lama&#8217;s birthday gala.</li>



<li><strong>Africa:</strong> In the Democratic Republic of the Congo, a compromise in December 2025 appeared linked to a major mining spill by an Asian company that polluted local waterways.</li>
</ul>



<h2 class="wp-block-heading">Asia-Based Attribution</h2>



<p>While the group uses a temporary designator, its digital footprint points clearly to Asia. Researchers found multiple indicators, including regional tooling, language settings, and activity patterns aligning with the <strong>GMT+8 time zone</strong>.</p>



<h2 class="wp-block-heading">Defensive Recommendations</h2>



<p>Organizations in government and critical infrastructure sectors should:</p>



<ul class="wp-block-list">
<li>Implement enhanced phishing detection for diplomatic-themed lures</li>



<li>Monitor for eBPF-based kernel modifications on Linux systems</li>



<li>Watch for suspicious connections to mega.nz hosting services</li>



<li>Deploy behavioral analysis beyond signature-based detection</li>
</ul>



<p>&#8220;TGR-STA-1030 remains an active threat to government and critical infrastructure worldwide,&#8221; the report concludes, warning that the group prioritizes nations exploring new economic partnerships.</p>



<p><strong>Source:</strong> <a href="https://securityonline.info/jackma-shadowguard-tgr-sta-1030-spies-on-37-nations-via-linux-rootkit/" target="_blank" rel="noreferrer noopener">Security Online / Unit 42</a></p>
