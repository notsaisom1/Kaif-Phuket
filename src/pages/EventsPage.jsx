import React, { memo } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PageHead from '../components/layout/PageHead';
import PageScrollReset from '../components/common/PageScrollReset';
import { events, localizeEvent } from '../data/events';
import { useCms } from '../context/CmsContext';

const Section = styled.section`
  position: relative;
  padding: 8rem 0 6rem;
  background-color: #fffef6;
  min-height: 80vh;

  @media (min-width: 768px) {
    padding: 10rem 0 8rem;
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

const Title = styled.h1`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 800;
  line-height: 1.05;
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
  margin: 0 0 3rem;
  max-width: 600px;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  border: 1px solid ${(p) => (p.$featured ? '#C9A652' : 'rgba(19, 50, 56, 0.08)')};
  box-shadow: ${(p) => (p.$featured ? '0 10px 28px rgba(0, 0, 0, 0.12)' : 'none')};
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${(p) => (p.$featured ? '#C9A652' : 'rgba(19, 50, 56, 0.15)')};
    box-shadow: ${(p) =>
      p.$featured
        ? '0 18px 40px rgba(0, 0, 0, 0.18)'
        : '0 16px 40px rgba(19, 50, 56, 0.08)'};
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 0.85rem;
  right: 0.85rem;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  background: linear-gradient(135deg, #9B7A30 0%, #C9A652 50%, #E2CB99 100%);
  color: #1A0A08;
  font-family: 'Jost', sans-serif;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  border-radius: 999px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.4);

  &::before,
  &::after {
    content: '✦';
    font-size: 0.65rem;
    color: #4A0910;
  }
`;

const PosterWrapper = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: #1a1a1a;
`;

const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 55%;
  display: block;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.03);
  }
`;

const DateBadge = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  text-align: center;
  min-width: 54px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
`;

const DateDay = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  color: #133238;
  line-height: 1;
  letter-spacing: -0.02em;
`;

const DateMonth = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  color: rgba(19, 50, 56, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 2px;
`;

const Body = styled.div`
  padding: 1.25rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const EventTitle = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #133238;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  margin: 0;
`;

const EventHook = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  color: rgba(19, 50, 56, 0.55);
`;

const DetailsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.75rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.5);

  ${Card}:hover & {
    color: #133238;
  }
`;

const Arrow = styled.span`
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: translateX(4px);
  }
`;

const EmptyState = styled.div`
  padding: 4rem 0;
  color: rgba(19, 50, 56, 0.45);
  font-family: 'Jost', sans-serif;
  font-size: 1rem;
`;

const EventsPage = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];
  const { events: cmsEvents } = useCms();
  const list = cmsEvents?.length ? cmsEvents : events;
  const localizedEvents = list.map((e) => localizeEvent(e, lang));

  return (
    <>
      <PageHead
        titleKey="page_titles.events"
        defaultTitle="KAIF Events | Upcoming Parties, Fights & Festivals"
        description="Upcoming events at KAIF Sauna & Spa Phuket: festivals, fight nights, pool parties and banya experiences."
      />
      <PageScrollReset />

      <Section>
        <ContentWrapper>
          <Overline>{t('events.overline', "What's On")}</Overline>
          <Title>{t('events.page_title', 'Events at KAIF')}</Title>
          <Subtitle>
            {t(
              'events.page_subtitle',
              'Festivals, fight nights and seasonal experiences — all happening at KAIF.'
            )}
          </Subtitle>

          {localizedEvents.length === 0 ? (
            <EmptyState>{t('events.empty.text', 'Check back soon for new events')}</EmptyState>
          ) : (
            <Grid>
              {localizedEvents.map((event) => (
                <Card
                  key={event.slug}
                  to={`/events/${event.slug}`}
                  state={{ from: '/events' }}
                  $featured={event.featured}
                >
                  <PosterWrapper>
                    <PosterImage src={event.image} alt={event.title} loading="lazy" />
                    {event.featured && (
                      <FeaturedBadge>{t('events.featured', 'Featured')}</FeaturedBadge>
                    )}
                    <DateBadge>
                      <DateDay>{event.date.day}</DateDay>
                      <DateMonth>{event.date.month}</DateMonth>
                    </DateBadge>
                  </PosterWrapper>
                  <Body>
                    <EventTitle>{event.title}</EventTitle>
                    <EventHook>{event.hook}</EventHook>
                    <DetailsRow>
                      <span>{t('events.details', 'Details')}</span>
                      <Arrow>→</Arrow>
                    </DetailsRow>
                  </Body>
                </Card>
              ))}
            </Grid>
          )}
        </ContentWrapper>
      </Section>
    </>
  );
};

export default memo(EventsPage);
