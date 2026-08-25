import { defineField, defineType } from 'sanity'

export const spaCategory = defineType({
  name: 'spaCategory',
  title: 'Spa category',
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
      type: 'localeString',
    }),
    defineField({
      name: 'color',
      title: 'Accent (CSS gradient / color)',
      type: 'string',
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
    select: { title: 'name.en', key: 'key', active: 'active' },
    prepare({ title, key, active }) {
      return {
        title: title || key || 'Category',
        subtitle: `${key || ''}${active === false ? ' · Hidden' : ''}`,
      }
    },
  },
})
