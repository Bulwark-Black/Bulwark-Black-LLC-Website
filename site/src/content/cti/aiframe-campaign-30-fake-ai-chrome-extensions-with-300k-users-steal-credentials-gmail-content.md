---
title: "AiFrame Campaign: 30 Fake AI Chrome Extensions with 300K Users Steal Credentials, Gmail Content"
publishedAt: 2026-02-12T21:03:21
summary: "Researchers at browser security platform LayerX have uncovered a coordinated malware campaign dubbed “AiFrame” involving 30 malicious Chrome extensions installed by more than 300,000 users. The extensions masquerade as AI assistants while secretly stealing credentials, email cont"
category: "Malware"
categories:
  - "Malware"
tags: []
heroImage: "/wp-content/uploads/2026/02/fake-ai-extensions-malware-2026-02-12.jpg"
wpId: 1859
wpSlug: "aiframe-campaign-30-fake-ai-chrome-extensions-with-300k-users-steal-credentials-gmail-content"
originalLink: "https://bulwarkblack.com/aiframe-campaign-30-fake-ai-chrome-extensions-with-300k-users-steal-credentials-gmail-content"
draft: false
---

<p>Researchers at browser security platform LayerX have uncovered a coordinated malware campaign dubbed <strong>&#8220;AiFrame&#8221;</strong> involving 30 malicious Chrome extensions installed by more than <strong>300,000 users</strong>. The extensions masquerade as AI assistants while secretly stealing credentials, email content, and browsing information.</p>
<h2>Campaign Overview</h2>
<p>All analyzed extensions share the same internal structure, JavaScript logic, permissions, and communicate with infrastructure under a single domain: <code>tapnetic[.]pro</code>. While some extensions have been removed from the Chrome Web Store, many remain available with substantial user counts.</p>
<h3>Extensions Still Active on Chrome Web Store</h3>
<ul>
<li><strong>AI Sidebar</strong> (gghdfkafnhfpaooiolhncejnlgglhkhe) – 70,000 users</li>
<li><strong>AI Assistant</strong> (nlhpidbjmmffhoogcennoiopekbiglbp) – 60,000 users</li>
<li><strong>ChatGPT Translate</strong> (acaeafediijmccnjlokgcdiojiljfpbe) – 30,000 users</li>
<li><strong>AI GPT</strong> (kblengdlefjpjkekanpoidgoghdngdgl) – 20,000 users</li>
<li><strong>ChatGPT</strong> (llojfncgbabajmdglnkbhmiebiinohek) – 20,000 users</li>
<li><strong>AI Sidebar</strong> (djhjckkfgancelbmgcamjimgphaphjdl) – 10,000 users</li>
<li><strong>Google Gemini</strong> (fdlagfnfaheppaigholhoojabfaapnhb) – 10,000 users</li>
</ul>
<p>The most popular extension was <strong>Gemini AI Sidebar</strong> with 80,000 users before its removal.</p>
<h2>Technical Analysis</h2>
<p>The malicious browser add-ons do not implement AI functionality locally. Instead, they deliver the promised features by rendering a full-screen iframe that loads content from a remote domain. This architecture allows publishers to change extension logic at any time without pushing an update—effectively bypassing review processes.</p>
<p>In the background, the extensions extract page content from websites the user visits, including sensitive authentication pages, using <strong>Mozilla&#8217;s Readability library</strong>.</p>
<h3>Gmail Targeting</h3>
<p>A subset of <strong>15 extensions</strong> specifically targets Gmail data using a dedicated content script that:</p>
<ul>
<li>Runs at <code>document_start</code> on <code>mail.google.com</code></li>
<li>Injects UI elements</li>
<li>Reads visible email content directly from the DOM</li>
<li>Extracts email thread text via <code>.textContent</code></li>
<li>Captures email drafts</li>
</ul>
<p>According to LayerX: <em>&#8220;When Gmail-related features such as AI-assisted replies or summaries are invoked, the extracted email content is passed into the extension&#8217;s logic and transmitted to third-party backend infrastructure controlled by the extension operator. As a result, email message text and related contextual data may be sent off-device, outside of Gmail&#8217;s security boundary, to remote servers.&#8221;</em></p>
<h3>Voice Recognition Capabilities</h3>
<p>The extensions also feature a remotely triggered voice recognition and transcript generation mechanism using the <strong>Web Speech API</strong>. Depending on granted permissions, the extensions may siphon conversations from the victim&#8217;s environment.</p>
<h2>Indicators of Compromise</h2>
<p><strong>C2 Domain:</strong> <code>tapnetic[.]pro</code></p>
<p>Users should check LayerX&#8217;s full list of malicious extension IDs and, if compromise is confirmed, <strong>reset passwords for all accounts</strong> immediately.</p>
<h2>Why This Matters</h2>
<p>This campaign highlights the growing danger of malicious browser extensions leveraging AI branding to attract victims. With AI tools gaining mainstream adoption, threat actors are capitalizing on user interest in ChatGPT, Gemini, and similar technologies to distribute credential-stealing malware at scale.</p>
<p>Organizations should implement browser extension whitelists and educate users about the risks of installing unverified extensions, even from official stores.</p>
<p><strong>Source:</strong> <a href="https://www.bleepingcomputer.com/news/security/fake-ai-chrome-extensions-with-300k-users-steal-credentials-emails/" target="_blank" rel="noopener">BleepingComputer</a></p>
