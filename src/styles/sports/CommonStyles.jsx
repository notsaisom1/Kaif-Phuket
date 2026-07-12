import styled from 'styled-components';
import { motion } from 'framer-motion';

// Основные стилизованные компоненты
export const PageContainer = styled.div`
  background-color: #000000;
  color: #FFFFFF;
  min-height: 100vh;
  font-family: ${props => props.theme.fonts.primary};
  overflow: visible;
  position: relative;
  z-index: 0;
`;

export const Section = styled.section`
  padding: 4rem 2rem;
  background-color: ${props => props.bgColor || '#000000'};
  position: relative;
  overflow: hidden;

  &:nth-child(even) {
    background: linear-gradient(180deg, #000000 0%, #0a0a0a 100%);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

export const SectionTag = styled(motion.span)`
  display: inline-block;
  background: #FFE600;
  color: #000000;
  padding: 0.7rem 1.5rem;
  border-radius: 0;
  font-size: 0.85rem;
  font-weight: 800;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: none;
  box-shadow: 0 4px 16px rgba(255, 230, 0, 0.4);

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
`;

export const SectionTitle = styled(motion.h2)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: clamp(3rem, 6vw, 5rem);
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1;
  -webkit-font-smoothing: antialiased;

  span {
    background: linear-gradient(135deg, #FFE600 0%, #FFA500 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    filter: drop-shadow(0 0 30px rgba(255, 230, 0, 0.5));
  }

  @media (max-width: 768px) {
    font-size: clamp(2.2rem, 9vw, 3.5rem);
    margin-bottom: 1rem;
  }
`;

export const SectionSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  max-width: 700px;
  margin: 1.5rem auto 3rem auto;
  line-height: 1.7;
  font-weight: 400;

  @media (max-width: 768px) {
    margin: 1rem auto 1.5rem auto;
  }
`;

export const ContentContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

export const BackgroundShape = styled.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}10, ${props => props.theme.colors.primary}30);
  filter: blur(40px);
  z-index: 1;
  transform: translateZ(0);
  will-change: opacity;
`;

export const TopRightShape = styled(BackgroundShape)`
  width: 500px;
  height: 500px;
  top: -100px;
  right: -100px;
`;

export const BottomLeftShape = styled(BackgroundShape)`
  width: 600px;
  height: 600px;
  bottom: -200px;
  left: -200px;
`;

export const BottomRightShape = styled(BackgroundShape)`
  width: 500px;
  height: 500px;
  bottom: -150px;
  right: -150px;
`;

// Кнопка бронирования
export const BookButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(210, 155, 132, 0.25);
  
  @media (max-width: 768px) {
    margin: 0 auto;
    display: flex;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    transition: width 0.3s ease;
  }
  
  &:hover {
    box-shadow: 0 6px 20px rgba(210, 155, 132, 0.35);
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
    transform: translateX(5px);
  }
`;
