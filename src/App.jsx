import React, { useEffect, Suspense, lazy, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'framer-motion';

// Global styles - загружаем синхронно чтобы избежать layout shift
import GlobalFontStyle from './components/global/GlobalFontStyle';
import GlobalStyles from './components/global/GlobalStyles';

// CRITICAL: Loading components (needed immediately)
import { LoadingProvider, useLoading } from './components/global/LoadingContext';
import LoadingScreen from './components/global/LoadingScreen';
import ScrollToTop from './components/common/ScrollToTop';

// Holiday components - DISABLED FOR PERFORMANCE
// import Snowfall from './components/common/Snowfall';
// import SantaHat from './components/common/SantaHat';
// import HolidayGarland from './components/common/HolidayGarland';
// import './styles/holiday-theme.css';

// Подавляем CSS предупреждения в development режиме
import './utils/suppressCSSWarnings';

// CSS стили - загружаем синхронно чтобы не ломать скролл на мобильных
import './styles/mobile-optimizations.css';
import './styles/simple-header-fix.css';
import './styles/scroll-fix.css';

import { theme } from './theme.fixed';
import { CmsProvider } from './context/CmsContext';

// DEFER: Layout will be loaded when needed
const Layout = lazy(() => import('./components/layout/Layout'));

// AGGRESSIVE: Lazy load ALL pages including HomePage
const HomePage = lazy(() => import('./pages/HomePage'));
const RestaurantPage = lazy(() => import('./pages/RestaurantPage'));
const SpaPage = lazy(() => import('./pages/SpaPage'));
const SportsPage = lazy(() => import('./pages/SportsPage'));
const SportsDirectionPage = lazy(() => import('./pages/SportsDirectionPage'));
const BanyaPage = lazy(() => import('./pages/BanyaPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const SurveyPage = lazy(() => import('./pages/SurveyPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const EventDetailPage = lazy(() => import('./pages/EventDetailPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
// const SbpPayPage = lazy(() => import('./pages/SbpPayPage'));
// const PaymentPage = lazy(() => import('./pages/PaymentPage'));


// Невидимый компонент загрузки - без индикаторов
const InvisibleLoader = () => null;

// Компонент маршрутов (без логики перехода)
const AppRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<InvisibleLoader />}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/spa" element={<SpaPage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/sports/:direction" element={<SportsDirectionPage />} />
        <Route path="/banya" element={<BanyaPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:slug" element={<EventDetailPage />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* <Route path="/pay" element={<SbpPayPage />} /> */}
        {/* <Route path="/payment" element={<PaymentPage />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

// Основной компонент приложения с экраном загрузки
const AppContent = () => {
  const { isLoading, isContentReady, showPageTransition } = useLoading();
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);
  const isFirstRender = useRef(true);

  // Обработка переходов между страницами
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      showPageTransition(400);
    }
  }, [location.pathname, showPageTransition]);

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <ScrollToTop />
      <div className="App" style={{ visibility: isContentReady ? 'visible' : 'hidden' }}>
        <Suspense fallback={<InvisibleLoader />}>
          <Layout>
            <AppRoutes />
          </Layout>
        </Suspense>
      </div>
    </>
  );
};

function App() {
  const { i18n, t } = useTranslation();
  const [forceUpdate, setForceUpdate] = useState(0);

  // Принудительное обновление всего приложения при смене языка
  useEffect(() => {
    const handleLanguageChange = () => {
      setForceUpdate(prev => prev + 1);
    };
    
    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  // Set document direction and language based on current language
  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
    
    // Обновляем заголовок страницы при смене языка
    // Если на странице нет специального заголовка, используем базовый
    if (document.title === 'KAIF | Sauna & Spa' || 
        document.title.includes('KAIF') || 
        !document.title.includes('|')) {
      document.title = t('page_titles.home', 'KAIF | Sauna & Spa');
    }
  }, [i18n.language, t, forceUpdate]);

  // PERFORMANCE: console.log removed

  // Основное приложение
  // PERFORMANCE: reducedMotion="user" уважает системные настройки пользователя
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.2 }}>
      <HelmetProvider key={`app-${i18n.language}-${forceUpdate}`}>
        <ThemeProvider theme={theme}>
          <GlobalFontStyle />
          <GlobalStyles />
          <LoadingProvider>
            <Router basename="/">
              <CmsProvider>
                <AppContent />
              </CmsProvider>
            </Router>
          </LoadingProvider>
        </ThemeProvider>
      </HelmetProvider>
    </MotionConfig>
  );
}

export default App;
