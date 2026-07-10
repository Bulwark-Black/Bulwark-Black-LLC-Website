---
title: "ClawHavoc Supply Chain Attack Poisons OpenClaw ClawHub With 1,184 Malicious AI Agent Skills"
publishedAt: 2026-02-19T16:05:12
summary: "A massive supply chain attack dubbed ClawHavoc has compromised ClawHub, the official skill marketplace for OpenClaw, an open-source AI agent platform formerly known as ClawdBot and Moltbot. Researchers have uncovered at least 1,184 malicious “Skills”—plugin-style packages that ex"
category: "Malware"
categories:
  - "Malware"
tags:
  - "AI agent security"
  - "AMOS stealer"
  - "ClawHavoc"
  - "OpenClaw"
heroImage: "/wp-content/uploads/2026/02/clawhavoc-supply-chain.jpg"
wpId: 1899
wpSlug: "clawhavoc-supply-chain-attack-poisons-openclaw-clawhub-with-1184-malicious-ai-agent-skills"
originalLink: "https://bulwarkblack.com/clawhavoc-supply-chain-attack-poisons-openclaw-clawhub-with-1184-malicious-ai-agent-skills"
draft: false
---


<p>A massive supply chain attack dubbed <strong>ClawHavoc</strong> has compromised <strong>ClawHub</strong>, the official skill marketplace for <a href="https://cyberpress.org/clawhavoc-poisons-openclaws-clawhub-with-1184-malicious-skills/" target="_blank" rel="noopener">OpenClaw</a>, an open-source AI agent platform formerly known as ClawdBot and Moltbot. Researchers have uncovered at least <strong>1,184 malicious &#8220;Skills&#8221;</strong>—plugin-style packages that extend the agent&#8217;s capabilities—turning a rapidly growing AI ecosystem into an active malware distribution hub.</p>



<h2 class="wp-block-heading">The Attack at a Glance</h2>



<p>According to <a href="https://www.antiy.net/p/clawhavoc-analysis-of-large-scale-poisoning-campaign-targeting-the-openclaw-skill-market-for-ai-agents/" target="_blank" rel="noopener">Antiy CERT analysis</a>, attackers registered as legitimate developers and systematically flooded the platform with poisoned uploads. The campaign kicked off on <strong>January 27, 2026</strong>, with activity surging on January 31st. Koi Security officially named the campaign &#8220;ClawHavoc&#8221; on February 1st, prompting removal efforts—though some malicious packages persisted.</p>



<p>Key metrics reveal the scale of the operation:</p>



<ul class="wp-block-list"><li><strong>1,184</strong> malicious Skills identified historically</li><li><strong>12</strong> malicious author IDs detected</li><li><strong>hightower6eu</strong>: Top malicious uploader with 677 packages</li><li><strong>3,498</strong> Skills remain on the platform after removals</li><li><strong>60 packages</strong> from author &#8220;moonshine-100rze&#8221; still accessible (14,285 downloads)</li></ul>



<h2 class="wp-block-heading">Social Engineering: The ClickFix Technique</h2>



<p>OpenClaw allows users to enhance AI agents through third-party Skills, but this openness became a vulnerability. Malicious authors disguised threats within seemingly legitimate Skills, employing social engineering tricks like <strong>&#8220;ClickFix&#8221; prompts</strong>.</p>



<p>Victims encountered detailed README or SKILL.md files with convincing &#8220;Prerequisites&#8221; sections that urged them to copy-paste terminal commands or download &#8220;helper tools&#8221; from malicious sites. By tricking users into self-executing the payload, attackers bypassed traditional exploit detection entirely.</p>



<h2 class="wp-block-heading">Payload Delivery Methods</h2>



<p>Antiy classified the malware family as <strong>Trojan/OpenClaw.PolySkill</strong>. Attackers embedded payloads through three primary vectors:</p>



<ul class="wp-block-list"><li><strong>Staged downloads</strong>: Initial Skills pulled additional malware from external servers</li><li><strong>Reverse shells</strong>: Python system calls establishing persistent backdoor access</li><li><strong>Direct data exfiltration</strong>: Immediate theft of sensitive files and credentials</li></ul>



<p>One example involved a fake &#8220;weather assistant&#8221; Skill that stole OpenClaw&#8217;s <code>/.clawdbot/.env</code> file—potentially exposing API keys for paid AI services and cloud platforms.</p>



<h2 class="wp-block-heading">macOS Users Hit by AMOS Stealer</h2>



<p>On macOS systems, researchers identified payloads linked to an upgraded version of the <strong>Atomic macOS Stealer (AMOS)</strong>. This infostealer targeted:</p>



<ul class="wp-block-list"><li>Browser credentials and cookies</li><li>macOS Keychain data</li><li>Telegram session files</li><li>SSH keys</li><li>Cryptocurrency wallet files</li></ul>



<p>Stolen data was compressed and exfiltrated to attacker-controlled servers, with some payloads including encrypted data blobs alongside decryption routines.</p>



<h2 class="wp-block-heading">Why It Matters</h2>



<p>This incident highlights a critical vulnerability in the rapidly expanding AI agent ecosystem. As platforms like OpenClaw prioritize ease of publishing and installation, the lack of rigorous review processes creates fertile ground for supply chain attacks.</p>



<p>The broad permissions granted to AI agents amplify the risk—once installed, a malicious Skill can access sensitive environment variables, execute arbitrary code, establish persistent backdoors, and exfiltrate data before users realize anything is wrong.</p>



<h2 class="wp-block-heading">Recommendations</h2>



<p><strong>For OpenClaw Users:</strong></p>



<ul class="wp-block-list"><li>Audit installed Skills for suspicious code or behaviors</li><li>Rotate API keys and wallet credentials immediately</li><li>Monitor for unusual binaries, scripts, or outbound webhook traffic</li><li>Avoid copy-pasted terminal commands from documentation</li><li>Be wary of password-protected archives and file-sharing downloads</li></ul>



<p><strong>For Platform Operators:</strong></p>



<ul class="wp-block-list"><li>Implement automated static analysis for uploaded packages</li><li>Scan documentation for malicious URLs and commands</li><li>Deploy sandbox testing for new Skills</li><li>Establish publisher reputation scoring systems</li><li>Enable rapid takedown capabilities per MITRE ATT&amp;CK T1195 (Supply Chain Compromise)</li></ul>



<h2 class="wp-block-heading">The Bottom Line</h2>



<p>While ClawHub has shrunk to 3,498 Skills following cleanup efforts, remnants of the campaign persist. The moonshine-100rze author&#8217;s 60 remaining packages with over 14,000 downloads demonstrate ongoing dangers. Treat third-party AI Skills with the same caution as untrusted software installers—because that&#8217;s exactly what they are.</p>



<p><strong>Source:</strong> <a href="https://cyberpress.org/clawhavoc-poisons-openclaws-clawhub-with-1184-malicious-skills/" target="_blank" rel="noopener">Cyber Press</a></p>
