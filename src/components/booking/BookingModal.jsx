import { useEffect } from 'react'
import { useCmsOptional } from '../../context/CmsContext'
import { FALLBACK_SITE_SETTINGS, buildWhatsAppLink } from '../../data/cmsFallbacks'

/**
 * Opens WhatsApp directly (no modal UI).
 * Uses CMS WhatsApp number when CmsProvider is available.
 */
const BookingModal = ({ isOpen, onClose, service = '' }) => {
  const cms = useCmsOptional()

  useEffect(() => {
    if (!isOpen) return

    let message = 'Здравствуйте! Хочу записаться в KAIF.'
    if (service) {
      message += `\nУслуга: ${service}`
    }

    const href = cms?.buildWhatsAppLink
      ? cms.buildWhatsAppLink(message)
      : buildWhatsAppLink(FALLBACK_SITE_SETTINGS.whatsapp, message)

    window.open(href, '_blank')
    onClose()
  }, [isOpen, service, onClose, cms])

  return null
}

export default BookingModal
