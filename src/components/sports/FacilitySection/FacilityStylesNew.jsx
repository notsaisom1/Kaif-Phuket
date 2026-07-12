import styled from 'styled-components';
import { motion } from 'framer-motion';

// Новые современные стили для карточек
export const FacilityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const FacilityCardModern = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;

  &:hover {
    box-shadow: 0 0 0 2px #FFE600;
    transform: translateY(-10px);
  }
`;

export const FacilityImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  border: none;
  outline: none;

  @media (max-width: 768px) {
    height: 280px;
  }
`;

export const FacilityImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  display: block;
  border: none;
  outline: none;

  ${FacilityCardModern}:hover & {
    transform: scale(1.1);
  }
`;

export const FacilityOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 95%, rgba(0, 0, 0, 0.6) 100%);
  opacity: 1;
  transition: opacity 0.4s ease;
  pointer-events: none;
  border: none;
`;

export const FacilityTag = styled(motion.div)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: #FFE600;
  padding: 0.65rem 1.3rem;
  border-radius: 0;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #000000;
  box-shadow: 0 6px 20px rgba(255, 230, 0, 0.5);
  border: none;
  z-index: 2;
  text-transform: uppercase;
`;

export const ImageGalleryDots = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
  border: none;
  outline: none;
`;

export const ImageDot = styled(motion.button)`
  width: ${props => props.active ? '24px' : '8px'};
  height: 8px;
  border-radius: 4px;
  border: none;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
`;

export const FacilityContent = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const FacilityTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2rem;
  font-weight: 900;
  color: #FFFFFF;
  margin-bottom: 1rem;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const FacilityDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const FacilityMetaRow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

export const FacilityMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  font-weight: 600;

  svg {
    width: 18px;
    height: 18px;
    color: #D29B84;
  }
`;

export const FacilityFeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

export const FacilityFeatureItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);

  svg {
    width: 20px;
    height: 20px;
    color: #C8A8E9;
    flex-shrink: 0;
  }
`;

export const FacilityButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1.3rem 1.5rem;
  background: #FFE600;
  color: #000000;
  border: none;
  border-radius: 0;
  font-weight: 800;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: box-shadow 0.3s ease, color 0.3s ease;
  box-shadow: 0 6px 24px rgba(255, 230, 0, 0.4);
  position: relative;
  overflow: hidden;
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

  svg {
    width: 18px;
    height: 18px;
    position: relative;
    z-index: 2;
  }

  &:hover {
    box-shadow: 0 8px 32px rgba(255, 230, 0, 0.6);
    color: #FFE600;
  }

  &:hover::before {
    width: 100%;
  }
`;
