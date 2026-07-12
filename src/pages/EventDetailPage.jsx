import React, { memo } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useParams, Navigate, useNavigate, useLocation } from 'react-router-dom';
import PageHead from '../components/layout/PageHead';
import PageScrollReset from '../components/common/PageScrollReset';
import { getEventBySlug, getEventBookingLink, localizeEvent } from '../data/events';
import { useCms } from '../context/CmsContext';

const Page = styled.div`
  background-color: #fffef6;
  min-height: 100vh;
  padding: 8rem 0 6rem;

  @media (min-width: 768px) {
    padding: 10rem 0 8rem;
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
  margin-bottom: 4rem;

  @media (min-width: 900px) {
    grid-template-columns: 0.8fr 1fr;
    gap: 4rem;
  }
`;

const PosterColumn = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background: #1a1a1a;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const DateChip = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.55);
  padding: 0.5rem 0.85rem;
  border: 1px solid rgba(19, 50, 56, 0.15);
  border-radius: 50px;
  width: fit-content;
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

const Hook = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.1rem;
  line-height: 1.5;
  color: rgba(19, 50, 56, 0.7);
  margin: 0;
`;

const MetaList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    font-family: 'Jost', sans-serif;
    font-size: 0.95rem;
    color: rgba(19, 50, 56, 0.6);
    display: flex;
    align-items: center;
    gap: 0.5rem;

    strong {
      color: #133238;
      font-weight: 600;
    }
  }
`;

const CtaRow = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1rem;
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
  margin-bottom: 3.5rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.4rem, 2.5vw, 1.75rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1.5rem;
`;

const Description = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(19, 50, 56, 0.7);
  margin: 0;
  max-width: 720px;
`;

const ScheduleList = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ScheduleCard = styled.div`
  background: #fff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

const ScheduleDate = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.5);
`;

const ScheduleTitle = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #133238;
  margin: 0;
  line-height: 1.3;
`;

const ScheduleDescription = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(19, 50, 56, 0.6);
  margin: 0;
`;

const EventDetailPage = () => {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const lang = (i18n.language || 'en').split('-')[0];
  const { events, getEventBookingLink: cmsBookingLink, phoneTel, loading } = useCms();
  const rawEvent = getEventBySlug(slug, events);
  const event = rawEvent ? localizeEvent(rawEvent, lang) : null;

  const handleBack = () => {
    const from = location.state?.from;
    if (from === '/events') {
      navigate('/events');
    } else {
      navigate('/#events');
    }
  };

  if (loading) {
    return null;
  }

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  const bookingLink = cmsBookingLink(rawEvent) || getEventBookingLink(event);

  return (
    <>
      <PageHead
        titleKey={`page_titles.event_${event.slug}`}
        defaultTitle={`${event.title} · KAIF`}
        description={event.shortDescription}
      />
      <PageScrollReset />

      <Page>
        <ContentWrapper>
          <BackLink type="button" onClick={handleBack}>
            ← {t('events.back', 'Back')}
          </BackLink>

          <HeroLayout>
            <PosterColumn>
              <img src={event.image} alt={event.title} />
            </PosterColumn>

            <InfoColumn>
              <DateChip>{event.date.full}</DateChip>
              <Title>{event.title}</Title>
              <Hook>{event.hook}</Hook>

              <MetaList>
                <li>
                  <strong>{t('events.meta.when', 'When')}:</strong> {event.date.full}
                </li>
                <li>
                  <strong>{t('events.meta.where', 'Where')}:</strong> {event.location}
                </li>
              </MetaList>

              <CtaRow>
                <PrimaryButton href={bookingLink} target="_blank" rel="noopener noreferrer">
                  {t('events.book', 'Book via WhatsApp')}
                </PrimaryButton>
                <SecondaryButton href={`tel:${phoneTel}`}>
                  {t('events.call', 'Call us')}
                </SecondaryButton>
              </CtaRow>
            </InfoColumn>
          </HeroLayout>

          {event.longDescription && (
            <Section>
              <SectionTitle>{t('events.about', 'About the event')}</SectionTitle>
              <Description>{event.longDescription}</Description>
            </Section>
          )}

          {event.schedule && event.schedule.length > 0 && (
            <Section>
              <SectionTitle>{t('events.program', 'Program')}</SectionTitle>
              <ScheduleList>
                {event.schedule.map((item, index) => (
                  <ScheduleCard key={index}>
                    <ScheduleDate>{item.date}</ScheduleDate>
                    <ScheduleTitle>{item.title}</ScheduleTitle>
                    <ScheduleDescription>{item.description}</ScheduleDescription>
                  </ScheduleCard>
                ))}
              </ScheduleList>
            </Section>
          )}
        </ContentWrapper>
      </Page>
    </>
  );
};

export default memo(EventDetailPage);
