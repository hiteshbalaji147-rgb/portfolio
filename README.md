# Premium Universal Portfolio

A high-performance personal portfolio website inspired by [touquirakhtar.com](https://touquirakhtar.com/), built with **React 19**, **Framer Motion**, and **Vite**, featuring custom editorial typography, fluid responsive composition, an interactive architecture wireframe comparison slider, and the **Swarm Rebuild** multiplayer cursor animation engine adapted from [Joel Califa / imperfec-t/swarm-Antigravity](https://github.com/imperfec-t/swarm-Antigravity).

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🛠️ How to Customize Your Portfolio

All personal data, branding, social links, and section toggles are centrally maintained in a single configuration file:
📂 **`src/config/site.js`**

### 1. Identity & Bio
Edit `siteConfig.identity`:
- `fullName`: Your name (e.g. `"Hitesh Balaji"`)
- `displayName`: Short wordmark (e.g. `"HITESH"`)
- `profession`: Your title (e.g. `"App & Web Developer / UI·UX Designer"`)
- `location`: Your city / country
- `intro`: 2-line punchy introduction
- `portrait`: Set path to your photo in `public/assets/portrait.webp` (an SVG placeholder is included out of the box)

### 2. Contact & Socials
Edit `siteConfig.contact`:
- `email`: Your business email
- `github`, `linkedin`, `twitter`: Profile URLs

### 3. Projects
Add or edit projects in:
📂 **`src/data/projects.js`**
Each project includes:
- `title`, `category`, `year`, `summary`, `description`, `role`, `tools`, `coverImage`, `liveUrl`, `sourceUrl`, and `stats`.

### 4. Career Experience & Education
Edit your timeline and background in:
📂 **`src/data/experience.js`**

---

## 🐝 Standalone Feature: Swarm Rebuild Animation

This portfolio includes Joel Califa's famous **Swarm Rebuild** engine as a standalone interactive feature:
- Click the **`● MOTION`** button at the top right of the navigation header.
- Or press **`Alt + Shift + S`** anywhere on the page.
- The page dissolves to a canvas blueprint and a swarm of multiplayer cursors (Ada, Linus, Grace, Margaret, Alan, etc.) draws Figma ruler guides, types text with mechanical keyboard sounds, creates duplicate cards, and rebuilds the site live before flocking to your mouse cursor.
- Press **Esc** or click **✕** anytime to return to the interactive live page.

---

## 📁 Project Structure

```
portfolio/
├── index.html                   # HTML entry point with Anton, Manrope & Caveat fonts
├── package.json                 # React 19, Vite, Framer Motion
├── vite.config.js               # Vite configuration
├── public/
│   └── assets/
│       ├── portrait.svg         # Silhouette portrait cutout with rim lighting
│       └── projects/            # Vector graphics for project cards
└── src/
    ├── main.jsx                 # React root
    ├── App.jsx                  # Main application & scroll-spy
    ├── styles.css               # Design tokens, typography & responsive layouts
    ├── config/
    │   └── site.js              # 🌟 Central configuration for personal identity
    ├── data/
    │   ├── projects.js          # Project records & categories
    │   └── experience.js        # Timeline, skills & education
    ├── swarm/
    │   └── swarmEngine.js       # Standalone Swarm rebuild engine & audio synthesizer
    └── components/
        ├── Header.jsx           # Wordmark, nav, Motion button & mobile drawer
        ├── Hero.jsx             # Massive background typography, portrait, stats
        ├── ProjectGrid.jsx      # Filterable & searchable card grid
        ├── ProjectDialog.jsx    # Accessible modal with case-study specs
        ├── Breakdown.jsx        # Interactive Wireframe vs Shipped UI slider
        ├── About.jsx            # 3-column studio grid & quote panel
        ├── Experience.jsx       # Expandable career accordion timeline
        ├── Contact.jsx          # Inquiry form, 1-click email copy & 3D reel card
        ├── ReelModal.jsx        # Interactive 4K 60FPS video showcase preview
        ├── Footer.jsx           # Live IST clock, copyright & back-to-top
        └── Icons.jsx            # Crisp vector icons
```
