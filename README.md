# Pinki R. Patel — Portfolio

React 18 + Vite 6 + Tailwind CSS 4.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Edit content

Everything (bio, skills, jobs, projects, links) is in `src/data.js`.

- **Photo:** add `public/photo.jpg` and set `photo: '/photo.jpg'` in `profile`.
- **Resume button:** add `public/Pinki-Patel-CV.pdf`.
- **Project screenshots:** see the comment in `src/components/Projects.jsx`.

## Structure

```
src/
  data.js            all site content
  hooks.js           typing effect, theme, in-view, count-up, active nav
  index.css          Tailwind import + light/dark colour tokens
  components/        Navbar, Hero, Stats, About, Skills, Experience,
                     Projects, Contact, Footer, NetworkBackground, WhatsAppButton
```

## Deploy to Vercel

Push to GitHub, import the repo at vercel.com, keep the defaults (Framework: Vite, output: `dist`).
