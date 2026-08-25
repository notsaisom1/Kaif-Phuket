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
