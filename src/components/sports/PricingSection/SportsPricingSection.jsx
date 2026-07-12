import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CheckIcon } from '@heroicons/react/24/outline';

const WHATSAPP_NUMBER = '66624805877';

// === STYLED COMPONENTS — Parallax promo section ===

const SectionContainer = styled.section`
  position: relative;
  padding: 6rem 0;
  background-image: url('/images/sports/gym/gym-access.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Badge = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #133238;
  background: #fffef6;
  padding: 0.4rem 1.25rem;
  border-radius: 50px;
  margin-bottom: 2rem;
`;

const PlanName = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #fffef6;
  text-transform: uppercase;
  margin: 0 0 0.75rem;
`;

const PlanDescription = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(255, 254, 246, 0.55);
  font-weight: 400;
  max-width: 500px;
  margin: 0 0 2.5rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`;

const PriceBlock = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  margin-bottom: 0.25rem;
`;

const PriceValue = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 800;
  color: #fffef6;
  line-height: 1;
  letter-spacing: -0.02em;
`;

const PriceCurrency = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: rgba(255, 254, 246, 0.5);
`;

const PricePeriod = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  color: rgba(255, 254, 246, 0.35);
  margin-bottom: 2.5rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.6rem;
  margin-bottom: 2.5rem;
  text-align: left;
  width: 100%;
  max-width: 500px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  line-height: 1.4;
  color: rgba(255, 254, 246, 0.7);

  svg {
    width: 16px;
    height: 16px;
    color: rgba(255, 254, 246, 0.35);
    flex-shrink: 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1.25rem;
  }
`;

const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: #fffef6;
  color: #133238;
  border: none;
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: transparent;
  color: rgba(255, 254, 246, 0.8);
  border: 1px solid rgba(255, 254, 246, 0.2);
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    border-color: rgba(255, 254, 246, 0.5);
    color: #fffef6;
  }
`;

// === COMPONENT ===

const features = [
  { key: 'sports.pricing.club_access_sport.f1', default: 'Gym & Cardio' },
  { key: 'sports.pricing.club_access_sport.f2', default: 'Swimming Pool' },
  { key: 'sports.pricing.club_access_sport.f3', default: 'Russian Sauna & Steam' },
  { key: 'sports.pricing.club_access_sport.f4', default: 'Unlimited Group Training' },
  { key: 'sports.pricing.club_access_sport.f5', default: 'Fight Club Classes' },
  { key: 'sports.pricing.club_access_sport.f6', default: 'KAIF Motion Classes' }
];

const SportsPricingSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBookClick = () => {
    const message = encodeURIComponent('Hello! I am interested in Club Access Sport membership at KAIF.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleAllPlans = (e) => {
    e.preventDefault();
    navigate({ pathname: '/', hash: '#pricing' });
  };

  return (
    <SectionContainer id="sports-pricing">
      <Overlay />
      <ContentWrapper>
        <CardContainer>
          <Badge>{t('sports.pricing.badge', 'All-Inclusive')}</Badge>
          <PlanName>{t('sports.pricing.club_access_sport.name', 'Club Access Sport')}</PlanName>
          <PlanDescription>
            {t('sports.pricing.club_access_sport.description', 'Full access to all sports facilities plus unlimited group training')}
          </PlanDescription>

          <PriceBlock>
            <PriceValue>4,900</PriceValue>
            <PriceCurrency>THB</PriceCurrency>
          </PriceBlock>
          <PricePeriod>{t('sports.pricing.club_access_sport.period', 'per month')}</PricePeriod>

          <FeaturesGrid>
            {features.map((feature, i) => (
              <FeatureItem key={i}>
                <CheckIcon />
                <span>{t(feature.key, feature.default)}</span>
              </FeatureItem>
            ))}
          </FeaturesGrid>

          <ButtonGroup>
            <PrimaryButton onClick={handleBookClick}>
              {t('sports.pricing.cta_button', 'Get Started')}
            </PrimaryButton>
            <SecondaryButton href="/#pricing" onClick={handleAllPlans}>
              {t('sports.pricing.all_plans', 'All Plans')}
            </SecondaryButton>
          </ButtonGroup>
        </CardContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default SportsPricingSection;
