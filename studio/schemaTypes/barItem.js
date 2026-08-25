import { defineField, defineType } from 'sanity'

export const barItem = defineType({
  name: 'barItem',
  title: 'เครื่องดื่ม / บาร์',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'รหัสรายการ',
      type: 'string',
      description: 'อย่าเปลี่ยนหลัง Publish',
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
      name: 'price',
      title: 'ราคา (บาท)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'category',
      title: 'หมวด',
      type: 'string',
      options: {
        list: [
          { title: 'ค็อกเทล', value: 'cocktails' },
          { title: 'ไวน์และสุรา', value: 'wine_spirits' },
          { title: 'เบียร์', value: 'beer' },
          { title: 'กาแฟและชา', value: 'coffee_tea' },
          { title: 'น้ำอัดลม', value: 'soft_drinks' },
          { title: 'น้ำผลไม้และสมูทตี้', value: 'juices' },
          { title: 'ฟิตเนสและโปรตีน', value: 'fitness' },
        ],
      },
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
      title: 'หมวด + ลำดับ',
      name: 'categoryOrder',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'sortOrder', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name.th',
      titleEn: 'name.en',
      category: 'category',
      price: 'price',
      active: 'active',
    },
    prepare({ title, titleEn, category, price, active }) {
      return {
        title: title || titleEn || 'เครื่องดื่ม',
        subtitle: `${category || '?'}${price != null ? ` · ${price} บาท` : ''}${
          active === false ? ' · ซ่อน' : ''
        }`,
      }
    },
  },
})
