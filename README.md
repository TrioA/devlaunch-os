# DevLaunch OS (v1.0 Pro)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Gumroad Store](https://img.shields.io/badge/Gumroad-Storefront-ff90e8.svg)](https://codecraft682.gumroad.com/l/devlaunch-os)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff.svg)](https://vitejs.dev/)

> **The Turnkey Micro-SaaS & Digital Product Boilerplate with Integrated Gumroad License Verification.**

Ship your software business in 48 hours instead of 4 weeks.

---

## ⚡ Highlights
- **Turnkey Gumroad Licensing**: One-file license verification helper (`src/lib/gumroad-license.ts`) with client-side caching, seat-tracking, and anti-tamper validation.
- **Modern TypeScript Stack**: Vite + React 18 + Tailwind CSS + Lucide Icons for instant developer experience and blazing-fast builds.
- **Zero-Cloud-Cost Persistence**: Built-in offline-first typed storage adapter (`src/lib/db.ts`) for zero-database overhead MVP architectures.
- **Conversion-Optimized Landing Page**: Pre-built hero, feature grid, interactive license engine demo, and responsive multi-tier pricing tables.
- **1-Click Vercel & Netlify Deployment**: Pre-configured build pipelines and clean environment separation.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Your Gumroad Product ID
Open `src/components/LicenseVerifier.tsx` (or your app config) and supply your Gumroad product ID:
```typescript
const licenseManager = new GumroadLicenseManager('YOUR_GUMROAD_PRODUCT_ID');
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` to preview your app.

---

## 📦 Project Architecture
```
devlaunch-kit/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── LicenseVerifier.tsx
│   │   ├── Pricing.tsx
│   │   └── Footer.tsx
│   └── lib/
│       ├── gumroad-license.ts   # Core licensing validation
│       └── db.ts                # Offline-first storage
```

---

## 📜 Commercial License & Pro Kit
DevLaunch OS Community Edition is open-source under the MIT license.  
For the complete Pro Boilerplate with production licensing engine and commercial deployment rights, visit **CodeCraft Studios** on [Gumroad](https://codecraft682.gumroad.com/l/devlaunch-os).
