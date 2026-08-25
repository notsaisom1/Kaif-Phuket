import { defineField, defineType } from 'sanity'

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'รูปแกลเลอรี',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'รหัส',
      type: 'string',
      description: 'อย่าเปลี่ยนหลัง Publish',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'แกลเลอรี',
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
      name: 'category',
      title: 'หมวด (หน้าแรก)',
      type: 'string',
      description: 'ใช้กับแกลเลอรีหน้าแรกเท่านั้น',
      options: {
        list: [
          { title: 'Spa', value: 'spa' },
          { title: 'Fitness', value: 'fitness' },
          { title: 'Banya', value: 'banya' },
          { title: 'Relax', value: 'relax' },
        ],
      },
    }),
    defineField({
      name: 'title',
      title: 'ชื่อรูป',
      type: 'localeString',
    }),
    defineField({
      name: 'image',
      title: 'อัปโหลดรูป',
      type: 'image',
      options: { hotspot: true },
      description: 'ถ้าอัปโหลดแล้ว จะใช้รูปนี้แทน path ด้านล่าง',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Path สำรองบนเว็บ',
      type: 'string',
      description: 'เช่น /images/spa/gallery/spa-1.jpg',
    }),
    defineField({
      name: 'position',
      title: 'ตำแหน่งโฟกัสรูป (CSS object-position)',
      type: 'string',
      description: 'เช่น center top — ว่างได้',
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
      title: 'แกลเลอรี + ลำดับ',
      name: 'galleryOrder',
      by: [
        { field: 'gallery', direction: 'asc' },
        { field: 'sortOrder', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title.th',
      titleEn: 'title.en',
      gallery: 'gallery',
      media: 'image',
      active: 'active',
    },
    prepare({ title, titleEn, gallery, media, active }) {
      return {
        title: title || titleEn || 'รูปแกลเลอรี',
        subtitle: `${gallery || '?'}${active === false ? ' · ซ่อน' : ''}`,
        media,
      }
    },
  },
})
