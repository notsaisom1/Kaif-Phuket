import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ParallaxBackground from '../../common/ParallaxBackground';

const ParallaxContainer = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 70vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0,0,0,0.6) 0%,
    rgba(0,0,0,0.4) 50%,
    rgba(0,0,0,0.5) 100%
  );
  pointer-events: none;
`;

const TextOverlay = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  pointer-events: none;
`;

const HeroWord = styled.span`
  display: block;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(5rem, 14vw, 10rem);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: clamp(4rem, 18vw, 7rem);
  }
`;

const BarParallaxSection = () => {
  const { t } = useTranslation();

  return (
    <ParallaxContainer>
      <ParallaxBackground
        src="/images/restaurant/bar.jpg"
        speed={0.4}
        overlay={<Overlay />}
      />
      <TextOverlay>
        <HeroWord>{t('bar.hero.parallax_title', 'Bar')}</HeroWord>
      </TextOverlay>
    </ParallaxContainer>
  );
};

export default memo(BarParallaxSection);
