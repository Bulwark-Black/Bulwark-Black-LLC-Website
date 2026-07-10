---
title: "F5-to-Confluence Intrusion Shows Edge Devices Are Identity Attack Paths"
publishedAt: 2026-05-22T20:04:38
summary: "Microsoft analyzed an intrusion where an F5 BIG-IP edge appliance led to Linux access, Confluence compromise, credential theft, and identity relay attempts. Here is what SMBs and government contractors should tighten first."
category: "Cyber Security Blog"
categories:
  - "Cyber Security Blog"
  - "General CTI"
  - "Privacy & Security"
tags: []
heroImage: "/wp-content/uploads/2026/05/f5-confluence-hybrid-attack-path-featured.png"
wpId: 2295
wpSlug: "f5-confluence-edge-identity-attack-path"
originalLink: "https://bulwarkblack.com/f5-confluence-edge-identity-attack-path"
draft: false
---

<p>Microsoft’s latest incident write-up is a clean example of a pattern defenders keep seeing: the breach does not stop at the edge device. The edge device becomes the first trusted hop into the rest of the environment.</p>
<p>In the case Microsoft analyzed, an internet-facing F5 BIG-IP appliance was used as the launch point for SSH access into a Linux host. From there, the actor performed internal reconnaissance, scanned web services, found a vulnerable Atlassian Confluence server, and used credentials from that application to attempt relay-style attacks against Active Directory.</p>
<p>For small and midsize businesses, managed service providers, and government contractors, the lesson is blunt: firewall, VPN, load balancer, Linux, SaaS, and identity telemetry all belong in the same defensive picture. Treating them as separate silos gives attackers room to move.</p>
<p><strong>Original source:</strong> <a href="https://www.microsoft.com/en-us/security/blog/2026/05/22/from-edge-appliance-to-enterprise-compromise-multi-stage-linux-intrusion-via-f5-and-confluence/" target="_blank" rel="noopener">Microsoft Security Blog — From edge appliance to enterprise compromise: Multi-stage Linux intrusion via F5 and Confluence</a>.</p>
<h2>What happened</h2>
<p>The intrusion Microsoft described started with an F5 BIG-IP load balancer image that was past end of life. The attacker used the trusted position of that appliance to access a Linux server through SSH with a privileged account. Once inside, the actor ran broad reconnaissance against internal subnets and web services, using common tooling such as Nmap-style scanning and HTTP service discovery.</p>
<p>The important part is not just the F5 appliance. It is the chain:</p>
<ul>
<li>An exposed edge appliance became the initial trust bridge.</li>
<li>A Linux host became the staging and discovery platform.</li>
<li>An internal Confluence server became the next compromise target.</li>
<li>Application credentials became material for Windows identity attacks.</li>
</ul>
<p>That is exactly how modern hybrid intrusions work. Attackers do not need every system to be internet-facing. They only need one entry point plus enough internal trust to keep walking.</p>
<h2>Why this matters for SMBs and government contractors</h2>
<p>Many smaller organizations have the same structural risk as large enterprises, just with fewer people watching it. A contractor might have a firewall or VPN managed by one vendor, Linux workloads managed by a technical admin, Confluence or Jira managed by an app owner, and Microsoft 365 or Active Directory managed somewhere else entirely.</p>
<p>Attackers benefit from that split ownership. If no one is responsible for the full attack path, the weak link can sit unnoticed until it becomes a pivot point.</p>
<p>This is especially relevant for organizations supporting government work because edge devices and collaboration platforms often touch sensitive operational data, customer portals, file stores, build notes, contracts, and internal credentials. A “network appliance issue” can quickly become an identity issue, a data-access issue, and a compliance issue.</p>
<h2>Defensive takeaways</h2>
<h3>1. Treat edge appliances like Tier-0 infrastructure</h3>
<p>Firewalls, VPNs, load balancers, remote access gateways, and identity proxies should not be tracked like ordinary network gear. Maintain an inventory of every internet-facing appliance, owner, version, management interface, exposure path, and end-of-support date.</p>
<p>If the appliance is unsupported, make replacement or isolation a security priority. If patching is delayed, restrict management access, enforce source-IP controls, increase logging, and monitor administrative logins aggressively.</p>
<h3>2. Monitor Linux servers as first-class enterprise assets</h3>
<p>Linux systems are often under-monitored compared with Windows endpoints, but attackers use them heavily for staging, scanning, tunneling, credential access, and lateral movement. At minimum, defenders should be able to answer:</p>
<ul>
<li>Which accounts can SSH into each Linux server?</li>
<li>Which accounts have sudo rights?</li>
<li>Are new binaries appearing in <code>/tmp</code>, <code>/dev/shm</code>, or application directories?</li>
<li>Are servers suddenly running scans against internal networks?</li>
<li>Are outbound connections going to infrastructure the server has never contacted before?</li>
</ul>
<h3>3. Patch internal applications with external urgency</h3>
<p>“It is only internal” is not a reliable security control. Once an attacker lands on any internal host, internal-only apps become reachable. Collaboration platforms such as Confluence, Jira, GitLab, Jenkins, wikis, documentation portals, and ticketing systems also tend to contain credentials, API keys, diagrams, and operational details.</p>
<p>Patch critical internal applications quickly, remove stale plugins, review service-account permissions, and watch for suspicious child processes spawned by application runtimes.</p>
<h3>4. Reduce relay attack exposure</h3>
<p>The Microsoft case included attempts to use stolen application credentials in relay-style attacks against Windows infrastructure. Practical controls include reducing NTLM dependence, enforcing SMB signing, enabling LDAP signing and channel binding, using Extended Protection for Authentication where applicable, and separating privileged admin accounts from application service accounts.</p>
<h3>5. Build attack-path visibility, not just alert lists</h3>
<p>A single alert saying “SSH login succeeded” or “scanner detected” may not look critical by itself. The risk becomes clear when the events are connected: exposed F5 appliance, privileged SSH, Linux scanning, Confluence credential access, and domain authentication attempts.</p>
<p>That is the real defensive requirement: connect network, endpoint, application, and identity telemetry into one timeline.</p>
<h2>Bulwark Black assessment</h2>
<p>This incident is a reminder that perimeter security is no longer just about blocking inbound traffic. Edge infrastructure now carries identity, certificates, administrative access, and trusted routes into hybrid environments. When it is outdated or lightly monitored, it becomes a launchpad.</p>
<p>For most SMBs and government contractors, the highest-value move is not buying another dashboard. It is building a simple attack-path review:</p>
<ul>
<li>List every internet-facing appliance and remote-access path.</li>
<li>Identify what each appliance can reach internally.</li>
<li>Review privileged credentials stored on Linux and collaboration platforms.</li>
<li>Confirm that internal apps are patched, logged, and backed by least-privilege service accounts.</li>
<li>Test whether identity relay protections are actually enforced.</li>
</ul>
<p>If one exposed device can reach a privileged Linux host, that Linux host can reach Confluence, and Confluence holds reusable domain credentials, you do not have separate risks. You have one attack path.</p>
<p>That is where defenders should focus first.</p>
