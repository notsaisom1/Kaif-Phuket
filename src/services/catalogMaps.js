import { pickLocale } from '../data/cmsFallbacks'
import { urlForImage } from './sanity'

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
