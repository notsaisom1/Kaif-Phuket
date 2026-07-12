import styled from 'styled-components';
import { motion } from 'framer-motion';

// Карточки спортивных объектов
export const SportFacility = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 6rem 0;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  &:nth-child(even) {
    grid-template-columns: 1fr 1fr;
    
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
    
    .facility-content {
      order: 2;
      
      @media (max-width: 992px) {
        order: 1;
      }
    }
    
    .facility-gallery {
      order: 1;
      
      @media (max-width: 992px) {
        order: 2;
      }
    }
  }
  
  &:first-child {
    margin-top: 0;
  }
`;

export const FacilityTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 1.5rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  padding-bottom: 0.8rem;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 60px;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    text-align: center;
    display: block;
    width: 100%;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const FacilityDescription = styled.div`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 2rem;
  
  p {
    margin-bottom: 1rem;
  }
  
  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const FacilityGallery = styled.div`
  position: relative;
  direction: ltr;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 230px);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-rows: repeat(2, 180px);
  }
`;

export const GalleryImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  transition: all 0.4s ease;
  box-shadow: ${props => props.theme.shadows.md};
  position: relative;
  filter: none;
  opacity: 1;
  
  &:hover {
    transform: scale(1.03);
    box-shadow: ${props => props.theme.shadows.xl};
  }
  
  &:first-child {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
`;

export const FacilityFeature = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  
  svg {
    width: 20px;
    height: 20px;
    color: ${props => props.theme.colors.primary};
    margin-right: 0.75rem;
    flex-shrink: 0;
  }
  
  span {
    font-size: 1rem;
    color: ${props => props.theme.colors.text.secondary};
  }
`;

export const FacilityMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const FacilityMetaItem = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    width: 20px;
    height: 20px;
    color: ${props => props.theme.colors.primary};
    margin-right: 0.75rem;
  }
  
  span {
    font-size: 0.95rem;
    color: ${props => props.theme.colors.text.secondary};
  }
`;

export const FacilityButtonContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

// Modern Schedule Components
export const ScheduleContainer = styled(motion.div)`
  width: 100%;
  margin: 2rem 0 3rem;
  overflow: visible;
  background-color: transparent;
  position: relative;
`;

export const ScheduleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 2px;
    background: linear-gradient(to right, #6366f1, transparent);
  }
  
  .title-wrapper {
    h3 {
      font-family: ${props => props.theme.fonts.heading};
      font-size: 1.5rem;
      font-weight: 600;
      color: #222;
      margin: 0 0 0.5rem 0;
      letter-spacing: 0.5px;
      position: relative;
    }
    
    p {
      color: #666;
      font-size: 0.85rem;
      margin: 0;
      line-height: 1.5;
      max-width: 500px;
    }
  }
`;

export const FilterLabel = styled.div`
  font-size: 0.85rem;
  color: #4b5563;
  font-weight: 600;
  margin-right: 0.75rem;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
`;

export const ScheduleFilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 0.75rem;
  position: relative;
  padding: 1rem 1.25rem;
  background: rgba(249, 250, 251, 0.7);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.03);
  border: 1px solid rgba(255,255,255,0.7);
`;

export const ScheduleFilterButton = styled.button`
  background: ${props => props.active ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'transparent'};
  color: ${props => props.active ? '#fff' : '#888'};
  border: ${props => props.active ? 'none' : '1px solid #e5e7eb'};
  padding: ${props => props.active ? '6px 14px' : '5px 12px'};
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  text-transform: uppercase;
  letter-spacing: 0.6px;
  box-shadow: ${props => props.active ? '0 4px 10px rgba(99, 102, 241, 0.25)' : 'none'};
  transform-origin: center;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-1px);
    border-color: ${props => props.active ? 'none' : '#cbd5e1'};
    color: ${props => props.active ? '#fff' : '#333'};
    box-shadow: ${props => props.active ? '0 6px 15px rgba(99, 102, 241, 0.3)' : '0 2px 6px rgba(0,0,0,0.04)'};    
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: ${props => props.active ? '0 2px 5px rgba(99, 102, 241, 0.2)' : 'none'};
  }
  
  &:focus {
    outline: none;
  }
`;

export const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  width: 100%;
  perspective: 1000px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
`;

export const ScheduleCard = styled(motion.div)`
  background-color: white;
  background-image: ${props => props.isPrimary ? 'linear-gradient(135deg, rgba(249, 250, 251, 0.9), rgba(243, 244, 246, 0.4))' : 'none'};
  border-radius: 16px;
  padding: 24px;
  position: relative;
  cursor: pointer;
  border: 1px solid rgba(229, 231, 235, 0.7);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.01), 0 1px 3px rgba(0, 0, 0, 0.02);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(5px);
  transform-style: preserve-3d;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 0;
    background: linear-gradient(to bottom, #6366f1, #8b5cf6);
    transition: height 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    opacity: 0.85;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-8px) rotateX(2deg);
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.07), 0 10px 10px rgba(0, 0, 0, 0.04);
    border-color: rgba(203, 213, 225, 0.6);
    
    &::before {
      height: 100%;
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(-2px);
    transition: all 0.1s;
  }
`;

export const ScheduleTime = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  
  svg {
    width: 14px;
    height: 14px;
    margin-right: 5px;
    color: #999;
  }
  
  span {
    font-size: 0.8rem;
    color: #666;
    font-weight: 500;
  }
`;

export const ClassTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #111827;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #6366f1, transparent);
    transition: width 0.3s ease;
  }
  
  ${ScheduleCard}:hover & {
    &::after {
      width: 100%;
    }
  }
`;

export const ClassInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  
  svg {
    width: 14px;
    height: 14px;
    margin-right: 5px;
    color: #999;
  }
  
  span {
    font-size: 0.75rem;
    color: #777;
  }
`;

export const ClassTag = styled.span`
  display: inline-block;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  padding: 4px 10px;
  border-radius: 20px;
  background-color: ${props => {
    // Support both type and color props
    if (props.type === 'personal') return 'rgba(37, 99, 235, 0.1)';
    if (props.type === 'event') return 'rgba(219, 39, 119, 0.1)';
    if (props.type === 'group') return 'rgba(75, 85, 99, 0.1)';
    
    // Color-based backgrounds for availability status
    if (props.color === 'green') return 'rgba(22, 163, 74, 0.1)';
    if (props.color === 'yellow') return 'rgba(245, 158, 11, 0.1)';
    if (props.color === 'red') return 'rgba(220, 38, 38, 0.1)';
    
    return 'rgba(75, 85, 99, 0.1)'; // Default
  }};
  color: ${props => {
    // Support both type and color props
    if (props.type === 'personal') return '#2563eb';
    if (props.type === 'event') return '#db2777';
    
    // Color-based text for availability status
    if (props.color === 'green') return '#16a34a';
    if (props.color === 'yellow') return '#f59e0b';
    if (props.color === 'red') return '#dc2626';
    
    return '#4b5563'; // Default
  }};
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
  transform: translateY(0);
  
  ${ScheduleCard}:hover & {
    transform: translateY(-1px);
    box-shadow: 0 2px 5px ${props => {
      if (props.type === 'personal') return 'rgba(37, 99, 235, 0.15)';
      if (props.type === 'event') return 'rgba(219, 39, 119, 0.15)';
      if (props.color === 'green') return 'rgba(22, 163, 74, 0.15)';
      if (props.color === 'yellow') return 'rgba(245, 158, 11, 0.15)';
      if (props.color === 'red') return 'rgba(220, 38, 38, 0.15)';
      return 'rgba(75, 85, 99, 0.15)';
    }};
  }
`;

export const ClassTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  gap: 6px;
  transition: all 0.3s ease;
`;

export const ScheduleActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
`;

export const BookScheduleButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.55rem 1.2rem;
  font-family: ${props => props.theme.fonts.body};
  font-weight: 500;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: none;
  }
`;

export const ScheduleNote = styled.div`
  text-align: center;
  padding: 1rem 0;
  font-style: italic;
  color: #6b7280;
  font-size: 0.8rem;
  margin-top: 1.5rem;
  background: rgba(249, 250, 251, 0.7);
  border-radius: 8px;
  border: 1px dashed #e5e7eb;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, transparent, rgba(99, 102, 241, 0.3), transparent);
  }
`;

export const ClassHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
    opacity: 0;
    transform: scale(0.5);
    transition: all 0.4s ease;
    z-index: -1;
  }
  
  ${ScheduleCard}:hover & {
    &::before {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ClassTime = styled.div`
  font-size: 0.8rem;
  color: #6366f1;
  font-weight: 600;
  background: rgba(99, 102, 241, 0.1);
  padding: 3px 8px;
  border-radius: 20px;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  
  ${ScheduleCard}:hover & {
    background: rgba(99, 102, 241, 0.15);
    box-shadow: 0 2px 5px rgba(99, 102, 241, 0.1);
  }
`;

export const ClassInstructor = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  transform: translateX(0);
  
  svg {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    color: #6b7280;
    transition: all 0.3s ease;
  }
  
  span {
    font-size: 0.8rem;
    color: #4b5563;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  ${ScheduleCard}:hover & {
    transform: translateX(3px);
    
    svg {
      color: #6366f1;
      transform: scale(1.1);
    }
    
    span {
      color: #374151;
    }
  }
`;

export const ClassLocation = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  transition: all 0.3s ease;
  transform: translateX(0);
  
  svg {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    color: #6b7280;
    transition: all 0.3s ease;
  }
  
  span {
    font-size: 0.8rem;
    color: #4b5563;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  ${ScheduleCard}:hover & {
    transform: translateX(3px);
    transition-delay: 0.05s;
    
    svg {
      color: #6366f1;
      transform: scale(1.1);
    }
    
    span {
      color: #374151;
    }
  }
`;

export const ScheduleWrapper = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  animation: ${props => props.active ? 'fadeIn 0.5s ease' : 'none'};
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const NoClassesMessage = styled.div`
  padding: 3rem 2rem;
  text-align: center;
  color: #6b7280;
  font-size: 0.95rem;
  background: linear-gradient(135deg, #f9fafb, #f3f4f6);
  border-radius: 16px;
  width: 100%;
  grid-column: 1 / -1;
  border: 1px dashed #e5e7eb;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right, #6366f1, #8b5cf6);
    opacity: 0.3;
  }
`;
