---
title: "Why I run my own email server (and what it actually costs)"
publishedAt: 2026-05-16
summary: "I spun up a $6/month box, dropped Postfix and Dovecot on it, and routed outbound through a relay so the mail actually lands. Here's the stack, the gotchas, and the real annual cost."
tags: ["infrastructure", "email", "self-hosted"]
draft: false
---

I do a lot of product testing. New accounts, new signups, new flows. Every modern email provider, Google, Microsoft, Apple, ProtonMail, wants a phone number before you can spin up an inbox these days, and "use this temporary inbox" services get blocked by half the signup forms I care about.

So I built my own mail server. I needed a lot of inboxes, fast, on a domain I control. That's the whole reason.

It is not a glamorous project. It is, however, surprisingly cheap once you know the trick.

## The stack

- **A $6/month cloud VPS.** Any reputable provider works. I just wanted a clean public IP and root access.
- **Postfix as the MTA**, the actual mail transport agent. It accepts inbound and tries to deliver outbound.
- **Dovecot as the IMAP server**, so my mail clients can pull messages.
- **Roundcube as the web UI**, so I can read mail in a browser when I don't want to configure a desktop client.
- **An outbound SMTP relay**, this is the trick. More on it in a second.

That's it. No Mailcow, no Mail-in-a-Box, no Docker stack. Just the four pieces, configured by hand, on a tiny VPS.

## The trick: outbound deliverability

Here is the thing nobody tells you. You can stand up Postfix, configure SPF, DKIM, and DMARC perfectly, and your mail will still get filed straight into spam, or rejected entirely, by Google and Microsoft. Why? Because your VPS's IP has no sending reputation, and the major mail providers default to "suspicious until proven otherwise."

The fix is to route outbound mail through a paid SMTP relay. Postmark, SendGrid, Mailgun, Resend, AWS SES, any of them. The relay has a clean sending reputation; your mail goes out through their IP; it lands in inboxes.

You can run a self-hosted server *and* pay for deliverability. Those are not the same problem.

## The real cost

- **VPS**: ~$6/month = $72/year
- **SMTP relay**: anywhere from $10/year (low-volume free tiers) to $200/year (more headroom). Most people land around $50.
- **Domain**: $10-$15/year
- **Time**: a weekend to stand up, a couple of hours a month to tend.

Annual total: somewhere between **$100 and $300**. Compare that to per-user pricing on a hosted business email plan when you need ten or twenty inboxes for testing, the math gets obvious fast.

## What I get

- Any inbox name I want, on a domain I own.
- Zero downtime so far.
- Mail that arrives quickly, lands in actual inboxes, and isn't subject to anyone else's account-suspension policies.
- A test fixture for any product I'm building that touches email.

## What I'd warn you about

- Deliverability isn't a one-time config, it's a reputation you maintain. Send spammy mail and you'll burn your relay's good IP.
- If you ever forget to renew the relay subscription, your outbound mail will silently start landing in spam. Set a calendar reminder.
- Your VPS *is* the mail store. If you don't back it up, you have no email history. I rsync mine nightly to a different region.

If you've been wanting a real email setup but didn't want to be hostage to Workspace or Microsoft 365 pricing, this is the path. It's not hard. It's just unfashionable.
