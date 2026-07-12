import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BenefitsContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
`;

export const BenefitsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const BenefitCard = styled(motion.div)`
  background: rgba(20, 20, 20, 0.9);
  padding: 3rem 2.5rem;
  border-radius: 0;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.15);
  border: none;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: #FFE600;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.4s ease;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 60px 60px;
    border-color: transparent transparent rgba(255, 230, 0, 0.1) transparent;
    transition: all 0.4s ease;
    opacity: 0;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 0 1px rgba(255, 230, 0, 0.5), 0 20px 60px rgba(0, 0, 0, 0.3);
    transform: translateY(-10px);
  }

  &:hover::before {
    transform: scaleY(1);
  }

  &:hover::after {
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
  }
`;

export const BenefitIcon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  background: #FFE600;
  margin-bottom: 2rem;
  position: relative;
  border: none;
  box-shadow: 0 8px 32px rgba(255, 230, 0, 0.4);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: 40px;
    height: 40px;
    color: #000000;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: linear-gradient(135deg, #FFE600, #FFA500);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  ${BenefitCard}:hover & {
    box-shadow: 0 12px 48px rgba(255, 230, 0, 0.6);
    transform: scale(1.1) rotate(5deg);
  }

  ${BenefitCard}:hover &::before {
    opacity: 0.3;
  }

  ${BenefitCard}:hover & svg {
    transform: scale(1.15) rotate(-5deg);
  }
`;

export const BenefitTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 900;
  color: #FFFFFF;
  margin-bottom: 1rem;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  -webkit-font-smoothing: antialiased;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: #FFE600;
    transition: width 0.4s ease;
  }

  ${BenefitCard}:hover &::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

export const BenefitDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 400;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.5;
    margin-top: 0.25rem;
  }
`;

export const FloatingShape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
`;
