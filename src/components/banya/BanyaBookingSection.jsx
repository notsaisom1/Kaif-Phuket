import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// === STYLED COMPONENTS — Minimalist Pasture Style ===

const SectionContainer = styled.section`
  position: relative;
  padding: 6rem 0;
  background-color: #133238;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }

  /* Background image */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/images/banya/gallery/banya-steam-room.webp');
    background-size: cover;
    background-position: center;
    z-index: 0;
  }

  /* Dark overlay 40% */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

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
  color: rgba(255, 254, 246, 0.4);
  margin-bottom: 1.25rem;
  display: inline-flex;
  align-items: center;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1.5px;
    background: rgba(255, 254, 246, 0.2);
  }

  &::before {
    margin-right: 1rem;
  }

  &::after {
    margin-left: 1rem;
  }
`;

const Title = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #fffef6;
  text-transform: uppercase;
  margin: 0 0 1.5rem;
`;

const Description = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 254, 246, 0.55);
  font-weight: 400;
  max-width: 550px;
  margin: 0 auto 3rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 2.5rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ContactCard = styled.div`
  background: rgba(255, 254, 246, 0.05);
  border: 1px solid rgba(255, 254, 246, 0.08);
  border-radius: 12px;
  padding: 1.75rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};

  &:hover {
    border-color: rgba(255, 254, 246, 0.15);
    background: rgba(255, 254, 246, 0.08);
  }
`;

const ContactTitle = styled.h4`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 800;
  color: #fffef6;
  margin: 0 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ContactValue = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 254, 246, 0.5);
  margin: 0;
  font-weight: 400;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.25rem;
  }
`;

const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: #fffef6;
  color: #133238;
  border: none;
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: transparent;
  color: rgba(255, 254, 246, 0.8);
  border: 1px solid rgba(255, 254, 246, 0.2);
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 254, 246, 0.5);
    color: #fffef6;
  }
`;

// === COMPONENT ===

const BanyaBookingSection = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    const phoneNumber = t('common.phone_number', '+66 62 480 5877');
    const message = encodeURIComponent(t('common.whatsapp_messages.book_banya', 'Hello! I would like to book the Russian Banya'));
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const handleContactClick = () => {
    const phoneNumber = t('common.phone_number', '+66 62 480 5877');
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/h7PzpHpBeurg7eK18', '_blank');
  };

  const contactInfo = [
    {
      title: t('banya.booking.contact.whatsapp.title', 'WhatsApp'),
      value: t('banya.booking.contact.whatsapp.value', 'Book via WhatsApp'),
      action: handleWhatsAppClick
    },
    {
      title: t('banya.booking.contact.location.title', 'Location'),
      value: t('banya.booking.contact.location.value', 'Kathu, Phuket'),
      action: handleLocationClick
    },
    {
      title: t('banya.booking.contact.hours.title', 'Hours'),
      value: t('banya.booking.contact.hours.value', '17:00 - 20:00'),
      action: null
    }
  ];

  return (
    <SectionContainer>
      <ContentWrapper>
        <Overline>{t('banya.booking.badge', 'Booking')}</Overline>
        <Title>{t('banya.booking.cta.title_plain', 'Book the Banya')}</Title>
        <Description>
          {t('banya.booking.cta.description', 'Contact us for detailed information about prices, availability and features of our banya programs')}
        </Description>

        <ContactGrid>
          {contactInfo.map((contact, index) => (
            <ContactCard
              key={index}
              $clickable={!!contact.action}
              onClick={contact.action}
            >
              <ContactTitle>{contact.title}</ContactTitle>
              <ContactValue>{contact.value}</ContactValue>
            </ContactCard>
          ))}
        </ContactGrid>

        <ButtonGroup>
          <PrimaryButton onClick={handleWhatsAppClick}>
            {t('banya.booking.book_online_button', 'Book Online')}
          </PrimaryButton>
          <SecondaryButton onClick={handleContactClick}>
            {t('banya.booking.call_now_button', 'Call Now')}
          </SecondaryButton>
        </ButtonGroup>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default BanyaBookingSection;
