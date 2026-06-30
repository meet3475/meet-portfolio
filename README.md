# Meet Dobariya — Portfolio

A premium, dark, 3D-animated portfolio built with Next.js, React Three Fiber, and Framer Motion.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Three.js via @react-three/fiber + @react-three/drei (hero background scene)
- Framer Motion (scroll reveals, hover/tilt, typewriter, animated counters)
- react-icons

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit your content

Everything text-based — name, role, summary, skills, experience, projects, services,
stats, social links — lives in one file:

```
src/data/portfolio.ts
```

Edit that file and the whole site updates. No need to touch component files for
content changes.

## Add your resume

Drop your resume PDF here, with this exact filename:

```
public/resume/meet-dobariya-resume.pdf
```

The "Resume" buttons in the navbar and hero already link to that path.

## Customize colors / fonts

Design tokens (colors, fonts) are defined once in `src/app/globals.css` under `:root`
and the `@theme inline` block, then used everywhere via Tailwind classes like
`text-primary`, `bg-surface`, `font-display`, `font-mono`.

## Deploy to Vercel

1. Push this project to a new GitHub repository.
2. Go to https://vercel.com/new and import that repository.
3. Vercel auto-detects Next.js — leave the default build settings and click **Deploy**.
4. Your site will be live at `your-project.vercel.app` within a minute or two.

No environment variables are required for the base site. The contact form opens the
visitor's email client via a `mailto:` link (no backend or API key needed). If you'd
rather have messages sent directly, swap `src/components/Contact/Contact.tsx` for an
EmailJS or Formspree integration — both work great on Vercel's free tier.

## Project structure

```
src/
  app/            Next.js App Router entry (layout, page, globals.css)
  components/     One folder per section (Hero, About, Skills, Experience, Projects, Services, Contact, Footer, Navbar)
  components/ui/  Shared pieces (SectionHeading, AnimatedCounter, ScrollProgress, CustomCursor)
  three/          The Scene.tsx 3D background used in the Hero
  data/           portfolio.ts — all editable content
  lib/            Shared Framer Motion animation variants
```
