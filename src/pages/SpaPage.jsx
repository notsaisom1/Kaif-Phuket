import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import PageScrollReset from '../components/common/PageScrollReset';
import PageHead from '../components/layout/PageHead';

// Ленивая загрузка компонентов
const SpaHeroSection = React.lazy(() => import('../components/spa/SpaHeroSection'));
const SpaServicesSection = React.lazy(() => import('../components/spa/SpaServicesSection'));
const SpaFeaturesSection = React.lazy(() => import('../components/spa/SpaFeaturesSection'));
const SpaFAQSection = React.lazy(() => import('../components/spa/SpaFAQSection'));
const SpaBookingSection = React.lazy(() => import('../components/spa/SpaBookingSection'));
const SpaGallerySection = React.lazy(() => import('../components/spa/SpaGallerySection'));
const BanyaParallaxSection = React.lazy(() => import('../components/banya/BanyaParallaxSection'));

const InvisibleLoader = () => null;

const SpaPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHead
        titleKey="page_titles.spa"
        description={t('spa.hero.subtitle', 'Professional SPA treatments in the luxurious atmosphere of KAIF')}
        keywords="KAIF spa, massage, beauty treatments, relaxation, wellness, Phuket"
        ogImage="/images/hero/spa.webp"
      />
      <PageScrollReset />
      <Suspense fallback={<InvisibleLoader />}>
        <SpaHeroSection />
        <SpaServicesSection />
        <BanyaParallaxSection image="/images/hero/hammam.jpg" />
        <SpaGallerySection />
        <SpaFeaturesSection />
        <SpaFAQSection />
        <SpaBookingSection />
      </Suspense>
    </>
  );
};

export default SpaPage;
