# MALMAS Website - Refonte Complète

Interface digitale premium pour MALMAS - Cabinet de Conseil en Infrastructures Numériques Souveraines et Cybersécurité.

## 🚀 Quick Start

### Installation

```bash
# Clone ou accédez au dossier du projet
cd malmas-website

# Installer les dépendances
npm install

# Créer le fichier .env.local
cp .env.local.example .env.local

# Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📋 Structure du Projet

```
malmas-website/
├── src/
│   ├── app/              # Pages et layouts App Router
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/       # Composants réutilisables
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Expertise.tsx
│   │   ├── Approach.tsx
│   │   ├── CEO.tsx
│   │   ├── Clients.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   └── i18n/         # Système i18n (FR/EN)
│   │       ├── translations.ts
│   │       └── context.tsx
│   └── styles/           # Styles et CSS global
│       └── globals.css
├── public/               # Assets statiques
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🛠️ Technologies Utilisées

- **Next.js 14** - Framework React moderne
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling utilitaire
- **Framer Motion** - Animations fluides
- **React Hook Form** - Gestion de formulaires
- **Zod** - Validation schemas

## 🎨 Fonctionnalités

✅ **Mode Sombre par Défaut** - Design cybersécurité  
✅ **Bilingue FR/EN** - Toggle dynamique  
✅ **Animations Premium** - Framer Motion  
✅ **Responsive Design** - Mobile-first  
✅ **Formulaire de Contact** - Anti-bot  
✅ **Google Maps Intégré** - Localisation  
✅ **SEO-Ready** - Schema.org  
✅ **TypeScript Strict** - Type safety 100%

## 📱 Pages

### 1. Hero (Accueil)
- Message core premium
- CTA "Demander une évaluation"
- Animations de gradient et orbes

### 2. Expertise
- 6 domaines d'expertise
- Cards interactives avec détails
- Problem → Approach → Result

### 3. Approach
- Processus en 5 étapes
- Timeline visuelle
- Animation progressive

### 4. CEO Section
- Présentation Frédéric Masiala
- LinkedIn link
- Pas de photo du visage

### 5. Clients
- Logos clients (Euroclear, Irisnet, Allnex, Rawbank, DGDA)
- Hover animations
- Design enterprise

### 6. Certifications
- TOGAF, CompTIA+, Cisco, etc.
- Chips interactifs
- Alignement avec expertise

### 7. Contact
- Formulaire complet
- Infos de contact
- Google Maps embarquée
- Support FR/EN

## 🌍 Internationalisation

Le site gère automatiquement FR/EN via le contexte `useI18n()`:

```tsx
const { t, language, setLanguage } = useI18n();

// Utilisation
<h1>{t('hero.title')}</h1>
```

Ajouter des traductions dans `src/lib/i18n/translations.ts`

## 🔧 Development

### Démarrer le serveur
```bash
npm run dev
```

### Build production
```bash
npm run build
npm start
```

### Export statique pour Hostinger
```bash
npm run build
```

Le site statique est généré dans `out/`.
Déployez ensuite le contenu de `out/` dans `public_html/` sur Hostinger pour servir le site sans port `3000`.

### Type checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

## 📦 Deployment

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Netlify

Connecter le repo GitHub et configurer:
- Build command: `npm run build`
- Publish directory: `.next`

### Hostinger

Pour un hébergement Hostinger classique sans serveur Node exposé:
- Exécuter `npm run build`
- Récupérer le dossier `out/`
- Publier le contenu de `out/` dans `public_html/`

Cette configuration évite les `404` liés à `next start` sur le port `3000`.

## 🔐 Variables d'Environnement

Voir `.env.local.example` pour la liste complète.

Les variables **NEXT_PUBLIC_** sont exposées au client.

## 📧 Email Configuration

Pour activer l'envoi d'emails depuis le formulaire de contact:

1. Configurer SMTP dans `.env.local`
2. Implémenter l'endpoint API dans `src/app/api/contact.ts`

## 🎯 SEO

Le site inclut:
- Meta tags dynamiques
- Open Graph
- Schema.org
- Sitemap
- Robots.txt

À générer après deployment:
```bash
npm run generate-sitemap
```

## 📍 Mapping Google

Coordonnées intégrées:
- Latitude: -4.305072364278713
- Longitude: 15.291225627258186
- Adresse: 47 Roi Baudouin, Gombe, Kinshasa

## 🎨 Customisation

### Couleurs
Modifier dans `tailwind.config.ts`:
```ts
colors: {
  'malmas-blue': '#1e40af',
  'malmas-light-blue': '#3b82f6',
}
```

### Typographie
Import fonts Google dans `src/app/layout.tsx`

### Logo
Placer le logo dans `public/assets/` et importer

## ⚙️ Performance

- Image optimization (Next.js)
- Code splitting automatique
- CSS-in-JS minimal (Tailwind)
- Font optimization
- Lazy loading des composants

Vérifier Lighthouse:
```bash
npm run lighthouse
```

## 🚀 Next Steps

- [ ] Intégrer logo MALMAS (SVG ou PNG)
- [ ] Configurer Google Maps API Key
- [ ] Configurer service SMTP pour emails
- [ ] Ajouter Analytics (GA4)
- [ ] Setup CDN et compression
- [ ] Tests E2E (Playwright)
- [ ] Performance monitoring (Vercel Analytics)
- [ ] SSL/HTTPS malmas.cd

## 📄 License

© 2024 MALMAS. Tous droits réservés.

## 👨‍💼 Support

contact@malmas.biz  
+243 83 35 74 351
