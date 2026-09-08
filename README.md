# VELOOP Rewards – Premium Frontend Banners & Engagement Hub

A modern, interactive, and responsive suite of utility and feature banners built for the **VELOOP Rewards** platform. Engineered with a blend of modern fintech aesthetics, gamified reward mechanics, and SaaS design standards.

---

## 🌐 Live Application

- **Live Demo:** [https://velop.netlify.app/]
- **Repository:** [https://github.com/mukul953kumar/Veloop-Rewards]

---

## 📌 Platform Overview

The **VELOOP Rewards** platform provides high-engagement feature cards that motivate users to participate, complete platform activities, and unlock exclusive rewards.

### Core Feature Components

1. **Leaderboard Banner (`01`)**: Gamified competition and rank progression with an elevated 3-tier podium, golden trophy, and real-time prize pool distribution metrics.
2. **Watch Ads & Earn Banner (`02`)**: Rewarded sponsor streaming interface with a pulsing media player, embossed digital wallet, and overflowing metallic VE coins.
3. **Contact Us Banner (`03`)**: Trust-focused customer experience hub with single-click email copying, visual clipboard confirmation, and an interactive support modal.
4. **Follow & Earn Banner (`04`)**: Community growth engine with a 3D smartphone mockup, dynamic notification alerts, interactive follow micro-interactions, and a multi-tab campaign verification modal.
5. **Daily Bonus Banner (`05`)**: Retention-focused 7-stage bonus ladder with a 3D golden mystery chest, interactive claim states, and a real-time countdown timer.

---

## 🎨 Design System & Specifications

All components are built to strict visual and technical standards:

| Parameter | Specification | Description |
|---|---|---|
| **Theme Background** | `#161827` | Deep midnight navy background with subtle ambient radial glow |
| **Container Width** | `100%` available width | Fluid container adapting responsively up to a `1200px` max boundary |
| **Desktop Height** | `410px – 450px` | Calibrated to an exact `430px` across all desktop components |
| **Tablet Height** | `380px – 540px` | Adaptive multi-column grid maintaining optimal vertical rhythm |
| **Mobile Height** | `330px – 520px` | Compact presentation with zero internal scrollbars |
| **Typography** | Plus Jakarta Sans | Modern geometric sans-serif loaded with Google Fonts preconnect |
| **Color System** | Fintech Accents | Tailored palette (Gold `#f59e0b`, Sky Blue `#38bdf8`, Purple `#7c3aed`, Emerald `#10b981`) |

---

## 💎 Component Architecture

### 🏆 01. Leaderboard
- **Headline**: *Rank Higher. Earn More.*
- **Identifier**: `01` / `COMPETITION STAGE ACTIVE`
- **Visual Composition**: Tiered podium (`#01 User A`, `#02 User B`, `#03 User C`), golden achievement trophy, and ascending trajectory charts.
- **Value Metric**: Active competition prize pool display (`50,000 VEs in prizes`).
- **Interaction**: High-contrast outline action (*Check Rankings →*).

### ▷ 02. Watch Ads & Earn
- **Headline**: *Watch Ads. Earn VEs.*
- **Identifier**: `02` / `ON-DEMAND REWARDS`
- **Visual Composition**: Hardware media player with glowing play trigger, textured digital wallet, and bursting VE currency tokens.
- **Value Metric**: Verified viewing rewards (`+38 VEs Per View`) with `No Daily Cap` and `Instant Credits` badges.
- **Interaction**: Electric blue gradient action (*Watch & Earn →*).

### 💬 03. Contact Us
- **Headline**: *Need Help? We're Here.*
- **Identifier**: `03` / `CONTACT US`
- **Visual Composition**: Support specialist illustration with headset, branded workstation, and floating messaging dialogue elements.
- **Value Metric**: Instant clipboard copy for official support email (`velooprewardsofficial@gmail.com`) with instant feedback checkmark.
- **Interactive Modal**: Embedded multi-tab dialog offering direct support messaging and FAQ help resources.

### 👥 04. Follow & Earn
- **Headline**: *Follow & Earn Stay Connected.*
- **Identifier**: `04` / `FOLLOW & EARN`
- **Visual Composition**: 3D Smartphone mockup with Dynamic Island, slide-in Genesis Campaign notification bubble, interactive Follow toggle with heart reaction burst, and notification bell wobble.
- **Channel Directory**: 5 verified official hubs (Instagram, YouTube, X, Telegram, LinkedIn) with branded hover glow halos.
- **Interactive Modal**: Dedicated campaign verification modal with official channel directory and reward drop claim workflows.

### 🎁 05. Daily Bonus
- **Headline**: *Your Daily Bonus Is Waiting Claim Today's Reward.*
- **Identifier**: `05` / `DAILY BONUS`
- **Visual Composition**: 3D Golden Mystery Gift Box with lifted lid, rotating ambient light rays, bursting gems and coins, and floating status badge.
- **Streak Ladder**: 7-stage interactive progress tracker with checkmark indicators and Day 7 Mega Mystery Chest teaser.
- **Live Countdown**: Monospace digital timer counting down to the next reward reset.
- **Interaction**: Warm golden gradient button (*Claim Bonus 🎁*) updating dynamically to *Bonus Claimed ✓*.

---

## 🎛️ Showcase Navigation & Dual View Modes

The platform features a sticky **Showcase Navigation** controller:
- **Stacked View (Default)**: Presents all 5 feature banners in a unified vertical showcase. Clicking any navigation pill smoothly scrolls to that component and triggers an accent highlight pulse.
- **Focus View**: Switches to an isolated inspection view, displaying only the selected component full-width with entrance transitions.
- **Quick Filters**: Dedicated branded pills for immediate navigation across all components.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 18
- **Build Tool**: Vite 5
- **Styling Architecture**: CSS Modules (`.module.css`), Vanilla CSS Design Tokens
- **Iconography**: Lucide React, React Icons (Font Awesome 6)
- **Deployment Platform**: Netlify (Continuous Deployment via Git)

---

## 💻 Local Setup & Development

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation
```bash
# Clone repository
git clone https://github.com/mukul953kumar/Veloop-Rewards.git
cd Veloop-Rewards

# Install project dependencies
npm install

# Start local development server
npm run dev
```
Navigate to `http://localhost:5173` in your browser.

### Production Build
```bash
# Compile and optimize production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🚢 Deployment Configuration

The repository includes ready-to-deploy configuration for both Netlify and Vercel:

- **Netlify**: Configured via `netlify.toml` and `public/_redirects` with Single Page Application rewrite rules.


---

## 🛡️ Engineering & Quality Standards

- Modern semantic HTML5 markup (`<article>`, `<nav>`, `<main>`, `<section>`).
- Strict WCAG AA contrast compliance across all text labels, badges, and CTAs.
- Full keyboard navigation and ARIA accessibility attributes (`role="tab"`, `role="tablist"`, `aria-selected`).
- Responsive layout verified across mobile, tablet, and widescreen viewports.
- Clean code architecture with zero build warnings and zero console errors.
