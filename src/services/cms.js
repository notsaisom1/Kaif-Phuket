import { sanityClient, isSanityConfigured, urlForImage } from './sanity'
import {
  FALLBACK_SITE_SETTINGS,
  FALLBACK_PROMOTIONS,
  pickLocale,
} from '../data/cmsFallbacks'
import {
  mapSpaService,
  mapSpaCategory,
  mapMenuItem,
  mapMenuCategory,
  mapBarItem,
  mapBarCategory,
  mapMembershipPlan,
  mapBanyaRitual,
  mapFaqItem,
  mapPageCopy,
} from './catalogMaps'

const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  phoneDisplay,
  phoneTel,
  whatsapp,
  address,
  addressCountry,
  mapsUrl,
  hoursOpen,
  hoursClose,
  hoursLabel,
  instagram,
  facebook,
  telegram,
  youtube
}`

const EVENTS_QUERY = `*[_type == "event" && published != false] | order(featured desc, dateMonth asc){
  "slug": slug.current,
  title,
  hook,
  shortDescription,
  longDescription,
  location,
  image,
  "dateDay": dateDay,
  "dateMonth": dateMonth,
  "dateFull": dateFull,
  featured,
  recurring,
  whatsappMessage,
  schedule
}`

const PROMOTIONS_QUERY = `*[_type == "promotion" && active != false] | order(dayIndex asc){
  "id": key,
  dayOfWeek,
  dayIndex,
  title,
  subtitle,
  description,
  image,
  imageUrl,
  color
}`

const SITE_IMAGES_QUERY = `*[_type == "siteImage"]{
  key,
  title,
  image,
  alt
}`

const SPA_SERVICES_QUERY = `*[_type == "spaService" && active != false] | order(sortOrder asc){
  key,
  name,
  description,
  category,
  durations,
  prices,
  price,
  popular,
  image,
  imageUrl,
  sortOrder
}`

const SPA_CATEGORIES_QUERY = `*[_type == "spaCategory" && active != false] | order(sortOrder asc){
  key,
  name,
  description,
  color,
  sortOrder
}`

const MENU_ITEMS_QUERY = `*[_type == "menuItem" && active != false] | order(sortOrder asc){
  key,
  name,
  description,
  price,
  category,
  tags,
  popular,
  image,
  imageUrl,
  sortOrder
}`

const MENU_CATEGORIES_QUERY = `*[_type == "menuCategory" && active != false] | order(sortOrder asc){
  key,
  name,
  description,
  number,
  image,
  imageUrl,
  sortOrder
}`

const BAR_ITEMS_QUERY = `*[_type == "barItem" && active != false] | order(sortOrder asc){
  key,
  name,
  description,
  price,
  category,
  sortOrder
}`

const BAR_CATEGORIES_QUERY = `*[_type == "barCategory" && active != false] | order(sortOrder asc){
  key,
  name,
  description,
  number,
  sortOrder
}`

const MEMBERSHIP_PLANS_QUERY = `*[_type == "membershipPlan" && active != false] | order(sortOrder asc){
  key,
  groupKey,
  groupLabel,
  name,
  overline,
  price,
  perMonth,
  features,
  popular,
  sortOrder
}`

const BANYA_RITUALS_QUERY = `*[_type == "banyaRitual" && active != false] | order(sortOrder asc){
  key,
  groupKey,
  title,
  subtitle,
  duration,
  price,
  description,
  sortOrder
}`

const FAQ_ITEMS_QUERY = `*[_type == "faqItem" && active != false] | order(sortOrder asc){
  key,
  page,
  question,
  answer,
  sortOrder
}`

const PAGE_COPY_QUERY = `*[_type == "pageCopy"]{
  key,
  overline,
  titlePart1,
  titlePart2,
  title,
  subtitle,
  location,
  cta
}`

function mapEvent(doc) {
  if (!doc) return null
  return {
    slug: doc.slug,
    title: doc.title,
    hook: doc.hook,
    shortDescription: doc.shortDescription,
    longDescription: doc.longDescription,
    location: doc.location,
    image: urlForImage(doc.image, { width: 1200 }) || '',
    date: {
      day: doc.dateDay,
      month: doc.dateMonth,
      full: doc.dateFull,
    },
    featured: Boolean(doc.featured),
    recurring: Boolean(doc.recurring),
    whatsappMessage: doc.whatsappMessage,
    schedule: doc.schedule || [],
  }
}

function mapPromotion(doc, lang = 'en') {
  if (!doc) return null
  const image =
    urlForImage(doc.image, { width: 800 }) ||
    doc.imageUrl ||
    '/images/promotions/monday.png'
  return {
    id: doc.id,
    dayOfWeek: doc.dayOfWeek,
    dayIndex: doc.dayIndex,
    title: pickLocale(doc.title, lang) || pickLocale(doc.title, 'en'),
    subtitle: pickLocale(doc.subtitle, lang) || pickLocale(doc.subtitle, 'en'),
    description:
      pickLocale(doc.description, lang) || pickLocale(doc.description, 'en'),
    titleLocale: doc.title,
    subtitleLocale: doc.subtitle,
    descriptionLocale: doc.description,
    image,
    color: doc.color || '#FFD700',
  }
}

export async function fetchSiteSettings() {
  if (!isSanityConfigured || !sanityClient) {
    return { ...FALLBACK_SITE_SETTINGS, _source: 'fallback' }
  }
  try {
    const data = await sanityClient.fetch(SITE_SETTINGS_QUERY)
    if (!data) {
      return { ...FALLBACK_SITE_SETTINGS, _source: 'fallback' }
    }
    return {
      ...FALLBACK_SITE_SETTINGS,
      ...data,
      address: data.address || FALLBACK_SITE_SETTINGS.address,
      addressCountry: data.addressCountry || FALLBACK_SITE_SETTINGS.addressCountry,
      hoursLabel: data.hoursLabel || FALLBACK_SITE_SETTINGS.hoursLabel,
      _source: 'sanity',
    }
  } catch (err) {
    console.warn('[cms] siteSettings fetch failed, using fallback', err)
    return { ...FALLBACK_SITE_SETTINGS, _source: 'fallback' }
  }
}

export async function fetchEvents() {
  if (!isSanityConfigured || !sanityClient) {
    return []
  }
  try {
    const docs = await sanityClient.fetch(EVENTS_QUERY)
    return (docs || []).map(mapEvent).filter(Boolean)
  } catch (err) {
    console.warn('[cms] events fetch failed', err)
    return []
  }
}

export async function fetchPromotions(lang = 'en') {
  if (!isSanityConfigured || !sanityClient) {
    return FALLBACK_PROMOTIONS.map((p) => ({ ...p }))
  }
  try {
    const docs = await sanityClient.fetch(PROMOTIONS_QUERY)
    if (!docs?.length) {
      return FALLBACK_PROMOTIONS.map((p) => ({ ...p }))
    }
    return docs.map((d) => mapPromotion(d, lang)).filter(Boolean)
  } catch (err) {
    console.warn('[cms] promotions fetch failed, using fallback', err)
    return FALLBACK_PROMOTIONS.map((p) => ({ ...p }))
  }
}

export async function fetchSiteImages() {
  if (!isSanityConfigured || !sanityClient) {
    return {}
  }
  try {
    const docs = await sanityClient.fetch(SITE_IMAGES_QUERY)
    const map = {}
    for (const doc of docs || []) {
      if (!doc?.key) continue
      map[doc.key] = {
        url: urlForImage(doc.image, { width: 1920 }),
        alt: doc.alt,
        title: doc.title,
      }
    }
    return map
  } catch (err) {
    console.warn('[cms] siteImages fetch failed', err)
    return {}
  }
}

export async function fetchSpaCatalog(lang = 'en') {
  if (!isSanityConfigured || !sanityClient) {
    return { services: [], categories: [], _source: 'fallback' }
  }
  try {
    const [services, categories] = await Promise.all([
      sanityClient.fetch(SPA_SERVICES_QUERY),
      sanityClient.fetch(SPA_CATEGORIES_QUERY),
    ])
    if (!services?.length) {
      return { services: [], categories: [], _source: 'fallback' }
    }
    return {
      services: services.map((d) => mapSpaService(d, lang)).filter(Boolean),
      categories: (categories || [])
        .map((d) => mapSpaCategory(d, lang))
        .filter(Boolean),
      _source: 'sanity',
    }
  } catch (err) {
    console.warn('[cms] spa catalog fetch failed', err)
    return { services: [], categories: [], _source: 'fallback' }
  }
}

export async function fetchMenuCatalog(lang = 'en') {
  if (!isSanityConfigured || !sanityClient) {
    return { items: [], categories: [], _source: 'fallback' }
  }
  try {
    const [items, categories] = await Promise.all([
      sanityClient.fetch(MENU_ITEMS_QUERY),
      sanityClient.fetch(MENU_CATEGORIES_QUERY),
    ])
    if (!items?.length) {
      return { items: [], categories: [], _source: 'fallback' }
    }
    return {
      items: items.map((d) => mapMenuItem(d, lang)).filter(Boolean),
      categories: (categories || [])
        .map((d) => mapMenuCategory(d, lang))
        .filter(Boolean),
      _source: 'sanity',
    }
  } catch (err) {
    console.warn('[cms] menu catalog fetch failed', err)
    return { items: [], categories: [], _source: 'fallback' }
  }
}

export async function fetchBarCatalog(lang = 'en') {
  if (!isSanityConfigured || !sanityClient) {
    return { items: [], categories: [], _source: 'fallback' }
  }
  try {
    const [items, categories] = await Promise.all([
      sanityClient.fetch(BAR_ITEMS_QUERY),
      sanityClient.fetch(BAR_CATEGORIES_QUERY),
    ])
    if (!items?.length) {
      return { items: [], categories: [], _source: 'fallback' }
    }
    return {
      items: items.map((d) => mapBarItem(d, lang)).filter(Boolean),
      categories: (categories || [])
        .map((d) => mapBarCategory(d, lang))
        .filter(Boolean),
      _source: 'sanity',
    }
  } catch (err) {
    console.warn('[cms] bar catalog fetch failed', err)
    return { items: [], categories: [], _source: 'fallback' }
  }
}

export async function fetchMembershipPlans(lang = 'en') {
  if (!isSanityConfigured || !sanityClient) {
    return { plans: [], _source: 'fallback' }
  }
  try {
    const docs = await sanityClient.fetch(MEMBERSHIP_PLANS_QUERY)
    if (!docs?.length) {
      return { plans: [], _source: 'fallback' }
    }
    return {
      plans: docs.map((d) => mapMembershipPlan(d, lang)).filter(Boolean),
      _source: 'sanity',
    }
  } catch (err) {
    console.warn('[cms] membership plans fetch failed', err)
    return { plans: [], _source: 'fallback' }
  }
}

export async function fetchBanyaRituals(lang = 'en') {
  if (!isSanityConfigured || !sanityClient) {
    return { rituals: [], _source: 'fallback' }
  }
  try {
    const docs = await sanityClient.fetch(BANYA_RITUALS_QUERY)
    if (!docs?.length) {
      return { rituals: [], _source: 'fallback' }
    }
    return {
      rituals: docs.map((d) => mapBanyaRitual(d, lang)).filter(Boolean),
      _source: 'sanity',
    }
  } catch (err) {
    console.warn('[cms] banya rituals fetch failed', err)
    return { rituals: [], _source: 'fallback' }
  }
}

export async function fetchFaqItems(lang = 'en') {
  if (!isSanityConfigured || !sanityClient) {
    return { items: [], _source: 'fallback' }
  }
  try {
    const docs = await sanityClient.fetch(FAQ_ITEMS_QUERY)
    if (!docs?.length) {
      return { items: [], _source: 'fallback' }
    }
    return {
      items: docs.map((d) => mapFaqItem(d, lang)).filter(Boolean),
      _source: 'sanity',
    }
  } catch (err) {
    console.warn('[cms] faq items fetch failed', err)
    return { items: [], _source: 'fallback' }
  }
}

export async function fetchPageCopy(lang = 'en') {
  if (!isSanityConfigured || !sanityClient) {
    return { byKey: {}, _source: 'fallback' }
  }
  try {
    const docs = await sanityClient.fetch(PAGE_COPY_QUERY)
    const byKey = {}
    for (const doc of docs || []) {
      const mapped = mapPageCopy(doc, lang)
      if (mapped?.key) byKey[mapped.key] = mapped
    }
    return {
      byKey,
      _source: Object.keys(byKey).length ? 'sanity' : 'fallback',
    }
  } catch (err) {
    console.warn('[cms] page copy fetch failed', err)
    return { byKey: {}, _source: 'fallback' }
  }
}
