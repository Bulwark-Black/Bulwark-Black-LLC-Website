---
title: "ADFS Signing Keys Show Why Federation Servers Are Tier-Zero Identity Infrastructure"
publishedAt: 2026-07-07T20:07:20
summary: "Mandiant shows how ADFS certificate drift and Machine DPAPI can expose active signing keys. Here is what SMBs and government contractors should do now."
category: "Cyber Security Blog"
categories:
  - "Cyber Security Blog"
  - "General CTI"
  - "Privacy & Security"
tags: []
heroImage: "/wp-content/uploads/2026/07/adfs-machine-dpapi-golden-saml-featured.png"
wpId: 2453
wpSlug: "adfs-machine-dpapi-golden-saml-federation-defense"
originalLink: "https://bulwarkblack.com/adfs-machine-dpapi-golden-saml-federation-defense"
draft: false
---

<p>Google Cloud/Mandiant published a sharp reminder that federation infrastructure is not “just another server.” In ADFS environments, the token-signing private key is the trust anchor that lets users authenticate into Microsoft 365, Entra ID, and other SAML-connected SaaS applications. If an attacker can recover that key, they may be able to forge valid SAML assertions — the classic “Golden SAML” problem — and bypass many of the controls defenders normally count on, including MFA and conditional access.</p>
<p>The latest research highlights a specific operational risk: ADFS environments that manually rotate certificates with <code>AutoCertificateRollover</code> disabled can drift out of alignment. The Windows Internal Database may still hold stale certificate metadata while the active signing key lives in the machine-scoped Windows cryptographic store. That matters because a sufficiently privileged attacker on the ADFS host may not need to dump LSASS or interact directly with the live ADFS service process to recover signing material. The risk moves from “credential theft” into “identity infrastructure compromise.”</p>
<p><strong>Source:</strong> <a href="https://cloud.google.com/blog/topics/threat-intelligence/recovering-active-adfs-signing-keys-machine-dpapi/" target="_blank" rel="noopener">Google Cloud / Mandiant — Recovering Active ADFS Signing Keys via Machine DPAPI</a></p>
<h2>What happened</h2>
<p>Mandiant describes a red-team finding where the expected ADFS database/DKM extraction path recovered a certificate, but that certificate was no longer the active signing key. The environment had manually rotated certificates and disabled automatic rollover. ADFS continued operating because the active key was available through the local machine certificate store, while the database record had become a stale “ghost” entry.</p>
<p>The practical consequence is ugly: SYSTEM-level compromise of an ADFS server can become compromise of the federation signing key. Once the signing key is exposed, an attacker may be able to mint trusted SAML assertions for privileged identities and access relying-party applications as though authentication legitimately occurred.</p>
<h2>Why this matters for SMBs and government contractors</h2>
<p>Many smaller enterprises and contractors still run ADFS because it was deployed years ago for Microsoft 365 federation, legacy SSO, VPN portals, business applications, or partner access. Those servers often sit quietly in the background until something breaks. That is the danger.</p>
<p>For a government contractor, federation servers should be treated as <strong>Tier 0 identity infrastructure</strong>, in the same class as domain controllers, certificate authorities, privileged access systems, and cloud identity administrators. If an attacker compromises ADFS signing material, the blast radius can extend across email, SharePoint, Teams, finance systems, customer portals, and any third-party SaaS relying on the same trust.</p>
<h2>Defensive takeaways</h2>
<ul>
<li><strong>Inventory ADFS and all relying-party trusts.</strong> Know exactly which SaaS and internal apps trust ADFS-issued assertions.</li>
<li><strong>Validate certificate state, not just certificate dates.</strong> Compare ADFS configuration, the LocalMachine certificate store, and federation metadata. If manual rotation is used, confirm the configuration was updated with the proper ADFS tooling.</li>
<li><strong>Investigate ADFS Event ID 385.</strong> Treat certificate validity or drift warnings as identity-risk indicators, not routine noise.</li>
<li><strong>Harden ADFS like a domain controller.</strong> Restrict admin paths, require privileged access workstations, remove broad server-admin access, and monitor privileged logons to federation hosts.</li>
<li><strong>Audit machine key access.</strong> Where feasible, configure object access auditing on machine key and SYSTEM DPAPI paths and correlate that telemetry with privileged process activity.</li>
<li><strong>Correlate Entra ID sign-ins with ADFS issuance logs.</strong> A forged assertion can look like a normal federated sign-in in cloud logs. The signal often appears when cloud sign-in records do not line up with expected ADFS-side authentication and issuance events.</li>
<li><strong>Plan migration or key protection.</strong> If ADFS must remain, consider HSM-backed signing keys. If it does not need to remain, migration toward modern cloud-native federation/OIDC patterns can remove this specific attack path.</li>
</ul>
<h2>Bulwark Black assessment</h2>
<p>This is not a mass-exploitation story. It is more important than that. It is a reminder that identity trust anchors are the crown jewels, and they often fail through drift, manual process, and incomplete monitoring rather than a flashy zero-day.</p>
<p>The key question for defenders is simple: if someone gets SYSTEM on your ADFS server today, do you have the telemetry, isolation, and recovery plan to treat every federated application as potentially compromised? If the answer is unclear, ADFS belongs in the next identity-security review, not the next annual audit.</p>
