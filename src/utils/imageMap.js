// Автоматически сгенерированная карта изображений
export const imageMap = {
  // Базовая реализация для проверки поддержки WebP
  supportWebP: null,

  // Проверка поддержки WebP в браузере
  detectWebP: function() {
    if (this.supportWebP !== null) return this.supportWebP;
    const elem = document.createElement('canvas');
    if (elem.getContext && elem.getContext('2d')) {
      this.supportWebP = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    } else {
      this.supportWebP = false;
    }
    return this.supportWebP;
  },

  // Получение оптимального URL изображения
  getImageUrl: function(path, size = 'original') {
    if (!path) return '';
    const basePath = path.replace(/^\/images\//, '');
    const mapEntry = this.images[basePath];
    if (mapEntry) {
      if (size && mapEntry[size]) {
        return this.detectWebP() ? mapEntry[size].webp : mapEntry[size].fallback;
      }
      return this.detectWebP() ? mapEntry.original.webp : mapEntry.original.fallback;
    }
    return path;
  },

  // Карта соответствия изображений
  images: {
    'thai-massage.jpg': {
      "original": {
        webp: "/images-webp/./thai-massage.webp",
        fallback: "/images/thai-massage.jpg",
      },
      "large": {
        webp: "/images-webp/large/./thai-massage.webp",
        fallback: "/images/thai-massage.jpg",
        width: 1200,
      },
      "medium": {
        webp: "/images-webp/medium/./thai-massage.webp",
        fallback: "/images/thai-massage.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/./thai-massage.webp",
        fallback: "/images/thai-massage.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/./thai-massage.webp",
        fallback: "/images/thai-massage.jpg",
        width: 320,
      },
    },
    'spa.jpg': {
      "original": {
        webp: "/images-webp/./spa.webp",
        fallback: "/images/spa.jpg",
      },
      "large": {
        webp: "/images-webp/large/./spa.webp",
        fallback: "/images/spa.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/./spa.webp",
        fallback: "/images/spa.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/./spa.webp",
        fallback: "/images/spa.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/./spa.webp",
        fallback: "/images/spa.jpg",
        width: 320,
      },
    },
    'spa-hero.jpg': {
      "original": {
        webp: "/images-webp/./spa-hero.webp",
        fallback: "/images/spa-hero.jpg",
      },
      "large": {
        webp: "/images-webp/large/./spa-hero.webp",
        fallback: "/images/spa-hero.jpg",
        width: 1000,
      },
      "medium": {
        webp: "/images-webp/medium/./spa-hero.webp",
        fallback: "/images/spa-hero.jpg",
        width: 1000,
      },
      "small": {
        webp: "/images-webp/small/./spa-hero.webp",
        fallback: "/images/spa-hero.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/./spa-hero.webp",
        fallback: "/images/spa-hero.jpg",
        width: 320,
      },
    },
    'restaurant.jpg': {
      "original": {
        webp: "/images-webp/./restaurant.webp",
        fallback: "/images/restaurant.jpg",
      },
      "large": {
        webp: "/images-webp/large/./restaurant.webp",
        fallback: "/images/restaurant.jpg",
        width: 1200,
      },
      "medium": {
        webp: "/images-webp/medium/./restaurant.webp",
        fallback: "/images/restaurant.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/./restaurant.webp",
        fallback: "/images/restaurant.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/./restaurant.webp",
        fallback: "/images/restaurant.jpg",
        width: 320,
      },
    },
    'pool.jpg': {
      "original": {
        webp: "/images-webp/./pool.webp",
        fallback: "/images/pool.jpg",
      },
      "large": {
        webp: "/images-webp/large/./pool.webp",
        fallback: "/images/pool.jpg",
        width: 853,
      },
      "medium": {
        webp: "/images-webp/medium/./pool.webp",
        fallback: "/images/pool.jpg",
        width: 853,
      },
      "small": {
        webp: "/images-webp/small/./pool.webp",
        fallback: "/images/pool.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/./pool.webp",
        fallback: "/images/pool.jpg",
        width: 320,
      },
    },
    'philosophy-image.jpg': {
      "original": {
        webp: "/images-webp/./philosophy-image.webp",
        fallback: "/images/philosophy-image.jpg",
      },
      "large": {
        webp: "/images-webp/large/./philosophy-image.webp",
        fallback: "/images/philosophy-image.jpg",
        width: 1000,
      },
      "medium": {
        webp: "/images-webp/medium/./philosophy-image.webp",
        fallback: "/images/philosophy-image.jpg",
        width: 1000,
      },
      "small": {
        webp: "/images-webp/small/./philosophy-image.webp",
        fallback: "/images/philosophy-image.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/./philosophy-image.webp",
        fallback: "/images/philosophy-image.jpg",
        width: 320,
      },
    },
    'facial.jpg': {
      "original": {
        webp: "/images-webp/./facial.webp",
        fallback: "/images/facial.jpg",
      },
      "large": {
        webp: "/images-webp/large/./facial.webp",
        fallback: "/images/facial.jpg",
        width: 1200,
      },
      "medium": {
        webp: "/images-webp/medium/./facial.webp",
        fallback: "/images/facial.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/./facial.webp",
        fallback: "/images/facial.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/./facial.webp",
        fallback: "/images/facial.jpg",
        width: 320,
      },
    },
    'combat.jpg': {
      "original": {
        webp: "/images-webp/./combat.webp",
        fallback: "/images/combat.jpg",
      },
      "large": {
        webp: "/images-webp/large/./combat.webp",
        fallback: "/images/combat.jpg",
        width: 1200,
      },
      "medium": {
        webp: "/images-webp/medium/./combat.webp",
        fallback: "/images/combat.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/./combat.webp",
        fallback: "/images/combat.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/./combat.webp",
        fallback: "/images/combat.jpg",
        width: 320,
      },
    },
    'aromatherapy.jpg': {
      "original": {
        webp: "/images-webp/./aromatherapy.webp",
        fallback: "/images/aromatherapy.jpg",
      },
      "large": {
        webp: "/images-webp/large/./aromatherapy.webp",
        fallback: "/images/aromatherapy.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/./aromatherapy.webp",
        fallback: "/images/aromatherapy.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/./aromatherapy.webp",
        fallback: "/images/aromatherapy.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/./aromatherapy.webp",
        fallback: "/images/aromatherapy.jpg",
        width: 320,
      },
    },
    'zones/spa.jpg': {
      "original": {
        webp: "/images-webp/zones/spa.webp",
        fallback: "/images/zones/spa.jpg",
      },
      "large": {
        webp: "/images-webp/large/zones/spa.webp",
        fallback: "/images/zones/spa.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/zones/spa.webp",
        fallback: "/images/zones/spa.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/zones/spa.webp",
        fallback: "/images/zones/spa.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/zones/spa.webp",
        fallback: "/images/zones/spa.jpg",
        width: 320,
      },
    },
    'zones/restaurant.jpg': {
      "original": {
        webp: "/images-webp/zones/restaurant.webp",
        fallback: "/images/zones/restaurant.jpg",
      },
      "large": {
        webp: "/images-webp/large/zones/restaurant.webp",
        fallback: "/images/zones/restaurant.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/zones/restaurant.webp",
        fallback: "/images/zones/restaurant.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/zones/restaurant.webp",
        fallback: "/images/zones/restaurant.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/zones/restaurant.webp",
        fallback: "/images/zones/restaurant.jpg",
        width: 320,
      },
    },
    'zones/pool.jpg': {
      "original": {
        webp: "/images-webp/zones/pool.webp",
        fallback: "/images/zones/pool.jpg",
      },
      "large": {
        webp: "/images-webp/large/zones/pool.webp",
        fallback: "/images/zones/pool.jpg",
        width: 853,
      },
      "medium": {
        webp: "/images-webp/medium/zones/pool.webp",
        fallback: "/images/zones/pool.jpg",
        width: 853,
      },
      "small": {
        webp: "/images-webp/small/zones/pool.webp",
        fallback: "/images/zones/pool.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/zones/pool.webp",
        fallback: "/images/zones/pool.jpg",
        width: 320,
      },
    },
    'zones/fitness.jpg': {
      "original": {
        webp: "/images-webp/zones/fitness.webp",
        fallback: "/images/zones/fitness.jpg",
      },
      "large": {
        webp: "/images-webp/large/zones/fitness.webp",
        fallback: "/images/zones/fitness.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/zones/fitness.webp",
        fallback: "/images/zones/fitness.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/zones/fitness.webp",
        fallback: "/images/zones/fitness.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/zones/fitness.webp",
        fallback: "/images/zones/fitness.jpg",
        width: 320,
      },
    },
    'zones/combat.jpg': {
      "original": {
        webp: "/images-webp/zones/combat.webp",
        fallback: "/images/zones/combat.jpg",
      },
      "large": {
        webp: "/images-webp/large/zones/combat.webp",
        fallback: "/images/zones/combat.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/zones/combat.webp",
        fallback: "/images/zones/combat.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/zones/combat.webp",
        fallback: "/images/zones/combat.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/zones/combat.webp",
        fallback: "/images/zones/combat.jpg",
        width: 320,
      },
    },
    'zones/beauty.jpg': {
      "original": {
        webp: "/images-webp/zones/beauty.webp",
        fallback: "/images/zones/beauty.jpg",
      },
      "large": {
        webp: "/images-webp/large/zones/beauty.webp",
        fallback: "/images/zones/beauty.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/zones/beauty.webp",
        fallback: "/images/zones/beauty.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/zones/beauty.webp",
        fallback: "/images/zones/beauty.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/zones/beauty.webp",
        fallback: "/images/zones/beauty.jpg",
        width: 320,
      },
    },
    'restaurant/booking.jpg': {
      "original": {
        webp: "/images-webp/restaurant/booking.webp",
        fallback: "/images/restaurant/booking.jpg",
      },
      "large": {
        webp: "/images-webp/large/restaurant/booking.webp",
        fallback: "/images/restaurant/booking.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/restaurant/booking.webp",
        fallback: "/images/restaurant/booking.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/restaurant/booking.webp",
        fallback: "/images/restaurant/booking.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/restaurant/booking.webp",
        fallback: "/images/restaurant/booking.jpg",
        width: 320,
      },
    },
    'restaurant/bar.jpg': {
      "original": {
        webp: "/images-webp/restaurant/bar.webp",
        fallback: "/images/restaurant/bar.jpg",
      },
      "large": {
        webp: "/images-webp/large/restaurant/bar.webp",
        fallback: "/images/restaurant/bar.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/restaurant/bar.webp",
        fallback: "/images/restaurant/bar.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/restaurant/bar.webp",
        fallback: "/images/restaurant/bar.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/restaurant/bar.webp",
        fallback: "/images/restaurant/bar.jpg",
        width: 320,
      },
    },
    'logos/logo-header.png': {
      "original": {
        webp: "/images-webp/logos/logo-header.webp",
        fallback: "/images/logos/logo-header.png",
      },
      "large": {
        webp: "/images-webp/large/logos/logo-header.webp",
        fallback: "/images/logos/logo-header.png",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/logos/logo-header.webp",
        fallback: "/images/logos/logo-header.png",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/logos/logo-header.webp",
        fallback: "/images/logos/logo-header.png",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/logos/logo-header.webp",
        fallback: "/images/logos/logo-header.png",
        width: 320,
      },
    },
    'logos/logo-header-2x.png': {
      "original": {
        webp: "/images-webp/logos/logo-header-2x.webp",
        fallback: "/images/logos/logo-header-2x.png",
      },
      "large": {
        webp: "/images-webp/large/logos/logo-header-2x.webp",
        fallback: "/images/logos/logo-header-2x.png",
        width: 227,
      },
      "medium": {
        webp: "/images-webp/medium/logos/logo-header-2x.webp",
        fallback: "/images/logos/logo-header-2x.png",
        width: 227,
      },
      "small": {
        webp: "/images-webp/small/logos/logo-header-2x.webp",
        fallback: "/images/logos/logo-header-2x.png",
        width: 227,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/logos/logo-header-2x.webp",
        fallback: "/images/logos/logo-header-2x.png",
        width: 227,
      },
    },
    'logos/logo-header-1x.png': {
      "original": {
        webp: "/images-webp/logos/logo-header-1x.webp",
        fallback: "/images/logos/logo-header-1x.png",
      },
      "large": {
        webp: "/images-webp/large/logos/logo-header-1x.webp",
        fallback: "/images/logos/logo-header-1x.png",
        width: 113,
      },
      "medium": {
        webp: "/images-webp/medium/logos/logo-header-1x.webp",
        fallback: "/images/logos/logo-header-1x.png",
        width: 113,
      },
      "small": {
        webp: "/images-webp/small/logos/logo-header-1x.webp",
        fallback: "/images/logos/logo-header-1x.png",
        width: 113,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/logos/logo-header-1x.webp",
        fallback: "/images/logos/logo-header-1x.png",
        width: 113,
      },
    },
    'logos/logo-footer-2x.png': {
      "original": {
        webp: "/images-webp/logos/logo-footer-2x.webp",
        fallback: "/images/logos/logo-footer-2x.png",
      },
      "large": {
        webp: "/images-webp/large/logos/logo-footer-2x.webp",
        fallback: "/images/logos/logo-footer-2x.png",
        width: 720,
      },
      "medium": {
        webp: "/images-webp/medium/logos/logo-footer-2x.webp",
        fallback: "/images/logos/logo-footer-2x.png",
        width: 720,
      },
      "small": {
        webp: "/images-webp/small/logos/logo-footer-2x.webp",
        fallback: "/images/logos/logo-footer-2x.png",
        width: 720,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/logos/logo-footer-2x.webp",
        fallback: "/images/logos/logo-footer-2x.png",
        width: 320,
      },
    },
    'logos/logo-footer-1x.png': {
      "original": {
        webp: "/images-webp/logos/logo-footer-1x.webp",
        fallback: "/images/logos/logo-footer-1x.png",
      },
      "large": {
        webp: "/images-webp/large/logos/logo-footer-1x.webp",
        fallback: "/images/logos/logo-footer-1x.png",
        width: 360,
      },
      "medium": {
        webp: "/images-webp/medium/logos/logo-footer-1x.webp",
        fallback: "/images/logos/logo-footer-1x.png",
        width: 360,
      },
      "small": {
        webp: "/images-webp/small/logos/logo-footer-1x.webp",
        fallback: "/images/logos/logo-footer-1x.png",
        width: 360,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/logos/logo-footer-1x.webp",
        fallback: "/images/logos/logo-footer-1x.png",
        width: 320,
      },
    },
    'hero/hero-pool.jpg': {
      "original": {
        webp: "/images-webp/hero/hero-pool.webp",
        fallback: "/images/hero/hero-pool.jpg",
      },
      "large": {
        webp: "/images-webp/large/hero/hero-pool.webp",
        fallback: "/images/hero/hero-pool.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/hero/hero-pool.webp",
        fallback: "/images/hero/hero-pool.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/hero/hero-pool.webp",
        fallback: "/images/hero/hero-pool.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/hero/hero-pool.webp",
        fallback: "/images/hero/hero-pool.jpg",
        width: 320,
      },
    },
    'hero/hero-fitness.jpg': {
      "original": {
        webp: "/images-webp/hero/hero-fitness.webp",
        fallback: "/images/hero/hero-fitness.jpg",
      },
      "large": {
        webp: "/images-webp/large/hero/hero-fitness.webp",
        fallback: "/images/hero/hero-fitness.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/hero/hero-fitness.webp",
        fallback: "/images/hero/hero-fitness.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/hero/hero-fitness.webp",
        fallback: "/images/hero/hero-fitness.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/hero/hero-fitness.webp",
        fallback: "/images/hero/hero-fitness.jpg",
        width: 320,
      },
    },
    'banya/public.jpg': {
      "original": {
        webp: "/images-webp/banya/public.webp",
        fallback: "/images/banya/public.jpg",
      },
      "large": {
        webp: "/images-webp/large/banya/public.webp",
        fallback: "/images/banya/public.jpg",
        width: 1067,
      },
      "medium": {
        webp: "/images-webp/medium/banya/public.webp",
        fallback: "/images/banya/public.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/banya/public.webp",
        fallback: "/images/banya/public.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/banya/public.webp",
        fallback: "/images/banya/public.jpg",
        width: 320,
      },
    },
    'banya/private.jpg': {
      "original": {
        webp: "/images-webp/banya/private.webp",
        fallback: "/images/banya/private.jpg",
      },
      "large": {
        webp: "/images-webp/large/banya/private.webp",
        fallback: "/images/banya/private.jpg",
        width: 1073,
      },
      "medium": {
        webp: "/images-webp/medium/banya/private.webp",
        fallback: "/images/banya/private.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/banya/private.webp",
        fallback: "/images/banya/private.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/banya/private.webp",
        fallback: "/images/banya/private.jpg",
        width: 320,
      },
    },
    'banya/panoramic.jpg': {
      "original": {
        webp: "/images-webp/banya/panoramic.webp",
        fallback: "/images/banya/panoramic.jpg",
      },
      "large": {
        webp: "/images-webp/large/banya/panoramic.webp",
        fallback: "/images/banya/panoramic.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/banya/panoramic.webp",
        fallback: "/images/banya/panoramic.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/banya/panoramic.webp",
        fallback: "/images/banya/panoramic.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/banya/panoramic.webp",
        fallback: "/images/banya/panoramic.jpg",
        width: 320,
      },
    },
    'sports/gym/gym-3.jpg': {
      "original": {
        webp: "/images-webp/sports/gym/gym-3.webp",
        fallback: "/images/sports/gym/gym-3.jpg",
      },
      "large": {
        webp: "/images-webp/large/sports/gym/gym-3.webp",
        fallback: "/images/sports/gym/gym-3.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/sports/gym/gym-3.webp",
        fallback: "/images/sports/gym/gym-3.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/sports/gym/gym-3.webp",
        fallback: "/images/sports/gym/gym-3.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/sports/gym/gym-3.webp",
        fallback: "/images/sports/gym/gym-3.jpg",
        width: 320,
      },
    },
    'sports/gym/gym-2.jpg': {
      "original": {
        webp: "/images-webp/sports/gym/gym-2.webp",
        fallback: "/images/sports/gym/gym-2.jpg",
      },
      "large": {
        webp: "/images-webp/large/sports/gym/gym-2.webp",
        fallback: "/images/sports/gym/gym-2.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/sports/gym/gym-2.webp",
        fallback: "/images/sports/gym/gym-2.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/sports/gym/gym-2.webp",
        fallback: "/images/sports/gym/gym-2.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/sports/gym/gym-2.webp",
        fallback: "/images/sports/gym/gym-2.jpg",
        width: 320,
      },
    },
    'sports/gym/gym-1.jpg': {
      "original": {
        webp: "/images-webp/sports/gym/gym-1.webp",
        fallback: "/images/sports/gym/gym-1.jpg",
      },
      "large": {
        webp: "/images-webp/large/sports/gym/gym-1.webp",
        fallback: "/images/sports/gym/gym-1.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/sports/gym/gym-1.webp",
        fallback: "/images/sports/gym/gym-1.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/sports/gym/gym-1.webp",
        fallback: "/images/sports/gym/gym-1.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/sports/gym/gym-1.webp",
        fallback: "/images/sports/gym/gym-1.jpg",
        width: 320,
      },
    },
    'sports/fight-club/fight-3.jpg': {
      "original": {
        webp: "/images-webp/sports/fight-club/fight-3.webp",
        fallback: "/images/sports/fight-club/fight-3.jpg",
      },
      "large": {
        webp: "/images-webp/large/sports/fight-club/fight-3.webp",
        fallback: "/images/sports/fight-club/fight-3.jpg",
        width: 1280,
      },
      "medium": {
        webp: "/images-webp/medium/sports/fight-club/fight-3.webp",
        fallback: "/images/sports/fight-club/fight-3.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/sports/fight-club/fight-3.webp",
        fallback: "/images/sports/fight-club/fight-3.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/sports/fight-club/fight-3.webp",
        fallback: "/images/sports/fight-club/fight-3.jpg",
        width: 320,
      },
    },
    'sports/fight-club/fight-2.jpg': {
      "original": {
        webp: "/images-webp/sports/fight-club/fight-2.webp",
        fallback: "/images/sports/fight-club/fight-2.jpg",
      },
      "large": {
        webp: "/images-webp/large/sports/fight-club/fight-2.webp",
        fallback: "/images/sports/fight-club/fight-2.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/sports/fight-club/fight-2.webp",
        fallback: "/images/sports/fight-club/fight-2.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/sports/fight-club/fight-2.webp",
        fallback: "/images/sports/fight-club/fight-2.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/sports/fight-club/fight-2.webp",
        fallback: "/images/sports/fight-club/fight-2.jpg",
        width: 320,
      },
    },
    'sports/fight-club/fight-1.jpg': {
      "original": {
        webp: "/images-webp/sports/fight-club/fight-1.webp",
        fallback: "/images/sports/fight-club/fight-1.jpg",
      },
      "large": {
        webp: "/images-webp/large/sports/fight-club/fight-1.webp",
        fallback: "/images/sports/fight-club/fight-1.jpg",
        width: 1080,
      },
      "medium": {
        webp: "/images-webp/medium/sports/fight-club/fight-1.webp",
        fallback: "/images/sports/fight-club/fight-1.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/sports/fight-club/fight-1.webp",
        fallback: "/images/sports/fight-club/fight-1.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/sports/fight-club/fight-1.webp",
        fallback: "/images/sports/fight-club/fight-1.jpg",
        width: 320,
      },
    },
    'spa/services/thai-massage.jpg': {
      "original": {
        webp: "/images-webp/spa/services/thai-massage.webp",
        fallback: "/images/spa/services/thai-massage.jpg",
      },
      "large": {
        webp: "/images-webp/large/spa/services/thai-massage.webp",
        fallback: "/images/spa/services/thai-massage.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/spa/services/thai-massage.webp",
        fallback: "/images/spa/services/thai-massage.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/spa/services/thai-massage.webp",
        fallback: "/images/spa/services/thai-massage.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/spa/services/thai-massage.webp",
        fallback: "/images/spa/services/thai-massage.jpg",
        width: 320,
      },
    },
    'spa/services/aromatherapy.jpg': {
      "original": {
        webp: "/images-webp/spa/services/aromatherapy.webp",
        fallback: "/images/spa/services/aromatherapy.jpg",
      },
      "large": {
        webp: "/images-webp/large/spa/services/aromatherapy.webp",
        fallback: "/images/spa/services/aromatherapy.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/spa/services/aromatherapy.webp",
        fallback: "/images/spa/services/aromatherapy.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/spa/services/aromatherapy.webp",
        fallback: "/images/spa/services/aromatherapy.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/spa/services/aromatherapy.webp",
        fallback: "/images/spa/services/aromatherapy.jpg",
        width: 320,
      },
    },
    'menu/wine/wine-007.jpg': {
      "original": {
        webp: "/images-webp/menu/wine/wine-007.webp",
        fallback: "/images/menu/wine/wine-007.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/wine/wine-007.webp",
        fallback: "/images/menu/wine/wine-007.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/wine/wine-007.webp",
        fallback: "/images/menu/wine/wine-007.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/wine/wine-007.webp",
        fallback: "/images/menu/wine/wine-007.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/wine/wine-007.webp",
        fallback: "/images/menu/wine/wine-007.jpg",
        width: 320,
      },
    },
    'menu/wine/wine-006.jpg': {
      "original": {
        webp: "/images-webp/menu/wine/wine-006.webp",
        fallback: "/images/menu/wine/wine-006.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/wine/wine-006.webp",
        fallback: "/images/menu/wine/wine-006.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/wine/wine-006.webp",
        fallback: "/images/menu/wine/wine-006.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/wine/wine-006.webp",
        fallback: "/images/menu/wine/wine-006.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/wine/wine-006.webp",
        fallback: "/images/menu/wine/wine-006.jpg",
        width: 320,
      },
    },
    'menu/wine/wine-005.jpg': {
      "original": {
        webp: "/images-webp/menu/wine/wine-005.webp",
        fallback: "/images/menu/wine/wine-005.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/wine/wine-005.webp",
        fallback: "/images/menu/wine/wine-005.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/wine/wine-005.webp",
        fallback: "/images/menu/wine/wine-005.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/wine/wine-005.webp",
        fallback: "/images/menu/wine/wine-005.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/wine/wine-005.webp",
        fallback: "/images/menu/wine/wine-005.jpg",
        width: 320,
      },
    },
    'menu/wine/wine-004.jpg': {
      "original": {
        webp: "/images-webp/menu/wine/wine-004.webp",
        fallback: "/images/menu/wine/wine-004.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/wine/wine-004.webp",
        fallback: "/images/menu/wine/wine-004.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/wine/wine-004.webp",
        fallback: "/images/menu/wine/wine-004.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/wine/wine-004.webp",
        fallback: "/images/menu/wine/wine-004.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/wine/wine-004.webp",
        fallback: "/images/menu/wine/wine-004.jpg",
        width: 320,
      },
    },
    'menu/wine/wine-003.jpg': {
      "original": {
        webp: "/images-webp/menu/wine/wine-003.webp",
        fallback: "/images/menu/wine/wine-003.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/wine/wine-003.webp",
        fallback: "/images/menu/wine/wine-003.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/wine/wine-003.webp",
        fallback: "/images/menu/wine/wine-003.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/wine/wine-003.webp",
        fallback: "/images/menu/wine/wine-003.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/wine/wine-003.webp",
        fallback: "/images/menu/wine/wine-003.jpg",
        width: 320,
      },
    },
    'menu/wine/wine-002.jpg': {
      "original": {
        webp: "/images-webp/menu/wine/wine-002.webp",
        fallback: "/images/menu/wine/wine-002.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/wine/wine-002.webp",
        fallback: "/images/menu/wine/wine-002.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/wine/wine-002.webp",
        fallback: "/images/menu/wine/wine-002.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/wine/wine-002.webp",
        fallback: "/images/menu/wine/wine-002.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/wine/wine-002.webp",
        fallback: "/images/menu/wine/wine-002.jpg",
        width: 320,
      },
    },
    'menu/wine/wine-001.jpg': {
      "original": {
        webp: "/images-webp/menu/wine/wine-001.webp",
        fallback: "/images/menu/wine/wine-001.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/wine/wine-001.webp",
        fallback: "/images/menu/wine/wine-001.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/wine/wine-001.webp",
        fallback: "/images/menu/wine/wine-001.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/wine/wine-001.webp",
        fallback: "/images/menu/wine/wine-001.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/wine/wine-001.webp",
        fallback: "/images/menu/wine/wine-001.jpg",
        width: 320,
      },
    },
    'menu/soup/soupchiken.jpg': {
      "original": {
        webp: "/images-webp/menu/soup/soupchiken.webp",
        fallback: "/images/menu/soup/soupchiken.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/soup/soupchiken.webp",
        fallback: "/images/menu/soup/soupchiken.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/soup/soupchiken.webp",
        fallback: "/images/menu/soup/soupchiken.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/soup/soupchiken.webp",
        fallback: "/images/menu/soup/soupchiken.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/soup/soupchiken.webp",
        fallback: "/images/menu/soup/soupchiken.jpg",
        width: 320,
      },
    },
    'menu/soup/okroshkanaoiran.jpg': {
      "original": {
        webp: "/images-webp/menu/soup/okroshkanaoiran.webp",
        fallback: "/images/menu/soup/okroshkanaoiran.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/soup/okroshkanaoiran.webp",
        fallback: "/images/menu/soup/okroshkanaoiran.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/soup/okroshkanaoiran.webp",
        fallback: "/images/menu/soup/okroshkanaoiran.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/soup/okroshkanaoiran.webp",
        fallback: "/images/menu/soup/okroshkanaoiran.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/soup/okroshkanaoiran.webp",
        fallback: "/images/menu/soup/okroshkanaoiran.jpg",
        width: 320,
      },
    },
    'menu/soup/okroshkakvas.jpg': {
      "original": {
        webp: "/images-webp/menu/soup/okroshkakvas.webp",
        fallback: "/images/menu/soup/okroshkakvas.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/soup/okroshkakvas.webp",
        fallback: "/images/menu/soup/okroshkakvas.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/soup/okroshkakvas.webp",
        fallback: "/images/menu/soup/okroshkakvas.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/soup/okroshkakvas.webp",
        fallback: "/images/menu/soup/okroshkakvas.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/soup/okroshkakvas.webp",
        fallback: "/images/menu/soup/okroshkakvas.jpg",
        width: 320,
      },
    },
    'menu/soup/borsch-classic.jpg': {
      "original": {
        webp: "/images-webp/menu/soup/borsch-classic.webp",
        fallback: "/images/menu/soup/borsch-classic.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/soup/borsch-classic.webp",
        fallback: "/images/menu/soup/borsch-classic.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/soup/borsch-classic.webp",
        fallback: "/images/menu/soup/borsch-classic.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/soup/borsch-classic.webp",
        fallback: "/images/menu/soup/borsch-classic.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/soup/borsch-classic.webp",
        fallback: "/images/menu/soup/borsch-classic.jpg",
        width: 320,
      },
    },
    'menu/sauce/tzatzikii.jpg': {
      "original": {
        webp: "/images-webp/menu/sauce/tzatzikii.webp",
        fallback: "/images/menu/sauce/tzatzikii.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/sauce/tzatzikii.webp",
        fallback: "/images/menu/sauce/tzatzikii.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/sauce/tzatzikii.webp",
        fallback: "/images/menu/sauce/tzatzikii.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/sauce/tzatzikii.webp",
        fallback: "/images/menu/sauce/tzatzikii.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/sauce/tzatzikii.webp",
        fallback: "/images/menu/sauce/tzatzikii.jpg",
        width: 320,
      },
    },
    'menu/sauce/satsebeli.jpg': {
      "original": {
        webp: "/images-webp/menu/sauce/satsebeli.webp",
        fallback: "/images/menu/sauce/satsebeli.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/sauce/satsebeli.webp",
        fallback: "/images/menu/sauce/satsebeli.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/sauce/satsebeli.webp",
        fallback: "/images/menu/sauce/satsebeli.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/sauce/satsebeli.webp",
        fallback: "/images/menu/sauce/satsebeli.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/sauce/satsebeli.webp",
        fallback: "/images/menu/sauce/satsebeli.jpg",
        width: 320,
      },
    },
    'menu/sauce/pesto.jpg': {
      "original": {
        webp: "/images-webp/menu/sauce/pesto.webp",
        fallback: "/images/menu/sauce/pesto.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/sauce/pesto.webp",
        fallback: "/images/menu/sauce/pesto.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/sauce/pesto.webp",
        fallback: "/images/menu/sauce/pesto.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/sauce/pesto.webp",
        fallback: "/images/menu/sauce/pesto.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/sauce/pesto.webp",
        fallback: "/images/menu/sauce/pesto.jpg",
        width: 320,
      },
    },
    'menu/sauce/mustard.jpg': {
      "original": {
        webp: "/images-webp/menu/sauce/mustard.webp",
        fallback: "/images/menu/sauce/mustard.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/sauce/mustard.webp",
        fallback: "/images/menu/sauce/mustard.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/sauce/mustard.webp",
        fallback: "/images/menu/sauce/mustard.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/sauce/mustard.webp",
        fallback: "/images/menu/sauce/mustard.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/sauce/mustard.webp",
        fallback: "/images/menu/sauce/mustard.jpg",
        width: 320,
      },
    },
    'menu/sauce/aioli.jpg': {
      "original": {
        webp: "/images-webp/menu/sauce/aioli.webp",
        fallback: "/images/menu/sauce/aioli.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/sauce/aioli.webp",
        fallback: "/images/menu/sauce/aioli.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/sauce/aioli.webp",
        fallback: "/images/menu/sauce/aioli.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/sauce/aioli.webp",
        fallback: "/images/menu/sauce/aioli.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/sauce/aioli.webp",
        fallback: "/images/menu/sauce/aioli.jpg",
        width: 320,
      },
    },
    'menu/salad/xymusavokado.jpg': {
      "original": {
        webp: "/images-webp/menu/salad/xymusavokado.webp",
        fallback: "/images/menu/salad/xymusavokado.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/salad/xymusavokado.webp",
        fallback: "/images/menu/salad/xymusavokado.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/salad/xymusavokado.webp",
        fallback: "/images/menu/salad/xymusavokado.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/salad/xymusavokado.webp",
        fallback: "/images/menu/salad/xymusavokado.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/salad/xymusavokado.webp",
        fallback: "/images/menu/salad/xymusavokado.jpg",
        width: 320,
      },
    },
    'menu/salad/xymus.jpg': {
      "original": {
        webp: "/images-webp/menu/salad/xymus.webp",
        fallback: "/images/menu/salad/xymus.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/salad/xymus.webp",
        fallback: "/images/menu/salad/xymus.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/salad/xymus.webp",
        fallback: "/images/menu/salad/xymus.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/salad/xymus.webp",
        fallback: "/images/menu/salad/xymus.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/salad/xymus.webp",
        fallback: "/images/menu/salad/xymus.jpg",
        width: 320,
      },
    },
    'menu/salad/tzatziki.jpg': {
      "original": {
        webp: "/images-webp/menu/salad/tzatziki.webp",
        fallback: "/images/menu/salad/tzatziki.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/salad/tzatziki.webp",
        fallback: "/images/menu/salad/tzatziki.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/salad/tzatziki.webp",
        fallback: "/images/menu/salad/tzatziki.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/salad/tzatziki.webp",
        fallback: "/images/menu/salad/tzatziki.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/salad/tzatziki.webp",
        fallback: "/images/menu/salad/tzatziki.jpg",
        width: 320,
      },
    },
    'menu/salad/salat-brynza.jpg': {
      "original": {
        webp: "/images-webp/menu/salad/salat-brynza.webp",
        fallback: "/images/menu/salad/salat-brynza.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/salad/salat-brynza.webp",
        fallback: "/images/menu/salad/salat-brynza.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/salad/salat-brynza.webp",
        fallback: "/images/menu/salad/salat-brynza.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/salad/salat-brynza.webp",
        fallback: "/images/menu/salad/salat-brynza.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/salad/salat-brynza.webp",
        fallback: "/images/menu/salad/salat-brynza.jpg",
        width: 320,
      },
    },
    'menu/salad/salad-baza.jpg': {
      "original": {
        webp: "/images-webp/menu/salad/salad-baza.webp",
        fallback: "/images/menu/salad/salad-baza.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/salad/salad-baza.webp",
        fallback: "/images/menu/salad/salad-baza.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/salad/salad-baza.webp",
        fallback: "/images/menu/salad/salad-baza.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/salad/salad-baza.webp",
        fallback: "/images/menu/salad/salad-baza.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/salad/salad-baza.webp",
        fallback: "/images/menu/salad/salad-baza.jpg",
        width: 320,
      },
    },
    'menu/salad/cesar-seafood.jpg': {
      "original": {
        webp: "/images-webp/menu/salad/cesar-seafood.webp",
        fallback: "/images/menu/salad/cesar-seafood.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/salad/cesar-seafood.webp",
        fallback: "/images/menu/salad/cesar-seafood.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/salad/cesar-seafood.webp",
        fallback: "/images/menu/salad/cesar-seafood.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/salad/cesar-seafood.webp",
        fallback: "/images/menu/salad/cesar-seafood.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/salad/cesar-seafood.webp",
        fallback: "/images/menu/salad/cesar-seafood.jpg",
        width: 320,
      },
    },
    'menu/salad/caesar-salad.jpg': {
      "original": {
        webp: "/images-webp/menu/salad/caesar-salad.webp",
        fallback: "/images/menu/salad/caesar-salad.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/salad/caesar-salad.webp",
        fallback: "/images/menu/salad/caesar-salad.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/salad/caesar-salad.webp",
        fallback: "/images/menu/salad/caesar-salad.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/salad/caesar-salad.webp",
        fallback: "/images/menu/salad/caesar-salad.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/salad/caesar-salad.webp",
        fallback: "/images/menu/salad/caesar-salad.jpg",
        width: 320,
      },
    },
    'menu/grill/shsvinina.jpg': {
      "original": {
        webp: "/images-webp/menu/grill/shsvinina.webp",
        fallback: "/images/menu/grill/shsvinina.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/grill/shsvinina.webp",
        fallback: "/images/menu/grill/shsvinina.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/grill/shsvinina.webp",
        fallback: "/images/menu/grill/shsvinina.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/grill/shsvinina.webp",
        fallback: "/images/menu/grill/shsvinina.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/grill/shsvinina.webp",
        fallback: "/images/menu/grill/shsvinina.jpg",
        width: 320,
      },
    },
    'menu/grill/salad-baza.jpg': {
      "original": {
        webp: "/images-webp/menu/grill/salad-baza.webp",
        fallback: "/images/menu/grill/salad-baza.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/grill/salad-baza.webp",
        fallback: "/images/menu/grill/salad-baza.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/grill/salad-baza.webp",
        fallback: "/images/menu/grill/salad-baza.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/grill/salad-baza.webp",
        fallback: "/images/menu/grill/salad-baza.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/grill/salad-baza.webp",
        fallback: "/images/menu/grill/salad-baza.jpg",
        width: 320,
      },
    },
    'menu/grill/kebab_svin_gov.jpg': {
      "original": {
        webp: "/images-webp/menu/grill/kebab_svin_gov.webp",
        fallback: "/images/menu/grill/kebab_svin_gov.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/grill/kebab_svin_gov.webp",
        fallback: "/images/menu/grill/kebab_svin_gov.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/grill/kebab_svin_gov.webp",
        fallback: "/images/menu/grill/kebab_svin_gov.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/grill/kebab_svin_gov.webp",
        fallback: "/images/menu/grill/kebab_svin_gov.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/grill/kebab_svin_gov.webp",
        fallback: "/images/menu/grill/kebab_svin_gov.jpg",
        width: 320,
      },
    },
    'menu/grill/kebab_new.jpg': {
      "original": {
        webp: "/images-webp/menu/grill/kebab_new.webp",
        fallback: "/images/menu/grill/kebab_new.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/grill/kebab_new.webp",
        fallback: "/images/menu/grill/kebab_new.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/grill/kebab_new.webp",
        fallback: "/images/menu/grill/kebab_new.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/grill/kebab_new.webp",
        fallback: "/images/menu/grill/kebab_new.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/grill/kebab_new.webp",
        fallback: "/images/menu/grill/kebab_new.jpg",
        width: 320,
      },
    },
    'menu/grill/grill-010.jpg': {
      "original": {
        webp: "/images-webp/menu/grill/grill-010.webp",
        fallback: "/images/menu/grill/grill-010.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/grill/grill-010.webp",
        fallback: "/images/menu/grill/grill-010.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/grill/grill-010.webp",
        fallback: "/images/menu/grill/grill-010.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/grill/grill-010.webp",
        fallback: "/images/menu/grill/grill-010.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/grill/grill-010.webp",
        fallback: "/images/menu/grill/grill-010.jpg",
        width: 320,
      },
    },
    'menu/grill/grill-009.jpg': {
      "original": {
        webp: "/images-webp/menu/grill/grill-009.webp",
        fallback: "/images/menu/grill/grill-009.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/grill/grill-009.webp",
        fallback: "/images/menu/grill/grill-009.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/grill/grill-009.webp",
        fallback: "/images/menu/grill/grill-009.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/grill/grill-009.webp",
        fallback: "/images/menu/grill/grill-009.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/grill/grill-009.webp",
        fallback: "/images/menu/grill/grill-009.jpg",
        width: 320,
      },
    },
    'menu/grill/grill-008.jpg': {
      "original": {
        webp: "/images-webp/menu/grill/grill-008.webp",
        fallback: "/images/menu/grill/grill-008.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/grill/grill-008.webp",
        fallback: "/images/menu/grill/grill-008.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/grill/grill-008.webp",
        fallback: "/images/menu/grill/grill-008.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/grill/grill-008.webp",
        fallback: "/images/menu/grill/grill-008.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/grill/grill-008.webp",
        fallback: "/images/menu/grill/grill-008.jpg",
        width: 320,
      },
    },
    'menu/grill/grill-005.jpg': {
      "original": {
        webp: "/images-webp/menu/grill/grill-005.webp",
        fallback: "/images/menu/grill/grill-005.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/grill/grill-005.webp",
        fallback: "/images/menu/grill/grill-005.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/grill/grill-005.webp",
        fallback: "/images/menu/grill/grill-005.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/grill/grill-005.webp",
        fallback: "/images/menu/grill/grill-005.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/grill/grill-005.webp",
        fallback: "/images/menu/grill/grill-005.jpg",
        width: 320,
      },
    },
    'menu/grill/grill-003.jpg': {
      "original": {
        webp: "/images-webp/menu/grill/grill-003.webp",
        fallback: "/images/menu/grill/grill-003.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/grill/grill-003.webp",
        fallback: "/images/menu/grill/grill-003.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/grill/grill-003.webp",
        fallback: "/images/menu/grill/grill-003.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/grill/grill-003.webp",
        fallback: "/images/menu/grill/grill-003.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/grill/grill-003.webp",
        fallback: "/images/menu/grill/grill-003.jpg",
        width: 320,
      },
    },
    'menu/grill/grill-002.jpg': {
      "original": {
        webp: "/images-webp/menu/grill/grill-002.webp",
        fallback: "/images/menu/grill/grill-002.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/grill/grill-002.webp",
        fallback: "/images/menu/grill/grill-002.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/grill/grill-002.webp",
        fallback: "/images/menu/grill/grill-002.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/grill/grill-002.webp",
        fallback: "/images/menu/grill/grill-002.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/grill/grill-002.webp",
        fallback: "/images/menu/grill/grill-002.jpg",
        width: 320,
      },
    },
    'menu/grill/file_okun.jpg': {
      "original": {
        webp: "/images-webp/menu/grill/file_okun.webp",
        fallback: "/images/menu/grill/file_okun.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/grill/file_okun.webp",
        fallback: "/images/menu/grill/file_okun.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/grill/file_okun.webp",
        fallback: "/images/menu/grill/file_okun.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/grill/file_okun.webp",
        fallback: "/images/menu/grill/file_okun.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/grill/file_okun.webp",
        fallback: "/images/menu/grill/file_okun.jpg",
        width: 320,
      },
    },
    'menu/grill/chicken_kebabb.jpg': {
      "original": {
        webp: "/images-webp/menu/grill/chicken_kebabb.webp",
        fallback: "/images/menu/grill/chicken_kebabb.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/grill/chicken_kebabb.webp",
        fallback: "/images/menu/grill/chicken_kebabb.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/grill/chicken_kebabb.webp",
        fallback: "/images/menu/grill/chicken_kebabb.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/grill/chicken_kebabb.webp",
        fallback: "/images/menu/grill/chicken_kebabb.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/grill/chicken_kebabb.webp",
        fallback: "/images/menu/grill/chicken_kebabb.jpg",
        width: 320,
      },
    },
    'menu/grill/chicken_kebab.jpg': {
      "original": {
        webp: "/images-webp/menu/grill/chicken_kebab.webp",
        fallback: "/images/menu/grill/chicken_kebab.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/grill/chicken_kebab.webp",
        fallback: "/images/menu/grill/chicken_kebab.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/grill/chicken_kebab.webp",
        fallback: "/images/menu/grill/chicken_kebab.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/grill/chicken_kebab.webp",
        fallback: "/images/menu/grill/chicken_kebab.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/grill/chicken_kebab.webp",
        fallback: "/images/menu/grill/chicken_kebab.jpg",
        width: 320,
      },
    },
    'menu/grill/chicken_adj.jpg': {
      "original": {
        webp: "/images-webp/menu/grill/chicken_adj.webp",
        fallback: "/images/menu/grill/chicken_adj.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/grill/chicken_adj.webp",
        fallback: "/images/menu/grill/chicken_adj.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/grill/chicken_adj.webp",
        fallback: "/images/menu/grill/chicken_adj.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/grill/chicken_adj.webp",
        fallback: "/images/menu/grill/chicken_adj.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/grill/chicken_adj.webp",
        fallback: "/images/menu/grill/chicken_adj.jpg",
        width: 320,
      },
    },
    'menu/grill/beef_kebab.jpg': {
      "original": {
        webp: "/images-webp/menu/grill/beef_kebab.webp",
        fallback: "/images/menu/grill/beef_kebab.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/grill/beef_kebab.webp",
        fallback: "/images/menu/grill/beef_kebab.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/grill/beef_kebab.webp",
        fallback: "/images/menu/grill/beef_kebab.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/grill/beef_kebab.webp",
        fallback: "/images/menu/grill/beef_kebab.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/grill/beef_kebab.webp",
        fallback: "/images/menu/grill/beef_kebab.jpg",
        width: 320,
      },
    },
    'menu/grill/Salmon_grill.jpg': {
      "original": {
        webp: "/images-webp/menu/grill/Salmon_grill.webp",
        fallback: "/images/menu/grill/Salmon_grill.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/grill/Salmon_grill.webp",
        fallback: "/images/menu/grill/Salmon_grill.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/grill/Salmon_grill.webp",
        fallback: "/images/menu/grill/Salmon_grill.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/grill/Salmon_grill.webp",
        fallback: "/images/menu/grill/Salmon_grill.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/grill/Salmon_grill.webp",
        fallback: "/images/menu/grill/Salmon_grill.jpg",
        width: 320,
      },
    },
    'menu/grill/Grilled_shrimp.jpg': {
      "original": {
        webp: "/images-webp/menu/grill/Grilled_shrimp.webp",
        fallback: "/images/menu/grill/Grilled_shrimp.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/grill/Grilled_shrimp.webp",
        fallback: "/images/menu/grill/Grilled_shrimp.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/grill/Grilled_shrimp.webp",
        fallback: "/images/menu/grill/Grilled_shrimp.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/grill/Grilled_shrimp.webp",
        fallback: "/images/menu/grill/Grilled_shrimp.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/grill/Grilled_shrimp.webp",
        fallback: "/images/menu/grill/Grilled_shrimp.jpg",
        width: 320,
      },
    },
    'menu/dessert/oreo.jpg': {
      "original": {
        webp: "/images-webp/menu/dessert/oreo.webp",
        fallback: "/images/menu/dessert/oreo.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/dessert/oreo.webp",
        fallback: "/images/menu/dessert/oreo.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/dessert/oreo.webp",
        fallback: "/images/menu/dessert/oreo.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/dessert/oreo.webp",
        fallback: "/images/menu/dessert/oreo.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/dessert/oreo.webp",
        fallback: "/images/menu/dessert/oreo.jpg",
        width: 320,
      },
    },
    'menu/dessert/java.jpg': {
      "original": {
        webp: "/images-webp/menu/dessert/java.webp",
        fallback: "/images/menu/dessert/java.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/dessert/java.webp",
        fallback: "/images/menu/dessert/java.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/dessert/java.webp",
        fallback: "/images/menu/dessert/java.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/dessert/java.webp",
        fallback: "/images/menu/dessert/java.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/dessert/java.webp",
        fallback: "/images/menu/dessert/java.jpg",
        width: 320,
      },
    },
    'menu/dessert/dessert-002.jpg': {
      "original": {
        webp: "/images-webp/menu/dessert/dessert-002.webp",
        fallback: "/images/menu/dessert/dessert-002.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/dessert/dessert-002.webp",
        fallback: "/images/menu/dessert/dessert-002.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/dessert/dessert-002.webp",
        fallback: "/images/menu/dessert/dessert-002.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/dessert/dessert-002.webp",
        fallback: "/images/menu/dessert/dessert-002.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/dessert/dessert-002.webp",
        fallback: "/images/menu/dessert/dessert-002.jpg",
        width: 320,
      },
    },
    'menu/dessert/dessert-001.jpg': {
      "original": {
        webp: "/images-webp/menu/dessert/dessert-001.webp",
        fallback: "/images/menu/dessert/dessert-001.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/dessert/dessert-001.webp",
        fallback: "/images/menu/dessert/dessert-001.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/dessert/dessert-001.webp",
        fallback: "/images/menu/dessert/dessert-001.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/dessert/dessert-001.webp",
        fallback: "/images/menu/dessert/dessert-001.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/dessert/dessert-001.webp",
        fallback: "/images/menu/dessert/dessert-001.jpg",
        width: 320,
      },
    },
    'menu/dessert/baked-apple.jpg': {
      "original": {
        webp: "/images-webp/menu/dessert/baked-apple.webp",
        fallback: "/images/menu/dessert/baked-apple.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/dessert/baked-apple.webp",
        fallback: "/images/menu/dessert/baked-apple.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/dessert/baked-apple.webp",
        fallback: "/images/menu/dessert/baked-apple.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/dessert/baked-apple.webp",
        fallback: "/images/menu/dessert/baked-apple.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/dessert/baked-apple.webp",
        fallback: "/images/menu/dessert/baked-apple.jpg",
        width: 320,
      },
    },
    'menu/dessert/apple.jpg': {
      "original": {
        webp: "/images-webp/menu/dessert/apple.webp",
        fallback: "/images/menu/dessert/apple.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/dessert/apple.webp",
        fallback: "/images/menu/dessert/apple.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/dessert/apple.webp",
        fallback: "/images/menu/dessert/apple.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/dessert/apple.webp",
        fallback: "/images/menu/dessert/apple.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/dessert/apple.webp",
        fallback: "/images/menu/dessert/apple.jpg",
        width: 320,
      },
    },
    'menu/burger/cheeseburger-deluxe.jpg': {
      "original": {
        webp: "/images-webp/menu/burger/cheeseburger-deluxe.webp",
        fallback: "/images/menu/burger/cheeseburger-deluxe.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/burger/cheeseburger-deluxe.webp",
        fallback: "/images/menu/burger/cheeseburger-deluxe.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/burger/cheeseburger-deluxe.webp",
        fallback: "/images/menu/burger/cheeseburger-deluxe.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/burger/cheeseburger-deluxe.webp",
        fallback: "/images/menu/burger/cheeseburger-deluxe.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/burger/cheeseburger-deluxe.webp",
        fallback: "/images/menu/burger/cheeseburger-deluxe.jpg",
        width: 320,
      },
    },
    'menu/burger/burgerlamb.jpg': {
      "original": {
        webp: "/images-webp/menu/burger/burgerlamb.webp",
        fallback: "/images/menu/burger/burgerlamb.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/burger/burgerlamb.webp",
        fallback: "/images/menu/burger/burgerlamb.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/burger/burgerlamb.webp",
        fallback: "/images/menu/burger/burgerlamb.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/burger/burgerlamb.webp",
        fallback: "/images/menu/burger/burgerlamb.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/burger/burgerlamb.webp",
        fallback: "/images/menu/burger/burgerlamb.jpg",
        width: 320,
      },
    },
    'menu/burger/burgerkaif.jpg': {
      "original": {
        webp: "/images-webp/menu/burger/burgerkaif.webp",
        fallback: "/images/menu/burger/burgerkaif.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/burger/burgerkaif.webp",
        fallback: "/images/menu/burger/burgerkaif.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/burger/burgerkaif.webp",
        fallback: "/images/menu/burger/burgerkaif.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/burger/burgerkaif.webp",
        fallback: "/images/menu/burger/burgerkaif.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/burger/burgerkaif.webp",
        fallback: "/images/menu/burger/burgerkaif.jpg",
        width: 320,
      },
    },
    'menu/breakfast/yogurt.jpg': {
      "original": {
        webp: "/images-webp/menu/breakfast/yogurt.webp",
        fallback: "/images/menu/breakfast/yogurt.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/breakfast/yogurt.webp",
        fallback: "/images/menu/breakfast/yogurt.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/breakfast/yogurt.webp",
        fallback: "/images/menu/breakfast/yogurt.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/breakfast/yogurt.webp",
        fallback: "/images/menu/breakfast/yogurt.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/breakfast/yogurt.webp",
        fallback: "/images/menu/breakfast/yogurt.jpg",
        width: 320,
      },
    },
    'menu/breakfast/vegetable.jpg': {
      "original": {
        webp: "/images-webp/menu/breakfast/vegetable.webp",
        fallback: "/images/menu/breakfast/vegetable.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/breakfast/vegetable.webp",
        fallback: "/images/menu/breakfast/vegetable.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/breakfast/vegetable.webp",
        fallback: "/images/menu/breakfast/vegetable.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/breakfast/vegetable.webp",
        fallback: "/images/menu/breakfast/vegetable.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/breakfast/vegetable.webp",
        fallback: "/images/menu/breakfast/vegetable.jpg",
        width: 320,
      },
    },
    'menu/breakfast/tostlos.jpg': {
      "original": {
        webp: "/images-webp/menu/breakfast/tostlos.webp",
        fallback: "/images/menu/breakfast/tostlos.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/breakfast/tostlos.webp",
        fallback: "/images/menu/breakfast/tostlos.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/breakfast/tostlos.webp",
        fallback: "/images/menu/breakfast/tostlos.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/breakfast/tostlos.webp",
        fallback: "/images/menu/breakfast/tostlos.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/breakfast/tostlos.webp",
        fallback: "/images/menu/breakfast/tostlos.jpg",
        width: 320,
      },
    },
    'menu/breakfast/tostham.jpg': {
      "original": {
        webp: "/images-webp/menu/breakfast/tostham.webp",
        fallback: "/images/menu/breakfast/tostham.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/breakfast/tostham.webp",
        fallback: "/images/menu/breakfast/tostham.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/breakfast/tostham.webp",
        fallback: "/images/menu/breakfast/tostham.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/breakfast/tostham.webp",
        fallback: "/images/menu/breakfast/tostham.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/breakfast/tostham.webp",
        fallback: "/images/menu/breakfast/tostham.jpg",
        width: 320,
      },
    },
    'menu/breakfast/tostavokado.jpg': {
      "original": {
        webp: "/images-webp/menu/breakfast/tostavokado.webp",
        fallback: "/images/menu/breakfast/tostavokado.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/breakfast/tostavokado.webp",
        fallback: "/images/menu/breakfast/tostavokado.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/breakfast/tostavokado.webp",
        fallback: "/images/menu/breakfast/tostavokado.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/breakfast/tostavokado.webp",
        fallback: "/images/menu/breakfast/tostavokado.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/breakfast/tostavokado.webp",
        fallback: "/images/menu/breakfast/tostavokado.jpg",
        width: 320,
      },
    },
    'menu/breakfast/sirniki.jpg': {
      "original": {
        webp: "/images-webp/menu/breakfast/sirniki.webp",
        fallback: "/images/menu/breakfast/sirniki.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/breakfast/sirniki.webp",
        fallback: "/images/menu/breakfast/sirniki.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/breakfast/sirniki.webp",
        fallback: "/images/menu/breakfast/sirniki.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/breakfast/sirniki.webp",
        fallback: "/images/menu/breakfast/sirniki.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/breakfast/sirniki.webp",
        fallback: "/images/menu/breakfast/sirniki.jpg",
        width: 320,
      },
    },
    'menu/breakfast/shaksukatom.jpg': {
      "original": {
        webp: "/images-webp/menu/breakfast/shaksukatom.webp",
        fallback: "/images/menu/breakfast/shaksukatom.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/breakfast/shaksukatom.webp",
        fallback: "/images/menu/breakfast/shaksukatom.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/breakfast/shaksukatom.webp",
        fallback: "/images/menu/breakfast/shaksukatom.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/breakfast/shaksukatom.webp",
        fallback: "/images/menu/breakfast/shaksukatom.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/breakfast/shaksukatom.webp",
        fallback: "/images/menu/breakfast/shaksukatom.jpg",
        width: 320,
      },
    },
    'menu/breakfast/rice.jpg': {
      "original": {
        webp: "/images-webp/menu/breakfast/rice.webp",
        fallback: "/images/menu/breakfast/rice.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/breakfast/rice.webp",
        fallback: "/images/menu/breakfast/rice.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/breakfast/rice.webp",
        fallback: "/images/menu/breakfast/rice.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/breakfast/rice.webp",
        fallback: "/images/menu/breakfast/rice.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/breakfast/rice.webp",
        fallback: "/images/menu/breakfast/rice.jpg",
        width: 320,
      },
    },
    'menu/breakfast/ovsanka.jpg': {
      "original": {
        webp: "/images-webp/menu/breakfast/ovsanka.webp",
        fallback: "/images/menu/breakfast/ovsanka.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/breakfast/ovsanka.webp",
        fallback: "/images/menu/breakfast/ovsanka.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/breakfast/ovsanka.webp",
        fallback: "/images/menu/breakfast/ovsanka.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/breakfast/ovsanka.webp",
        fallback: "/images/menu/breakfast/ovsanka.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/breakfast/ovsanka.webp",
        fallback: "/images/menu/breakfast/ovsanka.jpg",
        width: 320,
      },
    },
    'menu/breakfast/oatmeal-breakfast.jpg': {
      "original": {
        webp: "/images-webp/menu/breakfast/oatmeal-breakfast.webp",
        fallback: "/images/menu/breakfast/oatmeal-breakfast.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/breakfast/oatmeal-breakfast.webp",
        fallback: "/images/menu/breakfast/oatmeal-breakfast.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/breakfast/oatmeal-breakfast.webp",
        fallback: "/images/menu/breakfast/oatmeal-breakfast.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/breakfast/oatmeal-breakfast.webp",
        fallback: "/images/menu/breakfast/oatmeal-breakfast.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/breakfast/oatmeal-breakfast.webp",
        fallback: "/images/menu/breakfast/oatmeal-breakfast.jpg",
        width: 320,
      },
    },
    'menu/breakfast/kartoshka.jpg': {
      "original": {
        webp: "/images-webp/menu/breakfast/kartoshka.webp",
        fallback: "/images/menu/breakfast/kartoshka.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/breakfast/kartoshka.webp",
        fallback: "/images/menu/breakfast/kartoshka.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/breakfast/kartoshka.webp",
        fallback: "/images/menu/breakfast/kartoshka.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/breakfast/kartoshka.webp",
        fallback: "/images/menu/breakfast/kartoshka.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/breakfast/kartoshka.webp",
        fallback: "/images/menu/breakfast/kartoshka.jpg",
        width: 320,
      },
    },
    'menu/breakfast/kaif-breakfast.jpg': {
      "original": {
        webp: "/images-webp/menu/breakfast/kaif-breakfast.webp",
        fallback: "/images/menu/breakfast/kaif-breakfast.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/breakfast/kaif-breakfast.webp",
        fallback: "/images/menu/breakfast/kaif-breakfast.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/breakfast/kaif-breakfast.webp",
        fallback: "/images/menu/breakfast/kaif-breakfast.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/breakfast/kaif-breakfast.webp",
        fallback: "/images/menu/breakfast/kaif-breakfast.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/breakfast/kaif-breakfast.webp",
        fallback: "/images/menu/breakfast/kaif-breakfast.jpg",
        width: 320,
      },
    },
    'menu/breakfast/grechka.jpg': {
      "original": {
        webp: "/images-webp/menu/breakfast/grechka.webp",
        fallback: "/images/menu/breakfast/grechka.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/breakfast/grechka.webp",
        fallback: "/images/menu/breakfast/grechka.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/breakfast/grechka.webp",
        fallback: "/images/menu/breakfast/grechka.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/breakfast/grechka.webp",
        fallback: "/images/menu/breakfast/grechka.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/breakfast/grechka.webp",
        fallback: "/images/menu/breakfast/grechka.jpg",
        width: 320,
      },
    },
    'menu/breakfast/french_fries.jpg': {
      "original": {
        webp: "/images-webp/menu/breakfast/french_fries.webp",
        fallback: "/images/menu/breakfast/french_fries.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/breakfast/french_fries.webp",
        fallback: "/images/menu/breakfast/french_fries.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/breakfast/french_fries.webp",
        fallback: "/images/menu/breakfast/french_fries.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/breakfast/french_fries.webp",
        fallback: "/images/menu/breakfast/french_fries.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/breakfast/french_fries.webp",
        fallback: "/images/menu/breakfast/french_fries.jpg",
        width: 320,
      },
    },
    'menu/breakfast/cheeseburger-deluxe.jpg': {
      "original": {
        webp: "/images-webp/menu/breakfast/cheeseburger-deluxe.webp",
        fallback: "/images/menu/breakfast/cheeseburger-deluxe.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/breakfast/cheeseburger-deluxe.webp",
        fallback: "/images/menu/breakfast/cheeseburger-deluxe.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/breakfast/cheeseburger-deluxe.webp",
        fallback: "/images/menu/breakfast/cheeseburger-deluxe.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/breakfast/cheeseburger-deluxe.webp",
        fallback: "/images/menu/breakfast/cheeseburger-deluxe.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/breakfast/cheeseburger-deluxe.webp",
        fallback: "/images/menu/breakfast/cheeseburger-deluxe.jpg",
        width: 320,
      },
    },
    'menu/breakfast/caesar-salad.jpg': {
      "original": {
        webp: "/images-webp/menu/breakfast/caesar-salad.webp",
        fallback: "/images/menu/breakfast/caesar-salad.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/breakfast/caesar-salad.webp",
        fallback: "/images/menu/breakfast/caesar-salad.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/breakfast/caesar-salad.webp",
        fallback: "/images/menu/breakfast/caesar-salad.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/breakfast/caesar-salad.webp",
        fallback: "/images/menu/breakfast/caesar-salad.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/breakfast/caesar-salad.webp",
        fallback: "/images/menu/breakfast/caesar-salad.jpg",
        width: 320,
      },
    },
    'menu/breakfast/apple-dessert.jpg': {
      "original": {
        webp: "/images-webp/menu/breakfast/apple-dessert.webp",
        fallback: "/images/menu/breakfast/apple-dessert.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/breakfast/apple-dessert.webp",
        fallback: "/images/menu/breakfast/apple-dessert.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/breakfast/apple-dessert.webp",
        fallback: "/images/menu/breakfast/apple-dessert.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/breakfast/apple-dessert.webp",
        fallback: "/images/menu/breakfast/apple-dessert.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/breakfast/apple-dessert.webp",
        fallback: "/images/menu/breakfast/apple-dessert.jpg",
        width: 320,
      },
    },
    'menu/breakfast/Shakshuka-salmon.jpg': {
      "original": {
        webp: "/images-webp/menu/breakfast/Shakshuka-salmon.webp",
        fallback: "/images/menu/breakfast/Shakshuka-salmon.jpg",
      },
      "large": {
        webp: "/images-webp/large/menu/breakfast/Shakshuka-salmon.webp",
        fallback: "/images/menu/breakfast/Shakshuka-salmon.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/menu/breakfast/Shakshuka-salmon.webp",
        fallback: "/images/menu/breakfast/Shakshuka-salmon.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/menu/breakfast/Shakshuka-salmon.webp",
        fallback: "/images/menu/breakfast/Shakshuka-salmon.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/menu/breakfast/Shakshuka-salmon.webp",
        fallback: "/images/menu/breakfast/Shakshuka-salmon.jpg",
        width: 320,
      },
    },
    'beauty/services/facial.jpg': {
      "original": {
        webp: "/images-webp/beauty/services/facial.webp",
        fallback: "/images/beauty/services/facial.jpg",
      },
      "large": {
        webp: "/images-webp/large/beauty/services/facial.webp",
        fallback: "/images/beauty/services/facial.jpg",
        width: 1600,
      },
      "medium": {
        webp: "/images-webp/medium/beauty/services/facial.webp",
        fallback: "/images/beauty/services/facial.jpg",
        width: 1024,
      },
      "small": {
        webp: "/images-webp/small/beauty/services/facial.webp",
        fallback: "/images/beauty/services/facial.jpg",
        width: 768,
      },
      "thumbnail": {
        webp: "/images-webp/thumbnail/beauty/services/facial.webp",
        fallback: "/images/beauty/services/facial.jpg",
        width: 320,
      },
    },
  }
};
