---
title: "Make your traffic look like it's coming from your couch"
publishedAt: 2026-05-16
summary: "A two-router setup, a GL.iNet Flint 2 at home and a travel router on the road, that tunnels all your traffic over WireGuard back to your residential IP. Works from hotels, Airbnbs, and coffee shops without breaking your work VPN."
tags: ["networking", "privacy", "vpn", "travel"]
draft: false
---

Here's a problem that comes up more often than people realize. You're traveling. You sit down in a hotel, an Airbnb, or a coffee shop. You open your laptop and start working. Now:

- Your bank flags you because you're logging in from a state you've never been in.
- The streaming service you pay for at home decides you can't watch the show you're already halfway through.
- The work tools that geofence to "United States, residential IP" are suddenly suspicious because you're on a Tier-1 commercial network.
- And if anyone is watching your traffic, your employer's VPN, a nosy network operator, somebody's "free WiFi" landing page, they can see exactly where you are.

The solution most people reach for is a commercial VPN. That hides your IP behind the VPN provider's IP, which is also flagged as a VPN by every service you care about. You traded one detection for a louder one.

What you actually want is for your traffic to exit *from your house.* Same residential IP as when you're sitting on your couch. That's the setup I run, and it's the setup I built for a friend whose work was monitoring her location through their VPN client.

## The hardware

- **A [GL.iNet Flint 2](https://www.gl-inet.com/products/gl-mt6000/) at home.** This is the home router. It runs WireGuard server-side and your home network through it as normal.
- **A GL.iNet travel router** (Beryl, Slate, or similar, they all run the same firmware). This is the one that goes in your bag. Fits in a coat pocket.

Both run GL.iNet's OpenWrt-based firmware, which is a major reason I use them, the WireGuard configuration is a few clicks rather than a config-file deep dive, and the phone app makes setup something you can do from the lobby.

## The setup

1. **At home**, set the Flint 2 up as a WireGuard server. The Flint 2's admin UI walks you through it. Generate a WireGuard "client" profile and export it.
2. **On the travel router**, import that WireGuard profile as a client. From now on, when the travel router has internet, it dials home over WireGuard automatically.
3. **On the road**, do this in order:
   - Power on the travel router.
   - Open the GL.iNet phone app, connect to the travel router's local WiFi from your phone, and use the app to connect the travel router *to* the venue's WiFi (hotel captive portal, Airbnb password, coffee-shop network, whatever).
   - Open your laptop, connect to the travel router's WiFi (not the venue's).
   - You're now exiting from your home IP.

Every packet that leaves your laptop goes: laptop → travel router → WireGuard tunnel → Flint 2 at home → your ISP → the internet. The venue's network sees encrypted WireGuard traffic going to one IP, your house. Every service you visit sees your residential IP.

## What surprised me

- **Work VPNs still work.** If your job requires you to connect to a corporate VPN over the top of all this, you can. Your work VPN runs *inside* the home tunnel. It just sees you connecting from your house, which it would anyway.
- **It's faster than commercial VPNs.** Commercial VPN providers oversubscribe their endpoints. Your home connection isn't oversubscribed, and WireGuard has very low overhead. I've had no perceptible latency hit beyond what the venue's WiFi already costs.
- **The phone app makes this teachable.** I can set this up for someone who isn't technical and hand them the travel router with a simple "power it on, open the app, connect to the WiFi here, then connect your laptop to the router." That's it. No SSH, no config files, no terminal.

## What you should know

- Your home upload speed becomes everyone-on-the-road's download ceiling. If your home upload is 50 Mbps, that's the cap for whatever you do on the road. For most work, it's fine. For 4K streaming, plan accordingly.
- If your home ISP goes down while you're traveling, you lose the tunnel. Have a fallback plan, even if it's "use the venue WiFi directly for emergencies."
- This is *not* a privacy tool against your ISP or against your home network's monitoring. Your traffic still exits from your house. If that matters, you need a different setup.

If you want me to set this up for you, pick the routers, configure them, hand you a "power on, open app, done" kit, that's a job I take. Reach out.
