/**
 * Seed gallery images + restaurant menu PDF into Sanity (path fallbacks).
 * Staff can replace by uploading in Studio later.
 * Run: npm run seed:media  (from studio/)
 */
import { createClient } from '@sanity/client'
import { readFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '../..')

function loadEnv() {
  const envPath = resolve(__dirname, '../.env')
  if (!existsSync(envPath)) return
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    const value = trimmed.slice(eq + 1).trim()
    if (!process.env[key]) process.env[key] = value
  }
}

loadEnv()

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !token) {
  console.error('Need SANITY_STUDIO_PROJECT_ID + SANITY_API_WRITE_TOKEN')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-01-01',
  token,
  useCdn: false,
})

function readLocale(lang) {
  return JSON.parse(
    readFileSync(resolve(root, `src/locales/${lang}/translation.json`), 'utf8')
  )
}

function pick(dict, path, fallback = '') {
  const parts = path.split('.')
  let cur = dict
  for (const p of parts) cur = cur?.[p]
  return typeof cur === 'string' ? cur : fallback
}

function localeTriple(en, ru, th) {
  return { en: en || '', ru: ru || '', th: th || '' }
}

async function commitBatches(docs, label, size = 40) {
  for (let i = 0; i < docs.length; i += size) {
    const chunk = docs.slice(i, i + size)
    const tx = client.transaction()
    for (const doc of chunk) tx.createOrReplace(doc)
    await tx.commit()
    console.log(`  ${label}: ${Math.min(i + size, docs.length)}/${docs.length}`)
  }
}

const HOME_GALLERY = [
  { key: 'home-1', imageUrl: '/images/spa/services/thai-massage.jpg', titleKey: 'gallery.slides.thai_massage.title', category: 'spa', position: 'center bottom' },
  { key: 'home-2', imageUrl: '/images/banya/gallery/banya-steam-room.jpg', titleKey: 'gallery.slides.banya.title', category: 'banya' },
  { key: 'home-3', imageUrl: '/images/sports/fight-club/fight-1.jpg', titleKey: 'gallery.slides.combat.title', category: 'fitness', position: 'center top' },
  { key: 'home-4', imageUrl: '/images/zones/pool.jpg', titleKey: 'gallery.slides.pool.title', category: 'relax' },
  { key: 'home-5', imageUrl: '/images/home/terrace.jpg', titleKey: 'gallery.slides.terrace.title', category: 'relax' },
  { key: 'home-6', imageUrl: '/images/spa/gallery/spa-5.jpg', titleKey: 'gallery.slides.spa_room.title', category: 'spa' },
  { key: 'home-7', imageUrl: '/images/sports/gym/gym-1.jpg', titleKey: 'gallery.slides.gym.title', category: 'fitness' },
  { key: 'home-8', imageUrl: '/images/banya/gallery/banya-cold-pool.jpg', titleKey: 'gallery.slides.cold_pool.title', category: 'banya' },
  { key: 'home-9', imageUrl: '/images/spa/services/aromatherapy.jpg', titleKey: 'gallery.slides.aromatherapy.title', category: 'spa' },
  { key: 'home-10', imageUrl: '/images/banya/gallery/banya-rest-area.jpg', titleKey: 'gallery.slides.rest_area.title', category: 'banya' },
  { key: 'home-11', imageUrl: '/images/spa/gallery/spa-1.jpg', titleKey: 'gallery.slides.spa_interior.title', category: 'spa' },
  { key: 'home-12', imageUrl: '/images/spa/services/massage.jpg', titleKey: 'gallery.slides.massage.title', category: 'spa' },
  { key: 'home-21', imageUrl: '/images/spa/gallery/spa-2.jpg', titleKey: 'gallery.slides.spa_treatment.title', category: 'spa' },
  { key: 'home-22', imageUrl: '/images/spa/gallery/spa-3.jpg', titleKey: 'gallery.slides.relaxation.title', category: 'spa' },
  { key: 'home-13', imageUrl: '/images/sports/gym/gym-2.jpg', titleKey: 'gallery.slides.gym_equipment.title', category: 'fitness' },
  { key: 'home-14', imageUrl: '/images/sports/fight-club/fight-2.jpg', titleKey: 'gallery.slides.boxing.title', category: 'fitness' },
  { key: 'home-15', imageUrl: '/images/banya/gallery/banya-hot-stones.jpg', titleKey: 'gallery.slides.hot_stones.title', category: 'banya' },
  { key: 'home-16', imageUrl: '/images/banya/gallery/banya-tea-ceremony.jpg', titleKey: 'gallery.slides.tea_ceremony.title', category: 'banya' },
  { key: 'home-19', imageUrl: '/images/banya/gallery/banya-lounge.jpg', titleKey: 'gallery.slides.banya_lounge.title', category: 'banya' },
  { key: 'home-20', imageUrl: '/images/banya/gallery/banya-steam-room1.jpg', titleKey: 'gallery.slides.steam_ritual.title', category: 'banya' },
  { key: 'home-17', imageUrl: '/images/restaurant/restaurant.jpg', titleKey: 'gallery.slides.restaurant.title', category: 'relax' },
  { key: 'home-18', imageUrl: '/images/beauty/services/facial.jpg', titleKey: 'gallery.slides.smoking_area.title', category: 'relax' },
]

const BANYA_GALLERY = [
  { key: 'banya-1', imageUrl: '/images/banya/gallery/banya-steam-room.jpg', titleKey: 'banya.gallery.steam_room', fallback: 'Steam Room' },
  { key: 'banya-2', imageUrl: '/images/banya/gallery/banya-rest-area.jpg', titleKey: 'banya.gallery.rest_area', fallback: 'Rest Area' },
  { key: 'banya-3', imageUrl: '/images/banya/gallery/banya-cold-pool.jpg', titleKey: 'banya.gallery.cold_pool', fallback: 'Cold Pool' },
  { key: 'banya-4', imageUrl: '/images/banya/gallery/banya-hot-stones.jpg', titleKey: 'banya.gallery.hot_stones', fallback: 'Hot Stones' },
  { key: 'banya-5', imageUrl: '/images/banya/gallery/banya-tea-ceremony.jpg', titleKey: 'banya.gallery.tea_ceremony', fallback: 'Tea Ceremony' },
  { key: 'banya-6', imageUrl: '/images/banya/gallery/banya-lounge.jpg', titleKey: 'banya.gallery.lounge', fallback: 'Lounge' },
]

async function seed() {
  const en = readLocale('en')
  const ru = readLocale('ru')
  const th = readLocale('th')

  const docs = []

  HOME_GALLERY.forEach((item, index) => {
    docs.push({
      _id: `galleryImage-${item.key}`,
      _type: 'galleryImage',
      key: item.key,
      gallery: 'home',
      category: item.category,
      title: localeTriple(
        pick(en, item.titleKey, item.titleKey),
        pick(ru, item.titleKey),
        pick(th, item.titleKey)
      ),
      imageUrl: item.imageUrl,
      position: item.position || '',
      sortOrder: index,
      active: true,
    })
  })

  BANYA_GALLERY.forEach((item, index) => {
    docs.push({
      _id: `galleryImage-${item.key}`,
      _type: 'galleryImage',
      key: item.key,
      gallery: 'banya',
      title: localeTriple(
        pick(en, item.titleKey, item.fallback),
        pick(ru, item.titleKey, item.fallback),
        pick(th, item.titleKey, item.fallback)
      ),
      imageUrl: item.imageUrl,
      sortOrder: index,
      active: true,
    })
  })

  for (let i = 1; i <= 9; i++) {
    docs.push({
      _id: `galleryImage-spa-${i}`,
      _type: 'galleryImage',
      key: `spa-${i}`,
      gallery: 'spa',
      title: localeTriple(`SPA ${i}`, `SPA ${i}`, `SPA ${i}`),
      imageUrl: `/images/spa/gallery/spa-${i}.jpg`,
      sortOrder: i - 1,
      active: true,
    })
  }

  docs.push({
    _id: 'siteFile-restaurantMenu',
    _type: 'siteFile',
    key: 'restaurantMenu',
    title: 'เมนูร้านอาหาร (PDF)',
    fileUrl: '/documents/menu.pdf',
  })

  console.log('Seeding gallery + PDF…')
  await commitBatches(docs, 'media')
  console.log(`Done: ${docs.length} docs (galleries + menu PDF).`)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
