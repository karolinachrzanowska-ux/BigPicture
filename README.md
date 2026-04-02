# AI Chatbot for BigPicture

Prototype UI for an AI chat assistant (Vite, React, Tailwind). The original design reference is in Figma: [AI Chatbot for BigPicture](https://www.figma.com/design/5Z0t2qca7nPIiHn1ZLKefh/AI-Chatbot-for-BigPicture).

## Repository

- **SSH:** `git@github.com:karolinachrzanowska-ux/BigPicture.git`
- **HTTPS:** https://github.com/karolinachrzanowska-ux/BigPicture.git

## GitHub Pages (live demo)

After you enable Pages once in the repo, each push to `main` deploys the built app.

1. GitHub repo → **Settings** → **Pages** → **Build and deployment** → **Source:** **GitHub Actions**.
2. Push this branch; workflow **Deploy to GitHub Pages** builds with `GITHUB_PAGES=true` and publishes `dist/`.
3. Public URL (project site): **https://karolinachrzanowska-ux.github.io/BigPicture/**

Local preview with the same URL shape as GitHub Pages (`/BigPicture/`):

```bash
npm run preview:pages
```

Then open **http://localhost:4173/BigPicture/** (Vite prints the exact URL).

## Running the code

1. Install dependencies: `npm i`
2. Start the dev server: `npm run dev` (served at `/` locally)
3. Production build: `npm run build` (default `base` is `/`; CI sets `GITHUB_PAGES=true` for `/BigPicture/`)
