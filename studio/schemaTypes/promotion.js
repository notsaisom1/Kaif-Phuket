import { defineField, defineType } from 'sanity'

export const promotion = defineType({
  name: 'promotion',
  title: 'Promotion',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Key / id',
      type: 'string',
      description: 'Stable id, e.g. monday',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dayOfWeek',
      title: 'Day of week (English label)',
      type: 'string',
      options: {
        list: [
          { title: 'Monday', value: 'Monday' },
          { title: 'Tuesday', value: 'Tuesday' },
          { title: 'Wednesday', value: 'Wednesday' },
          { title: 'Thursday', value: 'Thursday' },
          { title: 'Friday', value: 'Friday' },
          { title: 'Saturday', value: 'Saturday' },
          { title: 'Sunday', value: 'Sunday' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dayIndex',
      title: 'Day index',
      type: 'number',
      description: '1 = Monday … 7 = Sunday',
      validation: (Rule) => Rule.required().min(1).max(7),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'imageUrl',
      title: 'Fallback image path',
      type: 'string',
      description: 'Optional path on the website if no Sanity image, e.g. /images/promotions/monday.png',
    }),
    defineField({
      name: 'color',
      title: 'Accent color',
      type: 'string',
      description: 'Hex color, e.g. #FFD700',
    }),
    defineField({
      name: 'active',
      title: 'Active (show on website)',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Day of week',
      name: 'dayIndexAsc',
      by: [{ field: 'dayIndex', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title.en',
      day: 'dayOfWeek',
      media: 'image',
      active: 'active',
    },
    prepare({ title, day, media, active }) {
      return {
        title: title || 'Untitled',
        subtitle: `${day || ''}${active === false ? ' · Hidden' : ''}`,
        media,
      }
    },
  },
})
