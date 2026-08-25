import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'YOUR_PROJECT_ID'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'kaif-phuket',
  title: 'KAIF Phuket แอดมิน',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('เนื้อหา')
          .items([
            S.listItem()
              .title('ตั้งค่าเว็บ (เบอร์ / เวลา / ที่อยู่)')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('เบอร์โทร · เวลา · ที่อยู่')
              ),
            S.divider(),
            S.documentTypeListItem('event').title('อีเวนต์'),
            S.documentTypeListItem('promotion').title('โปรโมชันรายวัน'),
            S.documentTypeListItem('siteImage').title('รูปสำคัญ'),
            S.divider(),
            S.documentTypeListItem('spaCategory').title('หมวดสปา'),
            S.documentTypeListItem('spaService').title('บริการสปา / ความงาม'),
            S.divider(),
            S.documentTypeListItem('menuCategory').title('หมวดเมนูอาหาร'),
            S.documentTypeListItem('menuItem').title('เมนูอาหาร'),
            S.documentTypeListItem('barCategory').title('หมวดเครื่องดื่ม'),
            S.documentTypeListItem('barItem').title('เมนูบาร์ / เครื่องดื่ม'),
            S.divider(),
            S.documentTypeListItem('membershipPlan').title('บัตรสมาชิก / กีฬา (ราคา)'),
            S.documentTypeListItem('banyaRitual').title('พิธีบันยา / ราคา'),
            S.divider(),
            S.documentTypeListItem('pageCopy').title('ข้อความหน้า (Hero / หัวข้อ FAQ)'),
            S.documentTypeListItem('faqItem').title('คำถาม FAQ'),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
