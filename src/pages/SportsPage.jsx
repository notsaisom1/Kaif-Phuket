import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import PageHead from '../components/layout/PageHead';
import PageScrollReset from '../components/common/PageScrollReset';

import HeroSection from '../components/sports/HeroSection/HeroSection';

const FacilitySectionNew = lazy(() => import('../components/sports/FacilitySection/FacilitySectionNew'));
const SportsPricingSection = lazy(() => import('../components/sports/PricingSection/SportsPricingSection'));
const BenefitsSection = lazy(() => import('../components/sports/BenefitsSection/BenefitsSection'));
const ScheduleSectionNew = lazy(() => import('../components/sports/ScheduleSection/ScheduleSectionNew'));
const CTASection = lazy(() => import('../components/sports/CTASection/CTASection'));

const SectionLoader = () => null;

const SportsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHead
        titleKey="page_titles.sports"
        description={t('sports.hero.subtitle', 'Modern equipment, professional trainers and atmosphere to achieve your sporting goals')}
        keywords="KAIF sports, gym, fitness, martial arts, jiu-jitsu, boxing, training, Phuket"
        ogImage="/images/sports/gym/gym-main.jpg"
      />
      <PageScrollReset />
      <HeroSection />

      <Suspense fallback={<SectionLoader />}>
        <FacilitySectionNew />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ScheduleSectionNew />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <SportsPricingSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <BenefitsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <CTASection />
      </Suspense>
    </>
  );
};

export default SportsPage;
