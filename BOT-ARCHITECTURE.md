# Treehouse Athletic Club — Bot Architecture

## Overview

One AI bot. Powered by Claude. Managed by GullStack. Accessed by Treehouse staff via Telegram.

## Stack

```
Treehouse Staff (Telegram)
        │
        ▼
┌─────────────────────┐
│   Telegram Bot API   │  ← Bot token owned by GullStack
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│     OpenClaw         │  ← Gateway hosted on GullStack infra
│  ┌───────────────┐   │
│  │ Claude API    │   │  ← Anthropic API key (GullStack account)
│  │ (Opus/Sonnet) │   │
│  └───────────────┘   │
│  ┌───────────────┐   │
│  │ Cron Jobs     │   │  ← Scheduled tasks (reports, retention checks)
│  └───────────────┘   │
│  ┌───────────────┐   │
│  │ Memory        │   │  ← Persistent club knowledge, member patterns
│  └───────────────┘   │
│  ┌───────────────┐   │
│  │ Skills        │   │  ← Website management, social posting, reporting
│  └───────────────┘   │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│   GitHub             │  ← Gull-Stack/treehouse-athletic-club repo
│   (Push access)      │     Bot commits website changes directly
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│   Vercel             │  ← Auto-deploys on push to main
│   (Edge CDN)         │     treehouse-athletic-club.vercel.app
└─────────────────────┘     → tacfitness.com (production domain)
```

## What Each Layer Does

### Telegram Bot
- **Name:** Treehouse AI (or similar — Treehouse leadership chooses)
- **Access:** Added to a private Telegram group with Erica, Tracy, Paul, Rebecca
- **Interface:** Natural language. Staff types requests, bot responds and acts.
- **No app to install.** Telegram is already on their phones.

### OpenClaw Gateway
- Runs on GullStack infrastructure
- Manages the Claude API connection
- Handles session context, memory, and tool routing
- Runs scheduled cron jobs (Friday reports, retention checks, campaign triggers)
- Stores persistent memory (club hours, pricing, class schedules, staff preferences)

### Claude API (Anthropic)
- **Model:** Claude Sonnet for routine tasks (fast, cheap), Claude Opus for complex analysis
- **Subscription:** GullStack Anthropic API account
- **Cost:** Usage-based. Estimated $50-150/month depending on volume
- **What it does:** All natural language processing, content generation, decision-making

### GitHub (Gull-Stack org)
- Repo: `Gull-Stack/treehouse-athletic-club`
- Bot has push access via deploy key or GitHub App
- Every website change is a git commit — full version history
- Bryce Morgan (@brycedmorgan) has admin access for manual edits

### Vercel
- Project linked to the GitHub repo
- Auto-deploys on every push to `main`
- Edge CDN for fast page loads
- Custom domain: tacfitness.com → Vercel (301 redirect from treehousefitness.com)

## Bot Capabilities

### Website Management
Staff says → Bot does:
- "Add the smoothie bar to the amenities page" → Edits HTML, commits, pushes, live in minutes
- "Update the hours to close at 9 PM on Saturdays" → Updates hours across all pages + schema markup
- "Add summer camp pricing" → Creates new section, updates SEO, drafts social post

### Lead Capture (24/7 Chatbot)
- Embedded on the website via a chat widget
- Answers questions about pricing, hours, classes, amenities
- Books tours, captures contact info, emails the front desk
- Works at 2 AM — never misses a lead

### Content & Social
- "Post about the guest pass special" → Generates 3 platform-specific versions (FB, IG, TikTok)
- Scheduled posting via social API integrations
- Content calendar suggestions based on seasonal trends

### Retention
- Cron job checks member check-in data (requires Compete/CRM API integration)
- Flags at-risk members: "Mark Thompson — hasn't checked in for 22 days"
- Sends milestone messages: "Congratulations on 1 year, David"
- Winback campaigns to former members

### Reporting
- Friday cron job compiles weekly report
- Delivered to Erica's inbox (or Telegram)
- Website traffic, leads, tours, signups, cancellations, social metrics, ad performance

### Ad Campaigns
- Meta Ads API integration for campaign management
- Builds targeting audiences (Draper/Sandy gym-seekers)
- Retargeting pixels on the website
- Budget optimization and reporting

## Setup Requirements

### From GullStack (we provide):
- [ ] Claude API subscription (Anthropic account)
- [ ] OpenClaw gateway instance configured for Treehouse
- [ ] Telegram bot created and added to staff group
- [ ] GitHub repo (already exists: Gull-Stack/treehouse-athletic-club)
- [ ] Vercel project (already linked)
- [ ] Bot skills: website-manager, social-poster, retention-monitor, report-generator
- [ ] Cron jobs: weekly-report (Fridays 8 AM), retention-check (daily), milestone-check (daily)
- [ ] Memory files: club-info.md, pricing.md, class-schedule.md, staff-preferences.md

### From Treehouse (they provide):
- [ ] Telegram accounts for Erica, Tracy, Paul, Rebecca (they already have them)
- [ ] Compete/CRM API access or CSV export of member data
- [ ] Meta Business Manager access (for ad campaigns)
- [ ] Social media account credentials (FB, IG, TikTok)
- [ ] Confirmation of real pricing (verify $59/$129/$199 tiers)
- [ ] Real facility photos to replace stock images
- [ ] Approval of tacfitness.com DNS pointing to Vercel
- [ ] Summer camp program details (dates, pricing, ages)

## Cost Structure

| Item | Monthly Cost | Paid By |
|------|-------------|---------|
| Claude API (Anthropic) | $50-150 | GullStack (billed to client) |
| OpenClaw Gateway | Included in service | GullStack |
| Vercel Pro | $20 | GullStack |
| Telegram Bot | Free | — |
| GitHub | Free (org plan) | GullStack |
| Meta Ads | Client's ad budget | Treehouse (direct) |
| **Total platform cost** | **~$70-170/mo** | — |

## Security & Access Control

- Bot tokens and API keys stored in OpenClaw config (encrypted at rest)
- Treehouse staff never sees API keys, GitHub credentials, or server access
- All website changes are git-tracked — full audit trail
- Staff can only interact via Telegram — no direct system access
- GullStack maintains and updates the bot, skills, and infrastructure

## Timeline

| Week | Milestone |
|------|-----------|
| 1 | Telegram bot live in staff group. Website management skill active. |
| 2 | Chat widget embedded on website. Lead capture flowing. |
| 3 | Retention cron jobs connected (pending CRM data). First Friday report. |
| 4 | Social posting and ad campaign skills active. Full system running. |
