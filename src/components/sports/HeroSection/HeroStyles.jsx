import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
  min-height: 100vh;
  min-height: 100dvh;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #000000;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  padding: 100px 0 30px 0;

  @media (max-width: 768px) {
    min-height: calc(100vh + 60px);
    min-height: calc(100dvh + 60px);
    padding: 80px 0 40px 0;
    align-items: flex-start;
    padding-top: 100px;
    background-position: center top;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }
`;

export const HeroContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #FFFFFF;
  text-align: left;
  width: 100%;
  max-width: 700px;

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
    max-width: 100%;
  }
`;

export const HeroTag = styled(motion.span)`
  display: inline-block;
  background-color: rgba(210, 155, 132, 0.3);
  color: ${props => props.theme.colors.primary};
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(210, 155, 132, 0.3);
`;

export const HeroTitle = styled(motion.h1)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: clamp(3.5rem, 8vw, 6.5rem);
  font-weight: 900;
  line-height: 0.9;
  margin-bottom: 1.5rem;
  color: #FFFFFF;
  position: relative;
  text-transform: uppercase;
  letter-spacing: -0.04em;
  text-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  span {
    color: #FFFFFF;
    position: relative;
    display: inline-block;
  }

  @media (max-width: 1024px) {
    font-size: clamp(3rem, 8vw, 5rem);
    line-height: 0.95;
  }

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 9vw, 3.5rem);
    line-height: 1;
  }
`;

export const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 0;
  font-weight: 400;
  text-align: left;
  max-width: 550px;
  position: relative;
  padding-bottom: 1.5rem;
  -webkit-font-smoothing: antialiased;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #FFE600 0%, #D29B84 100%);
    border-radius: 3px;
    box-shadow: 0 0 20px rgba(255, 230, 0, 0.5);
  }

  @media (max-width: 1024px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

// Кнопки для героической секции
export const HeroCTAContainer = styled(motion.div)`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    width: 100%;
  }
`;

export const PrimaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background: #FFE600;
  color: #000000;
  font-weight: 800;
  font-size: 1rem;
  padding: 1.2rem 2.5rem;
  border-radius: 0;
  cursor: pointer;
  border: none;
  box-shadow: 0 8px 30px rgba(255, 230, 0, 0.4);
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease, color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #000000;
    transition: width 0.3s ease;
    z-index: -1;
  }

  &:hover {
    box-shadow: 0 12px 40px rgba(255, 230, 0, 0.6);
    color: #FFE600;
  }

  &:hover::before {
    width: 100%;
  }

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }

  &:hover svg:last-child {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    padding: 1.2rem 2.2rem;
    font-size: 0.95rem;
    letter-spacing: 1px;
  }
`;

export const SecondaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-weight: 800;
  font-size: 1rem;
  padding: 1.2rem 2.5rem;
  border-radius: 0;
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
    transition: width 0.3s ease;
    z-index: -1;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 1);
    color: #000000;
  }

  &:hover::before {
    width: 100%;
  }

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    padding: 1.2rem 2.2rem;
    font-size: 0.95rem;
    letter-spacing: 1px;
  }
`;

export const HeroStatsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

export const HeroStat = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem 1rem;
  background: rgba(20, 20, 20, 0.8);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.3s ease, border-color 0.3s ease;

  svg {
    margin-bottom: 0.75rem;
  }

  &:hover {
    background: rgba(30, 30, 30, 0.9);
    border-color: rgba(210, 155, 132, 0.4);
  }
`;

export const HeroStatNumber = styled.span`
  font-size: 3rem;
  font-weight: 900;
  font-family: ${props => props.theme.fonts.heading};
  background: linear-gradient(135deg, #D29B84 0%, #C8A8E9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroStatLabel = styled.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

// Изображение для героической секции (только десктоп)
export const HeroImageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 500px;

  @media (max-width: 1024px) {
    height: 400px;
    max-height: 400px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeroImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 32px;
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.5),
    0 0 100px rgba(210, 155, 132, 0.3);
  border: 2px solid rgba(210, 155, 132, 0.3);
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    border-radius: 24px;
  }
`;

export const HeroImageGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(210, 155, 132, 0.2) 0%, transparent 70%);
  z-index: 1;
  pointer-events: none;
`;

export const HeroImageFrame = styled(motion.div)`
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  border: 3px solid rgba(210, 155, 132, 0.2);
  border-radius: 36px;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 1024px) {
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
  }
`;
