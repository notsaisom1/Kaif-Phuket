import { pickLocale } from '../data/cmsFallbacks'
import { urlForImage, urlForFile } from './sanity'

/** Map Sanity spa service docs → shape used by getSpaData consumers */
export function mapSpaService(doc, lang = 'en') {
  if (!doc?.key) return null
  const image =
    urlForImage(doc.image, { width: 800 }) || doc.imageUrl || ''
  const service = {
    id: doc.key,
    name: pickLocale(doc.name, lang) || pickLocale(doc.name, 'en') || doc.key,
    description:
      pickLocale(doc.description, lang) ||
      pickLocale(doc.description, 'en') ||
      '',
    category: doc.category,
    popular: Boolean(doc.popular),
    image,
    nameLocale: doc.name,
    descriptionLocale: doc.description,
  }
  if (Array.isArray(doc.durations) && doc.durations.length) {
    service.durations = doc.durations
    service.prices = Array.isArray(doc.prices) ? doc.prices : []
  } else if (doc.price != null) {
    service.price = doc.price
  }
  return service
}

export function mapSpaCategory(doc, lang = 'en') {
  if (!doc?.key) return null
  return {
    id: doc.key,
    name: pickLocale(doc.name, lang) || pickLocale(doc.name, 'en') || doc.key,
    description:
      pickLocale(doc.description, lang) ||
      pickLocale(doc.description, 'en') ||
      '',
    icon: '',
    color: doc.color || '',
    nameLocale: doc.name,
    descriptionLocale: doc.description,
  }
}

export function mapMenuItem(doc, lang = 'en') {
  if (!doc?.key) return null
  const image =
    urlForImage(doc.image, { width: 800 }) || doc.imageUrl || null
  const amount = typeof doc.price === 'number' ? doc.price : Number(doc.price) || 0
  return {
    id: doc.key,
    name: pickLocale(doc.name, lang) || pickLocale(doc.name, 'en') || doc.key,
    description:
      pickLocale(doc.description, lang) ||
      pickLocale(doc.description, 'en') ||
      '',
    price: `${amount} THB`,
    priceAmount: amount,
    image,
    tags: Array.isArray(doc.tags) ? doc.tags : [],
    popular: Boolean(doc.popular),
    category: doc.category,
    nameLocale: doc.name,
    descriptionLocale: doc.description,
  }
}

export function mapMenuCategory(doc, lang = 'en') {
  if (!doc?.key) return null
  const image =
    urlForImage(doc.image, { width: 800 }) || doc.imageUrl || null
  return {
    key: doc.key,
    number: doc.number || '',
    name: pickLocale(doc.name, lang) || pickLocale(doc.name, 'en') || doc.key,
    description:
      pickLocale(doc.description, lang) ||
      pickLocale(doc.description, 'en') ||
      '',
    image,
    nameLocale: doc.name,
    descriptionLocale: doc.description,
  }
}

export function localizeSpaCatalog(services, categories, lang) {
  return {
    allServices: (services || []).map((s) => {
      if (!s.nameLocale && !s.descriptionLocale) return s
      return {
        ...s,
        name: pickLocale(s.nameLocale, lang) || s.name,
        description: pickLocale(s.descriptionLocale, lang) || s.description,
      }
    }),
    serviceCategories: (categories || []).map((c) => {
      if (!c.nameLocale && !c.descriptionLocale) return c
      return {
        ...c,
        name: pickLocale(c.nameLocale, lang) || c.name,
        description: pickLocale(c.descriptionLocale, lang) || c.description,
      }
    }),
  }
}

export function localizeMenuCatalog(items, categories, lang) {
  const menuItems = (items || []).map((item) => {
    if (!item.nameLocale && !item.descriptionLocale) return item
    return {
      ...item,
      name: pickLocale(item.nameLocale, lang) || item.name,
      description: pickLocale(item.descriptionLocale, lang) || item.description,
    }
  })
  const categoryCards = (categories || []).map((c) => {
    if (!c.nameLocale && !c.descriptionLocale) return c
    return {
      ...c,
      name: pickLocale(c.nameLocale, lang) || c.name,
      description: pickLocale(c.descriptionLocale, lang) || c.description,
    }
  })
  const getMenuByCategory = () => ({
    breakfast: menuItems.filter((i) => i.category === 'breakfast'),
    soup: menuItems.filter((i) => i.category === 'soup'),
    salad: menuItems.filter((i) => i.category === 'salad'),
    grill: menuItems.filter((i) => i.category === 'grill'),
    main: menuItems.filter((i) => i.category === 'main'),
    side: menuItems.filter((i) => i.category === 'side'),
    dessert: menuItems.filter((i) => i.category === 'dessert'),
  })
  const menuCategories = categoryCards.map((c) => ({
    key: c.key,
    name: c.name,
    nameEn: pickLocale(c.nameLocale, 'en') || c.name,
  }))
  return { menuItems, categoryCards, getMenuByCategory, menuCategories }
}

export function mapBarItem(doc, lang = 'en') {
  if (!doc?.key) return null
  const amount = typeof doc.price === 'number' ? doc.price : Number(doc.price) || 0
  return {
    id: doc.key,
    name: pickLocale(doc.name, lang) || pickLocale(doc.name, 'en') || doc.key,
    description:
      pickLocale(doc.description, lang) ||
      pickLocale(doc.description, 'en') ||
      '',
    price: `${amount} THB`,
    priceAmount: amount,
    category: doc.category,
    nameLocale: doc.name,
    descriptionLocale: doc.description,
  }
}

export function mapBarCategory(doc, lang = 'en') {
  if (!doc?.key) return null
  return {
    key: doc.key,
    number: doc.number || '',
    name: pickLocale(doc.name, lang) || pickLocale(doc.name, 'en') || doc.key,
    description:
      pickLocale(doc.description, lang) ||
      pickLocale(doc.description, 'en') ||
      '',
    nameLocale: doc.name,
    descriptionLocale: doc.description,
  }
}

export function localizeBarCatalog(items, categories, lang) {
  const barItems = (items || []).map((item) => {
    if (!item.nameLocale && !item.descriptionLocale) return item
    return {
      ...item,
      name: pickLocale(item.nameLocale, lang) || item.name,
      description: pickLocale(item.descriptionLocale, lang) || item.description,
    }
  })
  const barCategories = (categories || []).map((c) => {
    if (!c.nameLocale && !c.descriptionLocale) return c
    return {
      ...c,
      name: pickLocale(c.nameLocale, lang) || c.name,
      description: pickLocale(c.descriptionLocale, lang) || c.description,
    }
  })
  const getBarMenuByCategory = () => {
    const grouped = {}
    for (const item of barItems) {
      if (!grouped[item.category]) grouped[item.category] = []
      grouped[item.category].push(item)
    }
    return grouped
  }
  return { barItems, barCategories, getBarMenuByCategory }
}

function formatPriceDisplay(amount) {
  const n = Number(amount) || 0
  return n.toLocaleString('en-US')
}

export function mapMembershipPlan(doc, lang = 'en') {
  if (!doc?.key) return null
  const features = (doc.features || []).map(
    (f) => pickLocale(f, lang) || pickLocale(f, 'en') || ''
  ).filter(Boolean)
  return {
    id: doc.key,
    groupKey: doc.groupKey,
    groupLabel:
      pickLocale(doc.groupLabel, lang) ||
      pickLocale(doc.groupLabel, 'en') ||
      doc.groupKey,
    name: pickLocale(doc.name, lang) || pickLocale(doc.name, 'en') || doc.key,
    overline:
      pickLocale(doc.overline, lang) || pickLocale(doc.overline, 'en') || '',
    price: { value: formatPriceDisplay(doc.price) },
    priceAmount: doc.price,
    perMonth: doc.perMonth || undefined,
    features,
    popular: Boolean(doc.popular),
    groupLabelLocale: doc.groupLabel,
    nameLocale: doc.name,
    overlineLocale: doc.overline,
    featuresLocale: doc.features,
  }
}

export function localizeMembershipPlans(plans, lang) {
  return (plans || []).map((p) => {
    if (!p.nameLocale && !p.featuresLocale) return p
    return {
      ...p,
      groupLabel: pickLocale(p.groupLabelLocale, lang) || p.groupLabel,
      name: pickLocale(p.nameLocale, lang) || p.name,
      overline: pickLocale(p.overlineLocale, lang) || p.overline,
      features: (p.featuresLocale || [])
        .map((f) => pickLocale(f, lang) || pickLocale(f, 'en') || '')
        .filter(Boolean),
    }
  })
}

const MEMBERSHIP_GROUP_ORDER = [
  'dayPass',
  'clubAccess',
  'premium',
  'clubAccessSport',
  'swimming',
]

export function groupMembershipPlans(plans) {
  const byGroup = {}
  for (const p of plans || []) {
    if (!byGroup[p.groupKey]) byGroup[p.groupKey] = []
    byGroup[p.groupKey].push(p)
  }
  return MEMBERSHIP_GROUP_ORDER.filter((k) => byGroup[k]?.length).map((key) => ({
    key,
    label: byGroup[key][0].groupLabel || key,
    plans: byGroup[key],
  }))
}

export function mapBanyaRitual(doc, lang = 'en') {
  if (!doc?.key) return null
  const amount = typeof doc.price === 'number' ? doc.price : Number(doc.price) || 0
  return {
    id: doc.key,
    groupKey: doc.groupKey,
    title: pickLocale(doc.title, lang) || pickLocale(doc.title, 'en') || doc.key,
    subtitle:
      pickLocale(doc.subtitle, lang) || pickLocale(doc.subtitle, 'en') || '',
    duration:
      pickLocale(doc.duration, lang) || pickLocale(doc.duration, 'en') || '',
    price: `${formatPriceDisplay(amount)} THB`,
    priceAmount: amount,
    description:
      pickLocale(doc.description, lang) ||
      pickLocale(doc.description, 'en') ||
      '',
    titleLocale: doc.title,
    subtitleLocale: doc.subtitle,
    durationLocale: doc.duration,
    descriptionLocale: doc.description,
  }
}

export function localizeBanyaRituals(rituals, lang) {
  return (rituals || []).map((r) => {
    if (!r.titleLocale) return r
    return {
      ...r,
      title: pickLocale(r.titleLocale, lang) || r.title,
      subtitle: pickLocale(r.subtitleLocale, lang) || r.subtitle,
      duration: pickLocale(r.durationLocale, lang) || r.duration,
      description: pickLocale(r.descriptionLocale, lang) || r.description,
    }
  })
}

export function mapFaqItem(doc, lang = 'en') {
  if (!doc?.key) return null
  return {
    id: doc.key,
    page: doc.page,
    question:
      pickLocale(doc.question, lang) || pickLocale(doc.question, 'en') || '',
    answer: pickLocale(doc.answer, lang) || pickLocale(doc.answer, 'en') || '',
    questionLocale: doc.question,
    answerLocale: doc.answer,
  }
}

export function localizeFaqItems(items, lang) {
  return (items || []).map((item) => {
    if (!item.questionLocale) return item
    return {
      ...item,
      question: pickLocale(item.questionLocale, lang) || item.question,
      answer: pickLocale(item.answerLocale, lang) || item.answer,
    }
  })
}

export function mapPageCopy(doc, lang = 'en') {
  if (!doc?.key) return null
  const pick = (field) =>
    pickLocale(doc[field], lang) || pickLocale(doc[field], 'en') || ''
  return {
    key: doc.key,
    overline: pick('overline'),
    titlePart1: pick('titlePart1'),
    titlePart2: pick('titlePart2'),
    title: pick('title'),
    subtitle: pick('subtitle'),
    location: pick('location'),
    cta: pick('cta'),
    locales: {
      overline: doc.overline,
      titlePart1: doc.titlePart1,
      titlePart2: doc.titlePart2,
      title: doc.title,
      subtitle: doc.subtitle,
      location: doc.location,
      cta: doc.cta,
    },
  }
}

export function localizePageCopyMap(map, lang) {
  const next = {}
  for (const [key, doc] of Object.entries(map || {})) {
    if (!doc?.locales) {
      next[key] = doc
      continue
    }
    const pick = (field) =>
      pickLocale(doc.locales[field], lang) ||
      pickLocale(doc.locales[field], 'en') ||
      doc[field] ||
      ''
    next[key] = {
      ...doc,
      overline: pick('overline'),
      titlePart1: pick('titlePart1'),
      titlePart2: pick('titlePart2'),
      title: pick('title'),
      subtitle: pick('subtitle'),
      location: pick('location'),
      cta: pick('cta'),
    }
  }
  return next
}

export function mapGalleryImage(doc, lang = 'en') {
  if (!doc?.key) return null
  const image =
    urlForImage(doc.image, { width: 1600 }) || doc.imageUrl || ''
  return {
    id: doc.key,
    gallery: doc.gallery,
    category: doc.category || '',
    title: pickLocale(doc.title, lang) || pickLocale(doc.title, 'en') || '',
    image,
    src: image,
    alt: pickLocale(doc.title, lang) || pickLocale(doc.title, 'en') || '',
    position: doc.position || undefined,
    titleLocale: doc.title,
  }
}

export function localizeGalleryImages(items, lang) {
  return (items || []).map((item) => {
    if (!item.titleLocale) return item
    const title = pickLocale(item.titleLocale, lang) || item.title
    return { ...item, title, alt: title || item.alt }
  })
}

export function mapSiteFile(doc) {
  if (!doc?.key) return null
  return {
    key: doc.key,
    title: doc.title || doc.key,
    url: urlForFile(doc.file) || doc.fileUrl || '',
  }
}
