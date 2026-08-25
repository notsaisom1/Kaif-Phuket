import { defineField, defineType } from 'sanity'

export const pageCopy = defineType({
  name: 'pageCopy',
  title: 'ข้อความหน้า (Hero / FAQ หัวข้อ)',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'รหัสบล็อก',
      type: 'string',
      options: {
        list: [
          { title: 'หน้าแรก · Hero', value: 'home.hero' },
          { title: 'หน้าแรก · FAQ หัวข้อ', value: 'home.faq' },
          { title: 'บันยา · Hero', value: 'banya.hero' },
          { title: 'บันยา · FAQ หัวข้อ', value: 'banya.faq' },
          { title: 'สปา · Hero', value: 'spa.hero' },
          { title: 'สปา · FAQ หัวข้อ', value: 'spa.faq' },
          { title: 'ร้านอาหาร · Hero', value: 'restaurant.hero' },
          { title: 'กีฬา · Hero', value: 'sports.hero' },
          { title: 'ติดต่อ · Hero', value: 'contacts.hero' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'overline',
      title: 'Overline / Badge',
      type: 'localeString',
    }),
    defineField({
      name: 'titlePart1',
      title: 'หัวข้อบรรทัด 1',
      type: 'localeString',
    }),
    defineField({
      name: 'titlePart2',
      title: 'หัวข้อบรรทัด 2',
      type: 'localeString',
    }),
    defineField({
      name: 'title',
      title: 'หัวข้อ (บรรทัดเดียว)',
      type: 'localeString',
    }),
    defineField({
      name: 'subtitle',
      title: 'คำโปรย',
      type: 'localeText',
    }),
    defineField({
      name: 'location',
      title: 'ตำแหน่ง / Location',
      type: 'localeString',
    }),
    defineField({
      name: 'cta',
      title: 'ข้อความปุ่มหลัก (ถ้ามี)',
      type: 'localeString',
      description: 'เช่น Book Now — ปุ่มทั่วไปอื่นยังอยู่ในไฟล์แปล',
    }),
  ],
  preview: {
    select: {
      key: 'key',
      title: 'title.th',
      titleEn: 'title.en',
      part1: 'titlePart1.th',
      part1En: 'titlePart1.en',
    },
    prepare({ key, title, titleEn, part1, part1En }) {
      return {
        title: key || 'ข้อความหน้า',
        subtitle: title || titleEn || part1 || part1En || '',
      }
    },
  },
})
