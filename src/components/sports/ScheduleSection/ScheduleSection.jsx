import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Section, SectionTag, ContentContainer } from '../../../styles/sports/CommonStyles';

// Стили компонентов
const ScheduleContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  padding: 1.5rem;
  background: var(--color-surface);
  border-radius: 16px;
  box-shadow: var(--shadow-wellness-lg);
  overflow-x: auto; /* Добавляем горизонтальную прокрутку */
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem;
    margin: 0.7rem 0;
    border-radius: 12px;
  }
`;

const ScheduleHeading = styled.h2`
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;

const ScheduleSubheading = styled.h3`
  font-family: var(--font-primary);
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const DaySelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding: 0.5rem;
  background: var(--color-surface-secondary);
  border-radius: 16px;
  box-shadow: var(--shadow-wellness);
  
  @media (max-width: 768px) {
    gap: 0.25rem;
    padding: 0.5rem 0.25rem;
    margin-bottom: 1.5rem;
    justify-content: flex-start;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    gap: 0.2rem;
    padding: 0.4rem 0.2rem;
    margin-bottom: 1rem;
    border-radius: 10px;
    position: sticky;
    top: 0;
    z-index: 10;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(5px);
  }
`;

const DayButton = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: none;
  background: var(--color-surface);
  color: var(--color-text-primary);
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--shadow-wellness);
  min-width: 80px;
  transition: var(--transition-natural);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-wellness-lg);
    background: var(--color-surface);
    color: var(--color-text-primary);
  }
  
  @media (max-width: 768px) {
    min-width: 70px;
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    min-width: 55px;
    flex: 1;
    padding: 0.4rem 0.3rem;
    font-size: 0.8rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    span {
      display: block;
      line-height: 1.2;
    }
  }
`;

const ScheduleTable = styled.table`
  width: 100%;
  min-width: 900px; /* Минимальная ширина для корректного отображения */
  border-collapse: separate;
  border-spacing: 4px;
  
  @media (max-width: 768px) {
    border-spacing: 2px;
  }
  
  @media (max-width: 480px) {
    border-spacing: 3px 4px;
    margin-top: 0.5rem;
    min-width: auto; /* Отключаем минимальную ширину на мобильных */
  }
`;

const TableHeader = styled.th`
  padding: 0.75rem 0.5rem;
  text-align: center;
  font-weight: 700;
  color: var(--color-text-primary);
  background: transparent;
  border-radius: 12px 12px 0 0;
  transition: var(--transition-natural);
  position: relative;
  
  .day-name {
    display: block;
    font-size: 0.9rem;
    font-family: var(--font-primary);
    font-weight: 700;
  }
  
  .day-number {
    display: none;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 0.3rem;
    border-radius: 8px 8px 0 0;
    display: ${props => props.hiddenOnMobile ? 'none' : 'table-cell'};
    width: ${props => props.isSelected ? '100%' : '0'};
    
    .day-name {
      font-size: 0.8rem;
    }
  }
`;

const TimeCell = styled.td`
  padding: 0.5rem;
  text-align: right;
  font-weight: 700;
  font-family: var(--font-primary);
  color: var(--color-text-primary);
  width: 80px;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    width: 70px;
    padding: 0.4rem;
    font-size: 1.1rem;
    font-weight: 800;
  }
  
  @media (max-width: 480px) {
    width: 50px;
    padding: 0.4rem 0.2rem 0.4rem 0;
    font-size: 1.2rem;
    font-weight: 800;
    position: sticky;
    left: 0;
    background: var(--color-surface);
    z-index: 2;
  }
`;

const ClassCell = styled.td`
  padding: 0.4rem 0.6rem;
  background-color: ${props => props.bgColor || 'transparent'};
  text-align: center;
  border-radius: 8px;
  box-shadow: ${props => props.bgColor ? 'var(--shadow-wellness)' : 'none'};
  transition: var(--transition-natural);
  position: relative;
  height: 24px;
  max-height: 24px;
  min-width: ${props => props.isCurrentDay ? '120px' : '110px'}; /* Добавили минимальную ширину */
  width: ${props => props.isCurrentDay ? '14%' : '13%'};
  overflow: hidden;
  cursor: ${props => props.hasClass ? 'pointer' : 'default'};
  vertical-align: middle;
  
  &:hover {
    transform: ${props => props.hasClass ? 'translateY(-1px)' : 'none'};
    box-shadow: ${props => props.hasClass ? '0 3px 10px rgba(144, 179, 167, 0.4)' : 'none'};
  }
  
  @media (max-width: 768px) {
    height: 26px;
    max-height: 26px;
    padding: 0.45rem 0.5rem;
    border-radius: 7px;
  }
  
  @media (max-width: 480px) {
    height: 28px;
    max-height: 28px;
    min-height: 28px;
    padding: 0.5rem 0.4rem;
    width: auto;
    min-width: auto; /* Сбрасываем минимальную ширину на мобильных */
    display: ${props => props.hiddenOnMobile ? 'none' : 'table-cell'};
    border-radius: 7px;
  }
`;

const ClassContent = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-family: var(--font-primary);
  color: var(--color-text-primary);
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    gap: 0.35rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.3rem;
    flex-direction: column;
  }
`;

const ClassTitle = styled.div`
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.85rem;
  font-family: var(--font-primary);
  color: var(--color-text-primary);
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.2;
  }
`;

const ClassDetails = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  line-height: 1.1;
  
  &::before {
    content: '•';
    margin-right: 3px;
    
    @media (max-width: 480px) {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.2;
  }
`;

const TrainerName = styled.div`
  font-size: 0.65rem;
  font-weight: 500;
  font-style: italic;
  color: var(--color-text-secondary);
  line-height: 1;
  
  &::before {
    content: '•';
    margin-right: 2px;
    font-style: normal;
    
    @media (max-width: 480px) {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`;

// Дни недели
const days = [
  { name: 'MON', number: '1', fullName: 'Понедельник' },
  { name: 'TUE', number: '2', fullName: 'Вторник' },
  { name: 'WED', number: '3', fullName: 'Среда' },
  { name: 'THU', number: '4', fullName: 'Четверг' },
  { name: 'FRI', number: '5', fullName: 'Пятница' },
  { name: 'SAT', number: '6', fullName: 'Суббота' },
  { name: 'SUN', number: '7', fullName: 'Воскресенье' }
];

// Временные слоты
const timeSlots = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

// Типы занятий
const classTypes = [
  'YOGA', 'STRETCHING', 'MOBILITY', 'ZUMBA', 'BARRE', 
  'HIGH HEELS', 'TABATA', 'FITNESS', 'STRONG NATION', 'CIRCL MOBILITY'
];

// Имена тренеров
const trainers = [
  'Anna K.', 'Michael S.', 'Elena G.', 'Sergei T.', 'Maria V.', 
  'Alexey D.', 'Viktoria Z.', 'Dmitry L.', 'Natalia M.', 'Ivan P.'
];

// Функция для генерации тестовых данных
const generateScheduleData = () => {
  const schedule = [];
  
  days.forEach((day, dayIndex) => {
    // 3-5 занятий в день
    const numberOfClasses = 3 + Math.floor(Math.random() * 3);
    
    for (let i = 0; i < numberOfClasses; i++) {
      const startHour = 9 + Math.floor(Math.random() * 9); // Между 9 и 17
      const duration = 45 + Math.floor(Math.random() * 4) * 15; // 45, 60, 75 или 90 минут
      const classType = classTypes[Math.floor(Math.random() * classTypes.length)];
      const trainer = trainers[Math.floor(Math.random() * trainers.length)];
      const maxParticipants = 10 + Math.floor(Math.random() * 11); // От 10 до 20 участников
      const currentParticipants = Math.floor(Math.random() * (maxParticipants + 1)); // Текущее количество участников
      
      schedule.push({
        id: `class-${dayIndex}-${i}`,
        day: dayIndex,
        startTime: `${startHour}:00`,
        classType,
        trainer,
        duration,
        maxParticipants,
        currentParticipants
      });
    }
  });
  
  return schedule;
};

// Функция для определения цвета ячейки
const getClassTypeColor = (classType) => {
  // Используем более мягкие оттенки, соответствующие основной цветовой схеме сайта
  const colorMap = {
    'YOGA': 'rgba(144, 179, 167, 0.2)', // Зеленоватый (первичный цвет)
    'STRETCHING': 'rgba(200, 168, 233, 0.2)', // Лавандовый (третичный цвет)
    'MOBILITY': 'rgba(144, 179, 167, 0.15)', // Светло-зеленый
    'ZUMBA': 'rgba(212, 165, 116, 0.2)', // Песочный (вторичный цвет)
    'BARRE': 'rgba(212, 165, 116, 0.15)', // Светло-песочный
    'HIGH HEELS': 'rgba(200, 168, 233, 0.15)', // Светло-лавандовый
    'TABATA': 'rgba(212, 165, 116, 0.25)', // Насыщенный песочный
    'FITNESS': 'rgba(144, 179, 167, 0.25)', // Насыщенный зеленый
    'STRONG NATION': 'rgba(200, 168, 233, 0.25)', // Насыщенный лавандовый
    'CIRCL MOBILITY': 'rgba(144, 179, 167, 0.18)' // Зеленоватый
  };
  
  return colorMap[classType] || 'rgba(144, 179, 167, 0.1)';
};

const ScheduleSection = () => {
  const { t } = useTranslation();
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentDay, setCurrentDay] = useState(new Date().getDay() === 0 ? 6 : new Date().getDay() - 1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  
  // Загрузка данных расписания
  useEffect(() => {
    const loadSchedule = async () => {
      setLoading(true);
      // Имитация API-запроса
      await new Promise(resolve => setTimeout(resolve, 500));
      const data = generateScheduleData();
      setSchedule(data);
      setLoading(false);
    };
    
    loadSchedule();
  }, []);
  
  // Обработка изменения размера окна для адаптивного дизайна
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    // Запуск при инициализации
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <Section id="schedule">
      <ContentContainer>
        <div style={{ textAlign: 'center' }}>
          <SectionTag>
            {t('sports.schedule.tag', 'Расписание')}
          </SectionTag>
          
          <ScheduleHeading>
            {t('sports.schedule.title', 'SCHEDULE')}
          </ScheduleHeading>
          
          <ScheduleSubheading>
            {t('sports.schedule.subtitle', 'ВЫБЕРИТЕ ДЕНЬ НЕДЕЛИ')}
          </ScheduleSubheading>
        </div>
        
        <ScheduleContainer>
          {/* Селектор дней недели */}
          <DaySelectorContainer>
            {days.map((day, index) => (
              <DayButton
                key={day.name}
                isSelected={index === currentDay}
                onClick={() => setCurrentDay(index)}
              >
                <span>{day.name}</span>
                <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>{day.number}</span>
              </DayButton>
            ))}
          </DaySelectorContainer>
          
          {/* Таблица расписания */}
          <ScheduleTable>
            <thead>
              <tr>
                <th style={{ width: isMobile ? '40px' : '80px' }}></th>
                {days.map((day, index) => (
                  <TableHeader 
                    key={day.name}
                    isSelected={index === currentDay}
                    hiddenOnMobile={isMobile && index !== currentDay}
                  >
                    <span className="day-name">{day.name}</span>
                    <span className="day-number">{day.number}</span>
                  </TableHeader>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                // Скелетон при загрузке
                timeSlots.map((time, timeIndex) => (
                  <tr key={`loading-row-${timeIndex}`}>
                    <TimeCell>{time}</TimeCell>
                    {days.map((_, dayIndex) => (
                      <ClassCell key={`loading-cell-${dayIndex}-${timeIndex}`}>
                        {Math.random() > 0.7 && (
                          <div style={{
                            height: '100%',
                            background: '#f3f4f6',
                            borderRadius: '4px',
                            animation: 'pulse 1.5s infinite'
                          }}></div>
                        )}
                      </ClassCell>
                    ))}
                  </tr>
                ))
              ) : (
                // Реальные данные расписания
                timeSlots.map((time, timeIndex) => (
                  <tr key={`time-row-${timeIndex}`}>
                    <TimeCell>{time}</TimeCell>
                    {days.map((day, dayIndex) => {
                      // Найти класс для этой ячейки
                      const classForCell = schedule.find(cls => 
                        cls.day === dayIndex && 
                        cls.startTime === time
                      );
                      
                      return (
                        <ClassCell 
                          key={`cell-${dayIndex}-${timeIndex}`}
                          bgColor={classForCell ? getClassTypeColor(classForCell.classType) : 'transparent'}
                          hasClass={Boolean(classForCell)}
                          isCurrentDay={dayIndex === currentDay}
                          hiddenOnMobile={isMobile && dayIndex !== currentDay}
                        >
                          {classForCell && (
                            <ClassContent>
                              <ClassTitle>{classForCell.classType}</ClassTitle>
                              <ClassDetails>
                                {classForCell.duration} {t('sports.schedule.minutes', 'мин')}
                              </ClassDetails>
                              <TrainerName>{classForCell.trainer}</TrainerName>
                            </ClassContent>
                          )}
                        </ClassCell>
                      );
                    })}
                  </tr>
                ))
              )}
            </tbody>
          </ScheduleTable>
        </ScheduleContainer>
      </ContentContainer>
    </Section>
  );
};

export default ScheduleSection;
