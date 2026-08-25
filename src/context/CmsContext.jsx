import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  fetchSiteSettings,
  fetchEvents,
  fetchPromotions,
  fetchSiteImages,
  fetchSpaCatalog,
  fetchMenuCatalog,
  fetchBarCatalog,
  fetchMembershipPlans,
  fetchBanyaRituals,
  fetchFaqItems,
  fetchPageCopy,
  fetchGalleryImages,
  fetchSiteFiles,
} from '../services/cms'
import {
  FALLBACK_SITE_SETTINGS,
  FALLBACK_PROMOTIONS,
  pickLocale,
  formatHoursLabel,
  normalizeWhatsApp,
  buildWhatsAppLink,
} from '../data/cmsFallbacks'
import { localizeEvent } from '../data/events'
import { getSpaData } from '../components/spa/data/spaData'
import { getRestaurantData } from '../components/Restaurant/data/restaurantData'
import { getBarData } from '../components/Restaurant/data/barData'
import {
  localizeSpaCatalog,
  localizeMenuCatalog,
  localizeBarCatalog,
  localizeMembershipPlans,
  groupMembershipPlans,
  localizeBanyaRituals,
  localizeFaqItems,
  localizePageCopyMap,
  localizeGalleryImages,
} from '../services/catalogMaps'

const CmsContext = createContext(null)

export function CmsProvider({ children }) {
  const { i18n, t } = useTranslation()
  const lang = (i18n.language || 'en').split('-')[0]

  const [settings, setSettings] = useState(FALLBACK_SITE_SETTINGS)
  const [events, setEvents] = useState([])
  const [promotionsRaw, setPromotionsRaw] = useState(FALLBACK_PROMOTIONS)
  const [siteImages, setSiteImages] = useState({})
  const [spaRaw, setSpaRaw] = useState({ services: [], categories: [] })
  const [menuRaw, setMenuRaw] = useState({ items: [], categories: [] })
  const [barRaw, setBarRaw] = useState({ items: [], categories: [] })
  const [membershipRaw, setMembershipRaw] = useState([])
  const [banyaRaw, setBanyaRaw] = useState([])
  const [faqRaw, setFaqRaw] = useState([])
  const [pageCopyRaw, setPageCopyRaw] = useState({})
  const [galleryRaw, setGalleryRaw] = useState([])
  const [siteFiles, setSiteFiles] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      const [
        nextSettings,
        nextEvents,
        nextPromos,
        nextImages,
        nextSpa,
        nextMenu,
        nextBar,
        nextMembership,
        nextBanya,
        nextFaq,
        nextPageCopy,
        nextGallery,
        nextFiles,
      ] = await Promise.all([
        fetchSiteSettings(),
        fetchEvents(),
        fetchPromotions(lang),
        fetchSiteImages(),
        fetchSpaCatalog(lang),
        fetchMenuCatalog(lang),
        fetchBarCatalog(lang),
        fetchMembershipPlans(lang),
        fetchBanyaRituals(lang),
        fetchFaqItems(lang),
        fetchPageCopy(lang),
        fetchGalleryImages(lang),
        fetchSiteFiles(),
      ])
      if (cancelled) return
      setSettings(nextSettings)
      setEvents(nextEvents)
      setPromotionsRaw(nextPromos)
      setSiteImages(nextImages)
      setSpaRaw({
        services: nextSpa.services || [],
        categories: nextSpa.categories || [],
      })
      setMenuRaw({
        items: nextMenu.items || [],
        categories: nextMenu.categories || [],
      })
      setBarRaw({
        items: nextBar.items || [],
        categories: nextBar.categories || [],
      })
      setMembershipRaw(nextMembership.plans || [])
      setBanyaRaw(nextBanya.rituals || [])
      setFaqRaw(nextFaq.items || [])
      setPageCopyRaw(nextPageCopy.byKey || {})
      setGalleryRaw(nextGallery.items || [])
      setSiteFiles(nextFiles.byKey || {})
      setLoading(false)
    }

    load()
    return () => {
      cancelled = true
    }
  }, [lang])

  const value = useMemo(() => {
    const whatsapp = normalizeWhatsApp(settings.whatsapp)
    const phoneDisplay = settings.phoneDisplay || FALLBACK_SITE_SETTINGS.phoneDisplay
    const phoneTel = settings.phoneTel || FALLBACK_SITE_SETTINGS.phoneTel

    const promotions = promotionsRaw.map((p) => {
      if (p.titleLocale || p.subtitleLocale || p.descriptionLocale) {
        return {
          ...p,
          title: pickLocale(p.titleLocale, lang) || p.title,
          subtitle: pickLocale(p.subtitleLocale, lang) || p.subtitle,
          description: pickLocale(p.descriptionLocale, lang) || p.description,
        }
      }
      return p
    })

    const fallbackSpa = getSpaData(t)
    const spaFromCms =
      spaRaw.services.length > 0
        ? localizeSpaCatalog(spaRaw.services, spaRaw.categories, lang)
        : null

    const spa = spaFromCms
      ? {
          allServices: spaFromCms.allServices,
          serviceCategories:
            spaFromCms.serviceCategories.length > 0
              ? spaFromCms.serviceCategories
              : fallbackSpa.serviceCategories,
          categories:
            spaFromCms.serviceCategories.length > 0
              ? spaFromCms.serviceCategories
              : fallbackSpa.serviceCategories,
          getPopularServices: () =>
            spaFromCms.allServices.filter((s) => s.popular),
          _source: 'sanity',
        }
      : {
          ...fallbackSpa,
          categories: fallbackSpa.serviceCategories,
          getPopularServices: () =>
            fallbackSpa.allServices.filter((s) => s.popular),
          _source: 'fallback',
        }

    const fallbackMenu = getRestaurantData(t)
    const menuFromCms =
      menuRaw.items.length > 0
        ? localizeMenuCatalog(menuRaw.items, menuRaw.categories, lang)
        : null

    const restaurant = menuFromCms
      ? {
          ...fallbackMenu,
          menuItems: menuFromCms.menuItems,
          categoryCards:
            menuFromCms.categoryCards.length > 0
              ? menuFromCms.categoryCards
              : fallbackMenu.categoryCards,
          menuCategories:
            menuFromCms.menuCategories.length > 0
              ? menuFromCms.menuCategories
              : fallbackMenu.menuCategories,
          getMenuByCategory: menuFromCms.getMenuByCategory,
          _source: 'sanity',
        }
      : { ...fallbackMenu, _source: 'fallback' }

    const fallbackBar = getBarData(t)
    const barFromCms =
      barRaw.items.length > 0
        ? localizeBarCatalog(barRaw.items, barRaw.categories, lang)
        : null

    const bar = barFromCms
      ? {
          barItems: barFromCms.barItems,
          barCategories:
            barFromCms.barCategories.length > 0
              ? barFromCms.barCategories
              : fallbackBar.barCategories,
          getBarMenuByCategory: barFromCms.getBarMenuByCategory,
          _source: 'sanity',
        }
      : { ...fallbackBar, _source: 'fallback' }

    const membershipPlans =
      membershipRaw.length > 0
        ? localizeMembershipPlans(membershipRaw, lang)
        : []
    const membershipGroups =
      membershipPlans.length > 0 ? groupMembershipPlans(membershipPlans) : []

    const banyaRituals =
      banyaRaw.length > 0 ? localizeBanyaRituals(banyaRaw, lang) : []

    const faqItems = faqRaw.length > 0 ? localizeFaqItems(faqRaw, lang) : []
    const faqsByPage = {
      home: faqItems.filter((f) => f.page === 'home'),
      banya: faqItems.filter((f) => f.page === 'banya'),
      spa: faqItems.filter((f) => f.page === 'spa'),
    }

    const pageCopy =
      Object.keys(pageCopyRaw).length > 0
        ? localizePageCopyMap(pageCopyRaw, lang)
        : {}

    const galleryItems =
      galleryRaw.length > 0 ? localizeGalleryImages(galleryRaw, lang) : []
    const galleries = {
      home: galleryItems.filter((g) => g.gallery === 'home'),
      banya: galleryItems.filter((g) => g.gallery === 'banya'),
      spa: galleryItems.filter((g) => g.gallery === 'spa'),
    }

    const menuPdfUrl =
      siteFiles.restaurantMenu?.url || '/documents/menu.pdf'

    return {
      loading,
      settings,
      events,
      promotions,
      siteImages,
      spa,
      restaurant,
      bar,
      membershipPlans,
      membershipGroups,
      banyaRituals,
      faqsByPage,
      pageCopy,
      galleries,
      siteFiles,
      menuPdfUrl,
      getPageCopy: (key) => pageCopy[key] || null,
      getFaqs: (page) => faqsByPage[page] || [],
      getGallery: (name) => galleries[name] || [],
      lang,
      phoneDisplay,
      phoneTel,
      whatsapp,
      address: pickLocale(settings.address, lang),
      addressCountry: pickLocale(settings.addressCountry, lang),
      hoursLabel: formatHoursLabel(settings, lang),
      hoursOpen: settings.hoursOpen,
      hoursClose: settings.hoursClose,
      mapsUrl: settings.mapsUrl || FALLBACK_SITE_SETTINGS.mapsUrl,
      social: {
        instagram: settings.instagram,
        facebook: settings.facebook,
        telegram: settings.telegram,
        youtube: settings.youtube,
      },
      buildWhatsAppLink: (message) => buildWhatsAppLink(whatsapp, message),
      getEventBySlug: (slug) => events.find((e) => e.slug === slug),
      localizeEvent: (event) => localizeEvent(event, lang),
      getEventBookingLink: (event) => {
        const localized = localizeEvent(event, lang)
        const number = whatsapp
        const msg = localized?.whatsappMessage || ''
        return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`
      },
      getSiteImage: (key) => siteImages[key] || null,
    }
  }, [
    settings,
    events,
    promotionsRaw,
    siteImages,
    spaRaw,
    menuRaw,
    barRaw,
    membershipRaw,
    banyaRaw,
    faqRaw,
    pageCopyRaw,
    galleryRaw,
    siteFiles,
    loading,
    lang,
    t,
  ])

  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>
}

export function useCms() {
  const ctx = useContext(CmsContext)
  if (!ctx) {
    throw new Error('useCms must be used within CmsProvider')
  }
  return ctx
}

export function useCmsOptional() {
  return useContext(CmsContext)
}
