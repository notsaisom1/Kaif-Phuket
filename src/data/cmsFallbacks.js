/** Fallback content when Sanity is offline or not configured yet */

export const FALLBACK_ADDRESS =
  '73, Baan Chalekiri Village, 6 Pra Phuket Keaw Road, Kathu'

export const FALLBACK_SITE_SETTINGS = {
  phoneDisplay: '+66 62 480 5877',
  phoneTel: '+66624805877',
  whatsapp: '66624805877',
  address: {
    en: FALLBACK_ADDRESS,
    ru: FALLBACK_ADDRESS,
    th: FALLBACK_ADDRESS,
  },
  addressCountry: {
    en: 'Phuket, Thailand',
    ru: 'Пхукет, Таиланд',
    th: 'ภูเก็ต ประเทศไทย',
  },
  mapsUrl: 'https://maps.google.com/?q=73+Baan+Chalekiri+Village+Kathu+Phuket',
  hoursOpen: '07:00',
  hoursClose: '21:00',
  hoursLabel: {
    en: 'Daily: 07:00 – 21:00',
    ru: 'Ежедневно: 07:00 – 21:00',
    th: 'ทุกวัน: 07:00 – 21:00',
  },
  instagram: 'https://www.instagram.com/kaif.phuket/',
  facebook: 'https://web.facebook.com/kaifphuketfb',
  telegram: 'https://t.me/kaifphuketchat',
  youtube: 'https://www.youtube.com/@KaifPhuket',
}

export const FALLBACK_PROMOTIONS = [
  {
    id: 'monday',
    dayOfWeek: 'Monday',
    dayIndex: 1,
    title: 'Double KAIF',
    subtitle: '1+1 Day Pass',
    description:
      'Come with a friend, pay only for one! Applies only to "Day pass" tickets for area of complex',
    image: '/images/promotions/monday.png',
    color: '#FFD700',
  },
  {
    id: 'tuesday',
    dayOfWeek: 'Tuesday',
    dayIndex: 2,
    title: 'KAIF Plus',
    subtitle: 'Sauna + Massage Gift',
    description:
      'When you purchase a sauna subscription for 1 month, you will receive a Thai oil massage as a gift',
    image: '/images/promotions/tuesday.png',
    color: '#FF6B6B',
  },
  {
    id: 'wednesday',
    dayOfWeek: 'Wednesday',
    dayIndex: 3,
    title: 'KAIF for Subscribers',
    subtitle: 'Member Exclusive',
    description:
      'Exclusive for subscription holders: massage -50% for club members',
    image: '/images/promotions/wednesday.png',
    color: '#4ECDC4',
  },
  {
    id: 'thursday',
    dayOfWeek: 'Thursday',
    dayIndex: 4,
    title: 'Private Steaming',
    subtitle: 'Half Price Sessions',
    description: 'Individual steaming sessions with brooms -50% for everyone',
    image: '/images/promotions/thursday.png',
    color: '#95E1D3',
  },
  {
    id: 'friday',
    dayOfWeek: 'Friday',
    dayIndex: 5,
    title: 'Lady KAIF',
    subtitle: 'Ladies Free Until 16:00',
    description: 'Admission for ladies is free until 16:00',
    image: '/images/promotions/friday.png',
    color: '#F38181',
  },
]

/** Digits-only WhatsApp id for wa.me links */
export function normalizeWhatsApp(value) {
  if (!value) return FALLBACK_SITE_SETTINGS.whatsapp
  return String(value).replace(/\D/g, '')
}

export function pickLocale(value, lang = 'en') {
  if (value == null) return ''
  if (typeof value === 'string') return value
  if (typeof value !== 'object') return String(value)
  const code = (lang || 'en').split('-')[0]
  return value[code] ?? value.en ?? value.ru ?? value.th ?? Object.values(value)[0] ?? ''
}

export function formatHoursLabel(settings, lang = 'en') {
  if (!settings) return pickLocale(FALLBACK_SITE_SETTINGS.hoursLabel, lang)
  const custom = pickLocale(settings.hoursLabel, lang)
  if (custom) return custom
  const open = settings.hoursOpen || FALLBACK_SITE_SETTINGS.hoursOpen
  const close = settings.hoursClose || FALLBACK_SITE_SETTINGS.hoursClose
  const labels = {
    en: `Daily: ${open} – ${close}`,
    ru: `Ежедневно: ${open} – ${close}`,
    th: `ทุกวัน: ${open} – ${close}`,
  }
  const code = (lang || 'en').split('-')[0]
  return labels[code] || labels.en
}

export function buildWhatsAppLink(whatsapp, message = '') {
  const number = normalizeWhatsApp(whatsapp)
  const text = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${number}${text}`
}
