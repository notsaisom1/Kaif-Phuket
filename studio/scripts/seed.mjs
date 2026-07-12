/**
 * Seed Sanity with current KAIF contact info + weekday promotions.
 *
 * Setup:
 *   1. Create project at https://www.sanity.io/manage
 *   2. Copy studio/.env.example → studio/.env and fill PROJECT_ID + WRITE TOKEN
 *   3. npm install && npm run seed
 */
import { createClient } from '@sanity/client'
import { readFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

function loadEnv() {
  const envPath = resolve(__dirname, '../.env')
  if (!existsSync(envPath)) return
  const text = readFileSync(envPath, 'utf8')
  for (const line of text.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    const value = trimmed.slice(eq + 1).trim()
    if (!process.env[key]) process.env[key] = value
  }
}

loadEnv()

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || projectId === 'your_project_id_here' || projectId === 'YOUR_PROJECT_ID') {
  console.error('Set SANITY_STUDIO_PROJECT_ID in studio/.env first.')
  process.exit(1)
}
if (!token) {
  console.error('Set SANITY_API_WRITE_TOKEN in studio/.env (Editor token from Sanity manage).')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-01-01',
  token,
  useCdn: false,
})

const ADDRESS =
  '73, Baan Chalekiri Village, 6 Pra Phuket Keaw Road, Kathu'

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  phoneDisplay: '+66 62 480 5877',
  phoneTel: '+66624805877',
  whatsapp: '66624805877',
  address: { en: ADDRESS, ru: ADDRESS, th: ADDRESS },
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

const promotions = [
  {
    _id: 'promotion-monday',
    _type: 'promotion',
    key: 'monday',
    dayOfWeek: 'Monday',
    dayIndex: 1,
    title: { en: 'Double KAIF', ru: 'Double KAIF', th: 'Double KAIF' },
    subtitle: { en: '1+1 Day Pass', ru: '1+1 Day Pass', th: '1+1 Day Pass' },
    description: {
      en: 'Come with a friend, pay only for one! Applies only to "Day pass" tickets for area of complex',
      ru: 'Приходите с другом — платите только за одного! Только для Day pass зоны комплекса',
      th: 'มาเป็นคู่ จ่ายคนเดียว! ใช้ได้เฉพาะบัตร Day pass ของพื้นที่คอมเพล็กซ์',
    },
    imageUrl: '/images/promotions/monday.png',
    color: '#FFD700',
    active: true,
  },
  {
    _id: 'promotion-tuesday',
    _type: 'promotion',
    key: 'tuesday',
    dayOfWeek: 'Tuesday',
    dayIndex: 2,
    title: { en: 'KAIF Plus', ru: 'KAIF Plus', th: 'KAIF Plus' },
    subtitle: {
      en: 'Sauna + Massage Gift',
      ru: 'Сауна + массаж в подарок',
      th: 'ซาวน่า + นวดฟรี',
    },
    description: {
      en: 'When you purchase a sauna subscription for 1 month, you will receive a Thai oil massage as a gift',
      ru: 'При покупке абонемента в сауну на 1 месяц — тайский oil massage в подарок',
      th: 'เมื่อซื้อแพ็กซาวน่า 1 เดือน รับนวดน้ำมันไทยฟรี',
    },
    imageUrl: '/images/promotions/tuesday.png',
    color: '#FF6B6B',
    active: true,
  },
  {
    _id: 'promotion-wednesday',
    _type: 'promotion',
    key: 'wednesday',
    dayOfWeek: 'Wednesday',
    dayIndex: 3,
    title: {
      en: 'KAIF for Subscribers',
      ru: 'KAIF для подписчиков',
      th: 'KAIF สำหรับสมาชิก',
    },
    subtitle: {
      en: 'Member Exclusive',
      ru: 'Только для членов клуба',
      th: 'เฉพาะสมาชิก',
    },
    description: {
      en: 'Exclusive for subscription holders: massage -50% for club members',
      ru: 'Только для владельцев абонемента: массаж -50%',
      th: 'เฉพาะผู้ถือสมาชิกภาพ: นวดลด 50%',
    },
    imageUrl: '/images/promotions/wednesday.png',
    color: '#4ECDC4',
    active: true,
  },
  {
    _id: 'promotion-thursday',
    _type: 'promotion',
    key: 'thursday',
    dayOfWeek: 'Thursday',
    dayIndex: 4,
    title: {
      en: 'Private Steaming',
      ru: 'Индивидуальное парение',
      th: 'อบไอน้ำส่วนตัว',
    },
    subtitle: {
      en: 'Half Price Sessions',
      ru: 'Сеансы за полцены',
      th: 'เซสชันราคาครึ่ง',
    },
    description: {
      en: 'Individual steaming sessions with brooms -50% for everyone',
      ru: 'Индивидуальные сеансы парения с вениками -50% для всех',
      th: 'อบไอน้ำส่วนตัวพร้อมไม้กวาดลด 50% สำหรับทุกคน',
    },
    imageUrl: '/images/promotions/thursday.png',
    color: '#95E1D3',
    active: true,
  },
  {
    _id: 'promotion-friday',
    _type: 'promotion',
    key: 'friday',
    dayOfWeek: 'Friday',
    dayIndex: 5,
    title: { en: 'Lady KAIF', ru: 'Lady KAIF', th: 'Lady KAIF' },
    subtitle: {
      en: 'Ladies Free Until 16:00',
      ru: 'Для дам бесплатно до 16:00',
      th: 'สุภาพสตรีฟรีถึง 16:00',
    },
    description: {
      en: 'Admission for ladies is free until 16:00',
      ru: 'Вход для дам бесплатный до 16:00',
      th: 'สุภาพสตรีเข้าฟรีถึง 16:00 น.',
    },
    imageUrl: '/images/promotions/friday.png',
    color: '#F38181',
    active: true,
  },
]

async function seed() {
  const tx = client.transaction()
  tx.createOrReplace(siteSettings)
  for (const promo of promotions) {
    tx.createOrReplace(promo)
  }
  await tx.commit()
  console.log('Seeded siteSettings +', promotions.length, 'promotions.')
  console.log('Events list starts empty — staff can add them in Studio.')
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
