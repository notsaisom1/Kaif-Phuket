import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import {
  FireIcon,
  UserGroupIcon,
  ClockIcon,
  CpuChipIcon,
  SparklesIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

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

const BenefitsGrid = styled.div`
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

const BenefitCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(19, 50, 56, 0.04);
  margin-bottom: 1.5rem;

  svg {
    width: 24px;
    height: 24px;
    color: #133238;
  }
`;

const BenefitTitle = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 800;
  color: #133238;
  margin: 0 0 0.5rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
`;

const BenefitDescription = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  margin: 0;
`;

// === DATA ===

const benefits = [
  { icon: FireIcon, titleKey: 'sports.benefits.premium.title', descriptionKey: 'sports.benefits.premium.description', defaultTitle: 'Premium Equipment', defaultDescription: 'Machines from world-leading manufacturers Technogym and Life Fitness' },
  { icon: UserGroupIcon, titleKey: 'sports.benefits.trainers.title', descriptionKey: 'sports.benefits.trainers.description', defaultTitle: 'Professional Trainers', defaultDescription: 'Certified specialists with international experience' },
  { icon: ClockIcon, titleKey: 'sports.benefits.schedule.title', descriptionKey: 'sports.benefits.schedule.description', defaultTitle: 'Flexible Schedule', defaultDescription: 'Open from 07:00 to 21:00 every day of the week' },
  { icon: CpuChipIcon, titleKey: 'sports.benefits.technology.title', descriptionKey: 'sports.benefits.technology.description', defaultTitle: 'Modern Technology', defaultDescription: 'Progress monitoring and personalized training programs' },
  { icon: SparklesIcon, titleKey: 'sports.benefits.atmosphere.title', descriptionKey: 'sports.benefits.atmosphere.description', defaultTitle: 'Comfortable Atmosphere', defaultDescription: 'Spacious halls with air conditioning and panoramic windows' },
  { icon: ShieldCheckIcon, titleKey: 'sports.benefits.safety.title', descriptionKey: 'sports.benefits.safety.description', defaultTitle: 'Safety First', defaultDescription: 'Insurance, medical oversight and compliance with all standards' }
];

// === COMPONENT ===

const BenefitsSection = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <ContentWrapper>
        <Overline>{t('sports.benefits.tag', 'Why Choose Us')}</Overline>
        <Title>{t('sports.benefits.title_plain', 'Advantages')}</Title>
        <Subtitle>{t('sports.benefits.subtitle', 'Everything you need for effective training')}</Subtitle>

        <BenefitsGrid>
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <BenefitCard key={index}>
                <IconWrapper>
                  <IconComponent />
                </IconWrapper>
                <BenefitTitle>{t(benefit.titleKey, benefit.defaultTitle)}</BenefitTitle>
                <BenefitDescription>{t(benefit.descriptionKey, benefit.defaultDescription)}</BenefitDescription>
              </BenefitCard>
            );
          })}
        </BenefitsGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default BenefitsSection;
