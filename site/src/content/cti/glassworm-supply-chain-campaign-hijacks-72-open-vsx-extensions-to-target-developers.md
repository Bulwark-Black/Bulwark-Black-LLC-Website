---
title: "GlassWorm Supply Chain Campaign Hijacks 72 Open VSX Extensions to Target Developers"
publishedAt: 2026-03-17T20:03:14
summary: "Threat actors are abusing Visual Studio Code extension dependencies in the Open VSX registry to distribute the GlassWorm malware loader through 72 malicious extensions targeting developers."
category: "Malware"
categories:
  - "Malware"
tags: []
heroImage: "/wp-content/uploads/2026/03/glassworm-vsx-supply-chain.jpg"
wpId: 2071
wpSlug: "glassworm-supply-chain-campaign-hijacks-72-open-vsx-extensions-to-target-developers"
originalLink: "https://bulwarkblack.com/glassworm-supply-chain-campaign-hijacks-72-open-vsx-extensions-to-target-developers"
draft: false
---

<p>Threat actors behind the GlassWorm campaign have evolved their tactics, now abusing extension dependency relationships in the Open VSX registry to distribute malware through a sophisticated supply chain attack targeting software developers.</p>
<h2>Transitive Dependency Abuse</h2>
<p>Researchers at <a href="https://socket.dev/blog/open-vsx-transitive-glassworm-campaign" target="_blank" rel="noopener">Socket</a> have identified at least 72 additional malicious Open VSX extensions linked to the campaign since January 31, 2026. Rather than embedding malicious payloads directly in every extension, the threat actors are now leveraging <code>extensionPack</code> and <code>extensionDependencies</code> features to create transitive delivery mechanisms.</p>
<p><strong>How the attack works:</strong></p>
<ul>
<li>Attackers publish clean-looking extensions that pass marketplace security checks</li>
<li>After gaining user trust, the extensions are updated to include dependencies on separate packages containing the GlassWorm loader</li>
<li>When installed or updated, the editor automatically installs all referenced extensions, including the malicious payload</li>
<li>This allows a benign-appearing package to begin pulling GlassWorm-linked extensions only after trust has been established</li>
</ul>
<h2>Developer Tools Impersonated</h2>
<p>The malicious extensions overwhelmingly impersonate widely-used developer utilities to maximize installation rates:</p>
<ul>
<li><strong>Linters and formatters:</strong> ESLint, Prettier</li>
<li><strong>Code runners and language tooling:</strong> Angular, Flutter, Python, Vue</li>
<li><strong>Quality-of-life extensions:</strong> vscode-icons, WakaTime, Better Comments</li>
<li><strong>AI developer tooling:</strong> Claude Code, Codex, and Antigravity</li>
</ul>
<p>This mirrors dependency abuse tactics seen in package ecosystems like npm, including the infamous Shai-Hulud campaign that compromised over 800 packages by November 2025.</p>
<h2>GlassWorm Tradecraft</h2>
<p>Earlier research into GlassWorm revealed sophisticated evasion techniques:</p>
<ul>
<li>Heavy code obfuscation</li>
<li>Unicode characters to hide malicious logic</li>
<li>Infrastructure that retrieves command-and-control servers through blockchain transactions, making takedowns more difficult</li>
</ul>
<h2>Defensive Recommendations</h2>
<p>Organizations should:</p>
<ul>
<li>Treat extension dependencies with the same scrutiny as software packages</li>
<li>Monitor extension updates and audit dependency relationships</li>
<li>Restrict installation to trusted publishers where possible</li>
<li>Review Socket&#8217;s published indicators of compromise (IOCs) for malicious extension names and publisher accounts</li>
</ul>
<p>As of March 13, Open VSX has removed the majority of the transitively malicious extensions, though a few remain live as takedowns continue.</p>
<p><a href="https://www.infoworld.com/article/4145589/open-vsx-extensions-hijacked-glassworm-malware-spreads-via-dependency-abuse-2.html" target="_blank" rel="noopener"><strong>Source: InfoWorld</strong></a></p>
