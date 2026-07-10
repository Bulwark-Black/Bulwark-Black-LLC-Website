---
title: "FortiClient EMS Exploitation Turns Endpoint Management Into an Infostealer Delivery System"
publishedAt: 2026-06-02T01:05:30
summary: "Attackers are abusing CVE-2026-35616 in FortiClient EMS to push a credential stealer through trusted endpoint management workflows. Here is what defenders should check first."
category: "Cyber Security Blog"
categories:
  - "Cyber Security Blog"
  - "General CTI"
  - "Malware"
tags: []
heroImage: "/wp-content/uploads/2026/06/forticlient-ems-ekz-infostealer-featured.png"
wpId: 2333
wpSlug: "forticlient-ems-ekz-infostealer-delivery"
originalLink: "https://bulwarkblack.com/forticlient-ems-ekz-infostealer-delivery"
draft: false
---


<p>Endpoint management platforms are supposed to reduce operational risk. When they are exposed or weakly controlled, they can become one of the fastest ways for an attacker to reach every managed machine.</p>



<p>Arctic Wolf reported a May 2026 campaign where attackers exploited <strong>CVE-2026-35616</strong>, an improper access control vulnerability in FortiClient Enterprise Management Server (EMS), to modify managed configuration and deliver a credential stealer disguised as a Fortinet endpoint patch. The payload, tracked by Arctic Wolf as <strong>EKZ Infostealer</strong>, targets browser credentials, cookies, saved passwords, and autofill data across Chromium- and Firefox-family browsers.</p>



<p>Original reporting: <a href="https://arcticwolf.com/resources/blog-uk/forticlient-ems-exploited-cve-2026-35616-to-deliver-ekz-infostealer-disguised-as-a-fortinet-patch/" target="_blank" rel="noreferrer noopener">Arctic Wolf: FortiClient EMS exploited via CVE-2026-35616 to deliver EKZ Infostealer</a>.</p>



<h2 class="wp-block-heading">What happened</h2>



<p>FortiClient EMS centrally manages FortiClient endpoint configuration, including VPN-related profiles. According to Arctic Wolf, exploitation allowed unauthenticated actors to send privileged API requests to affected EMS deployments. After gaining that management-plane control, the attackers changed configuration in ways that caused managed endpoints to execute malicious PowerShell through FortiClient-managed VPN scripting workflows.</p>



<p>The observed chain is especially concerning because it did not require a separate intrusion path to each workstation. Once the management system was abused, the attacker could ride the same trusted administrative mechanism that organizations use for legitimate endpoint operations.</p>



<h2 class="wp-block-heading">Why this matters for SMBs and government contractors</h2>



<p>This is not just another edge-device vulnerability. It is a reminder that management infrastructure is tier-zero infrastructure. If endpoint management, VPN management, RMM, MDM, or firewall management systems are internet-exposed and insufficiently restricted, compromise can quickly turn into fleet-wide execution.</p>



<p>The credential-theft angle also raises the impact. Browser cookies and saved credentials can give attackers follow-on access to cloud portals, SaaS tools, contractor systems, internal apps, and email accounts. In some cases, stolen session cookies can reduce the value of MFA because the attacker is not replaying a password prompt; they are attempting to reuse an already-authenticated session.</p>



<h2 class="wp-block-heading">Defensive takeaways</h2>



<ul class="wp-block-list">
<li><strong>Patch FortiClient EMS immediately</strong> if your environment is running an affected version. Treat this as urgent where EMS is internet-accessible.</li>
<li><strong>Restrict EMS management access</strong> to trusted administrative networks or VPN-only paths. Do not leave management ports broadly reachable.</li>
<li><strong>Hunt EMS logs</strong> for certificate-authentication anomalies, unexpected accounts, unfamiliar logins, Tor/VPS source IPs, and Remote Access Profile changes.</li>
<li><strong>Review VPN profile scripting</strong> for unapproved <code>on_connect</code> or script directives, especially changes made shortly before endpoint PowerShell activity.</li>
<li><strong>Inspect endpoint process trees</strong> where <code>fortitray.exe</code> or <code>ipsec.exe</code> launches <code>cmd.exe</code>, which then launches encoded or hidden PowerShell.</li>
<li><strong>Look for credential staging</strong> such as suspicious executables or <code>log.txt</code> artifacts under <code>C:\ProgramData</code>, followed by raw-IP HTTP POST activity.</li>
<li><strong>Rotate credentials and revoke sessions</strong> if compromise is suspected. Password resets alone are not enough if active browser sessions or tokens were stolen.</li>
</ul>



<h2 class="wp-block-heading">Bulwark Black assessment</h2>



<p>The key lesson is control-plane hardening. Security teams often prioritize the endpoint agent and forget the server that tells every endpoint what to do. That server deserves the same treatment as identity infrastructure: limited exposure, strong administrative controls, logging, change monitoring, and rapid patching.</p>



<p>For smaller organizations and contractors, the practical move is to make a quick inventory of management systems that can execute code across endpoints. If a platform can push scripts, install software, change VPN behavior, or alter endpoint policy, it should be on the short list for access restriction, backup review, and alerting.</p>



<p>Attackers are not only targeting individual laptops anymore. They are targeting the tools administrators use to manage those laptops. Defend the control plane first.</p>

