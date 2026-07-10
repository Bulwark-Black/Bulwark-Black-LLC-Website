---
title: "Prompt Injection Just Became an RCE Problem for AI Agents"
publishedAt: 2026-05-08T15:10:01
summary: "Microsoft disclosed Semantic Kernel vulnerabilities showing how prompt injection can cross into code execution when AI agents are connected to unsafe tools. Here is what defenders should review now."
category: "AI (General)"
categories:
  - "AI (General)"
  - "Cyber Security Blog"
  - "General CTI"
tags: []
heroImage: "/wp-content/uploads/2026/05/ai-agent-framework-rce-featured-scaled.png"
wpId: 2228
wpSlug: "prompt-injection-rce-ai-agent-frameworks"
originalLink: "https://bulwarkblack.com/prompt-injection-rce-ai-agent-frameworks"
draft: false
---

<p>Microsoft’s latest AI security research is a useful warning for any organization experimenting with tool-connected agents: prompt injection is no longer just a chatbot problem. Once an AI agent can call plugins, run code, retrieve files, or move data between systems, a hostile prompt can become a path to real execution if the framework trusts model-controlled parameters.</p>
<p>The research focuses on two vulnerabilities Microsoft found and patched in Semantic Kernel: <strong>CVE-2026-26030</strong>, a Python issue where model-controlled search parameters could reach an unsafe evaluation path in an in-memory vector store filter, and <strong>CVE-2026-25592</strong>, a .NET issue where an exposed file-transfer function could let an agent write files to unsafe host paths. In both cases, the important lesson is bigger than one framework: the model was not “hacked” in the traditional sense. The surrounding agent architecture gave natural-language input a route into dangerous operations.</p>
<h2>Why this matters</h2>
<p>For SMBs, startups, and government contractors building AI-assisted workflows, agent frameworks are becoming the new glue layer between internal data, cloud APIs, ticketing systems, repositories, scripts, and business processes. That convenience creates a new attack surface. If the agent can touch a file path, shell command, database query, ticketing action, cloud account, or identity provider, defenders should assume an attacker will eventually try to influence those tool calls through a prompt injection path.</p>
<p>This is especially relevant for organizations adding AI features quickly: internal copilots, SOC assistants, proposal-writing agents, RAG applications, customer-support agents, and workflow automation bots often start as “low risk” experiments. But when those experiments get connected to production data or host-level tooling, prompt injection can cross from content manipulation into execution, data theft, or persistence.</p>
<h2>What Microsoft reported</h2>
<p>Microsoft’s post describes two Semantic Kernel vulnerability classes:</p>
<ul>
<li><strong>Prompt-to-code execution through unsafe filtering.</strong> In the vulnerable Python path, an attacker-controlled value could influence a filter expression used by an in-memory vector store-backed search plugin. Under the right conditions, that could lead to remote code execution on the system hosting the agent.</li>
<li><strong>Sandbox boundary failure through exposed file-transfer tools.</strong> In the vulnerable .NET path, a helper function intended for programmatic file movement was exposed as a callable AI tool. That gave the model influence over host-side file paths, creating an arbitrary file write primitive.</li>
</ul>
<p>Microsoft says the issues have been patched. Semantic Kernel Python users should upgrade to <strong>semantic-kernel 1.39.4 or later</strong> for CVE-2026-26030. Semantic Kernel .NET SDK users should upgrade to <strong>1.71.0 or later</strong> for CVE-2026-25592.</p>
<h2>Defensive takeaways</h2>
<ul>
<li><strong>Inventory AI agents like applications, not experiments.</strong> Track which agents exist, what framework and version they use, what tools they can call, what secrets they can access, and which hosts or cloud roles they run under.</li>
<li><strong>Treat every model-controlled tool parameter as untrusted input.</strong> Validate file paths, command arguments, URLs, search filters, database selectors, and workflow IDs the same way you would validate web application input.</li>
<li><strong>Use allowlists over blocklists.</strong> Blocklists fail when attackers find alternate syntax or object traversal paths. Prefer strict schemas, canonicalized paths, constrained enums, safe AST node allowlists, and narrowly scoped function exposure.</li>
<li><strong>Do not expose helper functions to the model by accident.</strong> Review annotations/decorators/metadata that publish functions as agent tools. If a function moves files, executes code, reads secrets, sends messages, or changes state, it deserves a second review.</li>
<li><strong>Separate agent runtime identity from human/admin identity.</strong> Agents should run with least-privilege service accounts, scoped tokens, and segmented access. A compromised agent host should not become a domain-wide incident.</li>
<li><strong>Log at both layers.</strong> Keep prompt/tool-call telemetry and endpoint telemetry. If an agent process suddenly spawns a shell, writes to startup folders, reads SSH keys, or makes unusual outbound connections, EDR should light up.</li>
</ul>
<h2>Bulwark Black assessment</h2>
<p>The practical shift is this: <strong>agent tools define blast radius</strong>. The model is not the security boundary. The framework, tool schema, runtime identity, host isolation, and monitoring controls are the boundary.</p>
<p>Organizations adopting agentic AI should review every connected tool and ask: “If a malicious prompt controlled this parameter, what could it do?” If the answer includes command execution, arbitrary file access, cloud changes, data export, email sending, ticket closure, or identity changes, that tool needs stronger validation, isolation, and audit coverage before it belongs in production.</p>
<p>Original source: <a href="https://www.microsoft.com/en-us/security/blog/2026/05/07/prompts-become-shells-rce-vulnerabilities-ai-agent-frameworks/">Microsoft Security Blog — “When prompts become shells: RCE vulnerabilities in AI agent frameworks”</a>.</p>
