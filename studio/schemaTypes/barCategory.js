import { defineField, defineType } from 'sanity'

export const barCategory = defineType({
  name: 'barCategory',
  title: 'หมวดเครื่องดื่ม',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'รหัสหมวด',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'ชื่อ',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'คำอธิบาย',
      type: 'localeText',
    }),
    defineField({
      name: 'number',
      title: 'เลขแสดง',
      type: 'string',
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
  preview: {
    select: { title: 'name.th', titleEn: 'name.en', key: 'key', active: 'active' },
    prepare({ title, titleEn, key, active }) {
      return {
        title: title || titleEn || key || 'หมวด',
        subtitle: `${key || ''}${active === false ? ' · ซ่อน' : ''}`.trim(),
      }
    },
  },
})
