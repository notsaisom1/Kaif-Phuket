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

const RitualsGrid = styled.div`
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

const RitualCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  min-height: 280px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }
`;

const RitualHeader = styled.div`
  flex: 1;
  margin-bottom: 1.5rem;
`;

const RitualTitle = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #133238;
  margin: 0 0 0.5rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
`;

const RitualSubtitle = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin-bottom: 1rem;
`;

const RitualDescription = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  margin: 0;
`;

const RitualFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 1.5rem;
  margin-top: auto;
  border-top: 1px solid rgba(19, 50, 56, 0.06);
`;

const RitualDuration = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const DurationLabel = styled.span`
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

const RitualPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
`;

const PriceLabel = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.35);
`;

const PriceValue = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #133238;
  letter-spacing: -0.02em;
`;

// === COMPONENT ===

const BanyaServicesSection = () => {
  const { t, i18n, ready } = useTranslation();
  const isRussian = i18n.language === 'ru';

  const getRituals = () => {
    if (!ready) return [];

    try {
      return [
        {
          id: 'intro',
          title: t('banya.services.rituals.intro.title', "Children's Introductory Steaming"),
          subtitle: t('banya.services.rituals.intro.subtitle', 'LIGHT STEAM'),
          duration: t('banya.services.rituals.intro.duration', '7-10 min'),
          price: t('banya.services.rituals.intro.price', '1,000 THB'),
          description: t('banya.services.rituals.intro.description', 'A short and sensitive ritual with gentle warming of back and legs')
        },
        {
          id: 'lady',
          title: t('banya.services.rituals.lady.title', "Lady's Steaming"),
          subtitle: t('banya.services.rituals.lady.subtitle', 'LOW-TEMPERATURE'),
          duration: t('banya.services.rituals.lady.duration', '10-15 min'),
          price: t('banya.services.rituals.lady.price', '1,500 THB'),
          description: t('banya.services.rituals.lady.description', 'Special low-temperature technique with deep local warming')
        },
        {
          id: 'classic',
          title: t('banya.services.rituals.classic.title', 'Classic Steaming'),
          subtitle: t('banya.services.rituals.classic.subtitle', 'MEDIUM STEAM'),
          duration: t('banya.services.rituals.classic.duration', '10-15 min'),
          price: t('banya.services.rituals.classic.price', '1,800 THB'),
          description: t('banya.services.rituals.classic.description', 'Steaming with oak brooms in one session. Thorough whole body steaming with aromatic steam')
        },
        {
          id: 'artesian',
          title: t('banya.services.rituals.artesian.title', 'Artesian'),
          subtitle: t('banya.services.rituals.artesian.subtitle', 'CONTRAST STEAMING'),
          duration: t('banya.services.rituals.artesian.duration', '15-20 min'),
          price: t('banya.services.rituals.artesian.price', '2,250 THB'),
          description: t('banya.services.rituals.artesian.description', 'Intense warming with oak brooms enhanced by the contrast of cool mineral water')
        },
        {
          id: 'gravity',
          title: t('banya.services.rituals.gravity.title', 'Gravity'),
          subtitle: t('banya.services.rituals.gravity.subtitle', 'WEIGHTLESS STEAMING'),
          duration: t('banya.services.rituals.gravity.duration', '15-20 min'),
          price: t('banya.services.rituals.gravity.price', '2,250 THB'),
          description: t('banya.services.rituals.gravity.description', 'Intense warming with transition to warm pool. Feeling of weightlessness')
        },
        {
          id: 'salt_fire',
          title: t('banya.services.rituals.salt_fire.title', 'The Fire Starter'),
          subtitle: t('banya.services.rituals.salt_fire.subtitle', 'SALT STEAMING'),
          duration: t('banya.services.rituals.salt_fire.duration', '15-20 min'),
          price: t('banya.services.rituals.salt_fire.price', '2,250 THB'),
          description: t('banya.services.rituals.salt_fire.description', 'Intense warming with sea salt application and warming through a sheet. Salt cave effect')
        },
        {
          id: 'four_hands',
          title: t('banya.services.rituals.four_hands.title', 'Four-Hand Steaming'),
          subtitle: t('banya.services.rituals.four_hands.subtitle', 'SYNCHRONIZED'),
          duration: t('banya.services.rituals.four_hands.duration', '15-20 min'),
          price: t('banya.services.rituals.four_hands.price', '2,500 THB'),
          description: t('banya.services.rituals.four_hands.description', 'Two steam masters work in perfect synchronization')
        },
        {
          id: 'sports',
          title: t('banya.services.rituals.sports.title', 'Sports Steaming'),
          subtitle: t('banya.services.rituals.sports.subtitle', 'WITH MASSAGE'),
          duration: t('banya.services.rituals.sports.duration', '20-25 min'),
          price: t('banya.services.rituals.sports.price', '2,500 THB'),
          description: t('banya.services.rituals.sports.description', 'Intense warming to the depth of muscles with massage elements')
        },
        {
          id: 'stalwar',
          title: t('banya.services.rituals.stalwar.title', "Thor's Power"),
          subtitle: t('banya.services.rituals.stalwar.subtitle', 'INTENSE STEAM'),
          duration: t('banya.services.rituals.stalwar.duration', '15-20 min'),
          price: t('banya.services.rituals.stalwar.price', '3,000 THB'),
          description: t('banya.services.rituals.stalwar.description', 'Intense steam and contrast for those who love the heat')
        },
        {
          id: 'warrior_path',
          title: t('banya.services.rituals.warrior_path.title', "Warrior's Path"),
          subtitle: t('banya.services.rituals.warrior_path.subtitle', 'CONTRAST STEAMING'),
          duration: t('banya.services.rituals.warrior_path.duration', '20-25 min'),
          price: t('banya.services.rituals.warrior_path.price', '3,500 THB'),
          description: t('banya.services.rituals.warrior_path.description', 'Steaming in two sessions with cold water dousing between them')
        },
        {
          id: 'honey',
          title: t('banya.services.rituals.honey.title', 'Honey Steaming'),
          subtitle: t('banya.services.rituals.honey.subtitle', 'WITH NATURAL HONEY'),
          duration: t('banya.services.rituals.honey.duration', '15-20 min'),
          price: t('banya.services.rituals.honey.price', '3,500 THB'),
          description: t('banya.services.rituals.honey.description', 'Steaming with Canadian brooms and honey application')
        },
        {
          id: 'valhalla',
          title: t('banya.services.rituals.valhalla.title', 'Valhalla'),
          subtitle: t('banya.services.rituals.valhalla.subtitle', 'GROUP STEAMING'),
          duration: t('banya.services.rituals.valhalla.duration', '10-20 min'),
          price: t('banya.services.rituals.valhalla.price', '3,500 THB'),
          description: t('banya.services.rituals.valhalla.description', 'Steaming with fan and brooms for a group of 2-4 people')
        },
        {
          id: 'royal',
          title: t('banya.services.rituals.royal.title', 'Royal Steaming'),
          subtitle: t('banya.services.rituals.royal.subtitle', 'HONEY-SALT SCRUB'),
          duration: t('banya.services.rituals.royal.duration', '25-30 min'),
          price: t('banya.services.rituals.royal.price', '4,000 THB'),
          description: t('banya.services.rituals.royal.description', 'Royal ritual of deep warming and cleansing with honey and sea salt')
        }
      ];
    } catch (error) {
      return [];
    }
  };

  const rituals = getRituals();

  return (
    <SectionContainer>
      <ContentWrapper>
        <Overline>{t('banya.services.badge', isRussian ? 'Ритуалы' : 'Rituals')}</Overline>
        <Title>{t('banya.services.title', isRussian ? 'Индивидуальные парения' : 'Individual Steam Sessions')}</Title>
        <Subtitle>
          {t('banya.services.subtitle', isRussian ? 'Выберите свой идеальный банный ритуал' : 'Choose your perfect banya ritual')}
        </Subtitle>

        <RitualsGrid>
          {rituals.map((ritual) => (
            <RitualCard key={ritual.id}>
              <RitualHeader>
                <RitualTitle>{ritual.title}</RitualTitle>
                <RitualSubtitle>{ritual.subtitle}</RitualSubtitle>
                <RitualDescription>{ritual.description}</RitualDescription>
              </RitualHeader>

              <RitualFooter>
                <RitualDuration>
                  <DurationLabel>{isRussian ? 'Время' : 'Duration'}</DurationLabel>
                  <DurationValue>{ritual.duration}</DurationValue>
                </RitualDuration>
                <RitualPrice>
                  <PriceLabel>{isRussian ? 'Стоимость' : 'Price'}</PriceLabel>
                  <PriceValue>{ritual.price}</PriceValue>
                </RitualPrice>
              </RitualFooter>
            </RitualCard>
          ))}
        </RitualsGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default BanyaServicesSection;
