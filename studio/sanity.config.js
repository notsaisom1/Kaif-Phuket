import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'YOUR_PROJECT_ID'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'kaif-phuket',
  title: 'KAIF Phuket Admin',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Phone, Hours, Address')
              ),
            S.divider(),
            S.documentTypeListItem('event').title('Events'),
            S.documentTypeListItem('promotion').title('Promotions'),
            S.documentTypeListItem('siteImage').title('Key Images'),
            S.divider(),
            S.documentTypeListItem('spaCategory').title('Spa Categories'),
            S.documentTypeListItem('spaService').title('Spa / Beauty Services'),
            S.divider(),
            S.documentTypeListItem('menuCategory').title('Restaurant Categories'),
            S.documentTypeListItem('menuItem').title('Restaurant Menu'),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
