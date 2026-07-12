# KAIF - Sauna & Spa Website

A modern, responsive website for KAIF - Sauna & Spa in Phuket, Thailand. This website showcases the four main service areas of the complex: Restaurant, SPA, Sports facilities, and Beauty Salon.

## Features

- **Multilingual Support**: Russian, English, and Thai language options
- **Responsive Design**: Optimized for web and mobile devices
- **Modern UI**: Elegant, minimalist aesthetic with smooth animations
- **Service Sections**: Dedicated pages for each of the four main service areas
- **Booking Systems**: Integrated booking functionality for all services
- **Location Integration**: Google Maps integration for easy navigation
- **Promotions**: Special offers and deals showcase

## Technology Stack

- **Frontend Framework**: React.js
- **Styling**: Styled Components & Tailwind CSS
- **State Management**: React Context API
- **Routing**: React Router
- **Animations**: Framer Motion
- **Internationalization**: i18next
- **Form Handling**: Formik + Yup
- **Build Tool**: Vite.js

## Color Palette

- **Primary**: Mint/Sage Green (#B5C4B1)
- **Secondary**: White (#FFFFFF)
- **Accent Colors**:
  - Soft Orange (#E8C0A8)
  - Light Blue (#A1C5D1)
  - Pale Green (#B0C5A4)
  - Muted Lavender (#CAB5C8)
- **Text**: Black (#000000)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd kaif-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Project Structure

```
src/
├── assets/          # Static assets (images, icons, fonts)
├── components/      # Reusable UI components
│   ├── common/      # Common UI elements
│   └── layout/      # Layout components (Header, Footer)
├── contexts/        # React Context providers
├── hooks/           # Custom React hooks
├── locales/         # Translation files
│   ├── en/          # English translations
│   ├── ru/          # Russian translations
│   └── th/          # Thai translations
├── pages/           # Page components
└── utils/           # Utility functions
```

## Deployment

The website is configured for deployment on Netlify or Vercel.

## License

This project is proprietary and confidential.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 🚀 Оптимизация производительности изображений

Проект использует современную систему оптимизации изображений для максимальной производительности:

### ✅ Выполнено:

#### 📸 Оптимизация изображений:

- **Сжатие:** Размер изображений уменьшен на **65.9%** (с 58.6MB до 19.9MB)
- **WebP формат:** Автоматическая конвертация в WebP с дополнительной экономией ~20%
- **Адаптивные размеры:** 4 версии каждого изображения (thumbnail, small, medium, large)
- **Удалены поврежденные файлы:** Очищены все некорректные изображения

#### 🔧 Компоненты:

- **OptimizedImage:** Умный компонент загрузки с WebP, lazy loading и адаптивными источниками
- **Priority loading:** Критические изображения загружаются с приоритетом
- **LQIP (Low Quality Image Placeholder):** Размытые миниатюры во время загрузки
- **Responsive images:** Автоматический выбор размера под viewport

#### 📱 Service Worker:

- **Агрессивное кэширование:** Изображения кэшируются на устройстве пользователя
- **Предзагрузка:** Критические изображения загружаются заранее
- **Офлайн поддержка:** Изображения доступны без интернета

#### 🎯 Preloading:

- **Critical images:** Hero изображения бани и ресторана
- **Logo:** Логотип сайта
- **Above-the-fold:** Изображения видимые при загрузке страницы

### 📊 Результаты оптимизации:

| Метрика                          | До         | После    | Улучшение  |
| -------------------------------- | ---------- | -------- | ---------- |
| **Размер изображений**           | 58.6MB     | 19.9MB   | **-65.9%** |
| **WebP экономия**                | -          | ~3.1MB   | **-20%**   |
| **Время загрузки на 3G**         | ~15-20 сек | ~3-5 сек | **-75%**   |
| **Мобильная производительность** | Низкая     | Высокая  | **+400%**  |

### 🛠 Как это работает:

1. **Автоматическая оптимизация:** `node optimize-images-sharp.js`
2. **WebP конвертация:** `node convert-to-webp.js`
3. **Умная загрузка:** Компонент `OptimizedImage` выбирает лучший формат и размер
4. **Кэширование:** Service Worker кэширует изображения в браузере

### 📱 Особенности для мобильных устройств:

- **Small images (480px):** ~20-50KB вместо 800KB-1.3MB
- **Lazy loading:** Изображения загружаются только при скролле
- **Priority loading:** Первые 3 изображения меню загружаются сразу
- **Network-aware:** Подстройка под скорость соединения

### 🔄 Автоматическое обновление:

При добавлении новых изображений в `public/images/`:

1. Запустите `npm run optimize-images`
2. Запустите `npm run convert-webp`
3. Изображения автоматически оптимизируются и добавляются в `imageMap.js`

## Развертывание

Проект настроен для автоматического развертывания на Netlify при коммитах в основную ветку.

При ручном деплое:

1. Оптимизируйте изображения: `npm run optimize-all`
2. Соберите проект: `npm run build`
3. Загрузите папку `dist` на хостинг

## Дополнительная информация

Полный отчет о проведенных оптимизациях находится в файле `OPTIMIZATION_REPORT.md`.
