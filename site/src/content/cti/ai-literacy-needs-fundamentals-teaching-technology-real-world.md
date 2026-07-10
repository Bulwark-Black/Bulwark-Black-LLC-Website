---
title: "AI Literacy Needs Fundamentals: Teaching Technology in the Real World"
publishedAt: 2026-05-17T17:25:56
summary: "Albert LaScola reflects on teaching database systems, governance, risk management, and AI literacy through a fundamentals-first approach shaped by Navy operations, security work, Bulwark Black, and Rural Tech and Support."
category: "AI (General)"
categories:
  - "AI (General)"
  - "Cyber Security Blog"
tags: []
heroImage: "/wp-content/uploads/2026/05/ai-fundamentals-rural-tech-featured.png"
wpId: 2262
wpSlug: "ai-literacy-needs-fundamentals-teaching-technology-real-world"
originalLink: "https://bulwarkblack.com/ai-literacy-needs-fundamentals-teaching-technology-real-world"
draft: false
---

<p><em>By Albert LaScola</em></p>
<p>Teaching part-time at Western Washington University in Poulsbo, Washington, as a non-tenure-track course instructor has been a good and useful challenge. My courses cover database systems, information governance, and risk management, with an ethical hacking elective coming in Winter 2026.</p>
<p>Teaching keeps me honest. It forces me to explain complex topics and systems to people learning them for the first time. Every concept I introduce has to survive questions from students. That pressure, being able to defend an answer, explain a system, and respond clearly when someone challenges an assumption, keeps me sharp. It has made me a better engineer outside the classroom.</p>
<p>Coming into this role has been different because most of my background has been operational. I served a little over ten years in the Navy as a submarine sonar technician and senior mission analyst. That experience ingrained in me that fundamentals are not optional. Under pressure, fundamentals are often the only things that hold true.</p>
<p>After the Navy, I spent two years at VMware as a Detection and Response Analyst in the Security Operations Center. That gave me exposure to enterprise operations and security across FedRAMP, CMMC, DFARS compliance work, incident response under pressure, and the fine line between written policy and operational governance.</p>
<p>Today I run Bulwark Black LLC, a service-disabled veteran-owned small business that also operates locally as Rural Tech and Support. That combination of teaching, security operations, and small-business execution shapes how I think about technology education.</p>
<h2>What Students Should Leave With</h2>
<p>So what do I want students to leave with when they attend class?</p>
<p>Very simply, I want them to understand how the internet works. I want them to understand how different protocols stack together to produce the seamless experience users take for granted. When I teach databases, I want students to understand how databases actually apply to applications and the use of those applications across the internet. When I teach governance and risk management, I want the same practical connection.</p>
<p>A student who can explain why a query is slow, why a record will not normalize cleanly, or why a control framework exists will be able to adapt to new tooling. The fundamentals will carry them across vendors, products, and hype cycles.</p>
<h2>AI Is No Longer Optional</h2>
<p>The biggest shift I want to implement in my teaching is that artificial intelligence is no longer optional. It is becoming a necessity.</p>
<p>If a technology professional is not using AI, or does not plan on implementing and using AI, they are getting left behind regardless of how they feel about it. The current job market makes that clear. The tech layoffs of the last two years have been brutal, and the pace has only intensified as new AI systems and coding agents continue to reshape how technical work gets done.</p>
<p>Look at modern job postings. Many of them are already screening for AI literacy. The market wants people who can integrate agentic workflows, evaluate model output critically, correct it, and architect systems responsibly as a single operator. Students need to walk into interviews with that kind of fluency. Hesitancy to integrate and onboard AI puts students behind the curve in the AI revolution.</p>
<p>I treat AI as a tool that amplifies my knowledge of the fundamentals. In turn, it accelerates my own work. My research is faster. I can feed AI my ideas and have it improve my workflow, identify weak points, or point out things I missed before they cause more pain later.</p>
<p>I like to describe AI to students through Ender Wiggin from <em>Ender’s Game</em>. Once you understand the basics, identify real pain points, and can think clearly about architecture and future failure modes, AI lets you act as a commander rather than a foot soldier. You do not need to do every keystroke. You need to know what good looks like, what it feels like, and what to ask for.</p>
<p>Again, that only works if you understand the fundamentals.</p>
<h2>The ShopFlow Database Project</h2>
<p>In the database class, I anchor the technical material in problems my own products have forced me to solve. I created the ShopFlow course project for the databases class to put the AI-plus-fundamentals thesis on rails.</p>
<p>Students provision a MySQL 8.0 instance on Aiven, connect from Google Colab, model a seven-table e-commerce schema, identify every foreign key relationship and its cardinality, produce a full entity relationship diagram, clean dirty data, write ten business analytics queries, build an interactive Plotly dashboard, implement user access controls with <code>GRANT</code> statements, and host the result on a live website through Netlify from a GitHub repository.</p>
<p>The project exercises joins, window functions, cohort analysis, time-series analysis, access control, documentation, and deployment. It is not just a worksheet. It is a small production-style system.</p>
<p>In this project, AI use is required, not banned, and the integrity framework around it is explicit. Students must cite their AI conversations and explain how they arrived at their solution through AI. AI can generate every line of code in the project, but students have to understand and defend each line. The grading rubric is structured so that a student who cannot explain their own queries will fail the analytics section regardless of whether the SQL runs.</p>
<p>The course-level AI reflection essay is pass/fail, has a 500-word minimum, and cannot itself be AI-generated. Students have to write about which prompts worked, which did not, what AI could not solve for them, where it saved time, and where it cost time.</p>
<p>An optional production implementation plan section pushes students to extend the database into a realistic web application with API design, caching, JWT authentication, GDPR considerations, and a scaling strategy.</p>
<p>That is the Ender model in practice. A single student can now ship work that would have been a small team project five years ago, but only if they understand the architecture well enough to direct it.</p>
<h2>Rural Tech and Support</h2>
<p>I am also operating Rural Tech and Support out of Chimacum, Washington, which extends the same practitioner philosophy into communities that deserve the same caliber of technical help that urban markets take for granted.</p>
<p>The business covers four service lines: personal IT and security, web and AI, automation workflows, and business IT and cybersecurity for small offices, clinics, and field teams.</p>
<p>The framing I use on that site is the same one I use in class: most problems are not fancy. They are missed fundamentals. A forgotten password. A router that has not been touched in five years. A small database with no governance. A manual workflow that should have been automated years ago.</p>
<p>Rural users still need governance. They still need solid databases behind the small applications they depend on. They increasingly want to leverage AI without falling for vendor hype.</p>
<p>Running that business in parallel with teaching keeps both sides honest. The classroom forces me to explain what I do. The clients force me to make sure what I explain actually works.</p>
<h2>Keeping the Classroom Close to the Field</h2>
<p>My goal as an instructor is to keep the gap between the field and the classroom as small as I can. I want my students testing new tools the same week they ship, building things that actually run, and graduating with the practical AI literacy that gets them hired.</p>
<p>Industry is moving fast. My job is to make sure the students who come through my classroom move with it.</p>
<p>As technology professionals, we should be learning new technology as it emerges. AI is no different. The people who understand the fundamentals and learn how to command the new tools will be the ones who keep building while everyone else is still arguing about whether the shift is real.</p>
