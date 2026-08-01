# Yiğit Tilaver — Portfolio

Personal portfolio of **Yiğit Tilaver**, AI & Software Developer.

Live site: [yigittilaver.com](https://yigittilaver.com)

## Attribution

This portfolio is based on [Achyut Katiyar's Portfolio Template](https://github.com/achyut21/achyut-portfolio),
customized with my own personal information, projects and content. The original design credit is kept
in the site footer as required by the template's terms.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI**: shadcn/ui + Radix primitives
- **Animation**: Framer Motion
- **3D**: Three.js via React Three Fiber (starfield background)
- **Forms**: React Hook Form + Zod
- **Analytics**: Vercel Analytics + Speed Insights

## Getting Started

Requires **Node.js 20.19+ / 22.13+ / 24+**.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `npm run dev`       | Start the dev server (Turbopack) |
| `npm run build`     | Production build                 |
| `npm run start`     | Serve the production build       |
| `npm run typecheck` | TypeScript check, no emit        |
| `npm run lint`      | ESLint                           |
| `npm run format`    | Prettier write                   |
| `npm run check`     | typecheck + lint + format check  |

## Contact form

Submissions POST to `app/api/contact/route.ts`, which delivers them by e-mail
through [Resend](https://resend.com). Copy `.env.example` to `.env.local` and set
`RESEND_API_KEY`; the same variable must be added in the Vercel project settings
for production.

Without the key the form still renders but reports that messaging is not
configured and points visitors at the direct e-mail address — it never accepts a
message it cannot deliver.

## Content

All site content is data-driven — there is a single source of truth per topic in `data/`:

| File                     | Contents                               |
| ------------------------ | -------------------------------------- |
| `data/projects.ts`       | Projects (`featured: true` → homepage) |
| `data/experience.ts`     | Jobs, internships, volunteering        |
| `data/education.ts`      | Degrees and exchange programs          |
| `data/skills.ts`         | Skills grouped by category             |
| `data/certifications.ts` | Certificates with verification links   |
| `data/social.ts`         | Social links and contact details       |
| `data/navigation.ts`     | Navbar items                           |

Assets live in `public/`:

- `public/resume.pdf` — downloadable CV
- `public/images/profile.jpg` — profile photo
- `public/images/og-image.jpg` — social share card (1200×630)
- `public/images/projects/<slug>/<slug>.jpg` — project cover images

## Deployment

Optimized for [Vercel](https://vercel.com) — import the repository and deploy; the Next.js
configuration is detected automatically.

## Credits

- Original design & template: [Achyut Katiyar](https://github.com/achyut21)
- UI components: [shadcn/ui](https://ui.shadcn.com/)
- Icons: [Lucide](https://lucide.dev/)
- Animation: [Framer Motion](https://www.framer.com/motion/)
- 3D starfield: [Three.js](https://threejs.org/) / [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

---

© Yiğit Tilaver
