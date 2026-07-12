import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

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
    grid-template-columns: repeat(3, 1fr);
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
  margin: 0 0 1.75rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const FeatureItem = styled.li`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  color: rgba(19, 50, 56, 0.65);
  line-height: 1.5;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &::before {
    content: '';
    width: 4px;
    height: 4px;
    background: rgba(19, 50, 56, 0.25);
    border-radius: 50%;
    flex-shrink: 0;
  }
`;

// === COMPONENT ===

const BanyaFeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 'materials',
      title: t('banya.features.materials.title', 'Natural Materials'),
      description: t('banya.features.materials.description', '100% natural finish from Siberian wood species'),
      items: [
        t('banya.features.materials.items.cedar', 'Siberian Cedar'),
        t('banya.features.materials.items.linden', 'Altai Linden'),
        t('banya.features.materials.items.birch', 'Karelian Birch'),
        t('banya.features.materials.items.coating', 'Eco-friendly finishes'),
        t('banya.features.materials.items.aromatherapy', 'Natural aromatherapy')
      ]
    },
    {
      id: 'panoramic',
      title: t('banya.features.panoramic.title', 'Panoramic Design'),
      description: t('banya.features.panoramic.description', 'Unique architecture with tropical jungle views'),
      items: [
        t('banya.features.panoramic.items.area', '150 square meters'),
        t('banya.features.panoramic.items.windows', 'Panoramic windows'),
        t('banya.features.panoramic.items.view', 'Jungle views'),
        t('banya.features.panoramic.items.lighting', 'Natural lighting'),
        t('banya.features.panoramic.items.harmony', 'Harmony with nature')
      ]
    },
    {
      id: 'safety',
      title: t('banya.features.safety.title', 'Safety'),
      description: t('banya.features.safety.description', 'Compliance with all international safety standards'),
      items: [
        t('banya.features.safety.items.fire', 'Fire safety'),
        t('banya.features.safety.items.ventilation', 'Ventilation system'),
        t('banya.features.safety.items.emergency', 'Emergency lighting'),
        t('banya.features.safety.items.medical', 'Medical assistance'),
        t('banya.features.safety.items.security', '24/7 security')
      ]
    }
  ];

  return (
    <SectionContainer>
      <ContentWrapper>
        <Overline>{t('banya.features.badge', 'Best Banya in Phuket')}</Overline>
        <Title>{t('banya.features.title_plain', 'Why Choose Us')}</Title>
        <Subtitle>
          {t('banya.features.subtitle', 'Experience the authentic Russian banya with modern comfort and traditional techniques')}
        </Subtitle>

        <FeaturesGrid>
          {features.map((feature) => (
            <FeatureCard key={feature.id}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <FeatureList>
                {feature.items.map((item, idx) => (
                  <FeatureItem key={idx}>{item}</FeatureItem>
                ))}
              </FeatureList>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default BanyaFeaturesSection;
