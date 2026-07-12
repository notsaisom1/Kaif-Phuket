import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { SparklesIcon, HeartIcon, UserGroupIcon, StarIcon } from '@heroicons/react/24/outline';

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
  margin: 0 0 4rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 3rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FeatureCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(19, 50, 56, 0.04);
  border: 1px solid rgba(19, 50, 56, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #133238;
  transition: all 0.3s ease;

  svg {
    width: 22px;
    height: 22px;
  }

  ${FeatureCard}:hover & {
    background: #133238;
    border-color: #133238;
    color: #fffef6;
  }
`;

const FeatureTitle = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 800;
  color: #133238;
  margin: 0 0 0.75rem;
  text-transform: uppercase;
  letter-spacing: -0.01em;
`;

const FeatureDescription = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.5);
  font-weight: 400;
  margin: 0;
`;

// === COMPONENT ===

const SpaFeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 1,
      icon: <SparklesIcon />,
      title: t('spa.features.premium_quality.title', 'Premium Quality'),
      description: t('spa.features.premium_quality.description', 'We use only the best products and equipment for all treatments')
    },
    {
      id: 2,
      icon: <HeartIcon />,
      title: t('spa.features.full_relaxation.title', 'Full Relaxation'),
      description: t('spa.features.full_relaxation.description', 'Creating an atmosphere of comfort for your relaxation and rest')
    },
    {
      id: 3,
      icon: <UserGroupIcon />,
      title: t('spa.features.experienced_masters.title', 'Experienced Masters'),
      description: t('spa.features.experienced_masters.description', 'Specialists with years of experience and continuous skill development')
    },
    {
      id: 4,
      icon: <StarIcon />,
      title: t('spa.features.individual_approach.title', 'Individual Approach'),
      description: t('spa.features.individual_approach.description', 'We consider your preferences and needs for maximum results')
    }
  ];

  return (
    <SectionContainer>
      <ContentWrapper>
        <Overline>{t('spa.features.badge', 'Why Choose Us')}</Overline>
        <Title>{t('spa.features.title', 'Why Choose Us')}</Title>
        <Subtitle>
          {t('spa.features.subtitle', 'We strive to provide you with an exceptional relaxation and care experience')}
        </Subtitle>

        <FeaturesGrid>
          {features.map((feature) => (
            <FeatureCard key={feature.id}>
              <IconWrapper>
                {feature.icon}
              </IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default SpaFeaturesSection;
