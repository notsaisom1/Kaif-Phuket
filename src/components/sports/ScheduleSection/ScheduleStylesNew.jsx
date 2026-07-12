import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ScheduleContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ScheduleTabs = styled(motion.div)`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  overflow-x: auto;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  scrollbar-width: none;
  justify-content: center;
  flex-wrap: wrap;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0.75rem;
  }
`;

export const ScheduleTab = styled(motion.button)`
  flex: 0 0 auto;
  min-width: 120px;
  padding: 0.875rem 1.5rem;
  background: ${props => props.active ? '#FFE600' : 'transparent'};
  color: ${props => props.active ? '#000000' : '#FFFFFF'};
  border: 2px solid ${props => props.active ? '#FFE600' : 'rgba(255, 255, 255, 0.3)'};
  border-radius: 6px;
  font-weight: ${props => props.active ? '700' : '500'};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  -webkit-font-smoothing: antialiased;

  .short {
    display: none;
  }

  .full {
    display: inline;
  }

  &:hover {
    background: ${props => props.active ? '#FFE600' : 'rgba(255, 230, 0, 0.15)'};
    border-color: #FFE600;
    color: ${props => props.active ? '#000000' : '#FFE600'};
  }

  @media (max-width: 768px) {
    min-width: auto;
    padding: 0.75rem 1rem;
    font-size: 0.8rem;
    flex: 0 1 auto;

    .short {
      display: inline;
    }

    .full {
      display: none;
    }
  }
`;

export const CategoryTab = styled(ScheduleTab)`
  @media (max-width: 768px) {
    .short {
      display: none;
    }

    .full {
      display: inline;
    }
  }
`;

export const ScheduleContent = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

export const ClassCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 4px solid #FFE600;
  box-shadow: none;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 230, 0, 0.5);
    border-left-color: #FFE600;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

export const ClassTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: #FFE600;
  border-radius: 0;
  width: fit-content;

  svg {
    width: 18px;
    height: 18px;
    color: #000000;
  }

  span {
    font-weight: 800;
    font-size: 1.1rem;
    color: #000000;
    letter-spacing: 0.5px;
  }
`;

export const ClassInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`;

export const ClassTitle = styled.h4`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 900;
  color: #FFFFFF;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  -webkit-font-smoothing: antialiased;
`;

export const ClassInstructor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  font-weight: 600;

  svg {
    width: 16px;
    height: 16px;
    color: #FFE600;
  }
`;

export const ClassMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

export const ClassMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  font-weight: 500;

  svg {
    width: 16px;
    height: 16px;
    color: rgba(255, 230, 0, 0.6);
  }
`;

export const BookButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: #FFE600;
  color: #000000;
  border: none;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  -webkit-font-smoothing: antialiased;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: #fff;
    transform: scale(1.02);
  }
`;
