---
title: "Physical Mail Phishing Targets Trezor and Ledger Users: Attackers Use QR Codes to Steal Recovery Phrases"
publishedAt: 2026-02-16T02:02:54
summary: "A new phishing campaign is targeting cryptocurrency hardware wallet users through an unusual vector: physical mail. Threat actors are sending fake letters impersonating Trezor and Ledger security teams, attempting to trick users into surrendering their wallet recovery phrases. Th"
category: "Social Engineering"
categories:
  - "Social Engineering"
tags:
  - "CVE-2026-1340"
  - "EPMM"
  - "Ivanti"
  - "Vulnerability"
heroImage: "/wp-content/uploads/2026/02/snail-mail-crypto-phishing.jpg"
wpId: 1879
wpSlug: "physical-mail-phishing-targets-trezor-and-ledger-users-attackers-use-qr-codes-to-steal-recovery-phrases"
originalLink: "https://bulwarkblack.com/physical-mail-phishing-targets-trezor-and-ledger-users-attackers-use-qr-codes-to-steal-recovery-phrases"
draft: false
---


<p>A new phishing campaign is targeting cryptocurrency hardware wallet users through an unusual vector: physical mail. Threat actors are sending fake letters impersonating Trezor and Ledger security teams, attempting to trick users into surrendering their wallet recovery phrases.</p>



<h2 class="wp-block-heading">The Snail Mail Attack Vector</h2>



<p>Unlike traditional email phishing, these attacks arrive as physical letters printed on official-looking letterhead. The letters claim recipients must complete a mandatory &#8220;Authentication Check&#8221; or &#8220;Transaction Check&#8221; to avoid losing access to their wallet functionality.</p>



<p>Each letter includes a QR code that, when scanned, directs victims to malicious websites designed to mimic official Trezor and Ledger setup pages. The phishing domains identified include:</p>



<ul class="wp-block-list">
<li>trezor.authentication-check[.]io</li>
<li>ledger.setuptransactioncheck[.]com</li>
</ul>



<h2 class="wp-block-heading">How the Attack Works</h2>



<p>The Trezor-themed letters warn users to complete the authentication process by a specific deadline, creating urgency. According to cybersecurity expert Dmitry Smilyanets who received and analyzed one of these letters, the message states:</p>



<blockquote class="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow"><p>&#8220;To avoid any disruption to your Trezor Suite access, please scan the QR code with your mobile device and follow the instructions on our website to enable Authentication Check.&#8221;</p></blockquote>



<p>When victims proceed through the phishing site, they&#8217;re eventually prompted to enter their 12, 20, or 24-word recovery phrase—the cryptographic keys that control access to their cryptocurrency wallets. This information is transmitted to attackers via a backend API, allowing them to import the victim&#8217;s wallet onto their own devices and drain all funds.</p>



<h2 class="wp-block-heading">Connection to Previous Data Breaches</h2>



<p>The targeting criteria for these letters remains unclear, but both Trezor and Ledger have suffered data breaches in recent years that exposed customer contact information, including physical addresses. This likely provides threat actors with the mailing lists needed to conduct this campaign.</p>



<p>Physical mail phishing targeting crypto users isn&#8217;t entirely new. In 2021, attackers mailed modified Ledger devices designed to steal recovery phrases during setup—a more sophisticated variant of the same attack concept.</p>



<h2 class="wp-block-heading">Critical Security Reminder</h2>



<p><strong>Legitimate hardware wallet manufacturers will NEVER ask users to enter their recovery phrase on a website, through email, or via any digital interface.</strong> Recovery phrases should only ever be entered directly on the hardware wallet device itself when restoring a wallet.</p>



<p>Anyone possessing your recovery phrase has complete control over your cryptocurrency assets. Treat these words with the same security as you would the keys to a safe containing your entire net worth.</p>



<h2 class="wp-block-heading">Defensive Recommendations</h2>



<ul class="wp-block-list">
<li>Never scan QR codes from unsolicited mail claiming to be from hardware wallet companies</li>
<li>Verify any security communications by visiting official websites directly (not via links or QR codes)</li>
<li>Contact Trezor or Ledger support through official channels if you receive suspicious mail</li>
<li>Never enter recovery phrases on computers, phones, or websites under any circumstances</li>
<li>Report phishing attempts to help protect others in the cryptocurrency community</li>
</ul>



<p><a href="https://www.bleepingcomputer.com/news/security/snail-mail-letters-target-trezor-and-ledger-users-in-crypto-theft-attacks/" target="_blank" rel="noopener">[Source: BleepingComputer]</a></p>
