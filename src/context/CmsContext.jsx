import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  fetchSiteSettings,
  fetchEvents,
  fetchPromotions,
  fetchSiteImages,
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

const CmsContext = createContext(null)

export function CmsProvider({ children }) {
  const { i18n } = useTranslation()
  const lang = (i18n.language || 'en').split('-')[0]

  const [settings, setSettings] = useState(FALLBACK_SITE_SETTINGS)
  const [events, setEvents] = useState([])
  const [promotionsRaw, setPromotionsRaw] = useState(FALLBACK_PROMOTIONS)
  const [siteImages, setSiteImages] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      const [nextSettings, nextEvents, nextPromos, nextImages] = await Promise.all([
        fetchSiteSettings(),
        fetchEvents(),
        fetchPromotions(lang),
        fetchSiteImages(),
      ])
      if (cancelled) return
      setSettings(nextSettings)
      setEvents(nextEvents)
      setPromotionsRaw(nextPromos)
      setSiteImages(nextImages)
      setLoading(false)
    }

    load()
    return () => {
      cancelled = true
    }
    // Re-fetch promotions localized strings when language changes
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

    return {
      loading,
      settings,
      events,
      promotions,
      siteImages,
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
  }, [settings, events, promotionsRaw, siteImages, loading, lang])

  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>
}

export function useCms() {
  const ctx = useContext(CmsContext)
  if (!ctx) {
    throw new Error('useCms must be used within CmsProvider')
  }
  return ctx
}

/** Safe hook when provider might be missing in tests */
export function useCmsOptional() {
  return useContext(CmsContext)
}
