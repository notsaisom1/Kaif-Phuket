import { defineField, defineType } from 'sanity'

export const menuCategory = defineType({
  name: 'menuCategory',
  title: 'Restaurant menu category',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Category key',
      type: 'string',
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
      name: 'number',
      title: 'Display number',
      type: 'string',
      description: 'e.g. 01, 02',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image path (fallback)',
      type: 'string',
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
  preview: {
    select: { title: 'name.en', key: 'key', number: 'number', active: 'active' },
    prepare({ title, key, number, active }) {
      return {
        title: title || key || 'Category',
        subtitle: `${number || ''} ${key || ''}${active === false ? ' · Hidden' : ''}`.trim(),
      }
    },
  },
})
