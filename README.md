<div align="center">

  # 🌟 Nandini R. — Developer Portfolio
  
  <p align="center">
    <strong>A modern, high-performance developer portfolio built with React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion.</strong>
  </p>

  <p align="center">
    <a href="https://github.com/Nandini-0321/Portfolio/stargazers"><img src="https://img.shields.io/github/stars/Nandini-0321/Portfolio?color=06B6D4&style=for-the-badge&logo=github" alt="GitHub Stars" /></a>
    <a href="https://github.com/Nandini-0321/Portfolio/network/members"><img src="https://img.shields.io/github/forks/Nandini-0321/Portfolio?color=0891B2&style=for-the-badge&logo=github" alt="Forks" /></a>
    <a href="https://github.com/Nandini-0321/Portfolio/issues"><img src="https://img.shields.io/github/issues/Nandini-0321/Portfolio?color=38BDF8&style=for-the-badge&logo=github" alt="Issues" /></a>
    <a href="https://github.com/Nandini-0321/Portfolio/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License" /></a>
  </p>

  <p align="center">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=3000&pause=1000&color=06B6D4&center=true&vCenter=true&width=620&lines=Aspiring+Software+Engineer;AI+%2F+Machine+Learning+Developer;Full-Stack+Architect+%26+Problem+Solver;Building+Intelligent+Software+for+the+Real+World" alt="Typing SVG" />
  </p>

  <p align="center">
    <a href="#-overview">Overview</a> •
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-how-it-works">How It Works</a> •
    <a href="#-installation--setup">Setup</a> •
    <a href="#-about-the-developer">Author</a> •
    <a href="#-contact">Contact</a>
  </p>

</div>

---

## 📌 Overview

Most technical portfolios either feel like generic static resumes or compromise on mobile usability. This portfolio was engineered from the ground up to solve that problem — combining high-fidelity visual design, tactile micro-interactions, responsive typography, and certified credential showcases with zero compromise on performance.

It highlights **11+ production-grade applications**, **3 industry internships**, verified credentials from institutions like **Oracle** and **CySecK**, and provides direct 1-tap messaging bridges across WhatsApp, Email, and interactive inquiry forms.

---

## ✨ Features

- 🎨 **Modern Liquid Glass & Neumorphic Design System** — Tailored soft blue canvas (`#EEF4FB`) paired with deep midnight cinematic dark mode (`#080D18`), crisp cyan highlights, and ambient radial glows.
- 📱 **Universal Mobile-First Responsiveness** — Pixel-perfect rendering across small handhelds (320px–430px), tablets (768px–1024px), laptops, and 4K desktop screens without awkward text wraps or overflows.
- 📜 **Fast Image-Driven Certificate Previews** — Zero black-box PDF iframe failures. All certificates render via crisp WebP image thumbnails with 1-click fallback to the original high-res vector PDF files.
- 🔍 **Interactive Project Showcase & Case Studies** — Filter projects by category (*AI/ML*, *Full Stack*, *Data Science*, *Web Dev*), live search by keywords/tech stacks, and full-screen modal case studies exploring challenges, architecture pipelines, and solutions.
- 💬 **Smart Pre-Filled Direct Messaging** — WhatsApp and Email triggers come pre-loaded with customizable inquiry templates (*Job Opportunity*, *Internship*, *Collaboration*, *General Connect*) plus 1-tap clipboard copying.
- 🌓 **Dynamic Theme Switching** — Smooth dark/light mode toggle with persistent local theme memory and adaptive contrast states.
- ⚡ **Lightning Fast Hydration** — Bundled via Vite with tree-shaking, optimized asset loading, and smooth Framer Motion spring physics.

---

## 🛠 Tech Stack

<div align="center">

| Area | Technologies |
| :--- | :--- |
| **Frontend Core** | ![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript_5.8-007ACC?style=flat-square&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=flat-square&logo=vite&logoColor=white) |
| **Styling & Motion** | ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=flat-square&logo=framer&logoColor=blue) |
| **Icons & Assets** | ![Lucide](https://img.shields.io/badge/Lucide_Icons-F05032?style=flat-square&logoColor=white) ![WebP](https://img.shields.io/badge/WebP_Optimized-00599C?style=flat-square) |
| **Deployment** | ![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub_Pages-181717?style=flat-square&logo=github&logoColor=white) |

</div>

---

## 📂 Project Structure

```text
client/
├── public/                     # Static production assets
│   ├── certificates/          # High-res PDFs, markcards & badge images
│   │   └── thumbnails/        # Pre-rendered mobile-friendly WebP thumbnails
│   ├── projects/              # Application screenshots & UI diagrams
│   ├── favicon.svg            # Site favicon
│   └── Nandini R.pdf          # Downloadable resume
├── src/
│   ├── assets/                # Internal illustrations and icons
│   ├── components/            # Modular UI components
│   │   ├── ui/                # Core design system primitives
│   │   │   ├── ClayBadge.tsx          # Tactile pill badges
│   │   │   ├── ClayStat.tsx           # Rounded numeric metrics
│   │   │   ├── LightGlassCard.tsx     # Translucent glass surfaces
│   │   │   ├── NeumorphicButton.tsx   # Elevated 3D action buttons
│   │   │   ├── NeumorphicInput.tsx    # Inset form inputs & textareas
│   │   │   └── SectionHeading.tsx     # Standardized section headings
│   │   ├── About.tsx          # Engineering philosophy & strengths
│   │   ├── Achievements.tsx   # Verified symposium & competition honors
│   │   ├── Contact.tsx        # Pre-filled messaging & inquiry form
│   │   ├── Education.tsx      # Academic degrees & credentials gallery
│   │   ├── Experience.tsx     # Industry internship milestones timeline
│   │   ├── Footer.tsx         # Quick links, copyright & socials
│   │   ├── Hero.tsx           # Value proposition, live telemetry & stats
│   │   ├── Navbar.tsx         # Floating liquid glass capsule header
│   │   ├── ProjectModal.tsx   # In-depth architectural case studies
│   │   └── Projects.tsx       # Searchable catalog & flagship showcase
│   ├── context/               # Theme context (Dark / Light mode)
│   ├── data.ts                # Structured personal, project & credential data
│   ├── index.css              # Custom utilities, neumorphism & CSS tokens
│   ├── main.tsx               # DOM root mounting
│   └── types/index.ts         # TypeScript schema definitions
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ⚙️ How It Works

1. **Initial Hydration**: Vite loads the lightweight DOM structure with a brief glowing monogram transition while assets hydrate.
2. **Theme Context**: Detects system preferences or stored `localStorage` keys, applying smooth CSS variable switches across backgrounds, text colors, and shadows.
3. **Interactive Project Discovery**:
   - Filter chips categorize projects instantly without page reloads.
   - The search bar queries across project titles, tech tags, and descriptions simultaneously.
   - Clicking any project opens the comprehensive Case Study modal detailing the problem, solution, system pipeline, and code links.
4. **Certificate Rendering**:
   - Rather than relying on fragile native browser PDF viewers, cards load lightweight, pre-generated WebP page thumbnails.
   - Clicking **"Open PDF"** or the card launches the authentic vector document or modal preview with zero delay.
5. **Fail-Safe Inquiry Dispatch**:
   - The contact form attempts direct API dispatch via Formspree.
   - If blocked by ad-blockers or network interruptions, it gracefully triggers the user's native email client with the draft pre-filled, guaranteeing messages are never lost.

---

## ▶️ Installation & Setup

To run this portfolio locally on your machine:

### Prerequisites
- Node.js (v18.0 or higher recommended)
- npm (v9.0 or higher)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Nandini-0321/Portfolio.git
   cd Portfolio/client
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The compiled, minified bundle will be generated in the `dist/` directory.

---

## 📸 Screenshots & Demo Ideas

> *Tip: Place high-resolution GIFs and screenshots in `public/assets/` to preview them here.*

<div align="center">

| Desktop Experience | Mobile & Tablet Responsiveness |
| :---: | :---: |
| *Showcasing Hero, Live Code Snippet & Flagship Projects* | *Clean touch drawers, aspect-ratio thumbnails & 1-tap messaging* |

</div>

---

## 🚀 Future Improvements

- [ ] **Interactive 3D Neural Network Shader** using Three.js / React Three Fiber for the hero section background.
- [ ] **GitHub Activity Real-Time Graph API** live sync for recent commits and pull requests.
- [ ] **Automated PDF Thumbnail CI Action** that auto-renders new certificates uploaded to `/public/certificates/`.
- [ ] **PWA (Progressive Web App) Offline Support** for offline viewing of projects and case studies.

---

## 👨‍💻 About the Developer

<p align="left">
  <strong>Nandini R.</strong> is an aspiring <strong>Software Engineer & AI/ML Developer</strong> with a passionate focus on engineering intelligent systems that bridge cutting-edge artificial intelligence research with scalable, reliable full-stack architectures.
</p>

She is a Computer Science & Engineering student at **Beary's Institute of Technology (BIT), Mangalore** (Affiliated to VTU) holding a consistent **9.34 / 10 CGPA**. 

Nandini enjoys building practical applications that solve meaningful real-world challenges in domains like automation, financial tracking, computer vision safety, and collaborative community networks. Her background includes real-world systems such as **AgriTrade** (a farmer auction platform), **Fraud Detection Systems**, **Brain Tumor CNN Classifiers**, and **OmniDetect AI** (real-time YOLO object detection).

### 🛠 Core Competencies
- **Languages**: Python, Java, C, C++, JavaScript, TypeScript, SQL, PHP
- **Frameworks & Web**: React.js, Next.js, Node.js, Express.js, Flask, Django, Tailwind CSS, HTML5/CSS3
- **AI / Machine Learning**: Deep Learning (CNNs), Computer Vision (OpenCV, YOLO, dlib), Scikit-learn, TensorFlow, Keras, Data Analysis (Pandas, NumPy)
- **Databases & Tools**: MySQL, MongoDB, PostgreSQL, Git, GitHub, AWS, Postman, VS Code

### 🏢 Industry Experience
- **Machine Learning Intern** — Inventeron Technologies *(Ongoing)*
- **Artificial Intelligence Intern** — iStudio *(6 Months)*
- **Machine Learning Intern** — Teachnook *(Project-based ML pipelines)*
- **Full Stack Development Intern** — 1Stop *(Web Application Architecture)*

---

## 📬 Contact & Connect

Feel free to connect for full-time engineering opportunities, collaborations, or technical projects:

<p align="left">
  <a href="mailto:nandini.33218@gmail.com?subject=Portfolio%20Inquiry%20%E2%80%94%20Let's%20Connect&body=Hi%20Nandini%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding%20an%20opportunity%20%2F%20project%20collaboration!">
    <img src="https://img.shields.io/badge/Email-nandini.33218%40gmail.com-06B6D4?style=for-the-badge&logo=gmail&logoColor=white" alt="Email Nandini" />
  </a>
  <a href="https://wa.me/917204385773?text=Hi%20Nandini%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding%20an%20opportunity%20%2F%20project%20collaboration!">
    <img src="https://img.shields.io/badge/WhatsApp-%2B91%207204385773-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp Chat" />
  </a>
  <a href="http://www.linkedin.com/in/nandini3" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-Nandini%20R-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Profile" />
  </a>
  <a href="https://github.com/Nandini-0321" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Nandini--0321-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Profile" />
  </a>
</p>

> *"Feel free to connect for collaborations or opportunities."*

---

<div align="center">
  <sub>Designed and engineered by <a href="https://github.com/Nandini-0321">Nandini R.</a> • Licensed under the MIT License</sub>
</div>
