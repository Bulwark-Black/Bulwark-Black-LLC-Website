---
title: "Why I require AI in my database class"
publishedAt: 2026-05-17
summary: "Notes from teaching database systems and information governance at Western Washington University. AI is required in my classroom, not banned. Here is the integrity framework, the course project, and the philosophy behind both."
tags: ["teaching", "ai", "education", "databases", "career"]
draft: false
---

I teach part-time as a non-tenure-track course instructor at Western Washington University (WWU) in Poulsbo, Washington. My courses cover database systems and information governance and risk management, and I am picking up the ethical hacking elective in winter 2026. Teaching keeps me honest. It forces me to explain complex topics and systems to people learning them for the first time, and every concept I introduce comes with a rebuttal from the students. The pressure of having to defend my answers in real time keeps me sharp, and it has made me a better engineer outside the classroom too.

## How I got here

Coming into this role has been different, because I have been in an entirely operational role until recently. I served a little over ten years in the U.S. Navy as a submarine sonar technician and senior mission systems analyst. That work ingrained one lesson hard: fundamentals are not optional, and they are the only things that hold true under pressure.

Two years at VMware as a Detection and Response Analyst in the Security Operations Center gave me exposure to enterprise operations and security: FedRAMP, CMMC, and DFARS compliance work, incident response under pressure, and the fine line between policy and operational governance.

Today I run Bulwark Black LLC, a service-disabled veteran-owned small business that operates locally as Rural Tech and Support out of Chimacum, Washington.

## What I want students to leave with

So what do I want students to take away when they show up to class?

Very simply, I want them to understand how the internet works. How different protocols stack together to produce the seamless experience users take for granted. When I teach databases, I want students to understand how databases actually apply to applications and how they get used across the internet. When I teach governance and risk management, I want the same thing: a student who can explain *why* a query is slow, or *why* a record will not normalize, or *why* a control framework exists, will be able to adapt to new tooling as it ships. The fundamentals carry them across vendors and hype cycles.

## AI is no longer optional

The biggest shift I want to implement in my teaching is the position that AI is no longer optional. It is a necessity. If a technology professional is not using AI, or has no plan to integrate it, they are getting left behind regardless of how they feel about it.

The current job market solidifies this. The tech layoffs of the last two years have been brutal, and they have ramped up in the last six months following the release of Claude Opus 4.7 and OpenAI Codex 5.5. Look at the job postings. Almost every one is screening for AI literacy. The market wants people who can integrate agentic workflows, evaluate model output critically, correct it when it is wrong, and architect systems with AI as a first-class component.

Students need to walk into those interviews with that kind of fluency. Unfortunately, institutional hesitancy to integrate AI puts students behind the curve in what is, by any honest measurement, an AI revolution.

## The Ender Wiggin model

I treat AI as a tool that amplifies my knowledge of the fundamentals. It accelerates my own work by an order of magnitude. My research is ten times faster. I feed AI my ideas and it improves the process of my workflow, or it points out things I missed that would have cost me pain later.

The way I describe AI to my students is through Ender Wiggin from *Ender's Game*. Once you understand the basics, identify real pain points, and can think clearly about the architecture of what you are building and the problems it will face, AI lets you act as a commander rather than a foot soldier. You do not need to do every keystroke. You need to know what good looks like, what it feels like, and what to ask for. That model only works if you understand the fundamentals well enough to direct the work and recognize bad output when you see it.

## ShopFlow: AI is required, not banned

In my databases class, I anchor the technical material in problems my own products have forced me to solve. I built the ShopFlow course project to put the "AI plus fundamentals" thesis on rails.

Over the project, students:

- Provision a MySQL 8.0 instance on an Aiven-hosted database (Digital Ocean infrastructure) and connect from Google Colab.
- Model a seven-table e-commerce schema, identify every foreign-key relationship and its cardinality, and produce a full entity relationship diagram.
- Clean dirty data.
- Write ten business-analytics queries exercising joins, window functions, cohort analysis, and time series.
- Build an interactive Plotly dashboard.
- Implement user access controls with `GRANT` statements.
- Host the result as a live website on Netlify from a GitHub repository.

AI use is required, not banned. The integrity framework is explicit: students must cite their AI conversation and document how they arrived at their solution. AI can generate every line of code in the project, but each student has to *understand and defend* every line. The grading rubric is structured so that a student who cannot explain their own queries will fail the analytics section regardless of whether the SQL runs.

The course-level AI reflection essay is Pass or Fail, has a 500-word minimum, and cannot itself be AI-generated. Students write about which prompts worked, which did not, what AI could not solve for them, where it saved time, and where it cost time.

An optional production implementation plan section pushes students to extend the database into a realistic web application: API design, caching, JWT authentication, GDPR considerations, and a scaling strategy. That is the Ender model in practice. A single student now ships work that would have been a small team project five years ago, but only if they understand the architecture well enough to direct it.

## Rural Tech and Support: the same philosophy, in the field

I also run Rural Tech and Support out of Chimacum, Washington, which extends the same practitioner philosophy into communities that deserve the same caliber of technical help that urban markets take for granted. The business covers four service lines: personal IT and security, web and AI, automation workflows, and business IT and cybersecurity for small offices, clinics, and field teams.

The framing I use on that site is the same one I use in class. Most problems are not fancy. They are missed fundamentals. A forgotten password. A router that has not been touched in five years. Rural users still need governance, still need solid databases behind the small applications they depend on, and increasingly want to leverage AI without falling for vendor hype.

Running that business in parallel with teaching keeps both honest. The classroom forces me to explain what I do. The clients force me to make sure what I explain actually works.

## My goal as an instructor

My goal is to keep the gap between the field and the classroom as small as I can. I want my students testing new tools the same week those tools ship, building things that actually run, and graduating with the practical AI literacy that gets them hired.

Industry is moving fast. My job is to make sure the students who come through my classroom move with it. AI is a new technology. As a technology professional, you should be learning it.
