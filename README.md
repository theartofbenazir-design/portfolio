# Premium Graphic Design & UI/UX Portfolio

A dark, motion-driven, editorial portfolio website built with **React**, **Vite**, **TypeScript/JavaScript**, and **CSS3**. Art-directed specifically for independent visual and product designers.

---

## 🎨 Visual Identity & Design System

- **Background:** `#101014` (Deep obsidian dark)
- **Secondary Background / Cards:** `#18181D` (Refined dark slate)
- **Primary Text:** `#F5F5F5` (High-contrast pure titanium)
- **Secondary Text:** `#A5A5AD` (Muted silver gray)
- **Electric Accent:** `#C7FF3D` (Electric lime highlight)
- **Subtle Borders:** `#303037` (Editorial hairline dividers)
- **Typography:** **Space Grotesk** & **Manrope** for oversized display headlines + **Inter** for body text.

---

## 🖼️ How to Replace Project Images Later

The website comes with **bespoke, CSS-generated visual artwork** for all 6 projects (interactive phone scanners, branding boards, botanical UIs, Swiss posters, and structural packaging).

When your exported project images are ready, replacing them takes **3 simple steps**:

1. **Save your images:** Place your exported files into `public/images/projects/`:
   ```
   public/images/projects/factsy-cover.webp
   public/images/projects/rain-and-brew-cover.webp
   public/images/projects/paudhewale-cover.webp
   ```
2. **Update the data file:** Open [`src/data/projects.js`](file:///C:/graphic%20ui%20ux%20portfolio/src/data/projects.js) and update the `image` field:
   ```javascript
   {
     id: "factsy",
     slug: "factsy",
     title: "Factsy",
     category: "UI/UX Design",
     // Add your image path here:
     image: "./images/projects/factsy-cover.webp",
     ...
   }
   ```
3. **Automatic Switch:** If `image` is set, the website automatically displays your real image with smooth zoom hover effects. If left blank or if an image file is missing, it gracefully renders the custom CSS-generated design mockup.

---

## 🚀 Local Development

### Prerequisites
- Node.js (v18+ or v20+)
- npm (v9+)

### Commands

```bash
# 1. Start the Vite development server
npm run dev

# 2. Build for production
npm run build

# 3. Preview production build locally
npm run preview
```

> **Windows Explorer shortcut:** You can double-click `start-dev.bat` inside your project folder at any time to launch the server!

---

## 🌐 Moving to GitHub & Deployment

### 1. Initialize & Push to GitHub

```bash
git init
git add .
git commit -m "feat: Premium dark editorial graphic & UI/UX portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### 2. GitHub Pages (Automated via GitHub Actions)
1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
4. The included workflow `.github/workflows/deploy.yml` will automatically build and publish your portfolio on every push.
5. Because Vite is configured with `base: './'` and `HashRouter`, deep URLs (e.g. `#/project/factsy`) work with zero 404 rewrite configuration.

### 3. Vercel & Netlify
- **Vercel:** Import your GitHub repo; framework preset is automatically detected as **Vite**.
- **Netlify:** Set build command to `npm run build` and publish directory to `dist`.

---

## 📂 Project Architecture

```
src/
├── components/
│   ├── Navbar.jsx               # Sticky header with wordmark & mobile drawer
│   ├── Footer.jsx               # Dynamic copyright & social links
│   ├── ProjectCard.jsx          # Dynamic editorial card with perspective tilt
│   ├── PlaceholderArtwork.jsx   # Bespoke CSS artwork engine for all 6 projects
│   └── Showcase3D.jsx           # Signature layered 3D perspective composition
├── sections/
│   ├── Hero.jsx                 # Oversized headline with line clipping masks & 3D object
│   ├── FeaturedWork.jsx         # Asymmetric editorial gallery with category filters
│   ├── About.jsx                # Narrative split layout, coordinates & tools
│   ├── Process.jsx              # 4-stage editorial methodology (01–04)
│   ├── Services.jsx             # 6 specialized disciplines with deliverables
│   └── Contact.jsx              # "Let's work together" form & direct channels
├── pages/
│   ├── Home.jsx                 # Main one-page portfolio experience
│   └── ProjectDetail.jsx        # Reusable deep-dive case study page template
├── data/
│   └── projects.js              # Central source of truth for all projects & info
├── styles/
│   └── theme.css                # Dark editorial design system tokens & animations
├── App.jsx                      # Routing & scroll choreography
└── main.jsx                     # Application entry point
```
