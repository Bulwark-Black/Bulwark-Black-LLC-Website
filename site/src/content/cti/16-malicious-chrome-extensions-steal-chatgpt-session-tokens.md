---
title: "16 Malicious Chrome Extensions Steal ChatGPT Session Tokens"
publishedAt: 2026-01-29T02:48:27
summary: "Security researchers discovered 16 malicious browser extensions claiming to enhance ChatGPT that actually steal session tokens, giving attackers full access to accounts and conversation history."
category: "Business"
categories:
  - "Business"
tags: []
wpId: 1742
wpSlug: "16-malicious-chrome-extensions-steal-chatgpt-session-tokens"
originalLink: "https://bulwarkblack.com/16-malicious-chrome-extensions-steal-chatgpt-session-tokens"
draft: false
---


<figure class="wp-block-image size-full"><img loading="lazy" decoding="async" width="1024" height="1024" src="/wp-content/uploads/2026/01/bluesynack_16_Malicious_Chrome_Extensions_Steal_ChatGPT_Session_68b2d198-e8fc-47ba-a20d-676b235b5e56.png" alt="" class="wp-image-1771" srcset="/wp-content/uploads/2026/01/bluesynack_16_Malicious_Chrome_Extensions_Steal_ChatGPT_Session_68b2d198-e8fc-47ba-a20d-676b235b5e56.png 1024w, /wp-content/uploads/2026/01/bluesynack_16_Malicious_Chrome_Extensions_Steal_ChatGPT_Session_68b2d198-e8fc-47ba-a20d-676b235b5e56-300x300.png 300w, /wp-content/uploads/2026/01/bluesynack_16_Malicious_Chrome_Extensions_Steal_ChatGPT_Session_68b2d198-e8fc-47ba-a20d-676b235b5e56-150x150.png 150w, /wp-content/uploads/2026/01/bluesynack_16_Malicious_Chrome_Extensions_Steal_ChatGPT_Session_68b2d198-e8fc-47ba-a20d-676b235b5e56-768x768.png 768w" sizes="auto, (max-width: 1024px) 100vw, 1024px" /></figure>


<p><strong>Source:</strong> <a href="https://www.malwarebytes.com/blog/news/2026/01/malicious-chrome-extensions-can-spy-on-your-chatgpt-chats">Malwarebytes</a></p>
<p>Security researchers have discovered <strong>16 malicious browser extensions</strong> for Google Chrome and Microsoft Edge that steal ChatGPT session tokens, giving attackers full access to victim accounts including conversation history and metadata.</p>
<h2>The Threat</h2>
<p>The malicious extensions (15 for Chrome, 1 for Edge) claim to &#8220;improve and optimize&#8221; ChatGPT but instead siphon users&#8217; session tokens to attacker-controlled backends. All 16 extensions share the same publisher name: <strong>&#8220;ChatGPT Mods&#8221;</strong>.</p>
<p>Despite benign descriptions and in some cases a &#8220;featured&#8221; badge, these extensions are designed to hijack ChatGPT identities by stealing session authentication tokens.</p>
<h2>What Attackers Get</h2>
<p>With stolen session tokens, attackers gain:</p>
<ul>
<li>Full access to the victim&#8217;s ChatGPT account</li>
<li>Complete conversation history</li>
<li>Account metadata</li>
<li>Ability to maintain persistent access</li>
</ul>
<p>The extensions also collect data about themselves (version, language settings), usage patterns, and special keys &#8211; allowing attackers to build behavioral profiles of victims over time.</p>
<h2>Malicious Extensions to Remove</h2>
<p>If you have any of these installed, remove them immediately:</p>
<ul>
<li>ChatGPT bulk delete, Chat manager</li>
<li>ChatGPT export, Markdown, JSON, images</li>
<li>ChatGPT folder, voice download, prompt manager</li>
<li>ChatGPT message navigator, history scroller</li>
<li>ChatGPT Prompt Manager, Folder, Library</li>
<li>ChatGPT pin chat, bookmark</li>
<li>ChatGPT prompt optimization</li>
<li>ChatGPT Token counter</li>
<li>ChatGPT model switch</li>
<li>And several more with similar names</li>
</ul>
<h2>The Bigger Picture</h2>
<p>This campaign reflects a broader trend of malicious actors targeting AI-powered browser extensions. As adoption of AI productivity tools grows, attackers are increasingly impersonating known brands to gain users&#8217; trust.</p>
<h2>Recommendations</h2>
<ul>
<li>Only install extensions from trusted, verified publishers</li>
<li>Review extension permissions carefully before installing</li>
<li>Regularly audit installed extensions</li>
<li>If compromised, rotate your ChatGPT session by logging out of all devices</li>
<li>Consider using ChatGPT&#8217;s official features rather than third-party extensions</li>
</ul>
<p>Microsoft and Google have been notified, but already-installed extensions may remain active until manually removed.</p>