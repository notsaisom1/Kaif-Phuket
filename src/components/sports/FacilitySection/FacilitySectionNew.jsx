import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { sportsDirections as directionsData } from '../../../data/sportsDirections';

const WHATSAPP_NUMBER = '66624805877';

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

const FacilityGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FacilityCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }
`;

const FacilityImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
`;

const FacilityImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${FacilityCard}:hover & {
    transform: scale(1.03);
  }
`;

const ImageDots = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.4rem;
  z-index: 2;
`;

const Dot = styled.button`
  width: ${props => props.$active ? '20px' : '6px'};
  height: 6px;
  border-radius: 3px;
  border: none;
  background: ${props => props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
`;

const FacilityContent = styled.div`
  padding: 1.75rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FacilityTag = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin-bottom: 0.75rem;
`;

const FacilityTitle = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.35rem;
  font-weight: 800;
  color: #133238;
  margin: 0 0 0.75rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
`;

const FacilityDescription = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  margin: 0 0 1.25rem;
`;

const MetaRow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: rgba(19, 50, 56, 0.5);

  svg {
    width: 16px;
    height: 16px;
    color: rgba(19, 50, 56, 0.35);
  }
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  color: rgba(19, 50, 56, 0.65);

  svg {
    width: 16px;
    height: 16px;
    color: rgba(19, 50, 56, 0.3);
    flex-shrink: 0;
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const BookButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.9rem 1.5rem;
  background: #133238;
  color: #fffef6;
  border: none;
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.15);
    transform: translateY(-1px);
  }
`;

const DetailsLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.85rem 1.5rem;
  background: transparent;
  color: #133238;
  border: 1px solid rgba(19, 50, 56, 0.2);
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: #133238;
    color: #fffef6;
    border-color: #133238;

    svg { transform: translateX(3px); }
  }
`;

const ClickableImageLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`;

const TitleLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: rgba(19, 50, 56, 0.75);
  }
`;

// === DATA ===

const facilities = [
  {
    id: 'gym',
    images: [
      '/images/sports/gym/gym-1.jpg',
      '/images/sports/gym/gym-2.jpg',
      '/images/sports/gym/gym-3.jpg'
    ],
    tagKey: 'sports.facilities.gym.tag',
    defaultTag: 'Gym',
    titleKey: 'sports.facilities.gym.title',
    defaultTitle: 'Modern Gym',
    descriptionKey: 'sports.facilities.gym.short_description',
    defaultDescription: 'Premium equipment from Technogym and Life Fitness for effective workouts',
    hours: '07:00 – 21:00',
    capacity: '40',
    features: [
      { key: 'sports.facilities.gym.feature1', default: 'Cardio zone' },
      { key: 'sports.facilities.gym.feature2', default: 'Free weights area' },
      { key: 'sports.facilities.gym.feature3', default: 'Functional training' }
    ],
    whatsappMessage: 'Hello! I would like to book a gym session at KAIF'
  },
  {
    id: 'fight',
    images: [
      '/images/sports/fight-club/fight-1.jpg',
      '/images/sports/fight-club/fight-2.jpg',
      '/images/sports/fight-club/fight-3.jpg'
    ],
    tagKey: 'sports.facilities.fight.tag',
    defaultTag: 'Martial Arts',
    titleKey: 'sports.facilities.fight.title',
    defaultTitle: 'Fight Club',
    descriptionKey: 'sports.facilities.fight.short_description',
    defaultDescription: 'Professional ring and equipment for boxing, Muay Thai and Jiu-Jitsu',
    hours: '07:00 – 21:00',
    capacity: '25',
    features: [
      { key: 'sports.facilities.fight.feature1', default: 'Professional ring' },
      { key: 'sports.facilities.fight.feature2', default: 'Heavy bags and speed bags' },
      { key: 'sports.facilities.fight.feature3', default: 'Champion trainers' }
    ],
    whatsappMessage: 'Hello! I would like to book a fight club session at KAIF'
  },
  {
    id: 'dance',
    images: [
      '/images/hero/fitnes.jpg'
    ],
    tagKey: 'sports.facilities.dance.tag',
    defaultTag: 'Dance & Fitness',
    titleKey: 'sports.facilities.dance.title',
    defaultTitle: 'Dance Studio',
    descriptionKey: 'sports.facilities.dance.short_description',
    defaultDescription: 'Spacious studio for dance, yoga and group fitness programs',
    hours: '07:00 – 21:00',
    capacity: '30',
    features: [
      { key: 'sports.facilities.dance.feature1', default: 'Mirror walls' },
      { key: 'sports.facilities.dance.feature2', default: 'Professional flooring' },
      { key: 'sports.facilities.dance.feature3', default: 'Sound system' }
    ],
    whatsappMessage: 'Hello! I would like to book a dance class at KAIF'
  },
  {
    id: 'swim',
    images: [
      '/images/zones/pool.jpg'
    ],
    tagKey: 'sports.facilities.swim.tag',
    defaultTag: 'Swimming',
    titleKey: 'sports.facilities.swim.title',
    defaultTitle: 'Swimming Pool',
    descriptionKey: 'sports.facilities.swim.short_description',
    defaultDescription: '25-meter pool for swimming, aqua aerobics and kids lessons',
    hours: '07:00 – 21:00',
    capacity: '20',
    features: [
      { key: 'sports.facilities.swim.feature1', default: '25-meter pool' },
      { key: 'sports.facilities.swim.feature2', default: 'Aqua aerobics classes' },
      { key: 'sports.facilities.swim.feature3', default: 'Kids swimming lessons' }
    ],
    whatsappMessage: 'Hello! I would like to book a swimming session at KAIF'
  }
];

// === COMPONENT ===

const FacilitySectionNew = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeImages, setActiveImages] = useState(
    facilities.reduce((acc, f) => ({ ...acc, [f.id]: 0 }), {})
  );

  const handleBookClick = (e, facility) => {
    e.stopPropagation();
    const message = encodeURIComponent(facility.whatsappMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleImageChange = (e, facilityId, index) => {
    e.stopPropagation();
    setActiveImages(prev => ({ ...prev, [facilityId]: index }));
  };

  const handleCardNav = (detailPath) => {
    if (detailPath) navigate(detailPath);
  };

  const slugById = directionsData.reduce((acc, d) => {
    acc[d.id] = d.slug;
    return acc;
  }, {});

  return (
    <SectionContainer id="facilities">
      <ContentWrapper>
        <Overline>{t('sports.facilities.tag', 'Our Facilities')}</Overline>
        <Title>{t('sports.facilities.title_plain', 'Sports Zones')}</Title>
        <Subtitle>{t('sports.facilities.subtitle', 'Choose the zone that suits you')}</Subtitle>

        <FacilityGrid>
          {facilities.map((facility) => {
            const slug = slugById[facility.id];
            const detailPath = slug ? `/sports/${slug}` : null;
            const title = t(facility.titleKey, facility.defaultTitle);

            return (
            <FacilityCard
              key={facility.id}
              $clickable={!!detailPath}
              onClick={() => handleCardNav(detailPath)}
              role={detailPath ? 'link' : undefined}
              tabIndex={detailPath ? 0 : undefined}
              onKeyDown={(e) => {
                if (detailPath && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  handleCardNav(detailPath);
                }
              }}
            >
              <FacilityImageWrapper>
                <FacilityImg
                  src={facility.images[activeImages[facility.id]]}
                  alt={title}
                  loading="lazy"
                />
                {facility.images.length > 1 && (
                  <ImageDots>
                    {facility.images.map((_, idx) => (
                      <Dot
                        key={idx}
                        $active={activeImages[facility.id] === idx}
                        onClick={(e) => handleImageChange(e, facility.id, idx)}
                        aria-label={`${title} image ${idx + 1}`}
                      />
                    ))}
                  </ImageDots>
                )}
              </FacilityImageWrapper>

              <FacilityContent>
                <FacilityTag>{t(facility.tagKey, facility.defaultTag)}</FacilityTag>
                <FacilityTitle>{title}</FacilityTitle>
                <FacilityDescription>{t(facility.descriptionKey, facility.defaultDescription)}</FacilityDescription>

                <MetaRow>
                  <MetaItem>
                    <ClockIcon />
                    <span>{facility.hours}</span>
                  </MetaItem>
                  <MetaItem>
                    <UserGroupIcon />
                    <span>{t('sports.facilities.capacity', 'Up to {{count}}', { count: facility.capacity })}</span>
                  </MetaItem>
                </MetaRow>

                <FeaturesList>
                  {facility.features.map((feature, i) => (
                    <FeatureItem key={i}>
                      <CheckCircleIcon />
                      <span>{t(feature.key, feature.default)}</span>
                    </FeatureItem>
                  ))}
                </FeaturesList>

                <ButtonsRow>
                  <BookButton onClick={(e) => handleBookClick(e, facility)}>
                    {t('sports.facilities.book_button', 'Book a Session')}
                  </BookButton>
                  {detailPath && (
                    <DetailsLink
                      to={detailPath}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {t('sports.facilities.learn_more', 'Learn more')}
                      <ArrowRightIcon />
                    </DetailsLink>
                  )}
                </ButtonsRow>
              </FacilityContent>
            </FacilityCard>
            );
          })}
        </FacilityGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default FacilitySectionNew;
