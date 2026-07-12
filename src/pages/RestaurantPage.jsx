import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import PageHead from '../components/layout/PageHead';
import PageScrollReset from '../components/common/PageScrollReset';

const HeroSection = React.lazy(() =>
  import('../components/Restaurant/sections/HeroSection')
);
const MenuCategoryGrid = React.lazy(() =>
  import('../components/Restaurant/sections/MenuCategoryGrid')
);
const BarParallaxSection = React.lazy(() =>
  import('../components/Restaurant/sections/BarParallaxSection')
);
const BarMenuSection = React.lazy(() =>
  import('../components/Restaurant/sections/BarMenuSection')
);

const InvisibleLoader = () => null;

const RestaurantPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHead
        titleKey="page_titles.restaurant"
        description={t('restaurant.hero.subtitle_pasture',
          'Discover a variety of flavors crafted by our talented chefs using the finest ingredients')}
        keywords="KAIF restaurant, gourmet cuisine, menu, Phuket dining"
        ogImage="/images/restaurant/restaurant.jpg"
      />
      <PageScrollReset />
      <Suspense fallback={<InvisibleLoader />}>
        <HeroSection />
        <MenuCategoryGrid />
        <BarParallaxSection />
        <BarMenuSection />
      </Suspense>
    </>
  );
};

export default RestaurantPage;
