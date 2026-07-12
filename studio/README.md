# Sanity Studio — KAIF Phuket Admin

Staff content admin for phone, hours, address, events, promotions, and key images.

## One-time setup

1. Create a free Sanity account/project: https://www.sanity.io/manage
2. Copy `.env.example` → `.env` and set:
   - `SANITY_STUDIO_PROJECT_ID`
   - `SANITY_STUDIO_DATASET=production`
   - `SANITY_API_WRITE_TOKEN` (Editor token — for seed only)
3. Install and run locally:

```bash
cd studio
npm install
npm run dev
```

Studio opens at http://localhost:3333

4. Seed current contact info + weekday promotions:

```bash
npm run seed
```

5. In the website root `.env` (not studio):

```env
VITE_SANITY_PROJECT_ID=<same project id>
VITE_SANITY_DATASET=production
```

6. CORS: Sanity Manage → API → CORS origins  
   Add `http://localhost:5173` and `https://kaif-phuket.com` (and www if used).  
   Allow credentials if prompted.

## Deploy Studio (hosted admin URL)

### Option A — Sanity hosted (simplest)

```bash
cd studio
npx sanity login
npm run deploy
```

Studio will be at something like `https://kaif-phuket.sanity.studio`

### Option B — Netlify

Point Netlify at the `studio/` folder:

- Build command: `npm run build`
- Publish directory: `dist`
- Env: `SANITY_STUDIO_PROJECT_ID`, `SANITY_STUDIO_DATASET`

See `netlify.toml` in this folder.

## Invite staff

Sanity Manage → Project → Members → Invite with **Editor** role.  
They only need the Studio URL + login — no code access.
