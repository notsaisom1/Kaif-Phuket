import styled from 'styled-components';
import { motion } from 'framer-motion';

// Main Schedule Container
export const ScheduleContainer = styled.div`
  width: 100%;
  margin: 3rem 0;
  overflow: hidden;
  position: relative;
`;

// Schedule Header Styles
export const ScheduleHeading = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #111827;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const ScheduleSubheading = styled(motion.h3)`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  color: #6366F1;
  margin-bottom: 2.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Filter Styles
export const FilterContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  padding: 1rem 1.5rem;
  background: rgba(249, 250, 251, 0.7);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.8);
  
  @media (max-width: 768px) {
    padding: 0.75rem;
    gap: 0.5rem;
    justify-content: flex-start;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const FilterButton = styled(motion.button)`
  background: ${props => props.active ? 'linear-gradient(135deg, #6366F1, #8B5CF6)' : 'rgba(255, 255, 255, 0.8)'};
  color: ${props => props.active ? 'white' : '#4B5563'};
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: ${props => props.active ? '0 4px 10px rgba(99, 102, 241, 0.25)' : '0 2px 5px rgba(0, 0, 0, 0.03)'};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.active ? '0 6px 15px rgba(99, 102, 241, 0.3)' : '0 4px 10px rgba(0, 0, 0, 0.05)'};
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
    flex-shrink: 0;
  }
`;

// Schedule Grid Layout
export const ScheduleGridContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: 80px repeat(7, minmax(180px, 1fr));
  grid-auto-rows: minmax(45px, auto);
  gap: 1px;
  background-color: rgba(229, 231, 235, 0.5);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  min-width: 1100px; // Ensures horizontal scroll on small screens
  perspective: 1000px;
`;

export const TimeColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TimeSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #4B5563;
  background: rgba(249, 250, 251, 0.7);
  border-bottom: 1px solid rgba(229, 231, 235, 0.8);
  height: 45px;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const DayHeader = styled.div`
  padding: 10px 10px;
  text-align: center;
  font-weight: 700;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(249, 250, 251, 0.8));
  border-bottom: 1px solid rgba(229, 231, 235, 0.8);
  
  .day-name {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #111827;
  }
  
  .day-number {
    font-size: 0.7rem;
    color: #6B7280;
    margin-top: 2px;
  }
  
  ${props => props.isToday && `
    background: linear-gradient(to bottom, rgba(243, 244, 246, 1), rgba(237, 238, 240, 0.8));
    
    .day-name {
      color: #6366F1;
    }
    
    &:before {
      content: '•';
      display: block;
      color: #6366F1;
      font-size: 1.2rem;
      line-height: 0.5;
      margin-bottom: 3px;
    }
  `}
`;

export const ScheduleCell = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(229, 231, 235, 0.8);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:nth-child(odd) {
    background: rgba(249, 250, 251, 0.7);
  }
`;

export const ClassCard = styled(motion.div)`
  position: absolute;
  left: 3px;
  right: 3px;
  top: ${props => props.start}%;
  height: ${props => props.duration}%;
  min-height: 35px;
  background: ${props => {
    switch(props.classType) {
      case 'YOGA': return 'linear-gradient(135deg, #DDD6FE, #EDE9FE)';
      case 'STRETCHING': return 'linear-gradient(135deg, #BFDBFE, #DBEAFE)';
      case 'MOBILITY': return 'linear-gradient(135deg, #BBF7D0, #DCFCE7)';
      case 'ZUMBA': return 'linear-gradient(135deg, #FECACA, #FEE2E2)';
      case 'BARRE': return 'linear-gradient(135deg, #FDE68A, #FEF3C7)';
      case 'HIGH HEELS': return 'linear-gradient(135deg, #FBCFE8, #FCE7F3)';
      case 'TABATA': return 'linear-gradient(135deg, #FDBA74, #FED7AA)';
      case 'FITNESS': return 'linear-gradient(135deg, #93C5FD, #BFDBFE)';
      case 'STRONG NATION': return 'linear-gradient(135deg, #FCA5A5, #FECACA)';
      default: return 'linear-gradient(135deg, #C7D2FE, #E0E7FF)';
    }
  }};
  border-radius: 8px;
  padding: 6px 8px;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.7);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  
  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    z-index: 10;
  }
  
  .class-tag {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 0.6rem;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 6px;
    background: ${props => {
      switch(props.classType) {
        case 'YOGA': return 'rgba(139, 92, 246, 0.2)';
        case 'STRETCHING': return 'rgba(59, 130, 246, 0.2)';
        case 'MOBILITY': return 'rgba(16, 185, 129, 0.2)';
        case 'ZUMBA': return 'rgba(239, 68, 68, 0.2)';
        case 'BARRE': return 'rgba(245, 158, 11, 0.2)';
        case 'HIGH HEELS': return 'rgba(236, 72, 153, 0.2)';
        case 'TABATA': return 'rgba(249, 115, 22, 0.2)';
        case 'FITNESS': return 'rgba(59, 130, 246, 0.2)';
        case 'STRONG NATION': return 'rgba(220, 38, 38, 0.2)';
        default: return 'rgba(99, 102, 241, 0.2)';
      }
    }};
    color: ${props => {
      switch(props.classType) {
        case 'YOGA': return '#7C3AED';
        case 'STRETCHING': return '#2563EB';
        case 'MOBILITY': return '#059669';
        case 'ZUMBA': return '#DC2626';
        case 'BARRE': return '#D97706';
        case 'HIGH HEELS': return '#DB2777';
        case 'TABATA': return '#EA580C';
        case 'FITNESS': return '#2563EB';
        case 'STRONG NATION': return '#B91C1C';
        default: return '#4F46E5';
      }
    }};
    backdrop-filter: blur(5px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const ClassTitle = styled.h3`
  font-size: 0.85rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 8px 0;
`;

export const ClassDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: auto;
`;

export const ClassTime = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.7rem;
  font-weight: 600;
  color: #4B5563;
  
  svg {
    width: 12px;
    height: 12px;
  }
`;

export const ClassInstructor = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.7rem;
  font-weight: 500;
  color: #6B7280;
  
  svg {
    width: 12px;
    height: 12px;
  }
`;

export const ClassAvailability = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.65rem;
  font-weight: 600;
  margin-top: 5px;
  padding: 2px 6px;
  border-radius: 4px;
  width: fit-content;
  
  background: ${props => {
    switch(props.status) {
      case 'available': return 'rgba(16, 185, 129, 0.1)';
      case 'limited': return 'rgba(245, 158, 11, 0.1)';
      case 'full': return 'rgba(239, 68, 68, 0.1)';
      default: return 'rgba(107, 114, 128, 0.1)';
    }
  }};
  
  color: ${props => {
    switch(props.status) {
      case 'available': return '#059669';
      case 'limited': return '#D97706';
      case 'full': return '#DC2626';
      default: return '#6B7280';
    }
  }};
`;

export const ScheduleLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #4B5563;
  
  .legend-color {
    width: 12px;
    height: 12px;
    border-radius: 3px;
    background: ${props => {
      switch(props.classType) {
        case 'YOGA': return 'linear-gradient(135deg, #DDD6FE, #EDE9FE)';
        case 'STRETCHING': return 'linear-gradient(135deg, #BFDBFE, #DBEAFE)';
        case 'MOBILITY': return 'linear-gradient(135deg, #BBF7D0, #DCFCE7)';
        case 'ZUMBA': return 'linear-gradient(135deg, #FECACA, #FEE2E2)';
        case 'BARRE': return 'linear-gradient(135deg, #FDE68A, #FEF3C7)';
        case 'HIGH HEELS': return 'linear-gradient(135deg, #FBCFE8, #FCE7F3)';
        case 'TABATA': return 'linear-gradient(135deg, #FDBA74, #FED7AA)';
        case 'FITNESS': return 'linear-gradient(135deg, #93C5FD, #BFDBFE)';
        case 'STRONG NATION': return 'linear-gradient(135deg, #FCA5A5, #FECACA)';
        default: return 'linear-gradient(135deg, #C7D2FE, #E0E7FF)';
      }
    }};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const BookingButton = styled(motion.button)`
  background: linear-gradient(135deg, #6366F1, #8B5CF6);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 100%;
  margin-top: 1.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(99, 102, 241, 0.35);
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 5px rgba(99, 102, 241, 0.2);
  }
  
  &:disabled {
    background: linear-gradient(135deg, #9CA3AF, #D1D5DB);
    cursor: not-allowed;
    box-shadow: none;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

export const MobileScheduleView = styled.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const DayTabContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 0.5rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 0.5rem 0;
  margin: 0 -1rem;
  padding: 0 1rem;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DayTab = styled(motion.button)`
  background: ${props => props.active ? 'linear-gradient(135deg, #6366F1, #8B5CF6)' : 'white'};
  color: ${props => props.active ? 'white' : '#4B5563'};
  border: ${props => props.active ? 'none' : '1px solid #E5E7EB'};
  padding: 0.75rem 1.25rem;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: ${props => props.active ? '0 4px 10px rgba(99, 102, 241, 0.25)' : '0 2px 5px rgba(0, 0, 0, 0.03)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 70px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  .day-name {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .day-number {
    font-size: 1.1rem;
    font-weight: 700;
    margin-top: 2px;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.active ? '0 6px 15px rgba(99, 102, 241, 0.3)' : '0 4px 10px rgba(0, 0, 0, 0.05)'};
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

export const MobileScheduleGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 1rem;
`;

export const MobileTimeSlot = styled.div`
  background: white;
  border-radius: 12px;
  padding: 0.75rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(229, 231, 235, 0.5);
  
  .time-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #F3F4F6;
    
    svg {
      color: #6366F1;
      width: 16px;
      height: 16px;
    }
    
    span {
      font-weight: 700;
      font-size: 0.9rem;
      color: #111827;
    }
  }
  
  .classes-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const CurrentTimeIndicator = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: ${props => props.position}%;
  height: 2px;
  background: linear-gradient(90deg, rgba(239, 68, 68, 0.8) 0%, rgba(239, 68, 68, 0.4) 100%);
  z-index: 5;
  
  &:before {
    content: '';
    position: absolute;
    left: 79px;
    top: -4px;
    width: 10px;
    height: 10px;
    background: #EF4444;
    border-radius: 50%;
    box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.3);
  }
  
  &:after {
    content: 'Сейчас';
    position: absolute;
    left: 20px;
    top: -10px;
    font-size: 0.7rem;
    font-weight: 600;
    color: #EF4444;
  }
`;

export const SkeletonCard = styled.div`
  background: linear-gradient(90deg, #F3F4F6 0%, #E5E7EB 50%, #F3F4F6 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
  height: 35px;
  width: 100%;
  
  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

export const BookingModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
  padding: 1rem;
`;

export const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform-style: preserve-3d;
  perspective: 1000px;
`;

export const ModalHeader = styled.div`
  margin-bottom: 1.5rem;
  
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin: 0;
  }
  
  p {
    font-size: 0.95rem;
    color: #6B7280;
    margin-top: 0.5rem;
  }
  
  .class-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    background: #F9FAFB;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #E5E7EB;
  }
  
  .class-info-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: #4B5563;
    
    svg {
      color: #6366F1;
      flex-shrink: 0;
    }
    
    span {
      font-weight: 600;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6B7280;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  
  &:hover {
    background-color: #F3F4F6;
    color: #111827;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
  }
`;

export const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1rem;
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
      font-weight: 600;
      color: #4B5563;
      
      svg {
        color: #6366F1;
      }
      
      .optional-label {
        font-size: 0.7rem;
        font-weight: 400;
        color: #9CA3AF;
        margin-left: 4px;
      }
    }
    
    input, select, textarea {
      padding: 0.75rem;
      border: 1px solid #E5E7EB;
      border-radius: 8px;
      font-size: 0.9rem;
      color: #1F2937;
      background: #F9FAFB;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
      
      &:focus {
        border-color: #6366F1;
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
      }
      
      &::placeholder {
        color: #9CA3AF;
      }
    }
    
    textarea {
      resize: vertical;
      min-height: 100px;
    }
  }
`;

export const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, #6366F1, #8B5CF6);
  color: white;
  border: none;
  padding: 0.85rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.25);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin-top: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(99, 102, 241, 0.3);
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 5px rgba(99, 102, 241, 0.2);
  }
`;
