/**
 * Seed banya rituals + FAQ + page hero/FAQ headings into Sanity.
 * Run: npm run seed:copy  (from studio/)
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
  console.error('Need SANITY_STUDIO_PROJECT_ID + SANITY_API_WRITE_TOKEN in studio/.env')
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

function parsePrice(str) {
  if (typeof str === 'number') return str
  const n = parseInt(String(str || '').replace(/[^\d]/g, ''), 10)
  return Number.isFinite(n) ? n : 0
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

const RITUAL_META = [
  { key: 'intro', groupKey: 'classic' },
  { key: 'lady', groupKey: 'classic' },
  { key: 'classic', groupKey: 'classic' },
  { key: 'artesian', groupKey: 'intense' },
  { key: 'gravity', groupKey: 'intense' },
  { key: 'salt_fire', groupKey: 'intense' },
  { key: 'warrior_path', groupKey: 'intense' },
  { key: 'stalwar', groupKey: 'intense' },
  { key: 'sports', groupKey: 'signature' },
  { key: 'four_hands', groupKey: 'signature' },
  { key: 'honey', groupKey: 'signature' },
  { key: 'valhalla', groupKey: 'signature' },
  { key: 'royal', groupKey: 'signature' },
]

const FAQ_DEFS = [
  { page: 'home', keys: ['what_includes', 'working_hours', 'how_to_book', 'memberships', 'experience_needed', 'payment_methods'], path: 'faq.questions' },
  { page: 'banya', keys: ['panoramic', 'procedures', 'materials'], path: 'banya.faq.questions' },
  { page: 'spa', keys: ['services', 'booking', 'policy', 'payment', 'preparation', 'gifts'], path: 'spa.faq.questions' },
]

function stripHtml(s) {
  return String(s || '').replace(/<[^>]+>/g, '').trim()
}

async function seed() {
  const en = readLocale('en')
  const ru = readLocale('ru')
  const th = readLocale('th')

  const rituals = RITUAL_META.map((meta, index) => {
    const base = `banya.services.rituals.${meta.key}`
    return {
      _id: `banyaRitual-${meta.key}`,
      _type: 'banyaRitual',
      key: meta.key,
      groupKey: meta.groupKey,
      title: localeTriple(
        pick(en, `${base}.title`),
        pick(ru, `${base}.title`),
        pick(th, `${base}.title`)
      ),
      subtitle: localeTriple(
        pick(en, `${base}.subtitle`),
        pick(ru, `${base}.subtitle`),
        pick(th, `${base}.subtitle`)
      ),
      duration: localeTriple(
        pick(en, `${base}.duration`),
        pick(ru, `${base}.duration`),
        pick(th, `${base}.duration`)
      ),
      price: parsePrice(pick(en, `${base}.price`)),
      description: localeTriple(
        pick(en, `${base}.description`),
        pick(ru, `${base}.description`),
        pick(th, `${base}.description`)
      ),
      sortOrder: index,
      active: true,
    }
  })

  const faqs = []
  for (const def of FAQ_DEFS) {
    def.keys.forEach((k, index) => {
      faqs.push({
        _id: `faqItem-${def.page}-${k}`,
        _type: 'faqItem',
        key: k,
        page: def.page,
        question: localeTriple(
          pick(en, `${def.path}.${k}.question`),
          pick(ru, `${def.path}.${k}.question`),
          pick(th, `${def.path}.${k}.question`)
        ),
        answer: localeTriple(
          pick(en, `${def.path}.${k}.answer`),
          pick(ru, `${def.path}.${k}.answer`),
          pick(th, `${def.path}.${k}.answer`)
        ),
        sortOrder: index,
        active: true,
      })
    })
  }

  const pageCopies = [
    {
      _id: 'pageCopy-home.hero',
      _type: 'pageCopy',
      key: 'home.hero',
      titlePart1: localeTriple(pick(en, 'home.hero.word1'), pick(ru, 'home.hero.word1'), pick(th, 'home.hero.word1')),
      titlePart2: localeTriple(pick(en, 'home.hero.word2'), pick(ru, 'home.hero.word2'), pick(th, 'home.hero.word2')),
      title: localeTriple(pick(en, 'home.hero.word3'), pick(ru, 'home.hero.word3'), pick(th, 'home.hero.word3')),
      subtitle: localeTriple(pick(en, 'home.hero.subtitle'), pick(ru, 'home.hero.subtitle'), pick(th, 'home.hero.subtitle')),
      overline: localeTriple(pick(en, 'home.hero.overline'), pick(ru, 'home.hero.overline'), pick(th, 'home.hero.overline')),
      location: localeTriple(pick(en, 'home.hero.location'), pick(ru, 'home.hero.location'), pick(th, 'home.hero.location')),
      cta: localeTriple(pick(en, 'home.hero.bookNow'), pick(ru, 'home.hero.bookNow'), pick(th, 'home.hero.bookNow')),
    },
    {
      _id: 'pageCopy-home.faq',
      _type: 'pageCopy',
      key: 'home.faq',
      overline: localeTriple(pick(en, 'faq.badge'), pick(ru, 'faq.badge'), pick(th, 'faq.badge')),
      title: localeTriple(stripHtml(pick(en, 'faq.title')), stripHtml(pick(ru, 'faq.title')), stripHtml(pick(th, 'faq.title'))),
      subtitle: localeTriple(pick(en, 'faq.subtitle'), pick(ru, 'faq.subtitle'), pick(th, 'faq.subtitle')),
    },
    {
      _id: 'pageCopy-banya.hero',
      _type: 'pageCopy',
      key: 'banya.hero',
      titlePart1: localeTriple(pick(en, 'banya.hero.title_part1', 'Russian'), pick(ru, 'banya.hero.title_part1'), pick(th, 'banya.hero.title_part1')),
      titlePart2: localeTriple(pick(en, 'banya.hero.title_part2', 'Banya'), pick(ru, 'banya.hero.title_part2'), pick(th, 'banya.hero.title_part2')),
      location: localeTriple(pick(en, 'banya.hero.location', 'Phuket'), pick(ru, 'banya.hero.location'), pick(th, 'banya.hero.location')),
    },
    {
      _id: 'pageCopy-banya.faq',
      _type: 'pageCopy',
      key: 'banya.faq',
      overline: localeTriple(pick(en, 'banya.faq.badge'), pick(ru, 'banya.faq.badge'), pick(th, 'banya.faq.badge')),
      title: localeTriple(
        stripHtml(pick(en, 'banya.faq.title_plain') || pick(en, 'banya.faq.title')),
        stripHtml(pick(ru, 'banya.faq.title_plain') || pick(ru, 'banya.faq.title')),
        stripHtml(pick(th, 'banya.faq.title_plain') || pick(th, 'banya.faq.title'))
      ),
      subtitle: localeTriple(pick(en, 'banya.faq.subtitle'), pick(ru, 'banya.faq.subtitle'), pick(th, 'banya.faq.subtitle')),
    },
    {
      _id: 'pageCopy-spa.hero',
      _type: 'pageCopy',
      key: 'spa.hero',
      titlePart1: localeTriple(pick(en, 'spa.hero.title_part1', 'SPA'), pick(ru, 'spa.hero.title_part1'), pick(th, 'spa.hero.title_part1')),
      titlePart2: localeTriple(pick(en, 'spa.hero.title_part2', '& Beauty'), pick(ru, 'spa.hero.title_part2'), pick(th, 'spa.hero.title_part2')),
      location: localeTriple(pick(en, 'spa.hero.location', 'Phuket'), pick(ru, 'spa.hero.location'), pick(th, 'spa.hero.location')),
    },
    {
      _id: 'pageCopy-spa.faq',
      _type: 'pageCopy',
      key: 'spa.faq',
      overline: localeTriple(pick(en, 'spa.faq.badge'), pick(ru, 'spa.faq.badge'), pick(th, 'spa.faq.badge')),
      title: localeTriple(pick(en, 'spa.faq.title'), pick(ru, 'spa.faq.title'), pick(th, 'spa.faq.title')),
      subtitle: localeTriple(pick(en, 'spa.faq.subtitle'), pick(ru, 'spa.faq.subtitle'), pick(th, 'spa.faq.subtitle')),
    },
    {
      _id: 'pageCopy-restaurant.hero',
      _type: 'pageCopy',
      key: 'restaurant.hero',
      titlePart1: localeTriple(pick(en, 'restaurant.hero.title_line1', 'Restaurant'), pick(ru, 'restaurant.hero.title_line1'), pick(th, 'restaurant.hero.title_line1')),
      location: localeTriple(pick(en, 'restaurant.hero.location', 'Phuket'), pick(ru, 'restaurant.hero.location'), pick(th, 'restaurant.hero.location')),
    },
    {
      _id: 'pageCopy-sports.hero',
      _type: 'pageCopy',
      key: 'sports.hero',
      titlePart1: localeTriple(pick(en, 'sports.hero.title', 'Sports'), pick(ru, 'sports.hero.title'), pick(th, 'sports.hero.title')),
      location: localeTriple(pick(en, 'sports.hero.location', 'Phuket'), pick(ru, 'sports.hero.location'), pick(th, 'sports.hero.location')),
    },
    {
      _id: 'pageCopy-contacts.hero',
      _type: 'pageCopy',
      key: 'contacts.hero',
      titlePart1: localeTriple(pick(en, 'contacts.hero.title', 'Contacts'), pick(ru, 'contacts.hero.title'), pick(th, 'contacts.hero.title')),
      location: localeTriple(pick(en, 'contacts.hero.location', 'Phuket'), pick(ru, 'contacts.hero.location'), pick(th, 'contacts.hero.location')),
    },
  ]

  console.log('Seeding banya rituals…')
  await commitBatches(rituals, 'banyaRitual')
  console.log('Seeding FAQ items…')
  await commitBatches(faqs, 'faqItem')
  console.log('Seeding page copy…')
  await commitBatches(pageCopies, 'pageCopy')

  console.log(
    `Done: ${rituals.length} rituals, ${faqs.length} FAQs, ${pageCopies.length} page copy blocks.`
  )
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
