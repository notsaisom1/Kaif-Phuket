import { createGlobalStyle } from 'styled-components';

// Import custom KAIF font
import kaifFontPath from '../../assets/fonts/kaif.ttf';

// Глобальные стили для всего сайта, включая страницы СПА, спорт и контакты
const GlobalStyles = createGlobalStyle`
  /* KAIF brand font */
  @font-face {
    font-family: 'KAIF';
    src: url(${kaifFontPath}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  /* Стиль для исправления проблем с переходами между страницами */
  .route-transition {
    animation: fadeIn 0.5s ease forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Глобальное правило для сохранения стилей между страницами */
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Разрешаем простые transitions для интерактивности */
  button, a, [role="button"], input, select, textarea {
    transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, opacity 0.15s ease, transform 0.15s ease !important;
  }

  /* Hover эффекты для карточек */
  [class*="Card"], [class*="card"] {
    transition: box-shadow 0.2s ease, transform 0.2s ease !important;
  }
  
  /* Оптимизация производительности */
  .will-change-transform {
    will-change: transform;
  }
  
  .will-change-opacity {
    will-change: opacity;
  }
  
  /* Улучшения для анимаций */
  @media (prefers-reduced-motion: no-preference) {
    /* ВРЕМЕННО ОТКЛЮЧЕНО - может мешать хедеру
    *:not(header):not(header *) {
      backface-visibility: hidden;
      perspective: 1000px;
    }
    */
  }
  
  /* Отключение анимаций для пользователей с настройкой reduced-motion */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
  
  /* Базовые стили для всего сайта, основанные на теме */
  body {
    font-family: ${({ theme }) => theme.fonts.primary || '"Inter", sans-serif'};
    color: ${({ theme }) => theme.colors.text.primary || '#2C3E2D'};
    margin: 0;
    padding: 0;
    padding-bottom: env(safe-area-inset-bottom, 0px);
    overflow-x: hidden;
    scroll-behavior: auto;
  }

  /* Дополнительные оптимизации для мобильных устройств */
  @media (max-width: 768px) {
    html {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      overflow-x: hidden !important;
    }
  }
  
  /* Отключение автоматической фиксации при прокрутке */
  html, body {
    scroll-snap-type: none !important;
    scroll-snap-align: none !important;
    scroll-snap-stop: normal !important;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    line-height: 1;
  }
  
  /* Предотвращение рывков в секциях */
  section, div, main {
    scroll-snap-align: none !important;
    scroll-snap-type: none !important;
  }
  
  /* Устранение белых зазоров между секциями */
  section {
    display: block;
    margin: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
  }
  
  /* Устранение зазоров между main и footer */
  main {
    margin: 0;
    padding-bottom: 0;
    display: block;
  }

  footer {
    display: block;
    margin-top: 0;
    border-top: none;
  }
  
  /* Типография */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading || '"Playfair Display", serif'};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.dark || '#1A2B1D'};
  }
  
  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    line-height: 1.2;
  }
  
  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    line-height: 1.25;
  }
  
  h3 {
    font-size: clamp(1.5rem, 4vw, 2.25rem);
    line-height: 1.3;
  }
  
  h4 {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    line-height: 1.35;
  }
  
  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 1.6;
  }
  
  a {
    color: ${({ theme }) => theme.colors.primary || '#90B3A7'};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondary || '#D4A574'};
    }
  }
  
  button {
    font-family: ${({ theme }) => theme.fonts.primary || '"Inter", sans-serif'};
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  /* Контейнеры */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  section:not([class]) {
    padding: 5rem 0;
  }
  
  /* Особые стили для страниц СПА, спорт и контакты */
  /* СПА страница */
  .spa-page {
    .hero-section {
      background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    }
    
    .feature-card {
      background: #FFFFFF;
      border-radius: 8px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
    }
  }
  
  /* Спорт страница */
  .sports-page {
    .hero-section {
      background: linear-gradient(135deg, #E8734A 0%, #F28A5F 100%);
    }
    
    .schedule-item {
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    }
  }
  
  /* Контакты страница */
  .contacts-page {
    .contact-info {
      background: #FFFFFF;
      border-radius: 8px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
    }
    
    .contact-form {
      background: #F9F7F4;
      border-radius: 8px;
    }
  }
  
  /* Устранение оранжевой подсветки при нажатии */
  a, button, input, textarea, select {
    -webkit-tap-highlight-color: transparent;
  }
  
  /* Специальные стили для кнопки бронирования */
  .booking-button {
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    
    &:hover, &:active, &:focus {
      background: linear-gradient(135deg, #7C9D93 0%, #94B1A4 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(144, 179, 167, 0.3);
    }
  }
  

`;

export default GlobalStyles;
