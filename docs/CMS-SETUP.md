# CMS setup (Sanity) — for developers / site owners

This project uses Sanity so staff can edit contact info, events, promotions, spa/beauty services, restaurant menu, and images without code.

## What was added

| Path | Purpose |
|------|---------|
| `studio/` | Sanity Studio (admin UI) |
| `src/services/sanity.js` | Sanity client |
| `src/services/cms.js` | Fetch helpers + fallbacks |
| `src/services/catalogMaps.js` | Map spa/menu Sanity docs → UI shape |
| `src/context/CmsContext.jsx` | Loads CMS data for the React app |
| `src/data/cmsFallbacks.js` | Offline / unconfigured defaults |

## Activate (required once)

1. Create project at https://www.sanity.io/manage
2. Configure `studio/.env` from `studio/.env.example`
3. `cd studio && npm install && npm run seed && npm run seed:menu && npm run deploy`
4. Set website env vars (Netlify/Vercel/local `.env`):
   - `VITE_SANITY_PROJECT_ID`
   - `VITE_SANITY_DATASET=production`
5. Add CORS origins for the live site + local Vite URL
6. Invite staff as Editors; send them the Studio URL and [staff guide](./STAFF-CMS-GUIDE.md)

Until `VITE_SANITY_PROJECT_ID` is set, the website keeps using built-in fallbacks (contact, spa list, restaurant menu).

## Seed spa + restaurant catalog

```bash
cd studio
npm run seed:menu
```

This upserts ~80 spa services + ~50 dishes (EN/RU/TH) from the current website data files.

## Redeploy website after env change

After adding Sanity env vars on the host, trigger a new production build so Vite can bake them in.

After schema changes, redeploy Studio: `cd studio && npm run deploy`
