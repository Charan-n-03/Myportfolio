# Charan N — React & Full-Stack Developer Portfolio

A production-quality personal developer portfolio engineered with **React.js**, **Vite**, and custom **React Bits** component integrations. Built with a monochromatic editorial design system, accessible interaction patterns, high-contrast light and dark themes, and deployment-ready Vercel configuration.

---

## ⚡ Tech Stack & Architecture

- **Core Framework**: React 19 (JavaScript & JSX — No TypeScript, No Next.js)
- **Bundler & Tooling**: Vite 6 with optimized chunking and code-splitting
- **Motion & Physics**: `motion` (Framer Motion v12) for spring dials and gesture tracking
- **3D Graphics & Canvas**: Three.js for interactive badge physics simulation
- **Styling**: Modern CSS3 custom properties (variables), responsive flex/grid layouts, no unnecessary CSS frameworks
- **Icons**: Clean SVGs & Lucide React icons
- **Target Platform**: Vercel (Edge-ready static site deployment)

---

## 🎨 React Bits Component Integrations

1. **Lanyard (`src/components/react-bits/Lanyard.jsx`)**
   - **Profile Showcase Only**: Contained within a constrained responsive container (`max-width: 340px`, `height: 420px`) inside the Hero section.
   - **WebGL & Physics**: Real-time Verlet integration simulation of lanyard strap, ring, clamp, and card swinging physics with raycaster-driven dragging and clicking flip animations.
   - **Performance & Cleanup**: Complete resource disposal on unmount (geometries, materials, textures, environment maps, event listeners, observers).
   - **Graceful Fallback**: Automatically displays an accessible static profile card preview if WebGL is unavailable or fails to initialize.

2. **TechText (`src/components/react-bits/TechText.jsx`)**
   - **Hero Typography Only**: Renders the name **"CHARAN N"** using multi-pass canvas rasterization, dashed vector contours, glyph outline displacement, and an assembly intro effect.
   - **Restrained & Accessible**: Kept strictly to the hero heading. All other headings use semantic editorial typography. Screen-reader accessible with `role="img"` and `aria-label`.

3. **CometDial (`src/components/react-bits/CometDial.jsx`)**
   - **Real Theme Controller**: Fully functional theme selector integrated with React Theme Context.
   - **Stable State Mapping**: `0 = Light Mode` and `1 = Dark Mode`.
   - **Interactive Controls**: Supports dragging, pointer tracking with spring momentum and flick bounce, and keyboard control via Arrow keys, Home, End, PageUp, and PageDown.
   - **Persistence**: Persists choice to `localStorage` and automatically respects `prefers-color-scheme` on first visit.

4. **TargetCursor (`src/components/react-bits/TargetCursor.jsx`)**
   - **Desktop Only**: Automatically targets `.cursor-target` interactive elements with fine-pointer detection (`(hover: hover) and (pointer: fine)`).
   - **Accessibility**: Automatically disabled for touch devices and users who prefer reduced motion (`prefers-reduced-motion: reduce`). Non-blocking (`pointer-events: none`).

5. **PaperCrumple (`src/components/react-bits/PaperCrumple.jsx`)**
   - Fully preserved in `src/components/react-bits/` with its complete physics and shaders, available for restrained inspection without cluttering the portfolio's minimal layout.

---

## 📸 Profile Image Replacement Guide

To replace the placeholder badge image with your personal photograph:

1. **Place your image file**:
   Save your portrait/headshot photo as:
   ```
   public/assets/profile.png
   ```
   *(A copy is also kept at `src/assets/profile.png` for direct module imports).*
2. **Update Image Path (if using a different file name or format)**:
   Open [`src/data/portfolioData.js`](file:///c:/Users/CHARAN%20N/OneDrive/Desktop/portfolio/src/data/portfolioData.js) and update the `profileImage` key:
   ```javascript
   export const personalInfo = {
     name: 'Charan N',
     role: 'React & Full-Stack Developer',
     // Update here:
     profileImage: '/assets/your-photo.jpg',
     fallbackImage: '/assets/your-photo.jpg',
     // ...
   };
   ```
3. The `Lanyard` 3D card and fallback preview will automatically display your photograph!

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended, tested on v24.14.0)
- npm or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Production Build & Verification
```bash
npm run build
```
To preview the production bundle locally:
```bash
npm run preview
```

---

## 🌐 Deployment to Vercel

The repository is configured with `vercel.json` for seamless Vercel deployment:

1. Push your repository to GitHub: `https://github.com/Charan-n-03/portfolio`
2. Import the project into your [Vercel Dashboard](https://vercel.com).
3. Vercel will automatically detect the Vite framework and execute `npm run build`.
4. Your site will be live on Vercel with high-speed global CDN caching and SPA routing.

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   └── profile.png           # Profile photo asset for Lanyard
│   └── favicon.svg               # Minimal monogram SVG favicon
├── src/
│   ├── assets/
│   │   └── profile.png           # Bundled profile asset reference
│   ├── components/
│   │   ├── react-bits/           # Source of truth React Bits components
│   │   │   ├── CometDial.jsx     # Theme controller dial
│   │   │   ├── CometDial.css
│   │   │   ├── Lanyard.jsx       # 3D physics profile badge
│   │   │   ├── Lanyard.css
│   │   │   ├── PaperCrumple.jsx  # Paper crumple physics component
│   │   │   ├── PaperCrumple.css
│   │   │   ├── TargetCursor.jsx  # Fine-pointer precision cursor
│   │   │   ├── TargetCursor.css
│   │   │   ├── TechText.jsx      # Canvas typography effect
│   │   │   └── TechText.css
│   │   ├── About.jsx             # Professional narrative & disciplines
│   │   ├── About.css
│   │   ├── Contact.jsx           # Functional email & social profiles
│   │   ├── Contact.css
│   │   ├── Education.jsx         # Academic qualifications & institutions
│   │   ├── Education.css
│   │   ├── Footer.jsx            # Monochromatic identity footer
│   │   ├── Hero.jsx              # TechText & contained Lanyard showcase
│   │   ├── Hero.css
│   │   ├── Icons.jsx             # Crisp, accessible developer SVGs
│   │   ├── Navigation.jsx        # Responsive nav & CometDial controller
│   │   ├── Navigation.css
│   │   ├── Projects.jsx          # TasteGo featured project card
│   │   ├── Projects.css
│   │   ├── Skills.jsx            # Grouped technical competencies
│   │   └── Skills.css
│   ├── context/
│   │   └── ThemeContext.jsx      # Centralized theme state & dial adapter
│   ├── data/
│   │   └── portfolioData.js      # Single source of truth for resume details
│   ├── App.jsx                   # Application layout tree
│   ├── index.css                 # Design system & theme tokens
│   └── main.jsx                  # React DOM mount point
├── index.html                    # SEO meta, JSON-LD schema & theme pre-init
├── package.json
├── vercel.json                   # Vercel SPA routing and caching headers
├── vite.config.js                # Optimized manual chunking config
└── README.md
```

---

## 🛡️ License & Attributions

- Component implementations based on React Bits source specifications.
- Portfolio content and design created for **Charan N**.
