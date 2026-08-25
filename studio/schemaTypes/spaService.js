import { defineField, defineType } from 'sanity'

export const spaService = defineType({
  name: 'spaService',
  title: 'Spa / Beauty service',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Service ID',
      type: 'string',
      description: 'Stable id used by the website (do not change after publish)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText',
    }),
    defineField({
      name: 'category',
      title: 'Category key',
      type: 'string',
      options: {
        list: [
          { title: 'Massage', value: 'massage' },
          { title: 'Endosphere', value: 'endosphere' },
          { title: 'Laser', value: 'laser' },
          { title: 'Laser complex (3)', value: 'laser-complex-3' },
          { title: 'Laser complex (5)', value: 'laser-complex-5' },
          { title: 'Hair care', value: 'hair-care' },
          { title: 'Manicure', value: 'manicure' },
          { title: 'Pedicure', value: 'pedicure' },
          { title: 'PRO pedicure', value: 'pro-pedicure' },
          { title: 'Eyelashes', value: 'eyelashes' },
          { title: 'Brows', value: 'brows' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'durations',
      title: 'Durations (minutes)',
      type: 'array',
      of: [{ type: 'number' }],
      description: 'For massage-style services. Same order as prices.',
    }),
    defineField({
      name: 'prices',
      title: 'Prices (THB) per duration',
      type: 'array',
      of: [{ type: 'number' }],
      description: 'Must match durations order. Leave empty if using fixed price.',
    }),
    defineField({
      name: 'price',
      title: 'Fixed price (THB)',
      type: 'number',
      description: 'Use when there is a single price (no duration options).',
    }),
    defineField({
      name: 'popular',
      title: 'Popular / featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image path (fallback)',
      type: 'string',
      description: 'Site path e.g. /images/spa/services/massage-thai.jpg',
    }),
    defineField({
      name: 'image',
      title: 'Image upload',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort order',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'active',
      title: 'Show on website',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Category + order',
      name: 'categoryOrder',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'sortOrder', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name.en',
      titleTh: 'name.th',
      category: 'category',
      price: 'price',
      prices: 'prices',
      active: 'active',
    },
    prepare({ title, titleTh, category, price, prices, active }) {
      const priceLabel =
        Array.isArray(prices) && prices.length
          ? `${Math.min(...prices)}–${Math.max(...prices)} ฿`
          : price != null
            ? `${price} ฿`
            : ''
      return {
        title: title || titleTh || 'Untitled service',
        subtitle: `${category || '?'}${priceLabel ? ` · ${priceLabel}` : ''}${
          active === false ? ' · Hidden' : ''
        }`,
      }
    },
  },
})
