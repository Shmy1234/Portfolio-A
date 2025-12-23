# Portfolio

A single-page portfolio for Alan Lu built with Vite, React, TypeScript, and Tailwind. It highlights projects, experience, and skills with smooth in-page navigation, a light/dark theme toggle, and a subtle 3D snow overlay for seasonal flair.

## Features
- Hero with quick facts, citizenship, and a resume download button.
- Project grid with timelines and optional GitHub links.
- Vertical experience timeline with role-level bullets and tech stack callouts.
- Skill categories rendered as badge groups.
- Light/dark theme toggle with preference saved to local storage.
- Mobile-friendly navbar with smooth scrolling to each section.

## Tech Stack
- React 18 + TypeScript + Vite
- Tailwind CSS with shadcn/ui components and Radix primitives
- React Router for in-page routes; TanStack Query provider is wired for future data needs
- lucide-react icons and custom canvas-based snow effect

## Getting Started
Prerequisites: Node 18+ and npm.

```bash
npm install
npm run dev
```

Other scripts:
- `npm run build` – production build to `dist/`
- `npm run build:dev` – development-mode build
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint

## Project Structure
- `src/pages/Index.tsx` – main page layout assembling all sections
- `src/data/` – portfolio content: `profile.ts`, `projects.ts`, `experience.ts`, `skills.ts`
- `src/components/` – UI building blocks (navbar, project cards, timeline, skill tags, snow effect, theme toggle)
- `src/assets/alan.png` – profile image used in the hero and navbar
- `public/` – static assets; add `Alan_Lu_Resume.pdf` here for the resume download link

## Content Updates
Edit the TypeScript files in `src/data/` to update text content. Replace `src/assets/alan.png` (and add `public/Alan_Lu_Resume.pdf`) to change the photo and resume download. Styling tweaks can be made via `src/index.css` or by adjusting Tailwind classes in the components.
