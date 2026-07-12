// Events helpers — list data comes from Sanity via CmsContext.
// This module keeps sorting / localization utilities + empty fallback list.

const MONTHS = { JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11 }

export const getEventStart = (event) => {
  const firstDay = parseInt(String(event.date?.day ?? '').split(/[–-]/)[0], 10)
  const fullText =
    typeof event.date?.full === 'object' && event.date.full !== null
      ? (event.date.full.en ?? Object.values(event.date.full)[0] ?? '')
      : event.date?.full
  const yearMatch = String(fullText || '').match(/\d{4}/)
  const year = yearMatch ? parseInt(yearMatch[0], 10) : new Date().getFullYear()
  const month = MONTHS[String(event.date?.month || '').toUpperCase()] ?? 0
  return new Date(year, month, Number.isFinite(firstDay) ? firstDay : 1)
}

/** Static fallback when CMS is unavailable (empty by design — staff add events in Studio) */
export const events = []

export const sortEvents = (list) =>
  [...(list || [])].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    if (a.recurring && !b.recurring) return 1
    if (!a.recurring && b.recurring) return -1
    if (a.recurring && b.recurring) return 0
    return getEventStart(a) - getEventStart(b)
  })

const pickLang = (value, lang) => {
  if (value == null || typeof value !== 'object' || Array.isArray(value)) return value
  if (!('en' in value) && !('ru' in value) && !('th' in value)) return value
  return value[lang] ?? value.en ?? Object.values(value)[0]
}

export const localizeEvent = (event, lang = 'en') => {
  if (!event) return event
  return {
    ...event,
    title: pickLang(event.title, lang),
    hook: pickLang(event.hook, lang),
    location: pickLang(event.location, lang),
    shortDescription: pickLang(event.shortDescription, lang),
    longDescription: pickLang(event.longDescription, lang),
    whatsappMessage: pickLang(event.whatsappMessage, lang),
    date: event.date
      ? { ...event.date, full: pickLang(event.date.full, lang) }
      : event.date,
    schedule: event.schedule?.map((item) => ({
      date: pickLang(item.date, lang),
      title: pickLang(item.title, lang),
      description: pickLang(item.description, lang),
    })),
  }
}

export const getEventBookingLink = (event, whatsapp = '66624805877') => {
  const message =
    typeof event?.whatsappMessage === 'object'
      ? pickLang(event.whatsappMessage, 'en')
      : event?.whatsappMessage || ''
  return `https://wa.me/${String(whatsapp).replace(/\D/g, '')}?text=${encodeURIComponent(message || '')}`
}

export const getEventBySlug = (slug, list = events) =>
  (list || []).find((e) => e.slug === slug)
