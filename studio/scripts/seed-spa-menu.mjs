/**
 * Seed Spa services + Restaurant menu from current website data + locale files.
 *
 * Requires studio/.env with PROJECT_ID + SANITY_API_WRITE_TOKEN
 * Run: npm run seed:menu  (from studio/)
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
  const text = readFileSync(envPath, 'utf8')
  for (const line of text.split('\n')) {
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
  console.error('Set SANITY_API_WRITE_TOKEN in studio/.env (Editor token from Sanity manage).')
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

async function seed() {
  const { getSpaData } = await import(
    pathToFileURL(resolve(root, 'src/components/spa/data/spaData.js')).href
  )
  const { getRestaurantData } = await import(
    pathToFileURL(
      resolve(root, 'src/components/Restaurant/data/restaurantData.js')
    ).href
  )

  const en = readLocale('en')
  const ru = readLocale('ru')
  const th = readLocale('th')

  const spaEn = getSpaData(makeT(en))
  const spaRu = getSpaData(makeT(ru))
  const spaTh = getSpaData(makeT(th))

  const restEn = getRestaurantData(makeT(en))
  const restRu = getRestaurantData(makeT(ru))
  const restTh = getRestaurantData(makeT(th))

  const spaByIdRu = Object.fromEntries(spaRu.allServices.map((s) => [s.id, s]))
  const spaByIdTh = Object.fromEntries(spaTh.allServices.map((s) => [s.id, s]))
  const catRu = Object.fromEntries(spaRu.serviceCategories.map((c) => [c.id, c]))
  const catTh = Object.fromEntries(spaTh.serviceCategories.map((c) => [c.id, c]))

  const spaCategories = spaEn.serviceCategories.map((cat, index) => ({
    _id: `spaCategory-${cat.id}`,
    _type: 'spaCategory',
    key: cat.id,
    name: localeTriple(cat.name, catRu[cat.id]?.name, catTh[cat.id]?.name),
    description: localeTriple(
      cat.description,
      catRu[cat.id]?.description,
      catTh[cat.id]?.description
    ),
    color: cat.color || '',
    sortOrder: index,
    active: true,
  }))

  const spaServices = spaEn.allServices.map((svc, index) => {
    const doc = {
      _id: `spaService-${svc.id}`,
      _type: 'spaService',
      key: svc.id,
      name: localeTriple(
        svc.name,
        spaByIdRu[svc.id]?.name,
        spaByIdTh[svc.id]?.name
      ),
      description: localeTriple(
        svc.description,
        spaByIdRu[svc.id]?.description,
        spaByIdTh[svc.id]?.description
      ),
      category: svc.category,
      popular: Boolean(svc.popular),
      imageUrl: svc.image || '',
      sortOrder: index,
      active: true,
    }
    if (Array.isArray(svc.durations) && svc.durations.length) {
      doc.durations = svc.durations
      doc.prices = svc.prices || []
    } else if (svc.price != null) {
      doc.price = svc.price
    } else if (svc.priceFrom != null) {
      doc.price = svc.priceFrom
    }
    return doc
  })

  const menuRu = Object.fromEntries(restRu.menuItems.map((m) => [String(m.id), m]))
  const menuTh = Object.fromEntries(restTh.menuItems.map((m) => [String(m.id), m]))
  const mCatRu = Object.fromEntries(restRu.categoryCards.map((c) => [c.key, c]))
  const mCatTh = Object.fromEntries(restTh.categoryCards.map((c) => [c.key, c]))

  const menuCategories = restEn.categoryCards.map((cat, index) => ({
    _id: `menuCategory-${cat.key}`,
    _type: 'menuCategory',
    key: cat.key,
    name: localeTriple(cat.name, mCatRu[cat.key]?.name, mCatTh[cat.key]?.name),
    description: localeTriple(
      cat.description,
      mCatRu[cat.key]?.description,
      mCatTh[cat.key]?.description
    ),
    number: cat.number || String(index + 1).padStart(2, '0'),
    imageUrl: cat.image || '',
    sortOrder: index,
    active: true,
  }))

  const menuItems = restEn.menuItems.map((item, index) => {
    const id = String(item.id)
    return {
      _id: `menuItem-${id}`,
      _type: 'menuItem',
      key: id,
      name: localeTriple(item.name, menuRu[id]?.name, menuTh[id]?.name),
      description: localeTriple(
        item.description,
        menuRu[id]?.description,
        menuTh[id]?.description
      ),
      price: parsePrice(item.price),
      category: item.category,
      tags: item.tags || [],
      popular: Boolean(item.popular),
      imageUrl: item.image || '',
      sortOrder: index,
      active: true,
    }
  })

  console.log('Seeding spa categories…')
  await commitBatches(spaCategories, 'spaCategory')
  console.log('Seeding spa services…')
  await commitBatches(spaServices, 'spaService')
  console.log('Seeding menu categories…')
  await commitBatches(menuCategories, 'menuCategory')
  console.log('Seeding menu items…')
  await commitBatches(menuItems, 'menuItem')

  console.log(
    `Done: ${spaCategories.length} spa cats, ${spaServices.length} spa services, ${menuCategories.length} menu cats, ${menuItems.length} dishes.`
  )
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
