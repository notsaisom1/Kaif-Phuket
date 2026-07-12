import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoClose } from 'react-icons/io5';

// WhatsApp номер для записи
const WHATSAPP_NUMBER = '66624805877';

// Animations
const snowfall = keyframes`
  0% { transform: translateY(-10px) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

// Styled Components for Sauna Rave
const BannerContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 2.5rem 1rem;
  margin: 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a0a0a 25%, #1a1a1a 50%, #0a1a0a 75%, #0f0f0f 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 5% 10%, rgba(198, 40, 40, 0.2) 0%, transparent 30%),
      radial-gradient(circle at 95% 90%, rgba(34, 139, 34, 0.15) 0%, transparent 30%),
      radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.08) 0%, transparent 25%),
      radial-gradient(circle at 80% 20%, rgba(198, 40, 40, 0.1) 0%, transparent 25%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
  }
`;

// Snowflakes
const Snowflake = styled.div`
  position: absolute;
  color: rgba(255, 255, 255, 0.8);
  font-size: ${props => props.size || '1rem'};
  animation: ${snowfall} ${props => props.duration || '8s'} linear infinite;
  animation-delay: ${props => props.delay || '0s'};
  left: ${props => props.left || '50%'};
  top: -20px;
  z-index: 1;
  pointer-events: none;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
`;

// Twinkling stars/lights
const TwinkleStar = styled.div`
  position: absolute;
  width: ${props => props.size || '4px'};
  height: ${props => props.size || '4px'};
  background: ${props => props.color || '#d4af37'};
  border-radius: 50%;
  animation: ${twinkle} ${props => props.duration || '2s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  left: ${props => props.left};
  top: ${props => props.top};
  z-index: 1;
  pointer-events: none;
  box-shadow: 0 0 ${props => props.glow || '6px'} ${props => props.color || '#d4af37'};
`;

// Christmas garland at top
const Garland = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg,
    #c62828 0%, #c62828 8%,
    #228B22 8%, #228B22 16%,
    #d4af37 16%, #d4af37 24%,
    #c62828 24%, #c62828 32%,
    #228B22 32%, #228B22 40%,
    #d4af37 40%, #d4af37 48%,
    #c62828 48%, #c62828 56%,
    #228B22 56%, #228B22 64%,
    #d4af37 64%, #d4af37 72%,
    #c62828 72%, #c62828 80%,
    #228B22 80%, #228B22 88%,
    #d4af37 88%, #d4af37 100%
  );
  box-shadow: 0 2px 10px rgba(198, 40, 40, 0.5), 0 2px 10px rgba(34, 139, 34, 0.5);
  z-index: 10;
`;

// Christmas ornament emoji decoration
const Ornament = styled.span`
  position: absolute;
  font-size: ${props => props.size || '1.5rem'};
  left: ${props => props.left};
  top: ${props => props.top};
  z-index: 1;
  pointer-events: none;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(212, 175, 55, 0.4);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(198, 40, 40, 0.6);
    border-color: rgba(198, 40, 40, 0.8);
    transform: rotate(90deg) scale(1.1);
  }

  svg {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    top: 0.5rem;
    right: 0.5rem;
  }
`;

const BannerContent = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const PosterContainer = styled.div`
  flex: 0 0 auto;
  max-width: 700px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.5),
    0 0 30px rgba(212, 175, 55, 0.2);
  border: 2px solid rgba(212, 175, 55, 0.3);

  @media (max-width: 968px) {
    max-width: 500px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 350px;
  }
`;

const PosterImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  max-width: 400px;

  @media (max-width: 968px) {
    align-items: center;
    text-align: center;
    padding: 0 1rem;
  }
`;

const Title = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 400;
  background: linear-gradient(90deg, #d4af37, #fff, #d4af37, #fff, #d4af37);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 4s linear infinite;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
  text-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
`;

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
`;

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FeatureItem = styled.li`
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
  font-weight: 500;

  &::before {
    content: '★ ';
    color: #d4af37;
  }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 4px 20px rgba(198, 40, 40, 0.4), 0 0 0 0 rgba(198, 40, 40, 0.4); }
  50% { box-shadow: 0 4px 25px rgba(198, 40, 40, 0.6), 0 0 0 8px rgba(198, 40, 40, 0); }
`;

const BookButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #c62828 0%, #b71c1c 100%);
  color: #ffffff;
  border: 2px solid rgba(212, 175, 55, 0.5);
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${pulse} 2s ease-in-out infinite;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 30px rgba(198, 40, 40, 0.6);
    background: linear-gradient(135deg, #d32f2f 0%, #c62828 100%);
    border-color: rgba(212, 175, 55, 0.8);
    animation: none;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem 2rem;
  }
`;

const EventBanner = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleBookNow = () => {
    const message = encodeURIComponent('Hi! I would like to book Sauna Rave Event on 27 December');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  useEffect(() => {
    const bannerClosed = sessionStorage.getItem('saunaRaveBannerClosed');
    if (bannerClosed) {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('saunaRaveBannerClosed', 'true');
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <>
      {isVisible && (
        <BannerContainer>

          {/* Christmas ornaments */}
          <Ornament left="2%" top="15%" size="1.8rem">🎄</Ornament>
          <Ornament left="97%" top="20%" size="1.5rem">🎁</Ornament>
          <Ornament left="4%" top="80%" size="1.3rem">🔔</Ornament>
          <Ornament left="94%" top="75%" size="1.6rem">⭐</Ornament>

          {/* Snowflakes */}
          <Snowflake left="5%" size="1.2rem" duration="10s" delay="0s">❄</Snowflake>
          <Snowflake left="15%" size="0.8rem" duration="12s" delay="2s">❄</Snowflake>
          <Snowflake left="25%" size="1rem" duration="9s" delay="1s">✦</Snowflake>
          <Snowflake left="35%" size="0.9rem" duration="11s" delay="3s">❄</Snowflake>
          <Snowflake left="55%" size="1.1rem" duration="10s" delay="0.5s">❄</Snowflake>
          <Snowflake left="65%" size="0.7rem" duration="13s" delay="4s">✦</Snowflake>
          <Snowflake left="75%" size="1rem" duration="9s" delay="2.5s">❄</Snowflake>
          <Snowflake left="85%" size="0.9rem" duration="11s" delay="1.5s">❄</Snowflake>
          <Snowflake left="95%" size="1.2rem" duration="10s" delay="3.5s">✦</Snowflake>

          {/* Twinkling lights - Gold */}
          <TwinkleStar left="3%" top="20%" color="#d4af37" size="5px" duration="2s" delay="0s" glow="8px" />
          <TwinkleStar left="10%" top="70%" color="#d4af37" size="4px" duration="2.5s" delay="0.5s" glow="6px" />
          <TwinkleStar left="92%" top="30%" color="#d4af37" size="6px" duration="1.8s" delay="1s" glow="10px" />
          <TwinkleStar left="88%" top="75%" color="#d4af37" size="4px" duration="2.2s" delay="0.3s" glow="6px" />

          {/* Twinkling lights - Red */}
          <TwinkleStar left="7%" top="40%" color="#c62828" size="4px" duration="2.3s" delay="0.7s" glow="8px" />
          <TwinkleStar left="95%" top="50%" color="#c62828" size="5px" duration="1.9s" delay="1.2s" glow="8px" />

          {/* Twinkling lights - Green */}
          <TwinkleStar left="5%" top="85%" color="#228B22" size="4px" duration="2.1s" delay="0.2s" glow="6px" />
          <TwinkleStar left="90%" top="15%" color="#228B22" size="5px" duration="2.4s" delay="0.8s" glow="8px" />

          <ContentWrapper>
            <CloseButton onClick={handleClose}>
              <IoClose />
            </CloseButton>

            <BannerContent>
              <PosterContainer>
                <PosterImage
                  src="/images/events/rave.webp"
                  alt="Sauna Rave Event"
                  loading="eager"
                />
              </PosterContainer>

              <InfoContainer>
                <Title>SAUNA RAVE</Title>

                <EventDetails>
                  <DetailRow>
                    <span>📅</span> 27 December, Saturday
                  </DetailRow>
                  <DetailRow>
                    <span>🕐</span> 18:30 - 21:30
                  </DetailRow>
                  <DetailRow>
                    <span>📍</span> KAIF, Kathu, Phuket
                  </DetailRow>
                </EventDetails>

                <FeatureList>
                  <FeatureItem>Group Steaming</FeatureItem>
                  <FeatureItem>Detox Shots</FeatureItem>
                  <FeatureItem>DJ</FeatureItem>
                </FeatureList>

                <BookButton onClick={handleBookNow}>
                  🎄 Book Now 🎄
                </BookButton>
              </InfoContainer>
            </BannerContent>
          </ContentWrapper>
        </BannerContainer>
      )}
    </>
  );
};

export default EventBanner;
