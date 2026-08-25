import { defineField, defineType } from 'sanity'

export const membershipPlan = defineType({
  name: 'membershipPlan',
  title: 'บัตรสมาชิก / กีฬา',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'รหัสแพ็ก',
      type: 'string',
      description: 'อย่าเปลี่ยนหลัง Publish เช่น day-pass, ca-1m',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'groupKey',
      title: 'กลุ่ม',
      type: 'string',
      options: {
        list: [
          { title: 'Day Pass', value: 'dayPass' },
          { title: 'Club Access', value: 'clubAccess' },
          { title: 'Club Access+', value: 'premium' },
          { title: 'Club Access Sport', value: 'clubAccessSport' },
          { title: 'ว่ายน้ำ', value: 'swimming' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'groupLabel',
      title: 'ชื่อกลุ่ม (แท็บ)',
      type: 'localeString',
    }),
    defineField({
      name: 'name',
      title: 'ชื่อแพ็ก',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'overline',
      title: 'ระยะเวลา / บรรทัดรอง',
      type: 'localeString',
    }),
    defineField({
      name: 'price',
      title: 'ราคา (บาท)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'perMonth',
      title: 'ข้อความต่อเดือน (ถ้ามี)',
      type: 'string',
      description: 'เช่น 1,600 ฿/เดือน — ว่างได้',
    }),
    defineField({
      name: 'features',
      title: 'รายละเอียดสิทธิ์',
      type: 'array',
      of: [{ type: 'localeString' }],
    }),
    defineField({
      name: 'popular',
      title: 'แนะนำ / Popular',
      type: 'boolean',
      initialValue: false,
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
      title: 'name.th',
      titleEn: 'name.en',
      group: 'groupKey',
      price: 'price',
      active: 'active',
    },
    prepare({ title, titleEn, group, price, active }) {
      return {
        title: title || titleEn || 'แพ็ก',
        subtitle: `${group || '?'}${price != null ? ` · ${price} บาท` : ''}${
          active === false ? ' · ซ่อน' : ''
        }`,
      }
    },
  },
})
