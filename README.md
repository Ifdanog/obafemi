# Oniosun Obafemi — Actor & Filmmaker Portfolio

> A cinematic, single-page portfolio built with React.js and Tailwind CSS, showcasing scripts, monologues, gallery, behind-the-scenes content, and film credits for Nigerian actor and filmmaker Oniosun Obafemi.

---

## ✦ Live Preview

<!-- Replace with your deployed URL -->
🔗 [obafemi-oniosun.netlify.app](https://obafemi-oniosun.netlify.app)

---

## ✦ Features

- **Full-viewport cinematic hero** with layered gradient atmosphere and scroll-reveal animations
- **Sticky glass navigation** with active-section tracking via IntersectionObserver
- **Filterable script cards** — browse by All / Monologue / Short Film / Feature, with one-click PDF downloads
- **Masonry image gallery** with hover scale + label reveal and a full lightbox modal
- **Portrait video grid** for monologues with a custom gold play/pause overlay
- **Behind-the-scenes grid** with editorial mixed-span layout and lightbox
- **Styled film credits table** with role badges, status chips, and hover row highlighting
- **Scroll-triggered reveal animations** on every section using a shared `useScrollReveal` hook
- **Fully responsive** — mobile hamburger menu, fluid typography, and adaptive grids
- **Cinematic design system** — Bebas Neue display font, Cormorant Garamond body, DM Mono labels, gold accent palette, grain overlay texture

---

## ✦ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Styling | Tailwind CSS v3 |
| Icons | react-icons |
| Bundler | Vite |
| Fonts | Google Fonts (Bebas Neue, Cormorant Garamond, DM Mono) |
| Animations | CSS keyframes + IntersectionObserver (no extra library required) |

---

## ✦ Project Structure

```
src/
├── components/
│   ├── Nav.jsx            # Sticky glass navbar with active section tracking
│   ├── Hero.jsx           # Full-viewport hero, bio, cert modals, stats
│   ├── Script.jsx         # Filterable script card grid with PDF download
│   ├── ImageGallery.jsx   # Masonry gallery with lightbox
│   ├── Monologue.jsx      # Portrait video grid with custom controls
│   ├── Bts.jsx            # Behind-the-scenes editorial grid + lightbox
│   ├── FilmCredit.jsx     # Styled data table with badges
│   ├── Footer.jsx         # Branded footer with social links
│   └── SectionDivider.jsx # Reusable gold-gradient divider
├── hooks/
│   └── useScrollReveal.js # Shared scroll-triggered visibility hook
├── App.jsx
├── main.jsx
└── index.css              # Global styles, CSS variables, grain overlay, keyframes
tailwind.config.js         # Custom design tokens (colors, fonts, shadows)
```

---

## ✦ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/obafemi-portfolio.git
cd obafemi-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy to Vercel, Netlify, or any static host.

---

## ✦ Media Assets

Place your media files in the `/public` folder. The project expects:

```
public/
├── zas.jpg                  # Hero background image
├── DSC_8458.jpg             # Global background (optional)
├── IMG_6750.JPG             # KAP Level 1 certificate
├── IMG_6749.JPG             # KAP Level 2 certificate
├── Headshot1.jpeg           # through Headshot5.jpeg
├── looks1.jpeg              # through looks9.jpeg
├── IMG_0731.JPG             # BTS images (IMG_0731 through IMG_2744)
├── VID1.mp4                 # Monologue videos (VID1 through VID7)
├── CRISIS.pdf               # Scripts
├── ADDENDUM.pdf
├── FIRST_MONOLOGUE.pdf
├── LOVE_TRIANGLE.pdf
├── MOTHER_NARRATION.pdf
├── BENEATHE_HER_SILENCE.pdf
├── BEYOND_THE_SCAR.pdf
├── FATHER_FIGURE.pdf
├── I_LEARNED_TO_LIE_EARLY.pdf
└── IDOJUKOMI.pdf
```

> **Note:** Media files are not included in this repository due to size. Add your own assets matching the filenames above.

---

## ✦ Customization

### Colors

All design tokens are defined in `tailwind.config.js` and `index.css`. The primary palette:

```js
// tailwind.config.js
colors: {
  ink:    '#0a0a0a',   // Page background
  ash:    '#111116',   // Card backgrounds
  slate:  '#1a1a24',   // Elevated surfaces
  ghost:  '#252530',   // Borders and subtle fills
  silver: '#7878a0',   // Secondary text
  mist:   '#a8a8c0',   // Body text
  pearl:  '#e4e4f0',   // Primary text
  gold: {
    DEFAULT: '#c9a84c', // Accent — labels, badges, highlights
    dim:     '#7a5f24', // Muted gold
    light:   '#e8d080', // Bright gold for gradients
  },
}
```

### Typography

| Role | Font | Usage |
|---|---|---|
| Display | Bebas Neue | Section headings, hero name, footer name |
| Body | Cormorant Garamond | Bio paragraphs, descriptions, italic subtitles |
| Mono | DM Mono | Labels, badges, eyebrows, table headers, nav links |

### Adding Scripts

Open `src/components/Script.jsx` and add to the `scripts` array:

```js
{
  path:  '/YOUR_SCRIPT.pdf',
  title: 'Your Script Title',
  genre: 'Short Film',        // 'Short Film' | 'Monologue' | 'Feature'
  type:  'Drama',
  desc:  'A short description of the script.',
  pages: 14,
}
```

### Adding Film Credits

Open `src/components/FilmCredit.jsx` and add to the `credits` array:

```js
{
  role:       'Character Name',
  project:    'Project Title',
  director:   'Director Name',
  production: 'Production Company',
  status:     'Released',    // 'Released' | 'Unreleased'
}
```

---

## ✦ Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the dist/ folder to Netlify, or connect your GitHub repo.
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
# Add to package.json scripts:
# "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## ✦ Scripts Reference

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server at localhost:5173 |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview the production build locally |

---

## ✦ Credits

**Design & Development** — Redesigned by [DevDan](https://wa.me/2348126123194)

**Portfolio Subject** — [Oniosun Obafemi](https://instagram.com/oba_bisi) — Actor, Screenwriter, Filmmaker, Dialogue Director

---

## ✦ License

This project is the personal portfolio of Oniosun Obafemi. All media content (images, videos, scripts, and PDFs) are the exclusive intellectual property of Oniosun Obafemi. The codebase structure may be referenced for educational purposes.

---

<p align="center">
  <sub>Built with React · Tailwind CSS · Vite &nbsp;·&nbsp; © 2025 Oniosun Obafemi</sub>
</p>
