---
title: "LangGraph Checkpointer Bugs Show AI Agent Memory Is Backend Attack Surface"
publishedAt: 2026-06-11T15:11:42
summary: "Check Point Research disclosed LangGraph checkpointer flaws that could turn user-controlled state-history filters into SQL injection, unsafe deserialization, and remote code execution. The lesson for SMBs and government contractors: AI agent memory is application infrastructure, "
category: "AI (General)"
categories:
  - "AI (General)"
  - "Cyber Security Blog"
  - "General CTI"
  - "Privacy & Security"
tags: []
heroImage: "/wp-content/uploads/2026/06/langgraph-checkpointer-rce-featured.png"
wpId: 2369
wpSlug: "langgraph-checkpointer-sqli-rce-ai-agent-memory-defense"
originalLink: "https://bulwarkblack.com/langgraph-checkpointer-sqli-rce-ai-agent-memory-defense"
draft: false
---

<p>AI agents are quickly moving from experiments into business workflows, and one of the quiet architectural shifts is persistence. Agents need memory: saved state, conversation history, workflow checkpoints, and tool execution context. That memory layer is useful, but it also creates a traditional backend attack surface.</p>
<p><a href="https://research.checkpoint.com/2026/from-sqli-to-rce-exploiting-langgraphs-checkpointer/" target="_blank" rel="noopener">Check Point Research reported</a> a chain of LangGraph checkpointer vulnerabilities that shows why this matters. In affected self-hosted deployments, a user-controlled filter passed into state-history retrieval could reach the checkpointer query layer. From there, SQL injection and unsafe MessagePack deserialization could be chained into remote code execution.</p>
<h2>What Check Point Found</h2>
<p>LangGraph is a popular open-source framework for building stateful AI agents. Its checkpointers store execution state so an agent can resume, inspect, or replay workflow steps. Check Point’s research focused on deployments using the SQLite and Redis checkpointers where an application exposes <code>get_state_history()</code> with a filter influenced by user input.</p>
<p>The reported issues included:</p>
<ul>
<li><strong>CVE-2025-67644:</strong> SQL injection in the SQLite checkpointer metadata filter path.</li>
<li><strong>CVE-2026-28277:</strong> unsafe MessagePack deserialization that could invoke attacker-controlled behavior.</li>
<li><strong>CVE-2026-27022:</strong> a similar injection class affecting the Redis checkpointer.</li>
</ul>
<p>The most important part is the chain. The injection issue could allow an attacker to shape query results so the application processes a fake checkpoint row. If that row contains malicious serialized data, the deserialization path can become code execution on the server running the agent workflow.</p>
<h2>Who Should Care</h2>
<p>This is not a generic “all LangGraph users are owned” situation. Check Point identified specific preconditions: self-hosted LangGraph deployments using vulnerable SQLite or Redis checkpointer packages, with application logic that allows user-controlled filters to reach state-history retrieval. LangChain’s managed cloud service was reported as not vulnerable because it uses a different backend architecture.</p>
<p>That said, the defensive lesson is broader than one framework. Many teams are wiring AI agents into internal portals, ticketing workflows, document systems, cloud automation, and customer-facing assistants. If those agents persist state, accept filters, load plugins, or deserialize objects, they need the same secure engineering treatment as any other web application.</p>
<h2>Defensive Takeaways</h2>
<ul>
<li><strong>Patch the affected packages.</strong> Check Point says fixes are available in <code>langgraph-checkpoint-sqlite 3.0.1+</code>, <code>langgraph 1.0.10+</code>, and <code>langgraph-checkpoint-redis 1.0.2+</code>. Confirm versions in production, development, CI images, notebooks, and container templates.</li>
<li><strong>Do not expose raw state-history filters to users.</strong> Treat agent memory queries like database queries. Use strict allowlists for filter keys and expected value types.</li>
<li><strong>Review deserialization paths.</strong> Any custom object loading, MessagePack extensions, pickle fallback, plugin loader, or tool-state restoration path should be threat modeled as code execution risk.</li>
<li><strong>Segment agent runtimes.</strong> Run agent services with minimal OS permissions, scoped cloud credentials, restricted outbound network access, and separate secrets from core business systems.</li>
<li><strong>Log memory access and checkpoint reads.</strong> Abnormal state-history queries, unusual metadata filters, and unexpected checkpoint restore behavior should be visible in application logs.</li>
<li><strong>Add AI dependencies to vulnerability management.</strong> LangChain, LangGraph, model toolkits, vector database clients, MCP servers, and agent plugins should be in the same patch workflow as web frameworks and cloud SDKs.</li>
</ul>
<h2>Bulwark Black Assessment</h2>
<p>This is a useful reminder that “AI security” is often plain application security wearing a new uniform. Prompt injection gets attention, but the agent stack still depends on databases, serializers, queues, plugins, and API endpoints. If an attacker can influence how an agent retrieves memory, the impact can move from data exposure to server compromise.</p>
<p>For SMBs and government contractors adopting AI tooling, the practical move is to inventory where agent frameworks are running, what data they can reach, what credentials they hold, and how their persistence layers are patched. AI pilots have a habit of becoming production infrastructure before anyone has assigned ownership. That gap is where these bugs become real incidents.</p>
<p><strong>Source:</strong> <a href="https://research.checkpoint.com/2026/from-sqli-to-rce-exploiting-langgraphs-checkpointer/" target="_blank" rel="noopener">Check Point Research — “From SQLi to RCE – Exploiting LangGraph’s Checkpointer”</a></p>
