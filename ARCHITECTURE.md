# 🎯 ARCHITECTURE DU SITE MALMAS.CD

## 📐 Vue d'Ensemble

```
┌─────────────────────────────────────────────────────────────┐
│                      MALMAS.CD                              │
│           Sovereign Digital Infrastructure                   │
├─────────────────────────────────────────────────────────────┤
│                      NEXTJS APP ROUTER                       │
│                    (TypeScript Strict)                       │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────┐    ┌──────────────────┐               │
│  │  Navbar (i18n)   │    │   Dark/Light     │               │
│  │ Logo / Nav Menu  │    │   Mode Toggle    │               │
│  └──────────────────┘    └──────────────────┘               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │  HERO SECTION                                      │     │
│  │  Title + Subtitle (Framer Motion)                  │     │
│  │  Gradient orbs + Grid background                   │     │
│  │  CTA Buttons                                       │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │  EXPERTISE SECTION                                 │     │
│  │  ┌────────────┐       ┌───────────────────┐        │     │
│  │  │ Cards Grid │      │ Detail Panel       │        │     │
│  │  │ 6 domains  │─────▶ (Problem-App.-Res.)│        │     │
│  │  │ Interactive│       │ (Framer Motion)    │        │     │
│  │  └────────────┘       └───────────────────┘        │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │  APPROACH SECTION                                  │     │
│  │  Timeline: 5 étapes (01→02→03→04→05)              │     │
│  │  Numbered circles + description + line connector   │     │
│  │  Scroll animation                                  │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │  CEO SECTION                                       │     │
│  │  Avatar (FM initials, PAS photo)                   │     │
│  │  Bio + LinkedIn link                               │     │
│  │  Sobriété politique cybersécurité                  │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │  CLIENTS SECTION                                   │     │
│  │  5x5 grid: EC | IN | AL | RB | DG                  │     │
│  │  Hover: Grey → Gradient                            │     │
│  │  "Ils nous ont fait confiance"                     │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │  CERTIFICATIONS SECTION                            │     │
│  │  TOGAF | CompTIA+ | Cisco | Fortinet | VMware      │     │
│  │  | Veeam | ISO 27001                               │
│  │  Chips interactifs                                 │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │  CONTACT SECTION                                   │     │
│  │  ┌──────────────┐      ┌──────────────┐            │     │
│  │  │ Info Contact │      │ Formulaire   │            │     │
│  │  │ - Address    │      │ - Name       │            │     │
│  │  │ - Phone      │      │ - Email      │            │     │
│  │  │ - Email      │      │ - Company    │            │     │
│  │  │ - Google Map │      │ - Message    │            │     │
│  │  │              │      │ - Submit     │            │     │
│  │  └──────────────┘      └──────────────┘            │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │  FOOTER                                            │     │
│  │  © 2022 MALMAS | All rights reserved                │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## 🏗️ Stack Technique

### Frontend
```
Next.js 14
├── App Router (src/app)
├── TypeScript strict
├── TailwindCSS (utility-first)
├── Framer Motion (animations)
└── React Hook Form (forms)
```

### Styling
```
Tailwind CSS
├── Dark mode (classe)
├── Custom colors (malmas-blue, etc.)
├── Grid background pattern
├── Smooth animations & transitions
└── Responsive (mobile-first)
```

### Internationalization
```
Custom i18n Context
├── FR / EN
├── useI18n() hook
├── Centralized translations.ts
└── Dynamic language toggle
```

### Interactions
```
Framer Motion
├── Scroll animations (whileInView)
├── Hover effects
├── Stagger animations
├── Page transitions
└── Smooth easing
```

## 📁 Arborescence Finale

```
malmas-website/
│
├── public/
│   └── assets/
│       ├── logo.svg
│       ├── logo-dark.svg
│       └── og-image.png
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + metadata
│   │   ├── page.tsx            # Page d'accueil (≈)
│   │   └── api/
│   │       └── contact.ts      # Endpoint /api/contact
│   │
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation + i18n toggle
│   │   ├── Hero.tsx            # Section hero
│   │   ├── Expertise.tsx       # Expertise avec cards
│   │   ├── Approach.tsx        # Timeline 5 étapes
│   │   ├── CEO.tsx             # Présentation FM
│   │   ├── Clients.tsx         # Logos clients
│   │   ├── Certifications.tsx  # Chips certifications
│   │   ├── Contact.tsx         # Formulaire + infos
│   │   └── Footer.tsx          # Footer
│   │
│   ├── lib/
│   │   └── i18n/
│   │       ├── translations.ts # FR + EN
│   │       └── context.tsx     # Context provider
│   │
│   └── styles/
│       └── globals.css         # Tailwind + custom CSS
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
│
├── .gitignore
├── .env.local.example
├── README.md
└── ROADMAP.md
```

## 🎨 Design System

### Couleurs
```
Dark Theme (par défaut):
- Background: #0f172a (slate-950)
- Surface: #1e293b (slate-800)
- Text Primary: #f1f5f9 (white)
- Text Secondary: #94a3b8 (slate-400)
- Accent Blue: #1e40af (malmas-blue)
- Accent Light: #3b82f6 (blue-500)
- Cyan: #06b6d4 (cyan-500)

Light Mode (optionnel):
- Background: #ffffff
- Surface: #f8fafc
- Text Primary: #0f172a
- Text Secondary: #64748b
- Accent: (même)
```

### Typographie
```
Font Stack:
- Headings: Inter (700, 800)
- Body: Inter (400, 500)
- Code: monospace

Text Sizes:
- H1: 3.5rem (56px) → 1.875rem (30px) mobile
- H2: 2.25rem (36px) → 1.875rem (30px) mobile
- H3: 1.5rem (24px) → 1.25rem (20px) mobile
- Body: 1rem (16px)
- Small: 0.875rem (14px)
```

### Spacing & Layout
```
Container: max-w-7xl (80rem)
Padding:
- Mobile: 1rem (16px)
- Tablet: 2rem (32px)
- Desktop: 3rem (48px)

Sections: py-20 md:py-32
Gaps: 1.5rem → 3rem
```

### Animations
```
Entrance:
- Fade + scale (0.8s)
- Fade + translateY (0.6s)

On Scroll:
- whileInView: opacity, scale, x, y
- transition.delay: stagger

On Hover:
- scale-105 (buttons)
- border color transition
- background color
```

## 🔄 Data Flow

```
┌─────────────────────────────────────────┐
│  I18nProvider (src/lib/i18n/context)    │
├─────────────────────────────────────────┤
│  Provides: language, setLanguage(), t() │
└──────────────┬──────────────────────────┘
               │
    ┌──────────┴──────────┐
    │                     │
┌───▼───────┐      ┌──────▼──────────┐
│ Navbar    │      │ All Components   │
│useI18n()  │      │ useI18n()        │
└───────────┘      └──────────────────┘
    │ setLanguage()
    │
    └─▶ Context state → re-render + t() translate
```

## 📱 Responsive Design

```
Mobile First:
- Base: < 640px
- md: 768px
- lg: 1024px
- xl: 1280px

Breakpoints utilisés:
- md: (grid-cols-2, hidden md:flex, etc.)
- lg: (max-w-3xl, etc.)

Adjustments:
- Hero: text-5xl → text-7xl
- Grid: 1 col → 2 cols
- Sections: py-20 → py-32
```

## ⚡ Performance

### Optimisations
- Next.js Image Optimization
- Font preloading (Google Fonts)
- Dynamic imports (lazy components)
- CSS minification (Tailwind)
- No unused CSS
- Code splitting auto

### Target Metrics
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- Lighthouse: > 90

## 🔒 Security

- TypeScript strict mode
- Input validation (Zod)
- CSRF protection
- XSS prevention
- Rate limiting (API)
- No sensitive data in client

## 📊 SEO

- Dynamic meta tags
- Open Graph tags
- Schema.org structured data
- Sitemap.xml
- Robots.txt
- Fast load time
- Mobile-friendly

---

**Complété par**: Team MALMAS  
**Date**: Mars 2024  
**Version**: 1.0 (Production-Ready)
