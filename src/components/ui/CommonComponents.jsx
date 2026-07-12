import styled from 'styled-components';
import { motion } from 'framer-motion';

// Общие контейнеры
export const PageContainer = styled(motion.div)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.primary};
  min-height: 100vh;
  font-family: ${props => props.theme.fonts.primary};
  overflow-x: hidden;
`;

export const Section = styled(motion.section)`
  position: relative;
  padding: 6rem 1.5rem;
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding: 8rem 2rem;
  }
  
  @media (min-width: 1024px) {
    padding: 10rem 0;
  }
`;

export const ContentContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0 3rem;
  }
`;

// Общие заголовки
export const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  font-family: ${props => props.theme.fonts.heading};
  text-align: center;
  
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const SectionSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.8;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 2.5rem;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
`;

export const SectionTag = styled(motion.div)`
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: ${props => props.theme.colors.gradients.primary};
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 50px;
  margin-bottom: 1.5rem;
  text-align: center;
  
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;

// Общие карточки
export const Card = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 12px;
  }
`;

export const ServiceCard = styled(Card)`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
  }
`;

// Общие кнопки
export const Button = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 2.2rem;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  min-width: 220px;
  text-align: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.3);
  }
  
  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
    padding: 1rem 2rem;
    font-size: 0.8rem;
    min-width: unset;
    border-radius: 14px;
    
    &:hover {
      transform: translateY(-3px) scale(1.01);
    }
  }
`;

export const PrimaryButton = styled(Button)`
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white;
  border: 2px solid transparent;
  box-shadow: 0 6px 20px rgba(144, 179, 167, 0.3);
  
  &:hover {
    box-shadow: 0 8px 25px rgba(144, 179, 167, 0.5);
    background: linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%);
  }
`;

export const SecondaryButton = styled(Button)`
  background: transparent;
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
  }
`;

// Общие grid layout
export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TwoColumnGrid = styled.div`
  display: grid;
  gap: 3rem;
  align-items: center;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

// Общие декоративные элементы
export const FloatingShape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.background || 'linear-gradient(135deg, rgba(144, 179, 167, 0.1) 0%, rgba(168, 197, 184, 0.05) 100%)'};
  pointer-events: none;
  z-index: 1;
`;

export const BackgroundShape = styled(motion.div)`
  position: absolute;
  top: ${props => props.top || '10%'};
  right: ${props => props.right || '10%'};
  width: ${props => props.width || '200px'};
  height: ${props => props.height || '200px'};
  border-radius: 50%;
  background: ${props => props.background || 'linear-gradient(135deg, rgba(144, 179, 167, 0.1) 0%, rgba(168, 197, 184, 0.05) 100%)'};
  pointer-events: none;
  z-index: 1;
  
  @media (max-width: 768px) {
    width: ${props => props.mobileWidth || '100px'};
    height: ${props => props.mobileHeight || '100px'};
  }
`;

// Модальные окна
export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow-y: auto;
`;

export const ModalContent = styled(motion.div)`
  background-color: white;
  border-radius: 16px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem;
  }
`;

// Общие текстовые стили
export const Overline = styled(motion.div)`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  text-align: center;
`;

export const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 2rem;
  text-align: center;
`;

// Форма компоненты
export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`; 