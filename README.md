# 🚀 Mayank Trivedi — Agentic AI & Full-Stack Engineer Portfolio

<div align="center">

[![Live Demo](https://img.shields.io/badge/🌐_Live_Website-portfolio--eta--neon--g3bzk8d73q.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-eta-neon-g3bzk8d73q.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-mayanktrivedi05%2FPortfolio-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mayanktrivedi05/Portfolio)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 🌟 Overview

A production-grade, highly responsive, 3D interactive personal portfolio built for **Mayank Trivedi** (Agentic AI Developer & Full-Stack Engineer). Features modern glassmorphism UI, interactive 3D graphics, inertia smooth scrolling, custom particle canvas, and seamless real-time contact integration.

**🌐 Live Demo:** [https://portfolio-eta-neon-g3bzk8d73q.vercel.app/](https://portfolio-eta-neon-g3bzk8d73q.vercel.app/)

---

## ✨ Features & Architectural Highlights

- 🧊 **3D Interactive Hero Scene**: Powered by `@react-three/fiber` & `@react-three/drei` with distorted mesh geometries, ambient starfields, and mouse parallax tilt tracking.
- 🎨 **Modern Cyberpunk Aesthetics**: Deep dark palette (`#090A0F`), glowing glassmorphism cards (`backdrop-blur-md`), vibrant gradients (Purple, Cyan, Emerald), and smooth micro-interactions.
- 🚀 **Featured Projects Showcase**:
  - **Multi-Agent.AI**: Autonomous Multi-Agent AI & RAG Orchestration Platform (Node.js, Docker, Qdrant, LangChain, LangGraph).
  - **InterViewIQ.Ai**: AI-Powered Adaptive Mock Interview & Real-Time Evaluation Platform (React, Node.js, GPT-4o-mini, JWT, Razorpay).
  - **Hotel Booking Engine**: High-Concurrency Distributed Microservices Architecture (Golang, Node.js, Redis Redlock, MySQL).
- 📊 **Metrics & Achievements Counter**: Interactive counter displaying LeetCode rankings (#1098 Global), 350+ DSA problems solved, GATE CS Qualification, and 8.83 CGPA.
- 📬 **Live Contact Form**: Fully functional email dispatch integration powered by Web3Forms API.
- ⚡ **Performance Optimized**: Code splitting with lazy-loaded Three.js canvas components, sub-500ms production build times, and high 60fps animations.
- 📱 **Mobile First & Ultra Responsive**: Smooth mobile navigation overlay, dynamic touch handling, and optimized particle density on low-power devices.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, TypeScript, Vite 8 |
| **Styling & UI** | Tailwind CSS 4, PostCSS, Glassmorphism, React Icons |
| **3D & Canvas** | Three.js, `@react-three/fiber`, `@react-three/drei` |
| **Animations** | Framer Motion, `lenis` (Inertia Smooth Scroll), `react-parallax-tilt` |
| **Deployment** | Vercel SPA Routing, Git Integration |

---

## 📁 Repository Structure

```
mayank-portfolio/
├── public/                  # Static assets (Favicons, PDFs, Project Screenshots)
│   ├── favicon.svg
│   ├── interviewiq.png      # InterViewIQ.Ai screenshot
│   ├── multiagent.png       # Multi-Agent.AI screenshot
│   ├── mayank.jpg           # Profile photo
│   └── resume.pdf           # Resume download
├── src/
│   ├── assets/              # Hero background & graphic assets
│   ├── components/          # Reusable UI & 3D Canvas components
│   │   ├── CustomCursor.tsx
│   │   ├── Navbar.tsx
│   │   └── canvas/          # Three.js 3D Hero Scene components
│   ├── data/
│   │   └── portfolioData.ts # Centralized single source of truth for all content
│   ├── sections/            # Portfolio Sections (Hero, About, Skills, Projects, etc.)
│   ├── App.tsx
│   └── main.tsx
├── netlify.toml             # Netlify deployment rewrite rules
├── vercel.json              # Vercel deployment rewrite rules
├── vite.config.ts           # Vite build & plugin configurations
└── package.json
```

---

## 🚀 Quick Start & Local Setup

### Prerequisites

- Node.js (`>= 18.0.0`)
- npm (`>= 9.0.0`)

### 1. Clone Repository

```bash
git clone https://github.com/mayanktrivedi05/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables (Optional for Contact Form)

Create a `.env` file in the root directory:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for Production

```bash
npm run build
```

The production output will be generated inside the `dist/` directory.

---

## 🌐 Deployment Configuration

This project is optimized for instant deployment on **Vercel** or **Netlify**:

- **Vercel**: `vercel.json` ensures all SPA routes redirect cleanly to `index.html`.
- **Netlify**: `netlify.toml` handles the build pipeline and wildcard redirects (`/* -> /index.html`).

Live URL: **[https://portfolio-eta-neon-g3bzk8d73q.vercel.app/](https://portfolio-eta-neon-g3bzk8d73q.vercel.app/)**

---

## 👤 Author

**Mayank Trivedi**
- **Portfolio**: [portfolio-eta-neon-g3bzk8d73q.vercel.app](https://portfolio-eta-neon-g3bzk8d73q.vercel.app/)
- **GitHub**: [@mayanktrivedi05](https://github.com/mayanktrivedi05)
- **LinkedIn**: [Mayank Trivedi](https://www.linkedin.com/in/mayank-trivedi-73909b292/)
- **Email**: [trivedim115@gmail.com](mailto:trivedim115@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
