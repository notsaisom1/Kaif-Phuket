import { FALLBACK_PROMOTIONS } from './cmsFallbacks'

export interface Promotion {
  id: string
  dayOfWeek: string
  dayIndex: number
  title: string
  subtitle: string
  description: string
  image: string
  color: string
}

/** Static fallback list — prefer useCms().promotions at runtime */
export const promotions: Promotion[] = FALLBACK_PROMOTIONS as Promotion[]

export const getTodayPromotion = (
  list: Promotion[] = promotions
): Promotion | null => {
  const today = new Date().getDay()
  const dayIndex = today === 0 ? 7 : today
  return list.find((promo) => promo.dayIndex === dayIndex) || null
}

export const getCurrentDayIndex = (): number => {
  const today = new Date().getDay()
  return today === 0 ? 7 : today
}
