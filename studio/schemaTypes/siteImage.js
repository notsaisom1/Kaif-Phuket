import { defineField, defineType } from 'sanity'

export const siteImage = defineType({
  name: 'siteImage',
  title: 'Key Image',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Key',
      type: 'string',
      description: 'e.g. homeHero, promoBanner',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Home hero', value: 'homeHero' },
          { title: 'Promo banner', value: 'promoBanner' },
        ],
      },
    }),
    defineField({
      name: 'title',
      title: 'Label (for staff)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'localeString',
    }),
  ],
  preview: {
    select: { title: 'title', key: 'key', media: 'image' },
    prepare({ title, key, media }) {
      return {
        title: title || key || 'Image',
        subtitle: key,
        media,
      }
    },
  },
})
