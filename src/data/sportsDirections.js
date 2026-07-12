const WHATSAPP_NUMBER = '66624805877';

const emptyWeek = {
  monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: []
};

const swimSchedule = {
  ...emptyWeek,
  thursday: [{ time: '09:00', titleKey: 'adults_group', duration: 60 }]
};

const danceSchedule = {
  monday: [
    { time: '09:00', titleKey: 'yoga', duration: 60 },
    { time: '13:10', titleKey: 'yoga_pro', duration: 50 }
  ],
  tuesday: [
    { time: '09:00', titleKey: 'stretching', duration: 60 },
    { time: '16:00', titleKey: 'stretching', duration: 60 },
    { time: '19:00', titleKey: 'high_heels', duration: 60 },
    { time: '20:00', titleKey: 'girli_hiphop', duration: 60 }
  ],
  wednesday: [
    { time: '13:10', titleKey: 'yoga_pro', duration: 50 }
  ],
  thursday: [
    { time: '09:00', titleKey: 'stretching', duration: 60 },
    { time: '16:00', titleKey: 'stretching', duration: 60 },
    { time: '19:00', titleKey: 'high_heels', duration: 60 },
    { time: '20:00', titleKey: 'girli_hiphop', duration: 60 }
  ],
  friday: [
    { time: '09:00', titleKey: 'yoga', duration: 60 },
    { time: '13:10', titleKey: 'yoga_pro', duration: 50 }
  ],
  saturday: []
};

const fightSchedule = {
  monday: [
    { time: '09:30', titleKey: 'muay_thai', duration: 60 },
    { time: '11:00', titleKey: 'kickboxing', duration: 60 },
    { time: '18:00', titleKey: 'jiujitsu', duration: 90 }
  ],
  tuesday: [{ time: '09:30', titleKey: 'boxing', duration: 60 }],
  wednesday: [
    { time: '09:30', titleKey: 'muay_thai', duration: 60 },
    { time: '11:00', titleKey: 'kickboxing', duration: 60 },
    { time: '18:00', titleKey: 'jiujitsu', duration: 90 }
  ],
  thursday: [{ time: '09:30', titleKey: 'boxing', duration: 60 }],
  friday: [
    { time: '09:30', titleKey: 'muay_thai', duration: 60 },
    { time: '11:00', titleKey: 'kickboxing', duration: 60 },
    { time: '18:00', titleKey: 'jiujitsu', duration: 90 }
  ],
  saturday: [{ time: '09:30', titleKey: 'boxing', duration: 60 }]
};

export const sportsDirections = [
  {
    slug: 'gym',
    id: 'gym',
    images: [
      '/images/sports/gym/gym-1.jpg',
      '/images/sports/gym/gym-2.jpg',
      '/images/sports/gym/gym-3.jpg',
      '/images/sports/gym/gym-access.jpg'
    ],
    tagKey: 'sports.facilities.gym.tag',
    defaultTag: 'Gym',
    titleKey: 'sports.facilities.gym.title',
    defaultTitle: 'Modern Gym',
    descriptionKey: 'sports.facilities.gym.short_description',
    defaultDescription: 'Premium equipment from Technogym and Life Fitness for effective workouts',
    longDescriptionKey: 'sports.facilities.gym.description1',
    defaultLongDescription: 'Our gym is equipped with modern premium equipment from leading manufacturers. Here you will find everything you need for effective workouts - from free weights to the latest generation of cardio machines.',
    extraDescriptionKey: 'sports.facilities.gym.description2',
    defaultExtraDescription: 'The spacious room with panoramic windows creates the perfect atmosphere for training, and professional trainers are always ready to help create an individual program.',
    hours: '07:00 – 21:00',
    capacity: '40',
    features: [
      { key: 'sports.facilities.gym.feature1', default: 'Cardio equipment zone' },
      { key: 'sports.facilities.gym.feature2', default: 'Free weights zone' },
      { key: 'sports.facilities.gym.feature3', default: 'Functional training' }
    ],
    schedule: null,
    scheduleNoteKey: 'sports.direction.gym_open_access',
    scheduleNoteDefault: 'The gym is open access from 07:00 to 21:00 — no class booking required.',
    whatsappMessage: 'Hello! I would like to book a gym session at KAIF'
  },
  {
    slug: 'fight-club',
    id: 'fight',
    images: [
      '/images/sports/fight-club/fight-1.jpg',
      '/images/sports/fight-club/fight-2.jpg',
      '/images/sports/fight-club/fight-3.jpg'
    ],
    tagKey: 'sports.facilities.fight.tag',
    defaultTag: 'Martial Arts',
    titleKey: 'sports.facilities.fight.title',
    defaultTitle: 'Fight Club',
    descriptionKey: 'sports.facilities.fight.short_description',
    defaultDescription: 'Professional ring and equipment for boxing, Muay Thai and Jiu-Jitsu',
    longDescriptionKey: 'sports.facilities.fight.description1',
    defaultLongDescription: 'KAIF Fighting Club is a modern space for training in various martial arts. Professional ring, punching bags, heavy bags, and special flooring create ideal conditions for both beginners and experienced fighters.',
    extraDescriptionKey: 'sports.facilities.fight.description2',
    defaultExtraDescription: 'Our trainers are experienced fighters and champions who will help you master techniques and achieve high results in your chosen martial art.',
    hours: '07:00 – 21:00',
    capacity: '25',
    features: [
      { key: 'sports.facilities.fight.feature1', default: 'Professional boxing ring' },
      { key: 'sports.facilities.fight.feature2', default: 'Punching bags and heavy bags' },
      { key: 'sports.facilities.fight.feature3', default: 'Champion trainers' }
    ],
    schedule: fightSchedule,
    whatsappMessage: 'Hello! I would like to book a fight club session at KAIF'
  },
  {
    slug: 'dance-studio',
    id: 'dance',
    images: [
      '/images/hero/fitnes.jpg'
    ],
    tagKey: 'sports.facilities.dance.tag',
    defaultTag: 'Dance & Fitness',
    titleKey: 'sports.facilities.dance.title',
    defaultTitle: 'Dance Studio',
    descriptionKey: 'sports.facilities.dance.short_description',
    defaultDescription: 'Spacious studio for dance, yoga and group fitness programs',
    longDescriptionKey: 'sports.facilities.dance.description1',
    defaultLongDescription: 'Spacious dance studio with professional flooring, mirrored walls and advanced audio system creates ideal conditions for various dance styles and group classes.',
    extraDescriptionKey: 'sports.facilities.dance.description2',
    defaultExtraDescription: 'Classes in modern and classical dance styles are held here, as well as group fitness training under the guidance of experienced instructors.',
    hours: '07:00 – 21:00',
    capacity: '30',
    features: [
      { key: 'sports.facilities.dance.feature1', default: 'Mirrored walls' },
      { key: 'sports.facilities.dance.feature2', default: 'Professional flooring' },
      { key: 'sports.facilities.dance.feature3', default: 'Sound system' }
    ],
    schedule: danceSchedule,
    whatsappMessage: 'Hello! I would like to book a dance class at KAIF'
  },
  {
    slug: 'swimming-pool',
    id: 'swim',
    images: [
      '/images/zones/pool.jpg'
    ],
    tagKey: 'sports.facilities.swim.tag',
    defaultTag: 'Swimming',
    titleKey: 'sports.facilities.swim.title',
    defaultTitle: 'Swimming Pool',
    descriptionKey: 'sports.facilities.swim.short_description',
    defaultDescription: '25-meter pool for swimming, aqua aerobics and kids lessons',
    longDescriptionKey: 'sports.facilities.swim.description1',
    defaultLongDescription: '25-meter pool with comfortable lanes for swimming, aqua aerobics classes and children swimming lessons with certified instructors.',
    extraDescriptionKey: 'sports.facilities.swim.description2',
    defaultExtraDescription: 'Clean water, comfortable temperature and spacious zones around the pool make every visit enjoyable and safe.',
    hours: '07:00 – 21:00',
    capacity: '20',
    features: [
      { key: 'sports.facilities.swim.feature1', default: '25-meter pool' },
      { key: 'sports.facilities.swim.feature2', default: 'Aqua aerobics classes' },
      { key: 'sports.facilities.swim.feature3', default: 'Kids swimming lessons' }
    ],
    schedule: swimSchedule,
    whatsappMessage: 'Hello! I would like to book a swimming session at KAIF'
  }
];

export const getDirectionBySlug = (slug) =>
  sportsDirections.find((d) => d.slug === slug);

export const buildWhatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const scheduleDays = [
  { key: 'monday', labelKey: 'monday', shortKey: 'mon_short' },
  { key: 'tuesday', labelKey: 'tuesday', shortKey: 'tue_short' },
  { key: 'wednesday', labelKey: 'wednesday', shortKey: 'wed_short' },
  { key: 'thursday', labelKey: 'thursday', shortKey: 'thu_short' },
  { key: 'friday', labelKey: 'friday', shortKey: 'fri_short' },
  { key: 'saturday', labelKey: 'saturday', shortKey: 'sat_short' }
];
