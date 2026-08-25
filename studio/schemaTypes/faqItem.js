import { defineField, defineType } from 'sanity'

export const faqItem = defineType({
  name: 'faqItem',
  title: 'คำถาม FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'รหัส',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'page',
      title: 'หน้า',
      type: 'string',
      options: {
        list: [
          { title: 'หน้าแรก', value: 'home' },
          { title: 'บันยา', value: 'banya' },
          { title: 'สปา', value: 'spa' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'question',
      title: 'คำถาม',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'คำตอบ',
      type: 'localeText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sortOrder',
      title: 'ลำดับ',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'active',
      title: 'แสดงบนเว็บ',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'หน้า + ลำดับ',
      name: 'pageOrder',
      by: [
        { field: 'page', direction: 'asc' },
        { field: 'sortOrder', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'question.th',
      titleEn: 'question.en',
      page: 'page',
      active: 'active',
    },
    prepare({ title, titleEn, page, active }) {
      return {
        title: title || titleEn || 'FAQ',
        subtitle: `${page || '?'}${active === false ? ' · ซ่อน' : ''}`,
      }
    },
  },
})
