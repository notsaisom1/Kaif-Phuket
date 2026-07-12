import React, { useState, useEffect, memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// === STYLED COMPONENTS — Matching BanyaHeroSection / HeroFullscreen style ===

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
  background: #000;
  padding: 0 !important;
  margin: 0 !important;
  box-sizing: border-box !important;

  @media (max-width: 768px) {
    height: calc(100vh + 60px);
    height: calc(100dvh + 60px);
    min-height: calc(100vh + 60px);
    min-height: calc(100dvh + 60px);
  }
`;

const BackgroundSlider = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`;

const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 2s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0,0,0,0.6) 0%,
      rgba(0,0,0,0.4) 50%,
      rgba(0,0,0,0.5) 100%
    );
    z-index: 2;
    pointer-events: none;
  }
`;

const ContentContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  @media (max-width: 480px) {
    padding: 0 1.5rem;
  }
`;

const HeroTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroWord = styled.span`
  display: block;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(4.5rem, 12vw, 9rem);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 768px) {
    font-size: clamp(4rem, 20vw, 7rem);
    line-height: 1.05;
  }

  @media (max-width: 480px) {
    font-size: clamp(3.5rem, 22vw, 6rem);
  }
`;

const LocationText = styled.span`
  display: block;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.35em;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    font-size: 0.65rem;
    margin-top: 2rem;
  }
`;

// === COMPONENT ===

const SpaHeroSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: '/images/spa/services/thai-massage.jpg',
      alt: t('spa.hero.images.thai_massage', 'Thai Massage')
    },
    {
      src: '/images/spa/services/massage.jpg',
      alt: t('spa.hero.images.massage', 'Massage')
    },
    {
      src: '/images/spa/services/aromatherapy.jpg',
      alt: t('spa.hero.images.aromatherapy', 'Aromatherapy')
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <HeroContainer>
      <BackgroundSlider>
        {images.map((image, index) => (
          <BackgroundImage
            key={index}
            style={{
              backgroundImage: `url(${image.src})`,
              opacity: currentSlide === index ? 1 : 0,
              zIndex: currentSlide === index ? 2 : 1
            }}
          />
        ))}
      </BackgroundSlider>

      <ContentContainer>
        <ContentWrapper>
          <HeroTextBlock>
            <HeroWord>{t('spa.hero.title_part1', 'SPA')}</HeroWord>
            <HeroWord>{t('spa.hero.title_part2', '& Beauty')}</HeroWord>
            <LocationText>{t('spa.hero.location', 'Phuket')}</LocationText>
          </HeroTextBlock>
        </ContentWrapper>
      </ContentContainer>
    </HeroContainer>
  );
};

export default memo(SpaHeroSection);
