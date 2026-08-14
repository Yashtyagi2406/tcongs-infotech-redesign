# TCONGS Infotech — Website Redesign

> **Next-Gen Digital, Web & E-Commerce Agency** — A modern, high-converting landing page for TCONGS Infotech built with React, Vite, and Tailwind CSS v4.

---

## 🌐 Live Preview

🔗 **[https://6a7f5014a694d274de45f1ca--neon-torrone-7ac1a2.netlify.app/](https://6a7f5014a694d274de45f1ca--neon-torrone-7ac1a2.netlify.app/)**

---

## ✨ Features

- **Premium Dark UI** — Deep dark theme (`#08090C`) with crimson (`#FF1E56`) and lime (`#D4FF00`) accent palette
- **Seamless Background Video** — Full-viewport ambient video loop with tuned opacity overlay
- **Scroll-Reveal Animations** — Every section fades and slides in smoothly as the user scrolls using a custom `IntersectionObserver` hook
- **Glassmorphism Components** — Frosted glass cards, panels, and navbar with `backdrop-filter` blur
- **Interactive Marquee** — Auto-scrolling technology/platform strip (Amazon, Shopify, Next.js, GEO, etc.)
- **Service Matrix** — Tabbed, filterable cards across 6 service categories
- **Project Estimator** — Interactive budget & timeline calculator
- **Featured Work** — Case study showcase with metrics
- **Comparison Matrix** — TCONGS vs. agency alternatives table
- **Growth Process** — 6-step animated process section
- **Testimonials Carousel** — Client testimonials with star ratings
- **FAQ Section** — Accordion-style expandable FAQs
- **Contact + Date Scheduler** — Full contact form with date picker
- **Project Consultation Modal** — Global modal triggered from any CTA
- **Fully Responsive** — Mobile-first layouts across all breakpoints
- **SEO Optimized** — Meta tags, semantic HTML, descriptive title

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 19 | UI framework |
| [Vite](https://vite.dev) | 8 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first styling |
| [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite) | 4 | Tailwind v4 Vite plugin |
| [Lucide React](https://lucide.dev) | latest | Icon library |
| [canvas-confetti](https://www.kirilv.com/canvas-confetti/) | 1.9 | Confetti micro-animation |
| [Google Fonts](https://fonts.google.com) | — | Inter + Outfit typefaces |

---

## 📁 Project Structure

```
tcongs-infotech-redesign/
├── public/
│   └── bg-video.mp4          # Ambient background video loop
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky glassmorphism navbar
│   │   ├── Hero.jsx            # Hero section with particle glow + marquee
│   │   ├── ServiceMatrix.jsx   # Tabbed service cards
│   │   ├── ProjectEstimator.jsx# Interactive budget calculator
│   │   ├── FeaturedWork.jsx    # Case studies showcase
│   │   ├── ComparisonMatrix.jsx# Agency comparison table
│   │   ├── GrowthProcess.jsx   # 6-step process section
│   │   ├── Testimonials.jsx    # Client testimonials carousel
│   │   ├── FAQSection.jsx      # Accordion FAQ
│   │   ├── ContactSection.jsx  # Contact form + scheduler
│   │   ├── Footer.jsx          # Footer with links
│   │   ├── ProjectModal.jsx    # Global consultation modal
│   │   └── ScrollReveal.jsx    # Scroll-reveal wrapper component
│   ├── hooks/
│   │   └── useScrollReveal.js  # IntersectionObserver scroll hook
│   ├── App.jsx                 # Root component + background video
│   ├── main.jsx                # Entry point
│   └── index.css              # Tailwind v4 theme + custom styles
├── index.html                  # HTML shell with Google Fonts
├── vite.config.js              # Vite + Tailwind plugin config
├── tailwind.config.js          # Design token extensions
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>=18`
- npm `>=9`

### Installation

```bash
# Clone the repository
git clone https://github.com/Yashtyagi2406/tcongs-infotech-redesign.git
cd tcongs-infotech-redesign

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173` with Hot Module Replacement.

### Production Build

```bash
npm run build
```

Output goes to `dist/`.

### Preview Production Build

```bash
npm run preview
```

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `brand-dark` | `#08090C` | Page background |
| `brand-surface` | `#0E1017` | Section backgrounds |
| `brand-card` | `#141722` | Card backgrounds |
| `brand-crimson` | `#FF1E56` | Primary accent, CTAs |
| `brand-lime` | `#D4FF00` | Secondary accent, highlights |
| `brand-muted` | `#94A3B8` | Muted/subtext |

### Typography

- **Headings** — [Outfit](https://fonts.google.com/specimen/Outfit) (400–900)
- **Body** — [Inter](https://fonts.google.com/specimen/Inter) (300–700)

### Key Utility Classes

```css
.glass-panel          /* Glassmorphism card */
.glass-panel-hover    /* Hover lift + glow effect */
.text-gradient-crimson /* White → Crimson gradient text */
.text-gradient-lime    /* White → Lime gradient text */
.glow-crimson          /* Crimson box-shadow glow */
.grid-bg-pattern       /* Subtle dot/grid background */
```

---

## 📦 Key Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run preview  # Preview production build locally
npm run lint     # Run Oxlint code linter
```

---

## 📝 Git Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
feat:     New feature
fix:      Bug fix
chore:    Config, deps, tooling
style:    CSS / design changes
refactor: Code restructure (no feature change)
```

---

## 📄 License

This project is proprietary. All rights reserved © TCONGS Infotech.
