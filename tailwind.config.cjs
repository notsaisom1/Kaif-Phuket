/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // KAIF Color Palette - УНИВЕРСАЛЬНАЯ СХЕМА
        primary: {
          50: '#F0F7F4',
          100: '#DCEDE6',
          200: '#BCDBD0',
          300: '#90B3A7', // Main primary - спа и релакс
          400: '#7DA096',
          500: '#6A8D85',
          600: '#5A7A74',
          700: '#4A6663',
          800: '#3A5252',
          900: '#2C3E41',
        },
        secondary: {
          50: '#FAF7F2',
          100: '#F4EDE1',
          200: '#EBDBC5',
          300: '#D4A574', // Main secondary - ресторан, элегантность
          400: '#C89760',
          500: '#BC894C',
          600: '#A07541',
          700: '#856237',
          800: '#69502C',
          900: '#4E3E22',
        },
        tertiary: {
          50: '#F4F6F2',
          100: '#E8EDE4',
          200: '#D1DBC9',
          300: '#B8C4A8', // Main tertiary - природный баланс
          400: '#A5B497',
          500: '#92A486',
          600: '#7F9475',
          700: '#6C8464',
          800: '#597453',
          900: '#466442',
        },
        
        // ЭНЕРГИЧНЫЕ АКЦЕНТЫ ДЛЯ АКТИВНЫХ ЗОН
        energy: {
          50: '#FEF3F0',
          100: '#FCE4DD',
          200: '#F9C9BB',
          300: '#E8734A', // Main energy - спорт, энергия
          400: '#E56339',
          500: '#E25228',
          600: '#C8421F',
          700: '#AE3316',
          800: '#94240D',
          900: '#7A1504',
        },
        power: {
          50: '#F0F5F7',
          100: '#DAEAEF',
          200: '#B5D5DF',
          300: '#2D5B69', // Main power - боевые искусства, сила
          400: '#26505C',
          500: '#1F454F',
          600: '#183A42',
          700: '#112F35',
          800: '#0A2428',
          900: '#03191B',
        },
        fresh: {
          50: '#F0F7FC',
          100: '#DCEEF9',
          200: '#B9DDF3',
          300: '#4A90B8', // Main fresh - бассейн, активность
          400: '#3F81AA',
          500: '#34729C',
          600: '#29638E',
          700: '#1E5480',
          800: '#134572',
          900: '#083664',
        },
        
        // ЗОНАЛЬНЫЕ ЦВЕТА
        'zone-spa': '#90B3A7',
        'zone-restaurant': '#D4A574',
        'zone-fitness': '#E8734A',
        'zone-combat': '#2D5B69',
        'zone-pool': '#4A90B8',
        'zone-banya': '#8B4513',
        'zone-sauna': '#8B7355',
        
        background: '#F5F3F0',
        surface: '#FFFFFF',
        'surface-secondary': '#FDFCFA',
        
        // Text colors
        'text-primary': '#2C3E2D',
        'text-secondary': '#5A6B5D',
        'text-light': '#8B9A8E',
        'text-dark': '#1A2B1D', // Очень темный для заголовков
        
        // Status colors - обновленные
        success: '#7FB069',
        warning: '#E9B44C',
        error: '#E07A5F',
        info: '#4A90B8', // Свежий голубой
      },
      
      fontFamily: {
        'primary': ['"Jost"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'heading': ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'kaif': ['"KAIF"', '"Jost"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },

      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },

      boxShadow: {
        // Базовые тени
        'wellness-sm': '0 1px 3px 0 rgba(144, 179, 167, 0.08), 0 1px 2px 0 rgba(144, 179, 167, 0.06)',
        'wellness-md': '0 4px 6px -1px rgba(144, 179, 167, 0.08), 0 2px 4px -1px rgba(144, 179, 167, 0.06)',
        'wellness-lg': '0 10px 15px -3px rgba(144, 179, 167, 0.08), 0 4px 6px -2px rgba(144, 179, 167, 0.05)',
        'wellness-xl': '0 20px 25px -5px rgba(144, 179, 167, 0.08), 0 10px 10px -5px rgba(144, 179, 167, 0.04)',
        'wellness-2xl': '0 25px 50px -12px rgba(144, 179, 167, 0.25)',
        
        // Энергичные тени
        'glow': '0 0 20px rgba(144, 179, 167, 0.15)',
        'glow-secondary': '0 0 20px rgba(212, 165, 116, 0.15)',
        'glow-energy': '0 0 25px rgba(232, 115, 74, 0.2)',
        'glow-power': '0 0 25px rgba(45, 91, 105, 0.2)',
        'glow-fresh': '0 0 25px rgba(74, 144, 184, 0.2)',
        
        // Динамичные тени
        'dynamic': '0 8px 32px rgba(232, 115, 74, 0.15), 0 4px 16px rgba(45, 91, 105, 0.1)',
        'strong': '0 12px 40px rgba(45, 91, 105, 0.2), 0 6px 20px rgba(232, 115, 74, 0.1)',
      },

      borderRadius: {
        'organic': '40% 60% 70% 30% / 40% 50% 60% 50%',
        'dynamic': '20px 40px 20px 40px', // Динамичная форма
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-gentle': 'pulseGentle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'breathing': 'breathing 4s ease-in-out infinite',
        
        // Энергичные анимации
        'energy-pulse': 'energyPulse 2s ease-in-out infinite',
        'power-shake': 'powerShake 0.5s ease-in-out',
        'dynamic-rotate': 'dynamicRotate 3s linear infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        
        // Новые энергичные анимации
        energyPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 10px rgba(232, 115, 74, 0.2)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(232, 115, 74, 0.4)',
            transform: 'scale(1.02)'
          },
        },
        powerShake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
        dynamicRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },

      backgroundImage: {
        // Базовые градиенты
        'gradient-primary': 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #D4A574 0%, #E1B885 100%)',
        'gradient-energy': 'linear-gradient(135deg, #E8734A 0%, #F28A5F 100%)',
        'gradient-power': 'linear-gradient(135deg, #2D5B69 0%, #3D7084 100%)',
        'gradient-fresh': 'linear-gradient(135deg, #4A90B8 0%, #5FA3CC 100%)',
        
        // Зональные градиенты
        'gradient-spa': 'linear-gradient(135deg, #90B3A7 0%, #B8C4A8 50%, #A8C5B8 100%)',
        'gradient-fitness': 'linear-gradient(135deg, #E8734A 0%, #D4A574 50%, #F28A5F 100%)',
        'gradient-combat': 'linear-gradient(135deg, #2D5B69 0%, #1A2B1D 50%, #3D7084 100%)',
        'gradient-pool': 'linear-gradient(135deg, #4A90B8 0%, #90B3A7 50%, #5FA3CC 100%)',
        
        // Универсальные
        'gradient-nature': 'linear-gradient(135deg, #B8C4A8 0%, #A8C5B8 50%, #90B3A7 100%)',
        'gradient-wellness': 'linear-gradient(45deg, #F5F3F0 0%, #E8E5E0 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(144, 179, 167, 0.9) 0%, rgba(232, 115, 74, 0.2) 50%, rgba(212, 165, 116, 0.8) 100%)',
        
        // Динамичные градиенты
        'gradient-dynamic': 'linear-gradient(45deg, #E8734A 0%, #2D5B69 50%, #4A90B8 100%)',
        'gradient-strength': 'linear-gradient(135deg, #2D5B69 0%, #E8734A 100%)',
      },
    },
  },
  plugins: [],
}
