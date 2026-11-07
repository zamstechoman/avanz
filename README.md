# Avanzora

Editable React, TypeScript, and Vite frontend for the imported Avanzora Framer site. The original exports stay under `imports/`; the app uses the cleaned assets in `public/` and the editable code in `src/`.

## Local development

```sh
npm install
npm run dev
```

The captured routes are `/`, `/about-us`, and `/projects`. `/blog` is wired to Sanity but has no local article copy because the static export did not include a blog page.

## Sanity CMS

1. Create a Sanity project with a **public** dataset.
2. Copy `.env.example` to `.env.local` and set `VITE_SANITY_PROJECT_ID` and (if needed) `VITE_SANITY_DATASET`.
3. Add the local and production frontend origins to the dataset's CORS origins in the Sanity project settings.
4. Restart Vite and open `/studio` to edit the `homePage`, `aboutPage`, `project`, and `blogPost` documents.

The public website uses only published, publicly readable Sanity content. Do not put a Sanity write token in any `VITE_` variable; Vite variables are shipped to browsers. If Sanity is not configured, the site uses the imported source copy and asset library. A CMS request error is logged and that source content remains visible.

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Set `VITE_SANITY_PROJECT_ID`, `VITE_SANITY_DATASET`, and optionally `VITE_SANITY_API_VERSION` as Pages build environment variables.

The `wrangler.toml` file declares the Pages output directory. `public/_redirects` enables client-side routing for the captured routes and the Studio.
