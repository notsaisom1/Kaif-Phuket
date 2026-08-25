/**
 * Seed bar menu + membership/sports plans into Sanity.
 * Run from studio/: npm run seed:bar
 */
import { createClient } from '@sanity/client'
import { readFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

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

if (!projectId || projectId === 'your_project_id_here' || projectId === 'YOUR_PROJECT_ID') {
  console.error('Set SANITY_STUDIO_PROJECT_ID in studio/.env first.')
  process.exit(1)
}
if (!token) {
  console.error('Set SANITY_API_WRITE_TOKEN in studio/.env')
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

function makeT(dict) {
  return (key, fallback) => {
    const parts = key.split('.')
    let cur = dict
    for (const p of parts) cur = cur?.[p]
    return typeof cur === 'string' ? cur : fallback ?? key
  }
}

function localeTriple(enVal, ruVal, thVal) {
  return { en: enVal || '', ru: ruVal || '', th: thVal || '' }
}

function parsePrice(priceStr) {
  if (typeof priceStr === 'number') return priceStr
  if (!priceStr) return 0
  const n = parseInt(String(priceStr).replace(/[^\d]/g, ''), 10)
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

/** Membership catalog: prices + i18n keys resolved at seed time */
function buildMembershipPlans(tEn, tRu, tTh) {
  const F = {
    gym: 'pricing.features.gymCardio',
    pool: 'pricing.features.swimmingPool',
    steam: 'pricing.features.steamRoom',
    ice: 'pricing.features.iceBarrel',
    groupSteam: 'pricing.features.groupSteamIncluded',
    towels: 'pricing.features.towelsIncluded',
    unlimited: 'pricing.features.unlimitedAccess',
    gymBanya: 'pricing.features.gymAndBanya',
    dance: 'pricing.features.unlimitedDanceAndFight',
    individual: 'pricing.features.individualApproach',
    instructor: 'pricing.features.certifiedInstructor',
    perClass: 'pricing.features.perClass',
    valid2: 'pricing.features.validMonths_2',
    valid3: 'pricing.features.validMonths_3',
    program: 'pricing.features.trainingProgram',
    fullProgram: 'pricing.features.fullProgram',
    savings: 'pricing.features.savings',
    maxSavings: 'pricing.features.maxSavings',
    fullDay: 'pricing.durations.fullDay',
    week: 'pricing.durations.week',
    month: 'pricing.durations.month',
    m3: 'pricing.durations.months_3',
    m6: 'pricing.durations.months_6',
    m12: 'pricing.durations.months_12',
    single: 'pricing.durations.single',
    c8: 'pricing.durations.classes_8',
    c12: 'pricing.durations.classes_12',
    dayPass: 'pricing.categories.dayPass',
    swimming: 'pricing.categories.swimming',
  }

  const feat = (keysOrFns) => {
    return keysOrFns.map((item) => {
      if (typeof item === 'function') {
        return localeTriple(item(tEn), item(tRu), item(tTh))
      }
      return localeTriple(tEn(item), tRu(item), tTh(item))
    })
  }

  const plans = [
    {
      key: 'day-pass',
      groupKey: 'dayPass',
      groupLabel: localeTriple(tEn(F.dayPass, 'Day Pass'), tRu(F.dayPass, 'Day Pass'), tTh(F.dayPass, 'Day Pass')),
      name: localeTriple('Day Pass', 'Day Pass', 'Day Pass'),
      overline: localeTriple(tEn(F.fullDay, 'Full day'), tRu(F.fullDay), tTh(F.fullDay)),
      price: 590,
      popular: true,
      features: feat([F.gym, F.pool, F.steam, F.ice, F.groupSteam, F.towels]),
    },
    {
      key: 'week-pass',
      groupKey: 'dayPass',
      groupLabel: localeTriple(tEn(F.dayPass, 'Day Pass'), tRu(F.dayPass), tTh(F.dayPass)),
      name: localeTriple('1 Week Pass', '1 Week Pass', '1 Week Pass'),
      overline: localeTriple(tEn(F.week, '1 week'), tRu(F.week), tTh(F.week)),
      price: 1990,
      features: feat([F.gym, F.pool, F.steam, F.ice, F.groupSteam, F.towels]),
    },
    {
      key: 'ca-1m',
      groupKey: 'clubAccess',
      groupLabel: localeTriple('Club Access', 'Club Access', 'Club Access'),
      name: localeTriple('Club Access', 'Club Access', 'Club Access'),
      overline: localeTriple(tEn(F.month), tRu(F.month), tTh(F.month)),
      price: 2000,
      features: feat([F.gym, F.pool, F.steam, F.ice]),
    },
    {
      key: 'ca-3m',
      groupKey: 'clubAccess',
      groupLabel: localeTriple('Club Access', 'Club Access', 'Club Access'),
      name: localeTriple('Club Access', 'Club Access', 'Club Access'),
      overline: localeTriple(tEn(F.m3), tRu(F.m3), tTh(F.m3)),
      price: 4800,
      perMonth: '1,600 ฿/мес',
      features: feat([
        F.gym,
        F.pool,
        F.steam,
        (t) => `${t(F.savings, 'Savings')} 20%`,
      ]),
    },
    {
      key: 'ca-6m',
      groupKey: 'clubAccess',
      groupLabel: localeTriple('Club Access', 'Club Access', 'Club Access'),
      name: localeTriple('Club Access', 'Club Access', 'Club Access'),
      overline: localeTriple(tEn(F.m6), tRu(F.m6), tTh(F.m6)),
      price: 9900,
      perMonth: '1,650 ฿/мес',
      features: feat([
        F.gym,
        F.pool,
        F.steam,
        (t) => `${t(F.savings, 'Savings')} 17%`,
      ]),
    },
    {
      key: 'ca-12m',
      groupKey: 'clubAccess',
      groupLabel: localeTriple('Club Access', 'Club Access', 'Club Access'),
      name: localeTriple('Club Access', 'Club Access', 'Club Access'),
      overline: localeTriple(tEn(F.m12), tRu(F.m12), tTh(F.m12)),
      price: 18000,
      perMonth: '1,500 ฿/мес',
      popular: true,
      features: feat([
        F.gym,
        F.pool,
        F.steam,
        (t) => `${t(F.maxSavings, 'Max savings')} 25%`,
      ]),
    },
    {
      key: 'cap-1m',
      groupKey: 'premium',
      groupLabel: localeTriple('Club Access+', 'Club Access+', 'Club Access+'),
      name: localeTriple('Club Access+', 'Club Access+', 'Club Access+'),
      overline: localeTriple(tEn(F.month), tRu(F.month), tTh(F.month)),
      price: 3800,
      features: feat([F.unlimited, F.gymBanya, F.pool, F.groupSteam, F.towels]),
    },
    {
      key: 'cap-3m',
      groupKey: 'premium',
      groupLabel: localeTriple('Club Access+', 'Club Access+', 'Club Access+'),
      name: localeTriple('Club Access+', 'Club Access+', 'Club Access+'),
      overline: localeTriple(tEn(F.m3), tRu(F.m3), tTh(F.m3)),
      price: 9400,
      perMonth: '3,133 ฿/мес',
      features: feat([
        F.unlimited,
        F.gymBanya,
        F.groupSteam,
        (t) => `${t(F.savings)} 18%`,
      ]),
    },
    {
      key: 'cap-6m',
      groupKey: 'premium',
      groupLabel: localeTriple('Club Access+', 'Club Access+', 'Club Access+'),
      name: localeTriple('Club Access+', 'Club Access+', 'Club Access+'),
      overline: localeTriple(tEn(F.m6), tRu(F.m6), tTh(F.m6)),
      price: 17800,
      perMonth: '2,967 ฿/мес',
      features: feat([
        F.unlimited,
        F.gymBanya,
        F.groupSteam,
        (t) => `${t(F.savings)} 22%`,
      ]),
    },
    {
      key: 'cap-12m',
      groupKey: 'premium',
      groupLabel: localeTriple('Club Access+', 'Club Access+', 'Club Access+'),
      name: localeTriple('Club Access+', 'Club Access+', 'Club Access+'),
      overline: localeTriple(tEn(F.m12), tRu(F.m12), tTh(F.m12)),
      price: 29000,
      perMonth: '2,417 ฿/мес',
      popular: true,
      features: feat([
        F.unlimited,
        F.gymBanya,
        F.groupSteam,
        (t) => `${t(F.maxSavings)} 36%`,
      ]),
    },
    {
      key: 'cas-1m',
      groupKey: 'clubAccessSport',
      groupLabel: localeTriple(
        'Club Access Sport',
        'Club Access Sport',
        'Club Access Sport'
      ),
      name: localeTriple(
        'Club Access Sport',
        'Club Access Sport',
        'Club Access Sport'
      ),
      overline: localeTriple(tEn(F.month), tRu(F.month), tTh(F.month)),
      price: 4900,
      popular: true,
      features: feat([F.gym, F.pool, F.steam, F.ice, F.dance]),
    },
    {
      key: 'sw-1',
      groupKey: 'swimming',
      groupLabel: localeTriple(tEn(F.swimming), tRu(F.swimming), tTh(F.swimming)),
      name: localeTriple(tEn(F.swimming), tRu(F.swimming), tTh(F.swimming)),
      overline: localeTriple(tEn(F.single), tRu(F.single), tTh(F.single)),
      price: 800,
      features: feat([F.individual, F.instructor]),
    },
    {
      key: 'sw-8',
      groupKey: 'swimming',
      groupLabel: localeTriple(tEn(F.swimming), tRu(F.swimming), tTh(F.swimming)),
      name: localeTriple(tEn(F.swimming), tRu(F.swimming), tTh(F.swimming)),
      overline: localeTriple(tEn(F.c8), tRu(F.c8), tTh(F.c8)),
      price: 3800,
      features: feat([
        (t) => `475 ฿ ${t(F.perClass, 'per class')}`,
        F.valid2,
        F.program,
        (t) => `${t(F.savings)} 41%`,
      ]),
    },
    {
      key: 'sw-12',
      groupKey: 'swimming',
      groupLabel: localeTriple(tEn(F.swimming), tRu(F.swimming), tTh(F.swimming)),
      name: localeTriple(tEn(F.swimming), tRu(F.swimming), tTh(F.swimming)),
      overline: localeTriple(tEn(F.c12), tRu(F.c12), tTh(F.c12)),
      price: 5500,
      popular: true,
      features: feat([
        (t) => `458 ฿ ${t(F.perClass, 'per class')}`,
        F.valid3,
        F.fullProgram,
        (t) => `${t(F.savings)} 43%`,
      ]),
    },
  ]

  return plans.map((p, index) => ({
    _id: `membershipPlan-${p.key}`,
    _type: 'membershipPlan',
    key: p.key,
    groupKey: p.groupKey,
    groupLabel: p.groupLabel,
    name: p.name,
    overline: p.overline,
    price: p.price,
    perMonth: p.perMonth || '',
    features: p.features,
    popular: Boolean(p.popular),
    sortOrder: index,
    active: true,
  }))
}

async function seed() {
  const { getBarData } = await import(
    pathToFileURL(
      resolve(root, 'src/components/Restaurant/data/barData.js')
    ).href
  )

  const en = readLocale('en')
  const ru = readLocale('ru')
  const th = readLocale('th')
  const tEn = makeT(en)
  const tRu = makeT(ru)
  const tTh = makeT(th)

  const barEn = getBarData(tEn)
  const barRu = getBarData(tRu)
  const barTh = getBarData(tTh)
  const itemRu = Object.fromEntries(barRu.barItems.map((i) => [String(i.id), i]))
  const itemTh = Object.fromEntries(barTh.barItems.map((i) => [String(i.id), i]))
  const catRu = Object.fromEntries(barRu.barCategories.map((c) => [c.key, c]))
  const catTh = Object.fromEntries(barTh.barCategories.map((c) => [c.key, c]))

  const barCategories = barEn.barCategories.map((cat, index) => ({
    _id: `barCategory-${cat.key}`,
    _type: 'barCategory',
    key: cat.key,
    name: localeTriple(cat.name, catRu[cat.key]?.name, catTh[cat.key]?.name),
    description: localeTriple(
      cat.description,
      catRu[cat.key]?.description,
      catTh[cat.key]?.description
    ),
    number: cat.number || String(index + 1).padStart(2, '0'),
    sortOrder: index,
    active: true,
  }))

  const barItems = barEn.barItems.map((item, index) => {
    const id = String(item.id)
    return {
      _id: `barItem-${id}`,
      _type: 'barItem',
      key: id,
      name: localeTriple(item.name, itemRu[id]?.name, itemTh[id]?.name),
      description: localeTriple(
        item.description || '',
        itemRu[id]?.description || '',
        itemTh[id]?.description || ''
      ),
      price: parsePrice(item.price),
      category: item.category,
      sortOrder: index,
      active: true,
    }
  })

  const memberships = buildMembershipPlans(tEn, tRu, tTh)

  console.log('Seeding bar categories…')
  await commitBatches(barCategories, 'barCategory')
  console.log('Seeding bar items…')
  await commitBatches(barItems, 'barItem')
  console.log('Seeding membership plans…')
  await commitBatches(memberships, 'membershipPlan')

  console.log(
    `Done: ${barCategories.length} bar cats, ${barItems.length} drinks, ${memberships.length} membership plans.`
  )
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
