# KAIF - Sauna & Spa

Современный веб-сайт для премиального велнес-комплекса KAIF на Пхукете.

## 🚀 Быстрый старт

### Предварительные требования

- Node.js 18+
- npm или yarn

### Установка

```bash
# Клонируйте репозиторий
git clone https://github.com/IvanMitska/Kaif-Phuket.git
cd Kaif-Phuket

# Установите зависимости
npm install

# Настройте переменные окружения (необязательно)
cp .env.example .env
# Отредактируйте .env файл при необходимости

# Запустите локальный сервер разработки
npm run dev
```

### Переменные окружения

Создайте файл `.env` в корневой директории проекта:

```env
# Mapbox API Token (необязательно - для отображения карт)
# Получите токен на https://account.mapbox.com/access-tokens/
VITE_MAPBOX_ACCESS_TOKEN=your_mapbox_token_here

# Environment
VITE_NODE_ENV=development

# API URL (если есть бэкенд)
VITE_API_URL=https://api.yoursite.com
```

**Важно**: Без токена Mapbox карта будет показывать плейсхолдер, но сайт будет работать нормально.

## 🛠 Доступные команды

```bash
# Разработка
npm run dev          # Запуск dev сервера
npm run build        # Сборка для продакшена
npm run preview      # Предварительный просмотр билда

# Оптимизация изображений
npm run optimize-images    # Оптимизация изображений
npm run convert-webp       # Конвертация в WebP
npm run optimize-all       # Полная оптимизация

# Линтинг
npm run lint         # Проверка кода ESLint
```

## 📁 Структура проекта

```
src/
├── components/          # React компоненты
│   ├── common/         # Общие компоненты
│   ├── home/           # Компоненты главной страницы
│   ├── spa/            # Компоненты SPA секции
│   ├── sports/         # Компоненты спортивной секции
│   └── ...
├── pages/              # Страницы приложения
├── locales/            # Файлы переводов (ru, en, th)
├── styles/             # CSS стили
└── utils/              # Утилиты
```

## 🌐 Мультиязычность

Сайт поддерживает 3 языка:

- 🇷🇺 Русский (основной)
- 🇬🇧 Английский
- 🇹🇭 Тайский

Переводы находятся в `src/locales/[lang]/translation.json`

## 🔒 Безопасность

Проект включает:

- Защита от XSS атак
- Content Security Policy (CSP)
- Блокировка доступа к служебным файлам
- Безопасное хранение API ключей

## 🚀 Деплой

### Netlify

Проект готов к деплою на Netlify. Конфигурация находится в `netlify.toml`.

### Vercel

Альтернативная конфигурация для Vercel в `vercel.json`.

### GitHub Pages

ไม่ใช้แล้ว — deploy ด้วย Netlify เป็นหลัก (ลบ workflow ออกแล้ว)

### Staff CMS (Sanity)

พนักงานแก้เบอร์ / เวลา / ที่อยู่ / อีเวนต์ / โปรโม / รูปผ่าน Sanity Studio โดยไม่ต้องแตะโค้ด

- Setup: [`docs/CMS-SETUP.md`](docs/CMS-SETUP.md)
- คู่มือพนักงาน: [`docs/STAFF-CMS-GUIDE.md`](docs/STAFF-CMS-GUIDE.md)
- Studio: โฟลเดอร์ `studio/`

## 🎨 Технологии

- **Frontend**: React 19, Vite 6
- **CMS**: Sanity (site settings, events, promotions)
- **Стили**: Styled Components, Tailwind CSS
- **Анимации**: Framer Motion
- **Роутинг**: React Router 7
- **Интернационализация**: react-i18next
- **Формы**: Formik + Yup
- **Иконки**: Heroicons
- **Оптимизация изображений**: Sharp, WebP

## 📱 Особенности

- ✅ Адаптивный дизайн для всех устройств
- ✅ Оптимизация производительности
- ✅ SEO оптимизация
- ✅ Прогрессивная загрузка изображений
- ✅ Поддержка WebP формата
- ✅ Плавные анимации и переходы
- ✅ Мультиязычность
- ✅ Безопасность

## 🤝 Разработка

### Добавление нового языка

1. Создайте файл `src/locales/[lang]/translation.json`
2. Добавьте язык в `src/i18n.js`
3. Обновите переключатель языков

### Добавление новой страницы

1. Создайте компонент в `src/pages/`
2. Добавьте роут в `src/App.jsx`
3. Добавьте переводы в файлы локализации

## 📄 Лицензия

Этот проект предназначен для KAIF Wellness Complex, Пхукет.

---

Сделано с ❤️ для KAIF | Sauna & Spa
