import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

// Компонент для управления метаданными страницы (title, favicon и т.д.)
const PageHead = ({ 
  titleKey = 'page_titles.home', 
  defaultTitle = 'KAIF | Sauna & Spa',
  description,
  keywords,
  ogImage,
  pageType = 'website'
}) => {
  const { t, i18n } = useTranslation();
  
  // Получаем заголовок из переводов
  const title = t(titleKey, defaultTitle);
  
  // Обновляем заголовок документа при смене языка
  useEffect(() => {
    document.title = title;
  }, [title, i18n.language]);

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph теги */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={pageType} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter Card теги */}
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:card" content="summary_large_image" />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Используем только существующий файл favicon.png для всех страниц */}
      <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta name="theme-color" content="#2C614F" />
    </Helmet>
  );
};

export default PageHead;
