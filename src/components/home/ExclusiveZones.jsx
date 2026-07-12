import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';



// === STYLED COMPONENTS — Asymmetric Pasture-style Grid ===

const SectionContainer = styled.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;
  touch-action: pan-y;
  overscroll-behavior: auto;

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
  margin: 0 0 4rem;
  max-width: 800px;
`;

/* Asymmetric row: 2fr + 1fr, then 1fr + 2fr */
const GridRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: ${props => props.$reverse ? '1fr 2fr' : '2fr 1fr'};
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ZoneCard = styled.div`
  position: relative;
  display: block;
  height: 320px;
  border-radius: 12px;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 420px;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 1;
    transition: background 0.3s ease;
  }

  &:hover::after {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }
`;

const ZoneImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
  background-color: #e5e5e5;

  ${ZoneCard}:hover & {
    transform: scale(1.04);
  }
`;

const ZonePicture = styled.picture`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.5s ease;
    background-color: #e5e5e5;
  }

  ${ZoneCard}:hover & img {
    transform: scale(1.04);
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  z-index: 2;
  color: #fff;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ZoneName = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 800;
  margin: 0 0 0.4rem;
  letter-spacing: -0.01em;
  color: #fff;
  text-transform: uppercase;
`;

const ZoneDescription = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  max-width: 400px;
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const ExploreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #fff;
  text-decoration: none;
  padding: 0.65rem 1.4rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  transition: background 0.25s ease;

  svg {
    width: 16px;
    height: 16px;
    margin-left: 0.5rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    color: #fff;
    text-decoration: none;
  }
`;

const BookButton = styled.a`
  display: inline-flex;
  align-items: center;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #133238;
  text-decoration: none;
  padding: 0.65rem 1.4rem;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 50px;
  transition: all 0.25s ease;

  &:hover {
    background: #fff;
    color: #133238;
    text-decoration: none;
  }
`;

// === COMPONENT ===

const ExclusiveZones = () => {
  const { t } = useTranslation();

  const zones = useMemo(() => {
    const build = (id, group, width, height, path, bookMessage) => ({
      id,
      name: t(`zones.${group}.${id}.name`),
      description: t(`zones.${group}.${id}.description`),
      image: `/images/zones/${id}.jpg`,
      avifXs: `/images-avif/xs/zones/${id}.avif`,
      avifSmall: `/images-avif/small/zones/${id}.avif`,
      avifMedium: `/images-avif/medium/zones/${id}.avif`,
      avifFull: `/images-avif/zones/${id}.avif`,
      webpXs: `/images-webp/xs/zones/${id}.webp`,
      webpSmall: `/images-webp/small/zones/${id}.webp`,
      webpMedium: `/images-webp/medium/zones/${id}.webp`,
      webpFull: `/images-webp/zones/${id}.webp`,
      width,
      height,
      path,
      bookMessage,
    });
    return [
      build('banya',      'relax',    1920, 1440, '/banya',                'Hello! I would like to book the Russian Banya at KAIF'),
      build('restaurant', 'relax',    1920, 1440, '/restaurant',           'Hello! I would like to book a table at KAIF Restaurant'),
      build('spa',        'relax',    1920, 1280, '/spa',                  'Hello! I would like to book a SPA treatment at KAIF'),
      build('pool',       'activity', 1920, 1440, '/sports/swimming-pool', 'Hello! I would like to book a swimming session at KAIF'),
      build('fitness',    'activity', 1920, 1440, '/sports/gym',           'Hello! I would like to book a gym session at KAIF'),
      build('combat',     'activity', 1920, 1440, '/sports/fight-club',    'Hello! I would like to book a martial arts session at KAIF'),
    ];
  }, [t]);

  const renderCard = (zone, index) => {
    const eager = index < 2;
    const sizes = '(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw';
    const avifSet = `${zone.avifXs} 480w, ${zone.avifSmall} 768w, ${zone.avifMedium} 1024w, ${zone.avifFull} 1920w`;
    const webpSet = `${zone.webpXs} 480w, ${zone.webpSmall} 768w, ${zone.webpMedium} 1024w, ${zone.webpFull} 1920w`;
    return (
    <ZoneCard key={zone.id}>
      <ZonePicture>
        <source type="image/avif" srcSet={avifSet} sizes={sizes} />
        <source type="image/webp" srcSet={webpSet} sizes={sizes} />
        <img
          src={zone.image}
          alt={zone.name}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          width={zone.width}
          height={zone.height}
          fetchPriority={eager ? 'high' : 'low'}
        />
      </ZonePicture>
      <CardContent>
        <ZoneName>{zone.name}</ZoneName>
        <ZoneDescription>{zone.description}</ZoneDescription>
        <ButtonsRow>
          <ExploreButton to={zone.path}>
            {t('common.learnMore', 'Learn More')}
            <ArrowLongRightIcon />
          </ExploreButton>
          <BookButton
            href={`https://wa.me/66624805877?text=${encodeURIComponent(zone.bookMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('common.book', 'Book')}
          </BookButton>
        </ButtonsRow>
      </CardContent>
    </ZoneCard>
    );
  };

  return (
    <SectionContainer id="exclusive-zones">
      <ContentWrapper>
        <Overline>{t('zones.overline', 'KAIF Spaces')}</Overline>
        <Title>{t('zones.title', 'Everything you need for active recreation and relaxation')}</Title>

        {/* Row 1: Banya (large) + Restaurant (small) */}
        <GridRow>
          {renderCard(zones[0], 0)}
          {renderCard(zones[1], 1)}
        </GridRow>

        {/* Row 2: Spa (small) + Pool (large) */}
        <GridRow $reverse>
          {renderCard(zones[2], 2)}
          {renderCard(zones[3], 3)}
        </GridRow>

        {/* Row 3: Gym (large) + Combat (small) */}
        <GridRow>
          {renderCard(zones[4], 4)}
          {renderCard(zones[5], 5)}
        </GridRow>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ExclusiveZones;
