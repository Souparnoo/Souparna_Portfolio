# Souparna Kundu — Personal Portfolio

A production-quality personal portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Chart.js**. Features a modern dark glassmorphism aesthetic, smooth animations, live GitHub API integration, and full GitHub Pages compatibility.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Souparnoo/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles, glassmorphism, animations
│   │   ├── layout.tsx          # Root layout with metadata
│   │   └── page.tsx            # Main page assembling all sections
│   ├── components/
│   │   ├── Navbar.tsx          # Fixed navigation with scroll tracking
│   │   ├── Footer.tsx          # Footer with social links
│   │   └── sections/
│   │       ├── Hero.tsx                 # Landing hero section
│   │       ├── About.tsx                # About me with profile card
│   │       ├── Education.tsx            # Education timeline
│   │       ├── Performance.tsx          # SGPA/CGPA charts (Chart.js)
│   │       ├── CompetitiveExams.tsx     # GATE, WBJEE, NEET, KVPY
│   │       ├── CompetitiveProgramming.tsx  # CF, CodeChef, LeetCode
│   │       ├── SoftwareProjects.tsx     # Software project cards
│   │       ├── ElectronicsProjects.tsx  # Core ECE projects
│   │       ├── CurrentWork.tsx          # In-progress projects
│   │       ├── AITransparency.tsx       # AI usage disclosure
│   │       ├── GitHubSection.tsx        # Live GitHub repo fetch
│   │       └── ResumeSection.tsx        # Downloadable resumes
│   ├── hooks/
│   │   └── useGitHubRepos.ts   # GitHub API hook
│   └── lib/
│       ├── data.ts             # All portfolio data (edit this!)
│       └── utils.ts            # CGPA calculation utilities
├── public/
│   ├── Souparna_Kundu_Software_Resume.pdf       # Add your resume here
│   └── Souparna_Kundu_Core_Electronics_Resume.pdf
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages auto-deploy
├── next.config.js              # Next.js config (static export)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ✏️ Customization

### Updating Your Data
All personal data is centralized in **`src/lib/data.ts`**. Edit this file to update:
- Personal info, social links
- Education details
- SGPA values
- Competitive exam scores
- Programming ratings
- Project descriptions

### Adding Resume PDFs
Place your PDF files in the `/public` directory:
```
public/Souparna_Kundu_Software_Resume.pdf
public/Souparna_Kundu_Core_Electronics_Resume.pdf
```

---

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Push your code** to a GitHub repository named `portfolio` (or any name).

2. **Enable GitHub Pages** in your repo settings:
   - Go to `Settings → Pages`
   - Source: `GitHub Actions`

3. **Push to main branch** — the workflow in `.github/workflows/deploy.yml` will automatically build and deploy.

4. **Custom domain** (optional): Add a `CNAME` file in `/public` with your domain.

> If deploying to `https://souparnoo.github.io/portfolio/` (non-root), update `next.config.js`:
> ```js
> basePath: '/portfolio',
> assetPrefix: '/portfolio/',
> ```

### Vercel (Alternative)
```bash
npm install -g vercel
vercel --prod
```
> Remove `output: 'export'` from `next.config.js` for Vercel.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | React framework with static export |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| Chart.js + react-chartjs-2 | Academic performance charts |
| Lucide React | Icon library |
| GitHub REST API | Live repository fetching |

---

## 🎨 Design Features

- **Dark glassmorphism** — layered blur, transparent cards, subtle borders
- **Framer Motion** scroll-triggered animations throughout
- **Syne** display font for headings, **DM Sans** for body, **JetBrains Mono** for code
- Animated gradient borders on key cards
- Radial glow blobs for atmospheric depth
- Interactive Chart.js bar and line views for academic performance
- Mobile-first responsive design

---

## 📜 License

MIT — free to use and adapt.
