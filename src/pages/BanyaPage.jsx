import React from 'react';
import { useTranslation } from 'react-i18next';
import PageScrollReset from '../components/common/PageScrollReset';
import PageHead from '../components/layout/PageHead';

import BanyaHeroSection from '../components/banya/BanyaHeroSection';
import BanyaServicesSection from '../components/banya/BanyaServicesSection';
import BanyaFeaturesSection from '../components/banya/BanyaFeaturesSection';
import BanyaGallerySection from '../components/banya/BanyaGallerySection';
import BanyaBookingSection from '../components/banya/BanyaBookingSection';
import BanyaFAQSection from '../components/banya/BanyaFAQSection';
import BanyaParallaxSection from '../components/banya/BanyaParallaxSection';
import BanyaSteamSchedule from '../components/banya/BanyaSteamSchedule';

const BanyaPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHead
        titleKey="page_titles.banya"
        description={t('banya.hero.subtitle', 'Traditional Russian banya experience')}
        keywords="KAIF banya, Russian sauna, traditional banya, steam bath, Phuket"
        ogImage="/images/banya/panoramic.jpg"
      />
      <PageScrollReset />
      <BanyaHeroSection />
      <BanyaSteamSchedule />
      <BanyaParallaxSection image="/images/banya/parallax2.jpg" />
      <BanyaServicesSection />
      <BanyaParallaxSection />
      <BanyaGallerySection />
      <BanyaFeaturesSection />
      <BanyaFAQSection />
      <BanyaBookingSection />
    </>
  );
};

export default BanyaPage;
