# Mayank Trivedi — 3D Personal Portfolio Website

A production-grade, visually stunning personal portfolio website for a **Full-Stack Developer & Gen AI Engineer**. Built with React 18, TypeScript, Tailwind CSS, Framer Motion, React Three Fiber (R3F), Drei, and Lenis smooth scrolling.

![Mayank Trivedi Portfolio](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop)

---

## ✨ Features & Architecture

- 🎨 **Design Aesthetics**: Dark theme base (`#0a0a0f`) with Electric Violet (`#8B5CF6`) → Cyan (`#06B6D4`) accent gradient, glassmorphism cards (`backdrop-blur`), and noise background texture overlay.
- 🧊 **3D Hero Scene**: Interactive icosahedron/neural node cluster with `MeshDistortMaterial`, mouse parallax tilt tracking, and `<Stars />` background built using `@react-three/fiber` & `@react-three/drei`.
- ⚡ **Performance & Lighthouse**: Lazy loading with `React.lazy` + `Suspense` for Three.js Canvas, capped DPR, and mobile performance fallbacks.
- 📜 **Inertia Smooth Scroll**: Global inertia smooth scrolling powered by `@studio-freight/lenis` / `lenis`.
- 🧲 **Custom Magnetic Cursor**: Interactive cursor that scales and glows on buttons, links, and cards.
- 🗃️ **Single Data Source**: All portfolio data, metrics, projects, skills, and experiences are centralized in `src/data/portfolioData.ts` for zero-inline hardcoding.
- 📱 **Mobile First & Responsive**: Animated drawer menu, touch optimizations, and reduced particle density on mobile devices.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite (TypeScript)
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
- **Card Tilt**: `react-parallax-tilt`
- **Smooth Scroll**: `lenis`
- **Icons**: `react-icons`

---

## 🚀 Quick Start

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/Mayank05/mayank-portfolio.git
cd mayank-portfolio
npm install --legacy-peer-deps
```

### 2. Run Locally in Development Mode

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 3. Build for Production

```bash
npm run build
```

The production-ready static assets will be output to the `dist/` directory.

---

## 🌐 Deployment Instructions (Vercel / Netlify)

### Deploying to Vercel (Recommended)

1. Push your repository to GitHub (`Mayank05/mayank-portfolio`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Set the build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install --legacy-peer-deps`
5. Click **Deploy**. Vercel will automatically build and deploy your site with SSL.

---

## 📄 License

MIT © Mayank Trivedi
