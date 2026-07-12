import { createGlobalStyle } from 'styled-components';

// Глобальные стили типографики - Jost (минималистичный геометрический шрифт)
const GlobalFontStyle = createGlobalStyle`
  /* Импортируем шрифт KAIF */
  @font-face {
    font-family: 'KAIF';
    src: url('/src/assets/fonts/kaif.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  /* Базовая типографика - Jost */
  body {
    font-family: 'Jost', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Заголовки - Plus Jakarta Sans (bold uppercase, как Hero) */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 800;
    letter-spacing: -0.02em;
    text-transform: uppercase;
  }

  h1 {
    font-weight: 800;
  }

  h2 {
    font-weight: 800;
  }

  /* Параграфы и текст */
  p, span, li {
    font-family: 'Jost', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 400;
    line-height: 1.6;
  }

  /* Интерактивные элементы */
  button, input, textarea, select, label {
    font-family: 'Jost', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 400;
  }

  /* Навигация */
  header nav a {
    font-family: 'Jost', sans-serif;
  }

  /* Языковые настройки размера шрифта для хедера */
  html[lang='ru'] header nav a,
  html[lang='en'] header nav a {
    font-size: 0.85rem;
  }

  html[lang='th'] header nav a {
    font-size: 1.05rem;
  }

  /* Настройки для мобильной навигации */
  html[lang='ru'] div[class*='MobileNavContainer'] a,
  html[lang='en'] div[class*='MobileNavContainer'] a {
    font-size: 1rem;
  }

  html[lang='th'] div[class*='MobileNavContainer'] a {
    font-size: 1.2rem;
  }

  /* Код */
  code, pre {
    font-family: 'JetBrains Mono', Consolas, monospace;
  }
`;

export default GlobalFontStyle;
