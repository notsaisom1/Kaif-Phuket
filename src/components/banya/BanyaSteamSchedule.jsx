import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const SectionContainer = styled.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

const Overline = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1.5px;
    background: rgba(19, 50, 56, 0.25);
    margin-right: 1rem;
  }
`;

const Title = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1.25rem;
  max-width: 800px;
`;

const ScheduleNote = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: clamp(0.95rem, 1.3vw, 1.05rem);
  line-height: 1.5;
  color: rgba(19, 50, 56, 0.65);
  margin: 0 0 3rem;
  max-width: 720px;

  strong {
    font-weight: 600;
    color: #133238;
    letter-spacing: 0.02em;
  }

  @media (min-width: 768px) {
    margin-bottom: 3.5rem;
  }
`;

const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 0 4rem;
  }
`;

const ScheduleColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const EarlySlotBadge = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #90b3a7;
  border: 1px solid rgba(144, 179, 167, 0.45);
  border-radius: 999px;
  padding: 0.2rem 0.6rem;
  margin-left: auto;
  white-space: nowrap;
  flex-shrink: 0;
`;

const ScheduleItem = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(19, 50, 56, 0.08);

  &:first-child {
    border-top: 1px solid rgba(19, 50, 56, 0.08);
  }

  @media (max-width: 480px) {
    gap: 1rem;
    padding: 1.25rem 0;
  }
`;

const Time = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 800;
  color: #133238;
  letter-spacing: -0.02em;
  flex-shrink: 0;
  min-width: 80px;

  @media (max-width: 480px) {
    min-width: 65px;
  }
`;

const Dash = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 1.25rem;
  color: rgba(19, 50, 56, 0.25);
  flex-shrink: 0;
`;

const SessionName = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 400;
  color: rgba(19, 50, 56, 0.6);
  letter-spacing: 0.02em;
`;

const BanyaSteamSchedule = () => {
  const { t } = useTranslation();

  // Полное расписание Fri–Sun (10 слотов). Mon–Thu — те же слоты, но без первых трёх (до 15:00).
  const groups = t('banya.steam_schedule.groups', { returnObjects: true });
  const groupList = Array.isArray(groups) ? groups : [];
  const weekend = groupList.find((g) => Array.isArray(g.sessions) && g.sessions.length >= 10);
  const weekday = groupList.find((g) => g !== weekend && Array.isArray(g.sessions));
  const sessions = weekend?.sessions || [];
  const weekdayTimes = new Set((weekday?.sessions || []).map((s) => s.time));
  const badgeText = t('banya.steam_schedule.early_slot_badge', 'Fri – Sun only');

  const half = Math.ceil(sessions.length / 2);
  const firstHalf = sessions.slice(0, half);
  const secondHalf = sessions.slice(half);

  const renderItem = (session, index) => {
    const isWeekendOnly = !weekdayTimes.has(session.time);
    return (
      <ScheduleItem key={index}>
        <Time>{session.time}</Time>
        <Dash>&mdash;</Dash>
        <SessionName>{session.name}</SessionName>
        {isWeekendOnly && <EarlySlotBadge>{badgeText}</EarlySlotBadge>}
      </ScheduleItem>
    );
  };

  return (
    <SectionContainer>
      <ContentWrapper>
        <Overline>{t('banya.steam_schedule.overline', 'Weekly Schedule')}</Overline>
        <Title>{t('banya.steam_schedule.title', 'Steam Sessions')}</Title>
        <ScheduleNote
          dangerouslySetInnerHTML={{
            __html: t(
              'banya.steam_schedule.note',
              '<strong>Mon – Thu</strong> — sessions from 15:00 · <strong>Fri – Sun</strong> — sessions from 12:00'
            ),
          }}
        />

        <ScheduleGrid>
          <ScheduleColumn>{firstHalf.map(renderItem)}</ScheduleColumn>
          <ScheduleColumn>{secondHalf.map(renderItem)}</ScheduleColumn>
        </ScheduleGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default memo(BanyaSteamSchedule);
