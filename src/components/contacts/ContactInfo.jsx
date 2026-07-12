import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import BookingModal from '../booking/BookingModal';
import { useCms } from '../../context/CmsContext';
import { 
  Section,
  ContentContainer,
  SectionTitle,
  SectionSubtitle,
  Grid
} from '../ui/CommonComponents';

const ContactCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid rgba(144, 179, 167, 0.1);
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    border-color: rgba(144, 179, 167, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
  }
`;

const IconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: 0 8px 20px rgba(144, 179, 167, 0.3);
  
  svg {
    width: 30px;
    height: 30px;
    color: white;
  }
`;

const ContactTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.heading};
`;

const ContactDetails = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.8;
  font-size: 1rem;
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.colors.zones.spa};
      text-decoration: underline;
    }
  }
`;

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  background: rgba(144, 179, 167, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(144, 179, 167, 0.2);
    transform: translateX(5px);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const ContactInfo = () => {
  const { t } = useTranslation();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const {
    phoneDisplay,
    phoneTel,
    address,
    addressCountry,
    hoursLabel,
    mapsUrl,
  } = useCms();

  return (
    <Section>
      <ContentContainer>
        <SectionTitle>
          {t('contacts.info.title', 'Contact Information')}
        </SectionTitle>
        
        <SectionSubtitle>
          {t('contacts.info.subtitle', 'Contact us in a convenient way')}
        </SectionSubtitle>

        <Grid style={{ marginTop: '4rem' }}>
          {/* Карточка адреса */}
          <ContactCard>
            <IconContainer>
              <MapPinIcon />
            </IconContainer>
            <ContactTitle>{t('contacts.info.address.title', 'Address')}</ContactTitle>
            <ContactDetails>
              <div>
                <div>{address}</div>
                <div>{addressCountry}</div>
                <ContactLink 
                  href={mapsUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('contacts.info.buttons.get_directions', 'Get Directions')}
                  <ArrowTopRightOnSquareIcon />
                </ContactLink>
              </div>
            </ContactDetails>
          </ContactCard>

          {/* Карточка телефона */}
          <ContactCard>
            <IconContainer>
              <PhoneIcon />
            </IconContainer>
            <ContactTitle>{t('contacts.info.phone.title', 'Phone')}</ContactTitle>
            <ContactDetails>
              <div>
                <div>
                  <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
                </div>
                <div style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  {t('contacts.info.phone.hours', 'WhatsApp Available')}
                </div>
                <ContactLink
                  as="button"
                  onClick={() => setIsBookingModalOpen(true)}
                  style={{ cursor: 'pointer', border: 'none' }}
                >
                  {t('contacts.info.buttons.contact', 'Contact')}
                  <ArrowTopRightOnSquareIcon />
                </ContactLink>
              </div>
            </ContactDetails>
          </ContactCard>

          {/* Карточка времени работы */}
          <ContactCard>
            <IconContainer>
              <ClockIcon />
            </IconContainer>
            <ContactTitle>{t('contacts.info.hours.title', 'Opening Hours')}</ContactTitle>
            <ContactDetails>
              <div>
                <div>{hoursLabel}</div>
                <div>{t('contacts.info.hours.booking', 'Booking 24/7')}</div>
                <ContactLink 
                  href="https://n807534.yclients.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('contacts.info.buttons.book', 'Book Now')}
                  <ArrowTopRightOnSquareIcon />
                </ContactLink>
              </div>
            </ContactDetails>
          </ContactCard>
        </Grid>
      </ContentContainer>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        service={t('contacts.booking.service', 'Общий запрос')}
        source="Contacts Page"
      />
    </Section>
  );
};

export default ContactInfo; 