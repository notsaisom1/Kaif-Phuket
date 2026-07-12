import React, { useEffect, useRef, lazy, Suspense, memo } from 'react';
import { useLoading } from '../components/global/LoadingContext';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import PageHead from '../components/layout/PageHead';

// Импортируем только критический hero компонент
import HeroFullscreen from '../components/home/HeroFullscreen';
// ExclusiveZones — первая секция после hero. Загружаем в основной бандл,
// чтобы при скролле не было round-trip за чанком → сразу стартует загрузка картинок.
import ExclusiveZones from '../components/home/ExclusiveZones';

// Lazy loading для всех некритических компонентов
const EventsSection = lazy(() => import('../components/home/EventsSection'));
const PricingSection = lazy(() => import('../components/home/PricingSection'));

const AdvantagesSection = lazy(() =>
  import('../components/home/AdvantagesSection').then(module => ({
    default: memo(module.default)
  }))
);
const GallerySection = lazy(() =>
  import('../components/common/GallerySection').then(module => ({
    default: memo(module.GallerySection)
  }))
);
const FAQSection = lazy(() =>
  import('../components/home/FAQSection').then(module => ({
    default: memo(module.default)
  }))
);
const ComplexParallax = lazy(() => import('../components/home/ComplexParallax'));
const TerraceParallax = lazy(() => import('../components/home/TerraceParallax'));

// Упрощенный лоадер для lazy компонентов
const SectionLoader = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(144, 179, 167, 0.02);
  
  &::after {
    content: '';
    width: 24px;
    height: 24px;
    border: 2px solid rgba(144, 179, 167, 0.2);
    border-top: 2px solid #90B3A7;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;


// Мемоизированный компонент для предотвращения лишних ререндеров
const HomePage = memo(() => {
  const { t } = useTranslation();
  const { showLoading } = useLoading();
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    // Отключаем искусственную задержку для лучшей производительности
    // Loading screen блокирует FCP и LCP
    if (!hasInitializedRef.current) {
      hasInitializedRef.current = true;
      // showLoading(1000); // Отключено для производительности
    }
  }, []); // Пустой массив зависимостей - эффект выполнится только один раз

  return (
    <>
      <PageHead
        titleKey="page_titles.home"
        description={t('home.hero.subtitle', 'Unique relaxation and wellness experience in Phuket')}
        keywords="KAIF, spa, wellness, Phuket, gym, restaurant, banya, massage"
        ogImage="/images/logos/logo-og.png"
      />

      {/* Полноэкранная секция героя - единственный критический компонент */}
      <HeroFullscreen />

      <ExclusiveZones />

      <Suspense fallback={<SectionLoader />}>
        <EventsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <PricingSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ComplexParallax />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AdvantagesSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TerraceParallax />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <GallerySection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FAQSection />
      </Suspense>

    </>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage; 