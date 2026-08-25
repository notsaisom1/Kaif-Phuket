import { defineField, defineType } from 'sanity'

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Restaurant dish',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Dish ID',
      type: 'string',
      description: 'Stable id (do not change after publish)',
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
      name: 'price',
      title: 'Price (THB)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Breakfast', value: 'breakfast' },
          { title: 'Soups', value: 'soup' },
          { title: 'Salads & appetizers', value: 'salad' },
          { title: 'Grill', value: 'grill' },
          { title: 'Main courses', value: 'main' },
          { title: 'Side dishes', value: 'side' },
          { title: 'Desserts', value: 'dessert' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'popular',
      title: 'Popular',
      type: 'boolean',
      initialValue: false,
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
      active: 'active',
    },
    prepare({ title, titleTh, category, price, active }) {
      return {
        title: title || titleTh || 'Untitled dish',
        subtitle: `${category || '?'}${price != null ? ` · ${price} THB` : ''}${
          active === false ? ' · Hidden' : ''
        }`,
      }
    },
  },
})
