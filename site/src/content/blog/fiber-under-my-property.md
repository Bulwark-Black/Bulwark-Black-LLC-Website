---
title: "Running fiber 400 feet under my own property"
publishedAt: 2026-05-16
summary: "How I got gigabit to an outbuilding 400 feet up a hill, for the price of a mid-range mesh router and a day and a half of digging."
tags: ["infrastructure", "rural", "networking"]
draft: false
---

I had a problem most rural property owners eventually run into: one source of internet at the main building, and another structure 400 feet away, up a hill, through trees, that also needed it. Fast.

The obvious answer is a mesh WiFi extender setup. I thought about it. I ruled it out.

Washington weather has two things going against extenders: wind storms that drop branches (and occasionally whole trees) on outdoor radios, and dense trees that scatter and absorb WiFi signal like a second-hand antenna. Every dollar I put into making an extender setup actually fast, high-gain directional antennas, weatherized housing, dedicated backhaul radios, pushed the price toward "I could just run fiber."

So I ran fiber.

## The hardware

- **500 feet of direct-burial single-mode fiber**, about $150 online. Direct-burial is the key term: it has an outer jacket rated to go into dirt without conduit. Standard indoor fiber will absolutely not survive that.
- **A rented ditch witch.** Small one. Not the highway-construction kind. A day rental from the local equipment yard.
- **Pre-terminated ends** so I didn't have to splice in the field. If you have to terminate yourself, fine, but for a one-time run, paying for factory-terminated ends saves a day and a polishing kit.
- **Media converters at each end** to go from fiber to ethernet. My existing routers expected a copper handoff.

## The dig

I called for utility locates before I touched dirt. Worth doing every time, no matter how shallow you're going. Once the property was marked, I trenched roughly 8 to 12 inches down, enough to keep the fiber out of mowing, gardening, and casual digging accidents. Direct-burial cable doesn't need conduit, but it doesn't need to be exposed either.

The actual trench-and-pull took about a day. Termination, testing, and configuration took another half day. Most of the half-day was me being slow and double-checking my work.

## The handoff

The fiber comes into the main building, hits a media converter, and lands on a spare port of my main router that I converted to a WAN port. The far end hits the outbuilding's media converter and plugs straight into a second router acting as an access point.

End result: full gigabit at the outbuilding, no extender weirdness, nothing to fail in a wind storm.

## Why I'd recommend it

If you live somewhere rural and you need internet at a barn, a shop, a guest cabin, or anywhere WiFi mesh isn't holding up, fiber is dramatically cheaper than people assume, and dramatically more reliable than the alternatives once it's in the ground. The labor is a long weekend if you do it yourself, or a few hundred dollars if you hire the digging out.

What you don't want is fiber sitting in the sun, in a wet trench without proper jacket rating, or terminated by someone who doesn't own a fiber test meter. The cable is forgiving; the ends are not.

I'm happy to walk anyone in the Inland Northwest or Olympic Peninsula through what I did, or come run yours.
