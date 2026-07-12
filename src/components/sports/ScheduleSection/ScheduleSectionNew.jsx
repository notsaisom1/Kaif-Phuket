import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ClockIcon } from '@heroicons/react/24/outline';

const WHATSAPP_NUMBER = '66624805877';

// === STYLED COMPONENTS — Minimalist Pasture Style ===

const SectionContainer = styled.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

const HeaderBlock = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Overline = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin-bottom: 1.25rem;
  display: inline-flex;
  align-items: center;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1.5px;
    background: rgba(19, 50, 56, 0.2);
  }

  &::before { margin-right: 1rem; }
  &::after { margin-left: 1rem; }
`;

const Title = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
`;

const Subtitle = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const TabsRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Tab = styled.button`
  padding: 0.65rem 1.25rem;
  background: ${props => props.$active ? '#133238' : 'transparent'};
  color: ${props => props.$active ? '#fffef6' : 'rgba(19, 50, 56, 0.55)'};
  border: 1px solid ${props => props.$active ? '#133238' : 'rgba(19, 50, 56, 0.15)'};
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: ${props => props.$active ? '600' : '400'};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #133238;
    color: ${props => props.$active ? '#fffef6' : '#133238'};
  }

  .short { display: none; }
  .full { display: inline; }

  @media (max-width: 768px) {
    padding: 0.55rem 1rem;
    font-size: 0.75rem;
  }
`;

const DayTab = styled(Tab)`
  @media (max-width: 768px) {
    .short { display: inline; }
    .full { display: none; }
  }
`;

const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  min-height: 220px;
  align-items: start;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    min-height: 220px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    min-height: auto;
  }
`;

const ClassCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 0.35s ease both;
  animation-delay: ${props => props.$delay || '0s'};

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }
`;

const ClassTime = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 800;
  color: #133238;
  background: rgba(19, 50, 56, 0.04);
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  width: fit-content;

  svg {
    width: 14px;
    height: 14px;
    color: rgba(19, 50, 56, 0.4);
  }
`;

const ClassTitle = styled.h4`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  color: #133238;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.01em;
`;

const ClassMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: rgba(19, 50, 56, 0.45);

  svg {
    width: 14px;
    height: 14px;
    color: rgba(19, 50, 56, 0.3);
  }
`;

const BookButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.25rem;
  background: transparent;
  color: #133238;
  border: 1px solid rgba(19, 50, 56, 0.15);
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #133238;
    color: #fffef6;
    border-color: #133238;
  }
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 3rem;
  animation: fadeInUp 0.35s ease both;
  color: rgba(19, 50, 56, 0.4);
  font-family: 'Jost', sans-serif;
  font-size: 1rem;
  grid-column: 1 / -1;
`;

// === DATA ===

const swimSchedule = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [{ time: '09:00', titleKey: 'adults_group', duration: 60 }],
  friday: [],
  saturday: []
};

const danceSchedule = {
  monday: [
    { time: '09:00', titleKey: 'yoga', duration: 60 },
    { time: '13:10', titleKey: 'yoga_pro', duration: 50 }
  ],
  tuesday: [
    { time: '09:00', titleKey: 'stretching', duration: 60 },
    { time: '16:00', titleKey: 'stretching', duration: 60 },
    { time: '19:00', titleKey: 'high_heels', duration: 60 },
    { time: '20:00', titleKey: 'girli_hiphop', duration: 60 }
  ],
  wednesday: [
    { time: '13:10', titleKey: 'yoga_pro', duration: 50 }
  ],
  thursday: [
    { time: '09:00', titleKey: 'stretching', duration: 60 },
    { time: '16:00', titleKey: 'stretching', duration: 60 },
    { time: '19:00', titleKey: 'high_heels', duration: 60 },
    { time: '20:00', titleKey: 'girli_hiphop', duration: 60 }
  ],
  friday: [
    { time: '09:00', titleKey: 'yoga', duration: 60 },
    { time: '13:10', titleKey: 'yoga_pro', duration: 50 }
  ],
  saturday: []
};

const fightSchedule = {
  monday: [{ time: '09:30', titleKey: 'muay_thai', duration: 60 }, { time: '11:00', titleKey: 'kickboxing', duration: 60 }, { time: '18:00', titleKey: 'jiujitsu', duration: 90 }],
  tuesday: [{ time: '09:30', titleKey: 'boxing', duration: 60 }],
  wednesday: [{ time: '09:30', titleKey: 'muay_thai', duration: 60 }, { time: '11:00', titleKey: 'kickboxing', duration: 60 }, { time: '18:00', titleKey: 'jiujitsu', duration: 90 }],
  thursday: [{ time: '09:30', titleKey: 'boxing', duration: 60 }],
  friday: [{ time: '09:30', titleKey: 'muay_thai', duration: 60 }, { time: '11:00', titleKey: 'kickboxing', duration: 60 }, { time: '18:00', titleKey: 'jiujitsu', duration: 90 }],
  saturday: [{ time: '09:30', titleKey: 'boxing', duration: 60 }]
};

const scheduleData = { swim: swimSchedule, dance: danceSchedule, fight: fightSchedule };

const categories = [
  { key: 'swim', labelKey: 'swim' },
  { key: 'dance', labelKey: 'dance_studio' },
  { key: 'fight', labelKey: 'fight_club' }
];

const days = [
  { key: 'monday', labelKey: 'monday', shortKey: 'mon_short' },
  { key: 'tuesday', labelKey: 'tuesday', shortKey: 'tue_short' },
  { key: 'wednesday', labelKey: 'wednesday', shortKey: 'wed_short' },
  { key: 'thursday', labelKey: 'thursday', shortKey: 'thu_short' },
  { key: 'friday', labelKey: 'friday', shortKey: 'fri_short' },
  { key: 'saturday', labelKey: 'saturday', shortKey: 'sat_short' }
];

// === COMPONENT ===

const ScheduleSectionNew = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('swim');
  const [activeDay, setActiveDay] = useState('monday');

  useEffect(() => {
    const dayIndex = new Date().getDay();
    const dayKeys = ['monday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    setActiveDay(dayKeys[dayIndex]);
  }, []);

  const handleBookClick = (classItem) => {
    const className = t(`sports.schedule.classes.${classItem.titleKey}`);
    const dayName = t(`sports.schedule.days.${activeDay}`);
    const categoryName = t(`sports.schedule.categories.${activeCategory}`);
    const message = `Hello! I would like to book a class at KAIF.\n\nCategory: ${categoryName}\nClass: ${className}\nDay: ${dayName}\nTime: ${classItem.time}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const currentSchedule = scheduleData[activeCategory][activeDay] || [];

  return (
    <SectionContainer id="schedule">
      <ContentWrapper>
        <HeaderBlock>
          <Overline>{t('sports.schedule.tag', 'Schedule')}</Overline>
          <Title>{t('sports.schedule.title_plain', 'Class Schedule')}</Title>
          <Subtitle>{t('sports.schedule.subtitle', 'Choose a day and sign up for a class')}</Subtitle>
        </HeaderBlock>

        <TabsRow>
          {categories.map((cat) => (
            <Tab
              key={cat.key}
              $active={activeCategory === cat.key}
              onClick={() => setActiveCategory(cat.key)}
            >
              <span className="full">{t(`sports.schedule.categories.${cat.labelKey}`)}</span>
            </Tab>
          ))}
        </TabsRow>

        <TabsRow>
          {days.map((day) => (
            <DayTab
              key={day.key}
              $active={activeDay === day.key}
              onClick={() => setActiveDay(day.key)}
            >
              <span className="full">{t(`sports.schedule.days.${day.labelKey}`)}</span>
              <span className="short">{t(`sports.schedule.days.${day.shortKey}`)}</span>
            </DayTab>
          ))}
        </TabsRow>

        <ScheduleGrid key={`${activeCategory}-${activeDay}`}>
          {currentSchedule.length === 0 ? (
            <EmptyMessage>{t('sports.schedule.no_classes', 'No classes on this day')}</EmptyMessage>
          ) : (
            currentSchedule.map((classItem, index) => (
              <ClassCard key={index} $delay={`${index * 0.06}s`}>
                <ClassTime>
                  <ClockIcon />
                  <span>{classItem.time}</span>
                </ClassTime>
                <ClassTitle>{t(`sports.schedule.classes.${classItem.titleKey}`)}</ClassTitle>
                <ClassMeta>
                  <ClockIcon />
                  {classItem.duration} {t('sports.schedule.minutes', 'min')}
                </ClassMeta>
                <BookButton onClick={() => handleBookClick(classItem)}>
                  {t('sports.schedule.book', 'Sign Up')}
                </BookButton>
              </ClassCard>
            ))
          )}
        </ScheduleGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ScheduleSectionNew;
