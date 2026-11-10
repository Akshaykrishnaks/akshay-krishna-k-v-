# Akshay Krishna K S — Personal Portfolio Website

> **B.Tech Computer Science (Artificial Intelligence) Student**  
> Thejus Engineering College, Thrissur, Kerala  
> *"Learning, building, and growing with AI."*

A modern, responsive, aesthetic personal portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed with an elegant, soft, feminine-neutral-clean palette (warm beige, off-white, charcoal, and soft sage green accents), featuring an offset-framed portrait hero, animated counter stats, categorized skills with progress chips, project cards with live & GitHub links, an academic journey timeline, and a validated interactive contact form.

---

## ✨ Features & Highlights

- **Aesthetic Design System**: Soft off-white backgrounds (`#F7F6F3`), warm beige (`#E6DFD6`), refined charcoal text (`#2B2B2B`), and calming sage green accent (`#8FA892`).
- **Signature Typography**: *Great Vibes* script for logos/signatures, *Playfair Display* serif for headings, and *Plus Jakarta Sans* / *Inter* for body and tech badges.
- **Two-Column Hero Section**:
  - Left: Large portrait inside an offset white frame with soft shadow and botanical accents.
  - Right: Script name signature, role badge, serif headline (*"Let's build something meaningful together"*), bio paragraph, and dual call-to-action buttons.
- **Single Source of Truth**: All text, projects, skills, education, stats, and links are conveniently configured in `src/data/content.js`.
- **Light & Dark Mode**: Seamless toggle preserving the soft, organic aesthetic (deep warm charcoal with sage highlights).
- **Interactive Animations**:
  - Scroll progress indicator bar at the top of the screen.
  - Frosted-glass sticky navigation with active section tracking.
  - Staggered scroll reveals and animated count-up metrics in the About section.
  - Skill progress bars with levels and context notes.
  - Filterable project grid with hover lift effects.
  - Academic milestone timeline with animated node markers.
  - Validated contact form with celebratory confetti feedback and one-click email copy.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or newer) installed on your computer.

### 2. Install Dependencies
```bash
# Navigate to the project directory
cd akshay-portfolio

# Install required packages
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
This generates an optimized production bundle inside the `dist/` directory.

---

## ✏️ How to Customize Your Portfolio

### 1. Update Content, Bio, and Links
Everything is centralized in **`src/data/content.js`**:
- **Personal Info**: Name, tagline, location, email, GitHub, LinkedIn, and Instagram links.
- **About Data**: Bio paragraphs, quick facts (college, year, academic focus), and numerical stats.
- **Skills**: Add or modify programming languages, AI/ML tools, web frameworks, and proficiency percentages.
- **Projects**: Add your own project title, summary, tech stack tags, repository URL, and live demo link.
- **Education Timeline**: Update your semesters, school milestones, awards, or hackathons.

### 2. Replace the Portrait Photo
1. Place your photo (JPEG or PNG) into the `public/` directory (e.g., `public/profile.jpg`).
2. Open `src/data/content.js` and update:
   ```javascript
   photoUrl: "/profile.jpg",
   ```
3. That's it! Your photo will automatically display inside the white offset frame with soft shadow and hover effect.

### 3. Add Your Resume PDF
1. Save your resume PDF as `public/Akshay_Krishna_Resume.pdf`.
2. In `src/data/content.js`, set:
   ```javascript
   resumeUrl: "/Akshay_Krishna_Resume.pdf",
   ```

### 4. Connect the Contact Form to Your Email (Free via Formspree)
1. Go to [https://formspree.io](https://formspree.io) and sign up for a free account.
2. Click **"New Form"**, name it "Portfolio Contact", and copy the provided form endpoint URL (e.g., `https://formspree.io/f/mqkvrxyz`).
3. Open `src/data/content.js` and paste your endpoint into `formspreeEndpoint`:
   ```javascript
   formspreeEndpoint: "https://formspree.io/f/mqkvrxyz",
   ```
Messages submitted through the form will now land directly in your email inbox!

---

## 🌐 Free 1-Click Deployment Options

### Option A: Deploy to Vercel (Recommended)
1. Push your repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/<your-username>/akshay-portfolio.git
   git push -u origin main
   ```
2. Go to [https://vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** and import `akshay-portfolio`.
4. Vercel automatically detects **Vite** and sets the build command (`npm run build`) and output directory (`dist`).
5. Click **Deploy**. Your portfolio is live in under 1 minute with free SSL and automatic redeploys on git push!

### Option B: Deploy to Netlify
1. Log in to [https://www.netlify.com](https://www.netlify.com).
2. Choose **"Import from Git"** and pick your repository.
3. Set:
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy Site**.

### Option C: Deploy to GitHub Pages
1. In `vite.config.js`, add the repository base path:
   ```javascript
   export default defineConfig({
     base: '/akshay-portfolio/',
     plugins: [tailwindcss(), react()]
   })
   ```
2. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.

---

## 📁 Project Directory Structure

```
akshay-portfolio/
├── index.html                   # HTML template with SEO tags, favicon, and Google Fonts
├── vite.config.js               # Vite + Tailwind CSS v4 + React configuration
├── package.json                 # Project dependencies and npm scripts
├── public/
│   ├── akshay-portrait.svg      # Stylized vector portrait & photo replacement guide
│   └── favicon.svg              # Brand favicon
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main application structure
    ├── index.css                # Tailwind CSS v4, custom color variables & styles
    ├── data/
    │   └── content.js           # Single editable file for all text, links, skills & projects
    ├── components/
    │   ├── BackgroundBlobs.jsx  # Floating organic botanical shapes
    │   ├── ScrollProgress.jsx   # Top-of-page reading progress indicator
    │   ├── Navbar.jsx           # Responsive header with theme toggle & active section pill
    │   ├── Hero.jsx             # Two-column hero with offset framed portrait
    │   ├── About.jsx            # Bio cards, quick facts, and animated counter metrics
    │   ├── Skills.jsx           # 4-category capability cards with progress bars
    │   ├── Projects.jsx         # Filterable project grid with live demo & repo links
    │   ├── Journey.jsx          # Vertical academic timeline for B.Tech & schooling
    │   ├── Contact.jsx          # Validated form with confetti toast & email copy
    │   ├── Footer.jsx           # Script signature, social icons, and back-to-top button
    │   └── Icons.jsx            # Vector brand icons (GitHub, LinkedIn, Instagram)
    └── utils/
        └── useTheme.js          # Dark/Light theme persistence hook
```

---

## 🎓 About the Author
- **Student**: Akshay Krishna K S
- **Specialization**: B.Tech Computer Science & Engineering (Artificial Intelligence)
- **Institution**: Thejus Engineering College, Thrissur, Kerala
- **Batch**: 2024 — 2028
