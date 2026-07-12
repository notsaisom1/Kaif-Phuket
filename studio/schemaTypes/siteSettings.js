import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'phoneDisplay',
      title: 'Phone (display)',
      type: 'string',
      description: 'Shown on the website, e.g. +66 62 480 5877',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phoneTel',
      title: 'Phone (tel: link)',
      type: 'string',
      description: 'Digits only with country code, e.g. +66624805877',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp number',
      type: 'string',
      description: 'Digits only, no +, e.g. 66624805877',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'addressCountry',
      title: 'City / Country line',
      type: 'localeString',
    }),
    defineField({
      name: 'mapsUrl',
      title: 'Google Maps URL',
      type: 'url',
    }),
    defineField({
      name: 'hoursOpen',
      title: 'Opens at',
      type: 'string',
      description: 'e.g. 07:00',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hoursClose',
      title: 'Closes at',
      type: 'string',
      description: 'e.g. 21:00',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hoursLabel',
      title: 'Hours label (optional override)',
      type: 'localeString',
      description: 'If empty, website builds "Daily: 07:00 – 21:00" from open/close times',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'telegram',
      title: 'Telegram URL',
      type: 'url',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube URL',
      type: 'url',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings (phone, hours, address)' }),
  },
})
