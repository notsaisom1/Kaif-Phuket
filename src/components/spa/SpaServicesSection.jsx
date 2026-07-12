import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { getSpaData } from './data/spaData';

// === STYLED COMPONENTS — Minimalist Pasture Style ===

const SectionContainer = styled.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

const Overline = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1.5px;
    background: rgba(19, 50, 56, 0.25);
    margin-right: 1rem;
  }
`;

const Title = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`;

const Subtitle = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  max-width: 550px;
  margin: 0 0 3rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
`;

const CategoryTab = styled.button`
  padding: 0.7rem 1.5rem;
  background: ${props => props.$active ? '#133238' : 'transparent'};
  color: ${props => props.$active ? '#fffef6' : 'rgba(19, 50, 56, 0.6)'};
  border: 1px solid ${props => props.$active ? '#133238' : 'rgba(19, 50, 56, 0.15)'};
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    border-color: #133238;
    color: ${props => props.$active ? '#fffef6' : '#133238'};
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  min-height: 240px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }
`;

const CardHeader = styled.div`
  flex: 1;
  margin-bottom: 1.5rem;
`;

const ServiceName = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 800;
  color: #133238;
  margin: 0 0 0.5rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
`;

const ServiceDescription = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  margin: 0;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 1.5rem;
  margin-top: auto;
  border-top: 1px solid rgba(19, 50, 56, 0.06);
`;

const DurationBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const FooterLabel = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.35);
`;

const DurationValue = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(19, 50, 56, 0.7);
`;

const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
`;

const PriceValue = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #133238;
  letter-spacing: -0.02em;
`;

const DurationsDetail = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  line-height: 1.5;
  color: rgba(19, 50, 56, 0.5);
  margin-top: 0.5rem;
`;

const ShowMoreContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const ShowMoreButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: transparent;
  color: rgba(19, 50, 56, 0.6);
  border: 1px solid rgba(19, 50, 56, 0.15);
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #133238;
    color: #133238;
  }

  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
`;

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ChevronUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

// === COMPONENT ===

const SpaServicesSection = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('massage');
  const [showAllServices, setShowAllServices] = useState(false);

  const spaData = getSpaData(t);
  const { allServices, serviceCategories } = spaData;

  const mainCategories = ['massage', 'manicure', 'pedicure', 'eyelashes', 'brows', 'hair-care', 'laser', 'endosphere'];
  const visibleCategories = serviceCategories.filter(cat => mainCategories.includes(cat.id));

  const getServicesByCategory = (categoryId) => {
    return allServices.filter(service => service.category === categoryId);
  };

  const currentCategoryServices = getServicesByCategory(activeCategory);
  const SERVICES_TO_SHOW = 6;
  const currentServices = showAllServices ? currentCategoryServices : currentCategoryServices.slice(0, SERVICES_TO_SHOW);

  useEffect(() => {
    setShowAllServices(false);
  }, [activeCategory]);

  useEffect(() => {
    if (!visibleCategories.find(cat => cat.id === activeCategory)) {
      setActiveCategory(visibleCategories[0]?.id || 'massage');
    }
  }, []);

  const formatPrice = (service) => {
    if (service.durations && service.prices) {
      return `${Math.min(...service.prices)} - ${Math.max(...service.prices)} ฿`;
    } else if (service.priceFrom && service.priceTo) {
      return `${service.priceFrom} - ${service.priceTo} ฿`;
    } else if (service.priceFrom) {
      return t('spa.services.price_from', `от ${service.priceFrom} ฿`, { price: service.priceFrom });
    } else {
      return `${service.price} ฿`;
    }
  };

  const formatDurations = (service) => {
    if (service.durations && service.prices) {
      return service.durations.map((duration, index) =>
        t('spa.services.duration_price', `${duration} мин - ${service.prices[index]} ฿`, { duration, price: service.prices[index] })
      ).join(' · ');
    }
    return null;
  };

  const getDurationDisplay = (service) => {
    if (service.durations) {
      const min = Math.min(...service.durations);
      const max = Math.max(...service.durations);
      return min === max ? `${min} min` : `${min}-${max} min`;
    }
    if (service.duration) {
      return `${service.duration} min`;
    }
    return null;
  };

  return (
    <SectionContainer>
      <ContentWrapper>
        <Overline>{t('spa.services.badge', 'Services')}</Overline>
        <Title>{t('spa.services.title', 'Our Services')}</Title>
        <Subtitle>
          {t('spa.services.subtitle', 'Full range of SPA and Beauty services for your comfort and beauty')}
        </Subtitle>

        <CategoryTabs>
          {visibleCategories.map((category) => (
            <CategoryTab
              key={category.id}
              $active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </CategoryTab>
          ))}
        </CategoryTabs>

        <ServicesGrid key={activeCategory}>
          {currentServices.map((service) => (
            <ServiceCard key={service.id}>
              <CardHeader>
                <ServiceName>{service.name}</ServiceName>
                <ServiceDescription>{service.description}</ServiceDescription>
                {formatDurations(service) && (
                  <DurationsDetail>{formatDurations(service)}</DurationsDetail>
                )}
              </CardHeader>

              <CardFooter>
                <DurationBlock>
                  {getDurationDisplay(service) && (
                    <>
                      <FooterLabel>{t('spa.services.duration_label', 'Duration')}</FooterLabel>
                      <DurationValue>{getDurationDisplay(service)}</DurationValue>
                    </>
                  )}
                </DurationBlock>
                <PriceBlock>
                  <FooterLabel>{t('spa.services.price_label', 'Price')}</FooterLabel>
                  <PriceValue>{formatPrice(service)}</PriceValue>
                </PriceBlock>
              </CardFooter>
            </ServiceCard>
          ))}
        </ServicesGrid>

        {currentCategoryServices.length > SERVICES_TO_SHOW && (
          <ShowMoreContainer>
            <ShowMoreButton onClick={() => setShowAllServices(!showAllServices)}>
              {showAllServices
                ? t('spa.services.show_less', 'Show less')
                : t('spa.services.show_more', `Show ${currentCategoryServices.length - SERVICES_TO_SHOW} more`, { count: currentCategoryServices.length - SERVICES_TO_SHOW })
              }
              {showAllServices ? <ChevronUp /> : <ChevronDown />}
            </ShowMoreButton>
          </ShowMoreContainer>
        )}
      </ContentWrapper>
    </SectionContainer>
  );
};

export default SpaServicesSection;
