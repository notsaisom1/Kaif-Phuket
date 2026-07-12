import { defineField, defineType } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      options: { source: 'title.en', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hook',
      title: 'Short hook',
      type: 'localeString',
      description: 'One-line teaser on cards',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short description',
      type: 'localeText',
    }),
    defineField({
      name: 'longDescription',
      title: 'Long description',
      type: 'localeText',
    }),
    defineField({
      name: 'location',
      title: 'Location label',
      type: 'localeString',
    }),
    defineField({
      name: 'image',
      title: 'Poster / image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'dateDay',
      title: 'Day number(s)',
      type: 'string',
      description: 'e.g. 15 or 15–16',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateMonth',
      title: 'Month code',
      type: 'string',
      description: '3-letter English month: JAN, FEB, MAR…',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateFull',
      title: 'Full date text',
      type: 'localeString',
      description: 'e.g. 15 March 2026',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'recurring',
      title: 'Recurring',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'published',
      title: 'Published (show on website)',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'whatsappMessage',
      title: 'WhatsApp booking message',
      type: 'localeText',
    }),
    defineField({
      name: 'schedule',
      title: 'Programme / schedule',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'date', title: 'Date', type: 'localeString' },
            { name: 'title', title: 'Title', type: 'localeString' },
            { name: 'description', title: 'Description', type: 'localeText' },
          ],
          preview: {
            select: { title: 'title.en', subtitle: 'date.en' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      media: 'image',
      published: 'published',
    },
    prepare({ title, media, published }) {
      return {
        title: title || 'Untitled event',
        subtitle: published === false ? 'Hidden' : 'Published',
        media,
      }
    },
  },
})
