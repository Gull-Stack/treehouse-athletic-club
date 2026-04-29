# Treehouse Athletic Club - Demo Website

> **DEMO / STAGING ONLY** — This site contains placeholder content (stock photos, sample class schedules, demo instructor names, fabricated testimonials, and a non-functional tour form). It is NOT production-ready. See KNOWN ISSUES below before deploying to a live domain.

A Tier-S demo website for Treehouse Athletic Club, Utah's premier family fitness center.

## Overview

This is a premium demo website showcasing a modern, conversion-focused design for a bigbox family gym. The design takes inspiration from top-tier fitness brands like Equinox, Life Time, and Orangetheory.

## 📁 Structure

```
/
├── index.html           # Homepage with video hero
├── memberships.html     # Pricing tiers
├── amenities.html       # Facility overview
├── schedule.html        # Class schedule
├── tour.html            # Tour scheduling
├── locations/
│   ├── draper.html      # Draper location (local SEO)
│   └── sandy.html       # Sandy location (local SEO)
├── css/
│   └── styles.css       # Design system & styles
├── js/
│   └── main.js          # Interactive features
├── sitemap.xml          # SEO sitemap
├── robots.txt           # Crawler instructions
└── vercel.json          # Deployment config
```

## 🎨 Design System

### Colors
- **Forest Green:** #2D5A27 (primary)
- **Wood:** #8B5A2B (secondary)  
- **Orange:** #FF6B35 (accent/CTA)
- **Off-white:** #FAFAF8 (background)
- **Charcoal:** #1A1A1A (text)

### Typography
- **Headlines:** Montserrat (bold, athletic)
- **Body:** Inter (clean, readable)

## ✨ Features

- Full-bleed video hero section
- Sticky header with CTA
- Mobile-responsive design
- Smooth scroll animations
- Interactive class schedule
- Google reviews integration (placeholder)
- Schema.org structured data
- Local SEO optimization

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel --prod
```

### Static Hosting
Simply upload all files to any static hosting provider.

## 📊 SEO

- Schema.org SportsActivityLocation markup
- Local business structured data for both locations
- Optimized title tags and meta descriptions
- XML sitemap included
- robots.txt configured

## Links

- **Demo:** https://treehouse-athletic-club.vercel.app
- **Presentation:** https://treehouse-athletic-club.vercel.app/presentation
- **Strategy:** [STRATEGY.md](STRATEGY.md)
- **Current Site:** https://www.treehousefitness.com/
- **Falling Waters Spa:** https://fallingwatersspa.com/

## Known Issues (Must Fix Before Production)

| Issue | Severity | Notes |
|-------|----------|-------|
| Stock photos (Unsplash) | HIGH | Replace with real Treehouse facility photos |
| Demo instructor names | MEDIUM | Replace with real staff names and bios |
| Fake testimonials | MEDIUM | Replace with real member testimonials |
| Tour form has no backend | CRITICAL | Form action="#" — needs real endpoint or Calendly embed |
| Sandy location may not exist | HIGH | Only one physical location at 1101 E Draper Pkwy confirmed — verify if Sandy page should exist |
| Sandy address "8855 S 700 E" | HIGH | Unverified — may be fabricated |
| Pricing ($59/$129/$199) | MEDIUM | Unverified — confirm with ownership |
| Class schedule | MEDIUM | Sample/demo data — replace with real schedule |
| Missing pages | MEDIUM | Privacy Policy, Terms of Service, Accessibility — all href="#" |
| No analytics | LOW | Add Google Analytics or Plausible before launch |
| rock-wall.jpg is 12MB | LOW | Compress to <500KB for web performance |

---

Built by GullStack
