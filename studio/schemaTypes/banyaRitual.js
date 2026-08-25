import { defineField, defineType } from 'sanity'

export const banyaRitual = defineType({
  name: 'banyaRitual',
  title: 'พิธีบันยา / ราคา',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'รหัสพิธี',
      type: 'string',
      description: 'อย่าเปลี่ยนหลัง Publish เช่น classic, royal',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'groupKey',
      title: 'กลุ่ม',
      type: 'string',
      options: {
        list: [
          { title: 'คลาสสิก', value: 'classic' },
          { title: 'เข้มข้น', value: 'intense' },
          { title: 'ซิกเนเจอร์', value: 'signature' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'ชื่อ',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'คำบรรยายสั้น',
      type: 'localeString',
    }),
    defineField({
      name: 'duration',
      title: 'ระยะเวลา',
      type: 'localeString',
      description: 'เช่น 10-15 min',
    }),
    defineField({
      name: 'price',
      title: 'ราคา (บาท)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'description',
      title: 'คำอธิบาย',
      type: 'localeText',
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
      title: 'กลุ่ม + ลำดับ',
      name: 'groupOrder',
      by: [
        { field: 'groupKey', direction: 'asc' },
        { field: 'sortOrder', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title.th',
      titleEn: 'title.en',
      group: 'groupKey',
      price: 'price',
      active: 'active',
    },
    prepare({ title, titleEn, group, price, active }) {
      return {
        title: title || titleEn || 'พิธีบันยา',
        subtitle: `${group || '?'}${price != null ? ` · ${price} บาท` : ''}${
          active === false ? ' · ซ่อน' : ''
        }`,
      }
    },
  },
})
