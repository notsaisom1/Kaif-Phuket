import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { events, localizeEvent } from '../../data/events';
import { useCms } from '../../context/CmsContext';

const SectionContainer = styled.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;
  touch-action: pan-y;
  overscroll-behavior: auto;

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

const HeaderRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
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
  margin: 0;
  max-width: 800px;
`;

const ViewAllLink = styled(Link)`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.6);
  text-decoration: none;
  border-bottom: 1px solid rgba(19, 50, 56, 0.2);
  padding-bottom: 2px;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: #133238;
    border-color: #133238;
  }
`;

const EventsGrid = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0 1.25rem 1rem;
  margin: 0 -1.25rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    gap: 1.5rem;
    padding: 0 2rem 1rem;
    margin: 0 -2rem;
  }
`;

const EventCard = styled(Link)`
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
  flex: 0 0 82%;
  scroll-snap-align: start;

  @media (min-width: 768px) {
    flex: 0 0 320px;
  }

  @media (min-width: 1024px) {
    flex: 0 0 340px;
  }

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

  ${EventCard}:hover & {
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

const CardBody = styled.div`
  padding: 1.25rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const EventTitle = styled.h3`
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

  ${EventCard}:hover & {
    color: #133238;
  }
`;

const Arrow = styled.span`
  transition: transform 0.3s ease;

  ${EventCard}:hover & {
    transform: translateX(4px);
  }
`;

const EmptyState = styled.div`
  grid-column: 1 / -1;
  padding: 4rem 2rem;
  text-align: center;
  color: rgba(19, 50, 56, 0.4);
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
`;

const EventsSection = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];
  const { events: cmsEvents } = useCms();
  const list = cmsEvents?.length ? cmsEvents : events;
  const localizedEvents = list.map((e) => localizeEvent(e, lang));

  // No events — hide the section entirely from the homepage.
  if (localizedEvents.length === 0) return null;

  return (
    <SectionContainer id="events">
      <ContentWrapper>
        <Overline>{t('events.overline', "What's On")}</Overline>
        <HeaderRow>
          <Title>{t('events.title', 'Upcoming Events')}</Title>
          {localizedEvents.length > 0 && (
            <ViewAllLink to="/events">
              {t('events.view_all', 'View all')} →
            </ViewAllLink>
          )}
        </HeaderRow>

        <EventsGrid>
          {localizedEvents.length > 0 ? (
            localizedEvents.map((event) => (
              <EventCard
                key={event.slug}
                to={`/events/${event.slug}`}
                state={{ from: '/' }}
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
                <CardBody>
                  <EventTitle>{event.title}</EventTitle>
                  <EventHook>{event.hook}</EventHook>
                  <DetailsRow>
                    <span>{t('events.details', 'Details')}</span>
                    <Arrow>→</Arrow>
                  </DetailsRow>
                </CardBody>
              </EventCard>
            ))
          ) : (
            <EmptyState>{t('events.empty.text', 'Check back soon for new events')}</EmptyState>
          )}
        </EventsGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default EventsSection;
