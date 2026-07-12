import { defineField, defineType } from 'sanity'

/** Short multilingual string (title, address line, etc.) */
export const localeString = defineType({
  name: 'localeString',
  title: 'Localized text',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', type: 'string' }),
    defineField({ name: 'ru', title: 'Russian', type: 'string' }),
    defineField({ name: 'th', title: 'Thai', type: 'string' }),
  ],
})

/** Longer multilingual text */
export const localeText = defineType({
  name: 'localeText',
  title: 'Localized long text',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', type: 'text', rows: 4 }),
    defineField({ name: 'ru', title: 'Russian', type: 'text', rows: 4 }),
    defineField({ name: 'th', title: 'Thai', type: 'text', rows: 4 }),
  ],
})
