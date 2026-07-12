export const theme = {
  colors: {
    // KAIF Color Palette - УНИВЕРСАЛЬНАЯ СХЕМА ДЛЯ МНОГОФУНКЦИОНАЛЬНОГО КОМПЛЕКСА
    primary: '#90B3A7',      // Мягкий зеленый чай (спа, релакс)
    secondary: '#D4A574',    // Теплый терракот (элегантность, ресторан)
    tertiary: '#B8C4A8',     // Оливковый (природный баланс)
    
    // ЭНЕРГИЧНЫЕ АКЦЕНТЫ ДЛЯ АКТИВНЫХ ЗОН
    energy: '#E8734A',       // Динамичный оранжевый (спорт, энергия)
    power: '#2D5B69',        // Глубокий сине-зеленый (сила, боевые искусства)
    fresh: '#4A90B8',        // Свежий голубой (бассейн, активность)
    
    background: '#FFFFFF',   // Чистый белый (основной фон)
    surface: '#FFFFFF',      // Чистый белый (карточки)
    surfaceSecondary: '#FDFCFA', // Очень светлый кремовый
    
    // Text colors
    text: {
      primary: '#2C3E2D',    // Темно-зеленый для основного текста
      secondary: '#5A6B5D',  // Средний зеленый для вторичного текста
      light: '#8B9A8E',      // Светлый зеленый для подписей
      white: '#FFFFFF',      // Белый для темных фонов
      dark: '#1A2B1D',       // Очень темный для заголовков
    },

    // ЗОНАЛЬНЫЕ ЦВЕТА ДЛЯ РАЗНЫХ УСЛУГ
    zones: {
      spa: '#90B3A7',        // Спа и релакс
      restaurant: '#D4A574', // Ресторан
      fitness: '#E8734A',    // Спортзал
      combat: '#2D5B69',     // Боевые искусства
      pool: '#4A90B8',       // Бассейн
      banya: '#8B4513',      // Русская баня
      sauna: '#8B7355',      // Баня и хаммам
    },

    // Status colors - обновленная палитра под голубую тему
    success: '#5CB3CC',      // Голубой успех
    warning: '#FFD166',      // Ясный желтый (контрастный с голубым)
    error: '#EF476F',        // Яркий розовый (контрастный с голубым)
    info: '#4A90B8',         // Классический голубой

    // Градиенты - разнообразные для разных зон
    gradients: {
      primary: 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)',
      secondary: 'linear-gradient(135deg, #D4A574 0%, #E1B885 100%)',
      energy: 'linear-gradient(135deg, #E8734A 0%, #F28A5F 100%)',
      power: 'linear-gradient(135deg, #2D5B69 0%, #3D7084 100%)',
      fresh: 'linear-gradient(135deg, #4A90B8 0%, #5FA3CC 100%)',
      
      // Зональные градиенты
      spa: 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)',
      restaurant: 'linear-gradient(135deg, #D4A574 0%, #E1B885 100%)',
      fitness: 'linear-gradient(135deg, #E8734A 0%, #F28A5F 100%)',
      combat: 'linear-gradient(135deg, #2D5B69 0%, #3D7084 100%)',
      pool: 'linear-gradient(135deg, #4A90B8 0%, #5FA3CC 100%)',
      banya: 'linear-gradient(135deg, #8B4513 0%, #CD853F 100%)',
      sauna: 'linear-gradient(135deg, #8B7355 0%, #A18A6D 100%)',
    },
  },
  
  // Typography
  fonts: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    heading: '"Playfair Display", Georgia, serif',
    accent: '"Montserrat", Arial, sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
  
  // Font Sizes (модульная шкала 1.2)
  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    md: '1.125rem',   // 18px
    lg: '1.25rem',    // 20px
    xl: '1.5rem',     // 24px
    '2xl': '1.875rem', // 30px
    '3xl': '2.25rem',  // 36px
    '4xl': '3rem',     // 48px
    '5xl': '3.75rem',  // 60px
    '6xl': '4.5rem',   // 72px
  },
  
  // Font Weights
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  
  // Spacing
  space: {
    '0': '0',
    '0.5': '0.125rem', // 2px
    '1': '0.25rem',    // 4px
    '2': '0.5rem',     // 8px
    '3': '0.75rem',    // 12px
    '4': '1rem',       // 16px
    '5': '1.25rem',    // 20px
    '6': '1.5rem',     // 24px
    '8': '2rem',       // 32px
    '10': '2.5rem',    // 40px
    '12': '3rem',      // 48px
    '16': '4rem',      // 64px
    '20': '5rem',      // 80px
    '24': '6rem',      // 96px
    '32': '8rem',      // 128px
    '40': '10rem',     // 160px
    '48': '12rem',     // 192px
    '56': '14rem',     // 224px
    '64': '16rem',     // 256px
  },

  // Line Heights
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  
  // Размеры и Breakpoints
  sizes: {
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
    },
  },
  
  // Breakpoints
  breakpoints: {
    xs: '480px',
    sm: '640px', 
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1400px',
  },
  
  // Border Radius
  radii: {
    none: '0',
    sm: '0.125rem',   // 2px
    default: '0.25rem', // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px',
  },
  
  // Borders
  borders: {
    none: 'none',
    thin: '1px solid',
    default: '2px solid',
    thick: '4px solid',
  },
  
  // Box Shadows
  shadows: {
    none: 'none',
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(144, 179, 167, 0.5)',
    softGlow: '0 5px 15px rgba(144, 179, 167, 0.3)',
  },

  // Z-Indexes
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  
  // Transition Presets
  transitions: {
    default: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elegant: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  
  // Animation Presets
  animations: {
    fadeIn: 'fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fadeOut: 'fadeOut 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slideUp: 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    slideDown: 'slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  },
};

export default theme;
