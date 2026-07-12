import { sanityClient, isSanityConfigured, urlForImage } from './sanity'
import {
  FALLBACK_SITE_SETTINGS,
  FALLBACK_PROMOTIONS,
  pickLocale,
} from '../data/cmsFallbacks'

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
    // Keep locale objects for consumers that want to re-localize
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
