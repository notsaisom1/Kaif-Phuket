import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ParallaxBackground from '../common/ParallaxBackground';

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
    to bottom,
    rgba(0,0,0,0.55) 0%,
    rgba(0,0,0,0.45) 40%,
    rgba(0,0,0,0.6) 100%
  );
  pointer-events: none;
`;

const TextOverlay = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 700px;
  padding: 0 2rem;
  pointer-events: none;
`;

const Overline = styled.span`
  display: block;
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0 0 1.5rem;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 9vw, 3.5rem);
  }
`;

const Description = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.15rem;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const TerraceParallax = () => {
  const { t } = useTranslation();

  return (
    <ParallaxContainer>
      <ParallaxBackground
        src="/images/home/terrace.jpg"
        speed={0.4}
        overlay={<Overlay />}
      />
      <TextOverlay>
        <Overline>{t('home.terrace.overline', '2nd Floor')}</Overline>
        <Title>{t('home.terrace.title', 'Rooftop Terrace')}</Title>
        <Description>
          {t('home.terrace.description',
            'A cozy lounge area on the second floor next to the Russian banya. Order food and drinks, relax between steam sessions, and enjoy stunning sunset views over Phuket'
          )}
        </Description>
      </TextOverlay>
    </ParallaxContainer>
  );
};

export default memo(TerraceParallax);
