# Padmanava Karmakar - Flutter Software Engineer Portfolio

A modern, high-performance, recruiter-optimized portfolio website for **Padmanava Karmakar** (Flutter Software Engineer with 4.5+ years of production experience).

Built with **Vite**, **React**, and **Tailwind CSS**, featuring dark glassmorphism, electric Flutter-blue branding, sub-second load times, and mobile responsiveness.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Visit the local URL shown in your terminal (typically `http://localhost:5173`).

---

## 📦 Production Build

```bash
# Generate the production bundle in /dist
npm run build

# Preview the production build locally
npm run preview
```

---

## 🌐 Deploying to GitHub Pages

This project is pre-configured for GitHub Pages:
1. Initialize a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/padmanava1/portfolio.git  # or your preferred repo name
   git push -u origin main
   ```
2. In your GitHub repository:
   * Go to **Settings** > **Pages**.
   * Under **Build and deployment** > **Source**, choose **GitHub Actions**.
   * The included `.github/workflows/deploy.yml` workflow will automatically trigger, build the site, and publish it!
3. Your site will be live at:
   `https://padmanava1.github.io/portfolio/` (or your chosen repository name).

---

## 📁 Project Structure

```
padmanava-portfolio/
├── .github/workflows/deploy.yml    # Automatic GitHub Pages CI/CD workflow
├── public/
│   ├── profile.jpg                 # Professional portrait
│   └── Padmanava_Karmakar_Resume.pdf # Downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Responsive header with availability indicator
│   │   ├── Hero.jsx                # High-impact intro, portrait & CTAs
│   │   ├── StatsBar.jsx            # 4.5+ yrs, 50+ screens, 1k+ scale metrics
│   │   ├── FeaturedProjects.jsx    # The Word, TeleMedicine, Goldbank, etc.
│   │   ├── WorkflowEdge.jsx        # AI-augmented velocity & engineering rigor
│   │   ├── SkillsMatrix.jsx        # Categorized mobile, backend & tools stack
│   │   ├── ExperienceTimeline.jsx  # Bacancy, Radixweb & education
│   │   └── ContactFooter.jsx       # Direct recruiter contacts & clipboard copy
│   ├── data/
│   │   └── portfolioData.js        # Single source of truth for resume & project data
│   ├── App.jsx                     # Root application
│   ├── index.css                   # Tailwind styles, glassmorphism & gradients
│   └── main.jsx                    # Application entry point
├── index.html                      # SEO metadata & Google Fonts
├── tailwind.config.js              # Flutter color theme configuration
└── vite.config.js                  # Configured with base: './' for GitHub Pages
```
