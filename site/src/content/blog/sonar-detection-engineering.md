---
title: "What submarine sonar teaches you about detection engineering"
publishedAt: 2026-05-16
summary: "Sonar operators don't chase the loudest signal. SOC analysts shouldn't either. Notes on transients, biologics, and the discipline of pattern recognition, learned the hard way underwater, applied to SIEM work."
tags: ["detection-engineering", "security", "career"]
draft: false
---

I spent ten years in the U.S. Navy submarine force, first as a Sonar Technician and later as a Senior Mission Systems Analyst. This is my lived experience, six years of stack-of-watches, contact reconstruction, Target Motion Analysis, and the rest of it. Most of that work, in the parts that aren't classified, comes down to one skill: knowing what's worth your attention in a sea of noise.

When I moved to VMware's Detection and Response Team after the Navy, I expected the work to feel different. It didn't. The interfaces changed. The discipline didn't.

There's a really good piece by Aaron Amick over at The War Zone, ["Veteran Submariner On How Sonar Crews Tirelessly Hunt Enemies They Can't Even See"](https://www.twz.com/35603/veteran-submariner-on-how-sonar-crews-tirelessly-hunt-enemies-they-cant-even-see), that captures the soundscape side of the job well. I'll borrow some of his framing here and tie it to what I actually did underway, and to what I do now.

One thing to clarify up front, because the headphone-and-pencil image of sonar is part of the popular myth: modern sonar is a lot more visual than it is hearing intensive. Operators work in front of a stack of displays. Waterfalls, broadband and narrowband traces, classification screens, environmental plots, and Target Motion Analysis software, all running at once. The audio is still there, and it still matters, but it's one input. The actual job is *synthesis*. You read the displays, you correlate with the audio, you fold in the environmental model (what the water is doing today), and you compare it to the tactical picture the rest of the team is building. The full picture only forms when you put all of it together. Mishandle any one stream and the picture gets wrong.

That distinction matters for the rest of this post, because it's the same shift that happened in security operations. SOC work isn't one analyst, one screen, one stream. It's a stack of telemetry sources that only mean something when you synthesize them.

## Sonar 101, then SIEM 101

Sound is energy moving through a medium. In the ocean, that medium is water, and water carries sound for miles. The hydrophone arrays on the hull pick up that energy, and the sonar suite turns it into a stack of displays: a broadband waterfall showing intensity over bearing, a narrowband display picking out specific tonal frequencies, and a classification window that pulls the audio for any contact you steer attention to. Amick describes the audio side as the "low volume static-like white noise of the ocean," which is exactly what the headphones sound like when nothing interesting is up. Most of the watch, you're reading the displays. When something stands out, you cue the audio to confirm.

Inside that signal stack are categories you learn to separate: biologics (fish, shrimp beds, marine mammals), seismic events (earthquakes, tectonic creaks), merchant traffic, aircraft passing overhead, trawlers, warships, and submarines. Each one looks different on a waterfall. Each one has an audio signature. The sonar team's job is to see something appear in the soundscape and, in about 30 to 45 seconds, classify what it is using both the visual and the audio together.

Now translate that to a SOC. The "ocean" is your network. The "noise" is the constant baseline of authentication events, DNS queries, process executions, and outbound traffic. The "displays" are your SIEM, your EDR console, your network telemetry dashboards, and your asset-context view. Inside that stack are categories you learn to separate: legitimate user activity, scheduled jobs, software updates, vendor integrations, and, sometimes, an adversary. When something new appears, your job is to synthesize across the sensors and classify it fast.

Same job. Different sensors. In both, no one stream tells you the whole story.

## Transients are everything

Amick has a line in the article that I think about all the time: "A sharp, metallic transient object is out of place in the natural undersea world."

The ocean is loud, but it's loud in *predictable* ways. Fish and waves and weather have their patterns, and on the broadband display they have a *look* you learn to ignore the same way you learn to ignore the hum of a fridge. What snaps your attention is the *transient*, a sudden, sharp, mechanical sound that doesn't belong, paired with a sharp bright streak on the display that wasn't there a second ago. A hatch closing. A wrench dropped on a deck. A turbine spinning up. Things that mean a manmade contact is nearby. I've seen the audio cue arrive a half-second before the visual confirms it, and I've also seen the display catch a tonal the operator never noticed in the headphones. Either way, the call only gets made when both halves agree.

Detection engineering has its own transients. The interesting events are almost never the high-volume ones. They are the:

- **Sharp, anomalous, unexpected.** A logon from a country you've never had a logon from. A PowerShell child process under `lsass.exe`. An outbound connection on a port that's never been used before.
- **Sounds you've heard before but in the wrong context.** A scheduled job that runs every Tuesday is fine. The same job running at 02:14 AM on a Sunday is a transient.
- **Brief, then gone.** A 90-second spike in failed authentications across a fleet of hosts. By the time the dashboard updates, the signal is gone. You had to be watching.

A trained operator doesn't listen for the loudest thing in the water. They listen for the thing that doesn't belong in the soundscape. SIEM tuning is exactly that work: teaching your detection stack to ignore the constant, normal noise of your environment so the transients stand up.

## The deep sound channel, and your alert volume

Amick writes that "deep-sea oceans have unique characteristics like deep sound channels that trap noise and allow it to travel for hundreds of miles." Sound bounces. It echoes. A single contact in the wrong layer of the ocean can sound like a dozen contacts, or like nothing at all. He calls littoral waters, where sound reflects off the seabed and the surface, "a sonic hall of mirrors."

Your network has the same problem.

A single misconfigured endpoint can produce a thousand alerts. A single noisy detection rule can drown an analyst's screen for an hour. One service-account password rotation can fan out to fifty downstream auth failures across a federated environment. The signal didn't change. The acoustic environment did.

The discipline is the same as in sonar: you don't keep cranking up the volume to find the contact. You **change where you're listening,** and you tune your filters to suppress the echoes so the original signal is visible again.

## The Sonar Supervisor: the human check

There's a role on a submarine called the Sonar Supervisor. Amick describes him this way: "He is the check between the reality outside the submarine and what the fire control tracking party believes."

That sentence is the entire argument for human analysts in a SOC.

Your fire control tracking party, in security terms, is everything downstream of the detection: the playbook, the SOAR, the incident response queue, the executives waiting for an answer. They have a *belief* about what's happening, built from telemetry, alert text, and dashboard summaries. None of those things are the reality.

The reality is what's actually on the wire. The Sonar Supervisor, in our world, is the senior analyst who pushes back on the playbook when the data doesn't match the conclusion, who says "I don't think that's what's actually happening here." They are the check between the model and the world.

If you eliminate that role in the name of automation, you eliminate the only person in the room whose job is to disagree with the dashboard. That is not a savings. That is removing the brake from a car.

## Three habits I carried over

**1. Build a baseline before you build an alert.** In sonar, you spend hours just listening to the ambient soundscape before you're allowed to declare a contact. In detection engineering, this means: know what normal looks like for *your* network, your auth patterns, your DNS, your egress profile, before you write a single threshold-based rule. Generic alerts written against generic baselines generate generic noise.

**2. Trust the analyst, not the dashboard.** Every dashboard is a model of what someone thought to look at six months ago. The actual signal will come from an analyst saying "huh, that's weird" about something the dashboard doesn't show. Your job as a detection engineer is to take that "huh" and turn it into a query, then a detection, then a runbook. The dashboard follows.

**3. Beware of the comforting alert.** A SIEM rule that fires three times a day, gets dismissed three times a day, and never produces a real finding is worse than no rule at all. It's training your team to dismiss the category. Tune it, replace it, or delete it.

## Why I bring this up

Sonar training is built around a single idea: don't try to hear everything, don't try to read every line on every display, try to *synthesize* what's there, so you'll notice what isn't. That's not just a tactic. It's a way of paying attention. It's also the part of the job that the popular image of sonar (a guy with headphones, eyes closed) gets wrong. The actual work is the synthesis. Displays plus audio plus environment plus tactical context, all forming one picture, in real time.

If you're running a SOC, a managed detection service, or even a one-person home setup, the work is the same. Build a model of your normal. Watch for the transients across every sensor you have, not just the loud one. Don't trust the dashboard more than the analyst. And keep someone in the room whose job is to disagree with what everyone else already believes.

For more on the sonar side specifically, Amick's full piece is worth reading: ["Veteran Submariner On How Sonar Crews Tirelessly Hunt Enemies They Can't Even See."](https://www.twz.com/35603/veteran-submariner-on-how-sonar-crews-tirelessly-hunt-enemies-they-cant-even-see)
