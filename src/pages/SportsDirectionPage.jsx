import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import {
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import PageHead from '../components/layout/PageHead';
import PageScrollReset from '../components/common/PageScrollReset';
import {
  getDirectionBySlug,
  buildWhatsappLink,
  scheduleDays
} from '../data/sportsDirections';

const Page = styled.div`
  background-color: #fffef6;
  min-height: 100vh;
  padding: 8rem 0 6rem;

  @media (min-width: 768px) {
    padding: 10rem 0 8rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

const BackLink = styled.button`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.55);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 2.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: #133238;
  }
`;

const HeroLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: start;
  margin-bottom: 5rem;

  @media (min-width: 900px) {
    grid-template-columns: 1.05fr 1fr;
    gap: 3.5rem;
  }
`;

const GalleryColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const MainImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 16px;
  background: #1a1a1a;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: opacity 0.3s ease;
  }
`;

const ThumbRow = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.$count}, 1fr);
  gap: 0.6rem;
`;

const Thumb = styled.button`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid ${props => props.$active ? '#133238' : 'transparent'};
  padding: 0;
  cursor: pointer;
  background: #1a1a1a;
  transition: border-color 0.2s ease, transform 0.2s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: ${props => props.$active ? 1 : 0.75};
    transition: opacity 0.2s ease;
  }

  &:hover {
    border-color: rgba(19, 50, 56, 0.5);
    img { opacity: 1; }
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Overline = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
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

const Title = styled.h1`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0;
`;

const LeadText = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.1rem;
  line-height: 1.55;
  color: rgba(19, 50, 56, 0.75);
  margin: 0;
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: 0.5rem 0 0.25rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  color: rgba(19, 50, 56, 0.55);

  svg {
    width: 18px;
    height: 18px;
    color: rgba(19, 50, 56, 0.4);
  }
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin: 0.5rem 0 0.25rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  color: rgba(19, 50, 56, 0.7);

  svg {
    width: 18px;
    height: 18px;
    color: rgba(19, 50, 56, 0.35);
    flex-shrink: 0;
  }
`;

const Description = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(19, 50, 56, 0.7);
  margin: 0;
`;

const CtaRow = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 0.75rem;
`;

const PrimaryButton = styled.a`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fffef6;
  background: #133238;
  padding: 1rem 1.75rem;
  border-radius: 50px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #0a1f22;
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled.a`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #133238;
  background: transparent;
  padding: 1rem 1.75rem;
  border: 1px solid rgba(19, 50, 56, 0.2);
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #133238;
    color: #fffef6;
    border-color: #133238;
  }
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 800;
  letter-spacing: -0.01em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1.5rem;
`;

const DayTabs = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const DayTab = styled.button`
  padding: 0.6rem 1.2rem;
  background: ${props => props.$active ? '#133238' : 'transparent'};
  color: ${props => props.$active ? '#fffef6' : 'rgba(19, 50, 56, 0.6)'};
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
    padding: 0.5rem 0.95rem;
    font-size: 0.75rem;
    .short { display: inline; }
    .full { display: none; }
  }
`;

const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
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
  font-size: 0.9rem;
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

const BookClassButton = styled.button`
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
  padding: 2.5rem;
  color: rgba(19, 50, 56, 0.4);
  font-family: 'Jost', sans-serif;
  font-size: 1rem;
  grid-column: 1 / -1;
  border: 1px dashed rgba(19, 50, 56, 0.12);
  border-radius: 12px;
`;

const NoticeBox = styled.div`
  padding: 1.5rem 1.75rem;
  background: rgba(19, 50, 56, 0.04);
  border-radius: 12px;
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  color: rgba(19, 50, 56, 0.7);
  line-height: 1.6;
`;

const SportsDirectionPage = () => {
  const { t } = useTranslation();
  const { direction } = useParams();
  const navigate = useNavigate();
  const data = getDirectionBySlug(direction);

  const [activeImage, setActiveImage] = useState(0);
  const [activeDay, setActiveDay] = useState('monday');

  useEffect(() => {
    const dayIndex = new Date().getDay();
    const map = ['monday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    setActiveDay(map[dayIndex]);
  }, []);

  if (!data) {
    return <Navigate to="/sports" replace />;
  }

  const title = t(data.titleKey, data.defaultTitle);
  const tag = t(data.tagKey, data.defaultTag);
  const lead = t(data.descriptionKey, data.defaultDescription);
  const longDesc = t(data.longDescriptionKey, data.defaultLongDescription);
  const extraDesc = t(data.extraDescriptionKey, data.defaultExtraDescription);

  const currentClasses =
    (data.schedule && data.schedule[activeDay]) || [];

  const handleBookClass = (classItem) => {
    const className = t(`sports.schedule.classes.${classItem.titleKey}`);
    const dayName = t(`sports.schedule.days.${activeDay}`);
    const message =
      `Hello! I would like to book a class at KAIF.\n\n` +
      `Direction: ${title}\nClass: ${className}\nDay: ${dayName}\nTime: ${classItem.time}`;
    window.open(buildWhatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <PageHead
        titleKey={`page_titles.sports_${data.id}`}
        defaultTitle={`${title} · KAIF Sports`}
        description={lead}
        ogImage={data.images[0]}
      />
      <PageScrollReset />

      <Page>
        <ContentWrapper>
          <BackLink type="button" onClick={() => navigate('/sports')}>
            ← {t('sports.direction.back', 'Back to Sports')}
          </BackLink>

          <HeroLayout>
            <GalleryColumn>
              <MainImageWrapper>
                <img
                  key={activeImage}
                  src={data.images[activeImage]}
                  alt={title}
                  loading="eager"
                />
              </MainImageWrapper>
              {data.images.length > 1 && (
                <ThumbRow $count={data.images.length}>
                  {data.images.map((src, idx) => (
                    <Thumb
                      key={src}
                      $active={activeImage === idx}
                      onClick={() => setActiveImage(idx)}
                      aria-label={`${title} ${idx + 1}`}
                    >
                      <img src={src} alt="" loading="lazy" />
                    </Thumb>
                  ))}
                </ThumbRow>
              )}
            </GalleryColumn>

            <InfoColumn>
              <Overline>{tag}</Overline>
              <Title>{title}</Title>
              <LeadText>{lead}</LeadText>

              <MetaRow>
                <MetaItem>
                  <ClockIcon />
                  <span>{data.hours}</span>
                </MetaItem>
                <MetaItem>
                  <UserGroupIcon />
                  <span>
                    {t('sports.facilities.capacity', 'Up to {{count}}', { count: data.capacity })}
                  </span>
                </MetaItem>
              </MetaRow>

              <FeaturesList>
                {data.features.map((f, i) => (
                  <FeatureItem key={i}>
                    <CheckCircleIcon />
                    <span>{t(f.key, f.default)}</span>
                  </FeatureItem>
                ))}
              </FeaturesList>

              <CtaRow>
                <PrimaryButton
                  href={buildWhatsappLink(data.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('sports.facilities.book_button', 'Book a Session')}
                </PrimaryButton>
                <SecondaryButton href="tel:+66624805877">
                  {t('events.call', 'Call us')}
                </SecondaryButton>
              </CtaRow>
            </InfoColumn>
          </HeroLayout>

          <Section>
            <SectionTitle>{t('sports.direction.about', 'About')}</SectionTitle>
            <Description>{longDesc}</Description>
            {extraDesc && (
              <Description style={{ marginTop: '1rem' }}>{extraDesc}</Description>
            )}
          </Section>

          <Section>
            <SectionTitle>{t('sports.direction.schedule', 'Schedule')}</SectionTitle>
            {data.schedule ? (
              <>
                <DayTabs>
                  {scheduleDays.map((day) => (
                    <DayTab
                      key={day.key}
                      $active={activeDay === day.key}
                      onClick={() => setActiveDay(day.key)}
                    >
                      <span className="full">{t(`sports.schedule.days.${day.labelKey}`)}</span>
                      <span className="short">{t(`sports.schedule.days.${day.shortKey}`)}</span>
                    </DayTab>
                  ))}
                </DayTabs>

                <ScheduleGrid>
                  {currentClasses.length === 0 ? (
                    <EmptyMessage>
                      {t('sports.schedule.no_classes', 'No classes on this day')}
                    </EmptyMessage>
                  ) : (
                    currentClasses.map((classItem, i) => (
                      <ClassCard key={i}>
                        <ClassTime>
                          <ClockIcon />
                          <span>{classItem.time}</span>
                        </ClassTime>
                        <ClassTitle>
                          {t(`sports.schedule.classes.${classItem.titleKey}`)}
                        </ClassTitle>
                        <ClassMeta>
                          <ClockIcon />
                          {classItem.duration} {t('sports.schedule.minutes', 'min')}
                        </ClassMeta>
                        <BookClassButton onClick={() => handleBookClass(classItem)}>
                          {t('sports.schedule.book', 'Sign Up')}
                        </BookClassButton>
                      </ClassCard>
                    ))
                  )}
                </ScheduleGrid>
              </>
            ) : (
              <NoticeBox>
                {t(data.scheduleNoteKey, data.scheduleNoteDefault)}
              </NoticeBox>
            )}
          </Section>
        </ContentWrapper>
      </Page>
    </>
  );
};

export default memo(SportsDirectionPage);
