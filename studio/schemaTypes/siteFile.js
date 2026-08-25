import { defineField, defineType } from 'sanity'

export const siteFile = defineType({
  name: 'siteFile',
  title: 'ไฟล์เว็บ (PDF ฯลฯ)',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'รหัสไฟล์',
      type: 'string',
      options: {
        list: [
          { title: 'เมนูร้านอาหาร (PDF)', value: 'restaurantMenu' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'ชื่อสำหรับพนักงาน',
      type: 'string',
    }),
    defineField({
      name: 'file',
      title: 'อัปโหลดไฟล์',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      description: 'อัปโหลด PDF ใหม่ที่นี่ แล้วกด Publish',
    }),
    defineField({
      name: 'fileUrl',
      title: 'Path สำรองบนเว็บ',
      type: 'string',
      description: 'เช่น /documents/menu.pdf — ใช้ถ้ายังไม่อัปโหลด',
      initialValue: '/documents/menu.pdf',
    }),
  ],
  preview: {
    select: { title: 'title', key: 'key' },
    prepare({ title, key }) {
      return {
        title: title || key || 'ไฟล์',
        subtitle: key,
      }
    },
  },
})
